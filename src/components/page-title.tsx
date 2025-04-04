import { cn } from '@/lib/utils'

export default function PageTitle({
  title,
  description,
  className
}: {
  title: string
  description: string
  className?: string
}) {
  return (
    <div className={cn('flex flex-col items-center justify-center', className)}>
      <h1 className='text-center text-2xl sm:text-3xl md:text-4xl font-bold font-sans-special'>{title}</h1>
      <h2 className='text-base md:text-lg font-sans-special text-center mt-2 text-gray-500'>{description}</h2>
    </div>
  )
}
