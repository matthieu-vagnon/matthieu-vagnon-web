"use client";

import { infoBand } from "@/data/infoBand";
import { cn, getTranslatedData } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { useLocale, useTranslations } from "next-intl";
import { useState } from "react";
import { LinkButton } from "./Button";

const DURATION = 7500;

export default function InfoBand({ className }: { className?: string }) {
  const [item, setItem] = useState(0);
  const locale = useLocale();
  const t = useTranslations();

  const infoBands = infoBand.length;
  const infoBandItem = infoBand[item];
  const InfoBandIcon = infoBandItem?.icon;
  const infoBandText = infoBandItem?.text;
  const infoBandUrl = getTranslatedData(infoBandItem.url, locale);

  const handleNextItem = () => {
    setItem((prev) => {
      if (prev === infoBands - 1) return 0;
      else return prev + 1;
    });
  };

  if (infoBand.length < 1) return null;

  return (
    <>
      <div className="h-18" />
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
        <motion.div
          layout
          transition={{
            type: "spring",
            damping: 30,
            stiffness: 400,
          }}
          className={cn(
            "px-3 py-2 rounded-lg transition-none! relative group overflow-hidden bg-main items-center text-main-foreground font-medium text-sm sm:text-lg",
            className
          )}
        >
          <AnimatePresence mode="popLayout" initial={false}>
            <motion.span
              key={item}
              layout="position"
              initial={{ opacity: 0, filter: "blur(3px)" }}
              animate={{ opacity: 1, filter: "blur(0px)" }}
              exit={{ opacity: 0, filter: "blur(3px)" }}
              transition={{
                duration: 0.33,
                ease: "easeInOut",
              }}
              className="line-clamp-2"
            >
              {InfoBandIcon && (
                <InfoBandIcon className="inline-flex size-3 sm:size-4 mb-0.5 mr-1 sm:mr-1.5" />
              )}
              {getTranslatedData(infoBandText, locale)}
              {infoBandUrl && (
                <LinkButton
                  href={infoBandUrl}
                  external
                  className="ml-1 sm:ml-1.5"
                >
                  {t("utils.seeMore")}
                </LinkButton>
              )}
            </motion.span>
          </AnimatePresence>
          <div
            key={item}
            className="absolute bottom-0 left-0 h-1 bg-main-dark group-hover:paused!"
            onAnimationEnd={handleNextItem}
            style={{
              animation: `progress-loading ${DURATION}ms linear forwards`,
            }}
          />
        </motion.div>
      </div>
    </>
  );
}
