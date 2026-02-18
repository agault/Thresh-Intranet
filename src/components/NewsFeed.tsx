'use client';

import React, { useEffect, useState } from 'react';

type Article = {
  title: string;
  link: string;
  pubDate: string;
  description: string;
  category: 'AI' | 'Tech Consulting' | 'Digital Design';
};

const categoryColors: Record<string, string> = {
  'AI': 'bg-purple-100 text-purple-700',
  'Tech Consulting': 'bg-blue-100 text-blue-700',
  'Digital Design': 'bg-pink-100 text-pink-700',
};

const categories = ['All', 'AI', 'Tech Consulting', 'Digital Design'];

const ARTICLES_PER_PAGE = 5;

export default function NewsFeed() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [filter, setFilter] = useState<string>('All');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    fetch('/api/news')
      .then((res) => res.json())
      .then((data) => {
        if (data.error) throw new Error(data.error);
        setArticles(data.articles || []);
        setLoading(false);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  }, []);

  // Reset showAll when filter changes
  useEffect(() => {
    setShowAll(false);
  }, [filter]);

  const filtered = filter === 'All' ? articles : articles.filter((a) => a.category === filter);
  const visible = showAll ? filtered : filtered.slice(0, ARTICLES_PER_PAGE);

  return (
    <div className="p-4">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold text-thresh-blue">Tech News</h2>
        {!loading && (
          <span className="text-xs text-gray-400">
            Showing {visible.length} of {filtered.length} articles
          </span>
        )}
      </div>

      {/* Filter Tabs */}
      <div className="flex gap-2 mb-4 flex-wrap">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
              filter === cat
                ? 'bg-thresh-blue text-white'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Loading Skeletons */}
      {loading && (
        <div className="space-y-3">
          {[0, 1, 2, 3, 4].map((i) => (
            <div key={i} className="h-20 rounded-lg bg-gray-100 animate-pulse" />
          ))}
        </div>
      )}

      {/* Error */}
      {!loading && error && (
        <p className="text-sm text-red-400">
          Failed to load news. Check your console for details.
        </p>
      )}

      {/* Empty */}
      {!loading && !error && filtered.length === 0 && (
        <p className="text-sm text-gray-400">No articles found for this category.</p>
      )}

      {/* Articles */}
      {!loading && !error && filtered.length > 0 && (
        <div className="space-y-3">
          {visible.map((article, i) => (
            <a
              key={i}
              href={article.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block p-4 rounded-lg border border-gray-100 hover:border-thresh-blue hover:shadow-sm transition-all"
            >
              <div className="flex items-center justify-between gap-2 mb-2">
                <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${categoryColors[article.category]}`}>
                  {article.category}
                </span>
                <span className="text-xs text-gray-400">
                  {article.pubDate
                    ? new Date(article.pubDate).toLocaleDateString('en-US', {
                        month: 'short',
                        day: 'numeric',
                        year: 'numeric',
                      })
                    : ''}
                </span>
              </div>
              <h3 className="font-semibold text-gray-800 text-sm leading-snug">
                {article.title}
              </h3>
              {article.description && (
                <p className="mt-1 text-xs text-gray-500 line-clamp-2">
                  {article.description}...
                </p>
              )}
            </a>
          ))}

          {/* Show More / Show Less */}
          {filtered.length > ARTICLES_PER_PAGE && (
            <button
              onClick={() => setShowAll(!showAll)}
              className="w-full mt-2 py-2 text-sm text-thresh-blue hover:underline"
            >
              {showAll ? 'Show Less ↑' : `Show More (${filtered.length - ARTICLES_PER_PAGE} more) ↓`}
            </button>
          )}
        </div>
      )}
    </div>
  );
}