import { Button } from '@/components/ui/button';
import {
  BarChart3,
  BookOpenText,
  CalendarClock,
  Images,
  ArrowUpRight,
  Instagram,
} from 'lucide-react';
import Link from 'next/link';
import { SectionHeading } from '@/components/brand/section-heading';
import { Sparkle } from '@/components/brand/sparkle';

const FORMATS = [
  {
    name: 'Flash',
    points: ['Demo climb available', '6 problems per competitor', 'View routes beforehand', '19 min per detail'],
  },
  {
    name: 'Session',
    points: ['No demo climb', '5 problems per competitor', 'Detail enters together', '30 min per detail'],
  },
  {
    name: 'Rotation',
    points: ['No demo climb', '4 problems per competitor', 'Gendered pairs, set order', '4 min per route'],
  },
  {
    name: 'IFSC Concurrent',
    points: ['2-min observation period', '4 problems, set order', '1 hour isolation', 'Tops · zones · attempts'],
  },
];

export function EventInfoSection() {
  return (
    <>
      {/* Information cards */}
      <section id="information" className="bg-cream">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <SectionHeading index="002" label="Event Information" title="The Lowdown" />

          <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2">
            {/* When & Where */}
            <div className="brand-card brand-card-interactive flex flex-col bg-ink p-7 text-cream">
              <div className="mb-5 flex items-start justify-between">
                <CalendarClock className="h-9 w-9 text-lime" />
                <Sparkle className="h-5 w-5 text-lime" />
              </div>
              <h3 className="font-display text-2xl">When &amp; Where</h3>
              <p className="mt-2 flex-1 text-cream/75">
                Mark your calendar for <span className="text-lime">October 2026</span>. The
                full date and venue will be announced soon — follow along so you don&apos;t
                miss the drop.
              </p>
              <Button variant="lime" className="mt-6 w-fit font-display uppercase" asChild>
                <Link
                  href="https://www.instagram.com/nusboulderactive/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Instagram className="h-4 w-4" />
                  Get Updates
                </Link>
              </Button>
            </div>

            {/* Rules & Formats */}
            <div className="brand-card brand-card-interactive flex flex-col bg-blue p-7 text-cream">
              <div className="mb-5 flex items-start justify-between">
                <BookOpenText className="h-9 w-9 text-lime" />
                <Sparkle className="h-5 w-5 text-lime" />
              </div>
              <h3 className="font-display text-2xl">Rules &amp; Formats</h3>
              <p className="mt-2 flex-1 text-cream/80">
                Categories, eligibility, scoring and the full technical climbing rules —
                everything you need before you compete.
              </p>
              <Button variant="lime" className="mt-6 w-fit font-display uppercase" asChild>
                <Link href="/rules-and-formats">
                  Read The Rules
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>

            {/* Past Results */}
            <div className="brand-card brand-card-interactive flex flex-col bg-lime p-7 text-ink">
              <div className="mb-5 flex items-start justify-between">
                <BarChart3 className="h-9 w-9" />
                <Sparkle className="h-5 w-5" />
              </div>
              <h3 className="font-display text-2xl">Past Results</h3>
              <p className="mt-2 flex-1 text-ink/75">
                Relive the 2025 edition — full live scores, rankings and finals results on
                ClimbBuddy.
              </p>
              <Button variant="ink" className="mt-6 w-fit font-display uppercase" asChild>
                <Link
                  href="https://score.climbbuddy.io/#/leaderboard/Boulderactive%202025"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Results
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>

            {/* Gallery */}
            <div className="brand-card brand-card-interactive flex flex-col p-7 text-ink">
              <div className="mb-5 flex items-start justify-between">
                <Images className="h-9 w-9 text-blue" />
                <Sparkle className="h-5 w-5 text-blue" />
              </div>
              <h3 className="font-display text-2xl">Gallery</h3>
              <p className="mt-2 flex-1 text-muted-foreground">
                Photos and recap reels from previous editions — see the energy on the wall
                for yourself.
              </p>
              <Button variant="ink" className="mt-6 w-fit font-display uppercase" asChild>
                <Link
                  href="https://linktr.ee/boulderactive2025"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Photos
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Schedule teaser + formats — ink colour block */}
      <section id="schedule" className="relative overflow-hidden bg-ink text-cream">
        <Sparkle className="absolute -left-12 bottom-10 h-44 w-44 text-cream/5" />
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <SectionHeading
            index="003"
            label="Schedule"
            title={
              <>
                Dropping
                <br />
                Soon<span className="text-lime">.</span>
              </>
            }
          />
          <p className="mt-6 max-w-2xl text-lg text-cream/75">
            Three days of head-to-head bouldering across Novice, Intermediate, Open and Team
            categories. The full day-by-day schedule will be released closer to the date.
          </p>

          {/* Day placeholders */}
          <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-3">
            {['Day 01', 'Day 02', 'Day 03'].map(day => (
              <div
                key={day}
                className="flex items-center justify-between border-2 border-cream/25 p-6"
              >
                <span className="font-display text-2xl text-cream">{day}</span>
                <span className="brand-chip border-lime text-lime">TBA</span>
              </div>
            ))}
          </div>

          {/* Competition formats (evergreen) */}
          <div className="mt-20">
            <div className="mb-8 flex items-center gap-3">
              <Sparkle className="h-4 w-4 text-lime" />
              <h3 className="font-display text-2xl uppercase tracking-wide sm:text-3xl">
                Competition Formats
              </h3>
            </div>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {FORMATS.map((format, i) => (
                <div key={format.name} className="brand-card flex flex-col p-6 text-ink">
                  <div className="mb-4 flex items-baseline justify-between">
                    <h4 className="font-display text-lg">{format.name}</h4>
                    <span className="brand-index text-xl text-ink/25">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    {format.points.map(point => (
                      <li key={point} className="flex gap-2">
                        <Sparkle className="mt-1 h-2.5 w-2.5 shrink-0 text-blue" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <p className="mt-6 text-sm text-cream/60">
              Full format details and scoring are in the{' '}
              <Link href="/rules-and-formats" className="text-lime underline-offset-4 hover:underline">
                rules &amp; formats
              </Link>
              .
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
