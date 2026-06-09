import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sparkle } from '@/components/brand/sparkle';

export default function NotFound() {
  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-cream px-4">
      <div className="climbing-grid pointer-events-none absolute inset-0 opacity-[0.12]" />
      <Sparkle className="absolute left-[12%] top-[22%] hidden h-16 w-16 text-lime sm:block" spin />
      <Sparkle className="absolute right-[14%] bottom-[20%] hidden h-10 w-10 text-blue md:block" />

      <div className="relative mx-auto max-w-2xl text-center">
        <p className="font-display text-[clamp(7rem,28vw,18rem)] leading-none text-blue">404</p>

        <h1 className="font-display mt-2 text-[clamp(2.5rem,9vw,5rem)] text-ink">
          Off Route<span className="text-lime">.</span>
        </h1>
        <p className="mx-auto mt-5 max-w-lg text-lg text-muted-foreground sm:text-xl">
          Looks like you&apos;ve taken a wrong turn on the wall. Let&apos;s get you back on
          track.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button variant="blue" size="xl" asChild>
            <Link href="/">Find Your Route Home</Link>
          </Button>
          <Button variant="ink" size="xl" asChild>
            <Link href="/rules-and-formats">Check The Rules</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
