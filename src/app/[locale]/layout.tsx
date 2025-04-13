import AppsDock from '@/components/apps-dock'
import { CardStack } from '@/components/ui/card-stack'
import { testimonials } from '@/data/testimonials'
import AccentColorProvider from '@/hooks/use-accent-color'
import DockStatusProvider from '@/hooks/use-dock-status'
import MagneticStatusProvider from '@/hooks/use-magnetic-status'
import { TestimonialsStatusProvider } from '@/hooks/use-testimonials-status'
import { routing } from '@/i18n/routing'
import { SpeedInsights } from '@vercel/speed-insights/next'
import type { Metadata } from 'next'
import { hasLocale, NextIntlClientProvider } from 'next-intl'
import { Noto_Sans_JP, Signika_Negative, Source_Sans_3, Zen_Antique } from 'next/font/google'
import { notFound } from 'next/navigation'
import NextTopLoader from 'nextjs-toploader'
import '../globals.css'

const signikaNegative = Signika_Negative({
  variable: '--font-signika-negative',
  subsets: ['latin']
})

const sourceSans3 = Source_Sans_3({
  variable: '--font-source-sans-3',
  subsets: ['latin']
})

const notoSansJP = Noto_Sans_JP({
  variable: '--font-noto-sans-jp',
  subsets: ['latin']
})

const zenAntique = Zen_Antique({
  variable: '--font-zen-antique',
  subsets: ['latin'],
  weight: '400'
})

export const metadata: Metadata = {
  title: {
    default: 'Matthieu Vagnon, Front-End Engineer & Digital Designer',
    template: '%s | Matthieu Vagnon'
  },
  description:
    "Hi I'm Matthieu Vagnon, React and Next.js expert, front-end engineer, digital designer and application deployment expert working independently since 2022 to provide my clients with cutting-edge SaaS and web apps.",
  openGraph: {
    type: 'website',
    siteName: 'Matthieu Vagnon Web',
    title: 'Matthieu Vagnon, Front-End Engineer & Digital Designer',
    description:
      'React and Next.js expert, front-end engineer, digital designer and application deployment expert. I provide my clients with cutting-edge SaaS and web apps.',
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_URL!}/og-image.png`
      }
    ]
  },
  keywords: ['Matthieu Vagnon', 'Front-End Engineer', 'Digital Designer', 'SaaS', 'Web App', 'React', 'Next.js'],
  authors: [
    {
      name: 'Matthieu Vagnon',
      url: process.env.NEXT_PUBLIC_URL!
    }
  ]
}

export default function RootLayout({
  children,
  params
}: Readonly<{
  children: React.ReactNode
  params: { locale: string }
}>) {
  const { locale } = params

  if (!hasLocale(routing.locales, locale)) {
    notFound()
  }

  return (
    <html lang={locale}>
      <NextIntlClientProvider>
        <TestimonialsStatusProvider>
          <DockStatusProvider>
            <MagneticStatusProvider>
              <AccentColorProvider>
                <body
                  className={`${signikaNegative.variable} ${sourceSans3.variable} ${notoSansJP.variable} ${zenAntique.variable} antialiased`}
                >
                  <NextTopLoader showSpinner={false} color='var(--main)' zIndex={999} />
                  <div className='max-w-[3840px] mx-auto relative px-4 sm:px-6 md:px-8 overflow-x-hidden'>
                    {children}
                    <CardStack items={testimonials} />
                    <AppsDock />
                  </div>
                </body>
              </AccentColorProvider>
            </MagneticStatusProvider>
          </DockStatusProvider>
        </TestimonialsStatusProvider>
      </NextIntlClientProvider>
      <SpeedInsights />
    </html>
  )
}
