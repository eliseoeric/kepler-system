import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: [
      '@eliseoeric/actions',
      '@eliseoeric/primitives',
      '@eliseoeric/forms',
      '@eliseoeric/feedback',
      '@eliseoeric/layout',
      '@eliseoeric/navigation',
      '@eliseoeric/typography',
      '@eliseoeric/data-display',
      '@eliseoeric/tokens',
      '@eliseoeric/styles'
    ]
  }
})