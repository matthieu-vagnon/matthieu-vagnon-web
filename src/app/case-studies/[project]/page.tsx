import Header from '@/components/header'
import { MediaButton } from '@/components/media-button'
import PageTitle from '@/components/page-title'
import SeeMore from '@/components/see-more'
import TestimonialsStatusWrapper from '@/components/testimonials-status-wrapper'
import { BlurFade } from '@/components/ui/blur-fade'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import { projects } from '@/data/projects'
import { cn } from '@/lib/utils'
import { BookOpen, Frown, LucideIcon, Package, Smile } from 'lucide-react'
import React from 'react'

function Block({
  icon: Icon,
  title,
  position,
  children,
  className
}: {
  icon: LucideIcon
  title: string
  position: 'left' | 'right'
  children: React.ReactNode
  className?: string
}) {
  return (
    <div className={cn('flex w-full', position === 'left' ? 'justify-start' : 'justify-end', className)}>
      <div className='flex flex-col gap-2 sm:gap-3 md:gap-4 w-full md:w-2/3 xl:w-1/2'>
        <div className='flex flex-row items-center gap-2 md:gap-3 w-full'>
          <Icon className='w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7' />
          <h3 className='text-xl sm:text-2xl md:text-3xl font-sans-special font-bold'>{title}</h3>
        </div>
        <div className='text-base md:text-lg text-gray-500'>{children}</div>
      </div>
    </div>
  )
}

function Technology({ technology }: { technology: string }) {
  return (
    <div className='text-xs sm:text-sm bg-gray-500 px-2 py-1 rounded-md text-white border border-gray-400 outline-[0.5px] outline-gray-500'>
      {technology}
    </div>
  )
}

type Params = Promise<{ project: string }>

export async function generateMetadata(props: { params: Params }) {
  const params = await props.params
  const project = projects[params.project]

  return {
    title: `${project.title} Case Study by Matthieu Vagnon`,
    description: project.longDescription,
    openGraph: {
      title: `${project.title} Case Study by Matthieu Vagnon`,
      description: project.shortDescription
    },
    keywords: [
      'Matthieu Vagnon',
      'Front-End Engineer',
      'Digital Designer',
      'SaaS',
      'Web App',
      'React',
      'Next.js',
      'Case Study',
      'Case Study',
      `${project.title}`,
      `${project.year}`,
      ...project.tags
    ]
  }
}

export default async function Project(props: { params: Params }) {
  const params = await props.params
  const project = projects[params.project]
  let blurDelay = 0

  const incrementBlurDelay = () => {
    blurDelay++
    return blurDelay / 10
  }

  return (
    <TestimonialsStatusWrapper shouldCollapse={true}>
      <BlurFade>
        <Header />
      </BlurFade>
      <BlurFade delay={incrementBlurDelay()}>
        <PageTitle
          title={`${project.title} Case Study \u2022 ${project.year}`}
          description={project.shortDescription}
          tags={project.tags}
        />
      </BlurFade>
      {project.gallery && project.gallery.length > 0 && (
        <BlurFade delay={incrementBlurDelay()}>
          <Carousel opts={{ align: 'start' }} className='w-full flex flex-col'>
            <CarouselContent>
              {project.gallery.map((element, index) => (
                <CarouselItem
                  key={index}
                  className='basis-full sm:basis-1/2 md:basis-1/3 xl:basis-1/4 pb-8 flex items-center justify-center'
                >
                  <MediaButton title={element.title} img={element.img} video={element.video} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className='flex flex-row gap-2 items-center justify-start'>
              <CarouselPrevious />
              <CarouselNext />
            </div>
          </Carousel>
        </BlurFade>
      )}
      <div className='flex flex-col gap-12 sm:gap-14 md:gap-16 mt-10 sm:mt-12 md:mt-14'>
        <BlurFade delay={incrementBlurDelay()}>
          <Block icon={BookOpen} title='Description of the Project' position='left'>
            <span>{project.longDescription}</span>
            <div className='flex flex-row flex-wrap gap-2 mt-3 sm:mt-4 md:mt-5 items-center justify-start'>
              {project.technologies.map((technology, index) => (
                <Technology key={index} technology={technology} />
              ))}
            </div>
          </Block>
        </BlurFade>
        {project.problem && (
          <BlurFade delay={incrementBlurDelay()}>
            <Block icon={Frown} title='Problem' position={blurDelay % 2 === 0 ? 'right' : 'left'}>
              {project.problem}
            </Block>
          </BlurFade>
        )}
        {project.solution && (
          <BlurFade delay={incrementBlurDelay()}>
            <Block icon={Smile} title='Solution' position={blurDelay % 2 === 0 ? 'right' : 'left'}>
              {project.solution}
            </Block>
          </BlurFade>
        )}
        {project.results && (
          <BlurFade delay={incrementBlurDelay()}>
            <Block icon={Package} title='Results' position={blurDelay % 2 === 0 ? 'right' : 'left'}>
              {project.results}
            </Block>
          </BlurFade>
        )}
      </div>
      <BlurFade delay={incrementBlurDelay()}>
        <SeeMore
          links={[
            { name: 'Instagram Portfolio', url: 'https://www.instagram.com/matthieu.vagnon/' },
            { name: 'GitHub Portfolio', url: 'https://github.com/matthieu-vagnon' },
            ...(project.relatedUrls || [])
          ]}
          className='mt-10 sm:mt-12 md:mt-14 mb-28'
        />
      </BlurFade>
    </TestimonialsStatusWrapper>
  )
}
