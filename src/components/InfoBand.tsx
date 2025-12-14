"use client";

import { infoBand } from "@/data/infoBand";
import { cn, getTranslatedData } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion"; // Import Framer Motion
import { useLocale } from "next-intl";
import { useState } from "react";
import { LinkButton } from "./Button";
import { ProgressiveBlur } from "./ProgressiveBlur";

const MotionLinkButton = motion(LinkButton);

const DURATION = 5000;

export default function InfoBand({ className }: { className?: string }) {
  const [item, setItem] = useState(0);
  const locale = useLocale();

  const infoBands = infoBand.length;
  const infoBandItem = infoBand[item];
  const infoBandUrl = getTranslatedData(infoBandItem?.url, locale);
  const InfoBandIcon = infoBandItem?.icon;
  const infoBandText = infoBandItem?.text;

  const handleNextItem = () => {
    setItem((prev) => {
      if (prev === infoBands - 1) return 0;
      else return prev + 1;
    });
  };

  if (infoBand.length < 1) return null;

  return (
    <>
      <div className="h-16" />
      <ProgressiveBlur
        blurIntensity={0.33}
        direction="top"
        className="fixed top-0 left-0 pointer-events-none h-32 w-full z-1"
      />
      <div className="fixed top-4 left-0 px-4 z-99">
        <style jsx global>{`
          @keyframes progress-loading {
            from {
              width: 0%;
            }
            to {
              width: 100%;
            }
          }
        `}</style>
        <MotionLinkButton
          href={infoBandUrl ? infoBandUrl : "#"}
          noMagnetic={!infoBandUrl}
          noExternalIndicator={!infoBandUrl}
          external={!!infoBandUrl}
          size="lg"
          layout
          transition={{
            type: "spring",
            damping: 30,
            stiffness: 400,
          }}
          className={cn(
            "px-3! transition-none! relative group overflow-hidden cursor-default! flex gap-x-1.5 bg-main items-center text-main-foreground font-medium text-sm sm:text-lg no-underline! opacity-100!",
            className
          )}
        >
          <div className="relative z-10 flex items-center gap-x-1.5">
            <AnimatePresence mode="popLayout" initial={false}>
              <motion.div
                key={item}
                layout="position"
                initial={{ opacity: 0, filter: "blur(3px)" }}
                animate={{ opacity: 1, filter: "blur(0px)" }}
                exit={{ opacity: 0, filter: "blur(3px)" }}
                transition={{
                  duration: 0.33,
                  ease: "easeInOut",
                }}
                className="flex items-center gap-x-2 origin-left"
              >
                {InfoBandIcon && (
                  <InfoBandIcon className="inline-flex size-3 sm:size-4 mb-0.5" />
                )}
                {getTranslatedData(infoBandText, locale)}
              </motion.div>
            </AnimatePresence>
          </div>
          <div
            key={item}
            className="absolute bottom-0 left-0 h-1 bg-main-dark group-hover:paused!"
            onAnimationEnd={handleNextItem}
            style={{
              animation: `progress-loading ${DURATION}ms linear forwards`,
            }}
          />
        </MotionLinkButton>
      </div>
    </>
  );
}
