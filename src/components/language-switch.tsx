'use client'

import { cn, returnIntPath } from '@/lib/utils'
import { useParams, usePathname } from 'next/navigation'
import { LinkButton } from './ui/button'

function LanguageButton({
  lang,
  title,
  pathname,
  currentLang
}: {
  lang: string
  title: string
  pathname: string
  currentLang: string
}) {
  return (
    <LinkButton href={returnIntPath(lang, pathname)} disabled={lang === currentLang} variant='link' size='xs'>
      {title}
    </LinkButton>
  )
}

export default function LanguageSwitch({ className }: { className?: string }) {
  const { lang: currentLang } = useParams()
  const pathname = usePathname()

  return (
    <div className={cn('flex flex-row gap-2', className)}>
      <LanguageButton lang='en' title='English' pathname={pathname} currentLang={currentLang as string} />
      <span>-</span>
      <LanguageButton lang='fr' title='Français' pathname={pathname} currentLang={currentLang as string} />
      <span>-</span>
      <LanguageButton lang='jp' title='日本語' pathname={pathname} currentLang={currentLang as string} />
    </div>
  )
}
