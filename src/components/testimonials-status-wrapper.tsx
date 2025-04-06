'use client'

import { useTestimonialsStatus } from '@/hooks/use-testimonials-status'
import { useEffect } from 'react'

interface TestimonialsStatusWrapperProps {
  children: React.ReactNode
  shouldCollapse?: boolean
}

export default function TestimonialsStatusWrapper({ children, shouldCollapse = true }: TestimonialsStatusWrapperProps) {
  const { setIsCollapsed } = useTestimonialsStatus()

  useEffect(() => {
    setIsCollapsed(shouldCollapse)
  }, [setIsCollapsed, shouldCollapse])

  return <>{children}</>
}
