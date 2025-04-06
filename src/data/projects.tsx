import Highlight from '@/components/highlight'

export const projects: Record<string, Project> = {
  'matthieu-vagnon': {
    title: 'Matthieu Vagnon Web',
    year: 2025,
    tags: ['Web Application', 'Portfolio'],
    shortDescription: 'The web application you are currently watching.',
    longDescription: (
      <span>
        A simple <Highlight color='blue'>portfolio web application</Highlight> made with{' '}
        <Highlight color='blue'>React and Next.js</Highlight> letting you watch my case studies, contact me and access
        my links in a simple way on <Highlight color='blue'>mobile and desktop</Highlight>.
      </span>
    ),
    previewImg: '/matthieu-vagnon/web-1.png',
    type: 'Web Application',
    technologies: ['React', 'Next.js', 'Tailwind CSS', 'TypeScript', 'Shadcn UI', 'NPM', 'Vercel'],
    gallery: [
      { title: 'Home Page', url: '/matthieu-vagnon/web-1.png' },
      { title: 'Case Study Page', url: '/matthieu-vagnon/web-2.png' },
      { title: 'Video Player', url: '/matthieu-vagnon/web-3.png' },
      { title: 'Meeting Scheduler', url: '/matthieu-vagnon/web-4.png' }
    ],
    relatedUrls: [
      {
        name: 'Matthieu Vagnon Web',
        url: 'https://mvagnon.dev'
      }
    ]
  },
  'smart-interview': {
    title: 'Smart Interview',
    year: 2024,
    tags: ['AI', 'SaaS', 'Questionnaire', 'Mass Analysis'],
    shortDescription: 'A platform to create AI-powered questionnaires and mass analyze responses.',
    longDescription: (
      <span>
        A SaaS platform to create <Highlight color='blue'>AI-powered questionnaires</Highlight>. A questionnaire is
        created by using the integrated <Highlight color='blue'>builder</Highlight> or by importing a{' '}
        <Highlight color='blue'>JSON file</Highlight>. The questionnaire is then sent to the audience and the responses
        can be analyzed in the same application to <Highlight color='blue'>target their optimal audience</Highlight>.
        The AI automatically adds context-based questions to the questionnaire when the user answers a questionnaire to
        add maximum details to the analysis.
      </span>
    ),
    previewImg: '/smart-interview/builder-5.png',
    type: 'SaaS',
    technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Shadcn UI', 'NPM', 'Vercel', 'Supabase'],
    gallery: [
      { title: 'Builder Tour', url: '/smart-interview/builder-1.mov' },
      { title: 'Builder Editor', url: '/smart-interview/builder-2.png' },
      { title: 'Builder Preview', url: '/smart-interview/builder-3.png' },
      { title: 'Builder JSON Editor', url: '/smart-interview/builder-4.png' },
      { title: 'Builder Presets', url: '/smart-interview/builder-5.png' }
    ],
    problem: (
      <ul className='list-disc list-inside'>
        <li>
          Users find it <Highlight color='red'>hard to create and manage questionnaires</Highlight> and may spend too
          much time implementing simple questions.
        </li>
        <li>
          Potential clients finding the application <Highlight color='red'>dated</Highlight>,{' '}
          <Highlight color='red'>not intuitive</Highlight> and <Highlight color='red'>laggy</Highlight>.
        </li>
      </ul>
    ),
    solution: (
      <ul className='list-disc list-inside'>
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
      </ul>
    ),
    results: (
      <span>
        The application is now more <Highlight color='blue'>user-friendly</Highlight>,{' '}
        <Highlight color='blue'>intuitive</Highlight>,<Highlight color='blue'>consistent</Highlight> and let users{' '}
        <Highlight color='blue'>save time</Highlight> and <Highlight color='blue'>resources</Highlight> while being able
        to create <Highlight color='blue'>complex questionnaires</Highlight>. The{' '}
        <Highlight color='blue'>UI was improved a bit</Highlight> but the time constraints didn&apos;t allow me to do
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
    tags: ['Web Application', 'Japanese Restaurant'],
    shortDescription: 'A simple web application for a Japanese restaurant.',
    longDescription: (
      <span>
        A simple single page web application for a <Highlight color='blue'>Japanese restaurant</Highlight> showcasing
        their adress and letting people <Highlight color='blue'>call them</Highlight> via the push of a button.
      </span>
    ),
    previewImg: '/koryori-ya/web-3.png',
    type: 'Web Application',
    technologies: ['React', 'TypeScript', 'CSS', 'NPM', 'Vercel'],
    gallery: [
      { title: 'Loading Page', url: '/koryori-ya/web-1.png' },
      { title: 'Landing View', url: '/koryori-ya/web-2.png' },
      { title: 'Concept View', url: '/koryori-ya/web-3.png' },
      { title: 'Map', url: '/koryori-ya/web-4.png' }
    ],
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
    tags: ['AI', 'SaaS', 'Trading', 'Analysis'],
    shortDescription: 'A platform to view and manage AI-powered trading tools.',
    longDescription: (
      <span>
        A platform to view and manage <Highlight color='blue'>AI-powered trading tools</Highlight> initially made for
        <Highlight color='blue'>Predictive Layer</Highlight> and now actively used by{' '}
        <Highlight color='blue'>TotalEnergies</Highlight> as Predictive Layer is now part of them.
      </span>
    ),
    type: 'SaaS',
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
        The tool is now <Highlight color='blue'>used in production</Highlight> by TotalEnergies teams and is working
        perfectly well. The <Highlight color='blue'>data loads well</Highlight> and the{' '}
        <Highlight color='blue'>interface is clear</Highlight>.
      </span>
    )
  }
}
