import Highlight from '@/components/highlight'

export const projects: Record<string, Project> = {
  'matthieu-vagnon': {
    title: 'Matthieu Vagnon',
    year: 2025,
    tags: ['Web Application', 'Portfolio'],
    shortDescription: 'The web application you are currently watching.',
    longDescription: (
      <span>
        The <Highlight color='blue'>web application</Highlight> you are currently watching.
      </span>
    ),
    previewImg: '/matthieu-vagnon/web-1.png',
    type: 'Web Application',
    technologies: ['React', 'Next.js', 'Tailwind CSS', 'TypeScript', 'Shadcn UI', 'OpenAI'],
    gallery: [{ title: 'Home Page', url: '/matthieu-vagnon/web-1.png' }],
    problem: <span>Creating questionnaires and analyzing responses is a time-consuming task.</span>,
    solution: <span>Create AI-powered questionnaires and mass analyze responses.</span>,
    results: <span>Save time and resources.</span>,
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
    longDescription: <span>A platform to create AI-powered questionnaires and mass analyze responses.</span>,
    type: 'SaaS',
    technologies: ['React', 'Next.js', 'Tailwind CSS', 'TypeScript', 'Shadcn UI', 'OpenAI'],
    gallery: [{ title: 'Builder Tour', url: '/smart-interview/builder-1.mov' }],
    problem: <span>Creating questionnaires and analyzing responses is a time-consuming task.</span>,
    solution: <span>Create AI-powered questionnaires and mass analyze responses.</span>,
    results: <span>Save time and resources.</span>,
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
    longDescription: <span>A simple web application for a Japanese restaurant.</span>,
    previewImg: '/koryori-ya/web-1.png',
    type: 'Web Application',
    technologies: ['React', 'Next.js', 'Tailwind CSS', 'TypeScript', 'Shadcn UI', 'OpenAI'],
    gallery: [{ title: 'Home Page', url: '/koryori-ya/web-1.png' }],
    problem: <span>Creating questionnaires and analyzing responses is a time-consuming task.</span>,
    solution: <span>Create AI-powered questionnaires and mass analyze responses.</span>,
    results: <span>Save time and resources.</span>,
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
    longDescription: <span>A platform to view and manage AI-powered trading tools.</span>,
    type: 'SaaS',
    technologies: ['React', 'Next.js', 'Tailwind CSS', 'TypeScript', 'Shadcn UI', 'OpenAI'],
    problem: <span>Creating questionnaires and analyzing responses is a time-consuming task.</span>,
    solution: <span>Create AI-powered questionnaires and mass analyze responses.</span>,
    results: <span>Save time and resources.</span>
  }
}
