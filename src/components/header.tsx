import { LinkButton } from './ui/button'

export default function Header() {
  return (
    <div className='flex flex-nowrap gap-2 justify-between items-center w-full py-4 sm:py-6 md:py-8'>
      <svg className='h-8 sm:h-10 md:h-12' viewBox='0 0 800 800' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <rect width='800' height='800' fill='#001428' />
        <rect y='650' width='800' height='150' fill='#007FFF' />
      </svg>
      <div className='whitespace-nowrap'>
        <span>Check out public repo{` `}</span>
        <LinkButton
          href='https://github.com/matthieu-vagnon/matthieu-vagnon-web'
          external
          variant='link'
          size='inline'
          className='text-base'
        >
          here
        </LinkButton>
      </div>
    </div>
  )
}
