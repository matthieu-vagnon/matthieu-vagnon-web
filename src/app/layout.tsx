import { Dock, DockIcon, DockItem, DockLabel } from '@/components/ui/dock'
import { HomeIcon, Mail } from 'lucide-react'
import type { Metadata } from 'next'
import { Signika_Negative } from 'next/font/google'
import Link from 'next/link'
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
  const apps = [
    {
      title: 'Home',
      icon: <HomeIcon className='h-full w-full text-neutral-600 dark:text-neutral-300' />,
      href: '/'
    },
    // {
    //   title: 'Education',
    //   icon: <GraduationCap className='h-full w-full text-neutral-600 dark:text-neutral-300' />,
    //   href: '/education'
    // },
    // {
    //   title: 'Case Studies',
    //   icon: <BriefcaseBusiness className='h-full w-full text-neutral-600 dark:text-neutral-300' />,
    //   href: '/case-studies'
    // },
    // {
    //   title: 'Code Showcase',
    //   icon: <FileCode className='h-full w-full text-neutral-600 dark:text-neutral-300' />,
    //   href: '/code-showcase'
    // },
    {
      title: 'Send a Message',
      icon: <Mail className='h-full w-full text-neutral-600 dark:text-neutral-300' />,
      href: 'mailto:mvagnon@icloud.com'
    }
    // {
    //   title: 'Configuration',
    //   icon: <Cog className='h-full w-full text-neutral-600 dark:text-neutral-300' />,
    //   href: '/configuration'
    // }
  ]

  return (
    <html lang='en'>
      <body
        className={`${signikaNegative.variable} antialiased max-w-[3840px] mx-auto relative min-h-screen px-4 sm:px-6 md:px-8 overflow-x-hidden`}
      >
        <Link href='/' className='absolute top-4 sm:top-6 md:top-8 left-4 sm:left-6 md:left-8'>
          <svg width='50' height='50' viewBox='0 0 800 800' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <rect width='800' height='800' fill='#001428' />
            <rect y='650' width='800' height='150' fill='#007FFF' />
          </svg>
        </Link>
        {children}
        <div className='fixed bottom-2 left-1/2 w-full -translate-x-1/2 z-10'>
          <Dock className='items-end pb-3'>
            {apps.map((app, idx) => (
              <Link href={app.href} key={idx}>
                <DockItem className='aspect-square rounded-full bg-gray-200 dark:bg-neutral-800 cursor-pointer'>
                  <DockLabel>{app.title}</DockLabel>
                  <DockIcon>{app.icon}</DockIcon>
                </DockItem>
              </Link>
            ))}
          </Dock>
        </div>
      </body>
    </html>
  )
}
