import AppsDock from "@/components/AppsDock";
import { CardStack } from "@/components/CardStack";
import { TooltipProvider } from "@/components/Tooltip";
import { testimonials } from "@/data/testimonials";
import AccentColorProvider from "@/hooks/useAccentColor";
import DockStatusProvider from "@/hooks/useDockStatus";
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
  Noto_Sans_JP,
  Signika_Negative,
  Source_Sans_3,
  The_Nautigal,
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

const theNautigal = The_Nautigal({
  variable: "--font-the-nautigal",
  subsets: ["latin"],
  weight: ["400", "700"],
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
            <DockStatusProvider>
              <MagneticStatusProvider
                initialMagneticStatus={
                  !initialMagneticStatus
                    ? undefined
                    : initialMagneticStatus === "true"
                }
              >
                <AccentColorProvider initialAccentColor={accentColor}>
                  <body
                    className={`${signikaNegative.variable} ${sourceSans3.variable} ${notoSansJP.variable} ${zenAntique.variable} ${courierPrime.variable} ${theNautigal.variable} antialiased`}
                  >
                    <NextTopLoader
                      showSpinner={false}
                      color="var(--main)"
                      zIndex={999}
                    />
                    <Toaster />
                    <div className="min-h-dvh max-w-[3840px] mx-auto relative px-4 sm:px-6 md:px-8 overflow-x-hidden">
                      {children}
                      <CardStack items={testimonials} />
                      <AppsDock />
                    </div>
                  </body>
                </AccentColorProvider>
              </MagneticStatusProvider>
            </DockStatusProvider>
          </TestimonialsStatusProvider>
        </TooltipProvider>
      </NextIntlClientProvider>
      <SpeedInsights />
    </html>
  );
}
