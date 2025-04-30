import { profile } from '@/data/profile';
import { getFlattenedNode, getTranslatedData } from '@/lib/utils';
import { Metadata } from 'next';
import { getLocale, getMessages, getTranslations } from 'next-intl/server';

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations();
  const homeMessages = (await getMessages()).home.metadata;
  const messages = (await getMessages()).profile.metadata;
  const locale = await getLocale();
  const businessCard = getTranslatedData(profile.businessCard, locale);

  return {
    title: t('profile.metadata.title'),
    description: getFlattenedNode(
      t.rich('home.subtitle', {
        highlight: (chunks) => chunks,
      })
    ),
    openGraph: {
      type: 'website',
      siteName: 'Matthieu Vagnon Web',
      title: t('profile.metadata.openGraph.title'),
      description: t('profile.metadata.openGraph.description'),
      images: [
        {
          url: profile.avatarUrl
            ? `${process.env.NEXT_PUBLIC_URL!}${profile.avatarUrl?.src}`
            : '',
        },
        {
          url: businessCard
            ? `${process.env.NEXT_PUBLIC_URL!}${businessCard.coverUrl?.src}`
            : '',
        },
        {
          url: `${process.env.NEXT_PUBLIC_URL!}/og-image.png`,
        },
      ],
    },
    keywords: [
      ...(profile.frontendStack || []),
      ...(profile.deploymentStack || []),
      ...(profile.designStack || []),
      ...(profile.experience.map((experience) => experience.company) || []),
      ...(profile.education.map((education) => education.responsible) || []),
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
