import ScrollButton from '@/components/scroll-link';
import { Instagram, Mail } from 'lucide-react';
import Link from 'next/link';
import { Sparkle } from '@/components/brand/sparkle';

const QUICK_LINKS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'information', label: 'Information' },
  { id: 'schedule', label: 'Schedule' },
  { id: 'location', label: 'Location' },
] as const;

export function Footer() {
  return (
    <footer className="bg-ink text-cream">
      <div className="mx-auto max-w-7xl px-4 pt-16 pb-10 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2">
              <Sparkle className="h-6 w-6 text-lime" spin />
              <span className="font-display text-2xl">BoulderActive</span>
            </div>
            <p className="mt-4 max-w-md text-cream/70">
              Singapore&apos;s premier bouldering competition. We push limits, conquer fears,
              and build an inclusive climbing community — presented by NUS Climbing Club.
            </p>
            <div className="mt-6 flex gap-3">
              <Link
                href="https://www.instagram.com/nusboulderactive/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-11 w-11 items-center justify-center border-2 border-cream/30 text-cream transition-colors hover:border-lime hover:bg-lime hover:text-ink"
              >
                <Instagram className="h-5 w-5" />
              </Link>
              <Link
                href="mailto:boulderactivenus@gmail.com"
                aria-label="Email"
                className="flex h-11 w-11 items-center justify-center border-2 border-cream/30 text-cream transition-colors hover:border-lime hover:bg-lime hover:text-ink"
              >
                <Mail className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="brand-index text-sm uppercase tracking-[0.18em] text-lime">Explore</h4>
            <ul className="mt-4 space-y-2.5">
              {QUICK_LINKS.map(link => (
                <li key={link.id}>
                  <ScrollButton
                    scrollToId={link.id}
                    className="text-cream/70 transition-colors hover:text-lime"
                  >
                    {link.label}
                  </ScrollButton>
                </li>
              ))}
              <li>
                <Link
                  href="/rules-and-formats"
                  className="text-cream/70 transition-colors hover:text-lime"
                >
                  Rules &amp; Formats
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="brand-index text-sm uppercase tracking-[0.18em] text-lime">Contact</h4>
            <ul className="mt-4 space-y-2.5 text-cream/70">
              <li className="flex items-center gap-2">
                <Instagram className="h-4 w-4 text-lime" />
                @nusboulderactive
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-lime" />
                <span className="break-all">boulderactivenus@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Oversized wordmark */}
        <div className="mt-14 overflow-hidden border-t-2 border-cream/15 pt-8">
          <p className="font-display text-[clamp(3rem,17vw,16rem)] leading-none text-cream">
            BA<span className="text-lime">26</span>
          </p>
        </div>

        <div className="mt-6 flex flex-col items-start justify-between gap-2 text-sm text-cream/50 sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} NUS BoulderActive. All rights reserved.</p>
          <p>Organised by NUS Climbing Club</p>
        </div>
      </div>
    </footer>
  );
}
