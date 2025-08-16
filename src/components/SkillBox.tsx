import { cn } from "@/lib/utils";
import Highlight from "./Highlight";

type SkillBoxProps = {
  icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  items:
    | string[]
    | {
        techIcon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
        name: string;
      }[];
  accent?: boolean;
  className?: string;
};

export default function SkillBox({
  icon: Icon,
  title,
  items,
  accent,
  className,
}: SkillBoxProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-3 bg-accent p-4 rounded-lg cursor-default overflow-hidden transition-all duration-300",
        accent && "bg-main/10",
        className
      )}
    >
      <span className="text-sm font-bold flex flex-row items-center gap-1.5 text-accent-foreground">
        {Icon &&
          (accent ? (
            <Icon strokeWidth={0} className="size-4 fill-accent-foreground" />
          ) : (
            <Icon strokeWidth={3} className="size-3 stroke-accent-foreground" />
          ))}
        {title}
      </span>
      <div className="flex flex-row flex-wrap gap-2">
        {items.map((item, index) => (
          <Highlight key={index} color={!accent ? "gray" : undefined}>
            {typeof item === "string" ? (
              item
            ) : (
              <span className="flex gap-x-2 items-center">
                {<item.techIcon className="size-4" />}
                {item.name}
              </span>
            )}
          </Highlight>
        ))}
      </div>
    </div>
  );
}
