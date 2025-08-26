# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview
This is a personal portfolio/blog website built with Next.js 13+ using the App Router architecture. The site features MDX-based articles, dark mode support, and professional timeline displays.

## Essential Commands

### Development
```bash
npm run dev          # Start development server on http://localhost:3000
npm run build        # Create production build
npm run start        # Start production server
npm run lint         # Run ESLint with Next.js configuration
```

## Architecture & Structure

### App Router Pages
The site uses Next.js App Router with pages located in `src/app/`:
- Each route has its own folder with `page.jsx`
- Articles are MDX files in `src/app/articles/[slug]/page.mdx`
- Dynamic article discovery via `src/lib/articles.js` using fast-glob

### Component Organization
- **Layout Components** (`src/components/`): Header, Footer, Layout wrapper
- **Content Components**: ArticleLayout for blog posts, SimpleLayout for standard pages
- **All components are functional React components**

### Content Management
- Articles written in MDX format with frontmatter metadata (title, description, author, date)
- Article images stored alongside MDX files in article folders
- RSS feed automatically generated from articles at `/feed.xml`

### Styling Approach
- Tailwind CSS with custom typography plugin
- Dark mode support via next-themes
- Prettier configured with Tailwind plugin (single quotes, no semicolons)
- Path imports use `@/` prefix mapping to `src/`

### Key Configuration Files
- `next.config.mjs`: MDX support with rehype-prism for syntax highlighting
- `tailwind.config.js`: Custom typography and dark mode configuration
- `jsconfig.json`: Path mapping for `@/*` imports