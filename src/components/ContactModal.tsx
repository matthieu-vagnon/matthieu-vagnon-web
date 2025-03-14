'use client'

import { DialogStackDescription, DialogStackTitle } from '@/components/ui/dialog-stack'

export function ContactModal() {
  return (
    <div className='flex flex-col space-y-1.5 text-center sm:text-left'>
      <DialogStackTitle className='font-semibold text-lg leading-none tracking-tight'>
        I&apos;m the final dialog
      </DialogStackTitle>
      <DialogStackDescription className='text-muted-foreground text-sm'>
        With a fancy description
      </DialogStackDescription>
    </div>
  )
}
