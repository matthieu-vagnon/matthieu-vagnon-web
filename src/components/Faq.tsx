import {
  Accordion,
  AccordionHeader,
  AccordionItem,
  AccordionPanel,
  AccordionTrigger,
} from "@/components/Accordion";
import { cn } from "@/lib/utils";
import { useMessages, useTranslations } from "next-intl";
import { HyperText } from "./HyperText";

type FaqProps = {
  className?: string;
};

export default function Faq({ className }: FaqProps) {
  const t = useTranslations("utils");
  const messages = useMessages();
  const faqQuestions = messages.utils.faq.questions;
  const questionKeys = Object.keys(faqQuestions);

  return (
    <div
      className={cn(
        "flex flex-col gap-y-2 w-full justify-center items-center",
        className
      )}
    >
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
      <Accordion variant="outline" className="w-full max-w-xl">
        {questionKeys.map((key) => (
          <AccordionItem key={key} value={`faq-${key}`}>
            <AccordionHeader>
              <AccordionTrigger>
                {t(`faq.questions.${key}.question`)}
              </AccordionTrigger>
            </AccordionHeader>
            <AccordionPanel>{t(`faq.questions.${key}.answer`)}</AccordionPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
