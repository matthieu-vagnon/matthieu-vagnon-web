"use client";

import { Button } from "@/components/Button";
import { cn } from "@/lib/utils";
import { motion, Variants } from "framer-motion";
import { Diamond } from "lucide-react";
import { useTranslations } from "next-intl";
import Image, { StaticImageData } from "next/image";
import * as React from "react";

interface PricingCardProps {
  title: string;
  price?: string;
  priceDescription?: string;
  description: string;
  features?: string[];
  buttonText: string;
  image?: StaticImageData;
  imageAlt?: string;
  onCta?: () => void;
  className?: string;
}

const imageVariants: Variants = {
  initial: { scale: 1, rotate: 0 },
  hover: {
    scale: 1.1,
    rotate: -5,
    transition: { type: "spring", stiffness: 300, damping: 20 },
  },
};

const PricingCard = React.forwardRef<HTMLDivElement, PricingCardProps>(
  (
    {
      className,
      title,
      price,
      priceDescription,
      description,
      features,
      buttonText,
      image,
      imageAlt,
      onCta,
      ...props
    },
    ref
  ) => {
    const t = useTranslations("yourProject");

    return (
      <motion.div
        ref={ref}
        initial="initial"
        whileHover="hover"
        className={cn(
          "relative flex-1 min-w-82 flex flex-col justify-between rounded-lg border bg-card p-6 text-card-foreground shadow-sm transition-shadow duration-300",
          className
        )}
        {...props}
      >
        <div className="flex flex-col space-y-4">
          <div className="flex justify-between items-start">
            <div className="flex-1">
              <h3 className="text-xl font-semibold">{title}</h3>
              {price && (
                <div className="mt-2">
                  <span className="text-4xl font-bold font-sans-special">
                    {price}
                  </span>
                  <p className="text-sm text-muted-foreground">
                    {priceDescription}
                  </p>
                </div>
              )}
            </div>
            {image && (
              <motion.div className="select-none" variants={imageVariants}>
                <Image
                  quality={100}
                  src={image}
                  alt={imageAlt || title}
                  width={250}
                  height={250}
                  className="h-20 w-20"
                />
              </motion.div>
            )}
          </div>

          <p className="text-muted-foreground">{description}</p>

          {features && (
            <ul className="space-y-2 pt-4">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center gap-2">
                  <Diamond className="h-4 w-4 text-primary" />
                  <span className="text-sm flex-1">{feature}</span>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="mt-6 flex flex-col gap-y-3">
          <Button size="lg" className="w-full" onClick={onCta}>
            {buttonText}
          </Button>
          <span className="leading-none text-sm italic text-muted-foreground/66">
            {t("startFast")}
          </span>
        </div>
      </motion.div>
    );
  }
);
PricingCard.displayName = "PricingCard";

export { PricingCard };
