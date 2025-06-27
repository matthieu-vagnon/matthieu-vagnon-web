import Highlight from '@/components/highlight';
import { Li, Ul } from '@/components/list';
import CssIcon from '@/components/svg/css';
import HtmlIcon from '@/components/svg/html';
import JavaScriptIcon from '@/components/svg/javascript';
import MuiIcon from '@/components/svg/mui';
import NextjsIcon from '@/components/svg/nextjs';
import ReactIcon from '@/components/svg/react';
import TailwindIcon from '@/components/svg/tailwind';
import TypeScriptIcon from '@/components/svg/typescript';
import businessCardEn from '@/public/en/business-card.png';
import businessCardFr from '@/public/fr/business-card.png';
import businessCardJa from '@/public/ja/business-card.png';
import freelance from '@/public/profile/freelance.png';
import google from '@/public/profile/google.jpg';
import influactive from '@/public/profile/influactive.jpeg';
import me from '@/public/profile/me.png';
import meta from '@/public/profile/meta.jpeg';
import polytech from '@/public/profile/polytech.webp';
import predictiveLayer from '@/public/profile/predictive-layer.png';
import pulsePartners from '@/public/profile/pulse-partners.png';
import saintThomas from '@/public/profile/saint-thomas.png';
import toeic from '@/public/profile/toeic.webp';
import univLyon1 from '@/public/profile/univ-lyon1.png';
import univLyon2 from '@/public/profile/univ-lyon2.jpg';

export const profile: Profile = {
  avatarUrl: me,
  description: {
    en: `"The most overlooked skill in web development is empathy." — Matthieu Vagnon, UX-Driven Full-Stack Engineer`,
    fr: `La compétence la plus sous-estimée dans le développement web, c'est l'empathie. — Matthieu Vagnon, Développeur full-stack UX-first`,
  },
  businessCard: {
    en: {
      image: businessCardEn,
      title: 'Business Card',
    },
    fr: {
      image: businessCardFr,
      title: 'Carte de visite',
    },
    ja: {
      image: businessCardJa,
      title: 'ビジネスカード',
    },
  },
  stackLogos: [
    {
      id: 1,
      name: 'React',
      img: ReactIcon,
    },
    {
      id: 2,
      name: 'Next.js',
      img: NextjsIcon,
    },
    {
      id: 3,
      name: 'JavaScript',
      img: JavaScriptIcon,
    },
    {
      id: 4,
      name: 'TypeScript',
      img: TypeScriptIcon,
    },
    {
      id: 5,
      name: 'HTML',
      img: HtmlIcon,
    },
    {
      id: 6,
      name: 'CSS',
      img: CssIcon,
    },
    {
      id: 7,
      name: 'Tailwind CSS',
      img: TailwindIcon,
    },
    {
      id: 8,
      name: 'Material UI',
      img: MuiIcon,
    },
  ],
  frontendStack: [
    'React.js',
    'Next.js',
    'TypeScript',
    'JavaScript',
    'JSX',
    'HTML',
    'TailwindCSS',
    'CSS',
    'MaterialUI',
    'Framer Motion',
    'Redux',
    'Zod',
    'Cypress',
    'ESLint',
  ],
  backendStack: [
    'PostgreSQL',
    'Prisma',
    'Next.js API Routes',
    'Fastify',
    'Node.js',
    'SQL',
  ],
  otherStack: ['Vercel', 'Supabase', 'Docker', 'Git', 'Cursor IDE', 'Figma'],
  softSkills: [
    {
      en: 'Adaptable',
      fr: 'Adaptable',
    },
    {
      en: 'Continuous Learner',
      fr: 'Apprentissage continu',
    },
    {
      en: 'Autonomous',
      fr: 'Autonome',
    },
    {
      en: 'Detail-Oriented',
      fr: 'Méticuleux',
    },
  ],
  about: {
    en: (
      <>
        <span>
          As a front-end engineer, I don&apos;t just build{' '}
          <Highlight>cutting-edge</Highlight>, <Highlight>accessible</Highlight>
          , and <Highlight>scalable</Highlight> web applications — I craft{' '}
          <Highlight>
            experiences that drive engagement, reduce friction and build user
            trust
          </Highlight>{' '}
          from Japan 🇯🇵
        </span>
        <span>
          Combining my developer skills with a{' '}
          <Highlight>strong background in design</Highlight>, I bridge the gap
          between design and implementation — ensuring{' '}
          <Highlight>pixel-perfect, seamless user experiences</Highlight>.
        </span>
        <span>
          From early-stage startups to global companies like{' '}
          <Highlight>TotalEnergies</Highlight>, I’ve helped teams turn complex
          product ideas into{' '}
          <Highlight>smooth, high-impact web experiences</Highlight>.
        </span>
      </>
    ),
    fr: (
      <>
        <span>
          En tant que développeur front-end, je ne me contente pas de créer des
          applications web <Highlight>performantes</Highlight>,{' '}
          <Highlight>accessibles</Highlight> et{' '}
          <Highlight>évolutives</Highlight> — je conçois des{' '}
          <Highlight>
            expériences qui renforcent l’engagement, réduisent les frictions et
            instaurent la confiance des utilisateurs
          </Highlight>{' '}
          depuis le Japon 🇯🇵
        </span>
        <span>
          Grâce à ma double compétence en{' '}
          <Highlight>développement et en design</Highlight>, je fais le lien
          entre intention graphique et implémentation technique — pour livrer
          des interfaces soignées,{' '}
          <Highlight>
            pixel-perfect, prêtes pour la production, et pensées pour
            l’utilisateur
          </Highlight>
          .
        </span>
        <span>
          Des startups en phase de lancement aux grandes entreprises comme{' '}
          <Highlight>TotalEnergies</Highlight>, j’ai aidé des équipes à
          transformer des idées complexes en{' '}
          <Highlight>expériences web fluides et à fort impact</Highlight>.
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
      company: 'Matthieu Vagnon',
      logo: freelance,
      technologies: [
        'React.js',
        'Next.js',
        'Next-intl',
        'Vite',
        'React Router',
        'TypeScript',
        'JavaScript',
        'TailwindCSS',
        'MaterialUI',
        'Framer Motion',
        'Cypress',
        'ESLint',
        'PostgreSQL',
        'Prisma',
        'Next.js API Routes',
        'Fastify',
        'Node.js',
        'SQL',
        'Vercel',
        'Supabase',
        'Docker',
        'Git',
        'Cursor IDE',
        'Figma',
      ],
      position: {
        en: 'Full-Stack Engineer',
        fr: 'Développeur full-stack',
      },
      description: [
        {
          en: 'Providing full-stack development services to companies ranging from startups to big international clients (e.g., Pulse Partners, TotalEnergies).',
          fr: 'Prestations de développement full-stack pour des clients allant de startups à des entreprises internationales (ex. : Pulse Partners, TotalEnergies).',
        },
        {
          en: 'Focusing on the user experience (UX) to promote a strong user-first approach.',
          fr: 'Accent mis sur l’expérience utilisateur (UX) afin de garantir une approche centrée sur l’utilisateur.',
        },
      ],
      timeline: `2024 - ${new Date().getFullYear()}`,
    },
    {
      company: 'Pulse Partners',
      logo: pulsePartners,
      technologies: [
        'React.js',
        'Next.js',
        'TypeScript',
        'TailwindCSS',
        'MaterialUI',
        'Framer Motion',
        'Cypress',
        'ESLint',
        'Node.js',
        'Vercel',
        'Supabase',
        'Docker',
        'Git',
        'Cursor IDE',
        'Figma',
      ],
      position: {
        en: 'Front-end Engineer & Designer',
        fr: 'Développeur front-end & designer',
      },
      description: [
        {
          en: 'Worked on the SmartInterview web application.',
          fr: 'Travail sur l’application web SmartInterview.',
        },
        {
          en: 'Development of new features to enhance experience: question order drag & drop, question presets, unification of the builder and analytics into one single app, and more.',
          fr: "Développement de nouvelles features pour améliorer l'expérience globale : drag & drop des questions, presets de question, unification du builder et des analytics en une application unique, et plus.",
        },
        {
          en: 'Development of new fully customizable builder elements (via JSONForms): matrix, table, slider, radio button and more.',
          fr: 'Développement de plusieurs éléments hautement personnalisables au sein du builder (via JSONForms) : matrice, tableau, slider, bouton radio, et plus.',
        },
        {
          en: 'UI/UX enhancements: visual loaders, responsive design, graphical cohesion, and more.',
          fr: "Améliorations UI/UX : loaders visuels, design responsive, cohésion graphique de l'interface, et plus.",
        },
      ],
      timeline: `2024 - ${new Date().getFullYear()}`,
    },
    {
      company: 'Predictive Layer',
      logo: predictiveLayer,
      technologies: [
        'React.js',
        'Vite',
        'React Router',
        'JavaScript',
        'MaterialUI',
        'Auth0',
        'Cypress',
        'ESLint',
        'Docker',
        'Git',
        'Figma',
      ],
      position: {
        en: 'Principal Front-end Developer & Designer',
        fr: 'Développeur front-end principal & designer',
      },
      description: [
        {
          en: 'Worked on the Crystal web application.',
          fr: 'Travail sur l’application web Crystal.',
        },
        {
          en: 'Design of the whole application (10+ pages) via Figma.',
          fr: 'Conception complète de l’interface de l’application (10+ pages) via Figma.',
        },
        {
          en: 'Front-end development from scratch mainly using React, Vite, MaterialUI and React Router.',
          fr: 'Développement front-end from scratch avec React, Vite, Material UI et React Router.',
        },
        {
          en: 'Implementation of complex charts using MaterialUI-X.',
          fr: 'Implémentation de graphiques complexes avec Material UI-X.',
        },
        {
          en: 'Close collaboration with a back-end engineer providing the API to ensure seamless integration.',
          fr: 'Collaboration étroite avec l’ingénieur back-end en charge de l’API pour assurer une intégration fluide.',
        },
        {
          en: 'Worked on the demo web application.',
          fr: 'Travail sur l’application web de démonstration.',
        },
        {
          en: 'Design from scratch of various demo web applications using Figma.',
          fr: 'Conception des interfaces de multiples démos des produits de Predictive Layer from scratch avec Figma.',
        },
        {
          en: 'Front-end implementation of those applications in React, using Vite.',
          fr: 'Développement front-end de ces démos en React et Vite.',
        },
        {
          en: 'User account implementation using Auth0 and unification of the demos user accounts.',
          fr: 'Implémentation d’un système de comptes utilisateurs via Auth0 et unification des diverses démos.',
        },
        {
          en: 'Led the creation of a new modern visual branding system for the company (flat design, vivid color palette, streamlined components) using Figma.',
          fr: 'Refonte complète de l’identité visuelle de l’entreprise : flat design, palette de couleurs vives, composants UI modernisés — réalisée sous Figma.',
        },
      ],
      timeline: '2022 - 2024',
    },
    {
      company: 'Influactive',
      logo: influactive,
      technologies: ['JavaScript', 'JSX', 'HTML', 'CSS', 'SQL', 'Git'],
      position: {
        en: 'Full-Stack Engineer',
        fr: 'Développeur full-stack',
      },
      description: [
        {
          en: 'Work on WordPress themes integration.',
          fr: 'Travail sur l’intégration de thèmes WordPress.',
        },
        {
          en: 'Development of fully customized WordPress themes tailored to specific client requirements.',
          fr: 'Développement de thèmes WordPress entièrement personnalisés selon les besoins spécifiques des clients.',
        },
        {
          en: 'Maintenance and development of JavaScript features (e.g., video players).',
          fr: 'Maintenance et développement de fonctionnalités JavaScript (ex. : lecteurs vidéo).',
        },
        {
          en: 'Work on the cookie management panel.',
          fr: 'Travail sur le panneau de gestion des cookies.',
        },
        {
          en: 'Development of a custom HTML, CSS and JavaScript panel from scratch, enabling site admins to add, remove and configure multiple cookies which are then suggested to visitors via a consent banner.',
          fr: 'Développement d’un panneau de gestion en HTML, CSS et JavaScript sur mesure, permettant aux administrateurs d’ajouter, supprimer et configurer plusieurs cookies, ensuite proposés aux visiteurs via une bannière de consentement.',
        },
        {
          en: 'Integration of user tracking tools such as Google Analytics, Matomo, and others into the panel.',
          fr: 'Intégration d’outils de suivi tels que Google Analytics, Matomo, et d’autres solutions de tracking.',
        },
      ],
      timeline: '2021 - 2022',
    },
  ],
  education: [
    {
      responsible: 'Google',
      logo: google,
      timeline: '2024',
      type: {
        en: ['Certification'],
        fr: ['Certification'],
      },
      degree: {
        en: 'Build Dynamic User Interfaces (UI) for Websites',
        fr: 'Créer des interfaces utilisateur dynamiques (UI) pour les sites web',
      },
      href: 'https://www.coursera.org/account/accomplishments/records/LDRSN31COO2V',
    },
    {
      responsible: 'TOEIC',
      logo: toeic,
      timeline: '2024',
      type: {
        en: ['Certification'],
        fr: ['Certification'],
      },
      degree: {
        en: 'TOEIC 900/990',
      },
      href: 'https://www.etsglobal.org/fr/en/digital-score-report/5AA1E19F84CC89EFC16E4F71685037D641B0632E2719CA4678679C72FA045A1BMjg0YTF4dHlOeUtTbEsycGpUd2dReUJWRk02UkhBUEZMNGVvMHF4YmI1SnJ1Qkxj',
    },
    {
      responsible: 'Meta',
      logo: meta,
      timeline: '2024',
      type: {
        en: ['Certification'],
        fr: ['Certification'],
      },
      degree: {
        en: 'Advanced React',
        fr: 'React avancé',
      },
      href: 'https://www.coursera.org/account/accomplishments/records/DPKTBAHV6WDS',
    },
    {
      responsible: 'Université Lumière Lyon 2',
      logo: univLyon2,
      timeline: '2021 - 2022',
      type: {
        en: ['School'],
        fr: ['École'],
      },
      degree: {
        en: 'Web Project Management',
        fr: 'Gestion de projet web',
      },
      href: 'https://www.univ-lyon2.fr',
    },
    {
      responsible: 'Université Claude Bernard Lyon 1',
      logo: univLyon1,
      timeline: '2020 - 2021',
      type: {
        en: ['School', 'Diploma'],
        fr: ['École', 'Diplôme'],
      },
      degree: {
        en: 'IT Associate Degree',
        fr: 'DUT informatique',
      },
      href: 'https://www.univ-lyon1.fr',
    },
    {
      responsible: 'Polytech Lyon',
      logo: polytech,
      timeline: '2018 - 2020',
      type: {
        en: ['School'],
        fr: ['École'],
      },
      degree: {
        en: 'Preparatory Classes',
        fr: 'École préparatoire aux grandes écoles',
      },
      href: 'https://polytech.univ-lyon1.fr',
    },
    {
      responsible: "Saint-Thomas d'Aquin-Veritas",
      logo: saintThomas,
      timeline: '2011 - 2018',
      type: {
        en: ['School', 'Diploma'],
        fr: ['École', 'Diplôme'],
      },
      degree: {
        en: 'Scientific High School Diploma with Honors',
        fr: 'Baccalauréat scientifique avec mention',
      },
      href: 'https://www.saint-thom.fr',
    },
  ],
};
