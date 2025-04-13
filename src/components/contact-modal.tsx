'use client'

import Cal, { getCalApi } from '@calcom/embed-react'
import { Calendar, Mail, Phone } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { useEffect } from 'react'
import { Button, LinkButton } from './ui/button'
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
  InnerDialogTrigger
} from './ui/nested-dialog'

export function ContactModal() {
  const t = useTranslations('getInTouch')

  useEffect(() => {
    ;(async function () {
      const cal = await getCalApi({ namespace: '30min' })
      cal('ui', { hideEventTypeDetails: false, layout: 'month_view' })
    })()
  }, [])

  return (
    <DialogContent className='p-0'>
      <DialogHeader>
        <DialogTitle>{t('title')}</DialogTitle>
        <DialogDescription>{t('description')}</DialogDescription>
      </DialogHeader>
      <div className='flex flex-col gap-4 pt-1 pr-4 pb-4 pl-4'>
        <InnerDialog>
          <InnerDialogTrigger asChild>
            <Button variant='outline' size='md' className='flex justify-between min-h-16 sm:min-h-18 w-full text-left'>
              <div className='flex items-center space-x-4'>
                <Calendar size={16} />
                <div>
                  <h3 className='text-xs sm:text-sm font-medium'>{t('meeting.title')}</h3>
                  <p className='text-xs sm:text-sm text-muted-foreground'>{t('meeting.description')}</p>
                </div>
              </div>
            </Button>
          </InnerDialogTrigger>
          <InnerDialogContent className='p-0'>
            <InnerDialogHeader className='border-b p-4'>
              <InnerDialogTitle>{t('meeting.title')}</InnerDialogTitle>
              <InnerDialogDescription>{t('meeting.description')}</InnerDialogDescription>
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
          href='mailto:mvagnon@icloud.com'
          external
          noExternalIndicator
        >
          <div className='flex items-center space-x-4'>
            <Mail size={16} />
            <div>
              <h3 className='text-xs sm:text-sm font-medium'>{t('email.title')}</h3>
              <p className='text-xs sm:text-sm text-muted-foreground'>{t('email.description')}</p>
            </div>
          </div>
        </LinkButton>
        <LinkButton
          variant='outline'
          size='md'
          className='flex justify-between min-h-16 sm:min-h-18 w-full text-left'
          href='tel:+817090997140'
          external
          noExternalIndicator
        >
          <div className='flex items-center space-x-4'>
            <Phone size={16} />
            <div>
              <h3 className='text-xs sm:text-sm font-medium'>{t('phone.title', { number: '+81 70 9099 7140' })}</h3>
              <p className='text-xs sm:text-sm text-muted-foreground'>{t('phone.description')}</p>
            </div>
          </div>
        </LinkButton>
      </div>
    </DialogContent>
  )
}
