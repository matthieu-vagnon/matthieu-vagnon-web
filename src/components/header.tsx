import Logo from './logo'
import { LinkButton } from './ui/button'

export default function Header() {
  return (
    <div className='flex flex-nowrap gap-2 justify-between items-center w-full pb-8 sm:pb-10 pt-6 sm:pt-8 md:pt-10'>
      <Logo />
      <div className='whitespace-nowrap'>
        <span>Check out public repo{` `}</span>
        <LinkButton
          href='https://github.com/matthieu-vagnon/matthieu-vagnon-web'
          external
          variant='link'
          size='xs'
          isInline
          className='text-base'
        >
          here
        </LinkButton>
      </div>
    </div>
  )
}
