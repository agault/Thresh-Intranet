'use client';

import React, { useEffect, useState } from 'react';
import { Mail, MessageSquare, Phone } from 'lucide-react';

// ─── Slack Logo SVG ───────────────────────────────────────────────
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

// ─── Status Types & Hooks ─────────────────────────────────────────
interface SlackStatus { emoji: string; text: string; loaded: boolean; }
interface CalendarStatus { status: 'available' | 'busy' | 'ooo' | 'unknown'; label: string; }
function useSlackStatus(userId: string): SlackStatus {
  // Ensure these are < > and not &lt; &gt;
  const [status, setStatus] = useState<SlackStatus>({ 
    emoji: '', 
    text: '', 
    loaded: false 
  });

  useEffect(() => {
    if (!userId) {
      setStatus({ emoji: '', text: 'Not on Slack', loaded: true });
      return;
    }

    fetch(`/api/slack-status?userId=${userId}`)
      .then(r => r.json())
      .then(data => {
        setStatus({
          emoji: data.emoji ?? '',
          text: data.text ?? 'No status set',
          loaded: true,
        });
      })
      .catch(() => setStatus({ emoji: '⚠️', text: 'Could not load', loaded: true }));
  }, [userId]);

  return status;
}

// TODO: Replace with real fetch → GET /api/calendar-status?email=<email>
// Cloudflare Worker calls Google Calendar API with service account + domain-wide delegation
function useCalendarStatus(_email: string): CalendarStatus {
  return { status: 'unknown', label: 'Calendar pending' };
}

const calendarStyles: Record<string, string> = {
  available: 'bg-green-50 text-green-700 border-green-200',
  busy:      'bg-amber-50 text-amber-700 border-amber-200',
  ooo:       'bg-red-50 text-red-600 border-red-200',
  unknown:   'bg-gray-50 text-gray-400 border-gray-200',
};
const calendarDots: Record<string, string> = {
  available: 'bg-green-500',
  busy:      'bg-amber-400',
  ooo:       'bg-red-400',
  unknown:   'bg-gray-300',
};

// ─── Team Data ────────────────────────────────────────────────────
const SLACK_TEAM_ID = 'T0ADSBU5Q3B';

const teamMembers = [
  {
    name: 'Dave Macey',
    role: 'CEO & Co-Founder',
    team: 'Leadership',
    email: 'dave@threshconsulting.com',
    slack: '@dave',
    slackUserId: '',
    slackDeepLink: '',
    phone: '(312) 415-8623',
    bio: "Digital consulting veteran leading Thresh's vision for building world-class digital products.",
    skills: ['Strategy', 'Product Vision', 'Leadership', 'Client Relations'],
  },
  {
    name: 'Jason Rock',
    role: 'Co-Founder & Partner',
    team: 'Leadership',
    email: 'jrock@threshconsulting.com',
    slack: '@jason',
    slackUserId: 'U0ADG2DEALV',
    slackDeepLink: `slack://user?team=${SLACK_TEAM_ID}&id=U0ADG2DEALV`,
    phone: '',
    bio: 'Partner overseeing operations, infrastructure, and client delivery at Thresh.',
    skills: ['Operations', 'Infrastructure', 'Business Development', 'Strategy'],
  },
  {
    name: 'Sam Song',
    role: 'Sr. Product Manager',
    team: 'Product',
    email: 'sam@threshconsulting.com',
    slack: '@sam',
    slackUserId: 'U0AFDATCR7X',
    slackDeepLink: `slack://user?team=${SLACK_TEAM_ID}&id=U0AFDATCR7X`,
    phone: '(201) 403-8339',
    bio: "Senior PM driving product strategy and cross-functional delivery across Thresh's client portfolio.",
    skills: ['Product Strategy', 'Roadmapping', 'Agile', 'Stakeholder Management'],
  },
  {
    name: 'Asia Gault',
    role: 'Product Manager',
    team: 'Product',
    email: 'asia@threshconsulting.com',
    slack: '@asia',
    slackUserId: 'U0AFACEUFD1',
    slackDeepLink: `slack://user?team=${SLACK_TEAM_ID}&id=U0AFACEUFD1`,
    phone: '(719) 393-3131',
    bio: 'Product Manager focused on internal tools, engineering infrastructure, and client product delivery.',
    skills: ['Product Management', 'SOPs', 'Engineering Collaboration', 'UX'],
  },
  {
    name: 'Andy Tran',
    role: 'Product Manager',
    team: 'Product',
    email: 'andy@threshconsulting.com',
    slack: '@andy',
    slackUserId: 'U0ADA1J7Q9K',
    slackDeepLink: `slack://user?team=${SLACK_TEAM_ID}&id=U0ADA1J7Q9K`,
    phone: '',
    bio: 'Product Manager bringing a sharp eye for user experience and product execution.',
    skills: ['Product Management', 'User Research', 'Agile', 'Roadmapping'],
  },
  {
    name: 'Shania Cabrera',
    role: 'Design Lead',
    team: 'Design',
    email: 'shania@threshconsulting.com',
    slack: '@shania',
    slackUserId: 'U0AFADW6LD9',
    slackDeepLink: `slack://user?team=${SLACK_TEAM_ID}&id=U0AFADW6LD9`,
    phone: '',
    bio: "Design Lead shaping Thresh's visual identity and leading UI/UX across client and internal projects.",
    skills: ['UI/UX', 'Design Systems', 'Figma', 'Brand Design'],
  },
  {
    name: 'Charlie Cook',
    role: 'Sr. Engineer',
    team: 'Engineering',
    email: 'me@charliecook.io',
    slack: '@charlie',
    slackUserId: '',
    slackDeepLink: '',
    phone: '',
    bio: 'Senior engineer with deep expertise in frontend architecture, tooling, and scalable systems.',
    skills: ['React', 'TypeScript', 'Node.js', 'Architecture'],
  },
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

      {/* Team Filter — identical to original */}
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

      {/* Org Chart — Leadership row added at top */}
      <div className="bg-white rounded-lg shadow p-8 mb-8">
        <h2 className="text-2xl font-bold mb-6 text-center">Organization Structure</h2>
        <div className="flex flex-col items-center space-y-6">

          {/* Leadership */}
          <div className="flex gap-4 flex-wrap justify-center">
            <div className="bg-thresh-blue text-white px-6 py-3 rounded-lg font-semibold">
              Dave Macey - CEO & Co-Founder
            </div>
            <div className="bg-thresh-blue text-white px-6 py-3 rounded-lg font-semibold">
              Jason Rock - Co-Founder & Partner
            </div>
          </div>

          {/* Teams */}
          <div className="grid grid-cols-3 gap-8 w-full max-w-4xl">
            <div className="text-center">
              <div className="bg-purple-100 border-2 border-purple-500 px-4 py-3 rounded-lg font-semibold mb-2">
                Product Team
              </div>
              <div className="text-sm text-gray-600">Sam Song (Lead)</div>
              <div className="text-sm text-gray-600">3 members</div>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 border-2 border-blue-500 px-4 py-3 rounded-lg font-semibold mb-2">
                Design Team
              </div>
              <div className="text-sm text-gray-600">Shania Cabrera (Lead)</div>
              <div className="text-sm text-gray-600">1 member</div>
            </div>
            <div className="text-center">
              <div className="bg-green-100 border-2 border-green-500 px-4 py-3 rounded-lg font-semibold mb-2">
                Engineering
              </div>
              <div className="text-sm text-gray-600">Charlie Cook (Lead)</div>
              <div className="text-sm text-gray-600">1 member</div>
            </div>
          </div>
        </div>
      </div>

      {/* Team Members Grid — original structure, status pills inserted before contact */}
      <h2 className="text-2xl font-bold mb-4">Team Directory</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredMembers.map(member => (
          <MemberCard key={member.email} member={member} />
        ))}
      </div>
    </div>
  );
}

// Extracted to a component so hooks work correctly inside map
function MemberCard({ member }: { member: typeof teamMembers[0] }) {
  const slackStatus = useSlackStatus(member.slackUserId);
  const calendarStatus = useCalendarStatus(member.email);

  return (
    <div className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition-shadow">

      {/* Identical header */}
      <div className="flex items-center gap-4 mb-4">
        <div className="w-16 h-16 bg-thresh-blue rounded-full flex items-center justify-center text-white text-2xl font-bold">
          {member.name.split(' ').map(n => n[0]).join('')}
        </div>
        <div>
          <h3 className="font-bold text-lg">{member.name}</h3>
          <p className="text-gray-600 text-sm">{member.role}</p>
          <span className={`inline-block px-2 py-1 rounded text-xs font-medium mt-1 ${
            member.team === 'Leadership' ? 'bg-thresh-blue text-white' :
            member.team === 'Product'    ? 'bg-purple-100 text-purple-800' :
            member.team === 'Design'     ? 'bg-blue-100 text-blue-800' :
                                           'bg-green-100 text-green-800'
          }`}>
            {member.team}
          </span>
        </div>
      </div>

      {/* Identical bio */}
      <p className="text-gray-700 text-sm mb-4">{member.bio}</p>

      {/* Identical skills */}
      <div className="flex flex-wrap gap-2 mb-4">
        {member.skills.map(skill => (
          <span key={skill} className="bg-gray-100 px-2 py-1 rounded text-xs text-gray-700">
            {skill}
          </span>
        ))}
      </div>

      {/* ── NEW: two status pills only ── */}
      <div className="flex gap-2 mb-4 flex-wrap">
        <div className="flex items-center gap-1.5 bg-gray-50 border border-gray-200 rounded-md px-2.5 py-1.5 text-xs text-gray-600">
          <SlackLogo size={12} />
          {slackStatus.loaded ? (
            <span>
              {slackStatus.emoji && <span className="mr-1">{slackStatus.emoji}</span>}
              {slackStatus.text || 'No status'}
            </span>
          ) : (
            <span className="text-gray-400 animate-pulse">Loading...</span>
          )}
        </div>
        <div className={`flex items-center gap-1.5 border rounded-md px-2.5 py-1.5 text-xs font-medium ${calendarStyles[calendarStatus.status]}`}>
          <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${calendarDots[calendarStatus.status]}`} />
          {calendarStatus.label}
        </div>
      </div>

      {/* Identical contact info */}
      <div className="space-y-2 text-sm">
        <a href={`mailto:${member.email}`} className="flex items-center gap-2 text-gray-600 hover:text-thresh-blue">
          <Mail size={16} />
          {member.email}
        </a>
        {member.slackDeepLink ? (
          <a
            href={member.slackDeepLink}
            className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors group"
            title={`Message ${member.name} on Slack`}
          >
            <SlackLogo size={16} />
            <span className="group-hover:underline">{member.slack}</span>
          </a>
        ) : (
          <div className="flex items-center gap-2 text-gray-600">
            <MessageSquare size={16} />
            {member.slack}
          </div>
        )}
        <div className="flex items-center gap-2 text-gray-600">
          <Phone size={16} />
          {member.phone}
        </div>
      </div>

    </div>
  );
}
