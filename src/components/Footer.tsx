import {
  Accordion,
  AccordionHeader,
  AccordionItem,
  AccordionPanel,
  AccordionTrigger,
} from "@/components/Accordion";
import { useMessages, useTranslations } from "next-intl";
import packageJson from "../../package.json";
import { HyperText } from "./HyperText";
import LanguageSwitch from "./LanguageSwitch";

export default function Footer() {
  const t = useTranslations("utils");
  const messages = useMessages();
  const faqQuestions = messages.utils.faq.questions;
  const questionKeys = Object.keys(faqQuestions);

  return (
    <div className="mb-18 flex flex-col gap-y-14 w-full justify-center items-center py-10">
      <div className="flex flex-col gap-y-2 w-full max-w-2xl items-center justify-center">
        <HyperText
          as="h3"
          startOnView
          delay={0}
          duration={1500}
          animateOnHover={false}
          className="font-sans-special text-lg sm:text-xl font-semibold"
        >
          {t("faq.title")}
        </HyperText>
        <Accordion variant="outline" className="w-full">
          {questionKeys.map((key) => (
            <AccordionItem key={key} value={`faq-${key}`}>
              <AccordionHeader>
                <AccordionTrigger>
                  {t(`faq.questions.${key}.question`)}
                </AccordionTrigger>
              </AccordionHeader>
              <AccordionPanel>
                {t(`faq.questions.${key}.answer`)}
              </AccordionPanel>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
      <div className="flex flex-col gap-y-2 items-center justify-center">
        <div className="text-xs text-foreground-secondary">
          {t("madeWithLove")} - v{packageJson.version}
        </div>
        <LanguageSwitch />
      </div>
    </div>
  );
}
