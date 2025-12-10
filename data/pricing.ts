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
      en: "900 €",
    },
    priceDescription: {
      en: "For 3 days of service, then 400 €/day",
      fr: "Pour 3 jours de prestation, puis 400 €/jour.",
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
      en: "UI/UX Revamp",
      fr: "Revamp UI/UX",
    },
    price: {
      en: "3000 €",
    },
    priceDescription: {
      en: "For 10 days of service, then 400 €/day",
      fr: "Pour 10 jours de prestation, puis 400 €/jour.",
    },
    description: {
      en: "Ideal for app owners who want to multiply the adoption of their product.",
      fr: "Idéal pour les propriétaires d'app qui veulent multiplier l'adoption de leur produit.",
    },
    features: [
      {
        en: "Initial audit",
        fr: "Audit initial",
      },
      {
        en: "UI/UX revamp",
        fr: "Refonte UI/UX complète",
      },
    ],
    image: uiRevamp,
    imageAlt: "ui/ux revamp illustration",
  },
  {
    title: {
      en: "End-to-End App Development",
      fr: "Développement d'app de bout en bout",
    },
    price: {
      en: "7500 €",
    },
    priceDescription: {
      en: "For 30 days of service, then 350 €/day",
      fr: "Pour 30 jours de prestation, puis 350 €/jour.",
    },
    description: {
      en: "Ideal for project holders who want a freelancer who will accompany them throughout the project without multiplying costs.",
      fr: "Idéal pour les détenteurs d'un projet qui veulent un freelance qui les accompagnera tout le long du projet sans multiplier les coûts.",
    },
    features: [
      {
        en: "UI/UX design with Figma",
        fr: "Conception UI/UX avec Figma",
      },
      {
        en: "Proof of concept development",
        fr: "Développement de la preuve de concept",
      },
      {
        en: "Technical and visual refinement",
        fr: "Perfectionnement technique et visuel",
      },
      {
        en: "Production deployment",
        fr: "Déploiement en production",
      },
      {
        en: "Functionalities implementation",
        fr: "Implémentation de fonctionnalités",
      },
    ],
    image: fullStackDev,
    imageAlt: "full stack dev illustration",
  },
];
