import { cn } from '@/lib/utils';
import { Plus } from 'lucide-react';
import React from 'react';

type UlProps = {
  gap?: keyof typeof variants.gap;
  children: React.ReactNode;
};

const variants = {
  gap: {
    xs: 'gap-0',
    sm: 'gap-2 sm:gap-4',
    md: 'gap-2 sm:gap-4 md:gap-6',
    lg: 'gap-2 sm:gap-4 md:gap-6 lg:gap-8',
    xl: 'gap-2 sm:gap-4 md:gap-6 lg:gap-8 xl:gap-10',
  },
};

export function Ul({ gap = 'xs', children }: UlProps) {
  return (
    <ul
      className={cn(
        `list-none list-inside flex flex-col`,
        variants.gap[gap as keyof typeof variants.gap]
      )}
    >
      {children}
    </ul>
  );
}

export function Li({ children }: { children: React.ReactNode }) {
  return (
    <li className='flex flex-row gap-2 flex-nowrap items-start'>
      <Plus className='size-3 mt-1.5' />
      <span className='flex-1'>{children}</span>
    </li>
  );
}
