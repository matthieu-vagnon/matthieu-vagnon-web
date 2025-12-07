import { BlurFade } from "@/components/BlurFade";
import { FeaturesSectionWithHoverEffects } from "@/components/FeaturesSectionWithHoverEffects";
import Header from "@/components/Header";
import Media from "@/components/Media";
import PageTitle from "@/components/PageTitle";
import { ResumeCard } from "@/components/ResumeCard";
import SectionTitle from "@/components/SectionTitle";
import SeeMore from "@/components/SeeMore";
import { Separator } from "@/components/Separator";
import SkillBox from "@/components/SkillBox";
import PageDecoration from "@/components/svg/PageDecoration";
import TestimonialsStatusWrapper from "@/components/TestimonialsStatusWrapper";
import { profile } from "@/data/profile";
import { getTranslatedData } from "@/lib/utils";
import { Quote } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";

export default function Profile() {
  const t = useTranslations();
  const locale = useLocale();
  let blurDelay = 0;

  return (
    <TestimonialsStatusWrapper shouldCollapse={true}>
      <BlurFade>
        <Header />
      </BlurFade>
      <BlurFade delay={blurDelay++ / 10}>
        <PageTitle
          title={t("profile.title")}
          description={t("profile.description")}
        />
      </BlurFade>
      <div className="flex flex-col gap-12 sm:gap-14 md:gap-16">
        <BlurFade delay={blurDelay++ / 10}>
          <SectionTitle title={t("profile.about")} />
          <div className="flex mt-5 gap-x-10">
            <div className="flex flex-col items-center md:flex-row gap-5 lg:max-w-4/5 xl:max-w-2/3">
              <Media
                width={288}
                media={{
                  image: profile.businessCard.image,
                  title: profile.businessCard.title,
                }}
                isTilt
                size="md"
                className="w-56 md:w-64 lg:w-72"
              />
              <div className="relative text-lg lg:text-xl italic">
                <Quote
                  strokeWidth={0}
                  className="size-25 -z-1 fill-foreground/5 absolute -top-5 -left-3"
                />
                <span className="text-base md:text-lg text-foreground-secondary flex flex-col gap-3 px-3">
                  {getTranslatedData(profile.about, locale)}
                </span>
              </div>
            </div>
            <div className="relative hidden lg:block w-33">
              <div className="absolute inset-y-0 right-0 w-11 bg-gradient-to-l from-background to-transparent" />
              <PageDecoration className="h-full w-full" />
            </div>
          </div>
        </BlurFade>
        <BlurFade delay={blurDelay++ / 10}>
          <SectionTitle title={t("profile.method")} />
          <FeaturesSectionWithHoverEffects feat={profile.features} />
        </BlurFade>
        <BlurFade delay={blurDelay++ / 10} className="gap-y-8 flex flex-col">
          <div className="flex flex-col">
            <SectionTitle title={t("profile.stackTitle")} />
            <span className="text-foreground italic">
              {t("profile.stackDescription")}
            </span>
          </div>
          <div className="flex flex-row gap-2 sm:gap-3 flex-wrap [&>*]:flex-auto">
            {profile.stack.map((el, index) => (
              <SkillBox
                key={index}
                icon={el.icon}
                title={getTranslatedData(el.title, locale)}
                tooltip={getTranslatedData(el.tooltip, locale)}
                items={el.tech}
                accent={el.accent}
              />
            ))}
          </div>
        </BlurFade>
        <BlurFade delay={blurDelay++ / 10}>
          <div className="flex flex-row flex-wrap justify-between gap-y-12 sm:gap-y-14 md:gap-y-16">
            <div className="flex min-h-0 flex-col gap-y-3 basis-full md:basis-[calc(50%-2rem)]">
              <SectionTitle title={t("profile.work")} />
              <div className="flex flex-col gap-y-5">
                {profile.experience.map((experience, index) => (
                  <ResumeCard
                    key={index}
                    logoUrl={experience.logo?.src}
                    altText={experience.company}
                    title={experience.company}
                    subtitle={
                      getTranslatedData(experience.position, locale) as string
                    }
                    period={experience.timeline}
                    projects={experience.projects}
                    isOpen={experience.timeline.trim().endsWith("now")}
                  />
                ))}
              </div>
            </div>
            <Separator
              orientation="vertical"
              className="h-auto hidden md:block"
            />
            <div className="flex min-h-0 flex-col gap-y-3 basis-full md:basis-[calc(50%-2rem)]">
              <SectionTitle title={t("profile.education")} />
              <div className="flex flex-col gap-y-6">
                {profile.education.map((education, index) => (
                  <ResumeCard
                    key={index}
                    href={education.href}
                    logoUrl={education.logo?.src}
                    altText={education.responsible}
                    title={education.responsible}
                    subtitle={
                      getTranslatedData(education.degree, locale) as string
                    }
                    badges={getTranslatedData(education.type, locale)}
                    period={education.timeline}
                  />
                ))}
              </div>
            </div>
          </div>
        </BlurFade>
      </div>
      <BlurFade delay={blurDelay++ / 10}>
        <SeeMore socials={[profile.socials.linkedin, profile.socials.malt]} />
      </BlurFade>
    </TestimonialsStatusWrapper>
  );
}
