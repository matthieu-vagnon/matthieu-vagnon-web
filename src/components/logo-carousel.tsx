'use client';

import { AnimatePresence, motion } from 'framer-motion';
import React, { useCallback, useEffect, useMemo, useState } from 'react';

type Logo = {
  name: string;
  id: number;
  img: React.ComponentType<React.SVGProps<SVGSVGElement>>;
};

type LogoColumnProps = {
  logos: Logo[];
  index: number;
  currentTime: number;
};

type LogoCarouselProps = {
  columnCount?: number;
  logos: Logo[];
};

const shuffleArray = <T,>(array: T[]): T[] => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

const distributeLogos = (allLogos: Logo[], columnCount: number): Logo[][] => {
  const shuffled = shuffleArray(allLogos);
  const columns: Logo[][] = Array.from({ length: columnCount }, () => []);

  shuffled.forEach((logo, index) => {
    columns[index % columnCount].push(logo);
  });

  const maxLength = Math.max(...columns.map((col) => col.length));

  columns.forEach((col) => {
    while (col.length < maxLength) {
      col.push(shuffled[Math.floor(Math.random() * shuffled.length)]);
    }
  });

  return columns;
};

const LogoColumn: React.FC<LogoColumnProps> = React.memo(
  ({ logos, index, currentTime }) => {
    const cycleInterval = 2000;
    const columnDelay = index * 200;

    const adjustedTime =
      (currentTime + columnDelay) % (cycleInterval * logos.length);

    const currentIndex = Math.floor(adjustedTime / cycleInterval);

    const CurrentLogo = useMemo(
      () => logos[currentIndex].img,
      [logos, currentIndex]
    );

    return (
      <div className='relative h-14 w-24 md:h-24 md:w-48'>
        <AnimatePresence mode='wait'>
          <motion.div
            key={`${logos[currentIndex].id}-${currentIndex}`}
            className='absolute inset-0 flex items-center justify-center'
            initial={{ y: '10%', opacity: 0, filter: 'blur(8px)' }}
            animate={{
              y: '0%',
              opacity: 1,
              filter: 'blur(0px)',
              transition: {
                type: 'spring',
                stiffness: 300,
                damping: 20,
                mass: 1,
                bounce: 0.2,
                duration: 0.5,
              },
            }}
            exit={{
              y: '-20%',
              opacity: 0,
              filter: 'blur(6px)',
              transition: {
                type: 'tween',
                ease: 'easeIn',
                duration: 0.3,
              },
            }}
          >
            <CurrentLogo className='object-contain object-center h-14 w-14 sm:h-16 sm:w-16 md:h-18 md:w-18' />
          </motion.div>
        </AnimatePresence>
      </div>
    );
  }
);
LogoColumn.displayName = 'LogoColumn';

export function LogoCarousel({ columnCount = 2, logos }: LogoCarouselProps) {
  const [logoSets, setLogoSets] = useState<Logo[][]>([]);
  const [currentTime, setCurrentTime] = useState(0);

  const updateTime = useCallback(() => {
    setCurrentTime((prevTime) => prevTime + 100);
  }, []);

  useEffect(() => {
    const intervalId = setInterval(updateTime, 100);
    return () => clearInterval(intervalId);
  }, [updateTime]);

  useEffect(() => {
    const distributedLogos = distributeLogos(logos, columnCount);
    setLogoSets(distributedLogos);
  }, [logos, columnCount]);

  return (
    <div className='flex justify-center space-x-4 py-5 overflow-visible'>
      {logoSets.map((logos, index) => (
        <LogoColumn
          key={index}
          logos={logos}
          index={index}
          currentTime={currentTime}
        />
      ))}
    </div>
  );
}

export { LogoColumn };
