import { profile } from '@/data/profile';
import { projects } from '@/data/projects';
import { getPathname } from '@/i18n/navigation';
import { routing } from '@/i18n/routing';
import type { MetadataRoute } from 'next';
import { Locale } from 'next-intl';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ...getEntries('/'),
    ...getEntries('/profile', [
      profile.avatarUrl?.src,
      ...Object.values(profile.businessCard).map((img) => img.image.src),
    ]),
    ...getEntries('/case-studies'),
    ...Object.entries(projects).flatMap(([project, data]) =>
      getEntries(
        `/case-studies/${project}`,
        data.gallery
          ?.filter((media) => media.image)
          .map((image) => image.image!.src)
      )
    ),
  ];
}

type Href = Parameters<typeof getPathname>[0]['href'];

function getEntries(href: Href, imgs?: (string | undefined)[]) {
  const filteredImgs = imgs?.filter((img) => img !== undefined);

  return routing.locales.map((locale: Locale) => ({
    url: getUrl(href, locale),
    lastModified: new Date().toISOString(),
    changeFrequency: 'daily' as const,
    images: filteredImgs?.map((img) => `${process.env.NEXT_PUBLIC_URL!}${img}`),
    alternates: {
      languages: Object.fromEntries(
        routing.locales.map((cur: Locale) => [cur, getUrl(href, cur)])
      ),
    },
  }));
}

function getUrl(href: Href, locale: Locale) {
  const pathname = getPathname({ locale, href });

  return process.env.NEXT_PUBLIC_URL! + pathname;
}
