import { cn } from '@/lib/utils';
import { Sparkle } from 'lucide-react';
import Highlight from './Highlight';

type SkillBoxProps = {
  title: string;
  items: string[];
  aiEffect?: boolean;
  className?: string;
};

export default function SkillBox({
  title,
  items,
  aiEffect,
  className,
}: SkillBoxProps) {
  return (
    <div
      className={cn(
        'flex flex-col gap-3 bg-accent p-4 hover:shadow-sm rounded-lg cursor-default overflow-hidden transition-all duration-300',
        aiEffect &&
          'bg-gradient-to-tr from-teal-400/25 to-yellow-200/25 hover:shadow-lg shadow-green-100/75',
        className
      )}
    >
      <span className='text-sm font-bold flex flex-row items-center gap-1 text-accent-foreground'>
        <Sparkle strokeWidth={0} className='size-4 fill-accent-foreground' />
        {title}
      </span>
      <div className='flex flex-row flex-wrap gap-2'>
        {items.map((item) =>
          aiEffect ? (
            <div key={item} className='bg-background/33 rounded-full px-2'>
              <span className='font-bold'>{item}</span>
            </div>
          ) : (
            <Highlight key={item} color='gray'>
              {item}
            </Highlight>
          )
        )}
      </div>
    </div>
  );
}
