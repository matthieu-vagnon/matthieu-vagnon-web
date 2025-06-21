import { cn } from '@/lib/utils';
import { useTranslations } from 'next-intl';

export default function InfoBand({ className }: { className?: string }) {
  const t = useTranslations();

  if (t('infoBand') === '') return null;

  return (
    <div
      className={cn(
        'w-full p-2 flex items-center justify-center rounded-lg bg-main',
        className
      )}
    >
      <span className='text-main-foreground font-medium italic text-md text-center'>
        {t('infoBand')}
      </span>
    </div>
  );
}
