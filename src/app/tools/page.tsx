'use client';

import { useState } from 'react';
import { tools } from '@/data/tools';
import { Search, ExternalLink, X, CheckCircle, XCircle, Mail, Phone } from 'lucide-react';

// Official Slack logo SVG
function SlackLogo({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg">
      <g fill="none" fillRule="evenodd">
        <path d="M19.712.133a5.381 5.381 0 0 0-5.376 5.387 5.381 5.381 0 0 0 5.376 5.386h5.376V5.52A5.381 5.381 0 0 0 19.712.133m0 14.365H5.376A5.381 5.381 0 0 0 0 19.884a5.381 5.381 0 0 0 5.376 5.387h14.336a5.381 5.381 0 0 0 5.376-5.387 5.381 5.381 0 0 0-5.376-5.386" fill="#36C5F0"/>
        <path d="M53.76 19.884a5.381 5.381 0 0 0-5.376-5.386 5.381 5.381 0 0 0-5.376 5.386v5.387h5.376a5.381 5.381 0 0 0 5.376-5.387m-14.336 0V5.52A5.381 5.381 0 0 0 34.048.133a5.381 5.381 0 0 0-5.376 5.387v14.364a5.381 5.381 0 0 0 5.376 5.387 5.381 5.381 0 0 0 5.376-5.387" fill="#2EB67D"/>
        <path d="M34.048 54a5.381 5.381 0 0 0 5.376-5.387 5.381 5.381 0 0 0-5.376-5.386h-5.376v5.386A5.381 5.381 0 0 0 34.048 54m0-14.365h14.336a5.381 5.381 0 0 0 5.376-5.386 5.381 5.381 0 0 0-5.376-5.387H34.048a5.381 5.381 0 0 0-5.376 5.387 5.381 5.381 0 0 0 5.376 5.386" fill="#ECB22E"/>
        <path d="M0 34.249a5.381 5.381 0 0 0 5.376 5.386 5.381 5.381 0 0 0 5.376-5.386v-5.387H5.376A5.381 5.381 0 0 0 0 34.249m14.336 0v14.364A5.381 5.381 0 0 0 19.712 54a5.381 5.381 0 0 0 5.376-5.387V34.249a5.381 5.381 0 0 0-5.376-5.387 5.381 5.381 0 0 0-5.376 5.387" fill="#E01E5A"/>
      </g>
    </svg>
  );
}

// Added to parse markdown
function parseMarkdown(text: string) {
  const parts: React.ReactNode[] = [];
  let currentIndex = 0;
  
  const regex = /(\*\*.*?\*\*|\*.*?\*)/g;
  let match;
  
  while ((match = regex.exec(text)) !== null) {
    if (match.index > currentIndex) {
      parts.push(text.substring(currentIndex, match.index));
    }
    
    const matched = match[0];
    if (matched.startsWith('**') && matched.endsWith('**')) {
      parts.push(<strong key={match.index}>{matched.slice(2, -2)}</strong>);
    } else if (matched.startsWith('*') && matched.endsWith('*')) {
      parts.push(<em key={match.index}>{matched.slice(1, -1)}</em>);
    }
    
    currentIndex = match.index + matched.length;
  }
  
  if (currentIndex < text.length) {
    parts.push(text.substring(currentIndex));
  }
  
  return parts.length > 0 ? parts : text;
}

// Avatar initials helper
function getInitials(name: string) {
  return name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);
}

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
      <h2 className="text-2xl font mb-6">Overview & Guidance</h2>

      <div className="text-gray-600 text-lg mb-8 space-y-6">
        <p>
          Before diving into individual tools, here&apos;s the technology environment foundation:
        </p>

        {/* Foundation Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border border-gray-300 rounded-lg overflow-hidden">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-3 font-bold text-gray-800 border-b border-gray-300">Layer</th>
                <th className="px-4 py-3 font-bold text-gray-800 border-b border-gray-300">Solution</th>
                <th className="px-4 py-3 font-bold text-gray-800 border-b border-gray-300">Role</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr>
                <td className="px-4 py-3">Hardware</td>
                <td className="px-4 py-3">MacBooks</td>
                <td className="px-4 py-3">Primary work devices for all team members</td>
              </tr>
              <tr>
                <td className="px-4 py-3">Device Management &amp; Security</td>
                <td className="px-4 py-3">Addigy</td>
                <td className="px-4 py-3">MDM, patch management, security compliance, remote monitoring</td>
              </tr>
              <tr>
                <td className="px-4 py-3">Identity &amp; SSO</td>
                <td className="px-4 py-3">Google Workspace</td>
                <td className="px-4 py-3">Single Sign-On provider, email, calendar, core identity layer</td>
              </tr>
              <tr>
                <td className="px-4 py-3">Network &amp; Access</td>
                <td className="px-4 py-3">Google Workspace + Addigy policies</td>
                <td className="px-4 py-3">Enforce encryption, firewall rules, VPN requirements as needed</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Core Principles */}
        <div>
          <h3 className="text-xl font-bold text-gray-800 mb-3">Core Principles</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <span className="font-semibold">Google Workspace is the identity source of truth.</span>{' '}
              Every tool that supports SSO or SAML should authenticate through Google Workspace. This gives you centralized user provisioning, de-provisioning, and audit trails.
            </li>
            <li>
              <span className="font-semibold">Addigy enforces device-level compliance.</span>{' '}
              FileVault encryption, OS updates, approved software lists, and remote lock/wipe capabilities ensure that the hardware accessing your tools meets security baselines.
            </li>
            <li>
              <span className="font-semibold">Least-privilege access by default.</span>{' '}
              Team members get the minimum permissions needed for their role. Escalation is intentional, not accidental.
            </li>
          </ul>
        </div>
      </div>

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

              {/* ── CONTACTS ── */}
              {tool.contacts && (tool.contacts.internal || tool.contacts.external) && (
                <div>
                  <h3 className="text-xl font-bold mb-3">🙋 Who to Contact</h3>
                  <div className="grid md:grid-cols-2 gap-4">

                    {/* Internal Contact */}
                    {tool.contacts.internal && (
                      <div className="relative rounded-xl overflow-hidden border-2 border-thresh-blue bg-gradient-to-br from-blue-600 to-blue-800 text-white shadow-lg">
                        {/* Badge */}
                        <div className="absolute top-3 right-3">
                          <span className="text-xs font-semibold bg-white text-blue-700 px-2 py-0.5 rounded-full uppercase tracking-wide">
                            Thresh Internal
                          </span>
                        </div>

                        <div className="p-5 pt-10">
                          {/* Avatar + Name */}
                          <div className="flex items-center gap-3 mb-4">
                            <div className="w-12 h-12 rounded-full bg-white text-blue-700 flex items-center justify-center text-lg font-bold shadow">
                              {getInitials(tool.contacts.internal.name)}
                            </div>
                            <div>
                              <p className="font-bold text-lg leading-tight">{tool.contacts.internal.name}</p>
                              <p className="text-blue-200 text-sm">{tool.contacts.internal.role}</p>
                            </div>
                          </div>

                          {/* Contact Details */}
                          <div className="space-y-2">
                            {tool.contacts.internal.email && (
                              <a
                                href={`mailto:${tool.contacts.internal.email}`}
                                className="flex items-center gap-2 text-sm text-blue-100 hover:text-white transition-colors group"
                              >
                                <Mail size={14} className="flex-shrink-0" />
                                <span className="group-hover:underline truncate">{tool.contacts.internal.email}</span>
                              </a>
                            )}
                            {tool.contacts.internal.slack && (
                              tool.contacts.internal.slackDeepLink ? (
                                <a
                                  href={tool.contacts.internal.slackDeepLink}
                                  className="flex items-center gap-2 text-sm text-blue-100 hover:text-white transition-colors group"
                                  title={`Message ${tool.contacts.internal.name} on Slack`}
                                >
                                  <SlackLogo size={14} />
                                  <span className="group-hover:underline">{tool.contacts.internal.slack}</span>
                                </a>
                              ) : (
                                <div className="flex items-center gap-2 text-sm text-blue-100">
                                  <SlackLogo size={14} />
                                  <span>{tool.contacts.internal.slack}</span>
                                </div>
                              )
                            )}
                            {tool.contacts.internal.phone && (
                              <a
                                href={`tel:${tool.contacts.internal.phone}`}
                                className="flex items-center gap-2 text-sm text-blue-100 hover:text-white transition-colors"
                              >
                                <Phone size={14} className="flex-shrink-0" />
                                <span>{tool.contacts.internal.phone}</span>
                              </a>
                            )}
                          </div>
                        </div>
                      </div>
                    )}

                    {/* External Contact */}
                    {tool.contacts.external && (
                      <div className="relative rounded-xl overflow-hidden border border-gray-200 bg-gray-50 shadow-sm">
                        {/* Badge */}
                        <div className="absolute top-3 right-3">
                          <span className="text-xs font-semibold bg-gray-200 text-gray-600 px-2 py-0.5 rounded-full uppercase tracking-wide">
                            Vendor Support
                          </span>
                        </div>

                        <div className="p-5 pt-10">
                          {/* Avatar + Name */}
                          <div className="flex items-center gap-3 mb-4">
                            <div className="w-12 h-12 rounded-full bg-gray-300 text-gray-700 flex items-center justify-center text-lg font-bold shadow-sm">
                              {getInitials(tool.contacts.external.name)}
                            </div>
                            <div>
                              <p className="font-bold text-lg text-gray-800 leading-tight">{tool.contacts.external.name}</p>
                              <p className="text-gray-500 text-sm">{tool.contacts.external.role}</p>
                            </div>
                          </div>

                          {/* Contact Details */}
                          <div className="space-y-2">
                            {tool.contacts.external.email && (
                              <a
                                href={`mailto:${tool.contacts.external.email}`}
                                className="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 transition-colors group"
                              >
                                <Mail size={14} className="flex-shrink-0 text-gray-400" />
                                <span className="group-hover:underline truncate">{tool.contacts.external.email}</span>
                              </a>
                            )}
                            {tool.contacts.external.slack && (
                              <div className="flex items-center gap-2 text-sm text-gray-600">
                                <SlackLogo size={14} />
                                <span>{tool.contacts.external.slack}</span>
                              </div>
                            )}
                            {tool.contacts.external.phone && (
                              <a
                                href={`tel:${tool.contacts.external.phone}`}
                                className="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 transition-colors"
                              >
                                <Phone size={14} className="flex-shrink-0 text-gray-400" />
                                <span>{tool.contacts.external.phone}</span>
                              </a>
                            )}
                          </div>
                        </div>
                      </div>
                    )}

                  </div>
                </div>
              )}
              {/* ── END CONTACTS ── */}

              {/* Governance */}
              <div>
                <h3 className="text-xl font-bold mb-2">🦖 Governance</h3>
                <ul className="text-gray-700 list-disc list-inside space-y-1">
                  {tool.governance.map((rule, index) => {
                    if (rule.includes(' + ')) {
                      const [mainPart, ...subItems] = rule.split(' + ');
                      return (
                        <li key={index} className="mb-2">
                          {parseMarkdown(mainPart)}
                          <ul className="list-circle list-inside ml-6 mt-1 space-y-0.5">
                            {subItems.map((item, subIndex) => (
                              <li key={subIndex} className="text-sm">{parseMarkdown(item.trim())}</li>
                            ))}
                          </ul>
                        </li>
                      );
                    }
                    return <li key={index}>{parseMarkdown(rule)}</li>;
                  })}
                </ul>
              </div>

              {/* Folder Structure */}
              {tool.folder_structure && (
                <div>
                  <h3 className="text-xl font-bold mb-2">📁 Folder Structure</h3>
                  <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                    <pre className="text-sm text-gray-700 font-mono whitespace-pre overflow-x-auto">
                      {tool.folder_structure.map((line, index) => (
                        <div key={index}>{parseMarkdown(line)}</div>
                      ))}
                    </pre>
                  </div>
                </div>
              )}

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
