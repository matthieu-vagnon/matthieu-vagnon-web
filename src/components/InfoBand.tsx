import { cn } from "@/lib/utils";
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
      <span className="text-main-foreground font-medium text-md sm:text-lg text-center">
        {t.rich("infoBand.text", {
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
