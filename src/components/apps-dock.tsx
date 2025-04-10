'use client'

import { useDockStatus } from '@/hooks/use-dock-status'
import { BriefcaseBusiness, HomeIcon, MessageCircle } from 'lucide-react'
import Link from 'next/link'
import React, { useState } from 'react'
import { ContactModal } from './contact-modal'
import { Dock, DockIcon, DockItem, DockLabel } from './ui/dock'
import { Dialog, DialogTrigger } from './ui/nested-dialog'
import { ProgressiveBlur } from './ui/progressive-blur'

type App = {
  title: string
  icon: React.ReactNode
  url?: string
  modal?: React.ReactNode
  testimonial?: boolean
}

const APPS: App[] = [
  {
    title: 'Home',
    icon: <HomeIcon className='h-full w-full text-neutral-600 dark:text-neutral-300' />,
    url: '/'
  },
  // {
  //   title: 'Profile',
  //   icon: <UserRound className='h-full w-full text-neutral-600 dark:text-neutral-300' />,
  //   url: '/profile'
  // },
  {
    title: 'Case Studies',
    icon: <BriefcaseBusiness className='h-full w-full text-neutral-600 dark:text-neutral-300' />,
    url: '/case-studies'
  },
  {
    title: 'Get In Touch',
    icon: <MessageCircle className='h-full w-full text-neutral-600 dark:text-neutral-300' />,
    modal: <ContactModal />
  }
  // {
  //   title: 'Configuration',
  //   icon: <Cog className='h-full w-full text-neutral-600 dark:text-neutral-300' />,
  //   modal: <ConfigurationModal />
  // }
]

function DockElement({ app, onClick }: { app: App; onClick?: () => void }) {
  const content = (
    <DockItem className='aspect-square rounded-full bg-gray-200 dark:bg-neutral-800 cursor-pointer'>
      <DockLabel>{app.title}</DockLabel>
      <DockIcon>{app.icon}</DockIcon>
    </DockItem>
  )

  return app.url ? <Link href={app.url}>{content}</Link> : <button onClick={onClick}>{content}</button>
}

export default function AppsDock() {
  const { isDockOpen } = useDockStatus()
  const [activeModal, setActiveModal] = useState<number | undefined>(undefined)

  return (
    <Dialog>
      <div
        className={`fixed bottom-2 left-1/2 w-full -translate-x-1/2 z-100 ${
          isDockOpen ? 'translate-y-0' : 'translate-y-full'
        } transition-transform duration-300`}
      >
        <Dock className='items-end pb-3'>
          {APPS.map((app, idx) =>
            app.modal ? (
              <DialogTrigger key={idx} asChild>
                <DockElement app={app} onClick={() => setActiveModal(idx)} />
              </DialogTrigger>
            ) : (
              <DockElement key={idx} app={app} />
            )
          )}
        </Dock>
      </div>
      {activeModal !== undefined && APPS[activeModal].modal}
      <ProgressiveBlur direction='bottom' className='pointer-events-none fixed bottom-0 left-0 h-24 w-full z-99' />
    </Dialog>
  )
}
