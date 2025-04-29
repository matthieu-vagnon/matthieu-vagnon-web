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
    default: 'bg-main-light text-main-dark',
    emerald: 'bg-emerald-100 text-emerald-700',
    gray: 'bg-gray-200 text-gray-700',
  };

  return (
    <span
      className={cn(`font-bold px-1 py-0.5`, colorVariants[color], className)}
    >
      {children}
    </span>
  );
};

export default Highlight;
