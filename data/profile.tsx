import Github from "@/components/svg/Github";
import Instagram from "@/components/svg/Instagram";
import LinkedIn from "@/components/svg/Linkedin";
import Malt from "@/components/svg/Malt";
import NextjsIcon from "@/components/svg/Nextjs";
import ReactIcon from "@/components/svg/React";
import TailwindIcon from "@/components/svg/Tailwind";
import TypescriptIcon from "@/components/svg/TypeScript";
import businessCard from "@/public/profile/business-card.png";
import cosigma from "@/public/profile/cosigma.jpeg";
import google from "@/public/profile/google.jpg";
import ikm from "@/public/profile/ikm.jpeg";
import influactive from "@/public/profile/influactive.jpeg";
import me from "@/public/profile/me.png";
import meta from "@/public/profile/meta.jpeg";
import polytech from "@/public/profile/polytech.webp";
import predictiveLayer from "@/public/profile/predictive-layer.png";
import pulsePartners from "@/public/profile/pulse-partners.jpeg";
import saintThomas from "@/public/profile/saint-thomas.png";
import toeic from "@/public/profile/toeic.webp";
import univLyon1 from "@/public/profile/univ-lyon1.png";
import univLyon2 from "@/public/profile/univ-lyon2.jpg";
import {
  BadgePlus,
  BrainCircuit,
  BrushCleaning,
  CodeXml,
  Cog,
  FileChartPie,
  Heart,
  Paintbrush,
  Palette,
  PaletteIcon,
  Users,
  Zap,
} from "lucide-react";

export const profile: Profile = {
  socials: {
    linkedin: {
      title: "LinkedIn",
      img: <LinkedIn />,
      link: {
        en: "https://www.linkedin.com/in/matthieu-vagnon/",
        fr: "https://www.linkedin.com/in/matthieu-vagnon/?locale=fr_FR",
      },
    },
    malt: {
      title: "Malt",
      img: <Malt />,
      link: {
        en: "https://www.malt.fr/profile/matthieuvagnon1",
        fr: "https://www.malt.fr/profile/matthieuvagnon1",
      },
    },
    instagram: {
      title: "Instagram",
      img: <Instagram />,
      link: {
        en: "https://www.instagram.com/matthieu_vagnon?igsh=bzNhamk1OXQ5bm1t&utm_source=qr",
        fr: "https://www.instagram.com/matthieu_vagnon?igsh=bzNhamk1OXQ5bm1t&utm_source=qr",
      },
    },
    github: {
      title: "GitHub",
      img: <Github />,
      link: {
        en: "https://github.com/matthieu-vagnon",
      },
    },
  },
  contact: {
    email: "mvagnon@icloud.com",
    phone: "+817090997140",
  },
  avatarUrl: me,
  businessCard: {
    image: businessCard,
    title: {
      en: "Business Card",
      fr: "Carte de visite",
    },
  },
  features: [
    {
      title: {
        en: "1. Audit",
        fr: "1. Audit",
      },
      description: {
        en: "For existing projects, I conduct a comprehensive assessment and propose concrete solutions (UI/UX, features, performance, etc.) to maximize product profitability.",
        fr: "Dans le cas d'un projet existant, je réalise un audit complet et propose des solutions concrètes (UI/UX, fonctionnalités, performance, etc.) pour maximiser la rentabilité du produit.",
      },
      icon: <FileChartPie />,
    },
    {
      title: {
        en: "2. Design",
        fr: "2. Design",
      },
      description: {
        en: "Creation of wireframes and mockups. I translate the client's vision into concrete, user-centered visual designs that guide the entire development process.",
        fr: "Conception des wireframes et maquettes. Je traduis la vision du client en designs visuels concrets et centrés sur l'utilisateur qui guident l'ensemble du processus de développement.",
      },
      icon: <PaletteIcon />,
    },
    {
      title: {
        en: "3. Early-Stage Product Development",
        fr: "3. Développement du POC",
      },
      description: {
        en: "Development of a Proof of Concept and/or Minimum Viable Product to deliver a market-ready product as quickly as possible, while maintaining high code quality and scalability.",
        fr: "Développement d'un Proof of Concept et/ou d'un Minimum Viable Product pour livrer un produit prêt pour le marché le plus rapidement possible, tout en maintenant une qualité de code élevée et une scalabilité optimale.",
      },
      icon: <Zap />,
    },
    {
      title: {
        en: "4. Technical and Visual Refinement",
        fr: "4. Perfectionnement technique et visuel",
      },
      description: {
        en: "Code refactoring and optimization for long-term maintainability and performance. Enhancement of user experience and interface design through refined interactions, smooth transitions, and intuitive workflows.",
        fr: "Refactorisation et optimisation du code pour une maintenabilité et des performances à long terme. Amélioration de l'expérience utilisateur et du design d'interface via des interactions raffinées, des transitions fluides et des workflows intuitifs.",
      },
      icon: <BrushCleaning />,
    },
    {
      title: {
        en: "5. Functionalities Implementation",
        fr: "5. Implémentation de fonctionnalités",
      },
      description: {
        en: "Iterative development and implementation of new features based on user feedback and business priorities. Continuous enhancement of the product to meet evolving market needs and maximize user value.",
        fr: "Développement itératif et implémentation de nouvelles fonctionnalités basées sur les retours utilisateurs et les priorités business. Amélioration continue du produit pour répondre aux besoins évolutifs du marché et maximiser la valeur pour l'utilisateur.",
      },
      icon: <BadgePlus />,
    },
  ],
  stack: [
    {
      icon: Heart,
      title: {
        en: "Favorites",
        fr: "Favoris",
      },
      accent: true,
      tech: [
        {
          techIcon: TypescriptIcon,
          name: "TypeScript",
        },
        {
          techIcon: ReactIcon,
          name: "React.js",
        },
        {
          techIcon: ReactIcon,
          name: "React Native",
        },
        {
          techIcon: NextjsIcon,
          name: "Next.js",
        },
        {
          techIcon: TailwindIcon,
          name: "Tailwind CSS",
        },
      ],
    },
    {
      icon: CodeXml,
      title: {
        en: "Languages",
        fr: "Languages",
      },
      tech: ["TypeScript", "JavaScript", "SQL", "HTML/JSX", "CSS/SCSS/LESS"],
    },
    {
      icon: Paintbrush,
      title: {
        en: "Front-End",
        fr: "Front-end",
      },
      tech: [
        "React.js",
        "React Native",
        "Next.js",
        "Redux",
        "TanStack Query",
        "Electric SQL",
        "React Router",
        "i18next",
        "Next-intl",
        "Tailwind CSS",
        "Material UI",
        "Framer Motion",
        "Cypress",
        "ESLint",
        "Prettier",
      ],
    },
    {
      icon: Cog,
      title: {
        en: "Infrastructure & Back-End",
        fr: "Infrastructure & back-end",
      },
      tech: [
        "Docker",
        "GitHub Actions",
        "Vercel",
        "Supabase",
        "Firebase",
        "Google Cloud",
        "PostgreSQL",
      ],
    },
    {
      icon: Palette,
      title: {
        en: "UI/UX",
      },
      tech: ["Figma"],
    },
    {
      icon: BrainCircuit,
      title: {
        en: "AI & LLM Integration",
        fr: "Intégration IA & LLM",
      },
      tech: ["OpenRouter"],
    },
    {
      icon: Users,
      title: {
        en: "Project Management & Collaboration",
        fr: "Gestion de projet & collaboration",
      },
      tech: ["Git", "GitHub", "Notion"],
    },
  ],
  about: {
    en: (
      <>
        <strong>User experience is the most powerful sales channel.</strong>
        <span>
          As a web & mobile developer and UI/UX designer specializing in LLM/AI
          integration, I’ve seen that the digital products that sell best aren’t
          the ones with the most features, but the ones that minimize friction
          for the user and empower them to achieve their goals effortlessly.
        </span>
        <span>
          This is why I help businesses maximize their ROI with my 4-steps
          method, since 2021.
        </span>
      </>
    ),
    fr: (
      <>
        <strong>
          L&apos;expérience utilisateur est le canal de vente le plus puissant.
        </strong>
        <span>
          En tant que développeur web & mobile spécialisé en intégration de
          LLM/IA et designer UI/UX, j&apos;ai constaté que les produits
          numériques qui se vendent le plus ne sont pas ceux avec le plus de
          fonctionnalités, mais ceux qui minimisent les frictions pour
          l&apos;utilisateur et qui donnent à ce dernier le pouvoir de faire
          beaucoup, sans effort.
        </span>
        <span>
          C&apos;est pourquoi j&apos;aide depuis 2021 les entreprises à
          maximiser leur retour sur investissement avec ma méthode en 5 étapes.
        </span>
      </>
    ),
  },
  experience: [
    {
      company: "CoSigma.io",
      logo: cosigma,
      projects: [],
      position: {
        en: "Front-End Engineer & UI/UX Designer",
        fr: "Développeur front-end & designer UI/UX",
      },
      timeline: "2025 - 2025",
    },
    {
      company: "Pulse Partners",
      logo: pulsePartners,
      projects: [
        {
          title: {
            en: "SmartInterview SaaS",
          },
          description: [
            {
              en: "Web application empowering 5+ Swiss-based businesses to create AI-powered surveys to target efficiently their audiences with the analytics platform.",
              fr: "Application web permettant à 5+ entreprises suisses de créer des sondages AI-powered pour cibler efficacement leurs audiences avec la plateforme d’analyse.",
            },
            {
              en: "The AI is able to injects context-aware follow-ups for every survey question, effectively doubling the amount of actionable data and improving response quality by up to 100%.",
              fr: "L’IA est capable d’injecter des suivis contextuels pour chaque question du sondage, doublant ainsi la quantité de données actionnables et améliorant la qualité des réponses par 100%.",
            },
          ],
          responsibilities: [
            {
              en: "Designed and developed new front-end features, including drag-and-drop question ordering and reusable presets — reducing survey creation time by ~45% and enabling non-technical users to perform complex actions. Led the unification of the builder and analytics into a single app, cutting navigation time by 50%.",
              fr: "Conception et développement de nouvelles fonctionnalités front-end, y compris le glisser-déposer pour l’ordre des questions et les préréglages réutilisables — réduisant le temps de création des sondages de ~45% et permettant aux utilisateurs non techniques de réaliser des actions complexes. Dirigé la unification du builder et des analytics en une seule application, réduisant le temps de navigation de 50%.",
            },
            {
              en: "Doubled the number of fully customizable form components in the builder — including but not limited to matrix grids, tables and radio buttons. Added more customization options for the existing ones such as sliders, min, max for number inputs and reset fields for checkboxes.",
              fr: "Doublé le nombre de composants de formulaire personnalisables dans le builder — y compris mais pas uniquement les grilles de matrices, les tableaux et les boutons radio. Ajouté plus d’options de personnalisation pour les existants tels que les curseurs, min, max pour les entrées numériques et les champs de réinitialisation pour les cases à cocher.",
            },
            {
              en: "Improved UI/UX across the platform: added visual loaders, ensured full responsiveness across devices, and aligned design across all major app areas (builder, analytics, dashboard, survey) — resulting in more user retention and fewer support tickets.",
              fr: "Amélioration de l’UI/UX sur toute la plateforme : ajout de chargeurs visuels, assuré la pleine réactivité sur tous les appareils, et alignement du design sur toutes les grandes zones de l’application (builder, analytics, dashboard, sondage) — résultant en une meilleure rétention des utilisateurs et un nombre réduit de tickets de support.",
            },
          ],
          technologies: [
            "React.js",
            "Next.js",
            "TypeScript",
            "HTML/JSX",
            "CSS/SCSS/LESS",
            "SQL",
            "Figma",
            "Redux",
            "TanStack Query",
            "Next-intl",
            "Tailwind CSS",
            "Material UI",
            "Framer Motion",
            "Vercel",
            "Supabase",
            "Firebase",
            "Google Cloud",
            "PostgreSQL",
            "ESLint",
            "Prettier",
            "GitHub Copilot",
            "Git",
            "GitHub",
            "Notion",
          ],
        },
      ],
      position: {
        en: "Full-Stack Engineer & UI/UX Designer",
        fr: "Développeur full-stack & designer UI/UX",
      },
      timeline: "2024 - 2025",
    },
    {
      company: "Predictive Layer",
      logo: predictiveLayer,
      projects: [
        {
          title: {
            en: "Crystal SaaS",
          },
          description: [
            {
              en: "AI-based oil and gas trading tool used internally at TotalEnergies Predictive Department.",
              fr: "Application web permettant à TotalEnergies de simuler des trades d’hydrocarbures en utilisant l’IA.",
            },
            {
              en: "The AI is trained via Auto-ML (Automatic Machine Learning) to give live trading signals.",
              fr: "L’IA est formée via Auto-ML (Machine Learning automatique) pour donner des signaux de trading en direct.",
            },
            {
              en: "The signals are then displayed on Crystal with a powerful but intuitive web interface.",
              fr: "Les signaux sont ensuite affichés sur Crystal avec une interface web puissante mais intuitive.",
            },
          ],
          responsibilities: [
            {
              en: "Designed the whole application (10+ pages) via Figma.",
              fr: "Conception de l’ensemble de l’application (10+ pages) via Figma.",
            },
            {
              en: "Led the implementation of the front-end from scratch mainly using React, Vite, Material UI and React Router.",
              fr: "Dirige l’implémentation du front-end principalement en utilisant React, Vite, Material UI et React Router.",
            },
            {
              en: "Implemented complex charts using Material UI-X. Customized them to match Figma’s visuals.",
              fr: "Implémentation de graphiques complexes en utilisant Material UI-X. Personnalisés pour correspondre aux visuels de Figma.",
            },
            {
              en: "Collaborated with a back-end engineer, who provided the API, to ensure seamless integration.",
              fr: "Collaboration avec un ingénieur back-end, qui a fourni l’API, pour garantir une intégration sans friction.",
            },
          ],
          technologies: [
            "React.js",
            "JavaScript",
            "HTML/JSX",
            "CSS/SCSS/LESS",
            "Figma",
            "Redux",
            "React Router",
            "i18next",
            "Material UI",
            "ESLint",
            "Prettier",
            "Cypress",
            "Git",
            "Notion",
          ],
        },
        {
          title: {
            en: "Demo SaaS",
          },
          description: [
            {
              en: "Demo web application featuring Predictive Layer’s various products.",
              fr: "Application web démonstrative présentant les différents produits de Predictive Layer.",
            },
            {
              en: "This project was a major success, earning strong investor satisfaction and significantly boosting Predictive Layer’s visibility in the Swiss market — ultimately contributing to its acquisition by TotalEnergies.",
              fr: "Ce projet a été un succès majeur, obtenant une forte satisfaction des investisseurs et une forte visibilité de Predictive Layer sur le marché suisse — contribuant finalement à son acquisition par TotalEnergies.",
            },
          ],
          responsibilities: [
            {
              en: "Designed various demo SaaS (AI-powered trading tools, selling tools, hedging tools, and more) using Figma.",
              fr: "Conception de différentes applications démonstratives (outils de trading AI-powered, outils de vente, outils de couverture, etc.) en utilisant Figma.",
            },
            {
              en: "Led the front-end implementation of those applications in React, using Vite as a building tool to ensure great performances.",
              fr: "Dirige l’implémentation du front-end de ces applications en React, en utilisant Vite comme outil de construction pour garantir des performances exceptionnelles.",
            },
            {
              en: "Implemented user authentication and role management using Auth0, along with custom login and registration pages — eliminating all manual user creation and significantly streamlining the onboarding process.",
              fr: "Implémentation de l’authentification et de la gestion des rôles en utilisant Auth0, ainsi que des pages de connexion et d’inscription personnalisées — éliminant la création manuelle des utilisateurs et simplifiant considérablement le processus d’intégration.",
            },
          ],
          technologies: [
            "React.js",
            "JavaScript",
            "HTML/JSX",
            "CSS/SCSS/LESS",
            "Figma",
            "Redux",
            "React Router",
            "i18next",
            "Material UI",
            "ESLint",
            "Prettier",
            "Cypress",
            "Git",
            "Notion",
          ],
        },
        {
          title: {
            en: "Graphical Rebranding",
            fr: "Rebranding graphique",
          },
          responsibilities: [
            {
              en: "Led the creation of a modern visual branding system (flat design, vivid color palette, streamlined components) using Figma.",
              fr: "Dirige la création d’un système de marque visuelle moderne (design plat, palette de couleurs vive, composants simplifiés) en utilisant Figma.",
            },
          ],
          technologies: ["Figma"],
        },
      ],
      position: {
        en: "Principal Front-End Engineer & Designer",
        fr: "Développeur front-end principal & designer",
      },
      timeline: "2022 - 2024",
    },
    {
      company: "Influactive",
      logo: influactive,
      projects: [
        {
          title: {
            en: "WordPress Integration",
            fr: "Intégration WordPress",
          },
          description: [
            {
              en: "Fully customized WordPress websites for multiple clients.",
              fr: "Sites web WordPress entièrement personnalisés pour plusieurs clients.",
            },
            {
              en: "Maintenance of those websites.",
              fr: "Maintenance de ces sites web.",
            },
          ],
          responsibilities: [
            {
              en: "Development of fully customized WordPress themes tailored to specific client requirements.",
              fr: "Développement de thèmes WordPress entièrement personnalisés selon les besoins spécifiques des clients.",
            },
            {
              en: "Development of fully customized WordPress themes tailored to specific client requirements.",
              fr: "Maintenance de ces sites web.",
            },
          ],
          technologies: ["JavaScript", "HTML/JSX", "CSS/SCSS/LESS", "SQL"],
        },
        {
          title: {
            en: "Cookie Consent Gestion Panel",
            fr: "Gestion des cookies",
          },
          description: [
            {
              en: "In-house tool allowing website administrators to independently manage cookie consent settings, including adding, removing, and configuring third-party tracking tools.",
              fr: "Outil interne permettant aux administrateurs de sites web de gérer indépendamment les paramètres de consentement aux cookies, y compris l’ajout, la suppression et la configuration d’outils de suivi tiers.",
            },
            {
              en: "Based on user consent, the panel dynamically injects selected cookies (Google Analytics, Matomo, etc.) into the website’s header.",
              fr: "Basé sur le consentement de l’utilisateur, le panneau injecte dynamiquement les cookies sélectionnés (Google Analytics, Matomo, etc.) dans l’en-tête du site web.",
            },
          ],
          responsibilities: [
            {
              en: "Designed and developed the panel from scratch, enabling site admins to manage multiple cookies and control how they are presented to users through a customizable consent banner.",
              fr: "Conception et développement du panneau à partir de zéro, permettant aux administrateurs de sites web de gérer plusieurs cookies et de contrôler la façon dont ils sont présentés aux utilisateurs via une bannière de consentement personnalisable.",
            },
            {
              en: "Integrated tracking tools (Google Analytics, Matomo, etc.), injected conditionally based on user consent — resulting in a measurable increase in tracking coverage, up to 2x more data collected.",
              fr: "Intégration d’outils de suivi (Google Analytics, Matomo, etc.), injectés conditionnellement en fonction du consentement de l’utilisateur — résultant dans une augmentation mesurable de la couverture du suivi, jusqu’à 2x plus de données collectées.",
            },
          ],
          technologies: [
            "JavaScript",
            "HTML/JSX",
            "CSS/SCSS/LESS",
            "SQL",
            "Figma",
          ],
        },
      ],
      position: {
        en: "Full-Stack Engineer",
        fr: "Développeur full-stack",
      },
      timeline: "2021 - 2022",
    },
  ],
  education: [
    {
      responsible: "IKM TeckChek",
      logo: ikm,
      timeline: "2025",
      type: {
        en: ["Certification"],
        fr: ["Certification"],
      },
      degree: {
        en: "JavaScript Proficiency Profile",
        fr: "Profil de compétence JavaScript",
      },
      href: "/ikm1.pdf",
    },
    {
      responsible: "Google",
      logo: google,
      timeline: "2024",
      type: {
        en: ["Certification"],
        fr: ["Certification"],
      },
      degree: {
        en: "Build Dynamic User Interfaces (UI) for Websites",
        fr: "Créer des interfaces utilisateur dynamiques (UI) pour les sites web",
      },
      href: "https://www.coursera.org/account/accomplishments/records/LDRSN31COO2V",
    },
    {
      responsible: "TOEIC",
      logo: toeic,
      timeline: "2024",
      type: {
        en: ["Certification"],
        fr: ["Certification"],
      },
      degree: {
        en: "TOEIC 900/990",
      },
      href: "https://www.etsglobal.org/fr/en/digital-score-report/5AA1E19F84CC89EFC16E4F71685037D641B0632E2719CA4678679C72FA045A1BMjg0YTF4dHlOeUtTbEsycGpUd2dReUJWRk02UkhBUEZMNGVvMHF4YmI1SnJ1Qkxj",
    },
    {
      responsible: "Meta",
      logo: meta,
      timeline: "2024",
      type: {
        en: ["Certification"],
        fr: ["Certification"],
      },
      degree: {
        en: "Advanced React",
        fr: "React avancé",
      },
      href: "https://www.coursera.org/account/accomplishments/records/DPKTBAHV6WDS",
    },
    {
      responsible: "Université Lumière Lyon 2",
      logo: univLyon2,
      timeline: "2021 - 2022",
      type: {
        en: ["School"],
        fr: ["École"],
      },
      degree: {
        en: "Web Project Management",
        fr: "Gestion de projet web",
      },
      href: "https://www.univ-lyon2.fr",
    },
    {
      responsible: "Université Claude Bernard Lyon 1",
      logo: univLyon1,
      timeline: "2020 - 2021",
      type: {
        en: ["School", "Diploma"],
        fr: ["École", "Diplôme"],
      },
      degree: {
        en: "IT Associate Degree",
        fr: "DUT informatique",
      },
      href: "https://www.univ-lyon1.fr",
    },
    {
      responsible: "Polytech Lyon",
      logo: polytech,
      timeline: "2018 - 2020",
      type: {
        en: ["School"],
        fr: ["École"],
      },
      degree: {
        en: "Intensive Preparatory Program",
        fr: "École préparatoire",
      },
      href: "https://polytech.univ-lyon1.fr",
    },
    {
      responsible: "Saint-Thomas d'Aquin-Veritas",
      logo: saintThomas,
      timeline: "2011 - 2018",
      type: {
        en: ["School", "Diploma"],
        fr: ["École", "Diplôme"],
      },
      degree: {
        en: "Scientific High School Diploma with Honors",
        fr: "Baccalauréat scientifique avec mention",
      },
      href: "https://www.saint-thom.fr",
    },
  ],
};
