import { cn } from '@/lib/utils';
import { Sparkle } from 'lucide-react';

export default function SkillBox({
  title,
  items,
  className,
}: {
  title: string;
  items: string[];
  className?: string;
}) {
  return (
    <div
      className={cn('flex flex-col gap-3 bg-accent p-4 rounded-lg', className)}
    >
      <span className='text-sm font-bold flex flex-row items-center gap-1 text-accent-foreground'>
        <Sparkle strokeWidth={0} className='size-4 fill-accent-foreground' />
        {title}
      </span>
      <div className='flex flex-row flex-wrap gap-2'>
        {items.map((item) => (
          <div
            key={item}
            className='text-xs sm:text-sm bg-gray-500 px-2 py-1 rounded-md text-white border border-gray-400 outline outline-gray-500'
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}
