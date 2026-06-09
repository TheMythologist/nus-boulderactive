import { cn } from '@/lib/utils';

/**
 * Four-point sparkle / asterisk — the recurring graphic device from the
 * NUS Climbing Club brand book. Inherits `currentColor` so it adapts to
 * whatever colour block it sits on.
 */
export function Sparkle({
  className,
  spin = false,
  ...props
}: React.SVGProps<SVGSVGElement> & { spin?: boolean }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={cn('inline-block', spin && 'sparkle-spin', className)}
      {...props}
    >
      <path d="M12 0c0 6.2-5.8 12-12 12 6.2 0 12 5.8 12 12 0-6.2 5.8-12 12-12-6.2 0-12-5.8-12-12Z" />
    </svg>
  );
}
