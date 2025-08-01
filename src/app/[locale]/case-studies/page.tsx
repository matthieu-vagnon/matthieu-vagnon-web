import { BlurFade } from "@/components/BlurFade";
import Header from "@/components/Header";
import PageTitle from "@/components/PageTitle";
import ProjectCard from "@/components/ProjectCard";
import SeeMore from "@/components/SeeMore";
import TestimonialsStatusWrapper from "@/components/TestimonialsStatusWrapper";
import { profile } from "@/data/profile";
import { projects } from "@/data/projects";
import cover1 from "@/public/project-card-cover/1.png";
import cover2 from "@/public/project-card-cover/2.png";
import cover3 from "@/public/project-card-cover/3.png";
import cover4 from "@/public/project-card-cover/4.png";
import cover5 from "@/public/project-card-cover/5.png";
import { useTranslations } from "next-intl";
import { StaticImageData } from "next/image";

const COVER_IMAGES: StaticImageData[] = [
  cover1,
  cover2,
  cover3,
  cover4,
  cover5,
];

export default function CaseStudies() {
  const t = useTranslations();
  let blurDelay = 0;

  return (
    <TestimonialsStatusWrapper shouldCollapse={true}>
      <BlurFade>
        <Header />
      </BlurFade>
      <BlurFade delay={blurDelay++ / 10}>
        <PageTitle
          title={t("caseStudies.title")}
          description={t("caseStudies.description")}
        />
      </BlurFade>
      <div className="flex flex-row flex-wrap justify-center gap-2 sm:gap-4">
        {Object.entries(projects).map(([key, project], index) => (
          <BlurFade key={key} delay={blurDelay++ / 10}>
            <ProjectCard
              coverImage={COVER_IMAGES[index % 5]}
              url={`/case-studies/${key}`}
              project={project}
            />
          </BlurFade>
        ))}
      </div>
      <BlurFade delay={blurDelay++ / 10}>
        <SeeMore socials={[profile.socials.youtube, profile.socials.github]} />
      </BlurFade>
    </TestimonialsStatusWrapper>
  );
}
