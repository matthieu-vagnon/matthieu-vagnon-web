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
import saintThomas from '@/public/profile/saint-thomas.png';
import toeic from '@/public/profile/toeic.webp';
import univLyon1 from '@/public/profile/univ-lyon1.png';
import univLyon2 from '@/public/profile/univ-lyon2.jpg';

export const profile: Profile = {
  avatarUrl: me,
  description: {
    en: 'The most overlooked skill in front-end development is empathy.',
    fr: "La compétence la plus sous-estimée dans le développement front-end, c'est l'empathie.",
    ja: '2021年以来、カスタム、信頼性の高い、魅力的なフロントエンドソリューションを設計・開発することで、クライアントの成長を支援しています。UI/UXデザインと開発を活用し、納期を短縮しコストを削減するための統一されたプロセスを導入しています。',
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
  otherStack: [
    'Vercel',
    'Supabase',
    'Railway',
    'Docker',
    'Git',
    'Cursor IDE',
    'Figma',
  ],
  softSkills: [
    {
      en: 'Adaptable',
      fr: 'Adaptable',
      ja: '適応性',
    },
    {
      en: 'Continuous Learner',
      fr: 'Apprentissage continu',
      ja: '継続的な学習',
    },
    {
      en: 'Autonomous',
      fr: 'Autonome',
      ja: '独立',
    },
    {
      en: 'Detail-Oriented',
      fr: 'Méticuleux',
      ja: '丁寧',
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
          from Himeji, Hyōgo, Japan 🇯🇵
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
          depuis Himeji, Hyōgo au Japon 🇯🇵
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
        ja: 'フルスタックエンジニア',
      },
      description: [
        {
          en: 'Built an AI-powered React web trading tool for TotalEnergies Predictive Department.',
          fr: "Développement d'un outil de trading web basé sur l'IA (React) pour le Predictive Department de TotalEnergies.",
          ja: 'TotalEnergiesのPredictive DepartmentのためにAIでデータ分析を行うReactのWebトレードツールを開発しました。',
        },
        {
          en: 'Delivered scalable SaaS and web apps using React/Next.js for clients across industries like AI, analytics, and e-commerce.',
          fr: "Création d'applications SaaS et de solutions web évolutives avec React/Next.js pour des clients de secteurs variés (IA, data analytics, e-commerce, etc.).",
          ja: '既存の複雑なプロジェクトで様々な機能を実装しました。',
        },
        {
          en: 'Shipped key features and UX improvements on complex legacy projects with strong focus on performance.',
          fr: 'Ajout de nouvelles fonctionnalités et amélioration de l’expérience utilisateur sur des projets complexes existants, avec un fort accent sur la performance.',
          ja: '既存の複雑なプロジェクトでユーザーエクスペリエンスを向上させ、パフォーマンスを最適化するための革新的なアイデアを実装しました。',
        },
        {
          en: 'Collaborated closely with cross-functional teams to turn product ideas into real, user-centered solutions.',
          fr: 'Collaboration étroite avec des équipes pluridisciplinaires (design, produit, développement) pour transformer les besoins métiers en solutions concrètes et centrées utilisateur.',
          ja: '多機能チームと協力し管理して、クライアントの期待を超える高品質な製品を提供しました。',
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
        ja: 'フリーランスの主要なフロントエンド開発者＆デジタルデザイナー',
      },
      description: [
        {
          en: 'Built multiple React applications to visualize AI-generated data for Predictive Layer.',
          fr: 'Développement de plusieurs applications web React pour visualiser des données générées par l’IA pour Predictive Layer.',
          ja: 'Predictive Layer（TotalEnergiesの所有）のためにAIで生成されたデータを表示する複数のReact.jsウェブアプリケーションを開発しました。',
        },
        {
          en: 'Actively contributed to both design and front-end development, in close collaboration with a back-end engineer.',
          fr: 'Contribution active aux phases de design et de développement front-end, en étroite collaboration avec un développeur back-end.',
          ja: 'デザインと開発の両方に関与し、バックエンドエンジニアと協力しました。',
        },
        {
          en: 'Delivered polished, user-friendly interfaces by combining UI/UX principles with advanced front-end techniques.',
          fr: 'Création d’interfaces soignées et intuitives grâce à la combinaison de principes UI/UX et de techniques avancées en développement front-end.',
          ja: 'フロントエンド開発とUI/UXデザインのスキルを活用して、視覚的に魅力的で機能的なインターフェースを作成しました。',
        },
        {
          en: 'Full redesign of the company’s graphic design and branding.',
          fr: 'Refonte totale de la charte graphique et de l’identité visuelle de l’entreprise.',
          ja: '企業のグラフィックデザインとブランディングを完全に刷新しました。',
        },
        {
          en: 'Worked remotely as a contractor via an umbrella company.',
          fr: 'Travail en tant que prestataire à distance via une société de portage.',
          ja: 'リモートで働く契約者として、傘下会社を通じて働いていました。',
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
        ja: 'フルスタックエンジニア',
      },
      description: [
        {
          en: 'Developed bespoke WordPress themes tailored to specific client requirements.',
          fr: 'Développement de thèmes WordPress sur mesure, adaptés aux besoins spécifiques des clients.',
          ja: '完全にカスタマイズされたテーマをWordPressサイトに開発しました。',
        },
        {
          en: 'Implemented and maintained JavaScript features to improve UX and tracking, including cookie consent tools, admin dashboards, and more.',
          fr: 'Intégration et maintenance de fonctionnalités JavaScript pour améliorer l’expérience utilisateur et le suivi des données, notamment la gestion des cookies, des tableaux de bord d’administration, etc.',
          ja: 'クッキー管理、管理ダッシュボードなど、UXとトラッキングを向上させるためのさまざまなJavaScript機能を統合し、維持しました。',
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
        ja: ['証明書'],
      },
      degree: {
        en: 'Build Dynamic User Interfaces (UI) for Websites',
        fr: 'Créer des interfaces utilisateur dynamiques (UI) pour les sites web',
        ja: 'ウェブサイトの動的なユーザーインターフェース（UI）を作成する',
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
        ja: ['証明書'],
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
        ja: ['証明書'],
      },
      degree: {
        en: 'Advanced React',
        fr: 'React avancé',
        ja: 'Reactの高度な使用',
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
        ja: ['大学'],
      },
      degree: {
        en: 'Web Project Management',
        fr: 'Gestion de projet web',
        ja: 'ウェブプロジェクト管理',
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
        ja: ['大学', '学位'],
      },
      degree: {
        en: 'IT Associate Degree',
        fr: 'DUT informatique',
        ja: 'IT専門学校',
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
        ja: ['大学'],
      },
      degree: {
        en: 'Preparatory Classes',
        fr: 'École préparatoire aux grandes écoles',
        ja: '専門学校',
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
        ja: ['中学校', '高校', '学位'],
      },
      degree: {
        en: 'Scientific High School Diploma with Honors',
        fr: 'Baccalauréat scientifique avec mention',
        ja: '優等で科学高校卒業',
      },
      href: 'https://www.saint-thom.fr',
    },
  ],
};
