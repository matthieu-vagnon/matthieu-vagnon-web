import { Link } from "@/i18n/navigation";
import { cn } from "@/lib/utils";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { ArrowUpRight } from "lucide-react";
import * as React from "react";
import Magnetic from "./Magnetic";

type ButtonProps = React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
    noMagnetic?: boolean;
    isInline?: boolean;
  };

type LinkButtonProps = React.ComponentProps<"a"> &
  VariantProps<typeof buttonVariants> & {
    href: string;
    locale?: string;
    external?: boolean;
    noExternalIndicator?: boolean;
    noMagnetic?: boolean;
    disabled?: boolean;
    isInline?: boolean;
  };

const buttonVariants = cva(
  "hover:cursor-pointer inline-flex items-center justify-center rounded-md font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow-xs hover:bg-primary/90 text-sm",
        destructive:
          "bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 text-sm",
        outline:
          "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground text-sm",
        secondary:
          "bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80 text-sm",
        ghost: "hover:bg-accent hover:text-accent-foreground text-sm",
        link: "underline underline-offset-4 hover:opacity-80 block",
      },
      size: {
        xs: "gap-1",
        sm: "min-h-8 py-2 rounded-md gap-1.5 px-2 sm:px-3 gap-2",
        md: "min-h-9 px-4 py-2 gap-2",
        lg: "min-h-10 py-2 rounded-md px-4 sm:px-6 gap-2",
      },
    },
  }
);

function ButtonWrapper({
  children,
  size,
  disabled,
  isInline,
}: {
  children: React.ReactNode;
  disabled?: boolean;
  isInline?: boolean;
} & VariantProps<typeof buttonVariants>) {
  return (
    <Magnetic
      disabled={disabled}
      size={size ?? undefined}
      className={cn(isInline && "inline-block")}
    >
      {children}
    </Magnetic>
  );
}

function Button({
  className,
  variant = "default",
  size = "sm",
  isInline = false,
  asChild = false,
  noMagnetic = false,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : "button";

  return (
    <ButtonWrapper
      size={size}
      isInline={isInline}
      disabled={props.disabled || noMagnetic}
    >
      <Comp
        data-slot="button"
        className={cn(buttonVariants({ variant, size, className }))}
        {...props}
      />
    </ButtonWrapper>
  );
}

function LinkButton({
  className,
  variant = "link",
  size = "xs",
  isInline = true,
  href,
  locale,
  external = false,
  noExternalIndicator = false,
  noMagnetic = false,
  children,
  disabled = false,
  ...props
}: LinkButtonProps) {
  return (
    <ButtonWrapper
      size={size}
      isInline={isInline}
      disabled={disabled || noMagnetic}
    >
      <Link
        href={href}
        locale={locale}
        target={external ? "_blank" : "_self"}
        className={cn(
          "cursor-pointer",
          disabled && "pointer-events-none opacity-50",
          buttonVariants({ variant, size, className })
        )}
        {...props}
      >
        {children}
        {external && !noExternalIndicator && (
          <ArrowUpRight className="size-4 ml-0.5 inline align-text-baseline" />
        )}
      </Link>
    </ButtonWrapper>
  );
}

export { Button, buttonVariants, LinkButton };
