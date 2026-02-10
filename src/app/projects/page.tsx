'use client';

import React from 'react';
import { ExternalLink } from 'lucide-react';

const projects = [
  {
    id: 1,
    name: 'Charter Dashboard Redesign',
    client: 'Charter Communications',
    status: 'In Progress',
    health: 'green',
    team: ['Emily Watson', 'Sarah Chen', 'Mike Rodriguez'],
    tech_stack: ['React', 'Next.js', 'Tailwind', 'PostgreSQL'],
    start_date: '2026-01-15',
    end_date: '2026-03-30',
    links: {
      figma: '#',
      github: '#',
      jira: '#',
      slack: '#general-charter'
    },
    description: 'Complete redesign of customer dashboard with improved UX and real-time data visualization.',
    recent_updates: [
      'Design review completed',
      'Backend API integration in progress',
      'User testing scheduled for next week'
    ]
  },
  {
    id: 2,
    name: 'AI Resume Screener',
    client: 'Internal',
    status: 'In Progress',
    health: 'yellow',
    team: ['Alex Thompson', 'James Lee', 'Priya Patel'],
    tech_stack: ['React', 'Claude API', 'Node.js', 'MongoDB'],
    start_date: '2026-02-01',
    end_date: '2026-02-28',
    links: {
      figma: '#',
      github: '#',
      jira: '#',
      slack: '#project-ai-resume'
    },
    description: 'Internal tool to automate candidate resume screening using AI.',
    recent_updates: [
      'MVP features defined',
      'Waiting on API quota increase',
      'UI mockups in review'
    ]
  },
  {
    id: 3,
    name: 'E-commerce Platform Migration',
    client: 'TechRetail Inc',
    status: 'Planning',
    health: 'green',
    team: ['Emily Watson', 'Mike Rodriguez', 'Maria Garcia'],
    tech_stack: ['Vue.js', 'Shopify API', 'Cloudflare Workers'],
    start_date: '2026-03-01',
    end_date: '2026-05-15',
    links: {
      figma: '#',
      github: '#',
      jira: '#',
      slack: '#client-techretail'
    },
    description: 'Migration from legacy platform to modern headless e-commerce architecture.',
    recent_updates: [
      'Discovery phase completed',
      'Architecture proposal approved',
      'Kickoff meeting next Monday'
    ]
  },
  {
    id: 4,
    name: 'Mobile App Prototype',
    client: 'FinTech Startup',
    status: 'Completed',
    health: 'green',
    team: ['Sarah Chen', 'James Lee'],
    tech_stack: ['React Native', 'Firebase', 'Figma'],
    start_date: '2025-11-01',
    end_date: '2026-01-10',
    links: {
      figma: '#',
      github: '#',
      jira: '#',
      slack: '#archive-fintech'
    },
    description: 'High-fidelity prototype for investor pitch and user testing.',
    recent_updates: [
      'Final deliverables submitted',
      'Client very satisfied',
      'Secured follow-on engagement'
    ]
  },
  {
    id: 5,
    name: 'Data Analytics Dashboard',
    client: 'Healthcare Corp',
    status: 'On Hold',
    health: 'red',
    team: ['Alex Thompson', 'Priya Patel'],
    tech_stack: ['React', 'D3.js', 'Python', 'AWS'],
    start_date: '2025-12-01',
    end_date: '2026-02-28',
    links: {
      figma: '#',
      github: '#',
      jira: '#',
      slack: '#client-healthcare'
    },
    description: 'Real-time analytics dashboard for patient data visualization.',
    recent_updates: [
      'Client requested pause',
      'Awaiting compliance approval',
      'Will resume in March'
    ]
  }
];

const statusColors = {
  'In Progress': 'bg-blue-100 text-blue-800',
  'Planning': 'bg-purple-100 text-purple-800',
  'Completed': 'bg-green-100 text-green-800',
  'On Hold': 'bg-gray-100 text-gray-800',
};

// const healthColors = {
//   green: 'bg-green-500',
//   yellow: 'bg-yellow-500',
//   red: 'bg-red-500',
// };
const healthColors: Record<string, string> = {
  green: 'bg-green-500',
  yellow: 'bg-yellow-500',
  red: 'bg-red-500',
};

export default function ProjectsPage() {
  const [filter, setFilter] = React.useState('All');

  const statuses = ['All', 'In Progress', 'Planning', 'Completed', 'On Hold'];

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.status === filter);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-4xl font-bold mb-8">Projects</h1>

      {/* Status Filter */}
      <div className="mb-8 flex gap-2 flex-wrap">
        {statuses.map(status => (
          <button
            key={status}
            onClick={() => setFilter(status)}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
              filter === status
                ? 'bg-thresh-blue text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {status}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="space-y-6">
        {filteredProjects.map(project => (
          <div key={project.id} className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h2 className="text-2xl font-bold">{project.name}</h2>
                  <div className={`w-3 h-3 rounded-full ${healthColors[project.health as keyof typeof healthColors]}`} title={`Health: ${project.health}`} />
                </div>
                <p className="text-gray-600 mb-2">Client: {project.client}</p>
                <p className="text-gray-700">{project.description}</p>
              </div>
              <span className={`px-3 py-1 rounded-md text-sm font-medium ${statusColors[project.status as keyof typeof statusColors]}`}>
                {project.status}
              </span>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-4">
              <div>
                <h3 className="font-semibold mb-2">Team</h3>
                <div className="flex flex-wrap gap-2">
                  {project.team.map(member => (
                    <span key={member} className="bg-gray-100 px-3 py-1 rounded-md text-sm">
                      {member}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Tech Stack</h3>
                <div className="flex flex-wrap gap-2">
                  {project.tech_stack.map(tech => (
                    <span key={tech} className="bg-thresh-blue bg-opacity-10 text-thresh-blue px-3 py-1 rounded-md text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="mb-4">
              <h3 className="font-semibold mb-2">Recent Updates</h3>
              <ul className="space-y-1">
                {project.recent_updates.map((update, index) => (
                  <li key={index} className="text-sm text-gray-600 flex items-start gap-2">
                    <span className="text-thresh-blue mt-0.5">•</span>
                    <span>{update}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-gray-200">
              <div className="text-sm text-gray-600">
                {project.start_date} → {project.end_date}
              </div>
              <div className="flex gap-3">
                <a href={project.links.figma} className="text-thresh-blue hover:underline text-sm flex items-center gap-1">
                  Figma <ExternalLink size={14} />
                </a>
                <a href={project.links.github} className="text-thresh-blue hover:underline text-sm flex items-center gap-1">
                  GitHub <ExternalLink size={14} />
                </a>
                <a href={project.links.jira} className="text-thresh-blue hover:underline text-sm flex items-center gap-1">
                  Jira <ExternalLink size={14} />
                </a>
                <a href={project.links.slack} className="text-thresh-blue hover:underline text-sm flex items-center gap-1">
                  Slack <ExternalLink size={14} />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredProjects.length === 0 && (
        <div className="text-center py-12 text-gray-500">
          No projects found with status &quot;{filter}&quot;
        </div>
      )}
    </div>
  );
}
