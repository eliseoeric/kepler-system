import { defineConfig } from 'tsup';

export default defineConfig((options) => ({
  entryPoints: ['src/index.ts'],
  format: ['cjs', 'esm'],
  dts: true,
  external: ['react'],
  injectStyle: false, // Let consuming apps handle CSS imports
  ...options,
}));
