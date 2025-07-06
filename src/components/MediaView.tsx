'use client';

import { usePathname } from '@/i18n/navigation';
import { getTranslatedData } from '@/lib/utils';
import {
  DialogClose,
  DialogContent,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
} from '@radix-ui/react-dialog';
import { VisuallyHidden } from '@radix-ui/react-visually-hidden';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Copy, X } from 'lucide-react';
import { useLocale, useTranslations } from 'next-intl';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { toast } from 'sonner';
import { Button } from './button';
import { Media } from './Media';

type MediaViewProps = {
  medias: Media[];
  index: number;
  setCurrentIndex?: (index: number) => void;
  isOpen: boolean;
};

export default function MediaView({
  medias,
  index: currentIndex,
  setCurrentIndex = () => {},
  isOpen,
}: MediaViewProps) {
  const [direction, setDirection] = useState<'next' | 'prev' | undefined>(
    undefined
  );

  const pathname = usePathname();
  const t = useTranslations('utils');
  const locale = useLocale();

  const handleNextButton = () => {
    setDirection('next');
    setCurrentIndex(currentIndex + 1);
  };

  const handlePreviousButton = () => {
    setDirection('prev');
    setCurrentIndex(currentIndex - 1);
  };

  useEffect(() => {
    if (!isOpen) {
      setDirection(undefined);
    }
  }, [isOpen]);

  return (
    <DialogPortal>
      <DialogOverlay className='fixed inset-0 z-100 flex items-center justify-center bg-black/75 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className='inline-block'
        >
          <DialogContent className='outline-none'>
            <AnimatePresence mode='popLayout' custom={direction}>
              {medias.map((media, index) => {
                if (index !== currentIndex) return null;

                const title = getTranslatedData(media.title, locale) as string;

                return (
                  <motion.div
                    key={index}
                    custom={direction}
                    variants={{
                      enter: (direction) => ({
                        x:
                          direction &&
                          (direction === 'next' ? '100vw' : '-100vw'),
                      }),
                      center: {
                        x: 0,
                      },
                      exit: (direction) => ({
                        x:
                          direction &&
                          (direction === 'next' ? '-100vw' : '100vw'),
                      }),
                    }}
                    initial='enter'
                    animate='center'
                    exit='exit'
                    transition={{ duration: 0.5, ease: 'circInOut' }}
                    className='flex flex-col gap-y-3 max-h-[calc(100dvh-16px)]'
                  >
                    <VisuallyHidden asChild>
                      <DialogTitle>{title}</DialogTitle>
                    </VisuallyHidden>
                    <div className='overflow-y-auto rounded-xs'>
                      {media.src && (
                        <div className='relative w-[calc(100dvw-24px)] max-w-4xl pt-[56.25%]'>
                          <iframe
                            src={media.src}
                            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                            referrerPolicy='strict-origin-when-cross-origin'
                            allowFullScreen
                            className='absolute inset-0 w-full h-full rounded-xl'
                          />
                        </div>
                      )}
                      {media.image && (
                        <Image
                          src={media.image}
                          placeholder='blur'
                          alt={title}
                          className='w-[calc(100dvw-24px)] max-w-4xl rounded-xl'
                        />
                      )}
                    </div>
                    <div className='flex justify-end gap-x-2 flex-nowrap bg-black/10 rounded-full p-2 sm:p-3'>
                      {medias.length > 1 && (
                        <div className='flex items-center gap-x-2 flex-nowrap mr-auto'>
                          <Button
                            variant='default'
                            size='xs'
                            className='rounded-full p-2 sm:p-3'
                            disabled={index === 0}
                            onClick={handlePreviousButton}
                          >
                            <ChevronLeft className='size-4' />
                          </Button>
                          <Button
                            variant='default'
                            size='xs'
                            className='rounded-full p-2 sm:p-3'
                            disabled={index === medias.length - 1}
                            onClick={handleNextButton}
                          >
                            <ChevronRight className='size-4' />
                          </Button>
                        </div>
                      )}
                      <div className='flex items-center gap-x-2 flex-nowrap'>
                        {media.slug && (
                          <Button
                            variant='default'
                            size='xs'
                            onClick={() => {
                              navigator.clipboard.writeText(
                                `${process.env
                                  .NEXT_PUBLIC_URL!}${pathname}?media=${
                                  media.slug
                                }`
                              );
                              toast.success(t('copyLink'));
                            }}
                            className='rounded-full p-2 sm:p-3 flex items-center gap-x-2'
                          >
                            <span className='hidden sm:block text-xs'>
                              {t('copyLinkButton')}
                            </span>
                            <Copy className='size-4' />
                          </Button>
                        )}
                        <DialogClose asChild>
                          <Button
                            variant='default'
                            size='xs'
                            className='rounded-full p-2 sm:p-3'
                          >
                            <X className='size-4' />
                          </Button>
                        </DialogClose>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </DialogContent>
        </motion.div>
      </DialogOverlay>
    </DialogPortal>
  );
}
