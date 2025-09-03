import Findy from "@/components/svg/Findy";
import Github from "@/components/svg/Github";
import LinkedIn from "@/components/svg/Linkedin";
import Malt from "@/components/svg/Malt";
import NextjsIcon from "@/components/svg/Nextjs";
import ReactIcon from "@/components/svg/React";
import TailwindIcon from "@/components/svg/Tailwind";
import TypescriptIcon from "@/components/svg/TypeScript";
import Youtube from "@/components/svg/Youtube";
import businessCard from "@/public/profile/business-card.png";
import freelance from "@/public/profile/freelance.png";
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
  Brain,
  CodeXml,
  Cog,
  Ellipsis,
  HardHat,
  Heart,
  Inbox,
  Paintbrush,
  Palette,
  ReceiptEuro,
  ThumbsUp,
  TrafficCone,
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
    findy: {
      title: "Findy",
      img: <Findy />,
      link: {
        en: "https://findy-code.io/share_profiles/TCXixmT7ylwpK",
        ja: "https://findy-code.io/share_profiles/TCXixmT7ylwpK",
      },
    },
    youtube: {
      title: "YouTube",
      img: <Youtube />,
      link: {
        en: "https://www.youtube.com/@matthieu-vagnon",
        fr: "https://www.youtube.com/@matthieu-vagnon",
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
        en: "A Complete Profile",
        fr: "Un profil complet",
      },
      description: {
        en: "Able to handle projects end-to-end and work fully independently, while ensuring quality and timely delivery.",
        fr: "Capable de gérer un projet de bout en bout et de travailler en totale autonomie, tout en garantissant qualité et respect des délais.",
      },
      icon: <ThumbsUp />,
    },
    {
      title: {
        en: "Smart Pricing",
        fr: "Tarification intelligente",
      },
      description: {
        en: "Normal pricing for short-term projects, adjusted pricing for long-term collaborations.",
        fr: "Tarif normal pour les projets courts, tarif ajusté pour les longues collaborations.",
      },
      icon: <ReceiptEuro />,
    },
    {
      title: {
        en: "Included Maintenance",
        fr: "Maintenance inclue",
      },
      description: {
        en: "Fast and reactive maintenance package included in the price.",
        fr: "Maintenance rapide et réactive inclue dans le prix.",
      },
      icon: <TrafficCone />,
    },
    {
      title: {
        en: "Weekly Progress Updates",
        fr: "Suivi hebdomadaire",
      },
      description: {
        en: "A clear weekly recap email to ensure full transparency and visibility on project progress.",
        fr: "Un compte-rendu clair chaque semaine par email pour assurer transparence et visibilité sur l’avancement du projet.",
      },
      icon: <Inbox />,
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
      tech: [
        "TypeScript",
        "JavaScript",
        "Python",
        "SQL",
        "HTML/JSX",
        "CSS/SCSS/LESS",
      ],
    },
    {
      icon: Brain,
      title: {
        en: "AI",
        fr: "IA",
      },
      tech: [
        "GitHub Copilot",
        "ChatGPT",
        "Xano",
        "OpenAI API",
        "Gemini API",
        "Anthropic API",
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
      icon: HardHat,
      title: {
        en: "DevOps",
      },
      tech: [
        "Docker",
        "Google Cloud",
        "Vercel",
        "Railway",
        "Supabase",
        "Firebase",
        "GitHub Actions",
      ],
    },
    {
      icon: Ellipsis,
      title: {
        en: "Others",
        fr: "Autres",
      },
      tech: ["Git", "ESLint"],
    },
  ],
  frontStack: [
    {
      icon: Paintbrush,
      title: {
        en: "Front-End Frameworks",
        fr: "Frameworks front-end",
      },
      tech: ["React.js", "Next.js", "Cypress"],
    },
    {
      title: {
        en: "Front-End Libraries",
        fr: "Bibliothèques front-end",
      },
      tech: [
        "Redux",
        "TanStack Query",
        "Framer Motion",
        "React Router",
        "Zod",
        "React-i18next",
        "Next-intl",
        "Tailwind CSS",
      ],
    },
    {
      title: {
        en: "Front-End Tools",
        fr: "Outils front-end",
      },
      tech: ["PNPM", "NPM", "Vite"],
    },
    {
      title: {
        en: "Front-End Blocks",
        fr: "Blocs front-end",
      },
      tech: [
        "Material UI",
        "Chakra UI",
        "Bootstrap",
        "Ant Design",
        "ShadCN UI",
        "Radix UI",
      ],
    },
  ],
  backStack: [
    {
      icon: Cog,
      title: {
        en: "Back-End Frameworks",
        fr: "Frameworks back-end",
      },
      tech: ["FastAPI"],
    },
    {
      title: {
        en: "Back-End Libraries",
        fr: "Bibliothèques back-end",
      },
      tech: ["Pydantic", "Pytest"],
    },
    {
      title: {
        en: "Back-End Tools",
        fr: "Outils back-end",
      },
      tech: [
        "Uvicorn",
        "SQLAlchemy",
        "OAuth",
        "PostgreSQL",
        "Postman",
        "TablePlus",
      ],
    },
    {
      title: {
        en: "Back-End Blocks",
        fr: "Blocs back-end",
      },
      tech: ["RapidAPI"],
    },
  ],
  about: {
    en: (
      <>
        <span>
          Hi, I&#39;m Matthieu, full-stack engineer specialized in AI-powered
          SaaS. I don&#39;t just build cutting-edge, accessible and scalable web
          applications: I craft experiences that drive engagement, reduce
          friction and inspire user trust.
        </span>
        <span>
          Combining my developer skills with a strong background in design, I
          bridge the gap between user experience and technical implementation,
          ensuring pixel-perfect, seamless user journeys.
        </span>
        <span>
          In the past, I’ve enabled startups to achieve their first profits,
          helped TotalEnergies strengthen its leadership in the Power & Gas
          market by designing and delivering impactful AI-based solutions. I’m
          now ready to bring this mindset to my next challenge!
        </span>
      </>
    ),
    fr: (
      <>
        <span>
          Bonjour, je suis Matthieu, développeur full-stack spécialisé dans les
          SaaS améliorées par IA. Je ne me contente pas de créer des
          applications web innovantes, accessibles et évolutives : je conçois
          des expériences qui suscitent l’engagement, réduisent les frictions et
          inspirent la confiance des utilisateurs.
        </span>
        <span>
          En associant mes compétences de développeur à une solide expérience en
          design, je comble le fossé entre l’expérience utilisateur et la mise
          en œuvre technique, garantissant des parcours fluides et un rendu
          pixel-perfect.
        </span>
        <span>
          Par le passé, j’ai permis à des start-up de générer leurs premiers
          bénéfices et aidé TotalEnergies à renforcer sa position de leader sur
          le marché de l’énergie (Power & Gas) en concevant et en livrant des
          solutions à fort impact basées sur l’IA. Aujourd’hui, je suis prêt à
          mettre cet état d’esprit au service de mon prochain défi !
        </span>
      </>
    ),
  },
  experience: [
    {
      company: "Matthieu Vagnon (Freelance)",
      logo: freelance,
      projects: [
        {
          title: {
            en: "Hosted Portfolio (mvagnon.dev)",
            fr: "Portfolio hébergé (mvagnon.dev)",
          },
          description: [
            {
              en: "Web portfolio built to showcase my freelancer profile and my past project case studies as well as my links.",
              fr: "Portfolio web construit pour présenter mon profil freelance et mes études de cas de projets passés ainsi que mes liens.",
            },
            {
              en: "Optimized for search engine visibility, achieving a 100/100 score in both SEO and Best Practices on Lighthouse, leveraging Next.js’s server-side rendering.",
              fr: "Optimisé pour la visibilité dans les moteurs de recherche, obtenant un score de 100/100 en SEO et Bonnes Pratiques sur Lighthouse, en exploitant le rendu côté serveur de Next.js.",
            },
            {
              en: "Delivers an intuitive user experience and fast performance, with a 99 Performance score on Lighthouse.",
              fr: "Délivre une expérience utilisateur intuitive et des performances rapides, avec un score Performance de 99 sur Lighthouse.",
            },
            {
              en: "Source code is publicly available on GitHub.",
              fr: "Le code source est disponible publiquement sur GitHub.",
            },
          ],
          responsibilities: [
            {
              en: "Designed the entire application and UI components in Figma.",
              fr: "Conception de l'ensemble de l'application et des composants UI dans Figma.",
            },
            {
              en: "Independently implemented the app using Next.js within less than 4 weeks.",
              fr: "Développement de l'application web en utilisant Next.js dans un délai de moins de 4 semaines.",
            },
          ],
          technologies: [
            "React.js",
            "Next.js",
            "TypeScript",
            "JSX",
            "Context API",
            "TanStack Query",
            "Framer Motion",
            "Next-intl",
            "Tailwind CSS",
            "ShadCN",
            "Radix UI",
            "Webpack",
            "npm",
            "Figma",
          ],
        },
        {
          title: {
            en: "Deliver Software Development Services for a Diverse Range of Clients",
            fr: "Prestations de développement full-stack pour divers clients",
          },
          responsibilities: [
            {
              en: "Provided full-stack development services to companies ranging from startups to international clients with a market cap of $130+ Billion USD, such as TotalEnergies.",
              fr: "Prestations de développement full-stack pour des clients allant de startups à des entreprises internationales (ex. : Pulse Partners, TotalEnergies).",
            },
            {
              en: "Focusing on the user experience (UX) to promote a strong user-first approach.",
              fr: "Accent mis sur l’expérience utilisateur (UX) afin de garantir une approche centrée sur l’utilisateur.",
            },
          ],
          technologies: [
            "React.js",
            "Next.js",
            "JavaScript (ES6+)",
            "TypeScript",
            "JSX",
            "CSS3",
            "Python",
            "SQL",
            "Redux",
            "Context API",
            "Tailwind CSS",
            "Material UI",
            "ShadCN UI",
            "Radix UI",
            "Webpack",
            "npm",
            "FastAPI",
            "Uvicorn",
            "Pydantic",
            "SQLAlchemy",
            "OAuth",
            "PostgreSQL",
            "Figma",
          ],
        },
      ],
      position: {
        en: "Full-Stack Engineer",
        fr: "Développeur full-stack",
      },
      timeline: `2024 - ${new Date().getFullYear()}`,
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
            "JSX",
            "SQL",
            "Redux",
            "Context API",
            "TanStack Query",
            "Framer Motion",
            "Zod",
            "Next-intl",
            "Tailwind CSS",
            "Material UI",
            "ShadCN UI",
            "Radix UI",
            "Webpack",
            "npm",
            "PostgreSQL",
            "Supabase",
            "Figma",
          ],
        },
      ],
      position: {
        en: "Full-stack Engineer & Designer",
        fr: "Développeur full-stack & designer",
      },
      timeline: `2024 - ${new Date().getFullYear()}`,
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
            "JavaScript (ES6+)",
            "JSX",
            "CSS3",
            "Redux",
            "Context API",
            "React-i18next",
            "Material UI",
            "Webpack",
            "Vite",
            "npm",
            "Figma",
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
            "JavaScript (ES6+)",
            "JSX",
            "CSS3",
            "Redux",
            "Context API",
            "React-i18next",
            "Material UI",
            "Webpack",
            "Vite",
            "npm",
            "Figma",
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
        en: "Principal Front-end Engineer & Designer",
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
          technologies: ["JavaScript (ES6+)", "HTML5", "CSS3", "SQL"],
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
          technologies: ["JavaScript (ES6+)", "HTML5", "CSS3", "SQL", "Figma"],
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
