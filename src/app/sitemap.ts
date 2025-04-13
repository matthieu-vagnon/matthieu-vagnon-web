import { projects } from '@/data/projects'
import { getPathname } from '@/i18n/navigation'
import { routing } from '@/i18n/routing'
import type { MetadataRoute } from 'next'
import { Locale } from 'next-intl'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ...getEntries('/'),
    ...getEntries('/case-studies'),
    ...Object.entries(projects).flatMap(([project, data]) => getEntries(`/case-studies/${project}`, data))
  ]
}

type Href = Parameters<typeof getPathname>[0]['href']

function getEntries(href: Href, data?: Project) {
  return routing.locales.map((locale: Locale) => ({
    url: getUrl(href, locale),
    lastModified: new Date().toISOString(),
    changeFrequency: 'daily' as const,
    images: data?.gallery?.img?.map((media) => `${process.env.NEXT_PUBLIC_URL!}${media.image.src}`),
    alternates: {
      languages: Object.fromEntries(routing.locales.map((cur: Locale) => [cur, getUrl(href, cur)]))
    }
  }))
}

function getUrl(href: Href, locale: Locale) {
  const pathname = getPathname({ locale, href })

  return process.env.NEXT_PUBLIC_URL! + pathname
}
