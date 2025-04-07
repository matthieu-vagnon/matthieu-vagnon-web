import { StaticImageData } from 'next/image'

declare global {
  type Project = {
    title: string
    year: number
    tags: string[]
    shortDescription: string
    longDescription: React.ReactNode
    previewImg?: StaticImageData
    type: 'Web Application' | 'SaaS' | 'Contribution' | 'Other'
    technologies: string[]
    gallery?: { title: string; img?: StaticImageData; video?: { src: string; preview: StaticImageData } }[]
    problem?: React.ReactNode
    solution?: React.ReactNode
    results?: React.ReactNode
    relatedUrls?: {
      name: string
      url: string
    }[]
  }
}

export {}
