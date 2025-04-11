'use client'

import { getCookie, setCookie } from '@/lib/server-utils'
import { createContext, useContext, useEffect, useState } from 'react'

const MagneticStatusContext = createContext<{
  isMagnetic: boolean
  changeIsMagnetic: (isMagnetic: boolean) => void
}>({
  isMagnetic: true,
  changeIsMagnetic: () => {}
})

export default function MagneticStatusProvider({ children }: { children: React.ReactNode }) {
  const [isMagnetic, setIsMagnetic] = useState(true)

  const changeIsMagnetic = (isMagnetic: boolean) => {
    setIsMagnetic(isMagnetic)
    setCookie('magnetic', isMagnetic.toString())
  }

  useEffect(() => {
    getCookie('magnetic').then((cookie) => {
      if (cookie) {
        setIsMagnetic(cookie === 'true')
      }
    })
  }, [])

  return (
    <MagneticStatusContext.Provider value={{ isMagnetic, changeIsMagnetic }}>{children}</MagneticStatusContext.Provider>
  )
}

export function useMagneticStatus() {
  const context = useContext(MagneticStatusContext)

  if (!context) {
    throw new Error('useMagneticStatus must be used within a MagneticStatusProvider')
  }

  return context
}
