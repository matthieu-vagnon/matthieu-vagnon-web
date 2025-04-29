'use client';

import Cal, { getCalApi } from '@calcom/embed-react';
import { Calendar, Copy, Mail, Phone } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { useEffect } from 'react';
import { toast } from 'sonner';
import { Button, LinkButton } from './ui/button';
import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  InnerDialog,
  InnerDialogContent,
  InnerDialogDescription,
  InnerDialogHeader,
  InnerDialogTitle,
  InnerDialogTrigger,
} from './ui/nested-dialog';
export function ContactModal() {
  const t = useTranslations();

  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: '30min' });
      cal('ui', { hideEventTypeDetails: false, layout: 'month_view' });
    })();
  }, []);

  return (
    <DialogContent className='p-0'>
      <DialogHeader>
        <DialogTitle>{t('getInTouch.title')}</DialogTitle>
        <DialogDescription>{t('getInTouch.description')}</DialogDescription>
      </DialogHeader>
      <div className='flex flex-col gap-5 pt-1 pr-4 pb-4 pl-4'>
        <div className='flex flex-col gap-3'>
          <InnerDialog>
            <InnerDialogTrigger asChild>
              <Button
                variant='outline'
                size='md'
                className='flex justify-between min-h-16 sm:min-h-18 w-full text-left'
              >
                <div className='flex items-center space-x-4'>
                  <Calendar size={16} />
                  <div>
                    <h3 className='text-xs sm:text-sm font-medium'>
                      {t('getInTouch.meeting.title')}
                    </h3>
                    <p className='text-xs sm:text-sm text-muted-foreground'>
                      {t('getInTouch.meeting.description')}
                    </p>
                  </div>
                </div>
              </Button>
            </InnerDialogTrigger>
            <InnerDialogContent className='p-0'>
              <InnerDialogHeader className='border-b p-4'>
                <InnerDialogTitle>
                  {t('getInTouch.meeting.title')}
                </InnerDialogTitle>
                <InnerDialogDescription>
                  {t('getInTouch.meeting.description')}
                </InnerDialogDescription>
              </InnerDialogHeader>
              <Cal
                namespace='30min'
                calLink='matthieu-vagnon/30min'
                style={{ width: '100%', height: '100%', overflow: 'scroll' }}
                config={{ layout: 'month_view' }}
              />
            </InnerDialogContent>
          </InnerDialog>
          <LinkButton
            variant='outline'
            size='md'
            className='flex justify-between min-h-16 sm:min-h-18 w-full text-left'
            href={`mailto:${process.env.NEXT_PUBLIC_EMAIL!}`}
            external
            noExternalIndicator
          >
            <div className='flex items-center space-x-4'>
              <Mail size={16} />
              <div>
                <h3 className='text-xs sm:text-sm font-medium'>
                  {t('getInTouch.email.title')}
                </h3>
                <p className='text-xs sm:text-sm text-muted-foreground'>
                  {t('getInTouch.email.description')}
                </p>
              </div>
            </div>
          </LinkButton>
          <LinkButton
            variant='outline'
            size='md'
            className='flex justify-between min-h-16 sm:min-h-18 w-full text-left'
            href={`tel:${t('utils.tel')}`}
            external
            noExternalIndicator
          >
            <div className='flex items-center space-x-4'>
              <Phone size={16} />
              <div>
                <h3 className='text-xs sm:text-sm font-medium'>
                  {t('getInTouch.phone.title')}
                </h3>
                <p className='text-xs sm:text-sm text-muted-foreground'>
                  {t('getInTouch.phone.description')}
                </p>
              </div>
            </div>
          </LinkButton>
        </div>
        <div className='flex flex-row gap-2'>
          <Button
            variant='secondary'
            size='xs'
            className='text-xs px-2 py-1 flex flex-row gap-2 items-center justify-start'
            onClick={() => {
              navigator.clipboard.writeText(process.env.NEXT_PUBLIC_EMAIL!);
              toast.success(t('utils.copyEmail'));
            }}
          >
            <span>{process.env.NEXT_PUBLIC_EMAIL!}</span>
            <Copy className='size-3 text-muted-foreground' />
          </Button>
          <Button
            variant='secondary'
            size='xs'
            className='text-xs px-2 py-1 flex flex-row gap-2 items-center justify-start'
            onClick={() => {
              navigator.clipboard.writeText(t('utils.tel'));
              toast.success(t('utils.copyPhone'));
            }}
          >
            <span>{t('utils.tel')}</span>
            <Copy className='size-3 text-muted-foreground' />
          </Button>
        </div>
      </div>
    </DialogContent>
  );
}
