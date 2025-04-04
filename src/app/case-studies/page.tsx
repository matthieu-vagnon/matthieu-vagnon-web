import Header from '@/components/header'
import PageTitle from '@/components/page-title'
import ProjectCard, { Project } from '@/components/project-card'
import SeeMore from '@/components/see-more'
import TestimonialsStatusWrapper from '@/components/testimonials-status-wrapper'
import { BlurFade } from '@/components/ui/blur-fade'

const PROJECTS: Project[] = [
  {
    title: 'Smart Interview',
    description: 'A platform to create AI-powered questionnaires and mass analyze responses.',
    url: 'case-studies/smart-interview',
    type: 'SaaS'
  },
  {
    title: 'Crystal',
    description: 'A platform to view and manage AI-powered trading tools.',
    url: 'case-studies/crystal',
    type: 'SaaS'
  },
  {
    title: 'Matthieu Vagnon',
    description: 'The web application you are currently watching.',
    image: '/matthieu-vagnon/web-1.png',
    url: 'case-studies/matthieu-vagnon',
    type: 'Web Application'
  },
  {
    title: 'Koryori Ya Ozaki',
    description: 'A simple web application for a Japanese restaurant.',
    image: '/koryori-ya/web-1.png',
    url: 'case-studies/koryori-ya',
    type: 'Web Application'
  }
]

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
        {PROJECTS.map((project, index) => (
          <ProjectCard
            key={index}
            priority={index}
            title={project.title}
            description={project.description}
            image={project.image}
            url={project.url}
            type={project.type}
            coverImage={`/project-card-cover/${(index % 5) + 1}.png`}
          />
        ))}
      </div>
      <BlurFade delay={0.4 + PROJECTS.length * 0.1}>
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
