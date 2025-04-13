import Header from '@/components/header'
import { ScrollProgress } from '@/components/magicui/scroll-progress'
import { MediaButton } from '@/components/media-button'
import PageTitle from '@/components/page-title'
import SeeMore from '@/components/see-more'
import TestimonialsStatusWrapper from '@/components/testimonials-status-wrapper'
import { BlurFade } from '@/components/ui/blur-fade'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import { projects } from '@/data/projects'
import { cn, getTranslatedData } from '@/lib/utils'
import { LucideIcon, Sparkle } from 'lucide-react'
import { getLocale, getMessages, getTranslations } from 'next-intl/server'
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
        <div className='flex flex-row items-center gap-1 md:gap-2 w-full'>
          <Icon strokeWidth={0} fill='currentColor' className='w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7' />
          <h3 className='text-xl sm:text-2xl md:text-3xl font-sans-special font-bold'>{title}</h3>
        </div>
        <div className='text-base md:text-lg text-gray-500'>{children}</div>
      </div>
    </div>
  )
}

function SkillTag({ technology }: { technology: string }) {
  return (
    <div className='text-xs sm:text-sm bg-gray-500 px-2 py-1 rounded-md text-white border border-gray-400 outline outline-gray-500'>
      {technology}
    </div>
  )
}

type Params = { project: string }

export async function generateMetadata(props: { params: Params; locale: string }) {
  const params = props.params
  const project = projects[params.project]
  const locale = props.locale as keyof typeof project.tags
  const t = await getTranslations('caseStudies.project.metadata')
  const messages = (await getMessages()).caseStudies.project.metadata

  return {
    title: t('title', { name: project.title }),
    description: t('description', { name: project.title }),
    openGraph: {
      type: 'article',
      siteName: 'Matthieu Vagnon Web',
      title: t('openGraph.title', { name: project.title }),
      description: t('openGraph.description', { name: project.title }),
      images: [
        ...(project.gallery?.img?.map((img) => ({
          url: `${process.env.NEXT_PUBLIC_URL!}${img.image.src}`
        })) || []),
        {
          url: `${process.env.NEXT_PUBLIC_URL!}/og-image.png`
        }
      ]
    },
    keywords: [
      `${project.title}`,
      `${project.year}`,
      ...Object.keys(messages.keywords).map((key) => messages.keywords[key]),
      ...(project.tags[locale] || []),
      ...(project.skills[locale] || []),
      ...project.technologies
    ]
  }
}

export default async function Project(props: { params: Params; searchParams: { video: string } }) {
  const params = props.params
  const searchParams = props.searchParams
  const project = projects[params.project]
  const videoIndex = searchParams.video
  const locale = await getLocale()
  const t = await getTranslations()
  let blurDelay = 0

  const relatedUrls =
    project.relatedUrls?.map((url) => ({
      ...url,
      name: getTranslatedData(url.name, locale) as string,
      important: true
    })) || []

  const incrementBlurDelay = () => {
    blurDelay++
    return blurDelay / 10
  }

  return (
    <TestimonialsStatusWrapper shouldCollapse={true}>
      <ScrollProgress />
      <BlurFade>
        <Header />
      </BlurFade>
      <BlurFade delay={incrementBlurDelay()}>
        <PageTitle
          title={`${t('caseStudies.project.title', { name: project.title })} \u2022 ${project.year}`}
          description={getTranslatedData(project.shortDescription, locale) as string}
          tags={getTranslatedData(project.tags, locale) as string[]}
        />
      </BlurFade>
      {project.gallery &&
        ((project.gallery.img && project.gallery.img?.length > 0) ||
          (project.gallery.video && project.gallery.video?.length > 0)) && (
          <BlurFade delay={incrementBlurDelay()}>
            <Carousel opts={{ align: 'start' }} className='w-full flex flex-col'>
              <CarouselContent>
                {project.gallery.video?.map((video, index) => (
                  <CarouselItem
                    key={index}
                    className='basis-full sm:basis-1/2 md:basis-1/3 xl:basis-1/4 pb-8 flex items-center justify-center'
                  >
                    <MediaButton video={video} isOpen={videoIndex === index.toString()} />
                  </CarouselItem>
                ))}
                {project.gallery.img?.map((img, index) => (
                  <CarouselItem
                    key={index}
                    className='basis-full sm:basis-1/2 md:basis-1/3 xl:basis-1/4 pb-8 flex items-center justify-center'
                  >
                    <MediaButton img={img} />
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
          <Block icon={Sparkle} title={t('caseStudies.project.projectDescription')} position='left'>
            <div className='flex flex-col gap-3 sm:gap-4 md:gap-5'>
              <div>{getTranslatedData(project.longDescription, locale)}</div>
              <div className='flex flex-col gap-3 sm:gap-4 md:gap-5'>
                <div className='flex flex-col gap-1'>
                  <span className='text-sm text-gray-400'>{t('caseStudies.project.skills')} -</span>
                  <div className='flex flex-row flex-wrap gap-2 items-center justify-start'>
                    {(getTranslatedData(project.skills, locale) as string[]).map((skill, index) => (
                      <SkillTag key={index} technology={skill} />
                    ))}
                  </div>
                </div>
                <div className='flex flex-col gap-1'>
                  <span className='text-sm text-gray-400'>{t('caseStudies.project.technologies')} -</span>
                  <div className='flex flex-row flex-wrap gap-2 items-center justify-start'>
                    {project.technologies.map((technology, index) => (
                      <SkillTag key={index} technology={technology} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Block>
        </BlurFade>
        {project.problem && (
          <BlurFade delay={incrementBlurDelay()}>
            <Block
              icon={Sparkle}
              title={t('caseStudies.project.problem')}
              position={blurDelay % 2 === 0 ? 'right' : 'left'}
            >
              {getTranslatedData(project.problem, locale)}
            </Block>
          </BlurFade>
        )}
        {project.solution && (
          <BlurFade delay={incrementBlurDelay()}>
            <Block
              icon={Sparkle}
              title={t('caseStudies.project.solution')}
              position={blurDelay % 2 === 0 ? 'right' : 'left'}
            >
              {getTranslatedData(project.solution, locale)}
            </Block>
          </BlurFade>
        )}
        {project.results && (
          <BlurFade delay={incrementBlurDelay()}>
            <Block
              icon={Sparkle}
              title={t('caseStudies.project.results')}
              position={blurDelay % 2 === 0 ? 'right' : 'left'}
            >
              {getTranslatedData(project.results, locale)}
            </Block>
          </BlurFade>
        )}
      </div>
      <BlurFade delay={incrementBlurDelay()}>
        <SeeMore
          links={[
            ...relatedUrls,
            { name: t('utils.links.youtube'), url: 'https://www.youtube.com/@matthieu-vagnon' },
            { name: t('utils.links.instagram'), url: 'https://www.instagram.com/matthieu.vagnon/' },
            { name: t('utils.links.github'), url: 'https://github.com/matthieu-vagnon' }
          ]}
          className='mt-10 sm:mt-12 md:mt-14 mb-28'
        />
      </BlurFade>
    </TestimonialsStatusWrapper>
  )
}
