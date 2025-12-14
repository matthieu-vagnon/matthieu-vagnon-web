"use client";

import { infoBand } from "@/data/infoBand";
import { cn, getTranslatedData } from "@/lib/utils";
import { useLocale } from "next-intl";
import { useState } from "react";
import { BlurFade } from "./BlurFade";

export default function InfoBand({ className }: { className?: string }) {
  const [item, setItem] = useState(0);
  const locale = useLocale();

  const infoBandItem = infoBand[item];
  const InfoBandIcon = infoBandItem.icon;
  const infoBandText = infoBandItem.text;

  if (infoBand.length < 1) return null;

  return (
    <BlurFade className="w-full pt-5 sm:pt-8">
      <div
        className={cn(
          "py-2 px-3 flex gap-x-1.5 items-baseline rounded-lg w-full bg-main",
          className
        )}
      >
        <span className="text-center flex-1 text-main-foreground font-medium text-sm sm:text-lg">
          {InfoBandIcon && (
            <InfoBandIcon className="inline-flex size-3 sm:size-4 mr-1 sm:mr-1.5 mb-0.5" />
          )}
          {getTranslatedData(infoBandText, locale)}
        </span>
      </div>
    </BlurFade>
  );
}
