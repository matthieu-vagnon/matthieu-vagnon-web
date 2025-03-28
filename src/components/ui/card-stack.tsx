'use client'

import { useTestimonialsCollapsed } from '@/hooks/use-testimonials-collapsed'
import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useEffect, useState } from 'react'

let interval: NodeJS.Timeout

type Card = {
  id: number
  name: string
  designation: string
  content: React.ReactNode
}

export const CardStack = ({ items, offset, scaleFactor }: { items: Card[]; offset?: number; scaleFactor?: number }) => {
  const CARD_OFFSET = offset || 10
  const SCALE_FACTOR = scaleFactor || 0.06
  const [cards, setCards] = useState<Card[]>(items)
  const { isCollapsed, setIsCollapsed } = useTestimonialsCollapsed()

  const startFlipping = () => {
    interval = setInterval(() => {
      setCards((prevCards: Card[]) => {
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
    <div
      className={cn(
        'w-120 h-60 justify-center items-center gap-2 transition-all ease-[cubic-bezier(.13,.66,.33,1.3)] duration-400 fixed hidden md:flex bottom-20 right-20',
        isCollapsed && 'translate-x-[100%]'
      )}
    >
      <div className='h-full w-5'>
        <button
          onClick={isCollapsed ? handleExpand : handleCollapse}
          className='group h-full w-full flex items-center justify-center cursor-pointer rounded-full transition-all ease-in-out duration-200 hover:bg-neutral-200/50'
        >
          {isCollapsed ? (
            <ChevronLeft className='size-4 transition-all ease-in-out duration-200 translate-x-0.5 group-hover:translate-x-0' />
          ) : (
            <ChevronRight className='size-4 transition-all ease-in-out duration-200 -translate-x-0.5 group-hover:translate-x-0' />
          )}
        </button>
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
              <div className='font-normal text-sm text-neutral-700 dark:text-neutral-200'>{card.content}</div>
              <div>
                <p className='text-neutral-500 text-md font-medium dark:text-white'>{card.name}</p>
                <p className='text-neutral-400 text-sm font-normal dark:text-neutral-200'>{card.designation}</p>
              </div>
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}
