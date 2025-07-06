'use client';

import { useAccentColor } from '@/hooks/useAccentColor';
import { useMagneticStatus } from '@/hooks/useMagneticStatus';
import { useMessages, useTranslations } from 'next-intl';
import { Button } from './Button';
import { Checkbox } from './Checkbox';
import { Label } from './Label';
import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from './NestedDialog';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './Select';

export function ConfigurationModal() {
  const { isMagnetic, changeIsMagnetic } = useMagneticStatus();
  const { accentColor, changeAccentColor } = useAccentColor();
  const t = useTranslations('configure');
  const messages = useMessages();

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
              {Object.entries(messages.configure.accentColor.colors).map(
                ([key, value]) => (
                  <SelectItem key={key} value={key}>
                    {value ? value.toString() : ''}
                  </SelectItem>
                )
              )}
            </SelectContent>
          </Select>
        </div>
        <div className='flex flex-col gap-2'>
          <div className='flex flex-col gap-1 justify-between'>
            <Label>{t('magnetic.title')}</Label>
            <span className='text-xs text-muted-foreground'>
              {t('magnetic.tip')}
            </span>
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
