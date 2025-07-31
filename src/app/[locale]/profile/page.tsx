import { BlurFade } from "@/components/BlurFade";
import Header from "@/components/Header";
import { LogoCarousel } from "@/components/LogoCarousel";
import Media from "@/components/Media";
import PageTitle from "@/components/PageTitle";
import { ResumeCard } from "@/components/ResumeCard";
import SectionTitle from "@/components/SectionTitle";
import SeeMore from "@/components/SeeMore";
import { Separator } from "@/components/Separator";
import SkillBox from "@/components/SkillBox";
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
          <div className="gap-8 sm:gap-12 md:gap-18 flex flex-col sm:flex-row text-center sm:text-left items-center justify-start">
            <Media
              width={256}
              media={{
                image: profile.businessCard.image,
                title: profile.businessCard.title,
              }}
              isTilt
              size="md"
              className="w-50 md:w-56 lg:w-64"
            />
            <div className="relative text-lg lg:text-xl italic">
              <Quote
                strokeWidth={0}
                className="hidden sm:block size-20 -z-1 fill-foreground/5 absolute -top-6 -left-7"
              />
              {getTranslatedData(profile.description, locale)}
            </div>
          </div>
        </BlurFade>
        <BlurFade delay={blurDelay++ / 10}>
          <SectionTitle title={t("profile.about")} />
          <span className="text-base md:text-lg text-foreground-secondary flex flex-col gap-3">
            {getTranslatedData(profile.about, locale)}
          </span>
        </BlurFade>
        <BlurFade delay={blurDelay++ / 10}>
          <div className="flex flex-row gap-2 sm:gap-3 md:gap-4 flex-wrap [&>*]:flex-auto [&>*]:md:flex-none">
            <SkillBox
              title={t("profile.aiTools")}
              items={profile.aiTools}
              accent
            />
            <SkillBox
              title={t("profile.languages")}
              items={profile.languages}
            />
            <SkillBox
              title={t("profile.frontendFrameworks")}
              items={profile.frontendFrameworks}
            />
            <SkillBox
              title={t("profile.stateManagement")}
              items={profile.stateManagement}
            />
            <SkillBox
              title={t("profile.frontendLibraries")}
              items={profile.frontendLibraries}
            />
            <SkillBox
              title={t("profile.uiLibraries")}
              items={profile.uiLibraries}
            />
            <SkillBox
              title={t("profile.buildTools")}
              items={profile.buildTools}
            />
            <SkillBox title={t("profile.backend")} items={profile.backend} />
            <SkillBox title={t("profile.testing")} items={profile.testing} />
            <SkillBox
              title={t("profile.performance")}
              items={profile.performance}
            />
            <SkillBox
              title={t("profile.accessibility")}
              items={profile.accessibility}
            />
            <SkillBox title={t("profile.devops")} items={profile.devops} />
            <SkillBox
              title={t("profile.bestPractices")}
              items={profile.bestPractices}
            />
            <SkillBox title={t("profile.design")} items={profile.design} />
            <SkillBox title={t("profile.other")} items={profile.other} />
          </div>
        </BlurFade>
        <BlurFade delay={blurDelay++ / 10}>
          <LogoCarousel columnCount={4} logos={profile.stackLogos} />
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
                    isOpen={index === 0}
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
        <SeeMore
          socials={[
            profile.socials.linkedin,
            profile.socials.malt,
            profile.socials.findy,
          ]}
        />
      </BlurFade>
    </TestimonialsStatusWrapper>
  );
}
