import { NextResponse } from 'next/server';

const RSS_FEEDS = [
  { url: 'https://venturebeat.com/category/ai/feed/', category: 'AI' },
  { url: 'https://www.technologyreview.com/topic/artificial-intelligence/feed', category: 'AI' },
  { url: 'https://www.theverge.com/ai-artificial-intelligence/rss/index.xml', category: 'AI' },
  { url: 'https://hbr.org/subscriberContent/rss', category: 'Tech Consulting' },
  { url: 'https://www.mckinsey.com/feeds/rss', category: 'Tech Consulting' },
  { url: 'https://www.gartner.com/en/newsroom/rss', category: 'Tech Consulting' },
  { url: 'https://www.smashingmagazine.com/feed/', category: 'Digital Design' },
  { url: 'https://alistapart.com/main/feed/', category: 'Digital Design' },
  { url: 'https://uxdesign.cc/feed', category: 'Digital Design' },
  { url: 'https://css-tricks.com/feed/', category: 'Digital Design' },
];

// Revalidate once per day (86400 seconds)
export const revalidate = 86400;

function extractMatch(text: string, ...patterns: RegExp[]): string {
  for (const pattern of patterns) {
    const match = pattern.exec(text);
    if (match) return match[1] || match[2] || '';
  }
  return '';
}
function parseItems(xml: string): string[] {
  const items: string[] = [];
  const regex = /<item>([\s\S]*?)<\/item>/g;
  let match;
  while ((match = regex.exec(xml)) !== null) {
    items.push(match[1]);
  }
  return items;
}

async function parseRSS(url: string, category: string) {
  const res = await fetch(url, {
    headers: { 'User-Agent': 'Mozilla/5.0 (compatible; ThreshPortal/1.0)' },
  });

  if (!res.ok) throw new Error(`Failed to fetch ${url}: ${res.status}`);

  const text = await res.text();
  const items = parseItems(text).slice(0, 5);

  return items
    .map((item) => {
      const title = extractMatch(
        item,
        /<title><!\[CDATA\[(.*?)\]\]><\/title>/,
        /<title>(.*?)<\/title>/
      );

      const link = extractMatch(
        item,
        /<link>(.*?)<\/link>/,
        /<link.*?href="(.*?)"/
      );

      const pubDate = extractMatch(item, /<pubDate>(.*?)<\/pubDate>/);

      const rawDescription = extractMatch(
        item,
        /<description><!\[CDATA\[(.*?)\]\]><\/description>/,
        /<description>(.*?)<\/description>/
      );

      const description = rawDescription.replace(/<[^>]+>/g, '').slice(0, 150).trim();

      return {
        title: title.replace(/<[^>]+>/g, '').trim(),
        link: link.trim(),
        pubDate,
        description,
        category,
      };
    })
    // Filter out blank or CSS-only articles
    .filter((a) => 
      a.title.length > 5 && 
      a.link.startsWith('http') &&
      !a.title.toLowerCase().includes('css') &&
      a.description.length > 0
    );
}

export async function GET() {
  try {
    const results = await Promise.allSettled(
      RSS_FEEDS.map((feed) => parseRSS(feed.url, feed.category))
    );

    results.forEach((result, i) => {
      if (result.status === 'rejected') {
        console.warn(`Feed failed: ${RSS_FEEDS[i].url} —`, result.reason);
      }
    });

    const articles = results
      .filter((r): r is PromiseFulfilledResult<any[]> => r.status === 'fulfilled')
      .flatMap((r) => r.value)
      .sort((a, b) => new Date(b.pubDate).getTime() - new Date(a.pubDate).getTime());

    return NextResponse.json({ articles });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch news' }, { status: 500 });
  }
}