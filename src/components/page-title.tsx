import { cn } from '@/lib/utils';
import { useTranslations } from 'next-intl';
import { LinkButton } from './ui/button';

export default function PageTitle({
  title,
  description,
  className,
  tags,
  link,
}: {
  title: string;
  description: string;
  className?: string;
  tags?: string[];
  link?: {
    name: string;
    url: string;
  };
}) {
  const t = useTranslations('utils');

  return (
    <div
      className={cn(
        'flex flex-col items-center justify-center gap-2 mb-10 sm:mb-12 md:mb-14',
        className
      )}
    >
      <h1 className='text-center text-2xl sm:text-3xl md:text-4xl font-bold font-sans-special'>
        {title}
      </h1>
      <h2 className='text-base md:text-lg text-center text-gray-500'>
        {description}
      </h2>
      {tags && (
        <p className='text-sm text-center text-gray-400'>
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
