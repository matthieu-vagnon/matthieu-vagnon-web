'use client'

import { useDockStatus } from '@/hooks/use-dock-status'
import { useMagneticStatus } from '@/hooks/use-magnetic-status'
import { Link } from '@/i18n/navigation'
import { BriefcaseBusiness, Cog, HomeIcon, MessageCircle } from 'lucide-react'
import React, { useState } from 'react'
import { ConfigurationModal } from './configuration-modal'
import { ContactModal } from './contact-modal'
import { Dock, DockIcon, DockItem, DockLabel } from './ui/dock'
import { Dialog, DialogTrigger } from './ui/nested-dialog'
import { ProgressiveBlur } from './ui/progressive-blur'
import { Separator } from './ui/separator'

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
    icon: <HomeIcon className='h-full w-full text-neutral-600' />,
    url: '/'
  },
  // {
  //   title: 'Profile',
  //   icon: <UserRound className='h-full w-full text-neutral-600' />,
  //   url: '/profile'
  // },
  {
    title: 'Case Studies',
    icon: <BriefcaseBusiness className='h-full w-full text-neutral-600' />,
    url: '/case-studies'
  }
]

const MODALS: App[] = [
  {
    title: 'Get In Touch',
    icon: <MessageCircle className='h-full w-full text-neutral-600' />,
    modal: <ContactModal />
  },
  {
    title: 'Configuration',
    icon: <Cog className='h-full w-full text-neutral-600' />,
    modal: <ConfigurationModal />
  }
]

function DockElement({ app, onClick }: { app: App; onClick?: () => void }) {
  const { isMagnetic } = useMagneticStatus()

  const content = (
    <DockItem className='aspect-square rounded-full bg-gray-200 cursor-pointer'>
      {isMagnetic && <DockLabel>{app.title}</DockLabel>}
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
          {APPS.map((app, idx) => (
            <DockElement key={idx} app={app} />
          ))}
          <Separator orientation='vertical' className='h-10' />
          {MODALS.map((modal, idx) => (
            <DialogTrigger key={idx} asChild>
              <DockElement app={modal} onClick={() => setActiveModal(idx)} />
            </DialogTrigger>
          ))}
        </Dock>
      </div>
      {activeModal !== undefined && MODALS[activeModal].modal}
      <ProgressiveBlur direction='bottom' className='pointer-events-none fixed bottom-0 left-0 h-24 w-full z-99' />
    </Dialog>
  )
}
