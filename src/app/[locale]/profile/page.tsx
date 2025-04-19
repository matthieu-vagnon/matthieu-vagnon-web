import Header from '@/components/header';
import Highlight from '@/components/highlight';
import PageTitle from '@/components/page-title';
import { ResumeCard } from '@/components/resume-card';
import SectionTitle from '@/components/section-title';
import SeeMore from '@/components/see-more';
import TestimonialsStatusWrapper from '@/components/testimonials-status-wrapper';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { BlurFade } from '@/components/ui/blur-fade';
import { Separator } from '@/components/ui/separator';
import { profile } from '@/data/profile';
import { getTranslatedData } from '@/lib/utils';
import { useLocale, useTranslations } from 'next-intl';

const DATA = {
  work: [
    {
      company: 'Company 1',
      title: 'Job Title 1',
      start: '2020-01-01',
      end: '2021-01-01',
      description: 'Description 1',
      logoUrl: 'https://via.placeholder.com/150',
      href: 'https://www.company1.com',
      badges: ['Badge 1', 'Badge 2'],
    },
  ],
  education: [
    {
      school: 'School 1',
      degree: 'Degree 1',
      start: '2020-01-01',
      end: '2021-01-01',
      href: 'https://www.school1.com',
      logoUrl: 'https://via.placeholder.com/150',
    },
  ],
};

export default function Profile() {
  const t = useTranslations();
  const locale = useLocale();
  let blurDelay = 0;

  return (
    <TestimonialsStatusWrapper shouldCollapse={true}>
      <BlurFade>
        <Header />
      </BlurFade>
      <BlurFade delay={blurDelay++ / 10}>
        <PageTitle
          title={t('profile.title')}
          description={t('profile.description')}
        />
      </BlurFade>
      <div className='flex flex-col gap-12 sm:gap-14 md:gap-16'>
        <BlurFade delay={blurDelay++ / 10}>
          <div className='gap-4 sm:gap-6 md:gap-8 flex flex-col sm:flex-row text-center sm:text-left items-center justify-start'>
            <Avatar className='size-15 sm:size-20 md:size-28 border text-xl sm:text-3xl md:text-5xl'>
              <AvatarImage alt='MV' src={profile.avatarUrl?.src} />
              <AvatarFallback>MV</AvatarFallback>
            </Avatar>
            <div className='flex-col flex space-y-3 md:space-y-5'>
              <div className='font-sans-special text-2xl sm:text-3xl md:text-4xl font-bold tracking-tighter'>
                {t('profile.hello')}
              </div>
              <div className='md:text-xl'>
                {t.rich('profile.me', {
                  highlight: (chunks) => <Highlight>{chunks}</Highlight>,
                })}
              </div>
            </div>
          </div>
        </BlurFade>
        <BlurFade delay={blurDelay++ / 10}>
          <SectionTitle title={t('profile.about')} />
          <div className='text-base md:text-lg text-gray-500'>
            {getTranslatedData(profile.about, locale)}
          </div>
        </BlurFade>
        <BlurFade delay={blurDelay++ / 10}>
          <div className='flex flex-row flex-wrap justify-between gap-y-12 sm:gap-y-14 md:gap-y-16'>
            <div className='flex min-h-0 flex-col gap-y-3 basis-full md:basis-[calc(50%-2rem)]'>
              <SectionTitle title={t('profile.work')} />
              {DATA.work.map((work) => (
                <BlurFade key={work.company} delay={blurDelay++ / 10}>
                  <ResumeCard
                    key={work.company}
                    logoUrl={work.logoUrl}
                    altText={work.company}
                    title={work.company}
                    subtitle={work.title}
                    href={work.href}
                    badges={work.badges}
                    period={`${work.start} - ${work.end ?? 'Present'}`}
                    description={work.description}
                  />
                </BlurFade>
              ))}
            </div>
            <Separator
              orientation='vertical'
              className='h-auto hidden md:block'
            />
            <div className='flex min-h-0 flex-col gap-y-3 basis-full md:basis-[calc(50%-2rem)]'>
              <SectionTitle title={t('profile.education')} />
              {DATA.education.map((education) => (
                <BlurFade key={education.school} delay={blurDelay++ / 10}>
                  <ResumeCard
                    key={education.school}
                    href={education.href}
                    logoUrl={education.logoUrl}
                    altText={education.school}
                    title={education.school}
                    subtitle={education.degree}
                    period={`${education.start} - ${education.end}`}
                  />
                </BlurFade>
              ))}
            </div>
          </div>
        </BlurFade>
      </div>
      <BlurFade delay={blurDelay++ / 10}>
        <SeeMore
          links={[
            {
              name: t('utils.links.linkedin'),
              url: process.env.LINKEDIN_URL!,
            },
          ]}
        />
      </BlurFade>
    </TestimonialsStatusWrapper>
  );
}
