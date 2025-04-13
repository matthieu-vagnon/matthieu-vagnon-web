import { StaticImageData } from 'next/image'

declare global {
  type Testimonial = {
    id: number
    name: string
    company: string
    position: string
    testimonial: React.ReactNode
    method?: string
    image: StaticImageData
  }
  type Project = {
    title: string
    year: number
    type: 'Web Application' | 'SaaS' | 'Contribution' | 'Other'
    shortDescription: string
    longDescription: React.ReactNode
    tags: string[]
    skills: string[]
    technologies: string[]
    previewImg?: StaticImageData
    gallery?: {
      img?: { title: string; image: StaticImageData }[]
      video?: { title: string; src: string; previewImage: StaticImageData }[]
    }
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
