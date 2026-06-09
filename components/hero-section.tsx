import { Button } from '@/components/ui/button';
import {
  Calendar,
  MapPin,
  Instagram,
  ImageIcon,
  YoutubeIcon,
  Trophy,
  ArrowDown,
} from 'lucide-react';
import { HeroImageCarousel } from './hero-image-carousel';
import { Marquee } from '@/components/brand/marquee';
import { Sparkle } from '@/components/brand/sparkle';
import ScrollButton from '@/components/scroll-link';
import Link from 'next/link';

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen flex-col overflow-hidden bg-ink"
    >
      {/* Background imagery (grayscale + electric-blue cast) */}
      <HeroImageCarousel />

      {/* Decorative sparkles */}
      <Sparkle className="absolute right-[8%] top-[18%] hidden h-12 w-12 text-lime sm:block" spin />
      <Sparkle className="absolute left-[6%] bottom-[24%] hidden h-8 w-8 text-blue md:block" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-1 flex-col justify-center px-4 pt-24 pb-28 sm:px-6 lg:px-8">
        <span className="brand-chip mb-6 w-fit border-lime text-lime">
          <Sparkle className="h-3 w-3" />
          NUS Climbing Club Presents
        </span>

        <h1 className="font-display text-cream">
          <span className="block text-[clamp(3rem,13vw,11rem)]">Boulder</span>
          <span className="block text-[clamp(3rem,13vw,11rem)]">
            Active<span className="text-lime">.</span>
          </span>
          <span className="mt-2 block text-[clamp(2rem,7vw,5rem)] text-lime">2026</span>
        </h1>

        <p className="mt-6 max-w-xl text-lg leading-snug text-cream/85 sm:text-xl">
          Singapore&apos;s premier bouldering competition returns. Push your limits,
          conquer new heights, and climb with the community.
        </p>

        {/* Status line */}
        <div className="mt-8 flex flex-col gap-3 font-display text-sm uppercase tracking-wide text-cream sm:flex-row sm:items-center sm:gap-8">
          <span className="flex items-center gap-2">
            <Calendar className="h-5 w-5 text-lime" />
            October 2026
          </span>
          <span className="flex items-center gap-2">
            <MapPin className="h-5 w-5 text-lime" />
            Venue To Be Announced
          </span>
        </div>

        {/* CTAs */}
        <div className="mt-10 flex flex-wrap gap-3">
          <Button variant="lime" size="xl" asChild>
            <Link
              href="https://www.instagram.com/nusboulderactive/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram className="h-5 w-5" />
              Follow For Updates
            </Link>
          </Button>
          <Button
            size="xl"
            className="border-2 border-cream bg-transparent font-display uppercase tracking-wide text-cream hover:bg-cream hover:text-ink"
            asChild
          >
            <Link
              href="https://www.youtube.com/playlist?list=PLwYq96iTjrtOetExD61Q-g-jN-YfQVU8A"
              target="_blank"
              rel="noopener noreferrer"
            >
              <YoutubeIcon className="h-5 w-5" />
              Watch Recap
            </Link>
          </Button>
          <Button
            size="xl"
            className="border-2 border-cream bg-transparent font-display uppercase tracking-wide text-cream hover:bg-cream hover:text-ink"
            asChild
          >
            <Link
              href="https://score.climbbuddy.io/#/leaderboard/Boulderactive%202025"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Trophy className="h-5 w-5" />
              Past Results
            </Link>
          </Button>
          <Button
            size="xl"
            className="border-2 border-cream bg-transparent font-display uppercase tracking-wide text-cream hover:bg-cream hover:text-ink"
            asChild
          >
            <Link href="https://linktr.ee/boulderactive2025" target="_blank" rel="noopener noreferrer">
              <ImageIcon className="h-5 w-5" />
              Photos
            </Link>
          </Button>
        </div>

        {/* Scroll cue */}
        <ScrollButton
          scrollToId="about"
          className="mt-12 hidden w-fit items-center gap-2 font-display text-xs uppercase tracking-[0.2em] text-cream/70 hover:text-lime sm:flex"
        >
          <ArrowDown className="h-4 w-4 animate-bounce" />
          Scroll
        </ScrollButton>
      </div>

      {/* Bottom marquee */}
      <div className="relative z-10 border-y-2 border-ink bg-lime py-2.5 text-ink">
        <Marquee
          items={[
            'Boulder Active 2026',
            'Beyond Limits',
            'NUS Climbing Club',
            'Push Your Limits',
            'Conquer New Heights',
          ]}
          durationSeconds={34}
        />
      </div>
    </section>
  );
}
