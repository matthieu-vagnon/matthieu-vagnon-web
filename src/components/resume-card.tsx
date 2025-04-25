'use client';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Card, CardHeader } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import {
  ChevronRightIcon,
  LucideIcon,
  SquareArrowOutUpRight,
} from 'lucide-react';
import Link from 'next/link';
import React from 'react';

interface ResumeCardProps {
  logoUrl?: string;
  altText: string;
  title: string;
  subtitle?: string;
  href?: string;
  badges?: readonly string[];
  period: string;
  description?: React.ReactNode;
  indicator?: LucideIcon;
  secondaryBadges?: readonly string[];
}

const ResumeCardContent = ({
  isExpanded,
  indicator: Indicator = ChevronRightIcon,
  ...props
}: ResumeCardProps & { isExpanded: boolean }) => {
  const {
    logoUrl,
    altText,
    title,
    subtitle,
    badges,
    period,
    description,
    secondaryBadges,
  } = props;
  return (
    <Card className='flex'>
      <div className='flex-none'>
        <Avatar className='border size-12 m-auto bg-muted-background'>
          <AvatarImage src={logoUrl} alt={altText} className='object-contain' />
          <AvatarFallback>{altText[0]}</AvatarFallback>
        </Avatar>
      </div>
      <div className='flex-grow ml-4 items-center flex-col group'>
        <CardHeader>
          <div className='flex flex-wrap items-center justify-between gap-x-6 gap-y-1 text-base'>
            <h3 className='relative inline-flex flex-wrap gap-x-1 gap-y-1 items-center justify-start font-semibold leading-none text-xs sm:text-sm'>
              {title}
              {badges && (
                <span className='inline-flex flex-wrap gap-1'>
                  {badges.map((badge, index) => (
                    <Badge
                      variant='secondary'
                      className='align-middle text-xs'
                      key={index}
                    >
                      {badge}
                    </Badge>
                  ))}
                </span>
              )}
              <Indicator
                className={cn(
                  'size-4 absolute -right-4 translate-x-0 transform opacity-0 transition-all duration-300 ease-out group-hover:translate-x-1 group-hover:opacity-100',
                  isExpanded ? 'rotate-90' : 'rotate-0'
                )}
              />
            </h3>
            <div className='text-xs sm:text-sm tabular-nums text-muted-foreground text-right'>
              {period}
            </div>
          </div>
          {subtitle && <div className='font-sans text-xs'>{subtitle}</div>}
        </CardHeader>
        {description && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{
              opacity: isExpanded ? 1 : 0,

              height: isExpanded ? 'auto' : 0,
            }}
            transition={{
              duration: 0.7,
              ease: [0.16, 1, 0.3, 1],
            }}
            className='mt-2 text-xs sm:text-sm flex flex-col gap-2 pointer-events-none'
          >
            <span>{description}</span>
            {secondaryBadges && (
              <div className='flex flex-wrap gap-1'>
                {secondaryBadges.map((badge, index) => (
                  <Badge
                    key={index}
                    variant='secondary'
                    className='align-middle text-xs'
                  >
                    {badge}
                  </Badge>
                ))}
              </div>
            )}
          </motion.div>
        )}
      </div>
    </Card>
  );
};

export const ResumeCard = (props: ResumeCardProps) => {
  const { href, description } = props;
  const [isExpanded, setIsExpanded] = React.useState(false);

  const handleClick = () => {
    if (description) {
      setIsExpanded(!isExpanded);
    }
  };

  return href ? (
    <Link
      href={href}
      className='text-left cursor-pointer'
      onClick={handleClick}
      target='_blank'
    >
      <ResumeCardContent
        isExpanded={isExpanded}
        indicator={SquareArrowOutUpRight}
        {...props}
      />
    </Link>
  ) : (
    <button onClick={handleClick} className='text-left cursor-pointer'>
      <ResumeCardContent isExpanded={isExpanded} {...props} />
    </button>
  );
};
