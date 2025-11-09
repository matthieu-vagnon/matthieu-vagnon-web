import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/Tooltip";
import { cn } from "@/lib/utils";
import { Info } from "lucide-react";
import Highlight from "./Highlight";

type SkillBoxProps = {
  icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  tooltip?: string;
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
  tooltip,
  items,
  accent,
  className,
}: SkillBoxProps) {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <div
          className={cn(
            "flex relative group flex-col gap-3 bg-accent p-4 rounded-lg overflow-hidden transition-all duration-300",
            accent && "bg-main/10",
            className
          )}
        >
          {tooltip && (
            <Info className="absolute top-3 right-3 size-3.5 text-muted-foreground transition-color duration-200 group-hover:text-accent-foreground" />
          )}
          <span className="text-sm font-bold flex flex-row items-center gap-1.5 text-accent-foreground">
            {Icon &&
              (accent ? (
                <Icon
                  strokeWidth={0}
                  className="size-4 fill-accent-foreground"
                />
              ) : (
                <Icon
                  strokeWidth={3}
                  className="size-3 stroke-accent-foreground"
                />
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
      </TooltipTrigger>
      {tooltip && <TooltipContent>{tooltip}</TooltipContent>}
    </Tooltip>
  );
}
