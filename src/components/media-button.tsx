'use client';

import { usePathname } from '@/i18n/navigation';
import { cn } from '@/lib/utils';
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
import { Copy, PlayIcon } from 'lucide-react';
import { useTranslations } from 'next-intl';
import Image, { StaticImageData } from 'next/image';
import { useState } from 'react';
import { toast } from 'sonner';
import { Button } from './ui/button';
import { Magnetic, MagneticSize } from './ui/magnetic';
import { Tilt } from './ui/tilt';

type Props =
  | {
      title: string;
      img: StaticImageData;
      previewImage?: never;
      video?: never;
      size?: MagneticSize;
      isOpen?: never;
      index?: never;
      isTilt?: boolean;
      className?: string;
    }
  | {
      title: string;
      previewImage: StaticImageData;
      video: string;
      img?: never;
      size?: MagneticSize;
      isOpen?: boolean;
      index: number;
      isTilt?: never;
      className?: string;
    };

export function MediaButton({
  title,
  img,
  previewImage,
  video,
  size = 'lg',
  isTilt = false,
  isOpen = false,
  index,
  className,
}: Props) {
  const [open, setOpen] = useState(isOpen);
  const pathname = usePathname();
  const t = useTranslations('utils');

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
                  src={img!}
                  placeholder='blur'
                  alt={title}
                  className='rounded-lg group-hover:scale-105 group-hover:shadow-md transition-all duration-300'
                />
              </Tilt>
            ) : (
              <Image
                src={img ?? previewImage}
                placeholder='blur'
                alt={title}
                className='rounded-lg group-hover:shadow-lg transition-all duration-300'
              />
            )}
            {video && (
              <div className='absolute group-hover:scale-110 transition-all duration-300 right-2 bottom-2 bg-black/25 backdrop-blur-md rounded-md p-2'>
                <PlayIcon className='w-4 h-4 text-white' />
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
            <DialogContent className='inline-block max-h-[calc(100dvh-40px)] overflow-y-auto rounded-sm'>
              <VisuallyHidden asChild>
                <DialogTitle>{title}</DialogTitle>
              </VisuallyHidden>
              {video && (
                <div className='relative w-[calc(100dvw-40px)] max-w-4xl pt-[56.25%]'>
                  <div className='absolute z-1 bottom-3 right-3'>
                    <Button
                      variant='default'
                      size='xs'
                      className='rounded-full p-3'
                      onClick={() => {
                        navigator.clipboard.writeText(
                          `${process.env
                            .NEXT_PUBLIC_URL!}${pathname}?video=${index}`
                        );
                        toast.success(t('copyLink'));
                      }}
                    >
                      <Copy className='size-4' />
                    </Button>
                  </div>
                  <iframe
                    src={video}
                    allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                    referrerPolicy='strict-origin-when-cross-origin'
                    allowFullScreen
                    className='absolute top-0 left-0 w-full h-full border-0 rounded-xl'
                  />
                </div>
              )}
              {img && (
                <Image
                  src={img}
                  placeholder='blur'
                  alt={title}
                  className='w-[calc(100dvw-40px)] max-w-4xl rounded-xl'
                />
              )}
            </DialogContent>
          </motion.div>
        </DialogOverlay>
      </DialogPortal>
    </Dialog>
  );
}
