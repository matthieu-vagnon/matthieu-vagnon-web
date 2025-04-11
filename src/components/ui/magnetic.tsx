'use client'

import { useMagneticStatus } from '@/hooks/use-magnetic-status'
import { motion, useMotionValue, useSpring, type SpringOptions } from 'framer-motion'
import React, { useEffect, useRef, useState } from 'react'

const SPRING_CONFIG = { stiffness: 26.7, damping: 4.1, mass: 0.2 }

export type MagneticProps = {
  children: React.ReactNode
  intensity?: number
  disabled?: boolean
  springOptions?: SpringOptions
  className?: string
}

function MagneticElement({ children, intensity = 0.6, springOptions = SPRING_CONFIG, className }: MagneticProps) {
  const [isHovered, setIsHovered] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const springX = useSpring(x, springOptions)
  const springY = useSpring(y, springOptions)

  useEffect(() => {
    const calculateDistance = (e: MouseEvent) => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect()
        const centerX = rect.left + rect.width / 2
        const centerY = rect.top + rect.height / 2
        const distanceX = e.clientX - centerX
        const distanceY = e.clientY - centerY

        if (isHovered) {
          x.set(distanceX * intensity)
          y.set(distanceY * intensity)
        } else {
          x.set(0)
          y.set(0)
        }
      }
    }

    document.addEventListener('mousemove', calculateDistance)

    return () => {
      document.removeEventListener('mousemove', calculateDistance)
    }
  }, [ref, isHovered, intensity])

  const handleMouseEnter = () => {
    setIsHovered(true)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      ref={ref}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        x: springX,
        y: springY
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export function Magnetic(props: MagneticProps) {
  const { isMagnetic } = useMagneticStatus()

  return !isMagnetic || props.disabled ? (
    <div className={props.className}>{props.children}</div>
  ) : (
    <MagneticElement {...props}>{props.children}</MagneticElement>
  )
}
