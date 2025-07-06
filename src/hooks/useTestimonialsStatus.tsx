'use client'

import React from 'react'

type TestimonialsStatusContextType = {
  isCollapsed: boolean
  setIsCollapsed: (value: boolean) => void
}

const TestimonialsStatusContext = React.createContext<TestimonialsStatusContextType>({
  isCollapsed: false,
  setIsCollapsed: () => {}
})

export const useTestimonialsStatus = () => {
  return React.useContext(TestimonialsStatusContext)
}

export const TestimonialsStatusProvider = ({ children }: { children: React.ReactNode }) => {
  const [isCollapsed, setIsCollapsed] = React.useState(false)

  return (
    <TestimonialsStatusContext.Provider value={{ isCollapsed, setIsCollapsed }}>
      {children}
    </TestimonialsStatusContext.Provider>
  )
}
