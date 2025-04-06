'use client'

import { Dialog, DialogContent, DialogOverlay, DialogPortal, DialogTitle, DialogTrigger } from '@radix-ui/react-dialog'
import { VisuallyHidden } from '@radix-ui/react-visually-hidden'
import { motion } from 'framer-motion'
import { PlayIcon } from 'lucide-react'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import { Magnetic } from './ui/magnetic'
import VideoPlayer from './ui/video-player'

export function MediaButton({ title, element }: { title: string; element: string }) {
  const videoPreviewRef = useRef<HTMLVideoElement>(null)
  const [open, setOpen] = useState(false)
  const isVideo = element.endsWith('.mov')

  useEffect(() => {
    if (open) {
      videoPreviewRef.current?.pause()
    } else {
      videoPreviewRef.current?.play()
    }
  }, [open])

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <Magnetic range={500} intensity={0.1}>
        <DialogTrigger asChild>
          <button className='relative group rounded-lg overflow-hidden cursor-pointer hover:shadow-lg transition-all duration-300'>
            {isVideo ? (
              <video ref={videoPreviewRef} src={element} className='rounded-lg' autoPlay muted loop />
            ) : (
              <Image src={element} alt={title} width={1000} height={1000} className='rounded-lg' />
            )}
            {isVideo && (
              <div className='absolute group-hover:scale-110 transition-all duration-300 right-2 bottom-2 bg-black/25 backdrop-blur-md rounded-md p-2'>
                <PlayIcon className='w-4 h-4 text-white' />
              </div>
            )}
          </button>
        </DialogTrigger>
      </Magnetic>
      <DialogPortal>
        <DialogOverlay className='fixed inset-0 z-100 bg-black/75 backdrop-blur-sm px-2 sm:px-5 md:px-15 flex items-center justify-center data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0'>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <DialogContent>
              <VisuallyHidden asChild>
                <DialogTitle>{title}</DialogTitle>
              </VisuallyHidden>
              {isVideo ? (
                <VideoPlayer src={element} />
              ) : (
                <Image src={element} alt={title} width={1000} height={1000} className='rounded-xl' />
              )}
            </DialogContent>
          </motion.div>
        </DialogOverlay>
      </DialogPortal>
    </Dialog>
  )
}
