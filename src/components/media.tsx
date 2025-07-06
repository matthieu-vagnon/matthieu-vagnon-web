'use client';

import { cn, getTranslatedData } from '@/lib/utils';
import { Dialog } from '@radix-ui/react-dialog';
import { PlayIcon, Subtitles, Volume1 } from 'lucide-react';
import { Locale, useLocale } from 'next-intl';
import Image, { StaticImageData } from 'next/image';
import { useState } from 'react';
import Magnetic, { MagneticSize } from './magnetic';
import MediaView from './MediaView';
import { Separator } from './separator';
import { Tilt } from './Tilt';

export type Media = (
  | {
      image: StaticImageData;
      src?: never;
      previewImage?: never;
      audio?: never;
      subtitle?: never;
    }
  | {
      image?: never;
      src: string;
      previewImage: StaticImageData;
      audio?: Locale;
      subtitle?: Locale[];
    }
) & {
  title: {
    en?: string;
    fr?: string;
    ja?: string;
  };
  slug?: string;
};

type MediaProps = {
  media: Media;
  isTilt?: boolean;
  size?: MagneticSize;
  width?: number;
  height?: number;
  quality?: number;
  isOpen?: boolean;
  noCopy?: boolean;
  className?: string;
};

type MediaButtonProps = {
  media: Media;
  isTilt?: boolean;
  size?: MagneticSize;
  width?: number;
  height?: number;
  quality?: number;
  className?: string;
  onClick?: () => void;
};

export default function Media({
  media,
  isTilt = false,
  size,
  width,
  height,
  quality,
  isOpen: initialOpenStatus = false,
  className,
}: MediaProps) {
  const [isOpen, setIsOpen] = useState(initialOpenStatus);

  const handleOpenChange = (open: boolean) => {
    setIsOpen(open);
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleOpenChange}>
      <MediaButton
        media={media}
        isTilt={isTilt}
        size={size}
        width={width}
        height={height}
        quality={quality}
        className={className}
        onClick={() => setIsOpen(true)}
      />
      <MediaView medias={[media]} index={0} isOpen={isOpen} />
    </Dialog>
  );
}

export function MediaButton({
  media,
  isTilt = false,
  size = 'lg',
  width,
  height,
  quality = 50,
  onClick,
  className,
}: MediaButtonProps) {
  const locale = useLocale();
  const title = getTranslatedData(media.title, locale) as string;

  const imageComponent = (
    <Image
      src={media.image ?? media.previewImage}
      placeholder='blur'
      alt={title}
      width={width}
      height={height}
      quality={quality}
      className='rounded-lg group-hover:shadow-lg transition-all duration-300'
    />
  );

  return (
    <Magnetic size={size}>
      <button
        onClick={onClick}
        className={cn(
          'group relative cursor-pointer transition-all duration-300',
          className
        )}
      >
        {isTilt ? (
          <Tilt
            rotationFactor={10}
            isReverse
            style={{
              transformOrigin: 'center center',
            }}
            springOptions={{
              stiffness: 150,
              damping: 15,
              mass: 0.2,
            }}
          >
            {imageComponent}
          </Tilt>
        ) : (
          imageComponent
        )}
        {media.previewImage && (
          <div className='absolute bg-foreground/20 group-hover:bg-foreground/40 transition-all duration-300 right-2 bottom-2 backdrop-blur-md rounded-md p-2 flex items-center gap-x-2'>
            {media.audio && (
              <>
                <div className='flex items-center gap-x-1'>
                  <Volume1 className='w-4 h-4 text-background' />
                  <span className='text-[10px] text-background'>
                    {media.audio.toUpperCase()}
                  </span>
                </div>
                <Separator
                  orientation='vertical'
                  className='h-4 bg-background/25'
                />
              </>
            )}
            {media.subtitle && (
              <>
                <div className='flex items-center gap-x-1'>
                  <Subtitles className='w-4 h-4 text-background' />
                  <span className='text-[10px] text-background'>
                    {media.subtitle.join(' · ').toUpperCase()}
                  </span>
                </div>
                <Separator
                  orientation='vertical'
                  className='h-4 bg-background/25'
                />
              </>
            )}
            <PlayIcon className='w-4 h-4 text-background' />
          </div>
        )}
      </button>
    </Magnetic>
  );
}
