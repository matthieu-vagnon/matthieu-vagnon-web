import { StaticImageData } from 'next/image';

declare global {
  type Testimonial = {
    id: number;
    name: string;
    company: string;
    position: string;
    testimonial: {
      original: string;
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
      en?: React.ReactNode;
      fr?: React.ReactNode;
      ja?: React.ReactNode;
    };
    stackLogos: {
      id: number;
      name: string;
      img: React.ComponentType<React.SVGProps<SVGSVGElement>>;
    }[];
    frontendStack: string[];
    deploymentStack: string[];
    designStack: string[];
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
      description: {
        en?: string;
        fr?: string;
        ja?: string;
      }[];
      technologies: string[];
    }[];
    education: {
      responsible: string;
      logo?: StaticImageData;
      timeline: string;
      type: {
        en?: string;
        fr?: string;
        ja?: string;
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
    type: 'Web Application' | 'SaaS' | 'Contribution' | 'Other';
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
    skills: {
      en?: string[];
      fr?: string[];
      ja?: string[];
    };
    technologies: string[];
    previewImg?: StaticImageData;
    gallery?: {
      img?: {
        title: {
          en?: string;
          fr?: string;
          ja?: string;
        };
        image: StaticImageData;
      }[];
      video?: {
        title: {
          en?: string;
          fr?: string;
          ja?: string;
        };
        src: string;
        previewImage: StaticImageData;
      }[];
    };
    problem?: {
      en?: React.ReactNode;
      fr?: React.ReactNode;
      ja?: React.ReactNode;
    };
    solution?: {
      en?: React.ReactNode;
      fr?: React.ReactNode;
      ja?: React.ReactNode;
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
