import Github from "@/components/svg/Github";
import Instagram from "@/components/svg/Instagram";
import LinkedIn from "@/components/svg/Linkedin";
import Malt from "@/components/svg/Malt";
import NextjsIcon from "@/components/svg/Nextjs";
import ReactIcon from "@/components/svg/React";
import TailwindIcon from "@/components/svg/Tailwind";
import TypescriptIcon from "@/components/svg/TypeScript";
import X from "@/components/svg/X";
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
  Braces,
  BrainCircuit,
  BrushCleaning,
  CodeXml,
  Cog,
  Database,
  FileChartPie,
  Keyboard,
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
        en: "https://www.linkedin.com/in/matthieu-vagnon/?locale=en_US",
        fr: "https://www.linkedin.com/in/matthieu-vagnon",
      },
    },
    x: {
      title: "X",
      img: <X />,
      link: {
        en: "https://x.com/matthieu_vagnon",
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
        en: "5. Production Deployment",
        fr: "5. Déploiement en production",
      },
      description: {
        en: "Deployment of the application to production environments, ensuring a smooth and uninterrupted launch. Configuration of necessary infrastructures to guarantee scalability, security, and optimal product performance.",
        fr: "Déploiement de l'application sur les environnements de production, assurant une mise en ligne fluide et sans interruption. Configuration des infrastructures nécessaires pour garantir la scalabilité, la sécurité et la performance optimale du produit.",
      },
      icon: <Database />,
    },
    {
      title: {
        en: "6. Functionalities Implementation",
        fr: "6. Implémentation de fonctionnalités",
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
      icon: CodeXml,
      title: {
        en: "Languages",
        fr: "Languages",
      },
      tech: [
        {
          techIcon: TypescriptIcon,
          name: "TypeScript",
        },
        "JavaScript",
        "SQL",
        "HTML/TSX/JSX",
        "CSS/SCSS/LESS",
      ],
    },
    {
      icon: Paintbrush,
      title: {
        en: "Front-End",
        fr: "Front-end",
      },
      tech: [
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
        "Vite.js",
        "TanStack Router",
        "TanStack Query",
        "Electric SQL",
        {
          techIcon: TailwindIcon,
          name: "Tailwind CSS",
        },
        "Material UI",
        "Framer Motion",
        "Zustand",
        "Zod",
        "React Hook Form",
        "Effect",
        "i18next/next-intl",
        "@alewin/useWorker",
      ],
    },
    {
      icon: Cog,
      title: {
        en: "Infrastructure & Back-End",
        fr: "Infrastructure & back-end",
      },
      tech: [
        "RapidAPI",
        "Docker",
        "GitHub Actions",
        "Vercel",
        "Supabase",
        "Google Cloud",
        "PostgreSQL",
      ],
    },
    {
      icon: Braces,
      title: {
        en: "Development Practices",
        fr: "Pratiques de développement",
      },
      tech: [
        "Hexagonal Architecture",
        "Component-Based Architecture",
        "ESLint",
        "Prettier",
        "Jest",
        "Vitest",
      ],
    },
    {
      icon: Palette,
      title: {
        en: "UI/UX",
      },
      tech: ["Figma", "Lighthouse", "Vercel Speed Insights"],
    },
    {
      icon: BrainCircuit,
      title: {
        en: "AI & LLM Integration",
        fr: "Intégration IA & LLM",
      },
      tech: ["OpenRouter", "SerpAPI", "Firebase"],
    },
    {
      icon: Users,
      title: {
        en: "Project Management & Analytics",
        fr: "Gestion de projet & analyse d'audience",
      },
      tech: [
        "Git",
        "GitHub",
        "GitLab",
        "Notion",
        "Jira",
        "Trello",
        "Mixpanel",
        "Vercel Web Analytics",
      ],
    },
    {
      icon: Keyboard,
      title: {
        en: "Productivity Tools",
        fr: "Outils de productivité",
      },
      tooltip: {
        en: "I use these technologies to support my productivity. I'm not a fan of 'vibe-coding'.",
        fr: "J'utilise ces technologies comme support pour soutenir ma productivité. Je ne suis pas adepte du 'vibe-coding'.",
      },
      tech: ["Google Stitch", "Cursor"],
    },
  ],
  about: {
    en: (
      <>
        <strong>
          From Concept to Production: I Build Digital Products Engineered to
          Retain 4x More Users.
        </strong>
        <span>Why is one app more profitable than another?</span>
        <span>
          It’s not just the feature count. It’s the absence of friction. As
          highlighted by recent research on the influence of UX (2025), a
          seamless experience is what dictates conversion rates and user
          loyalty. That’s where I come in. I’m not just a technical executor;
          I’m your end-to-end product partner. My dual expertise is ideal:
        </span>
        <span>
          UI/UX: I craft intuitive journeys that naturally guide the user.
          <br />
          Full-Stack Dev (Web/Mobile/AI): I ensure technical performance that
          eliminates load times and bugs—the silent killers of retention.
        </span>
        <span>
          I build complete products where AI (LLM) integration feels natural and
          invisible.
        </span>
      </>
    ),
    fr: (
      <>
        <strong>
          De la conception à la mise en production : Je crée des produits
          digitaux conçus pour retenir 4x plus d&apos;utilisateurs.
        </strong>
        <span>
          Pourquoi une application est-elle plus lucrative qu&apos;une autre ?
        </span>
        <span>
          Ce n&apos;est pas que le nombre de fonctionnalités. C&apos;est
          l&apos;absence de friction. Comme souligné dans les recherches
          récentes sur l&apos;influence de l&apos;UX (2025), c&apos;est la
          fluidité de l&apos;expérience qui dicte le taux de conversion et la
          fidélité. C&apos;est là que j&apos;interviens. Je ne suis pas
          seulement un exécutant technique, je suis votre partenaire produit
          global avec une double compétence idéale :
        </span>
        <span>
          UI/UX : Je crée des parcours intuitifs qui guident l&apos;utilisateur.
          <br />
          Dev full-stack (Web/Mobile/IA) : Je garantis une performance technique
          qui élimine les temps de chargement et les bugs, tueurs silencieux de
          rétention.
        </span>
        <span>
          Je construis des produits complets où l&apos;intégration d&apos;IA
          (LLM) devient invisible et naturelle.
        </span>
      </>
    ),
  },
  experience: [
    {
      company: "CoSigma.io",
      logo: cosigma,
      projects: [
        {
          title: {
            en: "CoSigma (SaaS)",
          },
          description: [
            {
              en: "CoSigma is a complex document-review platform used by businesses to negotiate and refine PDF specifications. The application enables structured discussions directly on documents, allowing teams to identify issues, track disagreements, and converge toward revision increments that lead to a mutually accepted final version ready for signature. AI augments the workflow by detecting unrequested changes between revisions, surfacing likely-resolved comments, and highlighting points of interest across the document lifecycle.",
              fr: "CoSigma est une plateforme avancée permettant aux entreprises de revoir, commenter et négocier des spécifications au format PDF. L’application structure les échanges autour du document : détection des points de friction, suivi des désaccords, gestion des itérations et convergence vers une version finalisée prête à être signée. L’IA renforce le processus en détectant les modifications non sollicitées entre versions, en identifiant les commentaires potentiellement résolus et en mettant en évidence les zones critiques du document.",
            },
          ],
          responsibilities: [
            {
              en: "Designed and developed the entire front-end of a highly feature-rich application without prior Figma mockups; the UI was conceived and refined directly during implementation using React, Vite.js, TypeScript, and Tailwind.",
              fr: "Conçu et développé l’ensemble du front-end d’une application complexe sans maquettes préalables ; l’interface a été pensée et optimisée directement lors du développement avec React, Vite.js, TypeScript et Tailwind.",
            },
            {
              en: "Focused on building a dense yet intuitive interface that minimizes cognitive load and reduces the number of user clicks, ensuring that even advanced revision workflows remain fast and frictionless.",
              fr: "Créé une interface dense mais intuitive, minimisant la charge cognitive et réduisant le nombre de clics nécessaires pour naviguer entre versions, commentaires, insights IA et étapes de validation.",
            },
            {
              en: "Implemented UI/UX patterns enabling smooth navigation between document versions, AI-generated insights, comment threads, and validation steps.",
              fr: "Mis en place des patterns UI/UX facilitant les workflows avancés de révision et la navigation entre documents lourds.",
            },
            {
              en: "Created scalable component architecture using Context API, Radix UI, ShadCN, and Framer Motion to preserve responsiveness and clarity despite the complexity of the interactions.",
              fr: "Développé une architecture de composants scalable basée sur Context API, Radix UI, ShadCN et Framer Motion, garantissant fluidité et clarté malgré la complexité de l’outil.",
            },
            {
              en: "Optimized the app for speed and usability, ensuring consistently high Lighthouse scores and near-instant navigation between heavy PDF-based interfaces.",
              fr: "Optimisé les performances et l’expérience utilisateur, assurant une navigation quasi instantanée et des scores Lighthouse élevés même sur des interfaces PDF intensives.",
            },
          ],
          technologies: [
            "React.js",
            "React Native",
            "Vite.js",
            "TypeScript",
            "HTML/JSX",
            "CSS/SCSS/LESS",
            "Redux",
            "TanStack Query",
            "Electric SQL",
            "Tailwind CSS",
            "Framer Motion",
            "ESLint",
            "Prettier",
            "Figma",
            "OpenRouter",
            "Git",
            "GitHub",
            "Notion",
            "Trello",
            "GitHub Copilot",
          ],
        },
      ],
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
            "Redux",
            "TanStack Query",
            "Next-intl",
            "Tailwind CSS",
            "Material UI",
            "Framer Motion",
            "ESLint",
            "Prettier",
            "Vercel",
            "Supabase",
            "Google Cloud",
            "PostgreSQL",
            "Figma",
            "Firebase",
            "Git",
            "GitHub",
            "Notion",
            "Cursor",
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
            "Vite.js",
            "JavaScript",
            "HTML/JSX",
            "CSS/SCSS/LESS",
            "Redux",
            "React Router",
            "i18next",
            "Material UI",
            "Cypress",
            "ESLint",
            "Prettier",
            "Figma",
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
            "Vite.js",
            "JavaScript",
            "HTML/JSX",
            "CSS/SCSS/LESS",
            "Figma",
            "Redux",
            "React Router",
            "i18next",
            "Material UI",
            "Cypress",
            "ESLint",
            "Prettier",
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
