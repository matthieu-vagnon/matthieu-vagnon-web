import { Media } from "@/components/Media";
import { typeVariants } from "@/components/ProjectCard";
import { Locale } from "next-intl";
import { StaticImageData } from "next/image";
import React from "react";

declare global {
  type MultiLingual = {
    en: string | string[] | React.ReactNode | React.ReactNode[];
    fr?: string | string[] | React.ReactNode | React.ReactNode[];
    ja?: string | string[] | React.ReactNode | React.ReactNode[];
  };

  type Testimonial = {
    id: number;
    name: string;
    company: string;
    position: string;
    testimonial: MultiLingual & { original: Locale };
    method?: string;
    image?: StaticImageData;
  };

  type Profile = {
    socials: Record<
      string,
      {
        title: string;
        img?: React.ReactNode;
        link: MultiLingual;
      }
    >;
    contact: Record<string, string>;
    avatarUrl?: StaticImageData;
    businessCard: {
      image: StaticImageData;
      title: MultiLingual;
    };
    features: {
      title: MultiLingual;
      description: MultiLingual;
      icon: React.ReactNode;
    }[];
    languages: string[];
    aiTools: string[];
    frontendFrameworks: string[];
    stateManagement: string[];
    frontendLibraries: string[];
    uiLibraries: string[];
    buildTools: string[];
    backend: string[];
    testing: string[];
    performance: string[];
    accessibility: string[];
    devops: string[];
    bestPractices: string[];
    design: string[];
    other: string[];
    about: MultiLingual;
    experience: {
      company: string;
      logo?: StaticImageData;
      timeline: string;
      position: MultiLingual;
      projects: {
        title: MultiLingual;
        description?: MultiLingual[];
        responsibilities: MultiLingual[];
        technologies: string[];
      }[];
    }[];
    education: {
      responsible: string;
      logo?: StaticImageData;
      timeline: string;
      type: MultiLingual;
      degree: MultiLingual;
      href: string;
    }[];
  };

  type Project = {
    title: string;
    year: number;
    type: keyof typeof typeVariants;
    shortDescription: MultiLingual;
    longDescription: MultiLingual;
    tags: MultiLingual;
    technologies: string[];
    previewImg: StaticImageData;
    gallery: Media[];
    problem: MultiLingual;
    solution: MultiLingual;
    results?: MultiLingual;
    relatedUrls?: {
      title: MultiLingual;
      link: MultiLingual;
    }[];
  };
}

export {};
