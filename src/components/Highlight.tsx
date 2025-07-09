import { cn } from '@/lib/utils';

type HighlightProps = {
  children: React.ReactNode;
  className?: string;
  color?: string;
};

const Highlight = ({
  children,
  className,
  color = 'default',
}: HighlightProps) => {
  const colorVariants: Record<string, string> = {
    default: 'shadow-main/15 text-main-dark',
    emerald: 'shadow-emerald-100/50 text-emerald-700',
    gray: 'shadow-gray-200/66 text-gray-700',
  };

  return (
    <span
      className={cn(
        `font-bold px-1 py-0 shadow-[inset_0_-0.7em]`,
        colorVariants[color],
        className
      )}
    >
      {children}
    </span>
  );
};

export default Highlight;
