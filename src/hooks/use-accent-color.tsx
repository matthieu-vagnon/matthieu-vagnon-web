'use client'

import { getCookie, setCookie } from '@/lib/server-utils'
import { createContext, useContext, useEffect, useState } from 'react'

const AccentColorContext = createContext<{
  accentColor: string
  changeAccentColor: (accentColor: string) => void
}>({
  accentColor: 'default',
  changeAccentColor: () => {}
})

export default function AccentColorProvider({ children }: { children: React.ReactNode }) {
  const [accentColor, setAccentColor] = useState('default')

  const changeAccentColor = (accentColor: string) => {
    document.documentElement.setAttribute('data-accent-color', accentColor)
    setCookie('accent-color', accentColor)
    setAccentColor(accentColor)
  }

  useEffect(() => {
    getCookie('accent-color').then((cookie) => {
      if (cookie) {
        document.documentElement.setAttribute('data-accent-color', cookie)
        setAccentColor(cookie)
      }
    })
  }, [])

  return (
    <AccentColorContext.Provider value={{ accentColor, changeAccentColor }}>{children}</AccentColorContext.Provider>
  )
}

export function useAccentColor() {
  const context = useContext(AccentColorContext)

  if (!context) {
    throw new Error('useAccentColor must be used within a AccentColorProvider')
  }

  return context
}
