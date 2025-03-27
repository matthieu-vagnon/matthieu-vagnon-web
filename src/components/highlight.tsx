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
    emerald: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-700/[0.2] dark:text-emerald-500',
    blue: 'bg-blue-100 text-blue-700 dark:bg-blue-700/[0.2] dark:text-blue-500'
  }

  return <span className={cn(`font-bold px-1 py-0.5`, colorVariants[color], className)}>{children}</span>
}

export default Highlight
