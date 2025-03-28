import { cn } from '@/lib/utils'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import Link, { LinkProps } from 'next/link'
import * as React from 'react'
import { Magnetic } from './magnetic'

const buttonVariants = cva(
  "hover:cursor-pointer inline-flex items-center justify-center rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default: 'bg-primary text-primary-foreground shadow-xs hover:bg-primary/90',
        destructive:
          'bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60',
        outline:
          'border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50',
        secondary: 'bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80',
        ghost: 'hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50',
        link: 'hover:bg-transparent hover:text-accent-foreground dark:hover:bg-transparent dark:hover:text-accent-foreground underline'
      },
      size: {
        default: 'min-h-9 px-2 sm:px-4 py-2 gap-2',
        sm: 'min-h-8 py-2 rounded-md gap-1.5 px-2 sm:px-3 gap-2',
        lg: 'min-h-10 py-2 rounded-md px-4 sm:px-6 gap-2',
        icon: 'size-8 gap-2',
        inline: 'p-0 gap-0'
      }
    },
    defaultVariants: {
      variant: 'default',
      size: 'default'
    }
  }
)

function ButtonWrapper({ children, size }: { children: React.ReactNode } & VariantProps<typeof buttonVariants>) {
  return (
    <div className={cn(size === 'inline' && 'inline-block')}>
      <Magnetic
        range={1000}
        springOptions={{ bounce: 0 }}
        intensity={size === 'lg' ? 0.05 : size === 'icon' ? 0.2 : 0.1}
      >
        <div className='cursor-pointer'>{children}</div>
      </Magnetic>
    </div>
  )
}

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<'button'> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : 'button'

  return (
    <ButtonWrapper size={size}>
      <Comp data-slot='button' className={cn(buttonVariants({ variant, size, className }))} {...props} />
    </ButtonWrapper>
  )
}

function LinkButton({
  className,
  variant,
  size,
  href,
  external = false,
  noExternalIndicator = false,
  children,
  ...props
}: LinkProps &
  React.ComponentProps<'a'> &
  VariantProps<typeof buttonVariants> & {
    href: string
    external?: boolean
    noExternalIndicator?: boolean
  }) {
  return (
    <ButtonWrapper size={size}>
      <Link
        href={href}
        target={external ? '_blank' : '_self'}
        className={cn(buttonVariants({ variant, size, className }))}
        {...props}
      >
        {children}
        {external && !noExternalIndicator && (
          <svg
            width='15'
            height='15'
            viewBox='0 0 15 15'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
            className='h-3 w-3'
          >
            <path
              d='M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6465L10.2929 4L6 4C5.72386 4 5.5 3.77614 5.5 3.5C5.5 3.22386 5.72386 3 6 3L11.5 3C11.6326 3 11.7598 3.05268 11.8536 3.14645C11.9473 3.24022 12 3.36739 12 3.5L12 9.00001C12 9.27615 11.7761 9.50001 11.5 9.50001C11.2239 9.50001 11 9.27615 11 9.00001V4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z'
              fill='currentColor'
              fillRule='evenodd'
              clipRule='evenodd'
            ></path>
          </svg>
        )}
      </Link>
    </ButtonWrapper>
  )
}

export { Button, buttonVariants, LinkButton }
