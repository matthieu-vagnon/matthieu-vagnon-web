import { cn } from '@/lib/utils';
import { Sparkle } from 'lucide-react';
import Highlight from './highlight';

type SkillBoxProps = {
  title: string;
  items: string[];
  className?: string;
};

export default function SkillBox({ title, items, className }: SkillBoxProps) {
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
          <Highlight key={item} color='gray'>
            {item}
          </Highlight>
        ))}
      </div>
    </div>
  );
}
