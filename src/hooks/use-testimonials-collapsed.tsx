'use client'

import React, { useEffect } from 'react'

type TestimonialsCollapsedContextType = {
  isCollapsed: boolean
  setIsCollapsed: (value: boolean) => void
}

const TestimonialsCollapsedContext = React.createContext<TestimonialsCollapsedContextType>({
  isCollapsed: true,
  setIsCollapsed: () => {}
})

export const useTestimonialsCollapsed = () => {
  return React.useContext(TestimonialsCollapsedContext)
}

export const TestimonialsCollapsedProvider = ({ children }: { children: React.ReactNode }) => {
  const [isCollapsed, setIsCollapsed] = React.useState(true)

  useEffect(() => {
    setIsCollapsed(false)
  }, [])

  return (
    <TestimonialsCollapsedContext.Provider value={{ isCollapsed, setIsCollapsed }}>
      {children}
    </TestimonialsCollapsedContext.Provider>
  )
}
