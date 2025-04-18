import Header from '@/components/header';
import { ScrollProgress } from '@/components/magicui/scroll-progress';
import { MediaButton } from '@/components/media-button';
import PageTitle from '@/components/page-title';
import SectionTitle from '@/components/section-title';
import SeeMore from '@/components/see-more';
import TestimonialsStatusWrapper from '@/components/testimonials-status-wrapper';
import { BlurFade } from '@/components/ui/blur-fade';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
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
        'flex w-full',
        position === 'left' ? 'justify-start' : 'justify-end',
        className
      )}
    >
      <div className='flex flex-col w-full md:w-2/3 xl:w-1/2'>
        <SectionTitle title={title} />
        <div className='text-base md:text-lg text-gray-500'>{children}</div>
      </div>
    </div>
  );
}

function SkillTag({ technology }: { technology: string }) {
  return (
    <div className='text-xs sm:text-sm bg-gray-500 px-2 py-1 rounded-md text-white border border-gray-400 outline outline-gray-500'>
      {technology}
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
          })} \u2022 ${project.year}`}
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
                      className='cursor-[inherit] active:cursor-[inherit]'
                      video={video}
                      isOpen={videoIndex === index.toString()}
                      index={index}
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
                      img={img}
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
            position='left'
          >
            <div className='flex flex-col gap-3 sm:gap-4 md:gap-5'>
              <div>{getTranslatedData(project.longDescription, locale)}</div>
              <div className='flex flex-col gap-3 sm:gap-4 md:gap-5'>
                <div className='flex flex-col gap-1'>
                  <span className='text-sm text-gray-400'>
                    {t('caseStudies.project.skills')} -
                  </span>
                  <div className='flex flex-row flex-wrap gap-2 items-center justify-start'>
                    {(
                      getTranslatedData(project.skills, locale) as string[]
                    ).map((skill, index) => (
                      <SkillTag key={index} technology={skill} />
                    ))}
                  </div>
                </div>
                <div className='flex flex-col gap-1'>
                  <span className='text-sm text-gray-400'>
                    {t('caseStudies.project.technologies')} -
                  </span>
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
          <BlurFade delay={blurDelay++ / 10}>
            <Block
              title={t('caseStudies.project.problem')}
              position={blurDelay % 2 === 0 ? 'right' : 'left'}
            >
              {getTranslatedData(project.problem, locale)}
            </Block>
          </BlurFade>
        )}
        {project.solution && (
          <BlurFade delay={blurDelay++ / 10}>
            <Block
              title={t('caseStudies.project.solution')}
              position={blurDelay % 2 === 0 ? 'right' : 'left'}
            >
              {getTranslatedData(project.solution, locale)}
            </Block>
          </BlurFade>
        )}
        {project.results && (
          <BlurFade delay={blurDelay++ / 10}>
            <Block
              title={t('caseStudies.project.results')}
              position={blurDelay % 2 === 0 ? 'right' : 'left'}
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
              name: t('utils.links.youtube'),
              url: process.env.NEXT_PUBLIC_YOUTUBE_URL!,
            },
            {
              name: t('utils.links.instagram'),
              url: process.env.NEXT_PUBLIC_INSTAGRAM_URL!,
            },
            {
              name: t('utils.links.github'),
              url: process.env.NEXT_PUBLIC_GITHUB_URL!,
            },
          ]}
          className='mt-10 sm:mt-12 md:mt-14 mb-28'
        />
      </BlurFade>
    </TestimonialsStatusWrapper>
  );
}
