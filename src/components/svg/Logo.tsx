import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
};

export default function Logo({ className }: LogoProps) {
  return (
    <svg
      className={cn("h-8 sm:h-10 md:h-12 rounded-sm", className)}
      viewBox="0 0 800 800"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="800" height="800" fill="var(--main-dark)" />
      <rect y="650" width="800" height="150" fill="var(--main)" />
    </svg>
  );
}
