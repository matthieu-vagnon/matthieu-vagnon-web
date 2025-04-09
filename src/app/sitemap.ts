import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://mvagnon.dev',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1
    },
    {
      url: 'https://mvagnon.dev/case-studies',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9
    }
  ]
}
