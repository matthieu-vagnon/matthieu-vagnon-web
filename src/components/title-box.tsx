'use client'

import { LayoutGroup, motion } from 'framer-motion'
import Logo from './logo'
import { BlurFade } from './ui/blur-fade'
import { Card, CardContent } from './ui/card'
import { TextRotate } from './ui/text-rotate'

export default function TitleBox() {
  return (
    <LayoutGroup>
      <motion.div layout>
        <BlurFade className='flex'>
          <motion.div layout transition={{ type: 'spring', damping: 30, stiffness: 400 }}>
            <Card variant='dots' className='h-fit w-fit bg-white'>
              <CardContent className='flex flex-col gap-1 md:gap-3 whitespace-pre items-center font-sans-special text-xl sm:text-3xl md:text-4xl translate-y-[6px]'>
                <BlurFade className='flex mb-2'>
                  <motion.span layout transition={{ type: 'spring', damping: 30, stiffness: 400 }}>
                    <Logo />
                  </motion.span>
                </BlurFade>
                <BlurFade delay={0.1} className='flex'>
                  <motion.span layout transition={{ type: 'spring', damping: 30, stiffness: 400 }}>
                    Hello, I&apos;m <span className='font-bold'>Matthieu Vagnon</span>,
                  </motion.span>
                </BlurFade>
                <BlurFade delay={0.2} className='flex'>
                  <span className='flex items-center mt-1 md:mt-2'>
                    <motion.span layout transition={{ type: 'spring', damping: 30, stiffness: 400 }}>
                      Freelance{' '}
                    </motion.span>
                    <TextRotate
                      texts={['Front-End Engineer', 'Digital Designer', 'React & Next.js Expert']}
                      mainClassName={`text-white px-2 sm:px-2 md:px-3 bg-main text-main-foreground overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg`}
                      staggerFrom={'last'}
                      initial={{ y: '100%' }}
                      animate={{ y: 0 }}
                      exit={{ y: '-120%' }}
                      staggerDuration={0.025}
                      splitLevelClassName='overflow-hidden pb-0.5 sm:pb-1 md:pb-1'
                      transition={{ type: 'spring', damping: 30, stiffness: 400 }}
                      rotationInterval={3000}
                    />
                  </span>
                </BlurFade>
              </CardContent>
            </Card>
          </motion.div>
        </BlurFade>
      </motion.div>
    </LayoutGroup>
  )
}
