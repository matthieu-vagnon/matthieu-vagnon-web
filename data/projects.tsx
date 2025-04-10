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
    shortDescription: 'The web application you are currently watching.',
    longDescription: (
      <span>
        A simple <Highlight color='gray'>portfolio web application</Highlight> made with{' '}
        <Highlight color='gray'>React and Next.js</Highlight> letting you watch my case studies, contact me and access
        my links in a simple way on <Highlight color='gray'>mobile and desktop</Highlight>.
      </span>
    ),
    tags: ['Web Application', 'Portfolio'],
    skills: [
      'Web Development',
      'Web Design',
      'Responsive Design',
      'Web Project Management',
      'Deployment',
      'Web Maintenance'
    ],
    technologies: ['Cursor IDE', 'React', 'Next.js', 'Tailwind CSS', 'TypeScript', 'Shadcn UI', 'NPM', 'Vercel'],
    previewImg: mvWeb1,
    gallery: {
      img: [
        { title: 'Home Page', image: mvWeb1 },
        { title: 'Case Study Page', image: mvWeb2 },
        { title: 'Video Player', image: mvWeb3 },
        { title: 'Meeting Scheduler', image: mvWeb4 }
      ]
    },
    relatedUrls: [
      {
        name: 'Matthieu Vagnon Web',
        url: process.env.URL!
      }
    ]
  },
  'smart-interview': {
    title: 'Smart Interview',
    year: 2024,
    type: 'SaaS',
    shortDescription: 'A platform to create AI-powered questionnaires and mass analyze responses.',
    longDescription: (
      <span>
        A SaaS platform to create <Highlight color='gray'>AI-powered questionnaires</Highlight>. A questionnaire is
        created by using the integrated <Highlight color='gray'>builder</Highlight> or by importing a{' '}
        <Highlight color='gray'>JSON file</Highlight>. The questionnaire is then sent to the audience and the responses
        can be analyzed in the same application to <Highlight color='gray'>target their optimal audience</Highlight>.
        The AI automatically adds context-based questions to the questionnaire when the user answers a questionnaire to
        add maximum details to the analysis.
      </span>
    ),
    tags: ['AI', 'SaaS', 'Questionnaire', 'Mass Analysis'],
    skills: [
      'Web Development',
      'Web Design',
      'Responsive Design',
      'Web Project Management',
      'Deployment',
      'Web Maintenance'
    ],
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
          title: 'Builder Editor',
          image: smartInterviewBuilder2
        },
        {
          title: 'Builder Preview',
          image: smartInterviewBuilder3
        },
        {
          title: 'Builder JSON Editor',
          image: smartInterviewBuilder4
        },
        {
          title: 'Builder Presets',
          image: smartInterviewBuilder5
        }
      ],
      video: [
        {
          title: 'Builder Tour',
          src: 'https://www.youtube.com/embed/zy5hgYR-H74',
          previewImage: smartInterviewBuilder1
        }
      ]
    },
    problem: (
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
    solution: (
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
    results: (
      <span>
        The application is now more <Highlight color='gray'>user-friendly</Highlight>,{' '}
        <Highlight color='gray'>intuitive</Highlight>,<Highlight color='gray'>consistent</Highlight> and let users{' '}
        <Highlight color='gray'>save time</Highlight> and <Highlight color='gray'>resources</Highlight> while being able
        to create <Highlight color='gray'>complex questionnaires</Highlight>. The{' '}
        <Highlight color='gray'>UI was improved a bit</Highlight> but the time constraints didn&apos;t allow me to do
        more.
      </span>
    ),
    relatedUrls: [
      {
        name: 'Pulse Partners',
        url: 'https://pulse-partners.ch'
      }
    ]
  },
  'koryori-ya': {
    title: 'Koryori Ya Ozaki',
    year: 2024,
    type: 'Web Application',
    shortDescription: 'A simple web application for a Japanese restaurant.',
    longDescription: (
      <span>
        A simple single page web application for a <Highlight color='gray'>Japanese restaurant</Highlight> showcasing
        their adress and letting people <Highlight color='gray'>call them</Highlight> via the push of a button.
      </span>
    ),
    tags: ['Web Application', 'Japanese Restaurant'],
    skills: [
      'Web Development',
      'Web Design',
      'Responsive Design',
      'Web Project Management',
      'Deployment',
      'Web Maintenance'
    ],
    technologies: ['React', 'TypeScript', 'CSS', 'NPM', 'Vercel'],
    previewImg: koryoriYa3,
    gallery: {
      img: [
        { title: 'Loading Page', image: koryoriYa1 },
        { title: 'Landing View', image: koryoriYa2 },
        { title: 'Concept View', image: koryoriYa3 },
        { title: 'Map', image: koryoriYa4 }
      ]
    },
    relatedUrls: [
      {
        name: 'Koryori Ya Ozaki',
        url: 'https://koryoriyaozaki.uk'
      }
    ]
  },
  crystal: {
    title: 'Crystal',
    year: 2023,
    type: 'SaaS',
    shortDescription: 'A platform to view and manage AI-powered trading tools.',
    longDescription: (
      <span>
        A platform to view and manage <Highlight color='gray'>AI-powered trading tools</Highlight> initially made for
        <Highlight color='gray'>Predictive Layer</Highlight> and now actively used by{' '}
        <Highlight color='gray'>TotalEnergies</Highlight> as Predictive Layer is now part of them.
      </span>
    ),
    tags: ['AI', 'SaaS', 'Trading', 'Analysis'],
    skills: [
      'Web Development',
      'Web Design',
      'Responsive Design',
      'Web Project Management',
      'Deployment',
      'Web Maintenance'
    ],
    technologies: ['React', 'JavaScript', 'NPM', 'React Router', 'Material UI', 'MUI-X'],
    problem: (
      <span>
        The challenge of this project was to be able to display a <Highlight color='red'>lot of data</Highlight> in the
        form of <Highlight color='red'>charts</Highlight> without{' '}
        <Highlight color='red'>overloading the user</Highlight>
        with too many options and information.
      </span>
    ),
    solution: (
      <span>
        Create a tool with <Highlight color='emerald'>multiple pages</Highlight>,{' '}
        <Highlight color='emerald'>clear navigation</Highlight>, <Highlight color='emerald'>managed spacing</Highlight>{' '}
        and <Highlight color='emerald'>beautiful charts</Highlight> thanks to{' '}
        <Highlight color='emerald'>MUI-X</Highlight>.
      </span>
    ),
    results: (
      <span>
        The tool is now <Highlight color='gray'>used in production</Highlight> by TotalEnergies teams and is working
        perfectly well. The <Highlight color='gray'>data loads well</Highlight> and the{' '}
        <Highlight color='gray'>interface is clear</Highlight>.
      </span>
    )
  }
}
