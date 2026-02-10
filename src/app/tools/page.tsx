'use client';

import { useState } from 'react';
import { tools } from '@/data/tools';
import { Search, ExternalLink, X, CheckCircle, XCircle } from 'lucide-react';

export default function ToolsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedTool, setSelectedTool] = useState<string | null>(null);

  const categories = ['all', 'design', 'development', 'communication', 'ai', 'security', 'productivity'];

  const filteredTools = tools.filter(tool => {
    const matchesSearch = tool.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         tool.tagline.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || tool.category.includes(selectedCategory);
    return matchesSearch && matchesCategory;
  });

  const tool = selectedTool ? tools.find(t => t.id === selectedTool) : null;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-4xl font-bold mb-8">Tools & Apps</h1>
      <h2 className="text-4xl font mb-6">Overview & Guidance</h2>

      {/* Search and Filter */}
      <div className="mb-8 space-y-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="Search tools..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-thresh-blue focus:border-transparent"
          />
        </div>

        <div className="flex gap-2 flex-wrap">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                selectedCategory === category
                  ? 'bg-thresh-blue text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* Tools Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredTools.map(tool => (
          <div
            key={tool.id}
            className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition-shadow cursor-pointer"
            onClick={() => setSelectedTool(tool.id)}
          >
            <div className="text-5xl mb-4">{tool.logo}</div>
            <h3 className="text-xl font-bold mb-2">{tool.name}</h3>
            <p className="text-gray-600 text-sm mb-4">{tool.tagline}</p>
            <div className="flex gap-2">
              <a
                href={tool.launch_url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-thresh-blue text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
                onClick={(e) => e.stopPropagation()}
              >
                Launch <ExternalLink size={14} />
              </a>
              <button
                className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium hover:bg-gray-50 transition-colors"
                onClick={() => setSelectedTool(tool.id)}
              >
                Details
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Tool Detail Modal */}
      {tool && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50" onClick={() => setSelectedTool(null)}>
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="text-5xl">{tool.logo}</div>
                <div>
                  <h2 className="text-3xl font-bold">{tool.name}</h2>
                  <p className="text-gray-600">{tool.tagline}</p>
                </div>
              </div>
              <button onClick={() => setSelectedTool(null)} className="text-gray-400 hover:text-gray-600">
                <X size={24} />
              </button>
            </div>

            <div className="p-6 space-y-6">
              {/* Action Buttons */}
              <div className="flex gap-3">
                <a
                  href={tool.launch_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-thresh-blue text-white px-6 py-3 rounded-md font-medium hover:bg-blue-700 transition-colors flex items-center gap-2"
                >
                  Launch Tool <ExternalLink size={18} />
                </a>
                <button className="px-6 py-3 border border-gray-300 rounded-md font-medium hover:bg-gray-50 transition-colors">
                  Request Access
                </button>
              </div>

              {/* What It Is */}
              <div>
                <h3 className="text-xl font-bold mb-2">📋 What It Is</h3>
                <p className="text-gray-700">{tool.description}</p>
              </div>

              {/* Why We Use It */}
              <div>
                <h3 className="text-xl font-bold mb-2">✨ Why We Use It</h3>
                <p className="text-gray-700">{tool.why_we_use_it}</p>
              </div>

              {/* Who Has Access */}
              <div>
                <h3 className="text-xl font-bold mb-2">👥 Who Has Access</h3>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="mb-2"><strong>Roles:</strong> {tool.access.roles.join(', ')}</p>
                  <p className="mb-2"><strong>Admin:</strong> {tool.access.admin}</p>
                  <p><strong>Licenses:</strong> {tool.access.licenses_used}/{tool.access.licenses_total} used</p>
                </div>
              </div>

              {/* How to Login */}
              <div>
                <h3 className="text-xl font-bold mb-2">🔐 How to Login</h3>
                <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                  {tool.login.method === 'sso' && (
                    <div className="flex items-center gap-2 mb-2">
                      <span className="bg-thresh-blue text-white px-3 py-1 rounded-md text-sm font-medium">
                        SSO via {tool.login.provider?.toUpperCase()}
                      </span>
                    </div>
                  )}
                  <p className="text-gray-700">{tool.login.instructions}</p>
                  {tool.login.password_location && (
                    <p className="mt-2 text-sm text-gray-600">
                      Password stored in: <span className="font-medium">{tool.login.password_location}</span>
                    </p>
                  )}
                </div>
              </div>

              {/* Security Guardrails */}
              <div>
                <h3 className="text-xl font-bold mb-2">⚠️ Security Guardrails</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                    <h4 className="font-bold mb-3 flex items-center gap-2 text-green-800">
                      <CheckCircle size={20} /> DO
                    </h4>
                    <ul className="space-y-2">
                      {tool.guardrails.do.map((item, index) => (
                        <li key={index} className="text-sm text-gray-700 flex items-start gap-2">
                          <span className="text-green-600 mt-0.5">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                    <h4 className="font-bold mb-3 flex items-center gap-2 text-red-800">
                      <XCircle size={20} /> DON'T
                    </h4>
                    <ul className="space-y-2">
                      {tool.guardrails.dont.map((item, index) => (
                        <li key={index} className="text-sm text-gray-700 flex items-start gap-2">
                          <span className="text-red-600 mt-0.5">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Resources */}
              <div>
                <h3 className="text-xl font-bold mb-2">📚 Resources</h3>
                <div className="space-y-2">
                  {tool.resources.map((resource, index) => (
                    <a
                      key={index}
                      href={resource.url}
                      className="block text-thresh-blue hover:underline"
                    >
                      → {resource.title}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
