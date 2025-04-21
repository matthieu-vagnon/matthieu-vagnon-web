import { profile } from '@/data/profile';
import { getFlattenedNode, getTranslatedData } from '@/lib/utils';
import { Metadata } from 'next';
import { getLocale, getMessages, getTranslations } from 'next-intl/server';

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('profile.metadata');
  const messages = (await getMessages()).profile.metadata;
  const locale = await getLocale();

  return {
    title: t('title'),
    description: getFlattenedNode(
      getTranslatedData(profile.description, locale)
    ),
    openGraph: {
      type: 'website',
      siteName: 'Matthieu Vagnon Web',
      title: t('openGraph.title'),
      description: t('openGraph.description'),
      images: [
        {
          url: profile.avatarUrl
            ? `${process.env.NEXT_PUBLIC_URL!}${profile.avatarUrl?.src}`
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
      ...Object.keys(messages.keywords).map((key) => messages.keywords[key]),
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
