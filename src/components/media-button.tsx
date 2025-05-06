'use client';

import { usePathname } from '@/i18n/navigation';
import { cn, getTranslatedData } from '@/lib/utils';
import {
  Dialog,
  DialogContent,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
  DialogTrigger,
} from '@radix-ui/react-dialog';
import { VisuallyHidden } from '@radix-ui/react-visually-hidden';
import { motion } from 'framer-motion';
import {
  ChevronLeft,
  ChevronRight,
  Copy,
  PlayIcon,
  Subtitles,
  Volume1,
} from 'lucide-react';
import { useLocale, useTranslations } from 'next-intl';
import Image from 'next/image';
import { useState } from 'react';
import { toast } from 'sonner';
import { Button } from './button';
import Magnetic, { MagneticSize } from './magnetic';
import { Separator } from './separator';
import { Tilt } from './tilt';

type MediaButtonProps = NonNullable<Project['gallery']>[number] & {
  noCopy?: boolean;
  isOpen?: boolean;
  index?: number;
  size?: MagneticSize;
  isTilt?: boolean;
  className?: string;
};

export function MediaButton({
  title: rawTitle,
  image,
  previewImage,
  src,
  audio,
  subtitle,
  noCopy = false,
  size = 'lg',
  isTilt = false,
  isOpen = false,
  index,
  className,
}: MediaButtonProps) {
  const [open, setOpen] = useState(isOpen);
  const pathname = usePathname();
  const t = useTranslations('utils');
  const locale = useLocale();
  const title = getTranslatedData(rawTitle, locale);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <Magnetic size={size}>
        <DialogTrigger asChild>
          <button
            className={cn(
              'group relative cursor-pointer transition-all duration-300 outline-none',
              className
            )}
          >
            {isTilt ? (
              <Tilt
                rotationFactor={10}
                isRevese
                style={{
                  transformOrigin: 'center center',
                }}
                springOptions={{
                  stiffness: 150,
                  damping: 15,
                  mass: 0.2,
                }}
              >
                <Image
                  src={image!}
                  placeholder='blur'
                  alt={title}
                  className='rounded-lg group-hover:shadow-lg transition-all duration-300'
                />
              </Tilt>
            ) : (
              <Image
                src={image ?? previewImage}
                placeholder='blur'
                alt={title}
                className='rounded-lg group-hover:shadow-lg transition-all duration-300'
              />
            )}
            {src && (
              <div className='absolute bg-foreground/20 group-hover:bg-foreground/40 transition-all duration-300 right-2 bottom-2 backdrop-blur-md rounded-md p-2 flex items-center gap-x-2'>
                {audio && (
                  <>
                    <div className='flex items-center gap-x-1'>
                      <Volume1 className='w-4 h-4 text-background' />
                      <span className='text-[10px] text-background'>
                        {audio.toUpperCase()}
                      </span>
                    </div>
                    <Separator
                      orientation='vertical'
                      className='h-4 bg-background/25'
                    />
                  </>
                )}
                {subtitle && (
                  <>
                    <div className='flex items-center gap-x-1'>
                      <Subtitles className='w-4 h-4 text-background' />
                      <span className='text-[10px] text-background'>
                        {subtitle.join(' · ').toUpperCase()}
                      </span>
                    </div>
                    <Separator
                      orientation='vertical'
                      className='h-4 bg-background/25'
                    />
                  </>
                )}
                <PlayIcon className='w-4 h-4 text-background' />
              </div>
            )}
          </button>
        </DialogTrigger>
      </Magnetic>
      <DialogPortal>
        <DialogOverlay className='fixed inset-0 z-100 px-2 sm:px-5 md:px-10 flex items-center justify-center bg-black/75 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className='inline-block'
          >
            <DialogContent className='max-h-[calc(100dvh-40px)] overflow-visible flex flex-col gap-y-3'>
              <VisuallyHidden asChild>
                <DialogTitle>{title}</DialogTitle>
              </VisuallyHidden>
              <div className='overflow-y-auto rounded-xs'>
                {src && (
                  <div className='relative w-[calc(100dvw-40px)] max-w-4xl pt-[56.25%]'>
                    <iframe
                      src={src}
                      allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                      referrerPolicy='strict-origin-when-cross-origin'
                      allowFullScreen
                      className='absolute inset-0 w-full h-full rounded-xl'
                    />
                  </div>
                )}
                {image && (
                  <Image
                    src={image}
                    placeholder='blur'
                    alt={title}
                    className='w-[calc(100dvw-40px)] max-w-4xl rounded-xl'
                  />
                )}
              </div>
              <div className='flex justify-end gap-x-2 flex-nowrap'>
                {false && (
                  <div className='flex items-center gap-x-2 flex-nowrap mr-auto'>
                    <Button
                      variant='default'
                      size='xs'
                      className='rounded-full p-3'
                    >
                      <ChevronLeft className='size-4' />
                    </Button>
                    <Button
                      variant='default'
                      size='xs'
                      className='rounded-full p-3'
                    >
                      <ChevronRight className='size-4' />
                    </Button>
                  </div>
                )}
                {!noCopy && src && (
                  <Button
                    variant='default'
                    size='xs'
                    className='rounded-full p-3 flex items-center gap-x-2'
                    onClick={() => {
                      navigator.clipboard.writeText(
                        `${process.env
                          .NEXT_PUBLIC_URL!}${pathname}?video=${index}`
                      );
                      toast.success(t('copyLink'));
                    }}
                  >
                    <span className='hidden sm:block text-xs'>
                      {t('copyLinkButton')}
                    </span>
                    <Copy className='size-4' />
                  </Button>
                )}
              </div>
            </DialogContent>
          </motion.div>
        </DialogOverlay>
      </DialogPortal>
    </Dialog>
  );
}
