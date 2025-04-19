import { profile } from '@/data/profile';
import { Metadata } from 'next';
import { getMessages, getTranslations } from 'next-intl/server';

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('profile.metadata');
  const messages = (await getMessages()).profile.metadata;

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
          url: '',
        },
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
    keywords: Object.keys(messages.keywords).map(
      (key) => messages.keywords[key]
    ),
  };
}

export default function ProfileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
