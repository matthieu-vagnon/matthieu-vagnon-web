import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Case Studies | Matthieu Vagnon',
  description: 'Some of the projects I have worked on during my career. SaaS, AI, Web3, and more.'
}

export default function CaseStudiesLayout({ children }: { children: React.ReactNode }) {
  return children
}
