import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: process.env.URL!,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1
    },
    {
      url: `${process.env.URL!}/case-studies`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9
    }
  ]
}
