"use client";

import { profile } from "@/data/profile";
import { getTranslatedData } from "@/lib/utils";
import { LayoutGroup, motion, Transition } from "framer-motion";
import { useLocale, useMessages, useTranslations } from "next-intl";
import Image from "next/image";
import { BlurFade } from "./BlurFade";
import { LinkButton } from "./Button";
import { MainCard, MainCardContent } from "./MainCard";
import { TextRotate } from "./TextRotate";
import Logo from "./svg/Logo";

const MOTION_TRANSITION: Transition = {
  type: "spring",
  damping: 30,
  stiffness: 400,
};

export default function TitleBox() {
  const t = useTranslations("home.titleBox");
  const messages = useMessages();
  const locale = useLocale();
  const socialLinks = profile.socials || {};

  return (
    <LayoutGroup>
      <div className="flex w-full justify-center items-center flex-col gap-8 md:gap-10">
        <motion.div layout="position" transition={MOTION_TRANSITION}>
          <Logo className="hover:rotate-360 transition-transform duration-300 rounded-sm" />
        </motion.div>
        <motion.span layout transition={MOTION_TRANSITION}>
          <MainCard variant="dots" className="h-fit w-fit bg-background">
            <MainCardContent className="flex flex-col gap-1 md:gap-3 whitespace-pre items-center font-sans-special text-center text-xl sm:text-2xl md:text-3xl">
              <span className="flex items-center justify-center flex-wrap gap-y-2 mt-1 md:mt-2">
                <motion.span layout="position" transition={MOTION_TRANSITION}>
                  {t("job.prefix")}
                </motion.span>
                <TextRotate
                  texts={Object.keys(messages.home.titleBox.job.skills).map(
                    (key) => messages.home.titleBox.job.skills[key]
                  )}
                  mainClassName={`z-1 px-2 font-semibold sm:px-2 md:px-3 bg-main text-main-foreground overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg`}
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
                <motion.span layout="position" transition={MOTION_TRANSITION}>
                  {t("job.suffix")}
                </motion.span>
              </span>
              <motion.span layout="position" transition={MOTION_TRANSITION}>
                <span className="font-handwriting text-2xl sm:text-3xl md:text-4xl">
                  {t("secondLine")}
                </span>
              </motion.span>
            </MainCardContent>
          </MainCard>
        </motion.span>
        <motion.span
          layout="position"
          transition={MOTION_TRANSITION}
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
          layout="position"
          transition={MOTION_TRANSITION}
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
    </LayoutGroup>
  );
}
