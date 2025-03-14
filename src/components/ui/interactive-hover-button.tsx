import { cn } from '@/lib/utils'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import React from 'react'

interface InteractiveHoverButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string
  variant?: 'previous' | 'next'
}

const InteractiveHoverButton = React.forwardRef<HTMLButtonElement, InteractiveHoverButtonProps>(
  ({ variant = 'next', className, children, ...props }, ref) => {
    if (variant === 'previous') {
      return (
        <button
          ref={ref}
          className={cn(
            'group relative w-fit cursor-pointer overflow-hidden rounded-full border bg-background py-2 px-8 text-center font-semibold',
            className
          )}
          {...props}
        >
          <span className='inline-block translate-x-2 transition-all duration-300 group-hover:translate-x-12 group-hover:opacity-0'>
            {children}
          </span>
          <div className='absolute left-0 top-0 z-10 flex h-full w-full translate-x-12 items-center justify-center gap-2 text-primary-foreground opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100'>
            <ArrowLeft />
            <span>{children}</span>
          </div>
          <div className='absolute left-5 -translate-y-1/2 top-1/2 h-2 w-2 scale-[1] rounded-lg bg-primary transition-all duration-300 group-hover:h-full group-hover:w-full group-hover:scale-[1.8] group-hover:bg-primary'></div>
        </button>
      )
    }

    if (variant === 'next') {
      return (
        <button
          ref={ref}
          className={cn(
            'group relative w-fit cursor-pointer overflow-hidden rounded-full border bg-background py-2 px-8 text-center font-semibold',
            className
          )}
          {...props}
        >
          <span className='inline-block -translate-x-2 transition-all duration-300 group-hover:-translate-x-12 group-hover:opacity-0'>
            {children}
          </span>
          <div className='absolute right-0 top-0 z-10 flex h-full w-full -translate-x-12 items-center justify-center gap-2 text-primary-foreground opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100'>
            <span>{children}</span>
            <ArrowRight />
          </div>
          <div className='absolute right-5 -translate-y-1/2 top-1/2 h-2 w-2 scale-[1] rounded-lg bg-primary transition-all duration-300 group-hover:h-full group-hover:w-full group-hover:scale-[1.8] group-hover:bg-primary'></div>
        </button>
      )
    }
  }
)

InteractiveHoverButton.displayName = 'InteractiveHoverButton'

export { InteractiveHoverButton }
