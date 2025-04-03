'use client'

import { useDockStatus } from '@/hooks/use-dock-status'
import { BriefcaseBusiness, HomeIcon, MessageCircle } from 'lucide-react'
import Link from 'next/link'
import React, { useState } from 'react'
import { ContactModal } from './contact-modal'
import { Dock, DockIcon, DockItem, DockLabel } from './ui/dock'
import { Dialog, DialogTrigger } from './ui/nested-dialog'

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
  //   title: 'Why Me?',
  //   icon: <UserRound className='h-full w-full text-neutral-600 dark:text-neutral-300' />,
  //   url: '/why-me'
  // },
  // {
  //   title: 'Education',
  //   icon: <GraduationCap className='h-full w-full text-neutral-600 dark:text-neutral-300' />,
  //   url: '/education',
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
  return (
    <Link href={app.url ?? '#'} onClick={onClick}>
      <DockItem className='aspect-square rounded-full bg-gray-200 dark:bg-neutral-800 cursor-pointer'>
        <DockLabel>{app.title}</DockLabel>
        <DockIcon>{app.icon}</DockIcon>
      </DockItem>
    </Link>
  )
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
    </Dialog>
  )
}
