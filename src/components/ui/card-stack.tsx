'use client'

import { useTestimonialsStatus } from '@/hooks/use-testimonials-status'
import { cn, getTranslatedData } from '@/lib/utils'
import { motion } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useLocale } from 'next-intl'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { BlurFade } from './blur-fade'
import { Magnetic } from './magnetic'

let interval: NodeJS.Timeout

export const CardStack = ({
  items,
  offset,
  scaleFactor
}: {
  items: Testimonial[]
  offset?: number
  scaleFactor?: number
}) => {
  const CARD_OFFSET = offset || 10
  const SCALE_FACTOR = scaleFactor || 0.06
  const [cards, setCards] = useState<Testimonial[]>(items)
  const { isCollapsed, setIsCollapsed } = useTestimonialsStatus()
  const locale = useLocale()

  const startFlipping = () => {
    interval = setInterval(() => {
      setCards((prevCards: Testimonial[]) => {
        const newArray = [...prevCards]
        newArray.unshift(newArray.pop()!)
        return newArray
      })
    }, 15000)
  }

  const handleCollapse = () => {
    setIsCollapsed(!isCollapsed)
  }

  const handleExpand = () => {
    setIsCollapsed(false)
  }

  useEffect(() => {
    startFlipping()

    return () => clearInterval(interval)
  }, [])

  return (
    <BlurFade delay={1} className={cn('fixed bottom-25 right-10 z-99', isCollapsed && 'pointer-events-none')}>
      <div
        className={cn(
          'w-120 h-60 justify-center items-center gap-2 hidden md:flex transition-all ease-[cubic-bezier(.17,.67,.49,1.32)] duration-400',
          isCollapsed && 'translate-x-108'
        )}
      >
        <div className='h-full w-5'>
          <Magnetic size='xs' className='w-full h-full'>
            <button
              onClick={isCollapsed ? handleExpand : handleCollapse}
              className='pointer-events-auto group h-full w-full flex items-center justify-center cursor-pointer rounded-full transition-all ease-in-out duration-200 hover:bg-neutral-200/50'
            >
              {isCollapsed ? <ChevronLeft className='size-4' /> : <ChevronRight className='size-4' />}
            </button>
          </Magnetic>
        </div>
        <div className='relative h-full w-full'>
          {cards.map((card, index) => {
            return (
              <motion.div
                key={card.id}
                className='absolute dark:bg-black bg-white w-full h-full rounded-3xl p-4 shadow-xl border border-neutral-200 dark:border-white/[0.1] shadow-black/[0.1] dark:shadow-white/[0.05] flex flex-col justify-between'
                style={{
                  transformOrigin: 'top center'
                }}
                animate={{
                  top: index * -CARD_OFFSET,
                  scale: 1 - index * SCALE_FACTOR,
                  zIndex: cards.length - index
                }}
              >
                <div className='font-normal text-sm text-neutral-700 dark:text-neutral-200'>
                  {getTranslatedData(card.testimonial, locale)}
                </div>
                <div className='flex items-center justify-start gap-3'>
                  {card.image && (
                    <Image src={card.image} alt={card.name} width={35} height={35} className='rounded-full' />
                  )}
                  <div>
                    <p className='text-neutral-500 text-md font-medium dark:text-white'>
                      {`${card.name}${card.method ? ` (${card.method})` : ''}`}
                    </p>
                    <p className='text-neutral-400 text-sm font-normal dark:text-neutral-200'>
                      {card.company} - {card.position}
                    </p>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </BlurFade>
  )
}
