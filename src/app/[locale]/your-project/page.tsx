import { BlurFade } from "@/components/BlurFade";
import Header from "@/components/Header";
import PricingSection from "@/components/PricingSection";
import SeeMore from "@/components/SeeMore";
import { ShaderAnimation } from "@/components/ShaderAnimation";
import TestimonialsStatusWrapper from "@/components/TestimonialsStatusWrapper";
import { profile } from "@/data/profile";
import { useTranslations } from "next-intl";

export default function Profile() {
  const t = useTranslations("yourProject");

  let blurDelay = 0;

  return (
    <TestimonialsStatusWrapper shouldCollapse={true}>
      <BlurFade>
        <Header />
      </BlurFade>
      <BlurFade delay={blurDelay++ / 10}>
        <div className="relative flex h-[200px] sm:h-[400px] lg:h-[600px] min-h-50 sm:min-h-60 lg:min-h-70 max-h-[calc(100svh-225px)] w-full flex-col items-center justify-center overflow-hidden rounded-xl border bg-blue-700">
          <ShaderAnimation />
          <div className="px-10 absolute pointer-events-none z-10 text-center flex flex-col gap-y-4 items-center">
            <span className="leading-none font-sans-special tracking-tighter whitespace-pre-wrap font-semibold text-white text-2xl sm:text-4xl lg:text-7xl">
              {t("title")}
            </span>
            <span className="text-gray-300 text-sm sm:text-md lg:text-xl">
              {t("description")}
            </span>
          </div>
        </div>
      </BlurFade>
      <div className="flex flex-col gap-12 sm:gap-14 md:gap-16">
        <BlurFade delay={blurDelay++ / 10}>
          <PricingSection />
        </BlurFade>
      </div>
      <BlurFade delay={blurDelay++ / 10}>
        <SeeMore
          socials={[
            profile.socials.linkedin,
            profile.socials.x,
            profile.socials.facebook,
            profile.socials.malt,
          ]}
        />
      </BlurFade>
    </TestimonialsStatusWrapper>
  );
}
