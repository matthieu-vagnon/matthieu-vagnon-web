# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal portfolio web application for Matthieu Vagnon, a front-end developer. Built with Next.js 15, TypeScript, Tailwind CSS, and Framer Motion. Deployed on Vercel.

**Application Languages:** French, English (Japanese partial support)
**Codebase Language:** English

## Common Commands

```bash
# Development
npm run dev          # Start development server with Turbopack on http://localhost:3000
npm run build        # Build for production
npm start           # Start production server
npm run lint        # Run ESLint

# Dependencies
npm install         # Install all dependencies
```

## Tech Stack

- **Language:** TypeScript (strict mode enabled, avoid `any` unless unavoidable)
- **Framework:** Next.js 15 with App Router
- **Routing:** Next.js App Router with internationalization
- **UI Library:** ShadCN/UI and Radix UI components
- **Styling:** Tailwind CSS v4
- **Animation:** Framer Motion
- **i18n:** next-intl for internationalization
- **Linting:** ESLint
- **Testing:** Cypress (configured)

## Architecture

### Internationalization (i18n)

The app uses next-intl with a locale-based routing structure:
- Middleware (`src/middleware.ts`) handles locale detection and routing
- Routing configuration in `src/i18n/routing.ts` defines supported locales (en, fr)
- Default locale set via `NEXT_PUBLIC_DEFAULT_LOCALE` environment variable
- Translation files in `/messages/` directory (en.json, fr.json, ja.json)
- Locale-specific routes follow pattern: `src/app/[locale]/`

### Data Structure

Content data (profile, projects, testimonials) stored in `/data/` directory as TypeScript files with React components. These files export structured data using the global types defined in `src/types/global.t.ts`.

Key data files:
- `data/profile.tsx` - Personal profile, experience, education, tech stack
- `data/projects.tsx` - Case studies and project portfolio
- `data/testimonials.tsx` - Client testimonials

Data uses `MultiLingual` type for locale-specific content with fallback logic handled by `getTranslatedData()` utility in `src/lib/utils.ts`.

### Directory Structure

```
/src
  /app/[locale]        # Locale-specific routes (App Router)
    /case-studies      # Project case studies with dynamic [project] routes
    /profile           # Profile page
    layout.tsx         # Root layout with providers and fonts
    page.tsx          # Home page
  /components          # React components (flat structure, ~40+ components)
    /svg              # Custom SVG icon components
  /hooks               # Custom React hooks (5 custom hooks)
  /i18n               # Internationalization configuration
  /lib                # Utility functions
  /types              # Global TypeScript types
  middleware.ts       # Next.js middleware for i18n routing

/data                  # Content data files (profile, projects, testimonials)
/messages              # i18n translation JSON files
/public               # Static assets
```

### Path Aliases

Configured in `tsconfig.json`:
- `@/*` → `./src/*`
- `@/public/*` → `./public/*`
- `@/data/*` → `./data/*`

Always use absolute imports with these aliases.

### Custom Hooks

Located in `src/hooks/`:
- `useAccentColor.tsx` - Manages theme accent colors
- `useDockStatus.tsx` - Controls dock component visibility/state
- `useMagneticStatus.tsx` - Handles magnetic hover effects
- `useMousePositionRef.tsx` - Tracks mouse position
- `useTestimonialsStatus.tsx` - Manages testimonials display state

### Key Utilities

`src/lib/utils.ts`:
- `cn()` - Combines Tailwind classes using clsx and tailwind-merge
- `getTranslatedData()` - Retrieves locale-specific data with fallback logic
- `getFlattenedNode()` - Extracts text content from React nodes

### Layout & Providers

The root layout (`src/app/[locale]/layout.tsx`) wraps the app with multiple providers:
- `NextIntlClientProvider` - i18n translations
- `AccentColorProvider` - Theme accent color management
- `DockStatusProvider` - Dock component state
- `MagneticStatusProvider` - Magnetic effects state
- `TestimonialsStatusProvider` - Testimonials display state

Multiple font families loaded via next/font/google for multi-language support.

### Environment Variables

Required in `.env.local`:
```
NEXT_PUBLIC_URL=              # Base URL for the application
NEXT_PUBLIC_DEFAULT_LOCALE=   # Default locale (en or fr)
```

## Coding Standards

Follow principles from `.github/copilot-instructions.md`:

**Design Principles:**
- DRY, KISS, YAGNI, SOLID
- No prop drilling; use context, state management, or cache
- Prioritize security; prevent injection vulnerabilities
- Avoid `setTimeout`/`setInterval`; prefer listeners or effects
- Separate code blocks (imports, types, hooks, logic, return) with blank lines

**Naming Conventions:**
- camelCase: variables, functions (`fetchData`, `userName`)
- PascalCase: components, classes, types (`UserProfile`, `NavBar`)
- UPPER_SNAKE_CASE: constants (`API_URL`)
- Boolean: prefix with `is`, `has`, `should` (`isVisible`)
- Event handlers: prefix with `on` (`onClick`)
- Handler functions: prefix with `handle` (`handleSubmit`)

**TypeScript:**
- Never use `any` unless unavoidable
- Use try-catch for error handling with clear messages

**UI/UX:**
- Ensure responsiveness for all screen sizes
- Use Radix UI for accessible components
- Apply Framer Motion for smooth animations

**Components:**
- Components are mostly in a flat structure in `src/components/`
- SVG icons as React components in `src/components/svg/`
- Use ShadCN/UI and Radix UI patterns for new components
