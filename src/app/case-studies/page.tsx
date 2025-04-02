import ProjectCard from '@/components/project-card'
import TestimonialsStatusWrapper from '@/components/testimonials-status-wrapper'
import { BlurFade } from '@/components/ui/blur-fade'
import React from 'react'

const PROJECTS = [
  {
    title: 'Project 1',
    description: 'Description 1',
    image: '/smart-interview/builder-2.png'
  },
  {
    title: 'Project 2',
    description: 'Description 2',
    image: '/smart-interview/builder-3.png'
  },
  {
    title: 'Project 3',
    description: 'Description 3',
    image: '/smart-interview/builder-4.png'
  }
]

export default function CaseStudies() {
  return (
    <TestimonialsStatusWrapper shouldCollapse={true}>
      <React.Fragment>
        <BlurFade delay={0.2}>
          <div className='flex flex-col items-center justify-center'>
            <h1 className='text-center'>Case Studies</h1>
            <p className='text-base md:text-lg font-sans-special text-center text-gray-500'>
              Here are some of the projects I&apos;ve worked on.
            </p>
          </div>
        </BlurFade>
        <div className='mt-10 flex flex-row items-center justify-center flex-wrap gap-4'>
          {PROJECTS.map((project, index) => (
            <BlurFade key={project.title} delay={0.4 + index * 0.1}>
              <ProjectCard image={project.image} title={project.title} description={project.description} />
            </BlurFade>
          ))}
        </div>
      </React.Fragment>
    </TestimonialsStatusWrapper>
  )
}
