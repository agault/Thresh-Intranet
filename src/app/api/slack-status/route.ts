import { NextRequest, NextResponse } from 'next/server';
// import emoji from 'node-emoji';
import * as emoji from 'node-emoji';

export async function GET(request: NextRequest) {
  const userId = request.nextUrl.searchParams.get('userId');

  if (!userId) {
    return NextResponse.json({ error: 'Missing userId' }, { status: 400 });
  }

  const res = await fetch(
    `https://slack.com/api/users.profile.get?user=${userId}`,
    {
      headers: {
        Authorization: `Bearer ${process.env.SLACK_BOT_TOKEN}`,
        'Content-Type': 'application/json',
      },
      // Revalidate every 60 seconds so status stays fresh
      next: { revalidate: 60 },
    }
  );

  const data = await res.json();

  if (!data.ok) {
    return NextResponse.json({ emoji: '', text: 'Unavailable' });
  }

  const rawEmoji = data.profile?.status_emoji ?? '';
  
  // node-emoji .get() converts ":cat_scream:" to "😱"
  // We use .replace(/:/g, '') as a fallback to strip colons if no match is found
  const parsedEmoji = emoji.get(rawEmoji) || rawEmoji.replace(/:/g, '');

  return NextResponse.json({
    emoji: parsedEmoji,
    text: data.profile?.status_text ?? '',
  });
}