import { MapPin, Mail, Instagram, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import { SectionHeading } from '@/components/brand/section-heading';
import { Sparkle } from '@/components/brand/sparkle';
import { Button } from '@/components/ui/button';

export function LocationSection() {
  return (
    <section id="location" className="bg-cream">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <SectionHeading index="004" label="Location" title="Find Us" />

        <div className="mt-12 grid grid-cols-1 gap-5 lg:grid-cols-5">
          {/* Venue TBA panel */}
          <div className="relative flex min-h-[320px] flex-col justify-between overflow-hidden border-2 border-ink bg-blue p-8 text-cream lg:col-span-3">
            <Sparkle className="absolute -right-8 -top-8 h-40 w-40 text-cream/10" spin />
            <div className="flex items-center gap-3">
              <MapPin className="h-6 w-6 text-lime" />
              <span className="brand-index text-sm uppercase tracking-[0.18em]">Venue</span>
            </div>
            <div>
              <h3 className="font-display text-[clamp(2.5rem,6vw,4.5rem)] leading-[0.92]">
                To Be
                <br />
                Announced
              </h3>
              <p className="mt-4 max-w-md text-cream/80">
                Previous editions have brought the wall into the heart of Singapore. The 2026
                venue will be revealed soon — follow us to be the first to know.
              </p>
            </div>
          </div>

          {/* Contact cards */}
          <div className="flex flex-col gap-5 lg:col-span-2">
            <Link
              href="https://www.instagram.com/nusboulderactive/"
              target="_blank"
              rel="noopener noreferrer"
              className="brand-card brand-card-interactive group flex flex-1 flex-col justify-between p-7 text-ink"
            >
              <div className="flex items-start justify-between">
                <Instagram className="h-8 w-8 text-blue" />
                <ArrowUpRight className="h-5 w-5 text-ink/40 transition-colors group-hover:text-blue" />
              </div>
              <div className="mt-6">
                <p className="font-display text-xl">Instagram</p>
                <p className="text-muted-foreground">@nusboulderactive</p>
              </div>
            </Link>

            <Link
              href="mailto:boulderactivenus@gmail.com"
              className="brand-card brand-card-interactive group flex flex-1 flex-col justify-between p-7 text-ink"
            >
              <div className="flex items-start justify-between">
                <Mail className="h-8 w-8 text-blue" />
                <ArrowUpRight className="h-5 w-5 text-ink/40 transition-colors group-hover:text-blue" />
              </div>
              <div className="mt-6">
                <p className="font-display text-xl">Email</p>
                <p className="break-all text-muted-foreground">boulderactivenus@gmail.com</p>
              </div>
            </Link>
          </div>
        </div>

        {/* Notify CTA */}
        <div className="mt-10 flex flex-col items-start justify-between gap-6 border-2 border-ink bg-lime p-8 text-ink sm:flex-row sm:items-center">
          <div className="flex items-center gap-4">
            <Sparkle className="h-8 w-8 shrink-0" />
            <p className="font-display text-2xl uppercase leading-tight sm:text-3xl">
              Don&apos;t miss the 2026 drop
            </p>
          </div>
          <Button variant="ink" size="xl" asChild>
            <Link
              href="https://www.instagram.com/nusboulderactive/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram className="h-5 w-5" />
              Follow Us
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
