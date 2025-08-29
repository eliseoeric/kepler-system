# Kepler Design System

A token-driven design system prototype demonstrating multi-brand theming, multi-package architecture, and automated Figma integration. Built with TypeScript, React, and modern tooling to showcase scalable design system patterns.

## Project Overview

Kepler is a Frontend Guild prototype that proves key design system concepts:

- Token-driven theming enabling multi-brand palettes without code changes
- Multi-package architecture with independent component versioning
- Automated tooling for testing, documentation, and releases
- Figma integration with design-code synchronization
- Application Blueprint for design drift prevention

## Architecture

### Monorepo Structure

This is a Turborepo monorepo using pnpm for package management:

```
packages/
├── tokens/              # Design tokens (Style Dictionary)
├── core/               # Shared utilities, hooks, types
├── primitives/         # Button, Avatar, Dropdown
├── forms/              # Input, Fieldset, validation
├── feedback/           # Alert, Toast, status components
├── layout/             # Footer, Logo, UserContextMenu
├── navigation/         # Navbar, routing components
├── typography/         # Typography system
├── actions/            # Action-based components
├── data-display/       # Tables, lists, data components
├── styles/             # Global CSS and Tailwind
├── eslint-config/      # Shared linting rules
├── typescript-config/  # Shared TypeScript configs
└── tailwind-config/    # Tailwind configuration

apps/
└── docs/               # Storybook documentation
```

### Design Token System

Style Dictionary powers a sophisticated token system:

- **Base tokens**: Core color, spacing, typography, motion values
- **Multi-brand themes**: Atlas and NordFox theme overrides
- **CSS Custom Properties**: All components consume tokens via CSS variables
- **Zero hardcoded values**: Enforced via ESLint rules

## Quick Start

### Prerequisites

- Node.js 18+
- pnpm 8.15.6+

### Installation

```bash
git clone
cd kepler
pnpm install
```

### Development

```bash
# Start all development servers
pnpm dev

# Start Storybook documentation site
pnpm --filter docs dev

# Build all packages
pnpm build

# Run tests
pnpm test

# Run linting
pnpm lint
```

## Development Workflow

### Core Commands

| Command       | Description                                |
| ------------- | ------------------------------------------ |
| `pnpm dev`    | Start development servers for all packages |
| `pnpm build`  | Build all packages and apps                |
| `pnpm lint`   | Run linting across all packages            |
| `pnpm test`   | Run all tests (unit, integration, visual)  |
| `pnpm clean`  | Clean all build artifacts and node_modules |
| `pnpm format` | Format code using Prettier                 |

### Package-Specific Commands

| Command                                  | Description                        |
| ---------------------------------------- | ---------------------------------- |
| `pnpm --filter docs dev`                 | Start Storybook documentation site |
| `pnpm --filter @eliseoeric/tokens build` | Build design tokens                |

### Testing Strategy

- **Unit Tests**: Vitest + React Testing Library (configured for forms and primitives packages)
- **Visual Testing**: Storybook + Playwright integration for component behavior
- **Accessibility**: axe-core integration via Storybook addon for a11y compliance
- **Type Checking**: TypeScript strict mode across all packages

## Key Features

### Token-Driven Theming

- All styling through CSS custom properties, no hardcoded values
- Multi-brand support with Atlas and NordFox theme implementations
- Runtime theme switching via data attributes
- ESLint rules prevent hardcoded colors and spacing

### Figma Integration

- Code Connect for automated component-to-Figma mapping

### Application Blueprint

Machine-readable `app.blueprint.yaml` schema tracking:

- Component-to-Figma mapping with sync status
- Design system versions in use
- Quality gates (testing, accessibility, visual regression)
- Telemetry and monitoring requirements

### Quality Assurance

- Conventional Commits with automated changelog generation
- Changesets for semantic versioning and release management
- Pre-commit hooks with lint-staged for code quality
- Automated releases to npm with CI/CD pipeline

## Contributing

### Development Setup

1. Ensure Node.js 18+ and pnpm 8.15.6+ are installed
2. Run `pnpm install` to install dependencies
3. Run `pnpm dev` to start development servers
4. Visit `http://localhost:6006` for Storybook documentation

### Component Development Guidelines

- Follow existing patterns and reference existing components for conventions
- Use CSS custom properties for styling, no hardcoded values
- Implement ARIA attributes and keyboard navigation for accessibility
- Include unit tests and Storybook stories for all components
- Use strict TypeScript with proper interface definitions

### Code Quality

- ESLint enforces code style and token usage patterns
- Prettier handles code formatting automatically
- Husky + lint-staged runs quality checks on commit
- Conventional Commits required for changelog generation

## Success Metrics

This prototype successfully demonstrates:

- Token-driven theming with zero hardcoded design values
- Multi-package architecture with clean separation of concerns
- Automated tooling for testing, documentation, and releases
- Figma integration foundations for design-code synchronization
- Scalable patterns for enterprise design system development

---

Built with TypeScript, React, Turborepo, Storybook, Style Dictionary, Tailwind CSS, and modern design system tooling.
