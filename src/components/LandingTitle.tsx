'use client'

import { BlurFade } from '@/components/ui/blur-fade'
import { Card, CardContent } from '@/components/ui/card'
import { TextRotate } from '@/components/ui/text-rotate'
import { LayoutGroup, motion } from 'motion/react'
import { MagneticSocialLinks } from './MagneticSocialLinks'
import { Particles } from './ui/particles'

export default function LandingTitle() {
  return (
    <LayoutGroup>
      <div className='h-screen w-full flex justify-center items-center'>
        <div className='flex flex-col gap-6 sm:gap-8 md:gap-12 justify-center items-center'>
          <motion.div layout>
            <BlurFade className='flex'>
              <motion.div layout transition={{ type: 'spring', damping: 30, stiffness: 400 }}>
                <Card variant='dots' className='h-fit w-fit bg-white'>
                  <CardContent className='flex flex-col gap-1 md:gap-3 whitespace-pre items-center font-sans text-xl sm:text-3xl md:text-4xl translate-y-[6px]'>
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
                          texts={['Front-End Engineer', 'Digital Designer', 'Website Creator']}
                          mainClassName='text-white px-2 sm:px-2 md:px-3 bg-[#007fff] overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg'
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
          <BlurFade delay={0.5} className='flex'>
            <MagneticSocialLinks />
          </BlurFade>
        </div>
        <Particles className='fixed inset-0 -z-1' quantity={100} ease={80} color='black' refresh />
      </div>
    </LayoutGroup>
  )
}
