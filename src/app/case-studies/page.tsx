import PageTitle from '@/components/page-title'
import ProjectCard, { Project } from '@/components/project-card'
import SeeMore from '@/components/see-more'
import TestimonialsStatusWrapper from '@/components/testimonials-status-wrapper'
import { BlurFade } from '@/components/ui/blur-fade'

const PROJECTS: Project[] = [
  {
    title: 'Smart Interview',
    description: 'A platform to create AI-powered questionnaires and mass analyze responses.',
    backgroundImage: '/smart-interview/case-study.png',
    previewImage: '/smart-interview/builder-2.png',
    url: 'case-studies/smart-interview',
    type: 'SaaS'
  },
  {
    title: 'Crystal',
    description: 'A platform to view and manage AI-powered trading tools.',
    backgroundImage: '/crystal/case-study.png',
    url: 'case-studies/crystal',
    type: 'SaaS'
  },
  {
    title: 'Matthieu Vagnon',
    description: 'The web application you are currently watching.',
    backgroundImage: '/matthieu-vagnon/case-study.png',
    previewImage: '/matthieu-vagnon/web-1.png',
    url: 'case-studies/matthieu-vagnon',
    type: 'Web Application'
  },
  {
    title: 'Koryori Ya Ozaki',
    description: 'A simple web application for a Japanese restaurant.',
    backgroundImage: '/koryori-ya/case-study.png',
    previewImage: '/koryori-ya/web-1.png',
    url: 'case-studies/koryori-ya',
    type: 'Web Application'
  }
]

export default function CaseStudies() {
  return (
    <TestimonialsStatusWrapper shouldCollapse={true}>
      <BlurFade>
        <PageTitle title='Case Studies' description="Here are some of the projects I've worked on." />
      </BlurFade>
      <div className='flex flex-row flex-wrap justify-evenly gap-5 mt-10 sm:mt-12 md:mt-14'>
        {PROJECTS.map((project, index) => (
          <ProjectCard
            key={index}
            priority={index}
            backgroundImage={project.backgroundImage}
            previewImage={project.previewImage}
            title={project.title}
            description={project.description}
            url={project.url}
            type={project.type}
          />
        ))}
      </div>
      <BlurFade delay={0.2 + PROJECTS.length * 0.1}>
        <SeeMore
          links={[
            { name: 'Instagram Portfolio', url: 'https://www.instagram.com/matthieu.vagnon/' },
            { name: 'GitHub Portfolio', url: 'https://github.com/matthieu-vagnon' }
          ]}
        />
      </BlurFade>
    </TestimonialsStatusWrapper>
  )
}
