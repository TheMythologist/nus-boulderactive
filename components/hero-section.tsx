import { Button } from '@/components/ui/button';
import {
  Calendar,
  MapPin,
  NotebookPenIcon,
  TwitchIcon,
  WallpaperIcon,
  YoutubeIcon,
} from 'lucide-react';
import { HeroImageCarousel } from './hero-image-carousel';
import Link from 'next/link';

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image Carousel */}
      <HeroImageCarousel />

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h1 className="font-hero text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-black mb-6 tracking-wider uppercase break-words">
          NUS BOULDERACTIVE
          <span className="block text-xl sm:text-2xl md:text-4xl lg:text-5xl font-black text-accent mt-2">
            2025
          </span>
        </h1>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-8 text-sm sm:text-base lg:text-lg">
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4 sm:h-5 sm:w-5" />
            <span className="whitespace-nowrap">3-5 OCTOBER 2025</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4 sm:h-5 sm:w-5" />
            <span className="whitespace-nowrap">City Square Mall</span>
          </div>
        </div>

        <p className="text-lg sm:text-xl md:text-2xl mb-8 max-w-2xl mx-auto leading-relaxed px-2">
          Push your limits. Conquer new heights. Join Singapore&apos;s premier bouldering
          competition.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-4">
          <Button
            size="lg"
            variant="outline"
            className="border-white text-white hover:bg-white hover:text-foreground text-lg px-8 py-3 bg-transparent"
            asChild
          >
            <Link
              href="https://score.climbbuddy.io/#/leaderboard/Boulderactive%202025"
              target="_blank"
            >
              VIEW RESULTS
            </Link>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-white text-white hover:bg-red-500/100 text-lg px-8 py-3 bg-red-500/60"
            asChild
          >
            <Link href="https://www.youtube.com/@NUSClimbingClub" target="_blank">
              <YoutubeIcon className="h-6 w-6" />
              WATCH ON YOUTUBE
            </Link>
          </Button>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            variant="outline"
            className="border-white text-white hover:bg-orange-400/100 text-lg px-8 py-3 bg-orange-400/60"
            asChild
          >
            <Link href="https://linktr.ee/boulderactive2025" target="_blank">
              <WallpaperIcon className="w-6 h-6" />
              PICTURES
            </Link>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-white text-white hover:bg-green-400/100 text-lg px-8 py-3 bg-green-400/60"
            asChild
          >
            <Link
              href="https://docs.google.com/forms/d/e/1FAIpQLScojbtjpY9oSqFxhjet-wXRifw6xq1xqZ1PHswC4s9Q5G3MUQ/viewform"
              target="_blank"
            >
              <NotebookPenIcon className="w-6 h-6" />
              FEEDBACK FORM
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
