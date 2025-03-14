'use client'

import { HomeIcon, MessageCircle } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { ContactModal } from './ContactModal'
import { Dock, DockIcon, DockItem, DockLabel } from './ui/dock'
import { Dialog, DialogTrigger } from './ui/nested-dialog'

type App = {
  title: string
  icon: React.ReactNode
  url?: string
  modal?: React.ReactNode
}

function AppWrapper({ app, children }: { app: App; children: React.ReactNode }) {
  if (app.url) {
    return <Link href={app.url}>{children}</Link>
  }

  if (app.modal) {
    return (
      <Dialog>
        <DialogTrigger>{children}</DialogTrigger>
        {app.modal}
      </Dialog>
    )
  }

  return <>{children}</>
}

export default function AppsDock() {
  const apps: App[] = [
    {
      title: 'Home',
      icon: <HomeIcon className='h-full w-full text-neutral-600 dark:text-neutral-300' />,
      url: '/'
    },
    // {
    //   title: 'Education',
    //   icon: <GraduationCap className='h-full w-full text-neutral-600 dark:text-neutral-300' />,
    //   url: '/education'
    // },
    // {
    //   title: 'Case Studies',
    //   icon: <BriefcaseBusiness className='h-full w-full text-neutral-600 dark:text-neutral-300' />,
    //   url: '/case-studies'
    // },
    // {
    //   title: 'Code Showcase',
    //   icon: <FileCode className='h-full w-full text-neutral-600 dark:text-neutral-300' />,
    //   url: '/code-showcase'
    // },
    {
      title: 'Get In Touch',
      icon: <MessageCircle className='h-full w-full text-neutral-600 dark:text-neutral-300' />,
      modal: <ContactModal />
    }
    // {
    //   title: 'Configuration',
    //   icon: <Cog className='h-full w-full text-neutral-600 dark:text-neutral-300' />,
    //   url: '/configuration'
    // }
  ]

  return (
    <div className='fixed bottom-2 left-1/2 w-full -translate-x-1/2 z-10'>
      <Dock className='items-end pb-3'>
        {apps.map((app, idx) => (
          <AppWrapper key={idx} app={app}>
            <DockItem className='aspect-square rounded-full bg-gray-200 dark:bg-neutral-800 cursor-pointer'>
              <DockLabel>{app.title}</DockLabel>
              <DockIcon>{app.icon}</DockIcon>
            </DockItem>
          </AppWrapper>
        ))}
      </Dock>
    </div>
  )
}
