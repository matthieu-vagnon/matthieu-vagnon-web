import { BlurFade } from "@/components/BlurFade";
import Header from "@/components/Header";
import { Li, Ul } from "@/components/List";
import { MediaCarousel } from "@/components/MediaCarousel";
import PageTitle from "@/components/PageTitle";
import { ScrollProgress } from "@/components/ScrollProgress";
import SectionTitle from "@/components/SectionTitle";
import SeeMore from "@/components/SeeMore";
import { default as SkillBox } from "@/components/SkillBox";
import PageDecoration from "@/components/svg/PageDecoration";
import TestimonialsStatusWrapper from "@/components/TestimonialsStatusWrapper";
import { profile } from "@/data/profile";
import { projects } from "@/data/projects";
import { cn, getFlattenedNode, getTranslatedData } from "@/lib/utils";
import { Globe } from "lucide-react";
import { Metadata, ResolvingMetadata } from "next";
import { getLocale, getTranslations } from "next-intl/server";
import React from "react";

function Block({
  title,
  position,
  children,
  className,
}: {
  title: string;
  position: "left" | "right";
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex w-full gap-x-20",
        position === "right" && "flex-row-reverse",
        className
      )}
    >
      <div className="flex flex-col w-full md:w-2/3 xl:w-1/2">
        <SectionTitle title={title} />
        <div className="text-base md:text-lg text-foreground-secondary">
          {children}
        </div>
      </div>
      <div
        className={cn(
          "relative hidden md:block w-33",
          position === "right" && "-scale-x-100"
        )}
      >
        <div className="absolute inset-y-0 right-0 w-11 bg-gradient-to-l from-background to-transparent" />
        <PageDecoration className="h-full w-full" />
      </div>
    </div>
  );
}

type Props = {
  params: Promise<{ project: string }>;
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const parentMetadata = await parent;
  const project = projects[(await params).project];
  const locale = await getLocale();
  const t = await getTranslations("caseStudies.project.metadata");

  return {
    title: t("title", { name: project.title }),
    description: getFlattenedNode(
      getTranslatedData(project.longDescription, locale)
    ),
    openGraph: {
      type: "article",
      siteName: "Matthieu Vagnon Web",
      title: t("openGraph.title", { name: project.title }),
      description: getTranslatedData(
        project.shortDescription,
        locale
      ) as string,
      images: [
        {
          url: `${process.env.NEXT_PUBLIC_URL!}${project.previewImg.src}`,
        },
        {
          url: `${process.env.NEXT_PUBLIC_URL!}/og-image.png`,
        },
      ],
    },
    keywords: [
      `${project.title}`,
      `${project.year}`,
      ...(parentMetadata.keywords || []),
      ...((project.tags[locale as keyof typeof project.tags] as string[]) ||
        []),
      ...project.technologies,
    ],
  };
}

type ProjectProps = {
  params: Promise<{ project: string }>;
  searchParams: Promise<{ media: string }>;
};

export default async function Project(props: ProjectProps) {
  const searchParams = await props.searchParams;
  const project = projects[(await props.params).project];
  const isOpenSlug = searchParams.media;
  const locale = await getLocale();
  const t = await getTranslations();
  let blurDelay = 0;
  let blockIndex = 0;

  const relatedUrls =
    project.relatedUrls?.map((url) => ({
      title: getTranslatedData(url.title, locale) as string,
      img: <Globe />,
      link: url.link,
      important: true,
    })) || [];

  return (
    <TestimonialsStatusWrapper shouldCollapse={true}>
      <ScrollProgress />
      <BlurFade>
        <Header />
      </BlurFade>
      <BlurFade
        delay={blurDelay++ / 10}
        className="flex flex-col justify-center items-center gap-0"
      >
        <PageTitle
          title={`${t("caseStudies.project.title", {
            name: project.title,
          })} (${project.year})`}
          description={
            getTranslatedData(project.shortDescription, locale) as string
          }
          tags={getTranslatedData(project.tags, locale) as string[]}
        />
      </BlurFade>
      {project.gallery && project.gallery.length > 0 && (
        <BlurFade delay={blurDelay++ / 10}>
          <MediaCarousel medias={project.gallery} isOpenSlug={isOpenSlug} />
        </BlurFade>
      )}
      <div className="flex flex-col gap-12 sm:gap-14 md:gap-16 mt-10 sm:mt-12 md:mt-14">
        <BlurFade delay={blurDelay++ / 10}>
          <Block
            title={t("caseStudies.project.projectDescription")}
            position={blockIndex++ % 2 === 0 ? "left" : "right"}
          >
            <div className="flex flex-col gap-3 sm:gap-4 md:gap-5">
              <div>{getTranslatedData(project.longDescription, locale)}</div>
              <div className="flex flex-row flex-wrap gap-2 sm:gap-3 md:gap-4">
                <SkillBox
                  title={t("caseStudies.project.technologies")}
                  items={project.technologies}
                  className="flex-auto"
                />
              </div>
            </div>
          </Block>
        </BlurFade>
        <BlurFade delay={blurDelay++ / 10}>
          <Block
            title={t("caseStudies.project.problem")}
            position={blockIndex++ % 2 === 0 ? "left" : "right"}
          >
            <Ul gap="sm">
              {getTranslatedData(project.problem, locale).map(
                (item: React.ReactNode, index: number) => (
                  <Li key={index}>{item}</Li>
                )
              )}
            </Ul>
          </Block>
        </BlurFade>
        <BlurFade delay={blurDelay++ / 10}>
          <Block
            title={t("caseStudies.project.solution")}
            position={blockIndex++ % 2 === 0 ? "left" : "right"}
          >
            <Ul gap="sm">
              {getTranslatedData(project.solution, locale).map(
                (item: React.ReactNode, index: number) => (
                  <Li key={index}>{item}</Li>
                )
              )}
            </Ul>
          </Block>
        </BlurFade>
        {project.results && (
          <BlurFade delay={blurDelay++ / 10}>
            <Block
              title={t("caseStudies.project.results")}
              position={blockIndex++ % 2 === 0 ? "left" : "right"}
            >
              {getTranslatedData(project.results, locale)}
            </Block>
          </BlurFade>
        )}
      </div>
      <BlurFade delay={blurDelay++ / 10}>
        <SeeMore
          socials={[
            ...relatedUrls,
            profile.socials.youtube,
            profile.socials.github,
          ]}
          className="mt-10 sm:mt-12 md:mt-14 mb-28"
        />
      </BlurFade>
    </TestimonialsStatusWrapper>
  );
}
