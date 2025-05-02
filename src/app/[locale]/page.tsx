import { BlurFade } from '@/components/blur-fade';
import LanguageSwitch from '@/components/language-switch';
import { Particles } from '@/components/particles';
import Github from '@/components/svg/github';
import Instagram from '@/components/svg/instagram';
import Linkedin from '@/components/svg/linkedin';
import Youtube from '@/components/svg/youtube';
import TitleBox from '@/components/title-box';
import React from 'react';

export type SocialLink = {
  label: string;
  link: string;
  icon?: React.ReactNode;
};

const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'LinkedIn',
    link: process.env.NEXT_PUBLIC_LINKEDIN_URL!,
    icon: <Linkedin />,
  },
  {
    label: 'YouTube',
    link: process.env.NEXT_PUBLIC_YOUTUBE_URL!,
    icon: <Youtube />,
  },
  {
    label: 'Instagram',
    link: process.env.NEXT_PUBLIC_INSTAGRAM_URL!,
    icon: <Instagram />,
  },
  {
    label: 'GitHub',
    link: process.env.NEXT_PUBLIC_GITHUB_URL!,
    icon: <Github />,
  },
];

export default function Home() {
  return (
    <>
      <div className='min-h-svh w-full flex flex-col gap-y-4 items-center pt-4 sm:pt-6 md:pt-8 pb-22'>
        <BlurFade className='w-full flex justify-end'>
          <LanguageSwitch />
        </BlurFade>
        <div className='flex-auto flex justify-center items-center'>
          <BlurFade delay={0.1} className='flex'>
            <TitleBox socialLinks={SOCIAL_LINKS} />
          </BlurFade>
        </div>
      </div>
      <Particles
        className='fixed inset-0 -z-1'
        quantity={100}
        ease={80}
        color='var(--foreground)'
        refresh
      />
    </>
  );
}
