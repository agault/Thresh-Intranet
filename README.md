# Thresh Portal - Internal Company Portal

A comprehensive internal portal for Thresh Consulting built with Next.js, React, and Tailwind CSS.

TODO: Create compatible frontend design. - Shania

## Features

### ✅ Implemented Pages

1. **Dashboard (Home)**
   - Product scorecard with key metrics
   - Tech news feed (simulated data - ready for API integration)
   - Quick links to all sections
   - Recent updates

2. **Tools & Apps**
   - Complete tool directory (Figma, Slack, Claude, GitHub, Google Workspace, Addigy, 1Password)
   - Search and category filtering
   - One-click launch buttons
   - Detailed tool information modals with:
     - What it is / Why we use it
     - Access information
     - Login instructions
     - Security guardrails (DO's and DON'Ts)
     - Resources and guides

3. **SOPs (Knowledge Base)**
   - Searchable documentation
   - Organized by category:
     - Onboarding (General, PM, Designer, Developer)
     - Brand Guidelines
     - Design Standards
     - Coding Standards
     - Templates
     - Standard Assets

4. **Team & Org Chart**
   - Visual organization structure
   - Team directory with profiles
   - Filter by team (Product, Design, Engineering)
   - Contact information (email, Slack, phone)
   - Skills and bio for each member

5. **Projects**
   - Active project tracking
   - Health indicators (Green/Yellow/Red)
   - Status filtering (In Progress, Planning, Completed, On Hold)
   - Tech stack per project
   - Team assignments
   - Links to tools (Figma, GitHub, Jira, Slack)
   - Recent updates

## Tech Stack

- **Framework:** Next.js 14 (React 18)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Icons:** Lucide React
- **Deployment Ready:** Cloudflare Pages compatible

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. **Install dependencies:**

```bash
npm install
```

2. **Run development server:**

```bash
npm run dev
```

3. **Open your browser:**

Navigate to [http://localhost:3000](http://localhost:3000)

## Project Structure

```
thresh-portal/
├── src/
│   ├── app/                 # Next.js app directory
│   │   ├── page.tsx        # Dashboard (home)
│   │   ├── tools/          # Tools & Apps page
│   │   ├── sops/           # SOPs page
│   │   ├── team/           # Team directory
│   │   ├── projects/       # Projects page
│   │   ├── layout.tsx      # Root layout with navigation
│   │   └── globals.css     # Global styles
│   ├── components/
│   │   └── Navigation.tsx  # Main navigation component
│   └── data/
│       └── tools.ts        # Tools data and types
├── public/                 # Static assets
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── next.config.js
```

## Key Features

### Navigation

- Persistent top navigation bar
- Active page highlighting
- Quick access to all major sections

### Tools & Apps Page

- **Search functionality** - Find tools quickly
- **Category filters** - Design, Development, Communication, AI, Security, Productivity
- **Launch buttons** - Direct links to external tools
- **Detailed modals** - Complete information for each tool
- **Security guardrails** - Clear DO's and DON'Ts for safe usage

### Responsive Design

- Mobile-friendly layouts
- Tablet and desktop optimized
- Tailwind CSS utilities for responsive breakpoints

## Future Enhancements (Roadmap)

### API Integrations

- NewsAPI + Hacker News API for real tech news feed
- Jira API for live project health tracking
- LinkedIn API for auto-populated team profiles

### Authentication

- Google Workspace SSO integration
- Role-based access control (Read vs. CRUD permissions)
- Secure session management

### Advanced Features

- AI chatbot for internal questions
- KPI and OKR progress tracker
- Automated resume screening tool
- Real-time notifications

## Deployment

### Cloudflare Pages

This project is ready for Cloudflare Pages deployment:

1. Push code to GitHub
2. Connect repository to Cloudflare Pages
3. Build settings:
   - Build command: `npm run build`
   - Build output directory: `.next`
   - Framework preset: Next.js

### Environment Variables

When deploying, set these environment variables (when APIs are integrated):

```
NEXT_PUBLIC_NEWS_API_KEY=your_newsapi_key
NEXT_PUBLIC_HACKER_NEWS_API=https://hacker-news.firebaseio.com/v0
# Add more as needed
```

## Customization

### Branding

- Update colors in `tailwind.config.js`
- Modify logo in `Navigation.tsx`
- Adjust color scheme using Tailwind utilities

### Content

- Edit tools in `src/data/tools.ts`
- Modify SOPs in `src/app/sops/page.tsx`
- Update team members in `src/app/team/page.tsx`
- Add projects in `src/app/projects/page.tsx`

### Styling

- Global styles in `src/app/globals.css`
- Component-level styling uses Tailwind classes
- Custom theme colors: `thresh-blue`, `thresh-dark`

## Development Tips

### Adding a New Page

1. Create file in `src/app/[pagename]/page.tsx`
2. Add route to navigation in `src/components/Navigation.tsx`
3. Follow existing page structure for consistency

### Adding a New Tool

Edit `src/data/tools.ts` and add a new tool object with all required fields.

### Modifying Metrics

Update the `metrics` array in `src/app/page.tsx` (Dashboard) to show different KPIs.

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## License

Internal use only - Thresh Consulting

## Support

For issues or questions, contact: dev-team@threshconsulting.com

---

**Built with ❤️ by the Thresh team**

## MVP:

- Landing page - Thresh metrics (tbd), News API- RSS FEED (Tech news [AI, digital products])
  - NewsAPI (has a free tier, easy integration) + Hacker News API (completely free).
  - If no API Convert RSS feeds from TechCrunch, VentureBeat, MIT Technology Review, The Verge into JSON
- House all SOPs
  - Searchable knowledge base
  - Markdown files or simple CMS
  - Organized by category/tags
- Info Tools & Apps
- Onboarding
  - General
  - Product Managers
  - Designers
  - Devs
- Org Chart || Teams & Members
- Thresh Standards
  - Brand Guidelines
    - Design Standards
    - Coding Standards
  - Templates
    - Slide Deck
    - Email Signature
    - PRD
  - Folder with standard assets (Imgs)

- Login with certain users having CRUD access

---

### _Flags_

- We are moving to **<u>Cloudflare</u>** keep that in mind when building
- we need to choose the best code stack that will mirror our branded eventually. Framer -> React || Vue || ?
- Tech APIs most are paid, may need to us RSS feeds to custom build the news carousel.

#### Critical Constraints

1. ✅ Moving to Cloudflare - entire stack must be Cloudflare-compatible
   - Cloudflare Pages for hosting
   - Cloudflare Workers for serverless functions
   - Cloudflare D1 or KV for data storage

2. 🤔 Code Stack Decision: Need to mirror eventual brand site migration
   - Current: Framer <- Branded site
   - Options: React || Vue || Next.js (React)
   - Recommendation: Next.js (React) for Cloudflare Pages compatibility + easier migration path

3. 💰 API Costs: Most tech news APIs are paid beyond free tiers
   - Use free tiers + caching strategy
   - Build custom RSS feed aggregator as fallback
   - Server-side API calls to hide keys

---

---

## Moonshot:

- Jira Ticket Scraper and Flagger
  - Auto-sync project health from Jira
  - Flag at-risk tickets/projects
  - Display sprint velocity
- Team member profiles (Pull from Linkedin API?)
  - Pull from LinkedIn API (with user consent)
  - Auto-populate bios, skills, work history
- Chat Bot
  - Internal AI assistant for answering SOP questions
  - Tool lookup ("Where's the Figma login?")
  - RAG on internal documentation
- KPI and OKR progress tracker
  - Visual dashboards for goals
  - Team-level and individual tracking
  - Quarterly OKR management

---

---

## Pages:

- Dashboard (The Home Base)
- SOPs (The Knowledge Base)
- Tools & Apps (What tools, why, and general info)
- Org Chart & Teams (The People)
- Projects (The Delivery)

---

---

### 1. Dashboard (The Home Base)

**Operational Optics:** High-level "Product Scorecard" (Health, Velocity, Success).

- KPI / OKR tracking
- Project Health (Green/Yellow/Red)
- Team Velocity (Sprint progress)
- Recent Wins
- (Placeholder metrics for MVP)

**Discovery Feed:** API-driven widget for Industry Tech News & Digital Consulting trends.

- NewsAPI + Hacker News API (cached daily)
- Filterable by topic: AI, Digital Products, Design, Development
- Click to read full article

**Quick Links:**

- Jump to: Tools & Apps, SOPs, Projects, Org Chart

---

### 2. SOPs (The Knowledge Base)

"The Thresh Way": Onboarding documentation on what it means to be "Product" at Thresh.

Resource Library: Templates, Brand Guidelines, and the Styleguide.

Brand Assets: Thresh-branded decks and the LinkedIn Welcome Graphic generator.

Training Vault: Standard Operating Procedures for internal workflows.

---

### 3. Tools & Apps (The Integration Hub)

**Centralized Access:** One-click login/entry to all external SaaS.

#### Page Layout:

- Grid of tool cards (like app icons)
- Each card shows:
  - Tool logo
  - Tool name
  - One-line description
  - **"Launch"** button (opens tool in new tab)
  - **"View Details"** button (expands full info)

#### Search & Filter:

- Search bar for finding tools
- Filter by category: Design, Development, Communication, AI, Security, Productivity
- Sort: Alphabetical, Most Used, Recently Added

---

#### Tool Card Details (Click to Expand):

**1. What It Is**

- Full description of the tool
- Key capabilities

**2. Why We Use It**

- Business justification
- Primary use cases at Thresh

**3. Who Has Access**

- Roles: All, Designers only, Devs only, etc.
- Admin/owner contact
- License count (X/10 used)

**4. How to Login** 🔐

- **For SSO tools:**
  - Badge: "Sign in with Google Workspace"
  - Instructions: "Click 'Sign in with Google' and use your @threshconsulting.com email"
- **For shared accounts:**
  - Username: team@threshconsulting.com
  - Password: **[Link to 1Password vault]** ← NEVER show password in plain text
- **For individual accounts:**
  - "Request access from [admin email]"

**5. Security Guardrails** ⚠️

- **✅ DO:**
  - Use for approved work purposes
  - Enable 2FA on your account
  - Keep credentials secure
  - Report suspicious activity
- **❌ DON'T:**
  - Share login credentials
  - Use for personal projects
  - Upload client confidential data (tool-specific)
  - Disable security features

**6. Tool Details**

- Cost: $X/month (admin view only)
- Integrations: Slack, Google Drive, etc.
- Resources: Official docs, internal training, usage guide

---

#### Tools to Include (MVP):

**Figma**

- **Category:** Design
- **Access:** Designers (edit), PMs/Devs (view/comment)
- **Login:** SSO via Google
- **✅ DO:**
  - Use for client projects and internal design work
  - Enable 2FA
  - Organize files in designated project folders
  - Use comments for feedback
- **❌ DON'T:**
  - Share login credentials
  - Download client files to personal devices without approval
  - Install unapproved plugins
  - Share client work publicly without approval

**Slack**

- **Category:** Communication
- **Access:** All team members
- **Login:** SSO via Google
- **✅ DO:**
  - Use threads to keep conversations organized
  - Set status when away or in meetings
  - Keep client work in private project channels
  - Use reactions for quick acknowledgments
- **❌ DON'T:**
  - Share client confidential info in public channels
  - Use @channel for non-urgent messages
  - Post passwords, API keys, or credentials
  - Respond to suspicious DMs

**Claude Pro (Team)**

- **Category:** AI
- **Access:** All team members
- **Login:** Team account (team@threshconsulting.com + individual SSO)
- **✅ DO:**
  - Use for drafting, editing, research
  - Anonymize/sanitize data before input
  - Review and fact-check all AI outputs
  - Use Projects feature to organize work
- **❌ DON'T:**
  - ⚠️ **CRITICAL:** NEVER input client confidential data, PII, proprietary info, unreleased products
  - Never paste API keys, passwords, credentials
  - Never input code with sensitive business logic
  - Don't present AI work as original research without verification

**GitHub**

- **Category:** Development
- **Access:** Devs (full), Designers/PMs (read)
- **Login:** Individual GitHub + SSO
- **✅ DO:**
  - Enable 2FA (required)
  - Use SSH keys or Personal Access Tokens
  - Code review via Pull Requests
  - Commit frequently with clear messages
  - Document code with README
- **❌ DON'T:**
  - ⚠️ **CRITICAL:** NEVER commit API keys, passwords, or secrets
  - Never force push to main/production branches
  - Never commit client proprietary code without rights
  - Never share SSH keys or tokens

**Google Workspace**

- **Category:** Productivity
- **Access:** All team members
- **Login:** Individual Google account (@threshconsulting.com)
- **✅ DO:**
  - Enable 2FA (required)
  - Organize files in shared team/client folders
  - Use "Internal sharing" for company docs
  - Use professional email signatures
- **❌ DON'T:**
  - Use "Anyone with link" for sensitive documents
  - Forward company emails to personal email
  - Store personal files on company Drive
  - Click suspicious links (report phishing)

**1Password**

- **Category:** Security
- **Access:** All team members (required)
- **Login:** Individual account + team vault
- **✅ DO:**
  - Store ALL work passwords in 1Password
  - Use 1Password to generate strong passwords (20+ chars)
  - Enable biometric unlock (Face ID, fingerprint)
  - Keep master password secure and unique
- **❌ DON'T:**
  - Share your master password with anyone (even IT)
  - Write down master password
  - Reuse passwords across services
  - Store passwords in browsers or plain text

---

### 4. Org Chart & Teams (The People)

Engineering, Design & Product Team: Bio, roles, and contact info.

Eminence Plan: Tracking team demos and public-facing thought leadership.

---

### 5. Projects (The Delivery)

**Project Health:** Live status of current builds.

- Green/Yellow/Red health indicators
- Recent updates
- Team assigned

**The "Stack" per Project:** Which tech/tools are assigned to which initiative.

- Tech stack used
- Team members
- Links: Figma files, GitHub repos, Jira board, Slack channel

**Archives:** Record of past demos and project outcomes.

- Completed projects
- Lessons learned
- Reusable components

**Features:**

- Filter by: Status, Client, Team
- Project detail pages (click to expand)
- Jira integration (post-MVP)

---

---

## Internal Tech Architecture (Mental Model)

#### Rough Data Logic

**CRUD Rules:** General users = Read Only. Leadership/Admin = Edit/Create.

**Data Pulls:** Needs to talk to Jira (for Project Health) and external News APIs (for Discovery).

#### Authentication & Permissions

- Google Workspace SSO (@threshconsulting.com)
- General Users: Read-only access to all pages
- Leadership/Admin: Full CRUD (Create, Read, Update, Delete)

#### Data Storage

- Cloudflare D1 (SQLite) for structured data (tools, users, projects)
- Cloudflare KV for caching (news feed, frequently accessed)
- Markdown files for SOPs (in repo, version controlled)

#### External Integrations

- NewsAPI + Hacker News API (server-side calls via Cloudflare Workers)
- RSS to JSON fallback (TechCrunch, VentureBeat, MIT Tech Review, The Verge)
- Jira API (post-MVP for project health)
- LinkedIn API (post-MVP for team profiles)

#### Deployment

- Cloudflare Pages for hosting
- GitHub for version control
- CI/CD: Auto-deploy on push to main

---

---

## Tech Stack Recommendation

TBD

---

---

## Key Takeaways

### For Tools & Apps Page:

1. **One-click launch** to every tool
2. **Login info accessible** but secure (link to 1Password, never plain text)
3. **Guardrails front and center** (DO's and DON'Ts for every tool)
4. **Admin can edit** everything via CRUD panel
5. **Search and filter** for easy discovery

### For Overall Portal:

1. Keep it **simple and fast** (POC that can be iterated)
2. **Cloudflare-first** architecture
3. **Google SSO** for authentication
4. **Role-based access** (read-only vs. CRUD)
5. **Mobile-friendly** from day one

---

---

## Next Steps

1. ✅ Finalize tech stack (Next.js + Cloudflare)
2. ✅ Create GitHub repo
3. ✅ Set up Cloudflare Pages project
4. ✅ Design mockups in Figma (Tools & Apps page priority)
5. ✅ Start with Tools & Apps page (highest value, easiest to demo)
6. ✅ Iterate based on team feedback

---

---
