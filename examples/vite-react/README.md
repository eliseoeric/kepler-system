# Kepler Design System - Vite + React Example

This is a Vite + React example application demonstrating advanced patterns with the Kepler Design System, including version coexistence capabilities.

## Features

- **Theme Switching**: Live demonstration of Atlas ↔ NordFox theme switching with visual feedback
- **Component Showcase**: Examples of all major component packages
- **Version Coexistence Demo**: Foundation for demonstrating v1 + v2 component usage side-by-side
- **Modern Tooling**: Built with Vite, React 18, and TypeScript for fast development

## Getting Started

From the repository root:

```bash
# Install dependencies
pnpm install

# Start the Vite development server
pnpm --filter @kepler/example-vite-react dev
```

The application will be available at [http://localhost:3002](http://localhost:3002).

## Architecture Highlights

### Multi-Package Integration

This example demonstrates importing components from different domain packages:

```tsx
import { Button } from '@eliseoeric/primitives';
import { Input, Field, Label } from '@eliseoeric/forms';
import { Alert } from '@eliseoeric/feedback';
import { Typography } from '@eliseoeric/typography';
import { Logo, Footer } from '@eliseoeric/layout';
import { NavbarWithSearch } from '@eliseoeric/navigation';
```

### Theme System

The application includes a comprehensive theme switching demonstration:

```tsx
const toggleTheme = () => {
  const newTheme = currentTheme === 'atlas' ? 'nordfox' : 'atlas';
  setCurrentTheme(newTheme);
  document.documentElement.setAttribute('data-brand', newTheme);
};
```

### Version Coexistence (Planned)

This example includes infrastructure for demonstrating version coexistence once the multi-package versioning system is implemented:

- NPM aliases for multiple component versions
- CSS variable namespacing by version
- Side-by-side component rendering
- Style isolation between versions

## Key Differences from Next.js Example

- **Client-Side Only**: Pure React SPA without SSR considerations
- **Version Coexistence Focus**: Prepared for advanced versioning demonstrations
- **Development Speed**: Vite's fast HMR for rapid development cycles
- **Bundle Analysis**: Easier to analyze component bundle sizes and dependencies

## Development Notes

This example serves as a testbed for:

1. **Component Integration Testing**: Ensuring all packages work together seamlessly
2. **Theme System Validation**: Testing theme switching and CSS custom property inheritance
3. **Version Strategy Planning**: Foundation for version coexistence implementation
4. **Performance Analysis**: Bundle size and runtime performance evaluation
