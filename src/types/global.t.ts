declare global {
  type Project = {
    title: string
    year: number
    tags: string[]
    shortDescription: string
    longDescription: React.ReactNode
    previewImg?: string
    type: 'Web Application' | 'SaaS' | 'Contribution' | 'Other'
    technologies: string[]
    gallery?: string[]
    problem: React.ReactNode
    solution: React.ReactNode
    results: React.ReactNode
    relatedUrls?: {
      name: string
      url: string
    }[]
  }
}

export {}
