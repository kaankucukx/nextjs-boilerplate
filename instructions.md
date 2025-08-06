# 🧠 TrendPulse Frontend Project Setup

This guide outlines the complete base infrastructure setup for the **TrendPulse** SaaS frontend application, using **Next.js 14+ App Router**, **pnpm**, and modern best practices for large-scale, maintainable applications.

---

## ✅ Technologies

- Next.js 14+ (App Router)
- TypeScript
- Styled Components with SSR
- Zustand for global state
- React Query (TanStack) for async and cache management
- next-intl for multilingual support (EN + TR)
- ESLint with Airbnb style rules and no default exports
- Prettier formatting
- pnpm as the package manager (required)
- Named exports only across the entire codebase

---

## 🛠 Step-by-Step Instructions

### 1. Initialize the Project

- Create a new Next.js App Router project using TypeScript and ESLint enabled
- Use **pnpm** as the package manager

### 2. Install Required Dependencies

- Add runtime dependencies: styled-components, zustand, @tanstack/react-query, next-intl
- Add development dependencies: ESLint with airbnb-typescript config, Prettier, husky, lint-staged

### 3. Configure Babel

- Enable the styled-components plugin for server-side rendering support

### 4. Configure Next.js

- Enable the experimental `turbo` flag (optional)
- Enable the styled-components compiler option
- Add `i18n` config for English and Turkish

### 5. Set Up Folder Structure

- Create a modular folder structure under `/src` with the following top-level folders:
  - `app`
  - `components`
  - `features`
  - `services`
  - `stores`
  - `hooks`
  - `lib`
  - `styles`
  - `i18n`
  - `constants`
  - `types`

### 6. Setup Theming and Global Styles

- Use Styled Components with a theme system
- Define light and dark theme objects
- Implement a global style using createGlobalStyle
- Wrap the app in a ThemeProvider
- Use Zustand for storing and toggling theme state

### 7. Setup i18n

- Configure `next-intl`
- Create locale files for `en` and `tr`
- Enable language detection with a fallback
- Implement internationalized strings using `useTranslations()`

### 8. Set Up State Management

- Use Zustand to manage UI and feature-level global state
- Create separate stores per domain (theme, keyword list, etc.)
- Use React Query to fetch and cache remote data
- Add QueryClientProvider in the root layout
- Add Devtools support for development mode

### 9. Enforce Code Standards

- Use only named exports — disable all default exports
- Configure ESLint with:
  - airbnb-typescript
  - import/order rules
  - react-hooks best practices
  - no console logs in production
- Configure Prettier for consistent formatting
- Use `.editorconfig` for consistent IDE behavior

### 10. Add Pre-commit Hooks

- Use Husky to run linting and formatting before each commit
- Set up lint-staged to format only staged files

### 11. Add Absolute Import Paths

- Configure `tsconfig.json` to use `@/` as baseUrl
- Allow importing modules using clean paths like `@/components/Button`

### 12. Add NPM Scripts

- Add scripts for:
  - `dev`
  - `build`
  - `start`
  - `lint`
  - `format`

---

## 📌 Development Principles

- Maintain strict separation of concerns: logic, state, and UI should be modular
- Avoid shared mutable state; use per-feature scoped state
- Group related code by domain, not by type
- Use reusable components, hooks, and services
- Always use named exports
- Prefer small, composable components over large monoliths
- Use React Server Components where possible
- Avoid unnecessary hydration and re-renders

---

## ✅ Outcome

By completing this setup, you'll have:

- A production-ready frontend infrastructure
- High DX (Developer Experience) with pnpm, ESLint, and Prettier
- Modular, scalable, and clean project structure
- Internationalized UI with theme support
- State and data logic decoupled from presentation

---

**Next Step:** Continue to `02-compare-page.md` to implement the Compare Trends feature page.
