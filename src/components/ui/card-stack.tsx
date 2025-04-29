'use client';

import { useTestimonialsStatus } from '@/hooks/use-testimonials-status';
import { cn, getTranslatedData } from '@/lib/utils';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Languages } from 'lucide-react';
import { useLocale, useTranslations } from 'next-intl';
import { useEffect, useState } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from './avatar';
import { BlurFade } from './blur-fade';
import { Button } from './button';
import Magnetic from './magnetic';

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
  const t = useTranslations('utils');
  const [original, setOriginal] = useState<boolean>(false);

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

  const handleOriginal = () => {
    setOriginal(!original);
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
          <Magnetic size='lg' className='w-full h-full'>
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
                <span className='font-normal text-sm text-foreground-secondary overflow-hidden text-ellipsis line-clamp-7'>
                  {original
                    ? card.testimonial[
                        card.testimonial
                          .original as keyof typeof card.testimonial
                      ]
                    : getTranslatedData(card.testimonial, locale)}
                </span>
                <div className='flex items-center justify-start gap-3'>
                  <Avatar className='border size-9 bg-muted-background'>
                    <AvatarImage
                      src={card.image?.src ?? undefined}
                      alt={card.name}
                      className='object-contain'
                    />
                    <AvatarFallback>{card.name[0]}</AvatarFallback>
                  </Avatar>
                  <div className='flex items-center justify-between w-full'>
                    <div>
                      <p className='text-foreground-secondary text-md font-medium overflow-hidden text-ellipsis line-clamp-1'>
                        {`${card.name}${
                          card.method ? ` (${card.method})` : ''
                        }`}
                      </p>
                      <p className='text-muted-foreground text-sm font-normal overflow-hidden text-ellipsis line-clamp-1'>
                        {card.company} - {card.position}
                      </p>
                    </div>
                    {card.testimonial[
                      locale as keyof typeof card.testimonial
                    ] &&
                      card.testimonial.original !== locale && (
                        <div className='ml-2 mb-1 mt-1'>
                          <Button
                            variant='ghost'
                            size='sm'
                            onClick={handleOriginal}
                            className='group gap-2 p-1 text-muted-foreground'
                          >
                            {original ? (
                              <span className='flex items-center gap-2 whitespace-nowrap'>
                                <Languages className='size-4' />
                                {t('translate')}
                              </span>
                            ) : (
                              <span className='flex items-center gap-2 whitespace-nowrap'>
                                <span className='px-1 border border-muted-foreground group-hover:border-foreground transition-border duration-200 rounded-sm text-[10px]'>
                                  {card.testimonial.original.toUpperCase()}
                                </span>
                                {t('original')}
                              </span>
                            )}
                          </Button>
                        </div>
                      )}
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
