"use client";

import { cn } from "@/lib/utils";
import { BadgeCheck, FoldVertical, UnfoldVertical } from "lucide-react";
import { useTranslations } from "next-intl";
import { useEffect, useRef, useState } from "react";
import { LinkButton } from "./Button";
import { ProgressiveBlur } from "./ProgressiveBlur";

export default function InfoBand({ className }: { className?: string }) {
  const t = useTranslations();
  const textRef = useRef<HTMLSpanElement>(null);
  const [isTruncated, setIsTruncated] = useState(false);
  const infoBandText = t("infoBand.text");
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const checkTruncation = () => {
      if (textRef.current) {
        setIsTruncated(
          textRef.current.scrollWidth > textRef.current.clientWidth
        );
      }
    };

    checkTruncation();
    window.addEventListener("resize", checkTruncation);

    return () => {
      window.removeEventListener("resize", checkTruncation);
    };
  }, [infoBandText]);

  const toggleExpand = () => {
    setIsExpanded((prev) => !prev);
  };

  if (!t.has("infoBand") || !t.has("infoBand.text") || !t.has("infoBand.url"))
    return null;

  return (
    <div className="sticky top-4 left-0 w-full px-4 pb-4 z-99">
      <ProgressiveBlur
        blurIntensity={0.66}
        direction="top"
        className="fixed top-0 left-0 pointer-events-none h-22 sm:h-28 w-full -z-1"
      />
      <div
        className={cn(
          "w-full py-2 px-3 flex gap-x-2 items-start justify-center rounded-lg z-99 bg-main",
          className
        )}
      >
        <span
          ref={textRef}
          className={cn(
            "text-center text-main-foreground font-medium text-sm sm:text-lg gap-2 relative text-ellipsis overflow-hidden grow",
            isExpanded ? "" : "whitespace-nowrap"
          )}
        >
          {t.rich("infoBand.text", {
            verif: () => (
              <BadgeCheck className="inline align-middle mr-0.5 sm:mr-1 size-3 sm:size-4" />
            ),
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
        {isTruncated && (
          <button
            onClick={toggleExpand}
            className="flex items-center px-0.5 sm:px-1 py-1 sm:py-1.5"
          >
            {isExpanded ? (
              <FoldVertical className="size-3 sm:size-4" />
            ) : (
              <UnfoldVertical className="size-3 sm:size-4" />
            )}
          </button>
        )}
      </div>
    </div>
  );
}
