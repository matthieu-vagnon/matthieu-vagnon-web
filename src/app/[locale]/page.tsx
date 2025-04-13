import Highlight from '@/components/highlight'
import LanguageSwitch from '@/components/language-switch'
import TitleBox from '@/components/title-box'
import { BlurFade } from '@/components/ui/blur-fade'
import { LinkButton } from '@/components/ui/button'
import { Particles } from '@/components/ui/particles'
import { useTranslations } from 'next-intl'
import React from 'react'

export default function Home() {
  const t = useTranslations()

  const socialLinks: {
    label: string
    link: string
  }[] = [
    {
      label: t('utils.links.linkedin'),
      link: 'https://linkedin.com/in/matthieu-vagnon'
    },
    {
      label: t('utils.links.youtube'),
      link: 'https://www.youtube.com/@matthieu-vagnon'
    },
    {
      label: t('utils.links.instagram'),
      link: 'https://instagram.com/matthieu.vagnon'
    },
    {
      label: t('utils.links.github'),
      link: 'https://github.com/matthieu-vagnon'
    },
    {
      label: t('utils.links.cv'),
      link: '/cv.pdf'
    }
  ]

  return (
    <React.Fragment>
      <div className='min-h-svh w-full flex justify-center items-center pt-8 pb-22'>
        <div className='flex flex-col gap-6 sm:gap-8 md:gap-10 justify-center items-center'>
          <BlurFade className='z-1 absolute top-6 sm:top-8 md:top-10 right-6 sm:right-8 md:right-10'>
            <LanguageSwitch />
          </BlurFade>
          <TitleBox delay={0.1} />
          <BlurFade delay={0.4} className='flex'>
            <p className='text-center text-sm sm:text-base md:text-lg text-gray-500'>
              {t.rich('home.subtitle', {
                highlight: (chunks: React.ReactNode) => <Highlight color='default'>{chunks}</Highlight>
              })}
            </p>
          </BlurFade>
          <BlurFade delay={0.5} className='flex'>
            <div className='flex items-center justify-center gap-3 flex-wrap'>
              {socialLinks.map((link) => (
                <LinkButton variant='secondary' size='sm' key={link.label} href={link.link} external>
                  {link.label}
                </LinkButton>
              ))}
            </div>
          </BlurFade>
        </div>
      </div>
      <Particles className='fixed inset-0 -z-1' quantity={100} ease={80} color='black' refresh />
    </React.Fragment>
  )
}
