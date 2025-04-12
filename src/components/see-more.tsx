import { cn } from '@/lib/utils'
import React from 'react'
import { HyperText } from './magicui/hyper-text'
import { LinkButton } from './ui/button'
import { Separator } from './ui/separator'

export default function SeeMore({
  links,
  className
}: {
  links: { important?: boolean; name: string; url: string }[]
  className?: string
}) {
  return (
    <React.Fragment>
      <Separator className='my-10 sm:my-12 md:my-14' />
      <div className={cn('flex flex-col items-center justify-center mb-28 gap-5', className)}>
        <div className='flex flex-col items-center justify-center gap-2'>
          <HyperText
            as='h3'
            startOnView
            delay={0}
            duration={2000}
            animateOnHover={false}
            className='font-sans-special text-lg sm:text-xl font-semibold'
          >
            Related Links
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
        <div className='text-xs text-gray-500'>Made with ❤️ by Matthieu Vagnon</div>
      </div>
    </React.Fragment>
  )
}
