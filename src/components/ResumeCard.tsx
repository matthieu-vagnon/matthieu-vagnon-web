'use client';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/Avatar';
import { Card, CardHeader } from '@/components/Card';
import { cn, getTranslatedData } from '@/lib/utils';
import { motion } from 'framer-motion';
import {
  ChevronRightIcon,
  LucideIcon,
  SquareArrowOutUpRight,
} from 'lucide-react';
import { useLocale, useTranslations } from 'next-intl';
import Link from 'next/link';
import React from 'react';
import { Badge } from './Badge';
import Highlight from './Highlight';

type ResumeCardProps = {
  logoUrl?: string;
  altText: string;
  title: string;
  subtitle?: string;
  href?: string;
  badges?: readonly string[];
  period: string;
  indicator?: LucideIcon;
  secondaryBadges?: readonly string[];
  projects?: {
    title: {
      en?: string;
      fr?: string;
      ja?: string;
    };
    description?: {
      en?: string;
      fr?: string;
      ja?: string;
    }[];
    responsibilities: {
      en?: string;
      fr?: string;
      ja?: string;
    }[];
    technologies: string[];
  }[];
  isOpen?: boolean;
};

const ResumeCardContent = ({
  isExpanded,
  indicator: Indicator = ChevronRightIcon,
  ...props
}: ResumeCardProps & { isExpanded: boolean }) => {
  const { logoUrl, altText, title, subtitle, badges, period, projects } = props;
  const t = useTranslations('profile');
  const locale = useLocale();

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
          {subtitle && (
            <div className='font-sans text-xs text-muted-foreground'>
              {subtitle}
            </div>
          )}
        </CardHeader>
        {projects && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{
              opacity: isExpanded ? 1 : 0,
              height: isExpanded ? 'auto' : 0,
              overflow: isExpanded ? 'visible' : 'hidden',
            }}
            transition={{
              duration: 0.7,
              ease: [0.16, 1, 0.3, 1],
            }}
            className='mt-2 text-xs sm:text-sm flex flex-col gap-y-5 pointer-events-none text-foreground-secondary'
          >
            {projects.map((project, index) => (
              <div key={index} className='flex flex-col gap-y-2'>
                <span>
                  <Highlight>
                    {getTranslatedData(project.title, locale) as string}
                  </Highlight>
                </span>
                {project.description && (
                  <ul className='list-[upper-roman] list-outside flex flex-col gap-y-1'>
                    {project.description.map((element, i) => {
                      return (
                        <li key={i}>{getTranslatedData(element, locale)}</li>
                      );
                    })}
                  </ul>
                )}
                <span className='font-medium italic'>
                  {t('responsibilities')}
                </span>
                <ul className='list-[upper-roman] list-outside flex flex-col gap-y-1'>
                  {project.responsibilities.map((element, i) => {
                    return (
                      <li key={i}>{getTranslatedData(element, locale)}</li>
                    );
                  })}
                </ul>
                {project.technologies && (
                  <div className='flex flex-wrap gap-1'>
                    {project.technologies.map((badge, index) => (
                      <Highlight color='gray' key={index}>
                        {badge}
                      </Highlight>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </motion.div>
        )}
      </div>
    </Card>
  );
};

export const ResumeCard = (props: ResumeCardProps) => {
  const { href, projects, isOpen = false } = props;
  const [isExpanded, setIsExpanded] = React.useState(isOpen);

  const handleClick = () => {
    if (projects && projects.length > 0) {
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
