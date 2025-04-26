import Highlight from '@/components/highlight';
import koryoriYa1 from '@/public/koryori-ya/web-1.png';
import koryoriYa2 from '@/public/koryori-ya/web-2.png';
import koryoriYa3 from '@/public/koryori-ya/web-3.png';
import koryoriYa4 from '@/public/koryori-ya/web-4.png';
import mvWeb1 from '@/public/matthieu-vagnon/web-1.png';
import mvWeb2 from '@/public/matthieu-vagnon/web-2.png';
import mvWeb3 from '@/public/matthieu-vagnon/web-3.png';
import mvWeb4 from '@/public/matthieu-vagnon/web-4.png';
import smartInterviewBuilder1 from '@/public/smart-interview/builder-1.png';
import smartInterviewBuilder2 from '@/public/smart-interview/builder-2.png';
import smartInterviewBuilder3 from '@/public/smart-interview/builder-3.png';
import smartInterviewBuilder4 from '@/public/smart-interview/builder-4.png';
import smartInterviewBuilder5 from '@/public/smart-interview/builder-5.png';
import React from 'react';

export const projects: Record<string, Project> = {
  'matthieu-vagnon': {
    title: 'Matthieu Vagnon Web',
    year: 2025,
    type: 'Web Application',
    shortDescription: {
      en: 'Web portfolio for Matthieu Vagnon.',
      fr: 'Portfolio web pour Matthieu Vagnon.',
      ja: 'ヴァンニョン・マチュのウェブポートフォリオ。',
    },
    longDescription: {
      en: (
        <React.Fragment>
          A simple <Highlight>portfolio web application</Highlight> made with{' '}
          <Highlight>React and Next.js</Highlight> letting you watch my case
          studies, my profile, contact me and access my links in a simple way on{' '}
          <Highlight>mobile and desktop</Highlight>.
        </React.Fragment>
      ),
      fr: (
        <React.Fragment>
          Une <Highlight>application web portfolio</Highlight> faite avec{' '}
          <Highlight>React et Next.js</Highlight> vous permettant de regarder
          mes études de cas, mon profil, me contacter et accéder à mes liens de
          manière simple sur <Highlight>mobile et desktop</Highlight>.
        </React.Fragment>
      ),
      ja: (
        <React.Fragment>
          <Highlight>React et Next.js</Highlight>
          で作られたシンプルな
          <Highlight>ポートフォリオウェブアプリケーション</Highlight>
          で、私のケーススタディ、プロフィールの閲覧、連絡先やリンクへのアクセスが
          <Highlight>モバイルとデスクトップ</Highlight>
          で簡単にできます。
        </React.Fragment>
      ),
    },
    tags: {
      en: ['Web Application', 'Portfolio', 'Matthieu Vagnon'],
      fr: ['Application Web', 'Portfolio', 'Matthieu Vagnon'],
      ja: ['ウェブアプリケーション', 'ポートフォリオ', 'ヴァンニョン・マチュ'],
    },
    skills: {
      en: [
        'Web Design',
        'Responsive Design',
        'Web Project Management',
        'Deployment',
        'Web Maintenance',
      ],
      fr: [
        'Design web',
        'Responsive design',
        'Gestion de projet web',
        'Déploiement',
        'Maintenance web',
      ],
      ja: [
        'ウェブデザイン',
        'レスポンシブデザイン',
        'Webプロジェクト管理',
        'デプロイ',
        'Webメンテナンス',
      ],
    },
    technologies: [
      'git',
      'npm',
      'React',
      'Next.js',
      'TypeScript',
      'Tailwind CSS',
      'Shadcn UI',
      'Vercel',
      'Node.js',
      'Figma',
      'ChatGPT',
      'Cursor IDE',
    ],
    previewImg: mvWeb1,
    gallery: {
      img: [
        {
          title: { en: 'Home Page', fr: "Page d'accueil", ja: 'ホームページ' },
          image: mvWeb1,
        },
        {
          title: {
            en: 'Case Study Page',
            fr: "Page d'étude de cas",
            ja: 'ケーススタディページ',
          },
          image: mvWeb2,
        },
        {
          title: {
            en: 'Video Player',
            fr: 'Lecteur vidéo',
            ja: 'ビデオプレーヤー',
          },
          image: mvWeb3,
        },
        {
          title: {
            en: 'Meeting Scheduler',
            fr: 'Planificateur de réunion',
            ja: 'ミーティングスケジューラー',
          },
          image: mvWeb4,
        },
      ],
    },
    relatedUrls: [
      {
        name: { en: 'Matthieu Vagnon Web' },
        url: process.env.NEXT_PUBLIC_URL!,
      },
    ],
  },
  'smart-interview': {
    title: 'Smart Interview',
    year: 2024,
    type: 'SaaS',
    shortDescription: {
      en: 'A platform to create AI-powered questionnaires and mass analyze responses.',
      fr: "Une plateforme pour créer des questionnaires alimentés par l'IA et analyser les réponses en masse.",
      ja: 'AI駆動のアンケートを作成し、回答を大量に分析するプラットフォーム。',
    },
    longDescription: {
      en: (
        <React.Fragment>
          A SaaS platform to create{' '}
          <Highlight>AI-powered questionnaires</Highlight>. A questionnaire is
          created by using the integrated <Highlight>builder</Highlight> or by
          importing a <Highlight>JSON file</Highlight>. The questionnaire is
          then sent to the audience and the responses can be analyzed in the
          same application to{' '}
          <Highlight>target their optimal audience</Highlight>. The AI
          automatically adds context-based questions to the questionnaire when
          the user answers a questionnaire to add maximum details to the
          analysis.
        </React.Fragment>
      ),
      fr: (
        <React.Fragment>
          Une plateforme pour créer des{' '}
          <Highlight>questionnaires alimentés par l&apos;IA</Highlight>. Un
          questionnaire est créé en utilisant le <Highlight>builder</Highlight>{' '}
          intégré ou en important un <Highlight>fichier JSON</Highlight>. Le
          questionnaire est ensuite envoyé au public et les réponses peuvent
          être analysées dans la même application pour{' '}
          <Highlight>cibler leur audience optimale</Highlight>. L&apos;IA ajoute
          automatiquement des questions contextuelles au questionnaire lorsque
          l&apos;utilisateur répond pour ajouter un maximum de détails à
          l&apos;analyse.
        </React.Fragment>
      ),
      ja: (
        <React.Fragment>
          <Highlight>AI駆動のアンケート</Highlight>
          を作成するためのプラットフォーム。統合された
          <Highlight>ビルダー</Highlight>を使用するか、
          <Highlight>JSONファイル</Highlight>
          をインポートしてアンケートを作成します。アンケートは対象者に送信され、
          <Highlight>最適な対象者を特定する</Highlight>
          ために同じアプリケーションで回答を分析できます。AIは分析に最大限の詳細を追加するため、ユーザーがアンケートに回答する際に文脈に基づいた質問を自動的に追加します。
        </React.Fragment>
      ),
    },
    tags: {
      en: ['AI', 'SaaS', 'Questionnaire', 'Mass Analysis'],
      fr: ['IA', 'SaaS', 'Questionnaire', 'Analyse de masse'],
      ja: ['AI', 'SaaS', 'アンケート', '大量分析'],
    },
    skills: {
      en: [
        'Web Development',
        'Web Design',
        'Responsive Design',
        'Web Project Management',
        'Deployment',
        'Web Maintenance',
      ],
      fr: [
        'Développement web',
        'Design web',
        'Responsive design',
        'Gestion de projet web',
        'Déploiement',
        'Maintenance web',
      ],
      ja: [
        'ウェブ開発',
        'ウェブデザイン',
        'レスポンシブデザイン',
        'ウェブプロジェクト管理',
        'デプロイ',
        'ウェブメンテナンス',
      ],
    },
    technologies: [
      'git',
      'npm',
      'React',
      'Next.js',
      'TypeScript',
      'Tailwind CSS',
      'Shadcn UI',
      'Vercel',
      'Node.js',
      'Docker',
      'Figma',
      'Cursor IDE',
    ],
    previewImg: smartInterviewBuilder5,
    gallery: {
      img: [
        {
          title: {
            en: 'Builder Editor',
            fr: 'Éditeur de générateur',
            ja: 'ジェネレーターエディター',
          },
          image: smartInterviewBuilder2,
        },
        {
          title: {
            en: 'Builder Preview',
            fr: 'Aperçu du générateur',
            ja: 'ジェネレーターのプレビュー',
          },
          image: smartInterviewBuilder3,
        },
        {
          title: {
            en: 'Builder JSON Editor',
            fr: 'Éditeur JSON du générateur',
            ja: 'ジェネレーターのJSONエディター',
          },
          image: smartInterviewBuilder4,
        },
        {
          title: {
            en: 'Builder Presets',
            fr: 'Présets du générateur',
            ja: 'ジェネレーターのプリセット',
          },
          image: smartInterviewBuilder5,
        },
      ],
      video: [
        {
          title: {
            en: 'Builder Tour',
            fr: 'Tour du builder',
            ja: 'ジェネレーターのツアー',
          },
          src: 'https://www.youtube.com/embed/zy5hgYR-H74',
          previewImage: smartInterviewBuilder1,
        },
      ],
    },
    problem: {
      en: (
        <React.Fragment>
          The challenge of this project was to make the user experience
          pleasant. Having reached a stage where the core features were already
          in production, it naturally took me some time to get familiar with the
          code. The situation: a <Highlight>UX that needed work</Highlight>,{' '}
          <Highlight>simplistic and somewhat outdated UI</Highlight>,{' '}
          <Highlight>missing essential front-end features</Highlight> but huge
          potential (talented back-end engineers had already been recruited for
          the application and were doing good work).
        </React.Fragment>
      ),
      fr: (
        <React.Fragment>
          Le défi de ce projet était de rendre l&apos;expérience
          d&apos;utilisation agréable. Étant arrivé à un stade où les
          fonctionnalités de base étaient déjà en production, il m&apos;a
          naturellement fallu un petit peu de temps pour m&apos;imprégner du
          code. L&apos;état des lieux : une <Highlight>UX à revoir</Highlight>,
          l&apos;
          <Highlight>UI simpliste et un peu démodée</Highlight>, des{' '}
          <Highlight>fonctionnalités front essentielles manquantes</Highlight>{' '}
          mais un potentiel énorme (des ingénieurs back-end talentueux avaient
          déjà été recrutés pour l&apos;application et faisaient du bon boulot).
        </React.Fragment>
      ),
      ja: (
        <React.Fragment>
          このプロジェクトの課題は、ユーザー体験を快適にすることでした。基本機能がすでに本番環境にある段階で参加したため、コードに慣れるのに自然と時間がかかりました。状況は以下の通りでした：
          <Highlight>改善が必要なUX</Highlight>、
          <Highlight>シンプルで少し時代遅れなUI</Highlight>、
          <Highlight>重要なフロントエンド機能の不足</Highlight>
          がありましたが、（優秀なバックエンドエンジニアがすでに採用され、良い仕事をしていた）大きな可能性を秘めていました。
        </React.Fragment>
      ),
    },
    solution: {
      en: (
        <React.Fragment>
          To begin with, we had to start with the fundamentals. Knowing that
          Matthieu S., the project manager, was already presenting the product
          for sales purposes, I first focused on UI and UX. I added{' '}
          <Highlight>pages and loading indicators</Highlight>, added some{' '}
          <Highlight>animations for more dynamism</Highlight> and{' '}
          <Highlight>fixed several front-end bugs</Highlight> that were already
          present and frequently caused issues during presentations. Then, I was
          able to focus on implementing{' '}
          <Highlight>secondary features</Highlight> and{' '}
          <Highlight>secondary design elements</Highlight> (spacings, colors,
          ...).
        </React.Fragment>
      ),
      fr: (
        <React.Fragment>
          Pour commencer, il a fallu commencer par les fondamentaux. Sachant que
          Matthieu S., le responsable du projet présentait déjà le produit à des
          fins de vente, je me suis d&apos;abord concentré sur l&apos;UI et
          l&apos;UX. J&apos;ai ajouté des{' '}
          <Highlight>pages et indicateurs de chargement</Highlight>, ajouté
          quelques
          <Highlight>animations pour plus de dynamisme</Highlight> et{' '}
          <Highlight>corrigé certains bugs front-end</Highlight> déjà présents
          et qui posaient fréquemment problème lors de présentations. Ensuite,
          j&apos;ai pu me concentrer sur l&apos;implémentation de
          <Highlight>fonctionnalités secondaires</Highlight> et sur les{' '}
          <Highlight>éléments de design secondaires</Highlight> (spacings,
          couleurs, ...).
        </React.Fragment>
      ),
      ja: (
        <React.Fragment>
          まず、基本的なところから始める必要がありました。プロジェクトマネージャーのMatthieu
          S.が販売目的で製品をすでにプレゼンテーションしていたため、最初にUIとUXに焦点を当てました。
          <Highlight>ページとローディングインジケーター</Highlight>を追加し、
          <Highlight>よりダイナミックなアニメーション</Highlight>
          を加え、プレゼンテーション中によく問題を引き起こしていた
          <Highlight>フロントエンドのバグを修正</Highlight>しました。その後、
          <Highlight>二次的な機能</Highlight>と
          <Highlight>二次的なデザイン要素</Highlight>
          （間隔、色など）の実装に集中することができました。
        </React.Fragment>
      ),
    },
    results: {
      en: (
        <React.Fragment>
          The application is now more <Highlight>user-friendly</Highlight>,{' '}
          <Highlight>intuitive</Highlight>, <Highlight>consistent</Highlight>{' '}
          and lets users <Highlight>save time</Highlight> and{' '}
          <Highlight>resources</Highlight> while creating{' '}
          <Highlight>complex questionnaires</Highlight>. Sales were boosted by{' '}
          <Highlight>fewer bugs</Highlight>, a{' '}
          <Highlight>better appearance</Highlight> and a{' '}
          <Highlight>better perceived UX</Highlight>.
        </React.Fragment>
      ),
      fr: (
        <React.Fragment>
          L&apos;application est maintenant plus{' '}
          <Highlight>user-friendly</Highlight>, <Highlight>intuitive</Highlight>
          , <Highlight>consistante</Highlight> et permet aux utilisateurs de{' '}
          <Highlight>gagner du temps</Highlight> et{' '}
          <Highlight>des ressources</Highlight> tout en créant des{' '}
          <Highlight>questionnaires complexes</Highlight>. Les ventes ont été
          stimulées par <Highlight>moins de bugs</Highlight>, une{' '}
          <Highlight>meilleure apparence</Highlight> et une{' '}
          <Highlight>meilleure UX perçue</Highlight>.
        </React.Fragment>
      ),
      ja: (
        <React.Fragment>
          アプリケーションはより
          <Highlight>ユーザーフレンドリー</Highlight>で、
          <Highlight>直感的</Highlight>で、
          <Highlight>一貫性があり</Highlight>、ユーザーは
          <Highlight>複雑なアンケート</Highlight>を作成しながら
          <Highlight>時間</Highlight>と<Highlight>リソース</Highlight>
          を節約できるようになりました。
          <Highlight>バグが少なく</Highlight>、
          <Highlight>見た目が改善され</Highlight>、
          <Highlight>UXの体験が向上した</Highlight>ことで 売上も伸びました。
        </React.Fragment>
      ),
    },
    relatedUrls: [
      {
        name: { en: 'Pulse Partners' },
        url: 'https://pulse-partners.ch',
      },
    ],
  },
  'koryori-ya': {
    title: 'Koryori Ya Ozaki',
    year: 2024,
    type: 'Web Application',
    shortDescription: {
      en: 'A simple web application for a Japanese restaurant.',
      fr: 'Une application web simple pour un restaurant japonais.',
      ja: '日本料理店のためのシンプルなウェブアプリケーション。',
    },
    longDescription: {
      en: (
        <React.Fragment>
          A simple single page web application for a{' '}
          <Highlight>Japanese restaurant</Highlight> showcasing their adress
          thanks to a <Highlight>map</Highlight> and letting people{' '}
          <Highlight>call them</Highlight> easily.
        </React.Fragment>
      ),
      fr: (
        <React.Fragment>
          Une application web simple pour un{' '}
          <Highlight>restaurant japonais</Highlight> présentant leur adresse
          grâce à une <Highlight>carte</Highlight> et permettant aux personnes
          de <Highlight>les appeler</Highlight> facilement.
        </React.Fragment>
      ),
      ja: (
        <React.Fragment>
          <Highlight>日本料理店</Highlight>
          のシンプルなウェブアプリケーションで、
          <Highlight>地図</Highlight>で住所を表示し、 簡単に
          <Highlight>電話をかける</Highlight>
          ことができるようにしました。
        </React.Fragment>
      ),
    },
    tags: {
      en: ['Web Application', 'Japanese', 'Restaurant'],
      fr: ['Application Web', 'Japonais', 'Restaurant'],
      ja: ['ウェブアプリケーション', '日本語', 'レストラン'],
    },
    skills: {
      en: [
        'Web Development',
        'Web Design',
        'Responsive Design',
        'Web Project Management',
        'Deployment',
        'Web Maintenance',
      ],
      fr: [
        'Développement web',
        'Design web',
        'Responsive design',
        'Gestion de projet web',
        'Déploiement',
        'Maintenance web',
      ],
      ja: [
        'ウェブ開発',
        'ウェブデザイン',
        'レスポンシブデザイン',
        'ウェブプロジェクト管理',
        'デプロイ',
        'ウェブメンテナンス',
      ],
    },
    technologies: [
      'git',
      'npm',
      'React',
      'Vite',
      'TypeScript',
      'CSS',
      'Vercel',
      'Node.js',
      'Figma',
      'Pixelmator',
    ],
    previewImg: koryoriYa3,
    gallery: {
      img: [
        {
          title: {
            en: 'Loading Page',
            fr: 'Page de chargement',
            ja: 'ローディングページ',
          },
          image: koryoriYa1,
        },
        {
          title: {
            en: 'Landing View',
            fr: "Vue d'accueil",
            ja: 'ランディングビュー',
          },
          image: koryoriYa2,
        },
        {
          title: {
            en: 'Concept View',
            fr: 'Vue conceptuelle',
            ja: 'コンセプトビュー',
          },
          image: koryoriYa3,
        },
        { title: { en: 'Map', fr: 'Carte', ja: 'マップ' }, image: koryoriYa4 },
      ],
    },
    problem: {
      en: (
        <React.Fragment>
          The challenge of this project was clearly to design a clean interface
          and develop a dynamic and interactive page in a{' '}
          <Highlight>
            very short timeframe (~ 1 week before restaurant opening)
          </Highlight>{' '}
          while needing to <Highlight>limit infrastructure costs</Highlight>{' '}
          (and thus without using &quot;drag and drop&quot; tools).
        </React.Fragment>
      ),
      fr: (
        <React.Fragment>
          Le défi de ce projet à clairement été de concevoir un design propre et
          de développer une page dynamique et interractive en un{' '}
          <Highlight>
            temps très réduit (~ 1 semaine avant ouverture du restaurant)
          </Highlight>{' '}
          tout avec le besoin de
          <Highlight>limiter les dépenses d&apos;infrastructure</Highlight> (et
          donc sans l&apos;utilisation d&apos;outils &quot;drag and drop&quot;).
        </React.Fragment>
      ),
      ja: (
        <React.Fragment>
          このプロジェクトの課題は、
          <Highlight>
            非常に短い期間（レストランのオープン前の約1週間）
          </Highlight>
          でクリーンなインターフェースを設計し、ダイナミックでインタラクティブなページを開発することでした。また、
          <Highlight>インフラコストを抑える必要があり</Highlight>
          （そのため「ドラッグ＆ドロップ」ツールは使用できませんでした）。
        </React.Fragment>
      ),
    },
    solution: {
      en: (
        <React.Fragment>
          The solution was to create a <Highlight>React app</Highlight> to meet
          the need for <Highlight>interactivity</Highlight> without overloading
          the project with various frameworks to get straight to the point as
          quickly as possible. The mockups were produced in{' '}
          <Highlight>record time on Figma</Highlight> thanks to a few sleepless
          nights and the development was also <Highlight>fast</Highlight> since
          it&apos;s a simple page (and therefore no need to manage too many
          libraries like react-router).
        </React.Fragment>
      ),
      fr: (
        <React.Fragment>
          La solution à été de créer une <Highlight>app React</Highlight> pour
          répondre au besoin d&apos;
          <Highlight>interactivité</Highlight> sans pour autant surcharger le
          projet en frameworks divers pour aller droit au but le plus vite
          possible. Les maquettes ont été produites en un{' '}
          <Highlight>temps record sur Figma</Highlight> grâce à quelques nuits
          sans sommeil et le développement a été lui aussi{' '}
          <Highlight>rapide</Highlight> étant donné que c&apos;est une simple
          page (et donc pas besoin de gérer des trop de librairies comme
          react-router).
        </React.Fragment>
      ),
      ja: (
        <React.Fragment>
          解決策として、<Highlight>インタラクティブ性</Highlight>
          のニーズに応えるため、様々なフレームワークでプロジェクトを過負荷にすることなく、できるだけ早く目的を達成するために
          <Highlight>Reactアプリ</Highlight>を作成しました。徹夜を重ねることで
          <Highlight>Figmaで記録的な速さ</Highlight>
          でモックアップを作成し、シンプルなページであるため（react-routerなどのライブラリを多く管理する必要がない）、開発も
          <Highlight>迅速</Highlight>に進めることができました。
        </React.Fragment>
      ),
    },
    results: {
      en: (
        <React.Fragment>
          The application is now <Highlight>used in production</Highlight> and
          works perfectly well. The <Highlight>menu loads properly</Highlight>{' '}
          and the
          <Highlight>interface is clean</Highlight>. The
          <Highlight>call to action is clear</Highlight> and the
          <Highlight>UX is pleasant</Highlight>, all in record time. The site is
          public so feel free to visit it (link below).
        </React.Fragment>
      ),
      fr: (
        <React.Fragment>
          L&apos;application est maintenant{' '}
          <Highlight>utilisée dans la production</Highlight> et fonctionne
          parfaitement. La <Highlight>carte charge bien</Highlight> et l&apos;
          <Highlight>interface est propre</Highlight>. La{' '}
          <Highlight>appel à l&apos;action est clair</Highlight> et l&apos;
          <Highlight>UX est agréable</Highlight>, tout cela en un temps record.
          Le site est public donc n&apos;hésitez pas à le visiter (lien
          ci-dessous).
        </React.Fragment>
      ),
      ja: (
        <React.Fragment>
          アプリケーションは現在
          <Highlight>本番環境で使用され</Highlight>
          、完璧に動作しています。
          <Highlight>メニューは正しく読み込まれ</Highlight>、
          <Highlight>インターフェースは洗練されています</Highlight>。
          <Highlight>行動喚起が明確</Highlight>で、
          <Highlight>UXは快適</Highlight>
          で、すべてが記録的な速さで実現されました。サイトは公開されているので、ぜひご覧ください（リンクは下記）。
        </React.Fragment>
      ),
    },
    relatedUrls: [
      {
        name: { en: 'Koryori Ya Ozaki' },
        url: 'https://koryoriyaozaki.uk',
      },
    ],
  },
  crystal: {
    title: 'Crystal',
    year: 2023,
    type: 'SaaS',
    shortDescription: {
      en: 'A platform to view and manage AI-powered trading tools.',
      fr: "Une plateforme pour visualiser et gérer des outils de trading alimentés par l'IA.",
      ja: 'AI駆動の取引ツールを表示および管理するプラットフォーム。',
    },
    longDescription: {
      en: (
        <React.Fragment>
          A platform to view and manage{' '}
          <Highlight>AI-powered trading tools</Highlight> initially made for
          <Highlight>Predictive Layer</Highlight> and now actively used by
          <Highlight>TotalEnergies</Highlight> as Predictive Layer was bought in
          2023~2024.
        </React.Fragment>
      ),
      fr: (
        <React.Fragment>
          Une plateforme pour visualiser et gérer des{' '}
          <Highlight>outils de trading alimentés par l&apos;IA</Highlight>{' '}
          initialement créée pour
          <Highlight>Predictive Layer</Highlight> et maintenant activement
          utilisée par <Highlight>TotalEnergies</Highlight> suite au rachat de
          Predictive Layer en 2023~2024.
        </React.Fragment>
      ),
      ja: (
        <React.Fragment>
          Predictive Layer 向けに最初に作成され、2023年〜2024年に
          <Highlight>Predictive Layer</Highlight>
          が買収されたことにより、現在は
          <Highlight>TotalEnergies</Highlight>
          が積極的に使用している
          <Highlight>AI駆動の取引ツール</Highlight>
          を表示および管理するプラットフォーム。
        </React.Fragment>
      ),
    },
    tags: {
      en: ['AI', 'SaaS', 'Trading', 'Analysis'],
      fr: ['IA', 'SaaS', 'Trading', 'Analyse'],
      ja: ['AI', 'SaaS', '取引', '分析'],
    },
    skills: {
      en: [
        'Web Development',
        'Web Design',
        'Responsive Design',
        'Web Project Management',
        'Deployment',
        'Web Maintenance',
      ],
      fr: [
        'Développement web',
        'Design web',
        'Responsive design',
        'Gestion de projet web',
        'Déploiement',
        'Maintenance web',
      ],
      ja: [
        'ウェブ開発',
        'ウェブデザイン',
        'レスポンシブデザイン',
        'ウェブプロジェクト管理',
        'デプロイ',
        'ウェブメンテナンス',
      ],
    },
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
    ],
    problem: {
      en: (
        <React.Fragment>
          The challenge of this project was to be able to display a{' '}
          <Highlight>lot of data</Highlight> in the form of{' '}
          <Highlight>charts</Highlight> without{' '}
          <Highlight>overloading the user</Highlight>
          with too many options and information.
        </React.Fragment>
      ),
      fr: (
        <React.Fragment>
          Le défi de ce projet était de pouvoir afficher une{' '}
          <Highlight>grande quantité de données</Highlight> sous forme de{' '}
          <Highlight>graphiques</Highlight> sans{' '}
          <Highlight>surcharger l&apos;utilisateur</Highlight>
        </React.Fragment>
      ),
      ja: (
        <React.Fragment>
          このプロジェクトの課題は、
          <Highlight>大量のデータ</Highlight>を<Highlight>グラフ</Highlight>
          の形で表示しながら、ユーザーに
          <Highlight>過度な負担をかけない</Highlight>
          ようにすることでした。
        </React.Fragment>
      ),
    },
    solution: {
      en: (
        <React.Fragment>
          Create a tool with <Highlight>multiple pages</Highlight>,{' '}
          <Highlight>clear navigation</Highlight>,{' '}
          <Highlight>managed spacing</Highlight> and{' '}
          <Highlight>beautiful charts</Highlight> thanks to{' '}
          <Highlight>MUI-X</Highlight>.
        </React.Fragment>
      ),
      fr: (
        <React.Fragment>
          Create a tool with <Highlight>multiple pages</Highlight>,{' '}
          <Highlight>clear navigation</Highlight>,{' '}
          <Highlight>managed spacing</Highlight> and{' '}
          <Highlight>beautiful charts</Highlight> thanks to{' '}
          <Highlight>MUI-X</Highlight>.
        </React.Fragment>
      ),
      ja: (
        <React.Fragment>
          <Highlight>複数のページ</Highlight>、
          <Highlight>明確なナビゲーション</Highlight>、
          <Highlight>適切な間隔</Highlight>
          、そして<Highlight>MUI-X</Highlight>による
          <Highlight>美しいグラフ</Highlight>を備えたツールを作成しました。
        </React.Fragment>
      ),
    },
    results: {
      en: (
        <React.Fragment>
          The tool is now <Highlight>used in production</Highlight> by
          TotalEnergies teams and is working perfectly well. The{' '}
          <Highlight>data loads well</Highlight> and the{' '}
          <Highlight>interface is clear</Highlight>.
        </React.Fragment>
      ),
      fr: (
        <React.Fragment>
          L&apos;outil est maintenant{' '}
          <Highlight>utilisé dans la production</Highlight> par les équipes de
          TotalEnergies et fonctionne parfaitement bien. Les{' '}
          <Highlight>données se chargent bien</Highlight> et l&apos;
          <Highlight>interface est claire</Highlight>.
        </React.Fragment>
      ),
      ja: (
        <React.Fragment>
          このツールは現在TotalEnergiesのチームによって
          <Highlight>本番環境で使用されており</Highlight>
          、完璧に動作しています。
          <Highlight>データが正常に読み込まれ</Highlight>、
          <Highlight>インターフェースが明確</Highlight>です。
        </React.Fragment>
      ),
    },
  },
};
