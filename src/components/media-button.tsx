'use client'

import { Dialog, DialogContent, DialogOverlay, DialogPortal, DialogTitle, DialogTrigger } from '@radix-ui/react-dialog'
import { VisuallyHidden } from '@radix-ui/react-visually-hidden'
import { motion } from 'framer-motion'
import { PlayIcon } from 'lucide-react'
import Image, { StaticImageData } from 'next/image'
import { useState } from 'react'
import { Magnetic } from './ui/magnetic'
import VideoPlayer from './ui/video-player'

export function MediaButton({ title, img, video }: { title: string; img?: StaticImageData; video?: string }) {
  const [open, setOpen] = useState(false)

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <Magnetic range={500} intensity={0.1}>
        <DialogTrigger asChild>
          <button className='relative group rounded-lg overflow-hidden cursor-pointer hover:shadow-lg transition-all duration-300'>
            {video && (
              <video className='rounded-lg' preload='metadata' muted>
                <source src={`${video}#t=4`} />
              </video>
            )}
            {img && <Image src={img} alt={title} className='rounded-lg' />}
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
            <DialogContent className='inline-block'>
              <VisuallyHidden asChild>
                <DialogTitle>{title}</DialogTitle>
              </VisuallyHidden>
              {video && <VideoPlayer src={video} />}
              {img && (
                <Image
                  src={img}
                  alt={title}
                  className='w-full max-w-4xl mx-auto max-h-[calc(100vh-20px)] overflow-hidden rounded-md sm:rounded-lg md:rounded-xl'
                />
              )}
            </DialogContent>
          </motion.div>
        </DialogOverlay>
      </DialogPortal>
    </Dialog>
  )
}
