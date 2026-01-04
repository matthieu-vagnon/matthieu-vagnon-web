import { profile } from "@/data/profile";
import { getFlattenedNode, getTranslatedData } from "@/lib/utils";
import { Metadata } from "next";
import { getLocale, getTranslations } from "next-intl/server";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("profile.metadata");
  const locale = await getLocale();
  const businessCard = getTranslatedData(profile.businessCard, locale);

  return {
    title: t("title"),
    description: getFlattenedNode(getTranslatedData(profile.about, locale)),
    openGraph: {
      type: "website",
      siteName: "Matthieu Vagnon Web",
      title: t("title"),
      description: t("description"),
      images: [
        {
          url: profile.avatarUrl
            ? `${process.env.NEXT_PUBLIC_URL!}${profile.avatarUrl?.src}`
            : "",
        },
        {
          url: businessCard
            ? `${process.env.NEXT_PUBLIC_URL!}${businessCard.coverUrl?.src}`
            : "",
        },
        {
          url: `${process.env.NEXT_PUBLIC_URL!}/og-image.png`,
        },
      ],
    },
    keywords: [
      ...(Object.values(profile.features).map((feature) =>
        getTranslatedData(feature.title, locale)
      ) || []),
      ...(profile.experience.map((experience) => experience.company) || []),
      ...(profile.education.map((education) => education.responsible) || []),
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
