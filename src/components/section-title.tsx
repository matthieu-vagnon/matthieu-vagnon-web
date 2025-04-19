import { Sparkle } from 'lucide-react';

export default function SectionTitle({ title }: { title: string }) {
  return (
    <div className='flex flex-row items-center gap-1 md:gap-2 w-full mb-2 sm:mb-3 md:mb-4'>
      <Sparkle
        strokeWidth={0}
        fill='currentColor'
        className='w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7'
      />
      <h3 className='text-xl sm:text-2xl md:text-3xl font-sans-special font-bold'>
        {title}
      </h3>
    </div>
  );
}
