'use client';

import { useState, useEffect } from 'react';
import { TrendingUp, Activity, Award, ExternalLink } from 'lucide-react';

interface NewsItem {
  title: string;
  source: string;
  url: string;
  date: string;
}

export default function Dashboard() {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulated news data (in production, this would fetch from API)
    const mockNews: NewsItem[] = [
      {
        title: 'AI Agents Revolutionize Enterprise Workflows',
        source: 'TechCrunch',
        url: '#',
        date: '2 hours ago'
      },
      {
        title: 'The Future of Digital Product Design in 2026',
        source: 'The Verge',
        url: '#',
        date: '5 hours ago'
      },
      {
        title: 'Cloudflare Announces New Edge Computing Features',
        source: 'VentureBeat',
        url: '#',
        date: '1 day ago'
      },
      {
        title: 'React 19 Release: What You Need to Know',
        source: 'Hacker News',
        url: '#',
        date: '1 day ago'
      },
      {
        title: 'Design Systems at Scale: Best Practices',
        source: 'MIT Technology Review',
        url: '#',
        date: '2 days ago'
      }
    ];
    
    setTimeout(() => {
      setNews(mockNews);
      setLoading(false);
    }, 500);
  }, []);

  const metrics = [
    { label: 'Active Projects', value: '5', icon: Activity, color: 'bg-green-500' },
    { label: 'Team Velocity', value: '87%', icon: TrendingUp, color: 'bg-blue-500' },
    { label: 'Recent Wins', value: '3', icon: Award, color: 'bg-purple-500' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-4xl font-bold mb-8">Dashboard</h1>

      {/* Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {metrics.map((metric) => {
          const Icon = metric.icon;
          return (
            <div key={metric.label} className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-500 text-sm">{metric.label}</p>
                  <p className="text-3xl font-bold mt-2">{metric.value}</p>
                </div>
                <div className={`${metric.color} p-3 rounded-lg`}>
                  <Icon className="text-white" size={24} />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* News Feed */}
      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">Tech News & Insights</h2>
          <div className="flex gap-2">
            <button className="px-3 py-1 rounded-md bg-thresh-blue text-white text-sm">All</button>
            <button className="px-3 py-1 rounded-md bg-gray-100 text-gray-700 text-sm hover:bg-gray-200">AI</button>
            <button className="px-3 py-1 rounded-md bg-gray-100 text-gray-700 text-sm hover:bg-gray-200">Design</button>
            <button className="px-3 py-1 rounded-md bg-gray-100 text-gray-700 text-sm hover:bg-gray-200">Dev</button>
          </div>
        </div>

        {loading ? (
          <div className="text-center py-8 text-gray-500">Loading news...</div>
        ) : (
          <div className="space-y-4">
            {news.map((item, index) => (
              <a
                key={index}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block p-4 border border-gray-200 rounded-lg hover:border-thresh-blue hover:shadow-md transition-all group"
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg group-hover:text-thresh-blue transition-colors">
                      {item.title}
                    </h3>
                    <div className="flex items-center gap-3 mt-2 text-sm text-gray-500">
                      <span>{item.source}</span>
                      <span>•</span>
                      <span>{item.date}</span>
                    </div>
                  </div>
                  <ExternalLink className="text-gray-400 group-hover:text-thresh-blue transition-colors" size={20} />
                </div>
              </a>
            ))}
          </div>
        )}
      </div>

      {/* Quick Links */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-xl font-bold mb-4">Quick Access</h3>
          <div className="space-y-3">
            <a href="/tools" className="block text-thresh-blue hover:underline">→ Tools & Apps</a>
            <a href="/sops" className="block text-thresh-blue hover:underline">→ SOPs & Documentation</a>
            <a href="/team" className="block text-thresh-blue hover:underline">→ Team Directory</a>
            <a href="/projects" className="block text-thresh-blue hover:underline">→ Active Projects</a>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-xl font-bold mb-4">Recent Updates</h3>
          <div className="space-y-3 text-sm text-gray-600">
            <p>• New onboarding guide for Product Managers</p>
            <p>• Updated coding standards in SOPs</p>
            <p>• Charter project moved to QA phase</p>
            <p>• Team meeting scheduled for Friday 2pm</p>
          </div>
        </div>
      </div>
    </div>
  );
}
