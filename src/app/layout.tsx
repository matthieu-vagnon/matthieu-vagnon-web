import AppsDock from '@/components/apps-dock'
import DockStatusProvider from '@/hooks/use-dock-status'
import type { Metadata } from 'next'
import { Signika_Negative } from 'next/font/google'
import './globals.css'

const signikaNegative = Signika_Negative({
  variable: '--font-signika-negative',
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: 'Matthieu Vagnon | Front-End Engineer & Digital Designer',
  description: 'Matthieu Vagnon, Front-End Engineer and Digital Designer, working independently since 2024.'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body
        className={`${signikaNegative.variable} antialiased max-w-[3840px] mx-auto relative min-h-screen px-4 sm:px-6 md:px-8 overflow-x-hidden`}
      >
        <div className='absolute top-4 sm:top-6 md:top-8 left-4 sm:left-6 md:left-8 h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12'>
          <svg viewBox='0 0 800 800' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <rect width='800' height='800' fill='#001428' />
            <rect y='650' width='800' height='150' fill='#007FFF' />
          </svg>
        </div>
        <DockStatusProvider>
          {children}
          <AppsDock />
        </DockStatusProvider>
      </body>
    </html>
  )
}
