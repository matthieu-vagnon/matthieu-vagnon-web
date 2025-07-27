import Highlight from "@/components/Highlight";
import { Li, Ul } from "@/components/List";
import CssIcon from "@/components/svg/Css";
import HtmlIcon from "@/components/svg/Html";
import JavaScriptIcon from "@/components/svg/JavaScript";
import MuiIcon from "@/components/svg/Mui";
import NextjsIcon from "@/components/svg/Nextjs";
import ReactIcon from "@/components/svg/React";
import TailwindIcon from "@/components/svg/Tailwind";
import TypeScriptIcon from "@/components/svg/TypeScript";
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

export const profile: Profile = {
  avatarUrl: me,
  description: {
    en: `"The most overlooked skill in web development is empathy." — Matthieu Vagnon, UX-Driven Full-Stack Engineer`,
    fr: `La compétence la plus sous-estimée dans le développement web, c'est l'empathie. — Matthieu Vagnon, Développeur full-stack UX-first`,
  },
  businessCard: {
    image: businessCard,
    title: {
      en: "Business Card",
      fr: "Carte de visite",
      ja: "ビジネスカード",
    },
  },
  stackLogos: [
    {
      id: 1,
      name: "React",
      img: ReactIcon,
    },
    {
      id: 2,
      name: "Next.js",
      img: NextjsIcon,
    },
    {
      id: 3,
      name: "JavaScript",
      img: JavaScriptIcon,
    },
    {
      id: 4,
      name: "TypeScript",
      img: TypeScriptIcon,
    },
    {
      id: 5,
      name: "HTML",
      img: HtmlIcon,
    },
    {
      id: 6,
      name: "CSS",
      img: CssIcon,
    },
    {
      id: 7,
      name: "Tailwind CSS",
      img: TailwindIcon,
    },
    {
      id: 8,
      name: "Material UI",
      img: MuiIcon,
    },
  ],
  aiTools: ["ChatGPT", "Claude", "Cursor IDE", "GitHub Copilot"],
  languages: [
    "JavaScript (ES6+)",
    "TypeScript",
    "HTML5/JSX",
    "CSS3/SCSS/LESS",
    "Python",
    "SQL",
  ],
  frontendFrameworks: ["React.js", "Next.js"],
  stateManagement: ["Redux", "Context API"],
  frontendLibraries: [
    "TanStack Query (React Query)",
    "Framer Motion",
    "React Router",
    "Zod",
    "React-i18next",
    "Next-intl",
    "Plotly.js",
  ],
  uiLibraries: [
    "Tailwind CSS",
    "Material UI",
    "Chakra UI",
    "Bootstrap",
    "Ant Design",
    "Shadcn UI",
    "Radix UI",
  ],
  buildTools: ["Webpack", "Vite", "npm", "Yarn"],
  backend: [
    "FastAPI",
    "Uvicorn",
    "Pydantic",
    "SQLAlchemy",
    "OAuth",
    "PostgreSQL",
    "Supabase",
  ],
  testing: ["React Testing Library", "Cypress", "Pytest"],
  performance: ["Lighthouse", "Web Vitals", "Code Splitting", "Lazy Loading"],
  accessibility: [
    "WCAG 2.1 Standards",
    "Aria Attributes",
    "Screen Reader Compatibility",
  ],
  devops: ["Docker", "GitHub Actions", "Vercel"],
  bestPractices: [
    "ESLint",
    "Responsive Design",
    "Cross-Browser Compatibility",
    "Atomic Design",
    "Component-Driven Development",
    "SEO Optimization",
  ],
  design: ["Figma"],
  other: ["Git", "Visual Studio Code", "Prettier"],
  about: {
    en: (
      <>
        <span>
          As a full-stack engineer, I don&apos;t just build{" "}
          <Highlight>cutting-edge</Highlight>, <Highlight>accessible</Highlight>
          , and <Highlight>scalable</Highlight> web applications: I craft{" "}
          <Highlight>
            experiences that drive engagement, reduce friction and build user
            trust
          </Highlight>{" "}
          from Japan 🇯🇵
        </span>
        <span>
          Combining my developer skills with a{" "}
          <Highlight>strong background in design</Highlight>, I bridge the gap
          between design and implementation, ensuring{" "}
          <Highlight>pixel-perfect, seamless user experiences</Highlight>.
        </span>
        <span>
          I worked with entities from early-stage startups like{" "}
          <Highlight>Pulse Partners</Highlight> to global companies like{" "}
          <Highlight>TotalEnergies</Highlight>.
        </span>
      </>
    ),
    fr: (
      <>
        <span>
          En tant que développeur full-stack, je ne me contente pas de créer des
          applications web <Highlight>performantes</Highlight>,{" "}
          <Highlight>accessibles</Highlight> et{" "}
          <Highlight>évolutives</Highlight> : je conçois des{" "}
          <Highlight>
            expériences qui renforcent l’engagement, réduisent les frictions et
            instaurent la confiance des utilisateurs
          </Highlight>{" "}
          depuis le Japon 🇯🇵
        </span>
        <span>
          Grâce à ma double compétence en{" "}
          <Highlight>développement et en design</Highlight>, je fais le lien
          entre intention graphique et implémentation technique pour livrer des
          interfaces soignées,{" "}
          <Highlight>
            pixel-perfect, prêtes pour la production, et pensées pour
            l’utilisateur
          </Highlight>
          .
        </span>
        <span>
          J’ai travaillé avec des startups en phase de lancement comme{" "}
          <Highlight>Pulse Partners</Highlight> jusqu&apos;à de grandes
          entreprises comme <Highlight>TotalEnergies</Highlight>.
        </span>
      </>
    ),
    ja: (
      <>
        <span>
          <Highlight>高性能で美しく直感的な</Highlight>
          ウェブアプリケーションとSaaSを設計しています。
        </span>
        <span>
          多くの開発者が「機能する」インターフェースを提供する中、私はさらに一歩進んで、ユーザーに
          <Highlight>製品を使いたくなる</Highlight>体験を創り出します —
          そして、また戻ってきたくなる体験を。
        </span>
        <span>
          私はReactとNext.jsに精通したフロントエンド開発者であり、UI/UXデザイナー、そしてプロジェクトマネージャーでもあります。私の信念は、ウェブアプリケーションがどんな機能を持っていても、
          <Highlight>
            質の高いユーザーインターフェースなしでは価値がない
          </Highlight>
          ということです。それは高度な機能よりもはるかに重要な、最初の顧客獲得の鍵だからです。
        </span>
        <span>
          開発者兼デザイナーとして、私は
          <Highlight>デザインと開発プロセスの統合</Highlight>
          をもたらし、その結果：
        </span>
        <Ul>
          <Li>
            <Highlight>より迅速な</Highlight>納品
          </Li>
          <Li>
            デザインモックアップに<Highlight>100%忠実な</Highlight>実装
          </Li>
          <Li>
            <Highlight>コスト効率の良い</Highlight>実装
          </Li>
        </Ul>
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
