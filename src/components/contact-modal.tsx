'use client'

import Cal, { getCalApi } from '@calcom/embed-react'
import { Calendar, Mail } from 'lucide-react'
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
  useEffect(() => {
    ;(async function () {
      const cal = await getCalApi({ namespace: '30min' })
      cal('ui', { hideEventTypeDetails: false, layout: 'month_view' })
    })()
  }, [])

  return (
    <DialogContent className='p-0'>
      <DialogHeader className='border-b p-4'>
        <DialogTitle>Choose a Contact Method</DialogTitle>
        <DialogDescription>Please select your preferred contact method.</DialogDescription>
      </DialogHeader>
      <div className='flex flex-col gap-4 pt-5 pr-4 pb-4 pl-4'>
        <InnerDialog>
          <InnerDialogTrigger asChild>
            <Button variant='outline' size='lg' className='flex justify-between min-h-16 sm:min-h-18 w-full text-left'>
              <div className='flex items-center space-x-4'>
                <Calendar size={16} />
                <div>
                  <h3 className='text-xs sm:text-sm font-medium'>Schedule a Meeting</h3>
                  <p className='text-xs sm:text-sm text-muted-foreground'>
                    Schedule a meeting with me to discuss your project.
                  </p>
                </div>
              </div>
            </Button>
          </InnerDialogTrigger>
          <InnerDialogContent className='p-0'>
            <InnerDialogHeader className='border-b p-4'>
              <InnerDialogTitle>Schedule a Meeting</InnerDialogTitle>
              <InnerDialogDescription>
                Please follow the steps below to schedule a meeting with me.
              </InnerDialogDescription>
            </InnerDialogHeader>
            <Cal
              namespace='30min'
              calLink='matthieu-vagnon/30min'
              style={{ width: '100%', height: '100%', maxHeight: 'calc(100svh - 100px)', overflow: 'scroll' }}
              config={{ layout: 'month_view' }}
            />
          </InnerDialogContent>
        </InnerDialog>
        <LinkButton
          variant='outline'
          size='lg'
          className='flex justify-between min-h-16 sm:min-h-18 w-full text-left'
          href='mailto:mvagnon@icloud.com'
          external
          noExternalIndicator
        >
          <div className='flex items-center space-x-4'>
            <Mail size={16} />
            <div>
              <h3 className='text-xs sm:text-sm font-medium'>Email</h3>
              <p className='text-xs sm:text-sm text-muted-foreground'>Send me an email to discuss your project.</p>
            </div>
          </div>
        </LinkButton>
      </div>
    </DialogContent>
  )
}
