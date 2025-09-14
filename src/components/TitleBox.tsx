"use client";

import { profile } from "@/data/profile";
import { getTranslatedData } from "@/lib/utils";
import { LayoutGroup, motion } from "framer-motion";
import { useLocale, useMessages, useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";
import { BlurFade } from "./BlurFade";
import { LinkButton } from "./Button";
import { MainCard, MainCardContent } from "./MainCard";
import Logo from "./svg/Logo";
import { TextRotate } from "./TextRotate";

export default function TitleBox() {
  const t = useTranslations("home.titleBox");
  const messages = useMessages();
  const locale = useLocale();
  const socialLinks = profile.socials || {};

  return (
    <LayoutGroup>
      <motion.div
        layout
        transition={{ type: "spring", damping: 30, stiffness: 400 }}
      >
        <div className="flex w-full justify-center items-center flex-col gap-8 md:gap-10">
          <motion.span
            layout
            transition={{ type: "spring", damping: 30, stiffness: 400 }}
          >
            <MainCard variant="dots" className="h-fit w-fit bg-background">
              <MainCardContent className="flex flex-col gap-1 md:gap-3 whitespace-pre items-center font-sans-special text-xl sm:text-3xl md:text-4xl translate-y-[6px]">
                <motion.span
                  layout
                  transition={{ type: "spring", damping: 30, stiffness: 400 }}
                  className="flex mb-2"
                >
                  <Logo />
                </motion.span>
                <motion.span
                  layout
                  transition={{ type: "spring", damping: 30, stiffness: 400 }}
                >
                  {t.rich("name", {
                    strong: (chunks: React.ReactNode) => (
                      <span className="font-bold">{chunks}</span>
                    ),
                  })}
                </motion.span>
                <span className="flex items-center justify-center flex-wrap gap-y-2 mt-1 md:mt-2">
                  <motion.span
                    layout
                    transition={{
                      type: "spring",
                      damping: 30,
                      stiffness: 400,
                    }}
                  >
                    {t("job.prefix")}
                  </motion.span>
                  <TextRotate
                    texts={Object.keys(messages.home.titleBox.job.skills).map(
                      (key) => messages.home.titleBox.job.skills[key]
                    )}
                    mainClassName={`z-1 px-2 sm:px-2 md:px-3 bg-main text-main-foreground overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg`}
                    staggerFrom={"last"}
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    exit={{ y: "-120%" }}
                    staggerDuration={0.025}
                    splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                    transition={{
                      type: "spring",
                      damping: 30,
                      stiffness: 400,
                    }}
                    rotationInterval={3000}
                    noWrap
                  />
                  <motion.span
                    layout
                    transition={{
                      type: "spring",
                      damping: 30,
                      stiffness: 400,
                    }}
                  >
                    {t("job.suffix")}
                  </motion.span>
                </span>
              </MainCardContent>
            </MainCard>
          </motion.span>
          <motion.span
            layout
            transition={{ type: "spring", damping: 30, stiffness: 400 }}
            className="mt-4"
          >
            <div className="flex items-center justify-center gap-3 flex-wrap">
              {Object.values(socialLinks).map((social, index) => (
                <BlurFade delay={index * 0.3} key={social.title}>
                  <LinkButton
                    variant="secondary"
                    size="sm"
                    href={getTranslatedData(social.link, locale)}
                    external
                    className="hover:bg-accent-foreground hover:text-accent rounded-full px-4 py-1"
                  >
                    {social.img}
                    {social.title}
                  </LinkButton>
                </BlurFade>
              ))}
            </div>
          </motion.span>
          <motion.span
            layout
            transition={{ type: "spring", damping: 30, stiffness: 400 }}
            className="flex flex-col gap-y-2"
          >
            <span className="text-center font-sans-special font-medium text-md sm:text-lg md:text-xl text-foreground-secondary">
              {t("subtitle")}
            </span>
            <div className="h-12 flex gap-4 justify-center items-center">
              <Image
                src="/they-trust-me/totalenergies.png"
                alt="TotalEnergies"
                height={48}
                width={1000}
                className="object-contain h-full w-auto"
              />
              <Image
                src="/they-trust-me/ccifj.png"
                alt="CCIFJ"
                height={48}
                width={1000}
                className="object-contain h-full w-auto"
              />
            </div>
          </motion.span>
        </div>
      </motion.div>
    </LayoutGroup>
  );
}
