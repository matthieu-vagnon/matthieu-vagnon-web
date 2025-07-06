import { useTranslations } from 'next-intl';
import { LinkButton } from './Button';
import Logo from './svg/logo';

export default function Header() {
  const t = useTranslations('utils');

  return (
    <div className='flex flex-nowrap gap-2 justify-between items-center w-full pb-8 sm:pb-10 pt-6 sm:pt-8 md:pt-10'>
      <Logo />
      <div className='whitespace-nowrap'>
        <span>{t('repo')}</span>
        <LinkButton
          href='https://github.com/matthieu-vagnon/matthieu-vagnon-web'
          external
          variant='link'
          size='xs'
          isInline
          className='text-base'
        >
          {t('here')}
        </LinkButton>
      </div>
    </div>
  );
}
