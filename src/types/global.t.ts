import { Media } from '@/components/media';
import { typeVariants } from '@/components/project-card';
import { Locale } from 'next-intl';
import { StaticImageData } from 'next/image';

declare global {
  type Testimonial = {
    id: number;
    name: string;
    company: string;
    position: string;
    testimonial: {
      original: Locale;
      en?: React.ReactNode;
      fr?: React.ReactNode;
      ja?: React.ReactNode;
    };
    method?: string;
    image?: StaticImageData;
  };

  type Profile = {
    avatarUrl?: StaticImageData;
    description: {
      en?: string;
      fr?: string;
      ja?: string;
    };
    businessCard: {
      en?: {
        image: StaticImageData;
        title: string;
      };
      fr?: {
        image: StaticImageData;
        title: string;
      };
      ja?: {
        image: StaticImageData;
        title: string;
      };
    };
    stackLogos: {
      id: number;
      name: string;
      img: React.ComponentType<React.SVGProps<SVGSVGElement>>;
    }[];
    languages: string[];
    frontendFrameworks: string[];
    stateManagement: string[];
    frontendLibraries: string[];
    uiLibraries: string[];
    testing: string[];
    buildTools: string[];
    backend: string[];
    performance: string[];
    accessibility: string[];
    devops: string[];
    bestPractices: string[];
    design: string[];
    other: string[];
    softSkills: {
      en?: string;
      fr?: string;
      ja?: string;
    }[];
    about: {
      en?: React.ReactNode;
      fr?: React.ReactNode;
      ja?: React.ReactNode;
    };
    experience: {
      company: string;
      logo?: StaticImageData;
      timeline: string;
      position: {
        en?: string;
        fr?: string;
        ja?: string;
      };
      projects: {
        title: {
          en?: string;
          fr?: string;
          ja?: string;
        };
        description?: {
          en?: string;
          fr?: string;
          ja?: string;
        }[];
        responsibilities: {
          en?: string;
          fr?: string;
          ja?: string;
        }[];
        technologies: string[];
      }[];
    }[];
    education: {
      responsible: string;
      logo?: StaticImageData;
      timeline: string;
      type: {
        en?: string[];
        fr?: string[];
        ja?: string[];
      };
      degree: {
        en?: string;
        fr?: string;
        ja?: string;
      };
      href: string;
    }[];
  };

  type Project = {
    title: string;
    year: number;
    type: keyof typeof typeVariants;
    shortDescription: {
      en?: string;
      fr?: string;
      ja?: string;
    };
    longDescription: {
      en?: React.ReactNode;
      fr?: React.ReactNode;
      ja?: React.ReactNode;
    };
    tags: {
      en?: string[];
      fr?: string[];
      ja?: string[];
    };
    technologies: string[];
    previewImg: StaticImageData;
    gallery: Media[];
    problem: {
      en?: React.ReactNode[];
      fr?: React.ReactNode[];
      ja?: React.ReactNode[];
    };
    solution: {
      en?: React.ReactNode[];
      fr?: React.ReactNode[];
      ja?: React.ReactNode[];
    };
    results?: {
      en?: React.ReactNode;
      fr?: React.ReactNode;
      ja?: React.ReactNode;
    };
    relatedUrls?: {
      name: {
        en?: string;
        fr?: string;
        ja?: string;
      };
      url: string;
    }[];
  };
}

export {};
