import { Metadata } from 'next'
import { getMessages, getTranslations } from 'next-intl/server'

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('caseStudies.metadata')
  const messages = (await getMessages()).caseStudies.metadata

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
          url: `${process.env.NEXT_PUBLIC_URL!}/og-image.png`
        }
      ]
    },
    keywords: Object.keys(messages.keywords).map((key) => messages.keywords[key])
  }
}

export default function CaseStudiesLayout({ children }: { children: React.ReactNode }) {
  return children
}
