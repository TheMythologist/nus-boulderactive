import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Serve the self-contained BoulderActive 2026 prototype (public/index.html)
  // at the site root. It's a hash-routed SPA, so a single rewrite covers every
  // view (#/home, #/schedule, #/rules, #/location, #/register).
  // `beforeFiles` is checked before the App Router pages, so it overrides app/page.tsx.
  async rewrites() {
    return {
      beforeFiles: [{ source: '/', destination: '/index.html' }],
      afterFiles: [],
      fallback: [],
    };
  },
};

export default nextConfig;
