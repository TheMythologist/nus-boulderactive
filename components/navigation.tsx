'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Instagram } from 'lucide-react';
import ScrollButton from '@/components/scroll-link';
import Link from 'next/link';
import { Sparkle } from '@/components/brand/sparkle';

const NAV_LINKS = [
  { id: 'about', label: 'About' },
  { id: 'information', label: 'Info' },
  { id: 'schedule', label: 'Schedule' },
  { id: 'location', label: 'Location' },
] as const;

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 z-50 w-full border-b-2 border-ink bg-cream/90 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between gap-2">
          {/* Wordmark */}
          <ScrollButton
            scrollToId="home"
            className="flex min-w-0 items-center gap-2 text-ink"
          >
            <Sparkle className="h-5 w-5 shrink-0 text-blue" spin />
            <span className="font-display truncate text-base tracking-tight sm:text-lg">
              BOULDERACTIVE
            </span>
            <span className="brand-chip shrink-0 border-blue bg-blue px-2 py-1 text-[0.6rem] text-cream">
              26
            </span>
          </ScrollButton>

          {/* Desktop links */}
          <div className="hidden items-center gap-7 md:flex">
            {NAV_LINKS.map(link => (
              <ScrollButton
                key={link.id}
                scrollToId={link.id}
                className="font-display text-sm uppercase tracking-wide text-ink transition-colors hover:text-blue"
              >
                {link.label}
              </ScrollButton>
            ))}
            <Link
              href="/rules-and-formats"
              className="font-display text-sm uppercase tracking-wide text-ink transition-colors hover:text-blue"
            >
              Rules
            </Link>
            <Button variant="blue" size="sm" className="font-display uppercase" asChild>
              <Link
                href="https://www.instagram.com/nusboulderactive/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram className="h-4 w-4" />
                Follow
              </Link>
            </Button>
          </div>

          {/* Mobile toggle */}
          <button
            className="flex h-10 w-10 items-center justify-center border-2 border-ink bg-cream text-ink md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden border-ink bg-cream transition-all duration-300 ease-in-out md:hidden ${
          isOpen ? 'max-h-96 border-t-2 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="flex flex-col px-4 py-3">
          {NAV_LINKS.map(link => (
            <ScrollButton
              key={link.id}
              scrollToId={link.id}
              className="border-b border-ink/15 py-3 font-display text-lg uppercase tracking-wide text-ink hover:text-blue"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </ScrollButton>
          ))}
          <Link
            href="/rules-and-formats"
            className="border-b border-ink/15 py-3 font-display text-lg uppercase tracking-wide text-ink hover:text-blue"
            onClick={() => setIsOpen(false)}
          >
            Rules
          </Link>
          <Button variant="blue" className="mt-4 font-display uppercase" asChild>
            <Link
              href="https://www.instagram.com/nusboulderactive/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram className="h-4 w-4" />
              Follow @nusboulderactive
            </Link>
          </Button>
        </div>
      </div>
    </nav>
  );
}
