import { projects } from '@/data/projects'
import type { MetadataRoute } from 'next'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  return [
    {
      url: process.env.URL!,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 1
    },
    {
      url: `${process.env.URL!}/case-studies`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9
    },
    ...Object.entries(projects).map(([url, project]) => ({
      url: `${process.env.URL!}/case-studies/${url}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
      images: project.gallery?.img?.map((media) => `${process.env.URL!}${media.image.src}`)
    }))
  ]
}
