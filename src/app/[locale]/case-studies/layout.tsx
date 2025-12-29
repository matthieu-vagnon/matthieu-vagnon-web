import { projects } from "@/data/projects";
import { Metadata } from "next";
import { getTranslations } from "next-intl/server";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("caseStudies.metadata");

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
      ...(Object.values(projects).map((project) => project.title) || []),
      ...(Object.values(projects).flatMap((project) => project.technologies) ||
        []),
    ],
  };
}

export default function CaseStudiesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
