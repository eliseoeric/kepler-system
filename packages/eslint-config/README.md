# @org/eslint-config

Shared ESLint configuration for [Your Organization] projects.

## Installation

```bash
# Using pnpm (recommended)
pnpm add -D @org/eslint-config eslint typescript

# Using npm
npm install --save-dev @org/eslint-config eslint typescript

# Using yarn
yarn add -D @org/eslint-config eslint typescript
```

## Usage

### Base Configuration (TypeScript projects)

```javascript
// eslint.config.js
import { config } from '@org/eslint-config';

export default config;
```

### Next.js Projects

```javascript
// eslint.config.js
import { nextJsConfig } from '@org/eslint-config/next-js';

export default nextJsConfig;
```

### React Libraries

```javascript
// eslint.config.js
import { config } from '@org/eslint-config/react-internal';

export default config;
```

## What's Included

- **Base Config**: TypeScript, import ordering, code style rules
- **Next.js Config**: Extends base + Next.js rules, React Query, accessibility
- **React Internal**: Extends base + React rules for component libraries

## Rules Overview

- TypeScript best practices with proper naming conventions
- Automatic import organization (React first, then modules, then local)
- React component standards (arrow functions, JSX formatting)
- Accessibility rules for forms and UI components
- File-specific overrides for tests and Storybook
