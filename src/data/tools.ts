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
}

export const tools: Tool[] = [
  {
    id: 'figma',
    name: 'Figma',
    tagline: 'Collaborative design platform',
    description: 'Figma is Thresh`s single source of truth for all design work — brand assets, UI/UX design, wireframes, prototypes, client presentations, and design systems. It is where creative concepts become tangible artifacts that clients and developers can interact with.',
    category: ['design', 'collaboration'],
    logo: '🎨',
    launch_url: 'https://figma.com',
    why_we_use_it: 'Industry-standard tool for digital design with real-time collaboration, easy client sharing, and seamless developer handoff.',
    governance: [
      '**Authentication:** SSO via Google Workspace. No personal Figma accounts for company work.',
      '**Plan:** Figma Organization (Enterprise or Business tier) to enable SSO enforcement, centralized admin, shared libraries, and branching/merging.',
      '**Permissions:** + *Org Admins:* Leadership / IT + *Full Editors:* Designers only + *Viewers (with Dev Mode or comment access):* Developers, Strategists, PMs',
      '**Naming Conventions:** Enforce consistent file naming — [Client] — [Project] — [Phase/Description]',
      '**External Sharing:** Client reviews happen via prototype links with expiration or view- only guest access. Never grant edit access to external stakeholders unless explicitly approved.',
      '**Asset Control:** Final, approved assets live in a locked &quot;Final&quot; page or project section. Only design leads can move work into this state.',
      '**No Downloads of Source Files:** Team members should not export or download .fig source files to local machines. Work stays in Figma&#39;s cloud.'
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
      '**Authentication:** SSO via Google Workspace. Enforce mandatory SSO on Slack Business+ or Enterprise Grid plan.',
      '**Plan:** Slack Business+ (minimum) to support SSO enforcement, data retention policies, and compliance features.',
      '**Permissions:** + *Workspace Admins:* Leadership / IT + *Channel creation:* Leads and above (prevent channel sprawl) + *Guest accounts:* Used sparingly for client collaborators via Slack Connect',
      '**Data Retention:** Set a company-wide retention policy (e.g., 1 year for all channels, 90 days for DMs). This reduces liability and keeps the workspace manageable.',
      '**Integrations:** + GitHub → Slack (PR notifications, deployment alerts) + Figma → Slack (comment notifications) + Google Drive → Slack (file sharing alerts) + Only approved integrations; team members cannot install arbitrary Slack apps without IT/admin approval',
      '**Sensitive Information:** No credentials, API keys, client PII, or financial data in Slack — *ever*. Use a password manager (e.g., 1Password) and link to secured docs instead.',
      '**External Sharing:** Slack Connect channels require admin approval. No unauthorized external guest invites.'
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
      '**Plan:** Claude Pro (Team plan when available, for centralized billing and admin controls). Monitor Anthropic\'s enterprise roadmap for SSO and admin features.',
      '**Authentication:** Individual Claude Pro accounts provisioned using Google Workspace email addresses. When Anthropic releases Team/Enterprise SSO support, migrate immediately.',
      '**Data Sensitivity Policy:** + General strategy frameworks, public info: *✅ Yes* + Internal project briefs (non-sensitive): *✅ Yes* + Draft copy, code snippets, wireframe descriptions: *✅ Yes* + Client names in general project context: *⚠️ Use judgment — anonymize when possible* + Client financials, contracts, legal documents: *❌ No — or only with client permission and awareness* + Passwords, API keys, credentials: *❌ Absolutely not* + Personal Identifiable Information (PII): *❌ No*',
      '**Disclosure:** Thresh should establish a clear internal and (where appropriate) client-facing position on AI use. Recommended stance: "We use AI tools to accelerate research and ideation. All deliverables are human-reviewed, refined, and validated."',
      '**Intellectual Property:** Team members should understand that prompts and outputs may inform model training depending on plan terms. Review Anthropic\'s data usage policies for the active plan tier. Pro plan conversations are not used for training by default — confirm this remains the case.',
      '**No Shadow AI:** Claude Pro is the approved AI tool. Team members should not use unauthorized AI tools (ChatGPT personal accounts, open-source models on personal devices) for client work without leadership approval.',
      '**Addigy Consideration:** If Claude is accessed via web browser (most likely), ensure Addigy policies don\'t inadvertently block claude.ai. If a desktop app becomes available, add it to the approved software list.'
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
      '**Authentication:** SSO via Google Workspace using GitHub Enterprise Cloud (or GitHub Team with SAML if budget is constrained). Enforce 2FA on all accounts regardless.',
      '**Plan:** GitHub Team (minimum) or Enterprise Cloud for SSO/SAML enforcement, audit logs, and advanced security features.',
      '**Permissions:** + *Org Owner:* Leadership / IT (1-2 people max) + *Maintainer:* Senior Developers / Tech Leads + *Write:* All developers + *Read:* Designers, PMs, Strategists (as needed) + *Outside Collaborator:* Contractors (per-repo, time-limited)',
      '**Branch Protection Rules:** + *main:* Require PR, require 1+ approving review, require status checks to pass, no force pushes, no deletions + *develop:* Require PR, require status checks to pass',
      '**Secrets Management:** Never commit API keys, credentials, or environment variables to repos. Use GitHub Secrets, environment variables in CI/CD, or a secrets manager.',
      '**.gitignore Standards:** Every repo must have a proper .gitignore — no node_modules, .env files, OS artifacts (.DS_Store), or IDE configs committed.',
      '**Dependency Security:** Enable Dependabot for automated vulnerability alerts and dependency updates. Review and merge Dependabot PRs weekly.',
      '**Client Code Ownership:** All client repos should have a LICENSE and README with clear ownership notes. Repos for completed/churned clients should be archived, not deleted.',
      '**Addigy Consideration:** Ensure Git and developer tooling (VS Code, terminal, Xcode CLI tools) are on the approved software list. SSH keys should be generated per-device and registered to GitHub accounts.'
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
      '**Authentication:** Native Google Workspace — this IS the SSO provider.',
      '**Plan:** Google Workspace Business Standard or Business Plus (for Vault, advanced sharing controls, and DLP).',
      '**Sharing Permissions:** + *Internal sharing (within org):* ✅ Default — team members can access Shared Drives relevant to their role + *External sharing (with clients):* ⚠️ Allowed with intentional, per-file/folder sharing. Use "Viewer" as default for external + *Public link sharing ("Anyone with the link"):* ❌ Prohibited for any client or sensitive internal document + *Download/copy/print by external viewers:* ❌ Disabled by default for sensitive documents',
      '**Access Control by Folder:** + *Contracts & Legal:* Restricted to Leadership + relevant PM + *Finance & Accounting:* Restricted to Leadership + Finance + *HR & People:* Restricted to Leadership + HR + *All other folders:* Accessible to relevant project team members',
      '**Data Loss Prevention (DLP):** If on Business Plus or Enterprise, enable Google Workspace DLP rules to detect and flag sensitive data (SSNs, credit card numbers, etc.) being shared externally.',
      '**Google Vault:** Enable retention policies and legal holds for compliance. Minimum 3-year retention on all business documents.',
      '**Version History:** Educate team on using Google Docs version history instead of creating manual "v1, v2, v3" copies. Name versions at key milestones.',
      '**Offboarding:** When a team member departs, transfer ownership of any remaining "My Drive" files to their manager via Google Admin console. Shared Drive content is unaffected.'
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
