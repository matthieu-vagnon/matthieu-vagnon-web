import { cn } from '@/lib/utils';
import { useTranslations } from 'next-intl';
import packageJson from '../../package.json';
import { LinkButton } from './button';
import { HyperText } from './hyper-text';
import LanguageSwitch from './language-switch';
import { Separator } from './separator';

type SeeMoreProps = {
  links: { important?: boolean; name: string; url: string }[];
  className?: string;
};

export default function SeeMore({ links, className }: SeeMoreProps) {
  const t = useTranslations('utils');

  return (
    <>
      <Separator className='my-10 sm:my-12 md:my-14' />
      <div
        className={cn(
          'flex flex-col items-center justify-center mb-28 gap-5',
          className
        )}
      >
        <div className='flex flex-col items-center justify-center gap-2'>
          <HyperText
            as='h3'
            startOnView
            delay={0}
            duration={1500}
            animateOnHover={false}
            className='font-sans-special text-lg sm:text-xl font-semibold'
          >
            {t('related')}
          </HyperText>
          <div className='flex flex-row gap-2 flex-wrap items-center justify-center'>
            {links.map((link) => (
              <LinkButton
                key={link.name}
                external
                size='sm'
                variant={link.important ? 'default' : 'outline'}
                href={link.url}
              >
                {link.name}
              </LinkButton>
            ))}
          </div>
        </div>
        <div className='text-xs text-foreground-secondary'>
          {t('madeWithLove')} - v{packageJson.version}
        </div>
        <LanguageSwitch />
      </div>
    </>
  );
}
