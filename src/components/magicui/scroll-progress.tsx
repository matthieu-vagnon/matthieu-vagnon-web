'use client'

import { cn } from '@/lib/utils'
import { motion, MotionProps, useScroll } from 'motion/react'
import React from 'react'

type ScrollProgressProps = Omit<React.HTMLAttributes<HTMLElement>, keyof MotionProps>

export const ScrollProgress = React.forwardRef<HTMLDivElement, ScrollProgressProps>(({ className, ...props }, ref) => {
  const { scrollYProgress } = useScroll()

  return (
    <motion.div
      ref={ref}
      className={cn('fixed left-0 bottom-0 z-999 h-1 w-full origin-left bg-main', className)}
      style={{
        scaleX: scrollYProgress
      }}
      {...props}
    />
  )
})

ScrollProgress.displayName = 'ScrollProgress'
