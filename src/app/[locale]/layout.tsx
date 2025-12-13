import AppsDock from "@/components/AppsDock";
import { BlurFade } from "@/components/BlurFade";
import { CardStack } from "@/components/CardStack";
import InfoBand from "@/components/InfoBand";
import { ProgressiveBlur } from "@/components/ProgressiveBlur";
import { TooltipProvider } from "@/components/Tooltip";
import { testimonials } from "@/data/testimonials";
import AccentColorProvider from "@/hooks/useAccentColor";
import ActiveModalProvider from "@/hooks/useActiveModal";
import MagneticStatusProvider from "@/hooks/useMagneticStatus";
import { TestimonialsStatusProvider } from "@/hooks/useTestimonialsStatus";
import { routing } from "@/i18n/routing";
import { getCookie } from "@/lib/server-utils";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations } from "next-intl/server";
import {
  Courier_Prime,
  Farsan,
  Noto_Sans_JP,
  Signika_Negative,
  Source_Sans_3,
  Zen_Antique,
} from "next/font/google";
import { notFound } from "next/navigation";
import NextTopLoader from "nextjs-toploader";
import { Toaster } from "sonner";
import "../globals.css";

const signikaNegative = Signika_Negative({
  variable: "--font-signika-negative",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const sourceSans3 = Source_Sans_3({
  variable: "--font-source-sans-3",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  preload: false,
});

const zenAntique = Zen_Antique({
  variable: "--font-zen-antique",
  subsets: ["latin"],
  weight: "400",
  preload: false,
});

const courierPrime = Courier_Prime({
  variable: "--font-courier-prime",
  subsets: ["latin"],
  weight: "400",
  preload: false,
});

const contrastFont = Farsan({
  variable: "--font-contrast",
  subsets: ["latin"],
  weight: ["400"],
  preload: false,
});

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("home.metadata");
  const messages = (await getMessages()).home.metadata;

  return {
    title: t("title"),
    description: t("description"),
    openGraph: {
      type: "website",
      siteName: "Matthieu Vagnon Web",
      title: t("openGraph.title"),
      description: t("openGraph.description"),
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
        name: "Matthieu Vagnon",
        url: process.env.NEXT_PUBLIC_URL!,
      },
    ],
  };
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  const accentColor = await getCookie("accent-color");
  const initialMagneticStatus = await getCookie("magnetic");

  return (
    <html lang={locale}>
      <NextIntlClientProvider>
        <TooltipProvider>
          <TestimonialsStatusProvider>
            <ActiveModalProvider>
              <MagneticStatusProvider
                initialMagneticStatus={
                  !initialMagneticStatus
                    ? undefined
                    : initialMagneticStatus === "true"
                }
              >
                <AccentColorProvider initialAccentColor={accentColor}>
                  <body
                    className={`${signikaNegative.variable} ${sourceSans3.variable} ${notoSansJP.variable} ${zenAntique.variable} ${courierPrime.variable} ${contrastFont.variable} antialiased`}
                  >
                    <NextTopLoader
                      showSpinner={false}
                      color="var(--main)"
                      zIndex={999}
                    />
                    <Toaster />
                    <div className="flex flex-col min-h-dvh max-w-[3840px] mx-auto relative px-4 sm:px-6 md:px-8 overflow-x-hidden pt-14">
                      <BlurFade className="w-full fixed top-0 left-0 z-100 px-4 pt-5">
                        <InfoBand />
                      </BlurFade>
                      <ProgressiveBlur
                        blurIntensity={0.66}
                        direction="top"
                        className="pointer-events-none fixed top-0 left-0 h-26 w-full z-99"
                      />
                      {children}
                      <CardStack items={testimonials} />
                      <AppsDock />
                    </div>
                  </body>
                </AccentColorProvider>
              </MagneticStatusProvider>
            </ActiveModalProvider>
          </TestimonialsStatusProvider>
        </TooltipProvider>
      </NextIntlClientProvider>
      <SpeedInsights />
    </html>
  );
}
