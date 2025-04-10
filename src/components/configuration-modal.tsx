'use client'

import { DialogContent, DialogDescription, DialogHeader, DialogTitle } from './ui/nested-dialog'

export function ConfigurationModal() {
  return (
    <DialogContent className='p-0'>
      <DialogHeader className='border-b p-4'>
        <DialogTitle>Configuration</DialogTitle>
        <DialogDescription>Please configure the app to your liking.</DialogDescription>
      </DialogHeader>
    </DialogContent>
  )
}
