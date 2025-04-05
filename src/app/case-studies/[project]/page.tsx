import Header from '@/components/header'
import PageTitle from '@/components/page-title'
import TestimonialsStatusWrapper from '@/components/testimonials-status-wrapper'
import { BlurFade } from '@/components/ui/blur-fade'
import { projects } from '@/data/projects'

export default async function Project({ params }: { params: { project: string } }) {
  const project = projects[params.project]

  return (
    <TestimonialsStatusWrapper shouldCollapse={true}>
      <BlurFade>
        <Header />
      </BlurFade>
      <BlurFade delay={0.1}>
        <PageTitle
          title={`${project.title} Case Study \u2022 ${project.year}`}
          description={project.shortDescription}
          tags={project.tags}
        />
      </BlurFade>
    </TestimonialsStatusWrapper>
  )
}
