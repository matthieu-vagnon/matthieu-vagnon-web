import AppsDock from '@/components/apps-dock';
import { CardStack } from '@/components/card-stack';
import { testimonials } from '@/data/testimonials';
import AccentColorProvider from '@/hooks/use-accent-color';
import DockStatusProvider from '@/hooks/use-dock-status';
import MagneticStatusProvider from '@/hooks/use-magnetic-status';
import { TestimonialsStatusProvider } from '@/hooks/use-testimonials-status';
import { routing } from '@/i18n/routing';
import { SpeedInsights } from '@vercel/speed-insights/next';
import type { Metadata } from 'next';
import { hasLocale, NextIntlClientProvider } from 'next-intl';
import { getMessages, getTranslations } from 'next-intl/server';
import {
  Courier_Prime,
  Noto_Sans_JP,
  Signika_Negative,
  Source_Sans_3,
  Zen_Antique,
} from 'next/font/google';
import { notFound } from 'next/navigation';
import NextTopLoader from 'nextjs-toploader';
import { Toaster } from 'sonner';
import '../globals.css';

const signikaNegative = Signika_Negative({
  variable: '--font-signika-negative',
  subsets: ['latin'],
});

const sourceSans3 = Source_Sans_3({
  variable: '--font-source-sans-3',
  subsets: ['latin'],
});

const notoSansJP = Noto_Sans_JP({
  variable: '--font-noto-sans-jp',
  subsets: ['latin'],
});

const zenAntique = Zen_Antique({
  variable: '--font-zen-antique',
  subsets: ['latin'],
  weight: '400',
});

const courierPrime = Courier_Prime({
  variable: '--font-courier-prime',
  subsets: ['latin'],
  weight: '400',
});

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('home.metadata');
  const messages = (await getMessages()).home.metadata;

  return {
    title: t('title'),
    description: t('description'),
    openGraph: {
      type: 'website',
      siteName: 'Matthieu Vagnon Web',
      title: t('openGraph.title'),
      description: t('openGraph.description'),
      images: [
        {
          url: `${process.env.NEXT_PUBLIC_URL!}/og-image.png`,
        },
      ],
    },
    keywords: Object.keys(messages.keywords).map(
      (key) => messages.keywords[key]
    ),
    authors: [
      {
        name: 'Matthieu Vagnon',
        url: process.env.NEXT_PUBLIC_URL!,
      },
    ],
  };
}

export default function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  const { locale } = params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html lang={locale}>
      <NextIntlClientProvider>
        <TestimonialsStatusProvider>
          <DockStatusProvider>
            <MagneticStatusProvider>
              <AccentColorProvider>
                <body
                  className={`${signikaNegative.variable} ${sourceSans3.variable} ${notoSansJP.variable} ${zenAntique.variable} ${courierPrime.variable} antialiased`}
                >
                  <NextTopLoader
                    showSpinner={false}
                    color='var(--main)'
                    zIndex={999}
                  />
                  <Toaster />
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
  );
}
