import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vite.dev/config/
export default defineConfig({
  // GitHub Pages serves project sites at /<repo-name>/, so asset URLs must
  // be relative to that sub-path rather than the domain root. A relative
  // base works regardless of the repo name. For a custom domain or a
  // username.github.io repo, set BASE_PATH='/' before building.
  base: (process.env.BASE_PATH ?? './') as string,
  plugins: [react(), tailwindcss()],
  resolve: {
    tsconfigPaths: true,
  },
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
