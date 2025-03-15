'use client'

import { Calendar, Mail } from 'lucide-react'
import { InlineWidget } from 'react-calendly'
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
  return (
    <DialogContent className='p-0'>
      <DialogHeader className='border-b p-4'>
        <DialogTitle>Choose a Contact Method</DialogTitle>
        <DialogDescription>Please select your preferred contact method.</DialogDescription>
      </DialogHeader>
      <div className='flex flex-col gap-4 pt-2 pr-4 pb-4 pl-4'>
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
            <InlineWidget url='https://calendly.com/main-mvagnon/30min' />
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
