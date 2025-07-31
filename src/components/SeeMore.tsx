import { cn, getTranslatedData } from "@/lib/utils";
import { useLocale, useTranslations } from "next-intl";
import packageJson from "../../package.json";
import { LinkButton } from "./Button";
import { HyperText } from "./HyperText";
import LanguageSwitch from "./LanguageSwitch";
import { Separator } from "./Separator";

type SeeMoreProps = {
  socials?: {
    title: string;
    img?: React.ReactNode;
    link: {
      en?: string;
      fr?: string;
      ja?: string;
    };
    important?: boolean;
  }[];
  className?: string;
};

export default function SeeMore({ socials = [], className }: SeeMoreProps) {
  const t = useTranslations("utils");
  const locale = useLocale();

  return (
    <>
      <Separator className="my-10 sm:my-12 md:my-14" />
      <div
        className={cn(
          "flex flex-col items-center justify-center mb-28 gap-5",
          className
        )}
      >
        <div className="flex flex-col items-center justify-center gap-2">
          <HyperText
            as="h3"
            startOnView
            delay={0}
            duration={1500}
            animateOnHover={false}
            className="font-sans-special text-lg sm:text-xl font-semibold"
          >
            {t("related")}
          </HyperText>
          <div className="flex flex-row gap-2 flex-wrap items-center justify-center">
            {socials &&
              socials.map((social) => (
                <LinkButton
                  key={social.title}
                  external
                  size="sm"
                  variant={social.important ? "default" : "outline"}
                  href={getTranslatedData(social.link, locale)}
                >
                  {social.img}
                  {social.title}
                </LinkButton>
              ))}
          </div>
        </div>
        <div className="text-xs text-foreground-secondary">
          {t("madeWithLove")} - v{packageJson.version}
        </div>
        <LanguageSwitch />
      </div>
    </>
  );
}
