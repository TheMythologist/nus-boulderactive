import { Sparkle } from './sparkle';
import { cn } from '@/lib/utils';

/**
 * Infinite horizontal ticker. The item list is rendered twice so the loop
 * is seamless as the track translates by -50%.
 */
export function Marquee({
  items,
  className,
  reverse = false,
  durationSeconds = 30,
}: {
  items: string[];
  className?: string;
  reverse?: boolean;
  durationSeconds?: number;
}) {
  const sequence = (
    <div className="flex shrink-0 items-center" aria-hidden="true">
      {items.map((item, i) => (
        <div key={i} className="flex shrink-0 items-center">
          <span className="font-display whitespace-nowrap px-6 text-[clamp(1.25rem,2.4vw,2.25rem)]">
            {item}
          </span>
          <Sparkle className="h-4 w-4 shrink-0" />
        </div>
      ))}
    </div>
  );

  return (
    <div className={cn('flex w-full overflow-hidden', className)} aria-hidden="true">
      <div
        className={cn('marquee', reverse && 'marquee-reverse')}
        style={{ '--marquee-duration': `${durationSeconds}s` } as React.CSSProperties}
      >
        {sequence}
        {sequence}
      </div>
    </div>
  );
}
