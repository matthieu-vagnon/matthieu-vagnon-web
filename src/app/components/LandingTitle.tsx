'use client'

import { BlurFade } from '@/components/ui/blur-fade'
import { TextRotate } from '@/components/ui/text-rotate'
import { LayoutGroup, motion } from 'motion/react'

export default function LandingTitle() {
  return (
    <LayoutGroup>
      <motion.div
        className='flex flex-col gap-1 md:gap-3 whitespace-pre items-center font-sans text-xl sm:text-3xl md:text-4xl'
        layout
      >
        <BlurFade className='flex'>
          <motion.span layout transition={{ type: 'spring', damping: 30, stiffness: 400 }}>
            Hello, I&apos;m <span className='font-bold'>Matthieu Vagnon</span>,
          </motion.span>
        </BlurFade>
        <div className='flex flex-row items-center'>
          <BlurFade className='flex'>
            <motion.span layout transition={{ type: 'spring', damping: 30, stiffness: 400 }}>
              Freelance{' '}
            </motion.span>
          </BlurFade>
          <BlurFade delay={0.1}>
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
          </BlurFade>
        </div>
      </motion.div>
    </LayoutGroup>
  )
}
