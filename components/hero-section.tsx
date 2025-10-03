import { Button } from '@/components/ui/button';
import { Calendar, MapPin, TwitchIcon, YoutubeIcon } from 'lucide-react';
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

        <div className="bg-primary/20 backdrop-blur-sm border border-accent/30 rounded-lg p-4 mb-6">
          <p className="text-shadow-white font-semibold text-lg">NUS BoulderActive has started!</p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-4">
          <Button
            size="lg"
            variant="outline"
            className="border-white text-white hover:bg-white hover:text-foreground text-lg px-8 py-3 bg-transparent"
            asChild
          >
            <Link
              href="https://docs.google.com/spreadsheets/d/1ISyPNq3u-ZbwfH5rZbVwW6YdRgm2bbDTl6tPAQ2Xjj8/view?gid=1564663232#gid=1564663232"
              target="_blank"
            >
              VIEW SCHEDULE
            </Link>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-white text-white hover:bg-white hover:text-foreground text-lg px-8 py-3 bg-red-500/80"
            asChild
          >
            <Link href="https://www.youtube.com/@NUSClimbingClub" target="_blank">
              <YoutubeIcon className="h-6 w-6" />
              WATCH LIVE ON YOUTUBE
            </Link>
          </Button>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            variant="outline"
            className="border-white text-white hover:bg-white hover:text-foreground text-lg px-8 py-3 bg-purple-400/60"
            asChild
          >
            <Link href="https://www.twitch.tv/nusclimbingclub" target="_blank">
              <TwitchIcon className="h-6 w-6" />
              WATCH DAY 1 ON TWITCH
            </Link>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-white text-white hover:bg-white hover:text-foreground text-lg px-8 py-3 bg-blue-400/60"
            asChild
          >
            <Link
              href="https://drive.google.com/drive/folders/1UEqwjHGd3yfPyM4ZD8YpJP86rocBAR0s?usp=sharing"
              target="_blank"
            >
              DAY 1 PICS!
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
