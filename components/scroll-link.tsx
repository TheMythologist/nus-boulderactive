'use client';

import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  element?.scrollIntoView({ behavior: 'smooth' });
};

export default function ScrollButton({
  scrollToId,
  className,
  onClick,
  ...props
}: React.ComponentProps<'a'> & {
  scrollToId: string;
}) {
  const pathname = usePathname();
  const isHome = pathname === '/';

  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    if (isHome) {
      scrollToSection(scrollToId);
    }
    onClick?.(event);
  };

  return (
    <a
      {...props}
      className={cn('cursor-pointer', className)}
      onClick={handleClick}
      href={isHome ? undefined : `/#${scrollToId}`}
    />
  );
}
