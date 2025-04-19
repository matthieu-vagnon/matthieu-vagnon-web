import freelance from '@/public/profile/freelance.png';
import influactive from '@/public/profile/influactive.jpeg';
import me from '@/public/profile/me.png';
import predictiveLayer from '@/public/profile/predictive-layer.png';

export const profile: Profile = {
  avatarUrl: me,
  about: {
    en: (
      <div className='flex flex-col gap-3'>
        <span>
          🪄 I’m not just a developer — I’m a magician who:
          <ul className='list-[upper-roman] list-inside'>
            <li>Increases your customer loyalty</li>
            <li>Unlocks the full potential of your SaaS or web app</li>
            <li>Makes you stand out from the competition</li>
            <li>Teach you how to internalize my competences</li>
          </ul>
        </span>
        <span>
          📌 I’m a front-end developer (React & Next.js expert) and digital
          designer with a strong belief: No matter how great your product is,
          it’s worth nothing without a high-quality user interface. Because
          UI/UX is the first and most powerful lever for conversion — even more
          than advanced features.
        </span>
        <span>
          👆 The truth? User experience often matters more than raw
          functionality.
        </span>
        <span>
          👨‍💻 As a hybrid developer-designer, I merge design and development into
          a single smooth process, which leads to:
          <ul className='list-[upper-roman] list-inside'>
            <li>Faster delivery</li>
            <li>Pixel-perfect implementation</li>
            <li>Lower development costs</li>
          </ul>
        </span>
      </div>
    ),
    fr: (
      <div className='flex flex-col gap-3'>
        <span>
          🪄 Je ne suis pas un simple développeur, je suis un magicien qui :
          <ul className='list-[upper-roman] list-inside'>
            <li>Améliore la fidélité de vos clients</li>
            <li>Booste le potentiel de vos SaaS/applications</li>
            <li>Vous fait briller face à la concurrence</li>
            <li>Vous apprend à internaliser mes compétences</li>
          </ul>
        </span>
        <span>
          📌 Je suis un développeur front-end, expert en React et Next.js et
          designer digital, dont la conviction est qu&apos;une application web,
          peu importe ce qu&apos;elle apporte, ne vaut rien sans une interface
          utilisateur de qualité car c&apos;est là le premier levier de
          conversion, bien avant les features avancées.
        </span>
        <span>
          👆 La réalité c&apos;est que l&apos;expérience de l&apos;utilisateur
          prévaut bien souvent sur les fonctionnalités brutes.
        </span>
        <span>
          👨‍💻 En tant que développeur-designer, j&apos;apporte une unification
          des processus de design et développement, ce qui résulte en :
          <ul className='list-[upper-roman] list-inside'>
            <li>Une livraison plus rapide</li>
            <li>Un rendu 100% fidèle à vos maquettes</li>
            <li>Une mise en œuvre moins coûteuse</li>
          </ul>
        </span>
      </div>
    ),
    ja: (
      <div className='flex flex-col gap-3'>
        <span>
          🪄 私はただの開発者ではありません。私は魔法使いです。
          <ul className='list-[upper-roman] list-inside'>
            <li>ユーザーのロイヤリティを高め</li>
            <li>あなたのSaaSやWebアプリのポテンシャルを最大化し</li>
            <li>競合との差別化を実現します</li>
            <li>私の能力を内面化する方法を教える</li>
          </ul>
        </span>
        <span>
          📌
          私はReact・Next.jsのエキスパートであり、デジタルデザイナーでもあるフロントエンド開発者です。
          どれだけ優れたサービスでも、質の高いUIがなければ価値はありません。
          なぜなら、UI/UXこそが最も強力なコンバージョンのレバーだからです。高度な機能よりも、まずは体験。
        </span>
        <span>
          👆
          実際、ユーザーが感じる「体験」は、機能そのものよりも重要になることが多いのです。
        </span>
        <span>
          👨‍💻 デザインと開発の両方を担える私だからこそ、プロセスを統一でき、
          <ul className='list-[upper-roman] list-inside'>
            <li>開発スピードの向上</li>
            <li>デザイン通りの忠実な実装</li>
            <li>コスト削減</li>
          </ul>
        </span>
      </div>
    ),
  },
  experience: [
    {
      company: 'Matthieu Vagnon',
      logo: freelance,
      technologies: [
        'React',
        'Next.js',
        'TypeScript',
        'Tailwind CSS',
        'Material UI',
        'Motion',
        'Figma',
      ],
      position: {
        en: 'Front-end Engineer, Digital Designer and Programming Advisor',
        fr: 'Développeur front-end, designer digital et mentor en programmation',
        ja: 'フロントエンジニア、デジタルデザイナー、プログラミングアドバイザー',
      },
      description: [
        {
          en: 'Designed and developed React.js and Next.js SaaS, bringing a strong added value on user experience and less delivery time due to unified design and front-end development processes.',
          fr: 'Conception et développement de solutions SaaS en React.js et Next.js, apportant une forte valeur ajoutée en termes d’expérience utilisateur et réduisant les délais de livraison grâce à l’unification du design et des processus de développement front-end.',
          ja: 'React.jsとNext.jsのSaaSを設計および開発し、ユーザーエクスペリエンスの向上と、デザインとフロントエンド開発プロセスの統一による迅速な納品を実現します。',
        },
        {
          en: 'Implemented innovative solutions to enhance user experience and optimize performance on complex projects.',
          fr: 'Mise en œuvre de solutions innovantes pour améliorer l’expérience utilisateur et optimiser les performances sur des projets complexes.',
          ja: '複雑なプロジェクトでユーザーエクスペリエンスを向上させ、パフォーマンスを最適化するための革新的なソリューションを実装します。',
        },
        {
          en: 'Collaborated with cross-functional teams to deliver high-quality digital products that exceeded client expectations.',
          fr: 'Collaboration avec des équipes pluridisciplinaires pour livrer des produits digitaux de haute qualité, dépassant les attentes des clients.',
          ja: 'クロスファンクショナルチームと協力して、クライアントの期待を超える高品質なデジタルプロダクトを提供します。',
        },
        {
          en: 'Worked on AI-based web applications, multiple SaaS, ...',
          fr: 'Contribution à des applications web basées sur l’IA ainsi qu’à plusieurs solutions SaaS, etc.',
          ja: 'AIベースのウェブアプリケーション、複数のSaaS、...の開発に貢献しました。',
        },
      ],
      timeline: `2024 - ${new Date().getFullYear()}`,
    },
    {
      company: 'Predictive Layer',
      logo: predictiveLayer,
      technologies: ['React', 'JavaScript', 'Material UI', 'Vite.js', 'Figma'],
      position: {
        en: 'Principal Front-end Developer & Digital Designer',
        fr: 'Développeur front-end principal & designer digital',
        ja: 'プリンシパルフロントエンド開発者&デジタルデザイナー',
      },
      description: [
        {
          en: 'Developed multiple React.js web applications to display AI-generated data for Predictive Layer (now owned by TotalEnergies).',
          fr: 'Développement de plusieurs applications web en React.js pour afficher des données générées par l’IA pour Predictive Layer (désormais propriété de TotalEnergies).',
          ja: 'Predictive Layer（現在はTotalEnergiesの所有）によって生成されたAIデータを表示するためのReact.jsのWebアプリケーションを開発しました。',
        },
        {
          en: 'Was involved in both design and development processes and collaborated with a back-end engineer.',
          fr: 'Participation aux processus de design et de développement, en collaboration avec un ingénieur back-end.',
          ja: 'デザインと開発の両方に関与し、バックエンドエンジニアと協力しました。',
        },
        {
          en: 'Utilized skills in front-end development and digital design to create visually appealing and functional interfaces.',
          fr: 'Mise à profit des compétences en développement front-end et en design digital pour créer des interfaces à la fois esthétiques et fonctionnelles.',
          ja: 'フロントエンド開発とデジタルデザインのスキルを活用して、視覚的に魅力的で機能的なインターフェースを作成しました。',
        },
        {
          en: 'Worked as an independent with an exclusivity contract with Predictive Layer.',
          fr: 'Travail en tant qu’indépendant sous contrat d’exclusivité avec Predictive Layer.',
          ja: 'Predictive Layerとの独占契約で独立して働きました。',
        },
      ],
      timeline: '2022 - 2024',
    },
    {
      company: 'Influactive',
      logo: influactive,
      technologies: ['JavaScript', 'HTML', 'CSS'],
      position: {
        en: 'Full-Stack Engineer',
        fr: 'Développeur full-stack',
        ja: 'フルスタックエンジニア',
      },
      description: [
        {
          en: 'Developed fully customized themes on WordPress websites for Influactive in Lyon, France.',
          fr: 'Développement de thèmes WordPress entièrement personnalisés pour Influactive à Lyon, France.',
          ja: 'Lyon, FranceのInfluactiveのWordPressサイトに完全にカスタマイズされたテーマを開発しました。',
        },
        {
          en: 'Integrated and maintained various JavaScript functionalities to enhance user experience.',
          fr: 'Intégration et maintenance de diverses fonctionnalités JavaScript pour améliorer l’expérience utilisateur.',
          ja: 'JavaScriptのさまざまな機能を統合し、ユーザーエクスペリエンスを向上させました。',
        },
        {
          en: 'Implemented cookie management, user tracking, and form submission features to optimize website performance.',
          fr: 'Mise en place de la gestion des cookies, du suivi des utilisateurs et des fonctionnalités de soumission de formulaires pour optimiser les performances des sites web.',
          ja: 'Cookie管理、ユーザートラッキング、およびフォーム送信機能を実装して、ウェブサイトのパフォーマンスを最適化しました。',
        },
      ],
      timeline: '2021 - 2022',
    },
  ],
  education: [
    {
      responsible: 'University of California, Los Angeles',
      timeline: '2018 - Present',
      type: {
        en: 'School',
        fr: 'École',
        ja: '学校',
      },
      degree: {
        en: 'Bachelor of Science',
        fr: 'Bachelor de Science',
        ja: 'バイオリンサイエンス士',
      },
      href: 'https://www.ucla.edu/',
    },
  ],
};
