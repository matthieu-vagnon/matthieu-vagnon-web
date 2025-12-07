import { Metadata } from "next";
import { getMessages, getTranslations } from "next-intl/server";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("yourProject.metadata");
  const homeMessages = (await getMessages()).home.metadata;
  const messages = (await getMessages()).yourProject.metadata;

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
    keywords: [
      ...Object.values(homeMessages.keywords).map(
        (keyword) => keyword as string
      ),
      ...Object.values(messages.keywords).map((keyword) => keyword as string),
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
