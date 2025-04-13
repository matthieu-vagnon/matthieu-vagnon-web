import { projects } from '@/data/projects'
import type { MetadataRoute } from 'next'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  return [
    {
      url: process.env.NEXT_PUBLIC_URL!,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 1,
      alternates: {
        languages: {
          en: `${process.env.NEXT_PUBLIC_URL!}/en`,
          fr: `${process.env.NEXT_PUBLIC_URL!}/fr`,
          ja: `${process.env.NEXT_PUBLIC_URL!}/ja`
        }
      }
    },
    {
      url: `${process.env.NEXT_PUBLIC_URL!}/case-studies`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
      alternates: {
        languages: {
          en: `${process.env.NEXT_PUBLIC_URL!}/en/case-studies`,
          fr: `${process.env.NEXT_PUBLIC_URL!}/fr/case-studies`,
          ja: `${process.env.NEXT_PUBLIC_URL!}/ja/case-studies`
        }
      }
    },
    ...Object.entries(projects).map(([url, project]) => ({
      url: `${process.env.NEXT_PUBLIC_URL!}/case-studies/${url}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      images: project.gallery?.img?.map((media) => `${process.env.NEXT_PUBLIC_URL!}${media.image.src}`),
      priority: 0.8,
      alternates: {
        languages: {
          en: `${process.env.NEXT_PUBLIC_URL!}/en/case-studies/${url}`,
          fr: `${process.env.NEXT_PUBLIC_URL!}/fr/case-studies/${url}`,
          ja: `${process.env.NEXT_PUBLIC_URL!}/ja/case-studies/${url}`
        }
      }
    }))
  ]
}
