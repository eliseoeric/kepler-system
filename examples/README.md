# Kepler Design System - Example Applications

This directory contains example applications demonstrating real-world usage of the Kepler Design System packages.

## Available Examples

### Next.js Example (`./nextjs/`)

A modern Next.js application showcasing:

- Server-side rendering with design system components
- Theme switching (Atlas ↔ NordFox)
- Multi-package component integration
- Production-ready patterns

**Development:** `pnpm example:nextjs` (runs on [localhost:3001](http://localhost:3001))

### Vite + React Example (`./vite-react/`)

A single-page application demonstrating:

- Fast development with Vite
- Version coexistence patterns (planned)
- Client-side theme switching
- Bundle size optimization

**Development:** `pnpm example:vite` (runs on [localhost:3002](http://localhost:3002))

## Quick Start

From the repository root:

```bash
# Install dependencies
pnpm install

# Run a specific example
pnpm example:nextjs     # Next.js example
pnpm example:vite       # Vite React example

# Run all examples + Storybook simultaneously
pnpm examples
```

## Architecture Overview

Both examples demonstrate:

### Multi-Package Integration

```tsx
import { Button } from '@eliseoeric/primitives';
import { Input, Field, Label } from '@eliseoeric/forms';
import { Alert } from '@eliseoeric/feedback';
import { Typography } from '@eliseoeric/typography';
import { Logo, Footer } from '@eliseoeric/layout';
import { NavbarWithSearch } from '@eliseoeric/navigation';
```

### Token-Driven Theming

```tsx
// Theme switching via data attributes
document.documentElement.setAttribute('data-brand', 'nordfox');
document.documentElement.setAttribute('data-brand', 'atlas');
```

### CSS Custom Properties

```css
.custom-component {
  background-color: var(--color-primary);
  padding: var(--space-4);
  border-radius: var(--border-radius-md);
}
```

## Development Features

### Hot Module Replacement

Both examples support fast refresh during development:

- **Next.js**: Automatic page reload and component refresh
- **Vite**: Lightning-fast HMR with React Fast Refresh

### TypeScript Integration

Full TypeScript support with:

- Component prop validation
- Design token type safety
- Import/export intellisense

### Tailwind CSS Integration

Both examples use Tailwind CSS with:

- Design system token integration
- Custom utility classes
- Responsive design patterns

## Component Usage Examples

### Basic Components

```tsx
// Buttons with variants
<Button variant="primary">Primary Action</Button>
<Button variant="secondary">Secondary Action</Button>
<Button variant="outline">Outline Style</Button>

// Form components
<Field>
  <Label>Email Address</Label>
  <Input type="email" placeholder="Enter your email" />
</Field>

// Feedback components
<Alert variant="info" title="Information">
  This is an informational message.
</Alert>
```

### Theme-Aware Styling

```tsx
// Components automatically inherit theme tokens
<div
  style={{
    backgroundColor: 'var(--color-primary)',
    color: 'var(--color-text)',
    padding: 'var(--space-4)',
  }}
>
  Theme-aware content
</div>
```

### Typography System

```tsx
<Typography variant="h1">Main Heading</Typography>
<Typography variant="h2">Section Heading</Typography>
<Typography variant="body">Body text content</Typography>
<Typography variant="caption">Caption text</Typography>
```

## Next Steps

These examples provide a foundation for:

1. **Integration Testing**: Validate component compatibility across packages
2. **Performance Analysis**: Monitor bundle sizes and runtime performance
3. **Theme Development**: Test new themes and token configurations
4. **Version Coexistence**: Demonstrate side-by-side component versions (planned)

For more detailed information, see the individual README files in each example directory.
