'use client';

import { useTestimonialsStatus } from '@/hooks/use-testimonials-status';
import { cn, getTranslatedData } from '@/lib/utils';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useLocale } from 'next-intl';
import { useEffect, useState } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from './avatar';
import { BlurFade } from './blur-fade';
import { Magnetic } from './magnetic';

let interval: NodeJS.Timeout;

export const CardStack = ({
  items,
  offset,
  scaleFactor,
}: {
  items: Testimonial[];
  offset?: number;
  scaleFactor?: number;
}) => {
  const CARD_OFFSET = offset || 10;
  const SCALE_FACTOR = scaleFactor || 0.06;
  const [cards, setCards] = useState<Testimonial[]>(items);
  const { isCollapsed, setIsCollapsed } = useTestimonialsStatus();
  const locale = useLocale();

  const startFlipping = () => {
    interval = setInterval(() => {
      setCards((prevCards: Testimonial[]) => {
        const newArray = [...prevCards];
        newArray.unshift(newArray.pop()!);
        return newArray;
      });
    }, 15000);
  };

  const handleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  const handleExpand = () => {
    setIsCollapsed(false);
  };

  useEffect(() => {
    startFlipping();

    return () => clearInterval(interval);
  }, []);

  return (
    <BlurFade
      delay={1}
      className={cn(
        'fixed bottom-25 right-10 z-99',
        isCollapsed && 'pointer-events-none'
      )}
    >
      <div
        className={cn(
          'w-120 h-57 justify-center items-center gap-2 hidden md:flex transition-all ease-[cubic-bezier(.17,.67,.49,1.32)] duration-400',
          isCollapsed && 'translate-x-107'
        )}
      >
        <div className='h-full w-5'>
          <Magnetic size='xs' className='w-full h-full'>
            <button
              onClick={isCollapsed ? handleExpand : handleCollapse}
              className='pointer-events-auto group h-full w-full flex items-center justify-center cursor-pointer rounded-full transition-all ease-in-out duration-200 hover:bg-neutral-200/50'
            >
              {isCollapsed ? (
                <ChevronLeft className='size-4' />
              ) : (
                <ChevronRight className='size-4' />
              )}
            </button>
          </Magnetic>
        </div>
        <div
          className={cn(
            'relative transition-opacity ease-in-out duration-200 h-full w-full',
            isCollapsed && 'hover:opacity-25 pointer-events-auto cursor-default'
          )}
        >
          {cards.map((card, index) => {
            return (
              <motion.div
                key={card.id}
                className='absolute bg-white w-full h-full rounded-3xl p-4 shadow-xl border border-neutral-200 shadow-black/[0.1] flex flex-col justify-between'
                style={{
                  transformOrigin: 'top center',
                }}
                animate={{
                  top: index * -CARD_OFFSET,
                  scale: 1 - index * SCALE_FACTOR,
                  zIndex: cards.length - index,
                }}
              >
                <div className='font-normal text-sm text-neutral-700 overflow-hidden text-ellipsis line-clamp-7'>
                  {getTranslatedData(card.testimonial, locale)}
                </div>
                <div className='flex items-center justify-start gap-3'>
                  <Avatar className='border size-9 bg-muted-background'>
                    <AvatarImage
                      src={card.image?.src ?? undefined}
                      alt={card.name}
                      className='object-contain'
                    />
                    <AvatarFallback>{card.name[0]}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className='text-neutral-500 text-md font-medium'>
                      {`${card.name}${card.method ? ` (${card.method})` : ''}`}
                    </p>
                    <p className='text-neutral-400 text-sm font-normal'>
                      {card.company} - {card.position}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </BlurFade>
  );
};
