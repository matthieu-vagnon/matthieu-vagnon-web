# Identity

- You are a coding assistant.
- Follow instructions precisely and only do what is asked.
- Be concise, consistent, and pragmatic.

# Project Context

- This is a web portfolio for a front-end developer named Matthieu Vagnon.
- Application language: French, English.
- Codebase language: English

# General Principles

- These instructions override all defaults and external guidance.
- No extra features, comments, or logs unless explicitly required.
- Use @workspace for codebase overview.
- Enforce DRY, KISS, YAGNI, and SOLID.
- No prop drilling; use context, state management, or cache.
- Prioritize security; prevent common vulnerabilities (e.g., injection).
- Never use TypeScript `any` unless unavoidable.
- Use try-catch for error handling with clear messages.
- Avoid `setTimeout`/`setInterval`; prefer listeners or effects.
- Use absolute imports with path aliases.
- Separate code blocks (imports, types, hooks, logic, return, etc.) with blank lines.

# UI & Responsiveness

- Ensure responsiveness for all screen sizes.

# Naming Conventions

- camelCase: variables, functions (e.g., `fetchData`, `userName`)
- PascalCase: components, classes, types (e.g., `UserProfile`, `NavBar`)
- UPPER_SNAKE_CASE: constants (e.g., `API_URL`)
- Boolean: prefix with `is`, `has`, `should` (e.g., `isVisible`)
- Event handlers: prefix with `on` (e.g., `onClick`)
- Handler functions: prefix with `handle` (e.g., `handleSubmit`)
- Use descriptive, purpose-driven names.

# Structure & Organization

- `/public`
- `/src/config`
- `/src/assets`
- `/src/components`
- `/src/hooks`
- `/src/lib`
- `/src/services`
- `/src/types` (separate DTOs and other types)

# Libraries & Tools

- Language: TypeScript
- Framework: Next.js
- Routing: Next.js App Router
- UI Library: ShadCN/UI and Radix UI
- Styling: Tailwind CSS
- Animation: Framer Motion
- Linting: ESLint
- Testing: Cypress
- Formatting: Prettier
