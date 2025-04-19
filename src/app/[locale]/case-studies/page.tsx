import Header from '@/components/header';
import PageTitle from '@/components/page-title';
import ProjectCard from '@/components/project-card';
import SeeMore from '@/components/see-more';
import TestimonialsStatusWrapper from '@/components/testimonials-status-wrapper';
import { BlurFade } from '@/components/ui/blur-fade';
import cover1 from '@/public/project-card-cover/1.png';
import cover2 from '@/public/project-card-cover/2.png';
import cover3 from '@/public/project-card-cover/3.png';
import cover4 from '@/public/project-card-cover/4.png';
import cover5 from '@/public/project-card-cover/5.png';
import { useTranslations } from 'next-intl';
import { StaticImageData } from 'next/image';
import { projects } from '../../../../data/projects';

const COVER_IMAGES: StaticImageData[] = [
  cover1,
  cover2,
  cover3,
  cover4,
  cover5,
];

export default function CaseStudies() {
  const t = useTranslations();
  let blurDelay = 0;

  return (
    <TestimonialsStatusWrapper shouldCollapse={true}>
      <BlurFade>
        <Header />
      </BlurFade>
      <BlurFade delay={blurDelay++ / 10}>
        <PageTitle
          title={t('caseStudies.title')}
          description={t('caseStudies.description')}
        />
      </BlurFade>
      <div className='flex flex-row flex-wrap justify-center gap-3 sm:gap-5'>
        {Object.entries(projects).map(([key, project], index) => (
          <BlurFade key={key} delay={blurDelay++ / 10}>
            <ProjectCard
              coverImage={COVER_IMAGES[index % 5]}
              url={`/case-studies/${key}`}
              {...project}
            />
          </BlurFade>
        ))}
      </div>
      <BlurFade delay={blurDelay++ / 10}>
        <SeeMore
          links={[
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
        />
      </BlurFade>
    </TestimonialsStatusWrapper>
  );
}
