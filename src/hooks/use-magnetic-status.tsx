'use client'

import { deleteCookie, getCookie, setCookie } from '@/lib/server-utils'
import { createContext, useContext, useEffect, useState } from 'react'

const MagneticStatusContext = createContext<{
  isMagnetic: boolean
  changeIsMagnetic: (isMagnetic: boolean | undefined) => void
}>({
  isMagnetic: false,
  changeIsMagnetic: () => {}
})

export default function MagneticStatusProvider({ children }: { children: React.ReactNode }) {
  const [isMagnetic, setIsMagnetic] = useState(false)

  const getDefaultMagneticStatus = () => {
    if (window.matchMedia('(pointer: coarse)').matches) {
      return false
    } else {
      return true
    }
  }

  const changeIsMagnetic = (isMagnetic: boolean | undefined) => {
    if (isMagnetic === undefined) {
      setIsMagnetic(getDefaultMagneticStatus())
      deleteCookie('magnetic')
    } else {
      setIsMagnetic(isMagnetic)
      setCookie('magnetic', isMagnetic.toString())
    }
  }

  useEffect(() => {
    getCookie('magnetic').then((cookie) => {
      if (cookie) {
        setIsMagnetic(cookie === 'true')
      } else {
        setIsMagnetic(getDefaultMagneticStatus())
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
