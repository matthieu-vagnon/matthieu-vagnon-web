import React from 'react'
import { LinkButton } from './ui/button'

export default function SeeMore({ links }: { links: { name: string; url: string }[] }) {
  return (
    <React.Fragment>
      <div className='flex flex-col items-center justify-center gap-2 mt-10 sm:mt-12 md:mt-14'>
        <h3 className='font-sans-special text-lg sm:text-xl font-semibold'>More Informations on</h3>
        <div className='flex flex-row gap-2'>
          {links.map((link) => (
            <LinkButton key={link.name} external variant='outline' href={link.url}>
              {link.name}
            </LinkButton>
          ))}
        </div>
      </div>
    </React.Fragment>
  )
}
