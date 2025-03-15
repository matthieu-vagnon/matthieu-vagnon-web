'use client'

import { Calendar, Mail } from 'lucide-react'
import { useRouter } from 'next/navigation'
import Script from 'next/script'
import { Button } from './ui/button'
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
  const router = useRouter()

  return (
    <DialogContent className='p-0'>
      <DialogHeader className='border-b p-4'>
        <DialogTitle>Choose a Contact Method</DialogTitle>
        <DialogDescription>Please select your preferred contact method.</DialogDescription>
      </DialogHeader>
      <div className='flex flex-col gap-4 pt-2 pr-4 pb-4 pl-4'>
        <InnerDialog>
          <InnerDialogTrigger asChild>
            <Button variant='outline' size='lg' className='flex justify-between h-18 w-full text-left'>
              <div className='flex items-center space-x-4'>
                <Calendar size={16} />
                <div>
                  <h3 className='text-sm font-medium'>Schedule a Meeting</h3>
                  <p className='text-sm text-muted-foreground'>Schedule a meeting with me to discuss your project.</p>
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
            <div
              className='calendly-inline-widget'
              data-url='https://calendly.com/main-mvagnon/30min'
              style={{ minWidth: '320px', height: '700px' }}
            />
            <Script src='https://assets.calendly.com/assets/external/widget.js' />
          </InnerDialogContent>
        </InnerDialog>
        <Button
          onClick={() => router.push('mailto:mvagnon@icloud.com')}
          variant='outline'
          size='lg'
          className='flex justify-between h-18 w-full text-left'
        >
          <div className='flex items-center space-x-4'>
            <Mail size={16} />
            <div>
              <h3 className='text-sm font-medium'>Email</h3>
              <p className='text-sm text-muted-foreground'>Send me an email to discuss your project.</p>
            </div>
          </div>
        </Button>
      </div>
    </DialogContent>
  )
}
