import type { ReactNode } from 'react';
import type { Metadata } from 'next';
import './globals.css';

// The live site is the self-contained BoulderActive 2026 prototype at
// public/index.html (served at "/" via the rewrite in next.config.ts), which
// carries its own <head>, fonts and styles. This root layout only wraps the
// remaining App Router routes (e.g. the 404 page).
export const metadata: Metadata = {
  title: 'NUS BoulderActive 2026',
  description:
    "NUS BoulderActive 2026 — Singapore's premier bouldering competition. 9–11 October 2026. Push your limits, conquer new heights.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
