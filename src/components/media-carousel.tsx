'use client';

import { Dialog } from '@radix-ui/react-dialog';
import { useState } from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from './carousel';
import { MediaButton, Media as MediaType } from './media';
import MediaView from './media-view';

type MediaCarouselProps = {
  medias: MediaType[];
  isOpenSlug?: string;
};

export function MediaCarousel({ medias, isOpenSlug }: MediaCarouselProps) {
  const [isOpen, setIsOpen] = useState(isOpenSlug ? true : false);

  const [currentIndex, setCurrentIndex] = useState(
    isOpenSlug ? medias.findIndex((media) => media.slug === isOpenSlug) : 0
  );

  return (
    <>
      <Carousel opts={{ align: 'start' }} className='w-full flex flex-col'>
        <CarouselContent>
          {medias.map((element, index) => (
            <CarouselItem
              key={index}
              className='basis-full sm:basis-1/2 md:basis-1/3 xl:basis-1/4 pb-4 flex items-center justify-center'
            >
              <MediaButton
                onClick={() => {
                  setCurrentIndex(index);
                  setIsOpen(true);
                }}
                media={element}
                className='cursor-[inherit] active:cursor-[inherit]'
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className='flex flex-row gap-x-3 flex-nowrap items-center justify-start'>
          <CarouselPrevious />
          <CarouselNext />
        </div>
      </Carousel>
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <MediaView
          medias={medias}
          index={currentIndex}
          setCurrentIndex={setCurrentIndex}
        />
      </Dialog>
    </>
  );
}
