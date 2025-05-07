'use client';

import { usePathname } from '@/i18n/navigation';
import { getTranslatedData } from '@/lib/utils';
import {
  DialogContent,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
} from '@radix-ui/react-dialog';
import { VisuallyHidden } from '@radix-ui/react-visually-hidden';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Copy } from 'lucide-react';
import { useLocale, useTranslations } from 'next-intl';
import Image from 'next/image';
import { toast } from 'sonner';
import { Button } from './button';
import { Media } from './media';

type MediaViewProps = {
  medias: Media[];
  index: number;
  setCurrentIndex?: (index: number) => void;
};

export default function MediaView({
  medias,
  index,
  setCurrentIndex = () => {},
}: MediaViewProps) {
  const pathname = usePathname();
  const t = useTranslations('utils');
  const locale = useLocale();

  const currentMedia = medias[index];
  const title = getTranslatedData(currentMedia.title, locale) as string;

  const handleNextButton = () => {
    setCurrentIndex(index + 1);
  };

  const handlePreviousButton = () => {
    setCurrentIndex(index - 1);
  };

  return (
    <DialogPortal>
      <DialogOverlay className='fixed inset-0 z-100 px-2 sm:px-5 md:px-10 flex items-center justify-center bg-black/75 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className='inline-block'
        >
          <DialogContent className='max-h-[calc(100dvh-40px)] overflow-visible flex flex-col gap-y-3 outline-none'>
            <VisuallyHidden asChild>
              <DialogTitle>{title}</DialogTitle>
            </VisuallyHidden>
            <div className='overflow-y-auto rounded-xs'>
              {currentMedia.src && (
                <div className='relative w-[calc(100dvw-40px)] max-w-4xl pt-[56.25%]'>
                  <iframe
                    src={currentMedia.src}
                    allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                    referrerPolicy='strict-origin-when-cross-origin'
                    allowFullScreen
                    className='absolute inset-0 w-full h-full rounded-xl'
                  />
                </div>
              )}
              {currentMedia.image && (
                <Image
                  src={currentMedia.image}
                  placeholder='blur'
                  alt={title}
                  className='w-[calc(100dvw-40px)] max-w-4xl rounded-xl'
                />
              )}
            </div>
            <div className='flex justify-end gap-x-2 flex-nowrap bg-black/10 p-2 sm:p-3 rounded-full'>
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
              {currentMedia.slug && (
                <Button
                  variant='default'
                  size='xs'
                  className='rounded-full p-2 sm:p-3 flex items-center gap-x-2'
                  onClick={() => {
                    navigator.clipboard.writeText(
                      `${process.env.NEXT_PUBLIC_URL!}${pathname}?media=${
                        currentMedia.slug
                      }`
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
  );
}
