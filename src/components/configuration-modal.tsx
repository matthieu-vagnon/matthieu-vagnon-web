'use client'

import { useAccentColor } from '@/hooks/use-accent-color'
import { useMagneticStatus } from '@/hooks/use-magnetic-status'
import { Checkbox } from './ui/checkbox'
import { Label } from './ui/label'
import { DialogContent, DialogDescription, DialogHeader, DialogTitle } from './ui/nested-dialog'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select'

export function ConfigurationModal() {
  const { isMagnetic, changeIsMagnetic } = useMagneticStatus()
  const { changeAccentColor } = useAccentColor()
  const accentColor = document.documentElement.getAttribute('data-accent-color')

  return (
    <DialogContent className='p-0'>
      <DialogHeader className='border-b p-4'>
        <DialogTitle>Configuration</DialogTitle>
        <DialogDescription>Please configure the app to your liking.</DialogDescription>
      </DialogHeader>
      <div className='flex flex-col gap-4 pl-4 pr-4 pb-4 pt-1'>
        <div className='flex flex-col gap-2'>
          <Label>Language</Label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder='Select a language' />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value='en'>English</SelectItem>
              <SelectItem value='fr'>Français</SelectItem>
              <SelectItem value='jp'>日本語</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className='flex flex-col gap-2'>
          <Label>Accent Color</Label>
          <Select value={accentColor ?? 'default'} onValueChange={changeAccentColor}>
            <SelectTrigger>
              <SelectValue placeholder='Select a color' />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value='default'>Default (Blue)</SelectItem>
              <SelectItem value='green'>Green</SelectItem>
              <SelectItem value='yellow'>Yellow</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className='flex flex-col gap-2'>
          <Label>Magnetic Buttons</Label>
          <Checkbox checked={isMagnetic} onCheckedChange={changeIsMagnetic} />
        </div>
      </div>
    </DialogContent>
  )
}
