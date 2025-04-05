import Header from '@/components/header'
import PageTitle from '@/components/page-title'
import SeeMore from '@/components/see-more'
import TestimonialsStatusWrapper from '@/components/testimonials-status-wrapper'
import { BlurFade } from '@/components/ui/blur-fade'
import { projects } from '@/data/projects'
import { cn } from '@/lib/utils'

function Block({
  title,
  position,
  children,
  className
}: {
  title: string
  position: 'left' | 'right'
  children: React.ReactNode
  className?: string
}) {
  return (
    <div
      className={cn(
        'flex flex-col gap-2 w-full mt-10 sm:mt-12 md:mt-14',
        position === 'left' ? 'items-start' : 'items-end',
        className
      )}
    >
      <h3 className='text-xl sm:text-2xl md:text-3xl font-sans-special font-bold w-full md:w-2/3 xl:w-1/2'>{title}</h3>
      <p className='text-base text-gray-500 w-full md:w-2/3 xl:w-1/2'>{children}</p>
    </div>
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
      <BlurFade delay={blurDelay++ / 10}>
        <Block title='Description of the Project' position='left'>
          {project.longDescription}
        </Block>
      </BlurFade>
      {project.gallery && project.gallery.length > 0 && (
        <BlurFade delay={blurDelay++ / 10}>
          <div className='flex flex-col gap-2 mt-10 sm:mt-12 md:mt-14'>
            <h3 className='text-xl sm:text-2xl md:text-3xl font-sans-special font-bold'>Gallery</h3>
          </div>
        </BlurFade>
      )}
      <BlurFade delay={blurDelay++ / 10}>
        <Block title='Problem' position='right'>
          {project.problem}
        </Block>
      </BlurFade>
      <BlurFade delay={blurDelay++ / 10}>
        <Block title='Solution' position='left'>
          {project.solution}
        </Block>
      </BlurFade>
      <BlurFade delay={blurDelay++ / 10}>
        <Block title='Results' position='right'>
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
