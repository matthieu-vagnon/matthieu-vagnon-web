import { StaticImageData } from 'next/image'

declare global {
  type Testimonial = {
    id: number
    name: string
    company: string
    position: string
    testimonial: {
      en: React.ReactNode
      fr?: React.ReactNode
      jp?: React.ReactNode
    }
    method?: string
    image: StaticImageData
  }
  type Project = {
    title: string
    year: number
    type: 'Web Application' | 'SaaS' | 'Contribution' | 'Other'
    shortDescription: {
      en: string
      fr?: string
      jp?: string
    }
    longDescription: {
      en: React.ReactNode
      fr?: React.ReactNode
      jp?: React.ReactNode
    }
    tags: {
      en: string[]
      fr?: string[]
      jp?: string[]
    }
    skills: {
      en: string[]
      fr?: string[]
      jp?: string[]
    }
    technologies: string[]
    previewImg?: StaticImageData
    gallery?: {
      img?: {
        title: {
          en: string
          fr?: string
          jp?: string
        }
        image: StaticImageData
      }[]
      video?: {
        title: {
          en: string
          fr?: string
          jp?: string
        }
        src: string
        previewImage: StaticImageData
      }[]
    }
    problem?: {
      en: React.ReactNode
      fr?: React.ReactNode
      jp?: React.ReactNode
    }
    solution?: {
      en: React.ReactNode
      fr?: React.ReactNode
      jp?: React.ReactNode
    }
    results?: {
      en: React.ReactNode
      fr?: React.ReactNode
      jp?: React.ReactNode
    }
    relatedUrls?: {
      name: {
        en: string
        fr?: string
        jp?: string
      }
      url: string
    }[]
  }
}

export {}
