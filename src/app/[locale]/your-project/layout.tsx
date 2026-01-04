import { pricing } from "@/data/pricing";
import { getTranslatedData } from "@/lib/utils";
import { Metadata } from "next";
import { getLocale, getTranslations } from "next-intl/server";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("yourProject.metadata");
  const locale = await getLocale();

  return {
    title: t("title"),
    description: t("description"),
    openGraph: {
      type: "website",
      siteName: "Matthieu Vagnon Web",
      title: t("title"),
      description: t("description"),
      images: [
        {
          url: `${process.env.NEXT_PUBLIC_URL!}/og-image.png`,
        },
      ],
    },
    keywords: [
      ...(Object.values(pricing).map((plan: PricingPlan) =>
        getTranslatedData(plan.title, locale)
      ) || []),
    ],
  };
}

export default function ProfileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
