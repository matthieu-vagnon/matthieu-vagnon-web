import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Case Studies',
  description: 'Some of the projects I have worked on during my career. SaaS, AI, Web3, and more.',
  openGraph: {
    type: 'website',
    siteName: 'Matthieu Vagnon Web',
    title: 'Matthieu Vagnon Case Studies',
    description: 'Some of the projects I have worked on during my career. SaaS, AI, Web3, and more.',
    images: [
      {
        url: `${process.env.URL!}/og-image.png`
      }
    ]
  },
  keywords: [
    'Matthieu Vagnon',
    'Front-End Engineer',
    'Digital Designer',
    'SaaS',
    'Web App',
    'React',
    'Next.js',
    'Case Studies',
    'Case Study'
  ]
}

export default function CaseStudiesLayout({ children }: { children: React.ReactNode }) {
  return children
}
