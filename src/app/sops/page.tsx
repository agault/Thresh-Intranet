'use client';

import { useState } from 'react';
import { Search, FileText, Download } from 'lucide-react';
type SOPItem = {
  title: string;
  description: string;
  href: string;
  download?: boolean;
};

type SOPCategory = {
  category: string;
  items: SOPItem[];
};
const sops = [
  {
    category: 'Onboarding',
    items: [
      { title: 'General Onboarding', description: 'First week guide for all new hires', href: '#', download: false },
      { title: 'Product Manager Onboarding', description: 'PM-specific processes and tools', href: '#', download: false },
      { title: 'Designer Onboarding', description: 'Design workflow and tool setup', href: '#', download: false },
      { title: 'Developer Onboarding', description: 'Dev environment and coding standards', href: '#', download: false },
    ]
  },
  {
    category: 'Brand Guidelines',
    items: [
      { title: 'Logo Usage', description: 'Thresh logo guidelines and usage rules', href: '#', download: false },
      { title: 'Color Palette', description: 'Official brand colors and hex codes', href: '#', download: false },
      { title: 'Typography', description: 'Font families and hierarchy', href: '#', download: false },
      { title: 'Voice & Tone', description: 'Brand communication standards', href: '#', download: false },
    ]
  },
  {
    category: 'Design Standards',
    items: [
      { title: 'UI Component Library', description: 'Reusable design components', href: '#', download: false },
      { title: 'Figma File Organization', description: 'How to structure Figma projects', href: '#', download: false },
      { title: 'Design Review Process', description: 'Steps for design feedback and approval', href: '#', download: false },
    ]
  },
  {
    category: 'Coding Standards',
    items: [
      { title: 'JavaScript Style Guide', description: 'Code formatting and best practices', href: '#', download: false },
      { title: 'React Best Practices', description: 'Component patterns and conventions', href: '#', download: false },
      { title: 'Git Workflow', description: 'Branching strategy and commit guidelines', href: '#', download: false },
      { title: 'Code Review Checklist', description: 'What to look for in PRs', href: '#', download: false },
    ]
  },
  // Templates and Standard Assets stay the same with download: true
]
export default function SOPsPage() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredSops = sops.map(category => ({
    ...category,
    items: category.items.filter(item =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(category => category.items.length > 0);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-4xl font-bold mb-8">SOPs & Knowledge Base</h1>

      {/* Search */}
      <div className="mb-8">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="Search documentation..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-thresh-blue focus:border-transparent"
          />
        </div>
      </div>

      {/* SOPs by Category */}
      <div className="space-y-8">
        {filteredSops.map(category => (
          <div key={category.category}>
            <h2 className="text-2xl font-bold mb-4">{category.category}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {category.items.map(item => (
                <a
                  key={item.title}
                  href={item.href}
                  className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition-shadow border border-gray-200 hover:border-thresh-blue group"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        {item.download ? (
                          <Download size={20} className="text-thresh-blue" />
                        ) : (
                          <FileText size={20} className="text-thresh-blue" />
                        )}
                        <h3 className="font-bold text-lg group-hover:text-thresh-blue transition-colors">
                          {item.title}
                        </h3>
                      </div>
                      <p className="text-gray-600 text-sm">{item.description}</p>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>

      {filteredSops.length === 0 && (
        <div className="text-center py-12 text-gray-500">
          No results found for &quot;{searchTerm}&quot;
        </div>
      )}
    </div>
  );
}
