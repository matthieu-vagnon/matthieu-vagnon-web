'use client'

import { getTranslatedData } from '@/lib/utils'
import { Dialog, DialogContent, DialogOverlay, DialogPortal, DialogTitle, DialogTrigger } from '@radix-ui/react-dialog'
import { VisuallyHidden } from '@radix-ui/react-visually-hidden'
import { motion } from 'framer-motion'
import { PlayIcon } from 'lucide-react'
import { useLocale } from 'next-intl'
import Image from 'next/image'
import { useState } from 'react'
import { Magnetic } from './ui/magnetic'

type Props =
  | { img: NonNullable<NonNullable<Project['gallery']>['img']>[number]; video?: never; isOpen?: never }
  | { video: NonNullable<NonNullable<Project['gallery']>['video']>[number]; img?: never; isOpen?: boolean }

export function MediaButton({ img, video, isOpen = false }: Props) {
  const [open, setOpen] = useState(isOpen)
  const locale = useLocale()

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <Magnetic size='md'>
        <DialogTrigger asChild>
          <button className='relative group rounded-lg overflow-hidden cursor-pointer hover:shadow-lg transition-all duration-300 outline-none'>
            <Image
              src={img?.image ?? video!.previewImage}
              placeholder='blur'
              alt={
                (getTranslatedData(img?.title, locale) as string) ?? (getTranslatedData(video!.title, locale) as string)
              }
              className='rounded-lg'
            />
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
                <DialogTitle>
                  {(getTranslatedData(img?.title, locale) as string) ??
                    (getTranslatedData(video!.title, locale) as string)}
                </DialogTitle>
              </VisuallyHidden>
              {video && (
                <div className='relative w-[calc(100dvw-40px)] max-w-4xl pt-[56.25%]'>
                  <iframe
                    src={video.src}
                    allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                    referrerPolicy='strict-origin-when-cross-origin'
                    allowFullScreen
                    className='absolute top-0 left-0 w-full h-full border-0 rounded-xl'
                  />
                </div>
              )}
              {img && (
                <Image
                  src={img.image}
                  placeholder='blur'
                  alt={getTranslatedData(img.title, locale) as string}
                  className='w-[calc(100dvw-40px)] max-w-4xl rounded-xl'
                />
              )}
            </DialogContent>
          </motion.div>
        </DialogOverlay>
      </DialogPortal>
    </Dialog>
  )
}
