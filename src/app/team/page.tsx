'use client';

import React from 'react';
import { Mail, MessageSquare, Phone } from 'lucide-react';

const teamMembers = [
  {
    name: 'Dave Macey',
    role: 'CEO & Founder',
    team: 'Leadership',
    email: 'dave@threshconsulting.com',
    slack: '@dave',
    phone: '(312) 415-8623',
    bio: 'Digital consulting veteran with 15+ years building products',
    skills: ['Strategy', 'Product', 'Leadership']
  },
  {
    name: 'Sarah Chen',
    role: 'Head of Design',
    team: 'Design',
    email: 'sarah@threshconsulting.com',
    slack: '@sarah',
    phone: '(555) 123-4567',
    bio: 'Award-winning designer specializing in enterprise UX',
    skills: ['UI/UX', 'Design Systems', 'Figma']
  },
  {
    name: 'Mike Rodriguez',
    role: 'Lead Developer',
    team: 'Engineering',
    email: 'mike@threshconsulting.com',
    slack: '@mike',
    phone: '(555) 234-5678',
    bio: 'Full-stack engineer with expertise in React and Node.js',
    skills: ['React', 'Node.js', 'TypeScript']
  },
  {
    name: 'Emily Watson',
    role: 'Senior Product Manager',
    team: 'Product',
    email: 'emily@threshconsulting.com',
    slack: '@emily',
    phone: '(555) 345-6789',
    bio: 'Product leader focused on AI and digital transformation',
    skills: ['Product Strategy', 'Roadmapping', 'Stakeholder Management']
  },
  {
    name: 'James Lee',
    role: 'UX Designer',
    team: 'Design',
    email: 'james@threshconsulting.com',
    slack: '@james',
    phone: '(555) 456-7890',
    bio: 'User researcher and interaction designer',
    skills: ['User Research', 'Prototyping', 'Interaction Design']
  },
  {
    name: 'Maria Garcia',
    role: 'Frontend Developer',
    team: 'Engineering',
    email: 'maria@threshconsulting.com',
    slack: '@maria',
    phone: '(555) 567-8901',
    bio: 'React specialist with a passion for performance',
    skills: ['React', 'CSS', 'Performance Optimization']
  },
  {
    name: 'Alex Thompson',
    role: 'Product Manager',
    team: 'Product',
    email: 'alex@threshconsulting.com',
    slack: '@alex',
    phone: '(555) 678-9012',
    bio: 'Technical PM with engineering background',
    skills: ['Technical Product', 'API Design', 'Agile']
  },
  {
    name: 'Priya Patel',
    role: 'Backend Developer',
    team: 'Engineering',
    email: 'priya@threshconsulting.com',
    slack: '@priya',
    phone: '(555) 789-0123',
    bio: 'Backend architect specializing in scalable systems',
    skills: ['Node.js', 'PostgreSQL', 'AWS']
  }
];

const teams = ['All', 'Leadership', 'Product', 'Design', 'Engineering'];

export default function TeamPage() {
  const [selectedTeam, setSelectedTeam] = React.useState('All');

  const filteredMembers = selectedTeam === 'All' 
    ? teamMembers 
    : teamMembers.filter(member => member.team === selectedTeam);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-4xl font-bold mb-8">Team & Org Chart</h1>

      {/* Team Filter */}
      <div className="mb-8 flex gap-2 flex-wrap">
        {teams.map(team => (
          <button
            key={team}
            onClick={() => setSelectedTeam(team)}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
              selectedTeam === team
                ? 'bg-thresh-blue text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {team}
          </button>
        ))}
      </div>

      {/* Simple Org Chart Visualization */}
      <div className="bg-white rounded-lg shadow p-8 mb-8">
        <h2 className="text-2xl font-bold mb-6 text-center">Organization Structure</h2>
        <div className="flex flex-col items-center space-y-6">
          {/* CEO */}
          <div className="bg-thresh-blue text-white px-6 py-3 rounded-lg font-semibold">
            Dave Macey - CEO
          </div>
          {/* Teams */}
          <div className="grid grid-cols-3 gap-8 w-full max-w-4xl">
            <div className="text-center">
              <div className="bg-purple-100 border-2 border-purple-500 px-4 py-3 rounded-lg font-semibold mb-2">
                Product Team
              </div>
              <div className="text-sm text-gray-600">Emily Watson (Lead)</div>
              <div className="text-sm text-gray-600">2 members</div>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 border-2 border-blue-500 px-4 py-3 rounded-lg font-semibold mb-2">
                Design Team
              </div>
              <div className="text-sm text-gray-600">Sarah Chen (Lead)</div>
              <div className="text-sm text-gray-600">2 members</div>
            </div>
            <div className="text-center">
              <div className="bg-green-100 border-2 border-green-500 px-4 py-3 rounded-lg font-semibold mb-2">
                Engineering
              </div>
              <div className="text-sm text-gray-600">Mike Rodriguez (Lead)</div>
              <div className="text-sm text-gray-600">3 members</div>
            </div>
          </div>
        </div>
      </div>

      {/* Team Members Grid */}
      <h2 className="text-2xl font-bold mb-4">Team Directory</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredMembers.map(member => (
          <div key={member.email} className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-16 h-16 bg-thresh-blue rounded-full flex items-center justify-center text-white text-2xl font-bold">
                {member.name.split(' ').map(n => n[0]).join('')}
              </div>
              <div>
                <h3 className="font-bold text-lg">{member.name}</h3>
                <p className="text-gray-600 text-sm">{member.role}</p>
                <span className={`inline-block px-2 py-1 rounded text-xs font-medium mt-1 ${
                  member.team === 'Leadership' ? 'bg-thresh-blue text-white' :
                  member.team === 'Product' ? 'bg-purple-100 text-purple-800' :
                  member.team === 'Design' ? 'bg-blue-100 text-blue-800' :
                  'bg-green-100 text-green-800'
                }`}>
                  {member.team}
                </span>
              </div>
            </div>
            
            <p className="text-gray-700 text-sm mb-4">{member.bio}</p>
            
            <div className="flex flex-wrap gap-2 mb-4">
              {member.skills.map(skill => (
                <span key={skill} className="bg-gray-100 px-2 py-1 rounded text-xs text-gray-700">
                  {skill}
                </span>
              ))}
            </div>

            <div className="space-y-2 text-sm">
              <a href={`mailto:${member.email}`} className="flex items-center gap-2 text-gray-600 hover:text-thresh-blue">
                <Mail size={16} />
                {member.email}
              </a>
              <div className="flex items-center gap-2 text-gray-600">
                <MessageSquare size={16} />
                {member.slack}
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <Phone size={16} />
                {member.phone}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
