# Thresh Portal - Internal Company Portal

A comprehensive internal portal for Thresh Consulting built with Next.js, React, and Tailwind CSS.

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
