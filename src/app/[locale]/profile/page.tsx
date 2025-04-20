import Header from '@/components/header';
import PageTitle from '@/components/page-title';
import { ResumeCard } from '@/components/resume-card';
import SectionTitle from '@/components/section-title';
import SeeMore from '@/components/see-more';
import SkillTag from '@/components/skill-tag';
import TestimonialsStatusWrapper from '@/components/testimonials-status-wrapper';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { BlurFade } from '@/components/ui/blur-fade';
import { LogoCarousel } from '@/components/ui/logo-carousel';
import { Separator } from '@/components/ui/separator';
import { profile } from '@/data/profile';
import { getTranslatedData } from '@/lib/utils';
import { Sparkle } from 'lucide-react';
import { useLocale, useTranslations } from 'next-intl';

function StackBox({ title, stack }: { title: string; stack: string[] }) {
  return (
    <div className='flex flex-col gap-3 bg-accent p-4 rounded-lg flex-auto'>
      <span className='text-sm font-bold flex flex-row items-center gap-1'>
        <Sparkle strokeWidth={0} className='size-4 fill-black' />
        {title}
      </span>
      <div className='flex flex-row flex-wrap gap-2'>
        {stack.map((item) => (
          <SkillTag key={item} technology={item} />
        ))}
      </div>
    </div>
  );
}

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
            <div className='text-lg md:text-xl'>
              {getTranslatedData(profile.description, locale)}
            </div>
          </div>
        </BlurFade>
        <BlurFade delay={blurDelay++ / 10}>
          <SectionTitle title={t('profile.about')} />
          <span className='text-base md:text-lg text-gray-500'>
            {getTranslatedData(profile.about, locale)}
          </span>
        </BlurFade>
        <BlurFade delay={blurDelay++ / 10}>
          <div className='flex flex-row gap-2 flex-wrap'>
            <StackBox
              title={t('profile.frontendStack')}
              stack={profile.frontendStack}
            />
            <StackBox
              title={t('profile.deploymentStack')}
              stack={profile.deploymentStack}
            />
            <StackBox
              title={t('profile.designStack')}
              stack={profile.designStack}
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
                  <BlurFade key={index} delay={blurDelay++ / 10}>
                    <ResumeCard
                      key={experience.company}
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
                  </BlurFade>
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
                  <BlurFade key={index} delay={blurDelay++ / 10}>
                    <ResumeCard
                      key={education.responsible}
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
                  </BlurFade>
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
              url: process.env.LINKEDIN_URL!,
            },
          ]}
        />
      </BlurFade>
    </TestimonialsStatusWrapper>
  );
}
