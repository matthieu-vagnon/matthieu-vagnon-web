import { BlurFade } from '@/components/blur-fade';
import Header from '@/components/header';
import { LogoCarousel } from '@/components/logo-carousel';
import Media from '@/components/media';
import PageTitle from '@/components/page-title';
import { ResumeCard } from '@/components/resume-card';
import SectionTitle from '@/components/section-title';
import SeeMore from '@/components/see-more';
import { Separator } from '@/components/separator';
import SkillBox from '@/components/skill-box';
import TestimonialsStatusWrapper from '@/components/testimonials-status-wrapper';
import { profile } from '@/data/profile';
import { getTranslatedData } from '@/lib/utils';
import { Quote } from 'lucide-react';
import { useLocale, useTranslations } from 'next-intl';

export default function Profile() {
  const t = useTranslations();
  const locale = useLocale();

  const businessCard = getTranslatedData(profile.businessCard, locale);
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
          <div className='gap-8 sm:gap-12 md:gap-18 flex flex-col sm:flex-row text-center sm:text-left items-center justify-start'>
            {businessCard && (
              <Media
                width={256}
                media={{
                  image: businessCard.image,
                  title: businessCard.title,
                }}
                isTilt
                size='md'
                className='w-50 md:w-56 lg:w-64'
              />
            )}
            <div className='relative text-lg lg:text-xl italic'>
              <Quote
                strokeWidth={0}
                className='hidden sm:block size-20 -z-1 fill-foreground/5 absolute -top-6 -left-7'
              />
              {getTranslatedData(profile.description, locale)}
            </div>
          </div>
        </BlurFade>
        <BlurFade delay={blurDelay++ / 10}>
          <SectionTitle title={t('profile.about')} />
          <span className='text-base md:text-lg text-foreground-secondary flex flex-col gap-3'>
            {getTranslatedData(profile.about, locale)}
          </span>
        </BlurFade>
        <BlurFade delay={blurDelay++ / 10}>
          <div className='flex flex-row gap-2 sm:gap-3 md:gap-4 flex-wrap'>
            <SkillBox
              title={t('profile.languages')}
              items={profile.languages}
              className='flex-auto'
            />
            <SkillBox
              title={t('profile.frontendFrameworks')}
              items={profile.frontendFrameworks}
              className='flex-auto'
            />
            <SkillBox
              title={t('profile.stateManagement')}
              items={profile.stateManagement}
              className='flex-auto'
            />
            <SkillBox
              title={t('profile.frontendLibraries')}
              items={profile.frontendLibraries}
              className='flex-auto'
            />
            <SkillBox
              title={t('profile.uiLibraries')}
              items={profile.uiLibraries}
              className='flex-auto'
            />
            <SkillBox
              title={t('profile.testing')}
              items={profile.testing}
              className='flex-auto'
            />
            <SkillBox
              title={t('profile.buildTools')}
              items={profile.buildTools}
              className='flex-auto'
            />
            <SkillBox
              title={t('profile.backend')}
              items={profile.backend}
              className='flex-auto'
            />
            <SkillBox
              title={t('profile.performance')}
              items={profile.performance}
              className='flex-auto'
            />
            <SkillBox
              title={t('profile.accessibility')}
              items={profile.accessibility}
              className='flex-auto'
            />
            <SkillBox
              title={t('profile.devops')}
              items={profile.devops}
              className='flex-auto'
            />
            <SkillBox
              title={t('profile.bestPractices')}
              items={profile.bestPractices}
              className='flex-auto'
            />
            <SkillBox
              title={t('profile.design')}
              items={profile.design}
              className='flex-auto'
            />
            <SkillBox
              title={t('profile.other')}
              items={profile.other}
              className='flex-auto'
            />
            <SkillBox
              title={t('profile.softSkills')}
              items={profile.softSkills.map((skill) =>
                getTranslatedData(skill, locale)
              )}
              className='flex-auto'
            />
          </div>
        </BlurFade>
        <BlurFade delay={blurDelay++ / 10}>
          <LogoCarousel columnCount={4} logos={profile.stackLogos} />
        </BlurFade>
        <BlurFade delay={blurDelay++ / 10}>
          <div className='flex flex-row flex-wrap justify-between gap-y-12 sm:gap-y-14 md:gap-y-16'>
            <div className='flex min-h-0 flex-col gap-y-3 basis-full md:basis-[calc(50%-2rem)]'>
              <SectionTitle title={t('profile.work')} />
              <div className='flex flex-col gap-y-5'>
                {profile.experience.map((experience, index) => (
                  <ResumeCard
                    key={index}
                    logoUrl={experience.logo?.src}
                    altText={experience.company}
                    title={experience.company}
                    subtitle={
                      getTranslatedData(experience.position, locale) as string
                    }
                    period={experience.timeline}
                    projects={experience.projects}
                    open={index === 0}
                  />
                ))}
              </div>
            </div>
            <Separator
              orientation='vertical'
              className='h-auto hidden md:block'
            />
            <div className='flex min-h-0 flex-col gap-y-3 basis-full md:basis-[calc(50%-2rem)]'>
              <SectionTitle title={t('profile.education')} />
              <div className='flex flex-col gap-y-6'>
                {profile.education.map((education, index) => (
                  <ResumeCard
                    key={index}
                    href={education.href}
                    logoUrl={education.logo?.src}
                    altText={education.responsible}
                    title={education.responsible}
                    subtitle={
                      getTranslatedData(education.degree, locale) as string
                    }
                    badges={getTranslatedData(education.type, locale)}
                    period={education.timeline}
                  />
                ))}
              </div>
            </div>
          </div>
        </BlurFade>
      </div>
      <BlurFade delay={blurDelay++ / 10}>
        <SeeMore
          links={[
            {
              name: 'LinkedIn',
              url: process.env.NEXT_PUBLIC_LINKEDIN_URL!,
            },
            {
              name: 'Findy',
              url: 'https://findy-code.io/share_profiles/TCXixmT7ylwpK',
            },
          ]}
        />
      </BlurFade>
    </TestimonialsStatusWrapper>
  );
}
