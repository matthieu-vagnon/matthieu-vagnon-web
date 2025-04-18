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
        <span>
          A simple <Highlight color='gray'>portfolio web application</Highlight>{' '}
          made with <Highlight color='gray'>React and Next.js</Highlight>{' '}
          letting you watch my case studies, my profile, contact me and access
          my links in a simple way on{' '}
          <Highlight color='gray'>mobile and desktop</Highlight>.
        </span>
      ),
      fr: (
        <span>
          Une <Highlight color='gray'>application web portfolio</Highlight>{' '}
          faite avec <Highlight color='gray'>React et Next.js</Highlight> vous
          permettant de regarder mes études de cas, mon profil, me contacter et
          accéder à mes liens de manière simple sur{' '}
          <Highlight color='gray'>mobile et desktop</Highlight>.
        </span>
      ),
      ja: (
        <span>
          <Highlight color='gray'>React et Next.js</Highlight>
          で作られたシンプルな
          <Highlight color='gray'>
            ポートフォリオウェブアプリケーション
          </Highlight>
          で、私のケーススタディ、プロフィールの閲覧、連絡先やリンクへのアクセスが
          <Highlight color='gray'>モバイルとデスクトップ</Highlight>
          で簡単にできます。
        </span>
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
      'Cursor IDE',
      'React',
      'Next.js',
      'Tailwind CSS',
      'TypeScript',
      'Shadcn UI',
      'NPM',
      'Vercel',
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
        <span>
          A SaaS platform to create{' '}
          <Highlight color='gray'>AI-powered questionnaires</Highlight>. A
          questionnaire is created by using the integrated{' '}
          <Highlight color='gray'>builder</Highlight> or by importing a{' '}
          <Highlight color='gray'>JSON file</Highlight>. The questionnaire is
          then sent to the audience and the responses can be analyzed in the
          same application to{' '}
          <Highlight color='gray'>target their optimal audience</Highlight>. The
          AI automatically adds context-based questions to the questionnaire
          when the user answers a questionnaire to add maximum details to the
          analysis.
        </span>
      ),
      fr: (
        <span>
          Une plateforme pour créer des{' '}
          <Highlight color='gray'>
            questionnaires alimentés par l&apos;IA
          </Highlight>
          . Un questionnaire est créé en utilisant le{' '}
          <Highlight color='gray'>builder</Highlight> intégré ou en important un{' '}
          <Highlight color='gray'>fichier JSON</Highlight>. Le questionnaire est
          ensuite envoyé au public et les réponses peuvent être analysées dans
          la même application pour{' '}
          <Highlight color='gray'>cibler leur audience optimale</Highlight>.
          L&apos;IA ajoute automatiquement des questions contextuelles au
          questionnaire lorsque l&apos;utilisateur répond pour ajouter un
          maximum de détails à l&apos;analyse.
        </span>
      ),
      ja: (
        <span>
          <Highlight color='gray'>AI駆動のアンケート</Highlight>
          を作成するためのプラットフォーム。統合された
          <Highlight color='gray'>ビルダー</Highlight>を使用するか、
          <Highlight color='gray'>JSONファイル</Highlight>
          をインポートしてアンケートを作成します。アンケートは対象者に送信され、
          <Highlight color='gray'>最適な対象者を特定する</Highlight>
          ために同じアプリケーションで回答を分析できます。AIは分析に最大限の詳細を追加するため、ユーザーがアンケートに回答する際に文脈に基づいた質問を自動的に追加します。
        </span>
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
      'Cursor IDE',
      'React',
      'Next.js',
      'TypeScript',
      'Tailwind CSS',
      'Shadcn UI',
      'NPM',
      'Vercel',
      'Supabase',
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
        <span>
          The challenge of this project was to make the user experience
          pleasant. Having reached a stage where the core features were already
          in production, it naturally took me some time to get familiar with the
          code. The situation: a{' '}
          <Highlight color='red'>UX that needed work</Highlight>,{' '}
          <Highlight color='red'>simplistic and somewhat outdated UI</Highlight>
          ,{' '}
          <Highlight color='red'>
            missing essential front-end features
          </Highlight>{' '}
          but huge potential (talented back-end engineers had already been
          recruited for the application and were doing good work).
        </span>
      ),
      fr: (
        <span>
          Le défi de ce projet était de rendre l&apos;expérience
          d&apos;utilisation agréable. Étant arrivé à un stade où les
          fonctionnalités de base étaient déjà en production, il m&apos;a
          naturellement fallu un petit peu de temps pour m&apos;imprégner du
          code. L&apos;état des lieux : une{' '}
          <Highlight color='red'>UX à revoir</Highlight>, l&apos;
          <Highlight color='red'>UI simpliste et un peu démodée</Highlight>, des{' '}
          <Highlight color='red'>
            fonctionnalités front essentielles manquantes
          </Highlight>{' '}
          mais un potentiel énorme (des ingénieurs back-end talentueux avaient
          déjà été recrutés pour l&apos;application et faisaient du bon boulot).
        </span>
      ),
      ja: (
        <span>
          このプロジェクトの課題は、ユーザー体験を快適にすることでした。基本機能がすでに本番環境にある段階で参加したため、コードに慣れるのに自然と時間がかかりました。状況は以下の通りでした：
          <Highlight color='red'>改善が必要なUX</Highlight>、
          <Highlight color='red'>シンプルで少し時代遅れなUI</Highlight>、
          <Highlight color='red'>重要なフロントエンド機能の不足</Highlight>
          がありましたが、（優秀なバックエンドエンジニアがすでに採用され、良い仕事をしていた）大きな可能性を秘めていました。
        </span>
      ),
    },
    solution: {
      en: (
        <span>
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
        </span>
      ),
      fr: (
        <span>
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
        </span>
      ),
      ja: (
        <span>
          まず、基本的なところから始める必要がありました。プロジェクトマネージャーのMatthieu
          S.が販売目的で製品をすでにプレゼンテーションしていたため、最初にUIとUXに焦点を当てました。
          <Highlight>ページとローディングインジケーター</Highlight>を追加し、
          <Highlight>よりダイナミックなアニメーション</Highlight>
          を加え、プレゼンテーション中によく問題を引き起こしていた
          <Highlight>フロントエンドのバグを修正</Highlight>しました。その後、
          <Highlight>二次的な機能</Highlight>と
          <Highlight>二次的なデザイン要素</Highlight>
          （間隔、色など）の実装に集中することができました。
        </span>
      ),
    },
    results: {
      en: (
        <span>
          The application is now more{' '}
          <Highlight color='gray'>user-friendly</Highlight>,{' '}
          <Highlight color='gray'>intuitive</Highlight>,{' '}
          <Highlight color='gray'>consistent</Highlight> and lets users{' '}
          <Highlight color='gray'>save time</Highlight> and{' '}
          <Highlight color='gray'>resources</Highlight> while creating{' '}
          <Highlight color='gray'>complex questionnaires</Highlight>. Sales were
          boosted by <Highlight color='gray'>fewer bugs</Highlight>, a{' '}
          <Highlight color='gray'>better appearance</Highlight> and a{' '}
          <Highlight color='gray'>better perceived UX</Highlight>.
        </span>
      ),
      fr: (
        <span>
          L&apos;application est maintenant plus{' '}
          <Highlight color='gray'>user-friendly</Highlight>,{' '}
          <Highlight color='gray'>intuitive</Highlight>,{' '}
          <Highlight color='gray'>consistante</Highlight> et permet aux
          utilisateurs de <Highlight color='gray'>gagner du temps</Highlight> et{' '}
          <Highlight color='gray'>des ressources</Highlight> tout en créant des{' '}
          <Highlight color='gray'>questionnaires complexes</Highlight>. Les
          ventes ont été stimulées par{' '}
          <Highlight color='gray'>moins de bugs</Highlight>, une{' '}
          <Highlight color='gray'>meilleure apparence</Highlight> et une{' '}
          <Highlight color='gray'>meilleure UX perçue</Highlight>.
        </span>
      ),
      ja: (
        <span>
          アプリケーションはより
          <Highlight color='gray'>ユーザーフレンドリー</Highlight>で、
          <Highlight color='gray'>直感的</Highlight>で、
          <Highlight color='gray'>一貫性があり</Highlight>、ユーザーは
          <Highlight color='gray'>複雑なアンケート</Highlight>を作成しながら
          <Highlight color='gray'>時間</Highlight>と
          <Highlight color='gray'>リソース</Highlight>
          を節約できるようになりました。
          <Highlight color='gray'>バグが少なく</Highlight>、
          <Highlight color='gray'>見た目が改善され</Highlight>、
          <Highlight color='gray'>UXの体験が向上した</Highlight>ことで
          売上も伸びました。
        </span>
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
        <span>
          A simple single page web application for a{' '}
          <Highlight color='gray'>Japanese restaurant</Highlight> showcasing
          their adress thanks to a <Highlight color='gray'>map</Highlight> and
          letting people <Highlight color='gray'>call them</Highlight> easily.
        </span>
      ),
      fr: (
        <span>
          Une application web simple pour un{' '}
          <Highlight color='gray'>restaurant japonais</Highlight> présentant
          leur adresse grâce à une <Highlight color='gray'>carte</Highlight> et
          permettant aux personnes de{' '}
          <Highlight color='gray'>les appeler</Highlight> facilement.
        </span>
      ),
      ja: (
        <span>
          <Highlight color='gray'>日本料理店</Highlight>
          のシンプルなウェブアプリケーションで、
          <Highlight color='gray'>地図</Highlight>で住所を表示し、 簡単に
          <Highlight color='gray'>電話をかける</Highlight>
          ことができるようにしました。
        </span>
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
    technologies: ['React', 'TypeScript', 'CSS', 'NPM', 'Vercel'],
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
        <span>
          The challenge of this project was clearly to design a clean interface
          and develop a dynamic and interactive page in a{' '}
          <Highlight color='red'>
            very short timeframe (~ 1 week before restaurant opening)
          </Highlight>{' '}
          while needing to{' '}
          <Highlight color='red'>limit infrastructure costs</Highlight> (and
          thus without using &quot;drag and drop&quot; tools).
        </span>
      ),
      fr: (
        <span>
          Le défi de ce projet à clairement été de concevoir un design propre et
          de développer une page dynamique et interractive en un{' '}
          <Highlight color='red'>
            temps très réduit (~ 1 semaine avant ouverture du restaurant)
          </Highlight>{' '}
          tout avec le besoin de
          <Highlight color='red'>
            limiter les dépenses d&apos;infrastructure
          </Highlight>{' '}
          (et donc sans l&apos;utilisation d&apos;outils &quot;drag and
          drop&quot;).
        </span>
      ),
      ja: (
        <span>
          このプロジェクトの課題は、
          <Highlight color='red'>
            非常に短い期間（レストランのオープン前の約1週間）
          </Highlight>
          でクリーンなインターフェースを設計し、ダイナミックでインタラクティブなページを開発することでした。また、
          <Highlight color='red'>インフラコストを抑える必要があり</Highlight>
          （そのため「ドラッグ＆ドロップ」ツールは使用できませんでした）。
        </span>
      ),
    },
    solution: {
      en: (
        <span>
          The solution was to create a <Highlight>React app</Highlight> to meet
          the need for <Highlight>interactivity</Highlight> without overloading
          the project with various frameworks to get straight to the point as
          quickly as possible. The mockups were produced in{' '}
          <Highlight>record time on Figma</Highlight> thanks to a few sleepless
          nights and the development was also <Highlight>fast</Highlight> since
          it&apos;s a simple page (and therefore no need to manage too many
          libraries like react-router).
        </span>
      ),
      fr: (
        <span>
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
        </span>
      ),
      ja: (
        <span>
          解決策として、<Highlight>インタラクティブ性</Highlight>
          のニーズに応えるため、様々なフレームワークでプロジェクトを過負荷にすることなく、できるだけ早く目的を達成するために
          <Highlight>Reactアプリ</Highlight>を作成しました。徹夜を重ねることで
          <Highlight>Figmaで記録的な速さ</Highlight>
          でモックアップを作成し、シンプルなページであるため（react-routerなどのライブラリを多く管理する必要がない）、開発も
          <Highlight>迅速</Highlight>に進めることができました。
        </span>
      ),
    },
    results: {
      en: (
        <span>
          The application is now{' '}
          <Highlight color='gray'>used in production</Highlight> and works
          perfectly well. The{' '}
          <Highlight color='gray'>menu loads properly</Highlight> and the
          <Highlight color='gray'>interface is clean</Highlight>. The
          <Highlight color='gray'>call to action is clear</Highlight> and the
          <Highlight color='gray'>UX is pleasant</Highlight>, all in record
          time. The site is public so feel free to visit it (link below).
        </span>
      ),
      fr: (
        <span>
          L&apos;application est maintenant{' '}
          <Highlight color='gray'>utilisée dans la production</Highlight> et
          fonctionne parfaitement. La{' '}
          <Highlight color='gray'>carte charge bien</Highlight> et l&apos;
          <Highlight color='gray'>interface est propre</Highlight>. La{' '}
          <Highlight color='gray'>appel à l&apos;action est clair</Highlight> et
          l&apos;
          <Highlight color='gray'>UX est agréable</Highlight>, tout cela en un
          temps record. Le site est public donc n&apos;hésitez pas à le visiter
          (lien ci-dessous).
        </span>
      ),
      ja: (
        <span>
          アプリケーションは現在
          <Highlight color='gray'>本番環境で使用され</Highlight>
          、完璧に動作しています。
          <Highlight color='gray'>メニューは正しく読み込まれ</Highlight>、
          <Highlight color='gray'>インターフェースは洗練されています</Highlight>
          。<Highlight color='gray'>行動喚起が明確</Highlight>で、
          <Highlight color='gray'>UXは快適</Highlight>
          で、すべてが記録的な速さで実現されました。サイトは公開されているので、ぜひご覧ください（リンクは下記）。
        </span>
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
        <span>
          A platform to view and manage{' '}
          <Highlight color='gray'>AI-powered trading tools</Highlight> initially
          made for
          <Highlight color='gray'>Predictive Layer</Highlight> and now actively
          used by <Highlight color='gray'>TotalEnergies</Highlight> as
          Predictive Layer was bought in 2023~2024.
        </span>
      ),
      fr: (
        <span>
          Une plateforme pour visualiser et gérer des{' '}
          <Highlight color='gray'>
            outils de trading alimentés par l&apos;IA
          </Highlight>{' '}
          initialement créée pour
          <Highlight color='gray'>Predictive Layer</Highlight> et maintenant
          activement utilisée par{' '}
          <Highlight color='gray'>TotalEnergies</Highlight> suite au rachat de
          Predictive Layer en 2023~2024.
        </span>
      ),
      ja: (
        <span>
          <Highlight color='gray'>Predictive Layer</Highlight>
          向けに最初に作成され、2023年〜2024年にPredictive
          Layerが買収されたことにより、現在は
          <Highlight color='gray'>TotalEnergies</Highlight>
          が積極的に使用している
          <Highlight color='gray'>AI駆動の取引ツール</Highlight>
          を表示および管理するプラットフォーム。
        </span>
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
      'React',
      'JavaScript',
      'NPM',
      'React Router',
      'Material UI',
      'MUI-X',
    ],
    problem: {
      en: (
        <span>
          The challenge of this project was to be able to display a{' '}
          <Highlight color='red'>lot of data</Highlight> in the form of{' '}
          <Highlight color='red'>charts</Highlight> without{' '}
          <Highlight color='red'>overloading the user</Highlight>
          with too many options and information.
        </span>
      ),
      fr: (
        <span>
          Le défi de ce projet était de pouvoir afficher une{' '}
          <Highlight color='red'>grande quantité de données</Highlight> sous
          forme de <Highlight color='red'>graphiques</Highlight> sans{' '}
          <Highlight color='red'>surcharger l&apos;utilisateur</Highlight>
        </span>
      ),
      ja: (
        <span>
          このプロジェクトの課題は、
          <Highlight color='red'>大量のデータ</Highlight>を
          <Highlight color='red'>グラフ</Highlight>
          の形で表示しながら、ユーザーに
          <Highlight color='red'>過度な負担をかけない</Highlight>
          ようにすることでした。
        </span>
      ),
    },
    solution: {
      en: (
        <span>
          Create a tool with <Highlight>multiple pages</Highlight>,{' '}
          <Highlight>clear navigation</Highlight>,{' '}
          <Highlight>managed spacing</Highlight> and{' '}
          <Highlight>beautiful charts</Highlight> thanks to{' '}
          <Highlight>MUI-X</Highlight>.
        </span>
      ),
      fr: (
        <span>
          Create a tool with <Highlight>multiple pages</Highlight>,{' '}
          <Highlight>clear navigation</Highlight>,{' '}
          <Highlight>managed spacing</Highlight> and{' '}
          <Highlight>beautiful charts</Highlight> thanks to{' '}
          <Highlight>MUI-X</Highlight>.
        </span>
      ),
      ja: (
        <span>
          <Highlight>複数のページ</Highlight>、
          <Highlight>明確なナビゲーション</Highlight>、
          <Highlight>適切な間隔</Highlight>
          、そして<Highlight>MUI-X</Highlight>による
          <Highlight>美しいグラフ</Highlight>を備えたツールを作成しました。
        </span>
      ),
    },
    results: {
      en: (
        <span>
          The tool is now <Highlight color='gray'>used in production</Highlight>{' '}
          by TotalEnergies teams and is working perfectly well. The{' '}
          <Highlight color='gray'>data loads well</Highlight> and the{' '}
          <Highlight color='gray'>interface is clear</Highlight>.
        </span>
      ),
      fr: (
        <span>
          L&apos;outil est maintenant{' '}
          <Highlight color='gray'>utilisé dans la production</Highlight> par les
          équipes de TotalEnergies et fonctionne parfaitement bien. Les{' '}
          <Highlight color='gray'>données se chargent bien</Highlight> et
          l&apos;
          <Highlight color='gray'>interface est claire</Highlight>.
        </span>
      ),
      ja: (
        <span>
          このツールは現在TotalEnergiesのチームによって
          <Highlight color='gray'>本番環境で使用されており</Highlight>
          、完璧に動作しています。
          <Highlight color='gray'>データが正常に読み込まれ</Highlight>、
          <Highlight color='gray'>インターフェースが明確</Highlight>です。
        </span>
      ),
    },
  },
};
