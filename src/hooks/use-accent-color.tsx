'use client'

import { getCookie, setCookie } from '@/lib/server-utils'
import { createContext, useContext, useEffect, useState } from 'react'

const AccentColorContext = createContext<{
  accentColor: string
  changeAccentColor: (accentColor: string) => void
}>({
  accentColor: 'var(--main-default)',
  changeAccentColor: () => {}
})

export default function AccentColorProvider({ children }: { children: React.ReactNode }) {
  const [accentColor, setAccentColor] = useState('var(--main-default)')

  useEffect(() => {
    getCookie('accent-color').then((cookie) => {
      if (cookie) {
        setAccentColor(cookie)
      }
    })
  }, [])

  const changeAccentColor = (accentColor: string) => {
    setAccentColor(accentColor)
    setCookie('accent-color', accentColor)
  }

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
