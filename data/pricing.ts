import fast from "@/public/your-project/fast.png";
import fullStackDev from "@/public/your-project/full-stack-dev.png";
import uiRevamp from "@/public/your-project/ui-revamp.png";

export const pricing: PricingPlan[] = [
  {
    title: {
      en: "Lightspeed POC Development",
      fr: "Développement éclair d'un POC",
    },
    price: {
      en: "800 €",
    },
    priceDescription: {
      en: "For 3 days of service, then 350 €/day",
      fr: "Pour 3 jours de prestation, puis 350 €/jour.",
    },
    description: {
      en: "Ideal for project holders who want to seek funding quickly.",
      fr: "Idéal pour les détenteurs d'un projet qui veulent chercher du financement rapidement.",
    },
    features: [
      {
        en: "Proof Of Concept Development at Light Speed",
        fr: "Développement d'un Proof Of Concept à la vitesse de l'éclair",
      },
      {
        en: "Particular attention given to design and user experience issues",
        fr: "Attention particulière accordée aux problématiques de design et d'expérience utilisateur",
      },
    ],
    image: fast,
    imageAlt: "fast dev illustration",
  },
  {
    title: {
      en: "App Development",
      fr: "Développement d'application",
    },
    price: {
      en: "2500 €",
    },
    priceDescription: {
      en: "For 10 days of service, then 350 €/day",
      fr: "Pour 10 jours de prestation, puis 350 €/jour.",
    },
    description: {
      en: "Ideal for entrepreneurs who want to launch their MVP and iterate based on user feedback.",
      fr: "Idéal pour les entrepreneurs qui veulent lancer leur MVP et itérer en fonction des retours utilisateurs.",
    },
    features: [
      {
        en: "UI/UX design with Figma",
        fr: "Conception UI/UX avec Figma",
      },
      {
        en: "MVP development and beyond",
        fr: "Développement du MVP et au-delà",
      },
      {
        en: "Production deployment",
        fr: "Déploiement en production",
      },
    ],
    image: uiRevamp,
    imageAlt: "app development illustration",
  },
  {
    title: {
      en: "Full-Service Development",
      fr: "Développement tout compris",
    },
    price: {
      en: "6000 €",
    },
    priceDescription: {
      en: "For 30 days of service, then 300 €/day",
      fr: "Pour 30 jours de prestation, puis 300 €/jour.",
    },
    description: {
      en: "Complete package for entrepreneurs who want a turnkey SaaS, from design to customer acquisition.",
      fr: "Offre complète pour les entrepreneurs qui veulent un SaaS clé en main, du design à l'acquisition client.",
    },
    features: [
      {
        en: "UI/UX design with Figma",
        fr: "Conception UI/UX avec Figma",
      },
      {
        en: "POC development & deployment",
        fr: "Développement et déploiement du POC",
      },
      {
        en: "MVP development and beyond",
        fr: "Développement du MVP et au-delà",
      },
      {
        en: "Production deployment & infrastructure setup",
        fr: "Déploiement en production et mise en place de l'infrastructure",
      },
      {
        en: "Landing page & payment integration (Stripe, etc.)",
        fr: "Site vitrine et intégration des paiements (Stripe, etc.)",
      },
      {
        en: "Paid advertising setup (Google Ads)",
        fr: "Mise en place des Paid Ads (Google Ads)",
      },
    ],
    image: fullStackDev,
    imageAlt: "full stack dev illustration",
  },
];
