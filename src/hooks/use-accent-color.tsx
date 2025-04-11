'use client'

import { getCookie, setCookie } from '@/lib/server-utils'
import { createContext, useContext, useEffect } from 'react'

const AccentColorContext = createContext<{
  changeAccentColor: (accentColor: string) => void
}>({
  changeAccentColor: () => {}
})

export default function AccentColorProvider({ children }: { children: React.ReactNode }) {
  const changeAccentColor = (accentColor: string) => {
    document.documentElement.setAttribute('data-accent-color', accentColor)
    setCookie('accent-color', accentColor)
  }

  useEffect(() => {
    getCookie('accent-color').then((cookie) => {
      if (cookie) {
        document.documentElement.setAttribute('data-accent-color', cookie)
      }
    })
  }, [])

  return <AccentColorContext.Provider value={{ changeAccentColor }}>{children}</AccentColorContext.Provider>
}

export function useAccentColor() {
  const context = useContext(AccentColorContext)

  if (!context) {
    throw new Error('useAccentColor must be used within a AccentColorProvider')
  }

  return context
}
