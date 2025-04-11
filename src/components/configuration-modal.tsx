'use client'

import { useAccentColor } from '@/hooks/use-accent-color'
import { useMagneticStatus } from '@/hooks/use-magnetic-status'
import { Button } from './ui/button'
import { Checkbox } from './ui/checkbox'
import { Label } from './ui/label'
import { DialogContent, DialogDescription, DialogHeader, DialogTitle } from './ui/nested-dialog'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select'

const DEFAULT_PARAMETERS = {
  language: 'en',
  accentColor: 'default',
  isMagnetic: true
}

export function ConfigurationModal() {
  const { isMagnetic, changeIsMagnetic } = useMagneticStatus()
  const { accentColor, changeAccentColor } = useAccentColor()

  const handleResetParameters = () => {
    changeAccentColor(DEFAULT_PARAMETERS.accentColor)
    changeIsMagnetic(DEFAULT_PARAMETERS.isMagnetic)
  }

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
          <Select value={accentColor} onValueChange={changeAccentColor}>
            <SelectTrigger>
              <SelectValue placeholder='Select a color' />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value='default'>Blue</SelectItem>
              <SelectItem value='green'>Green</SelectItem>
              <SelectItem value='yellow'>Yellow</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className='flex flex-col gap-2'>
          <div className='flex flex-col gap-1 justify-between'>
            <Label>Magnetic Buttons</Label>
            <span className='text-xs text-gray-400'>Not recommended for touch screens.</span>
          </div>
          <Checkbox checked={isMagnetic} onCheckedChange={changeIsMagnetic} />
        </div>
        <div className='flex flex-row flex-wrap justify-end gap-2'>
          <Button variant='ghost' noMagnetic onClick={handleResetParameters}>
            Reset Parameters
          </Button>
        </div>
      </div>
    </DialogContent>
  )
}
