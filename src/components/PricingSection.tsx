"use client";

import { pricing } from "@/data/pricing";
import { useActiveModal } from "@/hooks/useActiveModal";
import { getTranslatedData } from "@/lib/utils";
import { useLocale, useTranslations } from "next-intl";
import { Button } from "./Button";
import { PricingCard } from "./PricingCard";

export default function PricingSection() {
  const t = useTranslations("yourProject");
  const { setActiveModal } = useActiveModal();
  const locale = useLocale();

  const openContactModal = () => {
    setActiveModal("contact");
  };

  return (
    <div className="w-full max-w-5xl space-y-8 mx-auto my-8 lg:my-18">
      <div className="text-center">
        <p className="text-sm font-semibold uppercase tracking-wider text-primary">
          {t("pricingPlans")}
        </p>
        <h1 className="mt-2 font-sans-special text-3xl font-bold tracking-tight sm:text-4xl">
          {t("pricingTitle")}
        </h1>
      </div>

      <div className="gap-[30px] flex flex-wrap">
        {pricing.map((plan: PricingPlan, index) => (
          <PricingCard
            key={index}
            buttonText={t("letsTalk")}
            onCta={openContactModal}
            title={getTranslatedData(plan.title, locale)}
            price={getTranslatedData(plan.price, locale)}
            priceDescription={
              plan.priceDescription
                ? getTranslatedData(plan.priceDescription, locale)
                : undefined
            }
            description={getTranslatedData(plan.description, locale)}
            features={
              plan.features
                ? plan.features.map((feature) =>
                    getTranslatedData(feature, locale)
                  )
                : undefined
            }
            image={plan.image}
            imageAlt={plan.imageAlt}
          />
        ))}
      </div>

      <div className="rounded-lg border bg-card p-6 text-card-foreground shadow-sm">
        <h3 className="text-xl font-semibold">{t("uniqueRequest")}</h3>
        <p className="mt-2 text-muted-foreground">
          {t("uniqueRequestDescription")}
        </p>
        <div className="mt-5 md:flex md:justify-start">
          <Button
            onClick={openContactModal}
            size="md"
            className="w-full md:w-auto"
          >
            {t("letsTalk")}
          </Button>
        </div>
      </div>
    </div>
  );
}
