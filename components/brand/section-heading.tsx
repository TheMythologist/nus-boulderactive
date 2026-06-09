import { Sparkle } from './sparkle';
import { cn } from '@/lib/utils';

/**
 * Numbered section heading in the brand-book idiom: a small "(00X) — LABEL"
 * index line above an oversized display title. Colours inherit from the
 * surrounding block via `currentColor`.
 */
export function SectionHeading({
  index,
  label,
  title,
  className,
  align = 'left',
  titleClassName,
}: {
  index: string;
  label: string;
  title: React.ReactNode;
  className?: string;
  align?: 'left' | 'center';
  titleClassName?: string;
}) {
  return (
    <div
      className={cn(
        align === 'center' ? 'text-center' : 'text-left',
        className,
      )}
    >
      <div
        className={cn(
          'mb-4 flex items-center gap-3',
          align === 'center' && 'justify-center',
        )}
      >
        <Sparkle className="h-3.5 w-3.5 shrink-0" />
        <span className="brand-index text-sm tracking-[0.18em] sm:text-base">
          ({index}) — {label.toUpperCase()}
        </span>
      </div>
      <h2
        className={cn(
          'font-display text-[clamp(2.5rem,7vw,5.5rem)]',
          titleClassName,
        )}
      >
        {title}
      </h2>
    </div>
  );
}
