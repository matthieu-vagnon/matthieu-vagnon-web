'use client';

import { useAccentColor } from '@/hooks/use-accent-color';
import { useMagneticStatus } from '@/hooks/use-magnetic-status';
import { useTranslations } from 'next-intl';
import { Button } from './ui/button';
import { Checkbox } from './ui/checkbox';
import { Label } from './ui/label';
import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from './ui/nested-dialog';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select';

export function ConfigurationModal() {
  const { isMagnetic, changeIsMagnetic } = useMagneticStatus();
  const { accentColor, changeAccentColor } = useAccentColor();
  const t = useTranslations('configure');

  const handleResetParameters = () => {
    changeAccentColor(undefined);
    changeIsMagnetic(undefined);
  };

  return (
    <DialogContent className='p-0'>
      <DialogHeader className='border-b p-4'>
        <DialogTitle>{t('title')}</DialogTitle>
        <DialogDescription>{t('description')}</DialogDescription>
      </DialogHeader>
      <div className='flex flex-col gap-4 pl-4 pr-4 pb-4 pt-1'>
        <div className='flex flex-col gap-2'>
          <Label>{t('accentColor.title')}</Label>
          <Select value={accentColor} onValueChange={changeAccentColor}>
            <SelectTrigger>
              <SelectValue placeholder={t('accentColor.placeholder')} />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value='default'>{t('accentColor.blue')}</SelectItem>
              <SelectItem value='green'>{t('accentColor.green')}</SelectItem>
              <SelectItem value='pink'>{t('accentColor.pink')}</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className='flex flex-col gap-2'>
          <div className='flex flex-col gap-1 justify-between'>
            <Label>{t('magnetic.title')}</Label>
            <span className='text-xs text-gray-400'>{t('magnetic.tip')}</span>
          </div>
          <Checkbox
            checked={isMagnetic}
            onCheckedChange={(checked) =>
              changeIsMagnetic(
                checked === 'indeterminate' ? undefined : checked
              )
            }
          />
        </div>
        <div className='flex flex-row flex-wrap justify-end gap-2'>
          <Button variant='ghost' noMagnetic onClick={handleResetParameters}>
            {t('reset')}
          </Button>
        </div>
      </div>
    </DialogContent>
  );
}
