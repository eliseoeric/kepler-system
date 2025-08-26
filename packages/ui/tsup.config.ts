import { defineConfig } from 'tsup';

export default defineConfig((options) => ({
  entryPoints: ['src/index.ts'],
  format: ['cjs', 'esm'],
  dts: true,
  external: ['react', '@repo/tokens/dist/css/tokens.css'],
  ...options,
}));
