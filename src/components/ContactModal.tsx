'use client'

import {
  DialogStackBody,
  DialogStackContent,
  DialogStackDescription,
  DialogStackNext,
  DialogStackPrevious,
  DialogStackTitle
} from '@/components/ui/dialog-stack'
import { InteractiveHoverButton } from './ui/interactive-hover-button'

export function ContactModal() {
  return (
    <DialogStackBody>
      <DialogStackContent className='h-auto w-full rounded-lg border bg-background p-6 shadow-lg'>
        <div className='flex flex-col space-y-1.5 text-center sm:text-left'>
          <DialogStackTitle className='font-semibold text-lg leading-none tracking-tight'>
            I&apos;m the first dialog
          </DialogStackTitle>
          <DialogStackDescription className='text-muted-foreground text-sm'>
            With a fancy description
          </DialogStackDescription>
        </div>
        <div className='flex items-center space-x-2 pt-4 justify-end'>
          <DialogStackNext asChild>
            <InteractiveHoverButton>Next</InteractiveHoverButton>
          </DialogStackNext>
        </div>
      </DialogStackContent>

      <DialogStackContent className='h-auto w-full rounded-lg border bg-background p-6 shadow-lg'>
        <div className='flex flex-col space-y-1.5 text-center sm:text-left'>
          <DialogStackTitle className='font-semibold text-lg leading-none tracking-tight'>
            I&apos;m the second dialog
          </DialogStackTitle>
          <DialogStackDescription className='text-muted-foreground text-sm'>
            With a fancy description
          </DialogStackDescription>
        </div>
        <div className='flex items-center space-x-2 pt-4 justify-between'>
          <DialogStackPrevious asChild>
            <InteractiveHoverButton variant='previous'>Previous</InteractiveHoverButton>
          </DialogStackPrevious>
          <DialogStackNext asChild>
            <InteractiveHoverButton>Next</InteractiveHoverButton>
          </DialogStackNext>
        </div>
      </DialogStackContent>

      <DialogStackContent className='h-auto w-full rounded-lg border bg-background p-6 shadow-lg'>
        <div className='flex flex-col space-y-1.5 text-center sm:text-left'>
          <DialogStackTitle className='font-semibold text-lg leading-none tracking-tight'>
            I&apos;m the final dialog
          </DialogStackTitle>
          <DialogStackDescription className='text-muted-foreground text-sm'>
            With a fancy description
          </DialogStackDescription>
        </div>
        <div className='flex items-center space-x-2 pt-4 justify-start'>
          <DialogStackPrevious asChild>
            <InteractiveHoverButton variant='previous'>Previous</InteractiveHoverButton>
          </DialogStackPrevious>
        </div>
      </DialogStackContent>
    </DialogStackBody>
  )
}
