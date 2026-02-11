export interface Tool {
  id: string;
  name: string;
  tagline: string;
  description: string;
  category: string[];
  logo: string;
  launch_url: string;
  why_we_use_it: string;
  governance: string[];
  access: {
    roles: string[];
    admin: string;
    licenses_total: number;
    licenses_used: number;
  };
  login: {
    method: 'sso' | 'credentials' | 'team_account' | 'individual';
    provider?: string;
    instructions: string;
    username?: string;
    password_location?: string;
  };
  guardrails: {
    do: string[];
    dont: string[];
  };
  cost?: {
    amount: number;
    period: 'monthly' | 'annual';
    visible_to: string[];
  };
  resources: {
    title: string;
    url: string;
  }[];
  folder_structure?: string[];
}

export const tools: Tool[] = [
  {
    id: 'figma',
    name: 'Figma',
    tagline: 'Collaborative design platform',
    description: 'Figma is a cloud-based design platform for UI/UX design, prototyping, and collaboration. It allows multiple team members to work on the same design file simultaneously in real-time.',
    category: ['design', 'collaboration'],
    logo: '🎨',
    launch_url: 'https://figma.com',
    why_we_use_it: 'Industry-standard tool for digital design with real-time collaboration, easy client sharing, and seamless developer handoff.',
    governance: [
      'SSO via Google Workspace - no personal Figma accounts for company work',
      'Org Admins: Leadership/IT | Full Editors: Designers only | Viewers: Developers, Strategists, PMs',
      'Client reviews via prototype links with expiration or view-only access only',
      'Final assets live in locked "Final" section - only design leads can approve',
      'No downloads of .fig source files - work stays in Figma cloud'
    ],
    access: {
      roles: ['designers', 'pms', 'devs'],
      admin: 'design-lead@threshconsulting.com',
      licenses_total: 10,
      licenses_used: 8
    },
    login: {
      method: 'sso',
      provider: 'google',
      instructions: "Click 'Sign in with Google' and use your @threshconsulting.com email"
    },
    guardrails: {
      do: [
        'Use for client projects and internal design work',
        'Enable two-factor authentication',
        'Organize files in designated project folders',
        'Use comments for feedback and collaboration'
      ],
      dont: [
        'Share login credentials',
        'Download client files to personal devices without approval',
        'Install unapproved plugins',
        'Share client work publicly without approval'
      ]
    },
    cost: {
      amount: 150,
      period: 'monthly',
      visible_to: ['admin']
    },
    resources: [
      { title: 'Usage Guide', url: '/sops/tools/figma' },
      { title: 'Official Docs', url: 'https://help.figma.com' }
    ],
    folder_structure: [
      'Thresh Consulting (Org)',
      '├── [Client Name] — Project',
      '│   ├── ✅ Final / Approved',
      '│   ├── 🚧 In Progress',
      '│   ├── 🗄️ Archive',
      '│   └── 🧩 Design System / Components',
      '├── Internal — Thresh Brand',
      '│   ├── Brand Assets',
      '│   ├── Templates (Proposals, Decks)',
      '│   └── Design System',
      '└── Sandbox / Exploration'
    ]
  },
  {
    id: 'slack',
    name: 'Slack',
    tagline: 'Team communication platform',
    description: 'Slack is a team communication platform with channels, direct messages, file sharing, and integrations with other tools.',
    category: ['communication'],
    logo: '💬',
    launch_url: 'https://threshconsulting.slack.com',
    why_we_use_it: 'Primary internal communication hub for real-time collaboration, organized channels, and tool integrations.',
    governance: [
      'Keep sensitive info in private channels only',
      'Use threads to organize discussions',
      'No client confidential data in public channels',
      'Professional communication standards at all times'
    ],
    access: {
      roles: ['all'],
      admin: 'operations@threshconsulting.com',
      licenses_total: 10,
      licenses_used: 10
    },
    login: {
      method: 'sso',
      provider: 'google',
      instructions: "Go to threshconsulting.slack.com and sign in with Google"
    },
    guardrails: {
      do: [
        'Use threads to keep conversations organized',
        'Set status when away or in meetings',
        'Keep client work in private project channels',
        'Use reactions for quick acknowledgments'
      ],
      dont: [
        'Share client confidential info in public channels',
        'Use @channel for non-urgent messages',
        'Post passwords, API keys, or credentials',
        'Respond to suspicious DMs'
      ]
    },
    cost: {
      amount: 435,
      period: 'annual',
      visible_to: ['admin']
    },
    resources: [
      { title: 'Slack Guide', url: '/sops/tools/slack' }
    ]
  },
  {
    id: 'claude',
    name: 'Claude Pro',
    tagline: 'AI assistant platform',
    description: 'Claude is an AI assistant by Anthropic for content creation, code generation, research, analysis, and brainstorming.',
    category: ['ai'],
    logo: '🤖',
    launch_url: 'https://claude.ai',
    why_we_use_it: 'AI-powered writing, code generation, research support, and internal documentation creation.',
    governance: [
      'Never input confidential client data, PII, or proprietary information',
      'Always review and verify all AI-generated outputs',
      'Use for drafting and research only - not final decisions',
      'Anonymize all data before sharing with AI'
    ],
    access: {
      roles: ['all'],
      admin: 'product@threshconsulting.com',
      licenses_total: 10,
      licenses_used: 10
    },
    login: {
      method: 'team_account',
      instructions: 'Sign in with your @threshconsulting.com Google account and join the Thresh Consulting team workspace'
    },
    guardrails: {
      do: [
        'Use for drafting, editing, and research',
        'Anonymize/sanitize data before input',
        'Review and fact-check all AI outputs',
        'Use Projects feature to organize work'
      ],
      dont: [
        '⚠️ CRITICAL: NEVER input client confidential data, PII, or proprietary info',
        'Never paste API keys, passwords, or credentials',
        'Never input code with sensitive business logic',
        "Don't present AI work as original research without verification"
      ]
    },
    cost: {
      amount: 2400,
      period: 'annual',
      visible_to: ['admin']
    },
    resources: [
      { title: 'Claude Usage Guide', url: '/sops/tools/claude' }
    ]
  },
  {
    id: 'github',
    name: 'GitHub',
    tagline: 'Code repository & version control',
    description: 'GitHub is a code hosting platform for version control, collaboration, and code review using Git.',
    category: ['development'],
    logo: '⚙️',
    launch_url: 'https://github.com/threshconsulting',
    why_we_use_it: 'Source code repository, version control, code review, and project documentation.',
    governance: [
      'All code must go through pull requests - no direct commits to main',
      'Never commit secrets, API keys, or credentials',
      'Branch protection required on main/production branches',
      'Code review required before any merge'
    ],
    access: {
      roles: ['developers', 'designers', 'pms'],
      admin: 'dev-lead@threshconsulting.com',
      licenses_total: 10,
      licenses_used: 7
    },
    login: {
      method: 'individual',
      instructions: 'Create GitHub account with @threshconsulting.com email and request org invite'
    },
    guardrails: {
      do: [
        'Enable 2FA (required)',
        'Use SSH keys or Personal Access Tokens',
        'Code review via Pull Requests',
        'Commit frequently with clear messages'
      ],
      dont: [
        '⚠️ CRITICAL: NEVER commit API keys, passwords, or secrets',
        'Never force push to main/production branches',
        'Never commit client proprietary code without rights',
        'Never share SSH keys or tokens'
      ]
    },
    resources: [
      { title: 'GitHub Guide', url: '/sops/tools/github' }
    ],
    folder_structure: [
      '**Repository Structure**',
      'thresh-consulting (GitHub Organization)',
      '├── client-[name]-[project]     *# Client project repos*',
      '├── internal-[tool/system]      *# Internal tools, automations*',
      '├── template-[type]             *# Starter templates (Next.js, etc.)*',
      '├── thresh-brand                *# Company website, brand assets*',
      '└── docs-[topic]                *# Internal technical documentation*',
      '',
      '**Branching & Workflow**',
      'main *(production — protected)*',
      '└── develop *(integration branch — protected)*',
      '    └── feature/[ticket-id]-[description]',
      '    └── fix/[ticket-id]-[description]',
      '    └── chore/[description]'
    ]
  },
  {
    id: 'google-workspace',
    name: 'Google Workspace',
    tagline: 'Productivity suite & SSO',
    description: 'Google Workspace includes Gmail, Drive, Docs, Sheets, Slides, Calendar, and Meet.',
    category: ['productivity'],
    logo: '📧',
    launch_url: 'https://workspace.google.com',
    why_we_use_it: 'Professional email, file storage, document collaboration, scheduling, and single sign-on.',
    governance: [
      'Use company email for all work communications',
      '2FA required on all accounts',
      'Organize files in shared team/client folders',
      'Use "Internal sharing" for sensitive company documents'
    ],
    access: {
      roles: ['all'],
      admin: 'it@threshconsulting.com',
      licenses_total: 10,
      licenses_used: 10
    },
    login: {
      method: 'individual',
      instructions: 'Use your @threshconsulting.com email and password (2FA required)'
    },
    guardrails: {
      do: [
        'Enable 2FA (required)',
        'Organize files in shared team/client folders',
        'Use "Internal sharing" for company docs',
        'Use professional email signatures'
      ],
      dont: [
        'Use "Anyone with link" for sensitive documents',
        'Forward company emails to personal email',
        'Store personal files on company Drive',
        'Click suspicious links (report phishing)'
      ]
    },
    resources: [
      { title: 'Workspace Guide', url: '/sops/tools/google' }
    ],
    folder_structure: [
      'Thresh Consulting (Shared Drives)',
      '├── 🤝 Clients',
      '│   └── [Client Name]',
      '│       ├── 01 — Sales & Proposals',
      '│       ├── 02 — Contracts & Legal',
      '│       ├── 03 — Discovery & Strategy',
      '│       ├── 04 — Design *(links to Figma — not file storage)*',
      '│       ├── 05 — Development *(links to GitHub — not file storage)*',
      '│       ├── 06 — Deliverables & Final Assets',
      '│       └── 07 — Meeting Notes & Communication',
      '├── 🏢 Internal',
      '│   ├── Operations & Policies',
      '│   ├── Templates',
      '│   ├── Finance & Accounting *(restricted)*',
      '│   ├── HR & People *(restricted)*',
      '│   └── Brand & Marketing',
      '└── 📚 Knowledge Base',
      '    ├── Playbooks & Frameworks',
      '    ├── Case Studies',
      '    └── Tech & Tool Documentation'
    ]
  },
  {
    id: 'addigy',
    name: 'Addigy',
    tagline: 'Device management & security',
    description: 'Addigy is a Mobile Device Management (MDM) platform for managing and securing company MacBooks.',
    category: ['security'],
    logo: '🔒',
    launch_url: 'https://addigy.com',
    why_we_use_it: 'Centralized device security, remote software deployment, and device monitoring.',
    governance: [
      'Keep MDM profile installed at all times',
      'Allow IT to push security updates and software',
      'Report lost or stolen devices immediately to IT',
      'Never bypass or disable security settings'
    ],
    access: {
      roles: ['all'],
      admin: 'it@threshconsulting.com',
      licenses_total: 10,
      licenses_used: 10
    },
    login: {
      method: 'team_account',
      instructions: 'Automatic enrollment on company MacBooks (no user login required)'
    },
    guardrails: {
      do: [
        'Keep device enrolled in Addigy',
        'Allow software updates pushed by IT',
        'Report lost/stolen device immediately',
        'Enable FileVault encryption (required)'
      ],
      dont: [
        'Remove or bypass Addigy MDM profile',
        'Disable security features (firewall, FileVault)',
        'Ignore update notifications from IT'
      ]
    },
    resources: [
      { title: 'Device Security Guide', url: '/sops/security/addigy' }
    ]
  },
  {
    id: '1password',
    name: '1Password',
    tagline: 'Password manager',
    description: '1Password is a secure password manager for storing and sharing credentials, API keys, and sensitive information.',
    category: ['security'],
    logo: '🔐',
    launch_url: 'https://1password.com',
    why_we_use_it: 'Secure password storage, team credential sharing, and strong password generation.',
    governance: [
      'Store all work passwords in 1Password only',
      'Never share master password with anyone (including IT)',
      'Use 1Password to generate strong passwords (20+ characters)',
      'Enable biometric unlock on all devices'
    ],
    access: {
      roles: ['all'],
      admin: 'it@threshconsulting.com',
      licenses_total: 10,
      licenses_used: 10
    },
    login: {
      method: 'individual',
      instructions: 'Sign in with your @threshconsulting.com email and master password'
    },
    guardrails: {
      do: [
        'Store ALL work passwords in 1Password',
        'Use 1Password to generate strong passwords (20+ chars)',
        'Enable biometric unlock (Face ID, fingerprint)',
        'Keep master password secure and unique'
      ],
      dont: [
        'Share your master password with anyone (even IT)',
        'Write down master password',
        'Reuse passwords across services',
        'Store passwords in browsers or plain text'
      ]
    },
    resources: [
      { title: '1Password Guide', url: '/sops/security/1password' }
    ]
  }
];

export const getToolsByCategory = (category: string) => {
  return tools.filter(tool => tool.category.includes(category));
};

export const getToolById = (id: string) => {
  return tools.find(tool => tool.id === id);
};