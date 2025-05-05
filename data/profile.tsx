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
    en: 'Ever since 2022, I help my clients scale by designing and developing custom, reliable and engaging front-end solutions. Leveraging UI/UX design and development, I put in place unified processes to accelerate delivery times and reduce costs.',
    fr: "Depuis 2022, j'aide mes clients à scaler en concevant et développant des solutions front-end sur mesure, fiables et fidélisantes. Alliant design UI/UX et développement, je mets en place des processus unifiés pour accélérer les délais de livraison et réduire les coûts.",
    ja: '2022年以来、カスタム、信頼性の高い、魅力的なフロントエンドソリューションを設計・開発することで、クライアントの成長を支援しています。UI/UXデザインと開発を活用し、納期を短縮しコストを削減するための統一されたプロセスを導入しています。',
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
    'git',
    'npm',
    'React',
    'Next.js',
    'Vite',
    'TypeScript',
    'JavaScript',
    'Tailwind CSS',
    'Material UI',
    'HTML',
    'CSS',
    'Motion',
    'Payload CMS',
    'Auth0',
    'ChatGPT',
    'Cursor IDE',
  ],
  deploymentStack: ['Vercel', 'Node.js', 'Docker'],
  designStack: ['Figma', 'Pixelmator', 'ChatGPT'],
  about: {
    en: (
      <>
        <span>
          I design web and SaaS applications that are{' '}
          <Highlight>performant, aesthetic and intuitive</Highlight>.
        </span>
        <span>
          Where many developers deliver &quot;functional&quot; interfaces, I go
          further by creating experiences that make users{' '}
          <Highlight>want to use your product</Highlight> — and come back to it.
        </span>
        <span>
          I am a front-end developer, expert in React and Next.js, UI/UX
          designer and project manager, whose conviction is that a web
          application, regardless of what it offers,{' '}
          <Highlight>is worthless without a quality user interface</Highlight>{' '}
          because that&apos;s the first lever of conversion, well before
          advanced features.
        </span>
        <span>
          As a developer-designer, I bring a{' '}
          <Highlight>unification of design and development processes</Highlight>
          , which results in:
        </span>
        <Ul>
          <Li>
            A <Highlight>faster</Highlight> delivery
          </Li>
          <Li>
            A <Highlight>100% faithful</Highlight> rendering of your mockups
          </Li>
          <Li>
            A <Highlight>less costly</Highlight> implementation
          </Li>
        </Ul>
      </>
    ),
    fr: (
      <>
        <span>
          Je conçois des applications web et SaaS{' '}
          <Highlight>performantes, esthétiques et intuitives</Highlight>.
        </span>
        <span>
          Là où beaucoup de développeurs livrent des interfaces
          “fonctionnelles”, je vais plus loin en créant des expériences qui
          donnent <Highlight>envie d’utiliser votre produit</Highlight> — et d’y
          revenir.
        </span>
        <span>
          Je suis développeur front-end, expert en React et Next.js, designer
          UI/UX et chef de projet, dont la conviction est qu&apos;une
          application web, peu importe ce qu&apos;elle apporte,{' '}
          <Highlight>
            ne vaut rien sans une interface utilisateur de qualité
          </Highlight>{' '}
          car c&apos;est là le premier levier de conversion, bien avant les
          features avancées.
        </span>
        <span>
          En tant que développeur-designer, j&apos;apporte une{' '}
          <Highlight>
            unification des processus de design et développement
          </Highlight>
          , ce qui résulte en :
        </span>
        <Ul>
          <Li>
            Une livraison plus <Highlight>rapide</Highlight>
          </Li>
          <Li>
            Un rendu <Highlight>100% fidèle</Highlight> à vos maquettes
          </Li>
          <Li>
            Une mise en œuvre <Highlight>moins coûteuse</Highlight>
          </Li>
        </Ul>
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
        'git',
        'npm',
        'React',
        'Next.js',
        'Vite',
        'TypeScript',
        'Tailwind CSS',
        'Motion',
        'Vercel',
        'Node.js',
        'Docker',
        'Figma',
        'Pixelmator',
        'ChatGPT',
        'Cursor IDE',
      ],
      position: {
        en: 'Front-end Engineer & Digital Designer (self-employed)',
        fr: 'Développeur front-end & designer digital (EI)',
        ja: 'フロントエンジニア&デジタルデザイナー（自営業）',
      },
      description: [
        {
          en: 'Design and development of high-performance React and Next.js SaaS solutions and web applications for diverse clients ranging from local businesses to enterprise corporations across multiple industries including AI, data analytics, and more.',
          fr: "Conception et développement de solutions SaaS et applications web en React et Next.js pour divers clients allant des entreprises locales aux grandes sociétés dans plusieurs secteurs, notamment l'IA, l'analyse de données, et plus encore.",
          ja: 'AIやデータ分析など様々な業界の地元企業から大企業まで、多様なクライアントのためにReactとNext.jsを使用した高性能なSaaSソリューションとWebアプリケーションを設計・開発しました。',
        },
        {
          en: 'Implementation of various features in existing and complex projects.',
          fr: 'Implémentation de fonctionalités diverses dans des projets existants et complexes.',
          ja: '既存の複雑なプロジェクトで様々な機能を実装しました。',
        },
        {
          en: 'Implementation of innovative solutions to enhance user experience and optimize performance on existing complex projects.',
          fr: "Mise en œuvre de solutions innovantes pour améliorer l'expérience utilisateur et optimiser les performances de projets existants.",
          ja: '既存の複雑なプロジェクトでユーザーエクスペリエンスを向上させ、パフォーマンスを最適化するための革新的なソリューションを実装しました。',
        },
        {
          en: 'Collaboration with and management of cross-functional teams to deliver high-quality products that exceeded client expectations.',
          fr: "Collaboration et management d'équipes pluridisciplinaires pour livrer des produits de haute qualité, dépassant les attentes des clients.",
          ja: '多機能チームと協力し管理して、クライアントの期待を超える高品質な製品を提供しました。',
        },
      ],
      timeline: `2024 - ${new Date().getFullYear()}`,
    },
    {
      company: 'Predictive Layer',
      logo: predictiveLayer,
      technologies: [
        'git',
        'npm',
        'React',
        'Vite',
        'JavaScript',
        'Material UI',
        'React Router',
        'Auth0',
        'Node.js',
        'Docker',
        'Figma',
        'Pixelmator',
      ],
      position: {
        en: 'Freelance Principal Front-end Developer & Digital Designer',
        fr: 'Développeur front-end principal & designer digital indépendant',
        ja: 'フリーランスのプリンシパルフロントエンド開発者＆デジタルデザイナー',
      },
      description: [
        {
          en: "Development of multiple React.js web applications to display AI-generated data for Predictive Layer (TotalEnergies' property).",
          fr: 'Développement de plusieurs applications web en React.js pour afficher des données générées par l’IA pour Predictive Layer (propriété de TotalEnergies).',
          ja: 'Predictive Layer（TotalEnergiesの所有）のためにAIで生成されたデータを表示する複数のReact.jsウェブアプリケーションを開発しました。',
        },
        {
          en: 'Participation in both design and development processes and collaboration with a back-end engineer.',
          fr: 'Participation aux processus de design et de développement, en collaboration avec un ingénieur back-end.',
          ja: 'デザインと開発の両方に関与し、バックエンドエンジニアと協力しました。',
        },
        {
          en: 'Utilization of advanced skills in front-end development and UI/UX design to create visually appealing and functional interfaces.',
          fr: 'Utilisation de compétences avancées en développement front-end et en design UI/UX pour créer des interfaces à la fois esthétiques et fonctionnelles.',
          ja: 'フロントエンド開発とUI/UXデザインのスキルを活用して、視覚的に魅力的で機能的なインターフェースを作成しました。',
        },
        {
          en: 'Remotely employed contractor through an umbrella company.',
          fr: 'Portage salarial à distance.',
          ja: 'リモートで働く契約者として、傘下会社を通じて働いていました。',
        },
      ],
      timeline: '2022 - 2024',
    },
    {
      company: 'Influactive',
      logo: influactive,
      technologies: ['git', 'JavaScript', 'HTML', 'CSS'],
      position: {
        en: 'Full-Stack Engineer',
        fr: 'Développeur full-stack',
        ja: 'フルスタックエンジニア',
      },
      description: [
        {
          en: 'Development of fully customized themes on WordPress websites.',
          fr: 'Développement de thèmes WordPress entièrement personnalisés.',
          ja: '完全にカスタマイズされたテーマをWordPressサイトに開発しました。',
        },
        {
          en: 'Integration and maintenance of various JavaScript functionalities to enhance user experience and tracking such as cookie management, admin dashboards, and more.',
          fr: "Intégration et maintenance de diverses fonctionnalités JavaScript pour améliorer l'expérience et le suivi utilisateur, telles que des gestionnaires de cookies, des tableaux de bord, et plus encore.",
          ja: 'クッキー管理、管理ダッシュボードなど、ユーザーエクスペリエンスとトラッキングを向上させるためのさまざまなJavaScript機能を統合し、維持しました。',
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
        ja: ['学校'],
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
        ja: ['学校', '学位'],
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
        ja: ['学校'],
      },
      degree: {
        en: 'Preparatory Classes',
        fr: 'École préparatoire aux grandes écoles',
        ja: '高等専門学校',
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
        ja: ['学校', '学位'],
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
