'use client';

import { LayoutGroup, motion } from 'framer-motion';
import { useMessages, useTranslations } from 'next-intl';
import React from 'react';
import Logo from './svg/logo';
import { BlurFade } from './ui/blur-fade';
import { MainCard, MainCardContent } from './ui/main-card';
import { TextRotate } from './ui/text-rotate';

export default function TitleBox({ delay = 0 }: { delay?: number }) {
  const t = useTranslations('home.titleBox');
  const messages = useMessages();

  return (
    <LayoutGroup>
      <motion.div layout>
        <BlurFade delay={delay} className='flex'>
          <motion.div
            layout
            transition={{ type: 'spring', damping: 30, stiffness: 400 }}
          >
            <MainCard variant='dots' className='h-fit w-fit bg-background'>
              <MainCardContent className='flex flex-col gap-1 md:gap-3 whitespace-pre items-center font-sans-special text-xl sm:text-3xl md:text-4xl translate-y-[6px]'>
                <BlurFade delay={delay} className='flex mb-2'>
                  <motion.span
                    layout
                    transition={{ type: 'spring', damping: 30, stiffness: 400 }}
                  >
                    <Logo />
                  </motion.span>
                </BlurFade>
                <BlurFade delay={delay + 0.1} className='flex'>
                  <motion.span
                    layout
                    transition={{ type: 'spring', damping: 30, stiffness: 400 }}
                  >
                    {t.rich('name', {
                      strong: (chunks: React.ReactNode) => (
                        <span className='font-bold'>{chunks}</span>
                      ),
                    })}
                  </motion.span>
                </BlurFade>
                <BlurFade delay={delay + 0.2} className='flex'>
                  <span className='flex items-center justify-center flex-wrap gap-y-2 mt-1 md:mt-2'>
                    <motion.span
                      layout
                      transition={{
                        type: 'spring',
                        damping: 30,
                        stiffness: 400,
                      }}
                    >
                      {t('job.prefix')}
                    </motion.span>
                    <TextRotate
                      texts={Object.keys(messages.home.titleBox.job.skills).map(
                        (key) => messages.home.titleBox.job.skills[key]
                      )}
                      mainClassName={`text-white px-2 sm:px-2 md:px-3 bg-main text-main-foreground overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg`}
                      staggerFrom={'last'}
                      initial={{ y: '100%' }}
                      animate={{ y: 0 }}
                      exit={{ y: '-120%' }}
                      staggerDuration={0.025}
                      splitLevelClassName='overflow-hidden pb-0.5 sm:pb-1 md:pb-1'
                      transition={{
                        type: 'spring',
                        damping: 30,
                        stiffness: 400,
                      }}
                      rotationInterval={3000}
                      noWrap
                    />
                    <motion.span
                      layout
                      transition={{
                        type: 'spring',
                        damping: 30,
                        stiffness: 400,
                      }}
                    >
                      {t('job.suffix')}
                    </motion.span>
                  </span>
                </BlurFade>
              </MainCardContent>
            </MainCard>
          </motion.div>
        </BlurFade>
      </motion.div>
    </LayoutGroup>
  );
}
