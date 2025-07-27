import { cn } from "@/lib/utils";
import { BadgeCheck } from "lucide-react";
import { useTranslations } from "next-intl";
import { LinkButton } from "./Button";

export default function InfoBand({ className }: { className?: string }) {
  const t = useTranslations();

  if (!t.has("infoBand") || !t.has("infoBand.text") || !t.has("infoBand.url"))
    return null;

  return (
    <div
      className={cn(
        "w-full p-1.5 flex items-center justify-center rounded-lg bg-main",
        className
      )}
    >
      <span className="text-main-foreground font-medium text-md sm:text-lg text-center gap-2">
        {t.rich("infoBand.text", {
          verif: () => <BadgeCheck className="inline mr-1 mb-0.5 w-4 h-4" />,
          a: (chunks) => (
            <LinkButton
              external
              noMagnetic
              href={t("infoBand.url")}
              target="_blank"
              rel="noopener noreferrer"
            >
              {chunks}
            </LinkButton>
          ),
        })}
      </span>
    </div>
  );
}
