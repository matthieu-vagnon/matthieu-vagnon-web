import { LinkButton } from '@/components/button';
import Code from '@/components/code';
import Highlight from '@/components/highlight';
import koryoriYa1 from '@/public/koryori-ya/web-1.png';
import koryoriYa2 from '@/public/koryori-ya/web-2.png';
import koryoriYa3 from '@/public/koryori-ya/web-3.png';
import koryoriYa4 from '@/public/koryori-ya/web-4.png';
import mvWeb1 from '@/public/matthieu-vagnon/web-1.png';
import mvWeb2 from '@/public/matthieu-vagnon/web-2.png';
import mvWeb3 from '@/public/matthieu-vagnon/web-3.png';
import mvWeb4 from '@/public/matthieu-vagnon/web-4.png';
import mvWeb5 from '@/public/matthieu-vagnon/web-5.png';
import mvWeb6 from '@/public/matthieu-vagnon/web-6.png';
import mvWeb7 from '@/public/matthieu-vagnon/web-7.png';
import mvWeb8 from '@/public/matthieu-vagnon/web-8.png';
import mvWeb9 from '@/public/matthieu-vagnon/web-9.png';
import mvWebPreview1 from '@/public/matthieu-vagnon/web-preview-1.png';
import smartInterviewBuilder1 from '@/public/smart-interview/builder-1.png';
import smartInterviewBuilder2 from '@/public/smart-interview/builder-2.png';
import smartInterviewBuilder3 from '@/public/smart-interview/builder-3.png';
import smartInterviewBuilder4 from '@/public/smart-interview/builder-4.png';
import smartInterviewBuilder5 from '@/public/smart-interview/builder-5.png';
import smartInterviewBuilder6 from '@/public/smart-interview/builder-6.png';
import smartInterviewBuilderPreview1 from '@/public/smart-interview/builder-preview-1.png';

export const projects: Record<string, Project> = {
  'matthieu-vagnon': {
    title: 'Matthieu Vagnon',
    year: 2025,
    type: 'webApplication',
    shortDescription: {
      en: 'Web portfolio for Matthieu Vagnon.',
      fr: 'Portfolio web pour Matthieu Vagnon.',
      ja: 'ヴァンニョン・マチュのウェブポートフォリオ。',
    },
    longDescription: {
      en: (
        <>
          This is a <Highlight>React and Next.js</Highlight> web application
          that allows me to present my <Highlight>profile</Highlight>, including
          education, degrees, experiences and skills, several of my{' '}
          <Highlight>past projects</Highlight> as well as their respective{' '}
          <Highlight>case studies</Highlight>. This application also allows you
          to <Highlight>schedule appointments or contact</Highlight> me in a few
          clicks while offering a{' '}
          <Highlight>pleasant experience on mobile and desktop</Highlight>.
        </>
      ),
      fr: (
        <>
          Il s&apos;agit d&apos;une application web{' '}
          <Highlight>React et Next.js</Highlight> qui me permet de présenter mon{' '}
          <Highlight>profil</Highlight>, incluant éducation, diplômes,
          expériences et compétences, plusieurs de mes{' '}
          <Highlight>projets passés</Highlight> ainsi que leur{' '}
          <Highlight>étude de cas</Highlight> respectives. Cette application
          permets également de{' '}
          <Highlight>prendre rendez-vous ou de prendre contact</Highlight> avec
          moi en quelques clics tout en proposant une{' '}
          <Highlight>expérience agréable sur mobile et desktop</Highlight>.
        </>
      ),
      ja: (
        <>
          これは<Highlight>ReactとNext.js</Highlight>を使用した
          <Highlight>ウェブアプリケーション</Highlight>
          で、教育、学位、経験、スキルなどの
          <Highlight>プロフィール</Highlight>、
          <Highlight>過去のプロジェクト</Highlight>、 およびそれぞれの
          <Highlight>ケーススタディ</Highlight>を紹介することができます。
          このアプリケーションでは、数回クリックするだけで
          <Highlight>予約や連絡</Highlight>
          ができ、<Highlight>モバイルとデスクトップで快適な体験</Highlight>
          を提供します。
        </>
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
        'UI/UX Design',
        'Responsive Design',
        'Web Project Management',
        'Deployment',
        'Web Maintenance',
      ],
      fr: [
        'Design web',
        'Design UI/UX',
        'Responsive design',
        'Gestion de projet web',
        'Déploiement',
        'Maintenance web',
      ],
      ja: [
        'ウェブデザイン',
        'UI/UXデザイン',
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
      'Motion',
      'ChatGPT',
      'Cursor IDE',
      'Vercel',
      'Node.js',
      'Figma',
      'Pixelmator',
    ],
    previewImg: mvWeb1,
    gallery: [
      {
        title: {
          en: 'Presentation',
          fr: 'Présentation',
          ja: 'プレゼンテーション',
        },
        src: 'https://www.youtube.com/embed/ItIo2Pu0plQ',
        previewImage: mvWebPreview1,
        audio: 'fr',
        slug: 'presentation',
      },
      {
        title: { en: 'Home Page', fr: "Page d'accueil", ja: 'ホームページ' },
        image: mvWeb1,
        slug: 'home-page',
      },
      {
        title: {
          en: 'Profile Page',
          fr: 'Page de profil',
          ja: 'プロフィールページ',
        },
        image: mvWeb2,
        slug: 'profile-page',
      },
      {
        title: {
          en: 'Case Study',
          fr: 'Étude de cas',
          ja: 'ケーススタディ',
        },
        image: mvWeb3,
        slug: 'case-studies',
      },
      {
        title: {
          en: 'Image Popup',
          fr: "Pop-up d'image",
          ja: '画像ポップアップ',
        },
        image: mvWeb4,
        slug: 'image-popup',
      },
      {
        title: {
          en: 'Meeting Scheduler',
          fr: 'Planificateur de réunion',
          ja: 'ミーティングスケジューラー',
        },
        image: mvWeb5,
        slug: 'meeting-scheduler',
      },
      {
        title: {
          en: 'Configuration Modal',
          fr: 'Modale de configuration',
          ja: '設定モーダル',
        },
        image: mvWeb6,
        slug: 'configuration-modal',
      },
      {
        title: {
          en: 'Home Green',
          fr: 'Accueil vert',
          ja: 'ホーム緑',
        },
        image: mvWeb7,
        slug: 'home-green',
      },
      {
        title: {
          en: 'Home Pink',
          fr: 'Accueil rose',
          ja: 'ホームピンク',
        },
        image: mvWeb8,
        slug: 'home-pink',
      },
      {
        title: {
          en: 'Home Purple',
          fr: 'Accueil violet',
          ja: 'ホーム紫',
        },
        image: mvWeb9,
        slug: 'home-purple',
      },
    ],
    problem: {
      en: [
        <>
          Need to produce a <Highlight>dynamic and performant</Highlight> React
          application to demonstrate my skills with public source code while
          maintaining <Highlight>high-quality SEO</Highlight>.
        </>,
        <>
          <Highlight>Limited time</Highlight> to work on this application in
          parallel with my other projects.
        </>,
        <>
          <Highlight>No back-end infrastructure</Highlight> to host the data
          (profile, projects, ...).
        </>,
      ],
      fr: [
        <>
          Nécessité de produire une application React{' '}
          <Highlight>dynamique et performante</Highlight> pour démontrer mes
          compétences avec un code source publique tout en maintenant un{' '}
          <Highlight>SEO de haute qualité</Highlight>.
        </>,
        <>
          <Highlight>Peu de temps</Highlight> pour travailler sur cette
          application en parallèle de mes autres projets.
        </>,
        <>
          <Highlight>Pas d&apos;infrastructure back-end</Highlight> pour
          héberger les données (profil, projets, ...).
        </>,
      ],
      ja: [
        <>
          <Highlight>動的でパフォーマンスの高い</Highlight>
          Reactアプリケーションを制作し、<Highlight>高品質なSEO</Highlight>
          を維持しながら、公開ソースコードで私のスキルを実証する必要がありました。
        </>,
        <>
          <Highlight>限られた時間</Highlight>
          で他のプロジェクトと並行してこのアプリケーションに取り組む必要がありました。
        </>,
        <>
          データ（プロフィール、プロジェクトなど）をホストするための
          <Highlight>
            バックエンドインフラストラクチャがありませんでした
          </Highlight>
          。
        </>,
      ],
    },
    solution: {
      en: [
        <>
          Decision to use <Highlight>Next.js</Highlight> as a framework to{' '}
          <Highlight>ensure SEO</Highlight> while leveraging the app router to
          manage multiple pages.
        </>,
        <>
          Use of component libraries like{' '}
          <LinkButton external href='https://www.shadcn.net'>
            ShadCN
          </LinkButton>{' '}
          whose strength is <Highlight>customization</Highlight> to accelerate
          development while ensuring{' '}
          <Highlight>high code quality and performance optimization</Highlight>.
        </>,
        <>
          In order to <Highlight>properly manage application data</Highlight>{' '}
          without having to develop a complete back-end infrastructure, I
          created a <Code>/data</Code> folder in which I stored the data needed
          for the application.
        </>,
      ],
      fr: [
        <>
          Décision d&apos;utiliser <Highlight>Next.js</Highlight> comme
          framework afin de <Highlight>garantir le SEO</Highlight> tout en
          tirant profit de l&apos;app router pour gérer les pages multiples.
        </>,
        <>
          Utilisation de librairies de composants comme{' '}
          <LinkButton external href='https://www.shadcn.net'>
            ShadCN
          </LinkButton>{' '}
          dont la force est la
          <Highlight>customisation</Highlight> pour accélérer le développement
          tout en garantissant{' '}
          <Highlight>
            une qualité de code élevée et une optimisation des performances
          </Highlight>
          .
        </>,
        <>
          Afin de{' '}
          <Highlight>
            gérer les données de l&apos;application proprement
          </Highlight>{' '}
          sans avoir à développer une infrastructure back-end complète,
          j&apos;ai créé un dossier <Code>/data</Code> dans lequel j&apos;ai
          stocké les données nécessaires à l&apos;application.
        </>,
      ],
      ja: [
        <>
          <Highlight>Next.js</Highlight>
          をフレームワークとして使用することを決定し、
          複数ページを管理するためにアプリルーターを活用しながら
          <Highlight>SEOを確保</Highlight>しました。
        </>,
        <>
          <Highlight>カスタマイズ性</Highlight>が強みである
          <LinkButton external href='https://www.shadcn.net'>
            ShadCN
          </LinkButton>
          などのコンポーネントライブラリを使用して、開発を加速させながら
          <Highlight>高品質なコードとパフォーマンスの最適化</Highlight>
          を確保しました。
        </>,
        <>
          完全なバックエンドインフラストラクチャを開発することなく
          <Highlight>アプリケーションデータを適切に管理する</Highlight>ために、
          <Code>/data</Code>
          フォルダを作成し、アプリケーションに必要なデータを格納しました。
        </>,
      ],
    },
    results: {
      en: (
        <>
          The application is available and presents all essential information
          about my <Highlight>profile and experiences</Highlight>. The
          application is{' '}
          <Highlight>pleasant to use and visually beautiful</Highlight>.
          Visitors can easily schedule appointments thanks to a successful
          implementation of{' '}
          <LinkButton external href='https://cal.com'>
            Cal.com
          </LinkButton>
          . The integration of{' '}
          <Highlight>recommendations from previous clients</Highlight> is also{' '}
          <Highlight>successful and non-invasive</Highlight>.
        </>
      ),
      fr: (
        <>
          L&apos;application est disponible et présente toutes les informations
          essentielles sur mon <Highlight>profil et mes expériences</Highlight>.
          L&apos;application est{' '}
          <Highlight>
            agréable d&apos;utilisation est visuellement belle
          </Highlight>
          . Les visiteurs peuvent facilement prendre rendez-vous grâce à une
          implémentation réussie de{' '}
          <LinkButton external href='https://cal.com'>
            Cal.com
          </LinkButton>
          . L&apos;intégration des{' '}
          <Highlight>recommendations de précédents clients</Highlight> est
          également <Highlight>réussie et non invasive</Highlight>.
        </>
      ),
      ja: (
        <>
          アプリケーションは利用可能で、私の
          <Highlight>プロフィールと経験</Highlight>
          に関する全ての重要な情報を提示しています。アプリケーションは
          <Highlight>使いやすく視覚的に美しい</Highlight>
          ものになっています。訪問者は
          <LinkButton external href='https://cal.com'>
            Cal.com
          </LinkButton>
          の成功した実装のおかげで、簡単に予約を取ることができます。
          <Highlight>以前のクライアントからの推薦</Highlight>の統合も
          <Highlight>成功しており、押し付けがましくありません</Highlight>。
        </>
      ),
    },
  },
  'smart-interview': {
    title: 'Smart Interview',
    year: 2024,
    type: 'saas',
    shortDescription: {
      en: 'A platform to create and send AI-powered questionnaires and analyze responses.',
      fr: "Une plateforme pour créer et envoyer des questionnaires alimentés par l'IA et analyser les réponses.",
      ja: 'AIを活用したアンケートを作成して送信し、回答を分析するプラットフォーム。',
    },
    longDescription: {
      en: (
        <>
          SmartInterview is a SaaS platform made to create and send{' '}
          <Highlight>AI-powered questionnaires</Highlight>. A questionnaire is
          created by using the integrated builder or by importing a JSON file.
          The questionnaire is then sent to the audience and the responses can
          be analyzed in the same application to{' '}
          <Highlight>target their optimal audience</Highlight>.
          SmartInterview&apos;s AI automatically adds context-based questions to
          the questionnaire when the user answers a questionnaire to add{' '}
          <Highlight>maximum details</Highlight> to the analysis.
        </>
      ),
      fr: (
        <>
          SmartInterview est une plateforme SaaS conçue pour créer et envoyer
          des <Highlight>questionnaires alimentés par l&apos;IA</Highlight>. Un
          questionnaire est créé en utilisant le builder intégré ou en important
          un fichier JSON. Le questionnaire est ensuite envoyé à l&apos;audience
          et les réponses peuvent être analysées dans la même application pour{' '}
          <Highlight>cibler leur audience optimale</Highlight>. L&apos;IA de
          SmartInterview ajoute automatiquement des questions contextuelles au
          questionnaire lorsque l&apos;utilisateur répond pour ajouter un{' '}
          <Highlight>maximum de détails</Highlight> à l&apos;analyse.
        </>
      ),
      ja: (
        <>
          SmartInterviewは<Highlight>AI駆動のアンケート</Highlight>
          を作成して送信するために設計されたSaaSプラットフォームです。アンケートは統合された
          ビルダーを使用するか、 JSONファイル
          をインポートして作成できます。アンケートは対象者に送信され、
          <Highlight>最適な対象者を特定する</Highlight>
          ために同じアプリケーション内で回答を分析することができます。SmartInterviewのAIは、ユーザーがアンケートに回答する際に、分析に
          <Highlight>最大限の詳細</Highlight>
          を追加するために、文脈に基づいた質問を自動的に追加します。
        </>
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
      'ChatGPT',
      'Cursor IDE',
      'Vercel',
      'Node.js',
      'Docker',
      'Figma',
    ],
    previewImg: smartInterviewBuilder6,
    gallery: [
      {
        title: {
          en: 'Presentation',
          fr: 'Présentation',
          ja: 'プレゼンテーション',
        },
        previewImage: smartInterviewBuilderPreview1,
        src: 'https://www.youtube.com/embed/-toDAGtxVpQ',
        audio: 'fr',
        slug: 'presentation',
      },
      {
        title: {
          en: 'Builder Editor',
          fr: 'Éditeur de générateur',
          ja: 'ジェネレーターエディター',
        },
        image: smartInterviewBuilder1,
        slug: 'builder-editor',
      },
      {
        title: {
          en: 'Table Editor',
          fr: 'Éditeur de table',
          ja: 'テーブルエディター',
        },
        image: smartInterviewBuilder2,
        slug: 'builder-preview',
      },
      {
        title: {
          en: 'Table Editor 2',
          fr: 'Éditeur de table 2',
          ja: 'テーブルエディター2',
        },
        image: smartInterviewBuilder3,
        slug: 'table-editor-2',
      },
      {
        title: {
          en: 'Tooltip',
          fr: 'Tooltip',
          ja: 'ツールチップ',
        },
        image: smartInterviewBuilder4,
        slug: 'tooltip',
      },
      {
        title: {
          en: 'JSON Editor',
          fr: 'Éditeur JSON',
          ja: 'JSONエディター',
        },
        image: smartInterviewBuilder5,
        slug: 'json-editor',
      },
      {
        title: {
          en: 'New Question',
          fr: 'Nouvelle question',
          ja: '新しい質問',
        },
        image: smartInterviewBuilder6,
        slug: 'new-question',
      },
    ],
    problem: {
      en: [
        <>
          Enhance <Highlight>experience</Highlight> and{' '}
          <Highlight>interface</Highlight>.
        </>,
        <>
          <Highlight>Integrate advanced, intuitive features</Highlight> to
          empower non-technical users.
        </>,
        <>
          Fix <Highlight>bugs</Highlight> and improve{' '}
          <Highlight>code readability</Highlight>.
        </>,
        <>
          All of this in a reduced timeframe of{' '}
          <Highlight>4 to 5 weeks maximum</Highlight>.
        </>,
      ],
      fr: [
        <>
          Améliorer l&apos;<Highlight>expérience</Highlight> et l&apos;
          <Highlight>interface</Highlight>.
        </>,
        <>
          <Highlight>
            Intégrer des fonctionnalités avancées et intuitives
          </Highlight>{' '}
          pour donner plus de pouvoir aux utilisateurs non techniques.
        </>,
        <>
          Corriger les <Highlight>bugs</Highlight> et améliorer la{' '}
          <Highlight>lisibilité du code</Highlight>.
        </>,
        <>
          Tout cela en un temps réduit de{' '}
          <Highlight>4 à 5 semaines maximum</Highlight>.
        </>,
      ],
      ja: [
        <>
          <Highlight>体験</Highlight>と<Highlight>インターフェース</Highlight>
          を向上させる。
        </>,
        <>
          非技術的なユーザーに力を与えるために
          <Highlight>高度で直感的な機能を統合</Highlight>する。
        </>,
        <>
          <Highlight>バグ</Highlight>を修正し、
          <Highlight>コードの読みやすさ</Highlight>を改善する。
        </>,
        <>
          <Highlight>4から5週間以内</Highlight>で完了する。
        </>,
      ],
    },
    solution: {
      en: [
        <>
          Implemented essential UX enhancements including{' '}
          <Highlight>loading indicators</Highlight> and{' '}
          <Highlight>questions reordering</Highlight>. Integrated interactive{' '}
          <Highlight>modals</Highlight> for confirmation workflows when saving
          questionnaires and adding new questions.
        </>,
        <>
          Developed comprehensive <Highlight>customization options</Highlight>{' '}
          for questionnaire elements, featuring{' '}
          <Highlight>minimum and maximum number</Highlight> constraints,{' '}
          <Highlight>sliders</Highlight>, <Highlight>tables</Highlight>, and
          numerous additional configuration possibilities to enhance user
          control, avoiding user to be forced to edit the JSON file.
        </>,
        <>
          Systematically <Highlight>fixed bugs</Highlight>,{' '}
          <Highlight>optimized</Highlight> application performance through code
          refactoring, and significantly{' '}
          <Highlight>improved code readability</Highlight> for better
          maintainability.
        </>,
      ],
      fr: [
        <>
          Mise en place d&apos;améliorations essentielles de l&apos;UX incluant
          des <Highlight>indicateurs de chargement</Highlight> et la{' '}
          <Highlight>réorganisation des questions</Highlight>. Intégration de{' '}
          <Highlight>fenêtres modales</Highlight> interactives pour les
          processus de confirmation lors de l&apos;enregistrement des
          questionnaires et l&apos;ajout de nouvelles questions.
        </>,
        <>
          Développement d&apos;options complètes de{' '}
          <Highlight>personnalisation</Highlight> pour les éléments du
          questionnaire, comprenant des contraintes de{' '}
          <Highlight>nombre minimum et maximum</Highlight>, des{' '}
          <Highlight>curseurs</Highlight>, des <Highlight>tableaux</Highlight>,
          et de nombreuses possibilités de configuration supplémentaires pour
          améliorer le contrôle utilisateur, évitant ainsi aux utilisateurs
          d&apos;être forcés de modifier le fichier JSON.
        </>,
        <>
          <Highlight>Correction systématique des bugs</Highlight>,{' '}
          <Highlight>optimisation</Highlight> des performances de
          l&apos;application par la refactorisation du code, et amélioration
          significative de la <Highlight>lisibilité du code</Highlight> pour une
          meilleure maintenabilité.
        </>,
      ],
      ja: [
        <>
          <Highlight>ローディングインジケーター</Highlight>や
          <Highlight>質問の並べ替え</Highlight>
          などの重要なUX改善を実装しました。アンケートの保存や新しい質問の追加時の確認ワークフローのために、インタラクティブな
          <Highlight>モーダルウィンドウ</Highlight>を統合しました。
        </>,
        <>
          アンケート要素のための包括的な
          <Highlight>カスタマイズオプション</Highlight>
          を開発し、<Highlight>最小値と最大値</Highlight>の制約、
          <Highlight>スライダー</Highlight>、<Highlight>テーブル</Highlight>
          、およびユーザーがJSONファイルを編集する必要がないようにするための多数の追加設定オプションを備えています。
        </>,
        <>
          <Highlight>バグの体系的な修正</Highlight>、
          コードリファクタリングによるアプリケーションパフォーマンスの
          <Highlight>最適化</Highlight>、および保守性向上のための
          <Highlight>コード可読性の大幅な改善</Highlight>を行いました。
        </>,
      ],
    },
    results: {
      en: (
        <>
          The application is now more <Highlight>user-friendly</Highlight>,{' '}
          <Highlight>intuitive</Highlight>, <Highlight>consistent</Highlight>{' '}
          and lets users <Highlight>save time</Highlight> and{' '}
          <Highlight>resources</Highlight> while creating{' '}
          <Highlight>complex questionnaires</Highlight>. Sales were boosted by{' '}
          <Highlight>fewer bugs</Highlight>, a{' '}
          <Highlight>better appearance</Highlight> and a{' '}
          <Highlight>better perceived UX</Highlight>.
        </>
      ),
      fr: (
        <>
          L&apos;application est maintenant plus{' '}
          <Highlight>user-friendly</Highlight>, <Highlight>intuitive</Highlight>
          , <Highlight>consistante</Highlight> et permet aux utilisateurs de{' '}
          <Highlight>gagner du temps</Highlight> et{' '}
          <Highlight>des ressources</Highlight> tout en créant des{' '}
          <Highlight>questionnaires complexes</Highlight>. Les ventes ont été
          stimulées par <Highlight>moins de bugs</Highlight>, une{' '}
          <Highlight>meilleure apparence</Highlight> et une{' '}
          <Highlight>meilleure UX perçue</Highlight>.
        </>
      ),
      ja: (
        <>
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
        </>
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
    type: 'webApplication',
    shortDescription: {
      en: 'A simple web application for a Japanese restaurant.',
      fr: 'Une application web simple pour un restaurant japonais.',
      ja: '日本料理店のためのシンプルなウェブアプリケーション。',
    },
    longDescription: {
      en: (
        <>
          A single page web application for a{' '}
          <Highlight>Japanese restaurant</Highlight> showcasing their adress
          thanks to a <Highlight>map</Highlight> and letting people{' '}
          <Highlight>call them</Highlight> easily.
        </>
      ),
      fr: (
        <>
          Une application web simple pour un{' '}
          <Highlight>restaurant japonais</Highlight> présentant leur adresse
          grâce à une <Highlight>carte</Highlight> et permettant aux personnes
          de <Highlight>les appeler</Highlight> facilement.
        </>
      ),
      ja: (
        <>
          <Highlight>日本料理店</Highlight>
          のシンプルなウェブアプリケーションで、
          <Highlight>地図</Highlight>で住所を表示し、 簡単に
          <Highlight>電話をかける</Highlight>
          ことができるようにしました。
        </>
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
    previewImg: koryoriYa1,
    gallery: [
      {
        title: {
          en: 'Loading Page',
          fr: 'Page de chargement',
          ja: 'ローディングページ',
        },
        image: koryoriYa1,
        slug: 'loading-page',
      },
      {
        title: {
          en: 'Landing View',
          fr: "Vue d'accueil",
          ja: 'ランディングビュー',
        },
        image: koryoriYa2,
        slug: 'landing-view',
      },
      {
        title: {
          en: 'Concept View',
          fr: 'Vue Concept',
          ja: 'コンセプトビュー',
        },
        image: koryoriYa3,
        slug: 'concept-view',
      },
      {
        title: { en: 'Gallery', fr: 'Galerie', ja: 'ギャラリー' },
        image: koryoriYa4,
        slug: 'gallery',
      },
    ],
    problem: {
      en: [
        <>
          Create a <Highlight>simple and clean interface</Highlight> while{' '}
          <Highlight>limiting infrastructure costs</Highlight>.
        </>,
        <>
          Dealing with <Highlight>a very short timeframe</Highlight> (~ 1 week
          before restaurant opening).
        </>,
      ],
      fr: [
        <>
          Créer une <Highlight>interface simple et épurée</Highlight> tout en{' '}
          <Highlight>limitant les coûts d&apos;infrastructure</Highlight>.
        </>,
        <>
          Faire face à <Highlight>un délai très court</Highlight> (~ 1 semaine
          avant l&apos;ouverture du restaurant).
        </>,
      ],
      ja: [
        <>
          <Highlight>シンプルでクリーンなインターフェース</Highlight>
          を作成しながら、
          <Highlight>インフラコストを抑える</Highlight>必要がありました。
        </>,
        <>
          <Highlight>非常に短い期間</Highlight>
          （レストランのオープン前の約1週間）での対応が必要でした。
        </>,
      ],
    },
    solution: {
      en: [
        <>
          Created a React/Vite app to meet the need for{' '}
          <Highlight>control over the project</Highlight> and to reduce{' '}
          <Highlight>infrastructure costs</Highlight> due to the use of external
          services.
        </>,
        <>
          Used{' '}
          <LinkButton external href='https://vercel.com'>
            Vercel
          </LinkButton>{' '}
          to host application with maximum{' '}
          <Highlight>performance and reliability</Highlight>.
        </>,
      ],
      fr: [
        <>
          J&apos;ai créé une application React/Vite pour répondre au besoin de{' '}
          <Highlight>contrôle sur le projet</Highlight> et pour réduire les{' '}
          <Highlight>coûts d&apos;infrastructure</Highlight> liés à
          l&apos;utilisation de services externes.
        </>,
        <>
          J&apos;ai utilisé{' '}
          <LinkButton external href='https://vercel.com'>
            Vercel
          </LinkButton>{' '}
          pour héberger l&apos;application avec une{' '}
          <Highlight>performance et une fiabilité maximales</Highlight>.
        </>,
      ],
      ja: [
        <>
          <Highlight>プロジェクトの制御</Highlight>
          のニーズに応え、外部サービスの使用に関連する
          <Highlight>インフラコスト</Highlight>
          を削減するためにReact/Viteアプリを作成しました。
        </>,
        <>
          <LinkButton external href='https://vercel.com'>
            Vercel
          </LinkButton>
          を使用して、<Highlight>最大限のパフォーマンスと信頼性</Highlight>
          でアプリケーションをホスティングしました。
        </>,
      ],
    },
    relatedUrls: [
      {
        name: {
          en: 'Access App',
          fr: "Accéder à l'application",
          ja: 'アプリケーションにアクセス',
        },
        url: 'https://koryoriyaozaki.uk',
      },
    ],
  },
};
