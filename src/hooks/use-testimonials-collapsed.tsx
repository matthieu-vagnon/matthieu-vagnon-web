'use client'

import React from 'react'

type TestimonialsCollapsedContextType = {
  isCollapsed: boolean
  setIsCollapsed: (value: boolean) => void
}

const TestimonialsCollapsedContext = React.createContext<TestimonialsCollapsedContextType>({
  isCollapsed: false,
  setIsCollapsed: () => {}
})

export const useTestimonialsCollapsed = () => {
  return React.useContext(TestimonialsCollapsedContext)
}

export const TestimonialsCollapsedProvider = ({ children }: { children: React.ReactNode }) => {
  const [isCollapsed, setIsCollapsed] = React.useState(false)

  return (
    <TestimonialsCollapsedContext.Provider value={{ isCollapsed, setIsCollapsed }}>
      {children}
    </TestimonialsCollapsedContext.Provider>
  )
}
