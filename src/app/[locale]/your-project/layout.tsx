import { Metadata } from "next";
import { getTranslations } from "next-intl/server";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("yourProject.metadata");

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
  };
}

export default function ProfileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
