# 🚀 Quick Start Guide

Get the Thresh Portal running in 3 simple steps!

## Step 1: Install Dependencies

```bash
npm install
```

This will install Next.js, React, Tailwind CSS, and all required packages.

## Step 2: Start Development Server

```bash
npm run dev
```

## Step 3: Open in Browser

Navigate to: **http://localhost:3000**

---

## What You'll See

### 🏠 Dashboard
- Metrics overview (Active Projects, Team Velocity, Recent Wins)
- Tech news feed (simulated data - ready for API integration)
- Quick links to all sections

### 🔧 Tools & Apps
- 7 tools pre-configured: Figma, Slack, Claude Pro, GitHub, Google Workspace, Addigy, 1Password
- Search and filter by category
- Click "Launch" to open tools (external links)
- Click "Details" for full information including security guardrails

### 📚 SOPs
- Documentation organized by category
- Onboarding guides for different roles
- Brand guidelines, templates, and assets
- Searchable knowledge base

### 👥 Team
- Org chart visualization
- 8 team members with profiles
- Filter by team (Product, Design, Engineering, Leadership)
- Contact information for each member

### 📋 Projects
- 5 sample projects with different statuses
- Health indicators (Green/Yellow/Red)
- Tech stack, team assignments, and links
- Recent updates for each project

---

## Next Steps

### Customize Content

1. **Tools:** Edit `src/data/tools.ts` to add/modify tools
2. **Team:** Update team members in `src/app/team/page.tsx`
3. **Projects:** Modify projects in `src/app/projects/page.tsx`
4. **Branding:** Change colors in `tailwind.config.js`

### Add Real APIs

Replace simulated data with real API calls:
- News API integration for Dashboard
- Jira API for project health
- Google Workspace for authentication

### Deploy to Cloudflare

1. Push to GitHub
2. Connect to Cloudflare Pages
3. Build command: `npm run build`
4. Deploy!

---

## Troubleshooting

**Port already in use?**
```bash
# Use a different port
npm run dev -- -p 3001
```

**Dependency errors?**
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

**Build errors?**
```bash
# Clean build
rm -rf .next
npm run build
```

---

## Commands Cheat Sheet

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

---

**Need help?** Check the full README.md for detailed documentation.
