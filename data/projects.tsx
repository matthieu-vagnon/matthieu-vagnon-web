import { LinkButton } from "@/components/Button";
import Code from "@/components/Code";
import Highlight from "@/components/Highlight";
import koryoriYa1 from "@/public/koryori-ya/web-1.png";
import koryoriYa2 from "@/public/koryori-ya/web-2.png";
import koryoriYa3 from "@/public/koryori-ya/web-3.png";
import koryoriYa4 from "@/public/koryori-ya/web-4.png";
import mvWeb1 from "@/public/matthieu-vagnon/web-1.png";
import mvWeb2 from "@/public/matthieu-vagnon/web-2.png";
import mvWeb3 from "@/public/matthieu-vagnon/web-3.png";
import mvWeb4 from "@/public/matthieu-vagnon/web-4.png";
import mvWeb5 from "@/public/matthieu-vagnon/web-5.png";
import mvWeb6 from "@/public/matthieu-vagnon/web-6.png";
import mvWeb7 from "@/public/matthieu-vagnon/web-7.png";
import mvWeb8 from "@/public/matthieu-vagnon/web-8.png";
import mvWeb9 from "@/public/matthieu-vagnon/web-9.png";
import smartInterviewBuilder1 from "@/public/smart-interview/builder-1.png";
import smartInterviewBuilder2 from "@/public/smart-interview/builder-2.png";
import smartInterviewBuilder3 from "@/public/smart-interview/builder-3.png";
import smartInterviewBuilder4 from "@/public/smart-interview/builder-4.png";
import smartInterviewBuilder5 from "@/public/smart-interview/builder-5.png";
import smartInterviewBuilder6 from "@/public/smart-interview/builder-6.png";
import { Fragment } from "react";

export const projects: Record<string, Project> = {
  "matthieu-vagnon": {
    title: "Matthieu Vagnon",
    year: 2025,
    type: "webApplication",
    shortDescription: {
      en: "Web portfolio for Matthieu Vagnon.",
      fr: "Portfolio web pour Matthieu Vagnon.",
    },
    longDescription: {
      en: (
        <>
          This is a <Highlight>React and Next.js</Highlight> web application
          that allows me to present my <Highlight>profile</Highlight>, including
          education, degrees, experiences and skills, several of my{" "}
          <Highlight>past projects</Highlight> as well as their respective{" "}
          <Highlight>case studies</Highlight>. This application also allows you
          to <Highlight>schedule appointments or contact</Highlight> me in a few
          clicks while offering a{" "}
          <Highlight>pleasant experience on mobile and desktop</Highlight>.
        </>
      ),
      fr: (
        <>
          Il s&apos;agit d&apos;une application web{" "}
          <Highlight>React et Next.js</Highlight> qui me permet de présenter mon{" "}
          <Highlight>profil</Highlight>, incluant éducation, diplômes,
          expériences et compétences, plusieurs de mes{" "}
          <Highlight>projets passés</Highlight> ainsi que leur{" "}
          <Highlight>étude de cas</Highlight> respectives. Cette application
          permets également de{" "}
          <Highlight>prendre rendez-vous ou de prendre contact</Highlight> avec
          moi en quelques clics tout en proposant une{" "}
          <Highlight>expérience agréable sur mobile et desktop</Highlight>.
        </>
      ),
    },
    tags: {
      en: ["Web Application", "Portfolio", "Matthieu Vagnon"],
      fr: ["Application Web", "Portfolio", "Matthieu Vagnon"],
    },
    technologies: ["Next.js"],
    previewImg: mvWeb1,
    gallery: [
      {
        title: { en: "Home Page", fr: "Page d'accueil" },
        image: mvWeb1,
        slug: "home-page",
      },
      {
        title: {
          en: "Profile Page",
          fr: "Page de profil",
        },
        image: mvWeb2,
        slug: "profile-page",
      },
      {
        title: {
          en: "Case Study",
          fr: "Étude de cas",
        },
        image: mvWeb3,
        slug: "case-studies",
      },
      {
        title: {
          en: "Image Popup",
          fr: "Pop-up d'image",
        },
        image: mvWeb4,
        slug: "image-popup",
      },
      {
        title: {
          en: "Meeting Scheduler",
          fr: "Planificateur de réunion",
        },
        image: mvWeb5,
        slug: "meeting-scheduler",
      },
      {
        title: {
          en: "Configuration Modal",
          fr: "Modale de configuration",
        },
        image: mvWeb6,
        slug: "configuration-modal",
      },
      {
        title: {
          en: "Home Green",
          fr: "Accueil vert",
        },
        image: mvWeb7,
        slug: "home-green",
      },
      {
        title: {
          en: "Home Pink",
          fr: "Accueil rose",
        },
        image: mvWeb8,
        slug: "home-pink",
      },
      {
        title: {
          en: "Home Purple",
          fr: "Accueil violet",
        },
        image: mvWeb9,
        slug: "home-purple",
      },
    ],
    problem: {
      en: [
        <Fragment key="1">
          Need to produce a <Highlight>dynamic and performant</Highlight> React
          application to demonstrate my skills with public source code while
          maintaining <Highlight>high-quality SEO</Highlight>.
        </Fragment>,
        <Fragment key="2">
          <Highlight>Limited time</Highlight> to work on this application in
          parallel with my other projects.
        </Fragment>,
        <Fragment key="3">
          <Highlight>No back-end infrastructure</Highlight> to host the data
          (profile, projects, ...).
        </Fragment>,
      ],
      fr: [
        <Fragment key="1">
          Nécessité de produire une application React{" "}
          <Highlight>dynamique et performante</Highlight> pour démontrer mes
          compétences avec un code source publique tout en maintenant un{" "}
          <Highlight>SEO de haute qualité</Highlight>.
        </Fragment>,
        <Fragment key="2">
          <Highlight>Peu de temps</Highlight> pour travailler sur cette
          application en parallèle de mes autres projets.
        </Fragment>,
        <Fragment key="3">
          <Highlight>Pas d&apos;infrastructure back-end</Highlight> pour
          héberger les données (profil, projets, ...).
        </Fragment>,
      ],
    },
    solution: {
      en: [
        <Fragment key="1">
          Decision to use <Highlight>Next.js</Highlight> as a framework to{" "}
          <Highlight>ensure SEO</Highlight> while leveraging the app router to
          manage multiple pages.
        </Fragment>,
        <Fragment key="2">
          Use of component libraries like{" "}
          <LinkButton external href="https://www.shadcn.net">
            ShadCN
          </LinkButton>{" "}
          whose strength is <Highlight>customization</Highlight> to accelerate
          development while ensuring{" "}
          <Highlight>high code quality and performance optimization</Highlight>.
        </Fragment>,
        <Fragment key="3">
          In order to <Highlight>properly manage application data</Highlight>{" "}
          without having to develop a complete back-end infrastructure, I
          created a <Code>/data</Code> folder in which I stored the data needed
          for the application.
        </Fragment>,
      ],
      fr: [
        <Fragment key="1">
          Décision d&apos;utiliser <Highlight>Next.js</Highlight> comme
          framework afin de <Highlight>garantir le SEO</Highlight> tout en
          tirant profit de l&apos;app router pour gérer les pages multiples.
        </Fragment>,
        <Fragment key="2">
          Utilisation de librairies de composants comme{" "}
          <LinkButton external href="https://www.shadcn.net">
            ShadCN
          </LinkButton>{" "}
          dont la force est la
          <Highlight>customisation</Highlight> pour accélérer le développement
          tout en garantissant{" "}
          <Highlight>
            une qualité de code élevée et une optimisation des performances
          </Highlight>
          .
        </Fragment>,
        <Fragment key="3">
          Afin de{" "}
          <Highlight>
            gérer les données de l&apos;application proprement
          </Highlight>{" "}
          sans avoir à développer une infrastructure back-end complète,
          j&apos;ai créé un dossier <Code>/data</Code> dans lequel j&apos;ai
          stocké les données nécessaires à l&apos;application.
        </Fragment>,
      ],
    },
    results: {
      en: (
        <>
          The application is available and presents all essential information
          about my <Highlight>profile and experiences</Highlight>. The
          application is{" "}
          <Highlight>pleasant to use and visually beautiful</Highlight>.
          Visitors can easily schedule appointments thanks to a successful
          implementation of{" "}
          <LinkButton external href="https://cal.com">
            Cal.com
          </LinkButton>
          . The integration of{" "}
          <Highlight>recommendations from previous clients</Highlight> is also{" "}
          <Highlight>successful and non-invasive</Highlight>.
        </>
      ),
      fr: (
        <>
          L&apos;application est disponible et présente toutes les informations
          essentielles sur mon <Highlight>profil et mes expériences</Highlight>.
          L&apos;application est{" "}
          <Highlight>
            agréable d&apos;utilisation est visuellement belle
          </Highlight>
          . Les visiteurs peuvent facilement prendre rendez-vous grâce à une
          implémentation réussie de{" "}
          <LinkButton external href="https://cal.com">
            Cal.com
          </LinkButton>
          . L&apos;intégration des{" "}
          <Highlight>recommendations de précédents clients</Highlight> est
          également <Highlight>réussie et non invasive</Highlight>.
        </>
      ),
    },
    relatedUrls: [
      {
        title: {
          en: "GitHub Repository",
          fr: "Répertoire GitHub",
        },
        link: {
          en: "https://github.com/matthieu-vagnon/matthieu-vagnon-web",
        },
      },
    ],
  },
  "smart-interview": {
    title: "Smart Interview",
    year: 2024,
    type: "saas",
    shortDescription: {
      en: "A platform to create and send AI-powered questionnaires and analyze responses.",
      fr: "Une plateforme pour créer et envoyer des questionnaires alimentés par l'IA et analyser les réponses.",
    },
    longDescription: {
      en: (
        <>
          SmartInterview is a SaaS platform made to create and send{" "}
          <Highlight>AI-powered questionnaires</Highlight>. A questionnaire is
          created by using the integrated builder or by importing a JSON file.
          The questionnaire is then sent to the audience and the responses can
          be analyzed in the same application to{" "}
          <Highlight>target their optimal audience</Highlight>.
          SmartInterview&apos;s AI automatically adds context-based questions to
          the questionnaire when the user answers a questionnaire to add{" "}
          <Highlight>maximum details</Highlight> to the analysis.
        </>
      ),
      fr: (
        <>
          SmartInterview est une plateforme SaaS conçue pour créer et envoyer
          des <Highlight>questionnaires alimentés par l&apos;IA</Highlight>. Un
          questionnaire est créé en utilisant le builder intégré ou en important
          un fichier JSON. Le questionnaire est ensuite envoyé à l&apos;audience
          et les réponses peuvent être analysées dans la même application pour{" "}
          <Highlight>cibler leur audience optimale</Highlight>. L&apos;IA de
          SmartInterview ajoute automatiquement des questions contextuelles au
          questionnaire lorsque l&apos;utilisateur répond pour ajouter un{" "}
          <Highlight>maximum de détails</Highlight> à l&apos;analyse.
        </>
      ),
    },
    tags: {
      en: ["AI", "SaaS", "Questionnaire", "Mass Analysis"],
      fr: ["IA", "SaaS", "Questionnaire", "Analyse de masse"],
    },
    technologies: ["Next.js", "Supabase"],
    previewImg: smartInterviewBuilder6,
    gallery: [
      {
        title: {
          en: "Builder Editor",
          fr: "Éditeur de générateur",
        },
        image: smartInterviewBuilder1,
        slug: "builder-editor",
      },
      {
        title: {
          en: "Table Editor",
          fr: "Éditeur de table",
        },
        image: smartInterviewBuilder2,
        slug: "builder-preview",
      },
      {
        title: {
          en: "Table Editor 2",
          fr: "Éditeur de table 2",
        },
        image: smartInterviewBuilder3,
        slug: "table-editor-2",
      },
      {
        title: {
          en: "Tooltip",
          fr: "Tooltip",
        },
        image: smartInterviewBuilder4,
        slug: "tooltip",
      },
      {
        title: {
          en: "JSON Editor",
          fr: "Éditeur JSON",
        },
        image: smartInterviewBuilder5,
        slug: "json-editor",
      },
      {
        title: {
          en: "New Question",
          fr: "Nouvelle question",
        },
        image: smartInterviewBuilder6,
        slug: "new-question",
      },
    ],
    problem: {
      en: [
        <Fragment key="1">
          Enhance <Highlight>experience</Highlight> and{" "}
          <Highlight>interface</Highlight>.
        </Fragment>,
        <Fragment key="2">
          <Highlight>Integrate advanced, intuitive features</Highlight> to
          empower non-technical users.
        </Fragment>,
        <Fragment key="3">
          Fix <Highlight>bugs</Highlight> and improve{" "}
          <Highlight>code readability</Highlight>.
        </Fragment>,
        <Fragment key="4">
          All of this in a reduced timeframe of{" "}
          <Highlight>4 to 5 weeks maximum</Highlight>.
        </Fragment>,
      ],
      fr: [
        <Fragment key="1">
          Améliorer l&apos;<Highlight>expérience</Highlight> et l&apos;
          <Highlight>interface</Highlight>.
        </Fragment>,
        <Fragment key="2">
          <Highlight>
            Intégrer des fonctionnalités avancées et intuitives
          </Highlight>{" "}
          pour donner plus de pouvoir aux utilisateurs non techniques.
        </Fragment>,
        <Fragment key="3">
          Corriger les <Highlight>bugs</Highlight> et améliorer la{" "}
          <Highlight>lisibilité du code</Highlight>.
        </Fragment>,
        <Fragment key="4">
          Tout cela en un temps réduit de{" "}
          <Highlight>4 à 5 semaines maximum</Highlight>.
        </Fragment>,
      ],
    },
    solution: {
      en: [
        <Fragment key="1">
          Implemented essential UX enhancements including{" "}
          <Highlight>loading indicators</Highlight> and{" "}
          <Highlight>questions reordering</Highlight>. Integrated interactive{" "}
          <Highlight>modals</Highlight> for confirmation workflows when saving
          questionnaires and adding new questions.
        </Fragment>,
        <Fragment key="2">
          Developed comprehensive <Highlight>customization options</Highlight>{" "}
          for questionnaire elements, featuring{" "}
          <Highlight>minimum and maximum number</Highlight> constraints,{" "}
          <Highlight>sliders</Highlight>, <Highlight>tables</Highlight>, and
          numerous additional configuration possibilities to enhance user
          control, avoiding user to be forced to edit the JSON file.
        </Fragment>,
        <Fragment key="3">
          Systematically <Highlight>fixed bugs</Highlight>,{" "}
          <Highlight>optimized</Highlight> application performance through code
          refactoring, and significantly{" "}
          <Highlight>improved code readability</Highlight> for better
          maintainability.
        </Fragment>,
      ],
      fr: [
        <Fragment key="1">
          Mise en place d&apos;améliorations essentielles de l&apos;UX incluant
          des <Highlight>indicateurs de chargement</Highlight> et la{" "}
          <Highlight>réorganisation des questions</Highlight>. Intégration de{" "}
          <Highlight>fenêtres modales</Highlight> interactives pour les
          processus de confirmation lors de l&apos;enregistrement des
          questionnaires et l&apos;ajout de nouvelles questions.
        </Fragment>,
        <Fragment key="2">
          Développement d&apos;options complètes de{" "}
          <Highlight>personnalisation</Highlight> pour les éléments du
          questionnaire, comprenant des contraintes de{" "}
          <Highlight>nombre minimum et maximum</Highlight>, des{" "}
          <Highlight>curseurs</Highlight>, des <Highlight>tableaux</Highlight>,
          et de nombreuses possibilités de configuration supplémentaires pour
          améliorer le contrôle utilisateur, évitant ainsi aux utilisateurs
          d&apos;être forcés de modifier le fichier JSON.
        </Fragment>,
        <Fragment key="3">
          <Highlight>Correction systématique des bugs</Highlight>,{" "}
          <Highlight>optimisation</Highlight> des performances de
          l&apos;application par la refactorisation du code, et amélioration
          significative de la <Highlight>lisibilité du code</Highlight> pour une
          meilleure maintenabilité.
        </Fragment>,
      ],
    },
    results: {
      en: (
        <>
          The application is now more <Highlight>user-friendly</Highlight>,{" "}
          <Highlight>intuitive</Highlight>, <Highlight>consistent</Highlight>{" "}
          and lets users <Highlight>save time</Highlight> and{" "}
          <Highlight>resources</Highlight> while creating{" "}
          <Highlight>complex questionnaires</Highlight>. Sales were boosted by{" "}
          <Highlight>fewer bugs</Highlight>, a{" "}
          <Highlight>better appearance</Highlight> and a{" "}
          <Highlight>better perceived UX</Highlight>.
        </>
      ),
      fr: (
        <>
          L&apos;application est maintenant plus{" "}
          <Highlight>user-friendly</Highlight>, <Highlight>intuitive</Highlight>
          , <Highlight>consistante</Highlight> et permet aux utilisateurs de{" "}
          <Highlight>gagner du temps</Highlight> et{" "}
          <Highlight>des ressources</Highlight> tout en créant des{" "}
          <Highlight>questionnaires complexes</Highlight>. Les ventes ont été
          stimulées par <Highlight>moins de bugs</Highlight>, une{" "}
          <Highlight>meilleure apparence</Highlight> et une{" "}
          <Highlight>meilleure UX perçue</Highlight>.
        </>
      ),
    },
    relatedUrls: [
      {
        title: { en: "Pulse Partners" },
        link: {
          en: "https://pulse-partners.ch",
        },
      },
    ],
  },
  "koryori-ya": {
    title: "Koryori Ya Ozaki",
    year: 2024,
    type: "webApplication",
    shortDescription: {
      en: "A simple web application for a Japanese restaurant.",
      fr: "Une application web simple pour un restaurant japonais.",
    },
    longDescription: {
      en: (
        <>
          A single page web application for a{" "}
          <Highlight>Japanese restaurant</Highlight> showcasing their adress
          thanks to a <Highlight>map</Highlight> and letting people{" "}
          <Highlight>call them</Highlight> easily.
        </>
      ),
      fr: (
        <>
          Une application web simple pour un{" "}
          <Highlight>restaurant japonais</Highlight> présentant leur adresse
          grâce à une <Highlight>carte</Highlight> et permettant aux personnes
          de <Highlight>les appeler</Highlight> facilement.
        </>
      ),
    },
    tags: {
      en: ["Web Application", "Japanese", "Restaurant"],
      fr: ["Application Web", "Japonais", "Restaurant"],
    },
    technologies: ["React.js (Vite)"],
    previewImg: koryoriYa1,
    gallery: [
      {
        title: {
          en: "Loading Page",
          fr: "Page de chargement",
        },
        image: koryoriYa1,
        slug: "loading-page",
      },
      {
        title: {
          en: "Landing View",
          fr: "Vue d'accueil",
        },
        image: koryoriYa2,
        slug: "landing-view",
      },
      {
        title: {
          en: "Concept View",
          fr: "Vue Concept",
        },
        image: koryoriYa3,
        slug: "concept-view",
      },
      {
        title: { en: "Gallery", fr: "Galerie" },
        image: koryoriYa4,
        slug: "gallery",
      },
    ],
    problem: {
      en: [
        <Fragment key="1">
          Create a <Highlight>simple and clean interface</Highlight> while{" "}
          <Highlight>limiting infrastructure costs</Highlight>.
        </Fragment>,
        <Fragment key="2">
          Dealing with <Highlight>a very short timeframe</Highlight> (~ 1 week
          before restaurant opening).
        </Fragment>,
      ],
      fr: [
        <Fragment key="1">
          Créer une <Highlight>interface simple et épurée</Highlight> tout en{" "}
          <Highlight>limitant les coûts d&apos;infrastructure</Highlight>.
        </Fragment>,
        <Fragment key="2">
          Faire face à <Highlight>un délai très court</Highlight> (~ 1 semaine
          avant l&apos;ouverture du restaurant).
        </Fragment>,
      ],
    },
    solution: {
      en: [
        <Fragment key="1">
          Created a React/Vite app to meet the need for{" "}
          <Highlight>control over the project</Highlight> and to reduce{" "}
          <Highlight>infrastructure costs</Highlight> due to the use of external
          services.
        </Fragment>,
        <Fragment key="2">
          Used{" "}
          <LinkButton external href="https://vercel.com">
            Vercel
          </LinkButton>{" "}
          to host application with maximum{" "}
          <Highlight>performance and reliability</Highlight>.
        </Fragment>,
      ],
      fr: [
        <Fragment key="1">
          J&apos;ai créé une application React/Vite pour répondre au besoin de{" "}
          <Highlight>contrôle sur le projet</Highlight> et pour réduire les{" "}
          <Highlight>coûts d&apos;infrastructure</Highlight> liés à
          l&apos;utilisation de services externes.
        </Fragment>,
        <Fragment key="2">
          J&apos;ai utilisé{" "}
          <LinkButton external href="https://vercel.com">
            Vercel
          </LinkButton>{" "}
          pour héberger l&apos;application avec une{" "}
          <Highlight>performance et une fiabilité maximales</Highlight>.
        </Fragment>,
      ],
    },
    relatedUrls: [
      {
        title: {
          en: "Access App",
          fr: "Accéder à l'application",
        },
        link: {
          en: "https://koryoriyaozaki.uk",
          ja: "https://koryoriyaozaki.uk",
        },
      },
      {
        title: {
          en: "GitHub Repository",
          fr: "Répertoire GitHub",
        },
        link: {
          en: "https://github.com/matthieu-vagnon/koryori-ya-website",
        },
      },
    ],
  },
};
