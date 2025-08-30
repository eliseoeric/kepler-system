# Kepler Design System - Next.js Example

This is a Next.js example application demonstrating how to use the Kepler Design System packages in a real-world application.

## Features

- **Theme Switching**: Live demonstration of Atlas ↔ NordFox theme switching
- **Component Showcase**: Examples of all major component packages
- **Token-Driven Styling**: All styling uses CSS custom properties from design tokens
- **Modern Next.js**: Built with Next.js 15, React 19, and TypeScript

## Getting Started

From the repository root:

```bash
# Install dependencies
pnpm install

# Start the Next.js development server
pnpm --filter @kepler/example-nextjs dev
```

The application will be available at [http://localhost:3001](http://localhost:3001).

## Package Usage Examples

### Importing Components

```tsx
import { Button } from '@eliseoeric/primitives';
import { Input, Field, Label } from '@eliseoeric/forms';
import { Alert } from '@eliseoeric/feedback';
import { Typography } from '@eliseoeric/typography';
```

### Theme Switching

```tsx
// Switch between themes programmatically
document.documentElement.setAttribute('data-brand', 'nordfox');
document.documentElement.setAttribute('data-brand', 'atlas');
```

### Using Design Tokens

The application automatically inherits all design tokens through CSS custom properties:

```css
/* Tokens are available as CSS variables */
.custom-element {
  background-color: var(--color-primary);
  padding: var(--space-4);
  border-radius: var(--border-radius-md);
}
```

## Architecture

This example demonstrates:

- **Multi-package imports**: Components from different domain packages
- **Theme coexistence**: Runtime theme switching without code changes
- **Token consumption**: All styling via CSS custom properties
- **Modern patterns**: Next.js App Router, TypeScript, Tailwind CSS integration
