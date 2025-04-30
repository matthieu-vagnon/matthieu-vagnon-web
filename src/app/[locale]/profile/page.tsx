import Header from '@/components/header';
import { MediaButton } from '@/components/media-button';
import PageTitle from '@/components/page-title';
import { ResumeCard } from '@/components/resume-card';
import SectionTitle from '@/components/section-title';
import SeeMore from '@/components/see-more';
import SkillBox from '@/components/skill-box';
import TestimonialsStatusWrapper from '@/components/testimonials-status-wrapper';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { BlurFade } from '@/components/ui/blur-fade';
import { LogoCarousel } from '@/components/ui/logo-carousel';
import { Separator } from '@/components/ui/separator';
import { profile } from '@/data/profile';
import { getTranslatedData } from '@/lib/utils';
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
          <div className='gap-4 sm:gap-6 md:gap-8 flex flex-col sm:flex-row text-center sm:text-left items-center justify-start'>
            <Avatar className='size-15 sm:size-20 md:size-28 border text-xl sm:text-3xl md:text-5xl'>
              <AvatarImage alt='MV' src={profile.avatarUrl?.src} />
              <AvatarFallback>MV</AvatarFallback>
            </Avatar>
            <div className='flex flex-row flex-nowrap gap-x-6 md:gap-x-8 justify-between items-center w-full'>
              <div className='text-lg lg:text-xl italic'>
                {getTranslatedData(profile.description, locale)}
              </div>
              {businessCard && (
                <MediaButton
                  img={businessCard.image}
                  title={businessCard.title}
                  size='md'
                  isTilt
                  className='hidden sm:block w-50 md:w-56 lg:w-64'
                />
              )}
            </div>
          </div>
        </BlurFade>
        <BlurFade delay={blurDelay++ / 10}>
          <SectionTitle title={t('profile.about')} />
          <span className='text-base md:text-lg text-foreground-secondary'>
            {getTranslatedData(profile.about, locale)}
          </span>
        </BlurFade>
        <BlurFade delay={blurDelay++ / 10}>
          <div className='flex flex-row gap-2 sm:gap-3 md:gap-4 flex-wrap'>
            <SkillBox
              title={t('profile.frontendStack')}
              items={profile.frontendStack}
              className='flex-auto'
            />
            <SkillBox
              title={t('profile.deploymentStack')}
              items={profile.deploymentStack}
              className='flex-auto'
            />
            <SkillBox
              title={t('profile.designStack')}
              items={profile.designStack}
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
                    description={
                      <ul className='list-[upper-roman] list-outside flex flex-col gap-y-1'>
                        {experience.description.map((point, index) => (
                          <li key={index}>
                            {getTranslatedData(point, locale)}
                          </li>
                        ))}
                      </ul>
                    }
                    secondaryBadges={experience.technologies}
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
                    badges={[
                      getTranslatedData(education.type, locale) as string,
                    ]}
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
              name: t('utils.links.linkedin'),
              url: process.env.NEXT_PUBLIC_LINKEDIN_URL!,
            },
          ]}
        />
      </BlurFade>
    </TestimonialsStatusWrapper>
  );
}
