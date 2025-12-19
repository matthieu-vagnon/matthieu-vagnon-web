"use client";

import { useActiveModal } from "@/hooks/useActiveModal";
import { Link } from "@/i18n/navigation";
import { cn, getTranslatedData } from "@/lib/utils";
import { useLocale, useTranslations } from "next-intl";
import Image, { StaticImageData } from "next/image";
import Magnetic from "./Magnetic";

const CardWrapper = ({
  children,
  url,
  seeMore = false,
}: {
  children: React.ReactNode;
  url: string;
  seeMore?: boolean;
}) => {
  const { setActiveModal } = useActiveModal();

  return !seeMore ? (
    <Link
      href={url}
      className="relative rounded-lg h-full w-full hover:shadow-2xl transition-shadow duration-300 overflow-hidden group flex flex-col justify-end items-start gap-2 p-3 sm:p-4"
    >
      {children}
    </Link>
  ) : (
    <button
      onClick={() => {
        setActiveModal("contact");
      }}
      className="text-left cursor-pointer relative rounded-lg h-full w-full hover:shadow-2xl transition-shadow duration-300 overflow-hidden group flex flex-col justify-end items-start gap-2 p-3 sm:p-4"
    >
      {children}
    </button>
  );
};

export const typeVariants = {
  webApplication: "bg-blue-500",
  saas: "bg-green-500",
  website: "bg-pink-500",
  contribution: "bg-yellow-500",
  other: "bg-gray-500",
};

type ProjectCardProps = {
  coverImage: StaticImageData;
  url?: string;
  project?: Project;
  seeMore?: boolean;
};

export default function ProjectCard({
  coverImage,
  url = "#",
  project,
  seeMore = false,
}: ProjectCardProps) {
  const locale = useLocale();
  const t = useTranslations("caseStudies.project");

  return (
    <Magnetic size="lg" className="h-67 sm:h-90 md:h-102 w-45 sm:w-70 md:w-80">
      <CardWrapper seeMore={seeMore} url={url}>
        {project && (
          <div
            className={cn(
              "rounded-full px-2 py-1 text-xs font-medium z-2",
              typeVariants[project.type as keyof typeof typeVariants]
            )}
          >
            {t(`type.${project.type}`)}
          </div>
        )}
        <div className="flex flex-row items-baseline gap-1 sm:gap-2 max-w-full">
          <h3 className="text-md sm:text-xl md:text-2xl font-bold text-white z-1 font-sans-special overflow-x-hidden text-ellipsis whitespace-nowrap">
            {project?.title ?? t("andMuchMore")}
          </h3>
          {project && (
            <span className="text-xs sm:text-sm md:text-base text-white/50 font-bold z-1">
              {project.year}
            </span>
          )}
        </div>
        <p className="text-xs sm:text-sm md:text-base text-white z-1 line-clamp-4 overflow-hidden text-ellipsis">
          {project
            ? getTranslatedData(project.shortDescription, locale)
            : t("andMuchMoreDescription")}
        </p>
        {project?.previewImg && (
          <div className="absolute w-full max-h-[114px] sm:max-h-[178px] md:max-h-[203px] p-0 sm:p-4 sm:group-hover:p-0 transition-[padding] duration-300 left-0 top-0 rounded-sm z-1">
            <Image
              placeholder="blur"
              width={320}
              src={project.previewImg}
              alt={project.title}
              className="max-sm:mask-b-from-90% sm:group-hover:rounded-b-none transition-[border-radius] duration-300 pointer-events-none w-full h-full object-cover object-center rounded-sm"
            />
          </div>
        )}
        <Image
          className="absolute pointer-events-none object-cover object-center h-full w-full left-0 top-0 group-hover:scale-110 transition-transform duration-300"
          placeholder="blur"
          src={coverImage}
          height={400}
          width={320}
          alt="Background"
          quality={40}
        />
      </CardWrapper>
    </Magnetic>
  );
}
