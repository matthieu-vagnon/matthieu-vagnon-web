'use client';

import { useDockStatus } from '@/hooks/useDockStatus';
import { Link } from '@/i18n/navigation';
import {
  BriefcaseBusiness,
  Cog,
  HomeIcon,
  MessageCircle,
  UserRound,
} from 'lucide-react';
import { useTranslations } from 'next-intl';
import { useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { ConfigurationModal } from './ConfigurationModal';
import { ContactModal } from './ContactModal';
import { Dock, DockIcon, DockItem, DockLabel } from './Dock';
import { Dialog, DialogTrigger } from './NestedDialog';
import { ProgressiveBlur } from './ProgressiveBlur';
import { Separator } from './Separator';

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
  const searchParams = useSearchParams();
  const modalParam = searchParams.get('action');
  const [activeModal, setActiveModal] = useState<string | undefined>(undefined);
  const t = useTranslations();

  useEffect(() => {
    if (modalParam) {
      setActiveModal(modalParam);
    }
  }, [modalParam]);

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
      action: 'contact',
      title: t('getInTouch.title'),
      icon: <MessageCircle className='h-full w-full text-neutral-600' />,
      modal: <ContactModal />,
    },
    {
      action: 'configure',
      title: t('configure.title'),
      icon: <Cog className='h-full w-full text-neutral-600' />,
      modal: <ConfigurationModal />,
    },
  ];

  return (
    <Dialog defaultOpen={!!modalParam}>
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
              <button onClick={() => setActiveModal(modal.action)}>
                <DockElement title={modal.title} icon={modal.icon} />
              </button>
            </DialogTrigger>
          ))}
        </Dock>
      </div>
      {activeModal !== undefined &&
        modals.find((modal) => modal.action === activeModal)?.modal}
      <ProgressiveBlur
        direction='bottom'
        className='pointer-events-none fixed bottom-0 left-0 h-24 w-full z-99'
      />
    </Dialog>
  );
}
