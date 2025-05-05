'use client';

import { usePathname } from '@/i18n/navigation';
import { cn } from '@/lib/utils';
import { useLocale } from 'next-intl';
import { LinkButton } from './button';

function LanguageButton({ lang, title }: { lang: string; title: string }) {
  const pathname = usePathname();
  const currentLang = useLocale();

  return (
    <LinkButton
      href={pathname}
      locale={lang}
      disabled={lang === currentLang}
      variant='link'
      size='xs'
    >
      {title}
    </LinkButton>
  );
}

export default function LanguageSwitch({ className }: { className?: string }) {
  return (
    <div className={cn('flex flex-row gap-2 text-sm', className)}>
      <LanguageButton lang='en' title='English' />
      <span>-</span>
      <LanguageButton lang='fr' title='Français' />
      <span>-</span>
      <LanguageButton lang='ja' title='日本語' />
    </div>
  );
}
