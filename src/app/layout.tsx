import AppsDock from '@/components/apps-dock'
import { LinkButton } from '@/components/ui/button'
import DockStatusProvider from '@/hooks/use-dock-status'
import type { Metadata } from 'next'
import { Signika_Negative, Source_Sans_3 } from 'next/font/google'
import './globals.css'

const signikaNegative = Signika_Negative({
  variable: '--font-signika-negative',
  subsets: ['latin']
})

const sourceSans3 = Source_Sans_3({
  variable: '--font-source-sans-3',
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: 'Matthieu Vagnon | Front-End Engineer & Digital Designer',
  description: 'Matthieu Vagnon, Front-End Engineer and Digital Designer, working independently since 2022.'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={`${signikaNegative.variable} ${sourceSans3.variable} font-sans antialiased`}>
        <div className='max-w-[3840px] mx-auto relative min-h-screen px-4 sm:px-6 md:px-8 overflow-x-hidden'>
          <div className='flex flex-wrap gap-1 justify-between items-center absolute top-4 sm:top-6 md:top-8 left-4 sm:left-6 md:left-8 right-4 sm:right-6 md:right-8 h-8 sm:h-10 md:h-12'>
            <svg height='100%' viewBox='0 0 800 800' fill='none' xmlns='http://www.w3.org/2000/svg'>
              <rect width='800' height='800' fill='#001428' />
              <rect y='650' width='800' height='150' fill='#007FFF' />
            </svg>
            <div className='whitespace-nowrap'>
              <span>Check out public repo{` `}</span>
              <LinkButton
                href='https://github.com/matthieu-vagnon/matthieu-vagnon-web'
                external
                noExternalIndicator
                variant='link'
                size='inline'
                className='text-base'
              >
                here
              </LinkButton>
            </div>
          </div>
          <DockStatusProvider>
            {children}
            <AppsDock />
          </DockStatusProvider>
        </div>
      </body>
    </html>
  )
}
