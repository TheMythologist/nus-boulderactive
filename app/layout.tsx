import type React from 'react';
import type { Metadata } from 'next';
import { Archivo } from 'next/font/google';
import { Footer } from '@/components/footer';
import { Navigation } from '@/components/navigation';
import { Toaster } from '@/components/ui/sonner';
import './globals.css';

// A single heavy grotesque, weight-contrasted — matches the brand book's
// "primary typeface" voice across display and body.
const archivo = Archivo({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-archivo',
  weight: ['400', '500', '600', '700', '800', '900'],
});

export const metadata: Metadata = {
  title: 'NUS BoulderActive 2026',
  description:
    "Singapore's premier bouldering competition returns in 2026. Push your limits, conquer new heights, and join the climbing community. Presented by NUS Climbing Club.",
  metadataBase: new URL('https://boulderactive.io'),
  openGraph: {
    title: 'NUS BoulderActive 2026',
    description:
      "Singapore's premier bouldering competition returns in 2026. Presented by NUS Climbing Club.",
    type: 'website',
  },
  icons: {
    icon: [
      { url: '/icon.svg', type: 'image/svg+xml' },
      { url: '/favicon.ico' },
    ],
    shortcut: '/favicon.ico',
    apple: '/icon.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${archivo.variable} antialiased`}>
      <body className="font-sans" suppressHydrationWarning>
        <Navigation />
        <main>{children}</main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
