'use client';

import { useDockStatus } from '@/hooks/use-dock-status';
import { Link } from '@/i18n/navigation';
import {
  BriefcaseBusiness,
  Cog,
  HomeIcon,
  MessageCircle,
  UserRound,
} from 'lucide-react';
import { useTranslations } from 'next-intl';
import React, { useState } from 'react';
import { ConfigurationModal } from './configuration-modal';
import { ContactModal } from './contact-modal';
import { Dock, DockIcon, DockItem, DockLabel } from './dock';
import { Dialog, DialogTrigger } from './nested-dialog';
import { ProgressiveBlur } from './progressive-blur';
import { Separator } from './separator';

function DockElement({
  title,
  icon,
}: {
  title: string;
  icon: React.ReactNode;
}) {
  return (
    <DockItem>
      <DockLabel>{title}</DockLabel>
      <DockIcon>{icon}</DockIcon>
    </DockItem>
  );
}

export default function AppsDock() {
  const { isDockOpen } = useDockStatus();
  const [activeModal, setActiveModal] = useState<number | undefined>(undefined);
  const t = useTranslations();

  const apps = [
    {
      title: t('home.title'),
      icon: <HomeIcon className='h-full w-full text-neutral-600' />,
      url: '/',
    },
    {
      title: t('profile.title'),
      icon: <UserRound className='h-full w-full text-neutral-600' />,
      url: '/profile',
    },
    {
      title: t('caseStudies.title'),
      icon: <BriefcaseBusiness className='h-full w-full text-neutral-600' />,
      url: '/case-studies',
    },
  ];

  const modals = [
    {
      title: t('getInTouch.title'),
      icon: <MessageCircle className='h-full w-full text-neutral-600' />,
      modal: <ContactModal />,
    },
    {
      title: t('configure.title'),
      icon: <Cog className='h-full w-full text-neutral-600' />,
      modal: <ConfigurationModal />,
    },
  ];

  return (
    <Dialog>
      <div
        className={`fixed bottom-2 left-1/2 w-full -translate-x-1/2 z-100 ${
          isDockOpen ? 'translate-y-0' : 'translate-y-full'
        } transition-transform duration-300`}
      >
        <Dock className='items-end pb-3'>
          {apps.map((app, idx) => (
            <Link key={idx} href={app.url}>
              <DockElement title={app.title} icon={app.icon} />
            </Link>
          ))}
          <Separator orientation='vertical' className='h-10' />
          {modals.map((modal, idx) => (
            <DialogTrigger key={idx} asChild>
              <button onClick={() => setActiveModal(idx)}>
                <DockElement title={modal.title} icon={modal.icon} />
              </button>
            </DialogTrigger>
          ))}
        </Dock>
      </div>
      {activeModal !== undefined && modals[activeModal].modal}
      <ProgressiveBlur
        direction='bottom'
        className='pointer-events-none fixed bottom-0 left-0 h-24 w-full z-99'
      />
    </Dialog>
  );
}
