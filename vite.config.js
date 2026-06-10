import { defineConfig } from 'vite';

// The BoulderActive prototype is a set of UMD-style modules: they reference a
// global `React` / `ReactDOM` and share components via `window`, using classic
// `React.createElement` JSX (no per-file React import). So we skip a framework
// plugin and just point esbuild's JSX transform at the global React that
// src/globals.js installs. Production builds swap in React's minified build
// automatically (NODE_ENV=production), replacing the old dev-mode unpkg CDN.
export default defineConfig({
  esbuild: {
    jsx: 'transform',
    jsxFactory: 'React.createElement',
    jsxFragment: 'React.Fragment',
  },
  build: {
    outDir: 'dist',
  },
});
