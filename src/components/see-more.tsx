import { cn } from '@/lib/utils'
import { LinkButton } from './ui/button'

export default function SeeMore({ links, className }: { links: { name: string; url: string }[]; className?: string }) {
  return (
    <div className={cn('flex flex-col items-center justify-center gap-2', className)}>
      <h3 className='font-sans-special text-lg sm:text-xl font-semibold'>Related Links</h3>
      <div className='flex flex-row gap-2'>
        {links.map((link) => (
          <LinkButton key={link.name} external variant='outline' href={link.url}>
            {link.name}
          </LinkButton>
        ))}
      </div>
    </div>
  )
}
