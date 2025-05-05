import { BlurFade } from '@/components/blur-fade';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/carousel';
import Header from '@/components/header';
import { Li, Ul } from '@/components/list';
import { MediaButton } from '@/components/media-button';
import PageTitle from '@/components/page-title';
import { ScrollProgress } from '@/components/scroll-progress';
import SectionTitle from '@/components/section-title';
import SeeMore from '@/components/see-more';
import { default as SkillBox } from '@/components/skill-box';
import PageDecoration from '@/components/svg/page-decoration';
import TestimonialsStatusWrapper from '@/components/testimonials-status-wrapper';
import { projects } from '@/data/projects';
import { cn, getFlattenedNode, getTranslatedData } from '@/lib/utils';
import { Metadata, ResolvingMetadata } from 'next';
import { getLocale, getTranslations } from 'next-intl/server';
import React from 'react';

function Block({
  title,
  position,
  children,
  className,
}: {
  title: string;
  position: 'left' | 'right';
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        'flex w-full gap-x-20',
        position === 'right' && 'flex-row-reverse',
        className
      )}
    >
      <div className='flex flex-col w-full md:w-2/3 xl:w-1/2'>
        <SectionTitle title={title} />
        <div className='text-base md:text-lg text-foreground-secondary'>
          {children}
        </div>
      </div>
      <div
        className={cn(
          'relative hidden md:block w-33',
          position === 'right' && '-scale-x-100'
        )}
      >
        <div className='absolute inset-y-0 right-0 w-11 bg-gradient-to-l from-background to-transparent' />
        <PageDecoration className='h-full w-full' />
      </div>
    </div>
  );
}

type Props = {
  params: Promise<{ project: string }>;
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const parentMetadata = await parent;
  const project = projects[(await params).project];
  const locale = await getLocale();
  const t = await getTranslations('caseStudies.project.metadata');

  return {
    title: t('title', { name: project.title }),
    description: getFlattenedNode(
      getTranslatedData(project.longDescription, locale)
    ),
    openGraph: {
      type: 'article',
      siteName: 'Matthieu Vagnon Web',
      title: t('openGraph.title', { name: project.title }),
      description: getTranslatedData(
        project.shortDescription,
        locale
      ) as string,
      images: [
        ...(project.gallery?.img?.map((img) => ({
          url: `${process.env.NEXT_PUBLIC_URL!}${img.image.src}`,
        })) || []),
        {
          url: `${process.env.NEXT_PUBLIC_URL!}/og-image.png`,
        },
      ],
    },
    keywords: [
      `${project.title}`,
      `${project.year}`,
      ...(parentMetadata.keywords || []),
      ...(project.tags[locale as keyof typeof project.tags] || []),
      ...(project.skills[locale as keyof typeof project.skills] || []),
      ...project.technologies,
    ],
  };
}

type ProjectProps = {
  params: Promise<{ project: string }>;
  searchParams: Promise<{ video: string }>;
};

export default async function Project(props: ProjectProps) {
  const searchParams = await props.searchParams;
  const project = projects[(await props.params).project];
  const videoIndex = searchParams.video;
  const locale = await getLocale();
  const t = await getTranslations();
  let blurDelay = 0;
  let blockIndex = 0;

  const relatedUrls =
    project.relatedUrls?.map((url) => ({
      ...url,
      name: getTranslatedData(url.name, locale) as string,
      important: true,
    })) || [];

  return (
    <TestimonialsStatusWrapper shouldCollapse={true}>
      <ScrollProgress />
      <BlurFade>
        <Header />
      </BlurFade>
      <BlurFade
        delay={blurDelay++ / 10}
        className='flex flex-col justify-center items-center gap-0'
      >
        <PageTitle
          title={`${t('caseStudies.project.title', {
            name: project.title,
          })} (${project.year})`}
          description={
            getTranslatedData(project.shortDescription, locale) as string
          }
          tags={getTranslatedData(project.tags, locale) as string[]}
          link={
            project.relatedUrls && project.relatedUrls.length > 0
              ? {
                  name: project.relatedUrls
                    .map((el) => getTranslatedData(el.name, locale) as string)
                    .join(t('utils.separator')),
                  url: '#see-more',
                }
              : undefined
          }
        />
      </BlurFade>
      {project.gallery &&
        ((project.gallery.img && project.gallery.img?.length > 0) ||
          (project.gallery.video && project.gallery.video?.length > 0)) && (
          <BlurFade delay={blurDelay++ / 10}>
            <Carousel
              opts={{ align: 'start' }}
              className='w-full flex flex-col'
            >
              <CarouselContent>
                {project.gallery.video?.map((video, index) => (
                  <CarouselItem
                    key={index}
                    className='basis-full sm:basis-1/2 md:basis-1/3 xl:basis-1/4 pb-8 flex items-center justify-center'
                  >
                    <MediaButton
                      title={getTranslatedData(video.title, locale)}
                      video={video.src}
                      previewImage={video.previewImage}
                      isOpen={videoIndex === index.toString()}
                      index={index}
                      className='cursor-[inherit] active:cursor-[inherit]'
                    />
                  </CarouselItem>
                ))}
                {project.gallery.img?.map((img, index) => (
                  <CarouselItem
                    key={index}
                    className='basis-full sm:basis-1/2 md:basis-1/3 xl:basis-1/4 pb-8 flex items-center justify-center'
                  >
                    <MediaButton
                      className='cursor-[inherit] active:cursor-[inherit]'
                      title={getTranslatedData(img.title, locale)}
                      img={img.image}
                    />
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
        <BlurFade delay={blurDelay++ / 10}>
          <Block
            title={t('caseStudies.project.projectDescription')}
            position={blockIndex++ % 2 === 0 ? 'left' : 'right'}
          >
            <div className='flex flex-col gap-3 sm:gap-4 md:gap-5'>
              <div>{getTranslatedData(project.longDescription, locale)}</div>
              <div className='flex flex-row flex-wrap gap-2 sm:gap-3 md:gap-4'>
                <SkillBox
                  title={t('caseStudies.project.skills')}
                  items={getTranslatedData(project.skills, locale) as string[]}
                  className='flex-auto'
                />
                <SkillBox
                  title={t('caseStudies.project.technologies')}
                  items={project.technologies}
                  className='flex-auto'
                />
              </div>
            </div>
          </Block>
        </BlurFade>
        {project.problem && (
          <BlurFade delay={blurDelay++ / 10}>
            <Block
              title={t('caseStudies.project.problem')}
              position={blockIndex++ % 2 === 0 ? 'left' : 'right'}
            >
              <Ul gap='md'>
                {getTranslatedData(project.problem, locale).map(
                  (item: React.ReactNode, index: number) => (
                    <Li key={index}>{item}</Li>
                  )
                )}
              </Ul>
            </Block>
          </BlurFade>
        )}
        {project.solution && (
          <BlurFade delay={blurDelay++ / 10}>
            <Block
              title={t('caseStudies.project.solution')}
              position={blockIndex++ % 2 === 0 ? 'left' : 'right'}
            >
              <Ul gap='md'>
                {getTranslatedData(project.solution, locale).map(
                  (item: React.ReactNode, index: number) => (
                    <Li key={index}>{item}</Li>
                  )
                )}
              </Ul>
            </Block>
          </BlurFade>
        )}
        {project.results && (
          <BlurFade delay={blurDelay++ / 10}>
            <Block
              title={t('caseStudies.project.results')}
              position={blockIndex++ % 2 === 0 ? 'left' : 'right'}
            >
              {getTranslatedData(project.results, locale)}
            </Block>
          </BlurFade>
        )}
      </div>
      <BlurFade delay={blurDelay++ / 10}>
        <SeeMore
          id='see-more'
          links={[
            ...relatedUrls,
            {
              name: 'YouTube',
              url: process.env.NEXT_PUBLIC_YOUTUBE_URL!,
            },
            {
              name: 'Instagram',
              url: process.env.NEXT_PUBLIC_INSTAGRAM_URL!,
            },
            {
              name: 'GitHub',
              url: process.env.NEXT_PUBLIC_GITHUB_URL!,
            },
          ]}
          className='mt-10 sm:mt-12 md:mt-14 mb-28'
        />
      </BlurFade>
    </TestimonialsStatusWrapper>
  );
}
