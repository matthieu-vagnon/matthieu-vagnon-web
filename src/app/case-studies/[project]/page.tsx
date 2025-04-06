import Header from '@/components/header'
import PageTitle from '@/components/page-title'
import SeeMore from '@/components/see-more'
import TestimonialsStatusWrapper from '@/components/testimonials-status-wrapper'
import { BlurFade } from '@/components/ui/blur-fade'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import { Magnetic } from '@/components/ui/magnetic'
import { projects } from '@/data/projects'
import { cn } from '@/lib/utils'
import { BookOpen, Frown, LucideIcon, Package, Smile } from 'lucide-react'
import Image from 'next/image'

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
    <div
      className={cn(
        'flex w-full mt-10 sm:mt-12 md:mt-14',
        position === 'left' ? 'justify-start' : 'justify-end',
        className
      )}
    >
      <div className='flex flex-col gap-2 sm:gap-3 md:gap-4 w-full md:w-2/3 xl:w-1/2'>
        <div className='flex flex-row items-center gap-2 md:gap-3 w-full'>
          <Icon className='w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7' />
          <h3 className='text-xl sm:text-2xl md:text-3xl font-sans-special font-bold'>{title}</h3>
        </div>
        <p className='text-base text-gray-500'>{children}</p>
      </div>
    </div>
  )
}

function VideoButton({ title, video }: { title: string; video: string }) {
  return (
    <Magnetic range={500} intensity={0.1}>
      <button className='rounded-lg overflow-hidden cursor-pointer hover:shadow-lg transition-all duration-300'>
        <video src={video} className='rounded-lg' autoPlay muted loop />
      </button>
    </Magnetic>
  )
}

function ImageButton({ title, image }: { title: string; image: string }) {
  return (
    <Magnetic range={500} intensity={0.1}>
      <button className='rounded-lg overflow-hidden cursor-pointer hover:shadow-lg transition-all duration-300'>
        <Image src={image} alt={image} width={600} height={600} />
      </button>
    </Magnetic>
  )
}

export default function Project({ params }: { params: { project: string } }) {
  const project = projects[params.project]
  let blurDelay = 0

  return (
    <TestimonialsStatusWrapper shouldCollapse={true}>
      <BlurFade delay={blurDelay++ / 10}>
        <Header />
      </BlurFade>
      <BlurFade delay={blurDelay++ / 10}>
        <PageTitle
          title={`${project.title} Case Study \u2022 ${project.year}`}
          description={project.shortDescription}
          tags={project.tags}
        />
      </BlurFade>
      {project.gallery && project.gallery.length > 0 && (
        <Carousel opts={{ align: 'start' }} className='w-full flex flex-col'>
          <CarouselContent>
            {project.gallery.map((element, index) => (
              <CarouselItem
                key={index}
                className='basis-full sm:basis-1/2 md:basis-1/3 xl:basis-1/4 pt-16 pb-8 flex items-center justify-center'
              >
                <BlurFade delay={blurDelay++ / 10}>
                  {element.url.endsWith('.mov') ? (
                    <VideoButton title={element.title} video={element.url} />
                  ) : (
                    <ImageButton title={element.title} image={element.url} />
                  )}
                </BlurFade>
              </CarouselItem>
            ))}
          </CarouselContent>
          <BlurFade delay={blurDelay++ / 10} className='flex flex-row gap-2 items-center justify-start'>
            <CarouselPrevious />
            <CarouselNext />
          </BlurFade>
        </Carousel>
      )}
      <BlurFade delay={blurDelay++ / 10}>
        <Block icon={BookOpen} title='Description of the Project' position='left'>
          <span>{project.longDescription}</span>
          <span>{project.technologies.join(', ')}</span>
        </Block>
      </BlurFade>
      <BlurFade delay={blurDelay++ / 10}>
        <Block icon={Frown} title='Problem' position='right'>
          {project.problem}
        </Block>
      </BlurFade>
      <BlurFade delay={blurDelay++ / 10}>
        <Block icon={Smile} title='Solution' position='left'>
          {project.solution}
        </Block>
      </BlurFade>
      <BlurFade delay={blurDelay++ / 10}>
        <Block icon={Package} title='Results' position='right'>
          {project.results}
        </Block>
      </BlurFade>
      <BlurFade delay={blurDelay++ / 10}>
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
