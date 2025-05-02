import { cn } from '@/lib/utils';
import { Sparkle } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { LinkButton } from './ui/button';

type PageTitleProps = {
  title: string;
  description: string;
  className?: string;
  tags?: string[];
  link?: {
    name: string;
    url: string;
  };
};

export default function PageTitle({
  title,
  description,
  className,
  tags,
  link,
}: PageTitleProps) {
  const t = useTranslations('utils');

  return (
    <div
      className={cn(
        'flex flex-col items-center justify-center gap-2 mb-10 sm:mb-12 md:mb-14',
        className
      )}
    >
      <div className='flex flex-row items-center justify-center gap-x-2'>
        <Sparkle strokeWidth={0} className='size-3 fill-foreground/6' />
        <Sparkle strokeWidth={0} className='size-5 fill-foreground/7' />
        <Sparkle strokeWidth={0} className='size-7 fill-foreground/8' />
        <h1 className='text-center text-2xl sm:text-3xl md:text-4xl font-bold font-sans-special'>
          {title}
        </h1>
        <Sparkle strokeWidth={0} className='size-7 fill-foreground/8' />
        <Sparkle strokeWidth={0} className='size-5 fill-foreground/7' />
        <Sparkle strokeWidth={0} className='size-3 fill-foreground/6' />
      </div>
      <h2 className='text-base md:text-lg text-center text-foreground-secondary'>
        {description}
      </h2>
      {tags && (
        <p className='text-sm text-center text-muted-foreground'>
          {tags.join(' \u2022 ')}
        </p>
      )}
      {link && (
        <LinkButton href={link.url} variant='link' size='xs' isInline>
          {link.name}
          {t('separator')}
          ...
        </LinkButton>
      )}
    </div>
  );
}
