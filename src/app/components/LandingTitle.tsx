'use client'

import { TextRotate } from '@/components/ui/text-rotate'
import { LayoutGroup, motion } from 'motion/react'

export default function LandingTitle() {
  return (
    <LayoutGroup>
      <motion.div className='flex whitespace-pre' layout>
        <motion.span
          className='pt-0.5 sm:pt-1 md:pt-2'
          layout
          transition={{ type: 'spring', damping: 30, stiffness: 400 }}
        >
          Hello, I&apos;m Matthieu Vagnon, independant{' '}
        </motion.span>
        <TextRotate
          texts={['Front-End Engineer', 'Digital Designer', 'Website Creator']}
          mainClassName='text-white px-2 sm:px-2 md:px-3 bg-[#ff5941] overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg'
          staggerFrom={'last'}
          initial={{ y: '100%' }}
          animate={{ y: 0 }}
          exit={{ y: '-120%' }}
          staggerDuration={0.025}
          splitLevelClassName='overflow-hidden pb-0.5 sm:pb-1 md:pb-1'
          transition={{ type: 'spring', damping: 30, stiffness: 400 }}
          rotationInterval={3000}
        />
      </motion.div>
    </LayoutGroup>
  )
}
