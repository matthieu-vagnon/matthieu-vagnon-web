import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Case Studies | Matthieu Vagnon',
  description: 'Some of the projects I have worked on.'
}

export default function CaseStudiesLayout({ children }: { children: React.ReactNode }) {
  return children
}
