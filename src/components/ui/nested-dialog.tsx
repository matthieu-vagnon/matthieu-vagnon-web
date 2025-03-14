'use client'

import { cn } from '@/lib/utils'
import * as DialogPrimitive from '@radix-ui/react-dialog'
import { X } from 'lucide-react'
import * as React from 'react'

interface DialogContextValue {
  innerOpen: boolean
  setInnerOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const DialogContext = React.createContext<DialogContextValue | undefined>(undefined)

function Dialog({ children }: { children: React.ReactNode }) {
  const [outerOpen, setOuterOpen] = React.useState(false)
  const [innerOpen, setInnerOpen] = React.useState(false)
  return (
    <DialogContext.Provider value={{ innerOpen, setInnerOpen }}>
      <DialogPrimitive.Root open={outerOpen} onOpenChange={setOuterOpen}>
        {children}
      </DialogPrimitive.Root>
    </DialogContext.Provider>
  )
}

const DialogTrigger = DialogPrimitive.Trigger
const DialogPortal = DialogPrimitive.Portal
const DialogClose = DialogPrimitive.Close
const DialogOverlay = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Overlay
    ref={ref}
    className={cn(
      'fixed inset-0 z-50 bg-background/40 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
      className
    )}
    {...props}
  />
))
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName

const DialogContent = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>
>(({ className, children, ...props }, ref) => {
  const context = React.useContext(DialogContext)
  if (!context) throw new Error('DialogContent must be used within a Dialog')
  return (
    <DialogPortal>
      <DialogOverlay />
      <DialogPrimitive.Content
        ref={ref}
        className={cn(
          'fixed left-1/2 top-1/2 z-50 grid w-full max-w-lg -translate-x-1/2 -translate-y-1/2 gap-4 rounded-lg border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-bottom-1/2 data-[state=open]:slide-in-from-bottom-1/2 sm:rounded-lg',
          context.innerOpen && 'translate-y-[-60%] translate-x-[-60%] scale-[0.97]',
          className
        )}
        {...props}
      >
        {children}
        <DialogClose className='hover:cursor-pointer absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground'>
          <X className='h-4 w-4' />
          <span className='sr-only'>Close</span>
        </DialogClose>
      </DialogPrimitive.Content>
    </DialogPortal>
  )
})
DialogContent.displayName = DialogPrimitive.Content.displayName

function InnerDialog({ children }: { children: React.ReactNode }) {
  const context = React.useContext(DialogContext)
  if (!context) throw new Error('InnerDialog must be used within a Dialog')
  React.useEffect(() => {
    const handleEscapeKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && context.innerOpen) {
        context.setInnerOpen(false)
        event.stopPropagation()
      }
    }
    document.addEventListener('keydown', handleEscapeKeyDown)
    return () => {
      document.removeEventListener('keydown', handleEscapeKeyDown)
    }
  }, [context.innerOpen, context.setInnerOpen])
  return (
    <DialogPrimitive.Root open={context.innerOpen} onOpenChange={context.setInnerOpen}>
      {children}
    </DialogPrimitive.Root>
  )
}

const InnerDialogTrigger = DialogPrimitive.Trigger

const InnerDialogContent = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>
>(({ className, children, draggable = false, ...props }, ref) => {
  const context = React.useContext(DialogContext)
  if (!context) throw new Error('InnerDialogContent must be used within a Dialog')
  const [isDragging, setIsDragging] = React.useState(false)
  const [startY, setStartY] = React.useState(0)
  const [currentY, setCurrentY] = React.useState(0)
  const contentRef = React.useRef<HTMLDivElement>(null)
  React.useEffect(() => {
    if (context.innerOpen) {
      setCurrentY(0)
    }
  }, [context.innerOpen])
  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!draggable) return
    setIsDragging(true)
    setStartY(e.clientY - currentY)
    e.currentTarget.setPointerCapture(e.pointerId)
  }
  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDragging || !draggable) return
    const newY = e.clientY - startY
    setCurrentY(newY > 0 ? newY : 0)
  }
  const handlePointerUp = () => {
    if (!draggable) return
    setIsDragging(false)
    if (currentY > (contentRef.current?.offsetHeight || 0) / 2) {
      context.setInnerOpen(false)
    } else {
      setCurrentY(0)
    }
  }
  return (
    <DialogPortal>
      <DialogPrimitive.Content
        ref={ref}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        className={cn(
          'fixed left-1/2 top-1/2 z-[60] grid w-full max-w-lg -translate-x-1/2 -translate-y-1/2 gap-4 rounded-lg border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-bottom-1/2 data-[state=open]:slide-in-from-bottom-1/2',
          className
        )}
        {...props}
      >
        <div ref={contentRef}>{children}</div>
        <DialogClose className='hover:cursor-pointer absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground'>
          <X className='h-4 w-4' />
          <span className='sr-only'>Close</span>
        </DialogClose>
      </DialogPrimitive.Content>
    </DialogPortal>
  )
})
InnerDialogContent.displayName = 'InnerDialogContent'

const InnerDialogHeader = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn('flex flex-col space-y-1.5 text-center sm:text-left', className)} {...props} />
)
InnerDialogHeader.displayName = 'InnerDialogHeader'

const InnerDialogFooter = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn('flex flex-col-reverse sm:flex-row sm:space-x-2', className)} {...props} />
)
InnerDialogFooter.displayName = 'InnerDialogFooter'

const InnerDialogTitle = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Title
    ref={ref}
    className={cn('text-lg font-semibold leading-none tracking-tight', className)}
    {...props}
  />
))
InnerDialogTitle.displayName = 'InnerDialogTitle'

const InnerDialogDescription = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Description ref={ref} className={cn('text-sm text-muted-foreground', className)} {...props} />
))
InnerDialogDescription.displayName = 'InnerDialogDescription'

const DialogHeader = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn('flex flex-col space-y-1.5 text-center sm:text-left', className)} {...props} />
)
DialogHeader.displayName = 'DialogHeader'

const DialogFooter = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn('flex flex-col-reverse sm:flex-row sm:space-x-2', className)} {...props} />
)
DialogFooter.displayName = 'DialogFooter'

const DialogTitle = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Title
    ref={ref}
    className={cn('text-lg font-semibold leading-none tracking-tight', className)}
    {...props}
  />
))
DialogTitle.displayName = DialogPrimitive.Title.displayName

const DialogDescription = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Description ref={ref} className={cn('text-sm text-muted-foreground', className)} {...props} />
))
DialogDescription.displayName = DialogPrimitive.Description.displayName

export {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
  DialogTrigger,
  InnerDialog,
  InnerDialogContent,
  InnerDialogDescription,
  InnerDialogFooter,
  InnerDialogHeader,
  InnerDialogTitle,
  InnerDialogTrigger
}
