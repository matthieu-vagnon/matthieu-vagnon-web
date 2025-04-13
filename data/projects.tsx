import Highlight from '@/components/highlight'
import koryoriYa1 from '@/public/koryori-ya/web-1.png'
import koryoriYa2 from '@/public/koryori-ya/web-2.png'
import koryoriYa3 from '@/public/koryori-ya/web-3.png'
import koryoriYa4 from '@/public/koryori-ya/web-4.png'
import mvWeb1 from '@/public/matthieu-vagnon/web-1.png'
import mvWeb2 from '@/public/matthieu-vagnon/web-2.png'
import mvWeb3 from '@/public/matthieu-vagnon/web-3.png'
import mvWeb4 from '@/public/matthieu-vagnon/web-4.png'
import smartInterviewBuilder1 from '@/public/smart-interview/builder-1.png'
import smartInterviewBuilder2 from '@/public/smart-interview/builder-2.png'
import smartInterviewBuilder3 from '@/public/smart-interview/builder-3.png'
import smartInterviewBuilder4 from '@/public/smart-interview/builder-4.png'
import smartInterviewBuilder5 from '@/public/smart-interview/builder-5.png'

export const projects: Record<string, Project> = {
  'matthieu-vagnon': {
    title: 'Matthieu Vagnon Web',
    year: 2025,
    type: 'Web Application',
    shortDescription: {
      en: 'The web application you are currently watching.',
      fr: "L'application web que vous regardez actuellement.",
      jp: 'あなたが現在見ているウェブアプリケーション。'
    },
    longDescription: {
      en: (
        <span>
          A simple <Highlight color='gray'>portfolio web application</Highlight> made with{' '}
          <Highlight color='gray'>React and Next.js</Highlight> letting you watch my case studies, contact me and access
          my links in a simple way on <Highlight color='gray'>mobile and desktop</Highlight>.
        </span>
      ),
      fr: (
        <span>
          Une simple <Highlight color='gray'>application web de portfolio</Highlight> faite avec{' '}
          <Highlight color='gray'>React et Next.js</Highlight> vous permettant de regarder mes études de cas, me
          contacter et accéder à mes liens de manière simple sur <Highlight color='gray'>mobile et desktop</Highlight>.
        </span>
      ),
      jp: (
        <span>
          <Highlight color='gray'>ReactとNext.js</Highlight>で作成されたシンプルな
          <Highlight color='gray'>ポートフォリオウェブアプリケーション</Highlight>
          で、私のケーススタディを見ることができ、私に連絡して私のリンクにアクセスすることができます。
        </span>
      )
    },
    tags: {
      en: ['Web Application', 'Portfolio'],
      fr: ['Application Web', 'Portfolio'],
      jp: ['ウェブアプリケーション', 'ポートフォリオ']
    },
    skills: {
      en: ['Web Design', 'Responsive Design', 'Web Project Management', 'Deployment', 'Web Maintenance'],
      fr: ['Design Web', 'Responsive Design', 'Gestion de Projet Web', 'Déploiement', 'Maintenance Web'],
      jp: ['ウェブデザイン', 'レスポンシブデザイン', 'Webプロジェクト管理', 'デプロイ', 'Webメンテナンス']
    },
    technologies: ['Cursor IDE', 'React', 'Next.js', 'Tailwind CSS', 'TypeScript', 'Shadcn UI', 'NPM', 'Vercel'],
    previewImg: mvWeb1,
    gallery: {
      img: [
        { title: { en: 'Home Page', fr: "Page d'accueil", jp: 'ホームページ' }, image: mvWeb1 },
        { title: { en: 'Case Study Page', fr: "Page d'étude de cas", jp: 'ケーススタディページ' }, image: mvWeb2 },
        { title: { en: 'Video Player', fr: 'Lecteur vidéo', jp: 'ビデオプレーヤー' }, image: mvWeb3 },
        {
          title: { en: 'Meeting Scheduler', fr: 'Planificateur de réunion', jp: 'ミーティングスケジューラー' },
          image: mvWeb4
        }
      ]
    },
    relatedUrls: [
      {
        name: { en: 'Matthieu Vagnon Web' },
        url: process.env.URL!
      }
    ]
  },
  'smart-interview': {
    title: 'Smart Interview',
    year: 2024,
    type: 'SaaS',
    shortDescription: {
      en: 'A platform to create AI-powered questionnaires and mass analyze responses.',
      fr: "Une plateforme pour créer des questionnaires alimentés par l'IA et analyser les réponses en masse.",
      jp: 'AI駆動のアンケートを作成し、回答を大量に分析するプラットフォーム。'
    },
    longDescription: {
      en: (
        <span>
          A SaaS platform to create <Highlight color='gray'>AI-powered questionnaires</Highlight>. A questionnaire is
          created by using the integrated <Highlight color='gray'>builder</Highlight> or by importing a{' '}
          <Highlight color='gray'>JSON file</Highlight>. The questionnaire is then sent to the audience and the
          responses can be analyzed in the same application to{' '}
          <Highlight color='gray'>target their optimal audience</Highlight>. The AI automatically adds context-based
          questions to the questionnaire when the user answers a questionnaire to add maximum details to the analysis.
        </span>
      ),
      fr: (
        <span>
          Une plateforme pour créer des questionnaires alimentés par l&apos;IA et analyser les réponses en masse.
        </span>
      ),
      jp: <span>AI駆動のアンケートを作成し、回答を大量に分析するプラットフォーム。</span>
    },
    tags: {
      en: ['AI', 'SaaS', 'Questionnaire', 'Mass Analysis'],
      fr: ['IA', 'SaaS', 'Questionnaire', 'Analyse en masse'],
      jp: ['AI', 'SaaS', 'アンケート', '大量分析']
    },
    skills: {
      en: [
        'Web Development',
        'Web Design',
        'Responsive Design',
        'Web Project Management',
        'Deployment',
        'Web Maintenance'
      ],
      fr: [
        'Développement Web',
        'Design Web',
        'Responsive Design',
        'Gestion de Projet Web',
        'Déploiement',
        'Maintenance Web'
      ],
      jp: [
        'ウェブ開発',
        'ウェブデザイン',
        'レスポンシブデザイン',
        'ウェブプロジェクト管理',
        'デプロイ',
        'ウェブメンテナンス'
      ]
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
      'Supabase'
    ],
    previewImg: smartInterviewBuilder5,
    gallery: {
      img: [
        {
          title: { en: 'Builder Editor', fr: 'Éditeur de générateur', jp: 'ジェネレーターエディター' },
          image: smartInterviewBuilder2
        },
        {
          title: { en: 'Builder Preview', fr: 'Aperçu du générateur', jp: 'ジェネレーターのプレビュー' },
          image: smartInterviewBuilder3
        },
        {
          title: { en: 'Builder JSON Editor', fr: 'Éditeur JSON du générateur', jp: 'ジェネレーターのJSONエディター' },
          image: smartInterviewBuilder4
        },
        {
          title: { en: 'Builder Presets', fr: 'Présets du générateur', jp: 'ジェネレーターのプリセット' },
          image: smartInterviewBuilder5
        }
      ],
      video: [
        {
          title: { en: 'Builder Tour', fr: 'Tour du builder', jp: 'ジェネレーターのツアー' },
          src: 'https://www.youtube.com/embed/zy5hgYR-H74',
          previewImage: smartInterviewBuilder1
        }
      ]
    },
    problem: {
      en: (
        <ol className='list-decimal list-inside'>
          <li>
            Users find it <Highlight color='red'>hard to create and manage questionnaires</Highlight> and may spend too
            much time implementing simple questions.
          </li>
          <li>
            Potential clients finding the application <Highlight color='red'>dated</Highlight>,{' '}
            <Highlight color='red'>not intuitive</Highlight> and <Highlight color='red'>laggy</Highlight>.
          </li>
        </ol>
      ),
      fr: (
        <ol className='list-decimal list-inside'>
          <li>
            Tweaking the UI to make it <Highlight color='emerald'>user-friendly</Highlight> (using icons, colors, better
            spacing, ...).
          </li>
          <li>
            Adding <Highlight color='emerald'>features</Highlight> to customize each created questionnaire (e.g. moving
            questions around, creating tables, presets, ...).
          </li>
          <li>
            Making the overall design <Highlight color='emerald'>more consistent</Highlight> and{' '}
            <Highlight color='emerald'>aligned</Highlight> with the rest of the application.
          </li>
          <li>
            Adding <Highlight color='emerald'>animations</Highlight> and{' '}
            <Highlight color='emerald'>loading states</Highlight>.
          </li>
        </ol>
      ),
      jp: (
        <ol className='list-decimal list-inside'>
          <li>
            UI を調整して<Highlight color='emerald'>ユーザーフレンドリー</Highlight>
            にしました（アイコン、色、より良い間隔などを使用）。
          </li>
          <li>
            <Highlight color='emerald'>機能</Highlight>
            を追加して、各作成されたアンケートをカスタマイズしました（例：移動、テーブル、プリセットなど）。
          </li>
          <li>
            <Highlight color='emerald'>アニメーション</Highlight>と
            <Highlight color='emerald'>ローディング状態</Highlight>を追加しました。
          </li>
        </ol>
      )
    },
    results: {
      en: (
        <span>
          The application is now more <Highlight color='gray'>user-friendly</Highlight>,{' '}
          <Highlight color='gray'>intuitive</Highlight>,<Highlight color='gray'>consistent</Highlight> and let users{' '}
          <Highlight color='gray'>save time</Highlight> and <Highlight color='gray'>resources</Highlight> while being
          able to create <Highlight color='gray'>complex questionnaires</Highlight>. The{' '}
          <Highlight color='gray'>UI was improved a bit</Highlight> but the time constraints didn&apos;t allow me to do
          more.
        </span>
      ),
      fr: (
        <span>
          L&apos;application est maintenant plus <Highlight color='gray'>user-friendly</Highlight>,{' '}
          <Highlight color='gray'>intuitive</Highlight>,<Highlight color='gray'>consistent</Highlight> et permet aux
          utilisateurs de <Highlight color='gray'>gagner du temps</Highlight> et{' '}
          <Highlight color='gray'>des ressources</Highlight> tout en créant des{' '}
          <Highlight color='gray'>questionnaires complexes</Highlight>.
        </span>
      ),
      jp: (
        <span>
          アプリケーションはより<Highlight color='gray'>ユーザーフレンドリー</Highlight>、
          <Highlight color='gray'>直感的</Highlight>、<Highlight color='gray'>一貫性があり</Highlight>、 ユーザーが
          <Highlight color='gray'>時間</Highlight>と<Highlight color='gray'>リソース</Highlight>
          を節約できるようになりました。
        </span>
      )
    },
    relatedUrls: [
      {
        name: { en: 'Pulse Partners' },
        url: 'https://pulse-partners.ch'
      }
    ]
  },
  'koryori-ya': {
    title: 'Koryori Ya Ozaki',
    year: 2024,
    type: 'Web Application',
    shortDescription: {
      en: 'A simple web application for a Japanese restaurant.',
      fr: 'Une application web simple pour un restaurant japonais.',
      jp: '日本料理店のためのシンプルなウェブアプリケーション。'
    },
    longDescription: {
      en: (
        <span>
          A simple single page web application for a <Highlight color='gray'>Japanese restaurant</Highlight> showcasing
          their adress and letting people <Highlight color='gray'>call them</Highlight> via the push of a button.
        </span>
      ),
      fr: (
        <span>
          Une application web simple pour un <Highlight color='gray'>restaurant japonais</Highlight> montrant leur
          adresse et permettant aux personnes de <Highlight color='gray'>les appeler</Highlight> en appuyant sur un
          bouton.
        </span>
      ),
      jp: (
        <span>
          <Highlight color='gray'>日本料理店</Highlight>のシンプルなウェブアプリケーションで、彼らの住所を表示し、
          人々が<Highlight color='gray'>彼らに電話をかける</Highlight>ことができるようにします。
        </span>
      )
    },
    tags: {
      en: ['Web Application', 'Japanese Restaurant'],
      fr: ['Application Web', 'Restaurant Japonais'],
      jp: ['ウェブアプリケーション', '日本料理店']
    },
    skills: {
      en: [
        'Web Development',
        'Web Design',
        'Responsive Design',
        'Web Project Management',
        'Deployment',
        'Web Maintenance'
      ],
      fr: [
        'Développement Web',
        'Design Web',
        'Responsive Design',
        'Gestion de Projet Web',
        'Déploiement',
        'Maintenance Web'
      ],
      jp: [
        'ウェブ開発',
        'ウェブデザイン',
        'レスポンシブデザイン',
        'ウェブプロジェクト管理',
        'デプロイ',
        'ウェブメンテナンス'
      ]
    },
    technologies: ['React', 'TypeScript', 'CSS', 'NPM', 'Vercel'],
    previewImg: koryoriYa3,
    gallery: {
      img: [
        { title: { en: 'Loading Page', fr: 'Page de chargement', jp: 'ローディングページ' }, image: koryoriYa1 },
        { title: { en: 'Landing View', fr: "Vue d'accueil", jp: 'ランディングビュー' }, image: koryoriYa2 },
        { title: { en: 'Concept View', fr: 'Vue conceptuelle', jp: 'コンセプトビュー' }, image: koryoriYa3 },
        { title: { en: 'Map', fr: 'Carte', jp: 'マップ' }, image: koryoriYa4 }
      ]
    },
    relatedUrls: [
      {
        name: { en: 'Koryori Ya Ozaki' },
        url: 'https://koryoriyaozaki.uk'
      }
    ]
  },
  crystal: {
    title: 'Crystal',
    year: 2023,
    type: 'SaaS',
    shortDescription: {
      en: 'A platform to view and manage AI-powered trading tools.',
      fr: "Une plateforme pour visualiser et gérer des outils de trading alimentés par l'IA.",
      jp: 'AI駆動の取引ツールを表示および管理するプラットフォーム。'
    },
    longDescription: {
      en: (
        <span>
          A platform to view and manage <Highlight color='gray'>AI-powered trading tools</Highlight> initially made for
          <Highlight color='gray'>Predictive Layer</Highlight> and now actively used by{' '}
          <Highlight color='gray'>TotalEnergies</Highlight> as Predictive Layer is now part of them.
        </span>
      ),
      fr: <span>Une plateforme pour visualiser et gérer des outils de trading alimentés par l&apos;IA.</span>,
      jp: <span>AI駆動の取引ツールを表示および管理するプラットフォーム。</span>
    },
    tags: {
      en: ['AI', 'SaaS', 'Trading', 'Analysis'],
      fr: ['IA', 'SaaS', 'Trading', 'Analyse'],
      jp: ['AI', 'SaaS', '取引', '分析']
    },
    skills: {
      en: [
        'Web Development',
        'Web Design',
        'Responsive Design',
        'Web Project Management',
        'Deployment',
        'Web Maintenance'
      ],
      fr: [
        'Développement Web',
        'Design Web',
        'Responsive Design',
        'Gestion de Projet Web',
        'Déploiement',
        'Maintenance Web'
      ],
      jp: [
        'ウェブ開発',
        'ウェブデザイン',
        'レスポンシブデザイン',
        'ウェブプロジェクト管理',
        'デプロイ',
        'ウェブメンテナンス'
      ]
    },
    technologies: ['React', 'JavaScript', 'NPM', 'React Router', 'Material UI', 'MUI-X'],
    problem: {
      en: (
        <span>
          The challenge of this project was to be able to display a <Highlight color='red'>lot of data</Highlight> in
          the form of <Highlight color='red'>charts</Highlight> without{' '}
          <Highlight color='red'>overloading the user</Highlight>
          with too many options and information.
        </span>
      ),
      fr: (
        <span>
          The challenge of this project was to be able to display a <Highlight color='red'>lot of data</Highlight> in
          the form of <Highlight color='red'>charts</Highlight> without{' '}
          <Highlight color='red'>overloading the user</Highlight>
        </span>
      ),
      jp: (
        <span>
          The challenge of this project was to be able to display a <Highlight color='red'>lot of data</Highlight> in
          the form of <Highlight color='red'>charts</Highlight> without{' '}
          <Highlight color='red'>overloading the user</Highlight>
        </span>
      )
    },
    solution: {
      en: (
        <span>
          Create a tool with <Highlight color='emerald'>multiple pages</Highlight>,{' '}
          <Highlight color='emerald'>clear navigation</Highlight>,{' '}
          <Highlight color='emerald'>managed spacing</Highlight> and{' '}
          <Highlight color='emerald'>beautiful charts</Highlight> thanks to <Highlight color='emerald'>MUI-X</Highlight>
          .
        </span>
      ),
      fr: (
        <span>
          Créer un outil avec <Highlight color='emerald'>plusieurs pages</Highlight>,{' '}
          <Highlight color='emerald'>navigation claire</Highlight>,{' '}
          <Highlight color='emerald'>espacement géré</Highlight> et{' '}
          <Highlight color='emerald'>beaux graphiques</Highlight> grâce à <Highlight color='emerald'>MUI-X</Highlight>.
        </span>
      ),
      jp: (
        <span>
          <Highlight color='emerald'>MUI-X</Highlight>を使用して、<Highlight color='emerald'>複数のページ</Highlight>、
          <Highlight color='emerald'>明確なナビゲーション</Highlight>、
          <Highlight color='emerald'>管理された間隔</Highlight>、<Highlight color='emerald'>美しいグラフ</Highlight>
          を作成しました。
        </span>
      )
    },
    results: {
      en: (
        <span>
          The tool is now <Highlight color='gray'>used in production</Highlight> by TotalEnergies teams and is working
          perfectly well. The <Highlight color='gray'>data loads well</Highlight> and the{' '}
          <Highlight color='gray'>interface is clear</Highlight>.
        </span>
      ),
      fr: (
        <span>
          L&apos;outil est maintenant <Highlight color='gray'>utilisé dans la production</Highlight> par les équipes de
          TotalEnergies et fonctionne parfaitement.
        </span>
      ),
      jp: (
        <span>
          <Highlight color='gray'>データが正常に読み込まれ</Highlight>、
          <Highlight color='gray'>インターフェースが明確</Highlight>です。
        </span>
      )
    }
  }
}
