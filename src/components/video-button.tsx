'use client'

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
  DialogTrigger
} from '@radix-ui/react-dialog'
import { motion } from 'framer-motion'
import { PlayIcon, XIcon } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { Button } from './ui/button'
import { Magnetic } from './ui/magnetic'
import VideoPlayer from './ui/video-player'

export function VideoButton({ title, video }: { title: string; video: string }) {
  const videoPreviewRef = useRef<HTMLVideoElement>(null)
  const [open, setOpen] = useState(false)

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
            <video ref={videoPreviewRef} src={video} className='rounded-lg' autoPlay muted loop />
            <div className='absolute group-hover:scale-110 transition-all duration-300 right-2 bottom-2 bg-black/25 backdrop-blur-md rounded-md p-2'>
              <PlayIcon className='w-4 h-4 text-white' />
            </div>
          </button>
        </DialogTrigger>
      </Magnetic>
      <DialogPortal>
        <DialogOverlay className='fixed inset-0 z-100 bg-black/75 backdrop-blur-sm px-2 sm:px-5 md:px-15 flex items-center justify-center data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0'>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <DialogContent>
              <div className='flex items-center justify-between gap-4 mb-3 py-1 px-2 sm:py-2 sm:px-4 bg-white rounded-lg'>
                <DialogTitle className='text-left text-xl sm:text-2xl font-sans-special font-bold'>{title}</DialogTitle>
                <DialogClose asChild>
                  <Button variant='ghost' size='icon'>
                    <XIcon className='w-4 h-4 transition-all duration-100' />
                  </Button>
                </DialogClose>
              </div>
              <VideoPlayer src={video} />
            </DialogContent>
          </motion.div>
        </DialogOverlay>
      </DialogPortal>
    </Dialog>
  )
}
