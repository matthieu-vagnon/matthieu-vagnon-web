declare global {
  type Project = {
    title: string
    year: number
    tags: string[]
    shortDescription: string
    longDescription: string
    previewImg?: string
    type: 'Web Application' | 'SaaS' | 'Contribution' | 'Other'
    technologies: string[]
    gallery?: string[]
    problem: string
    solution: string
    results: string
    relatedUrls?: {
      title: string
      url: string
    }[]
  }
}

export {}
