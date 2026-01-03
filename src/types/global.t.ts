import { Media } from "@/components/Media";
import { typeVariants } from "@/components/ProjectCard";
import { LucideIcon } from "lucide-react";
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

  type InfoBand = {
    icon?: LucideIcon;
    text: MultiLingual;
    url?: MultiLingual;
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

  type PricingPlan = {
    title: MultiLingual;
    price?: MultiLingual;
    priceDescription?: MultiLingual;
    description: MultiLingual;
    features?: MultiLingual[];
    image?: StaticImageData;
    imageAlt?: string;
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
