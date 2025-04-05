import Header from '@/components/header'
import PageTitle from '@/components/page-title'
import ProjectCard from '@/components/project-card'
import SeeMore from '@/components/see-more'
import TestimonialsStatusWrapper from '@/components/testimonials-status-wrapper'
import { BlurFade } from '@/components/ui/blur-fade'
import { projects } from '@/data/projects'

export default function CaseStudies() {
  return (
    <TestimonialsStatusWrapper shouldCollapse={true}>
      <BlurFade>
        <Header />
      </BlurFade>
      <BlurFade delay={0.1}>
        <PageTitle title='Case Studies' description="Here are some of the projects I've worked on." />
      </BlurFade>
      <div className='flex flex-row flex-wrap mt-10 sm:mt-12 md:mt-14 justify-center gap-5'>
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            priority={index}
            coverImage={`/project-card-cover/${(index % 5) + 1}.png`}
            {...project}
          />
        ))}
      </div>
      <BlurFade delay={0.4 + projects.length * 0.1}>
        <SeeMore
          links={[
            { name: 'Instagram Portfolio', url: 'https://www.instagram.com/matthieu.vagnon/' },
            { name: 'GitHub Portfolio', url: 'https://github.com/matthieu-vagnon' }
          ]}
          className='mt-10 sm:mt-12 md:mt-14 mb-28'
        />
      </BlurFade>
    </TestimonialsStatusWrapper>
  )
}
