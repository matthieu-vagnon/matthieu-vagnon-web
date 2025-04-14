import { cn } from '@/lib/utils'

const Highlight = ({
  children,
  className,
  color = 'emerald'
}: {
  children: React.ReactNode
  className?: string
  color?: string
}) => {
  const colorVariants: Record<string, string> = {
    default: 'bg-main-light text-main-dark',
    emerald: 'bg-emerald-100 text-emerald-700',
    red: 'bg-red-100 text-red-700',
    gray: 'bg-gray-100 text-gray-700'
  }

  return <span className={cn(`font-bold px-1 py-0.5`, colorVariants[color], className)}>{children}</span>
}

export default Highlight
