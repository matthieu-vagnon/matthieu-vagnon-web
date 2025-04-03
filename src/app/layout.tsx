import AppsDock from '@/components/apps-dock'
import Highlight from '@/components/highlight'
import { LinkButton } from '@/components/ui/button'
import { CardStack } from '@/components/ui/card-stack'
import { ProgressiveBlur } from '@/components/ui/progressive-blur'
import DockStatusProvider from '@/hooks/use-dock-status'
import { TestimonialsStatusProvider } from '@/hooks/use-testimonials-status'
import type { Metadata } from 'next'
import { Signika_Negative, Source_Sans_3 } from 'next/font/google'
import './globals.css'

const signikaNegative = Signika_Negative({
  variable: '--font-signika-negative',
  subsets: ['latin']
})

const sourceSans3 = Source_Sans_3({
  variable: '--font-source-sans-3',
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: 'Matthieu Vagnon | Front-End Engineer & Digital Designer for SaaS & Web Apps',
  description:
    "Hi I'm Matthieu Vagnon, React/Next expert, front-end engineer and digital designer working independently since 2022 to provide my clients with cutting-edge SaaS and web apps."
}

type Card = {
  id: number
  name: string
  designation: string
  content: React.ReactNode
}

const CARDS: Card[] = [
  {
    id: 0,
    name: 'Mohamed Bibimoune',
    designation: 'Head of TotalEnergies Gas&Power Predictive Department',
    content: (
      <p>
        Matthieu provided Predictive Layer with <Highlight>high standard quality</Highlight> product from front-end
        point of view. He developed <Highlight>several products</Highlight> used live by our customers to consume the
        forecasts produced by our company. He is <Highlight>serious</Highlight> and always
        <Highlight>delivers on time</Highlight>, taking into account our requirements. I would
        <Highlight>highly recommend him</Highlight> as a service provider for any front application needed.
      </p>
    )
  },
  {
    id: 1,
    name: 'Serge Rigori',
    designation: 'CEO and Chairman of Predictive Layer',
    content: (
      <p>
        Matthieu has distinguished himself by his <Highlight>technical expertise</Highlight>, his
        <Highlight>creativity</Highlight> and his <Highlight>commitment</Highlight> to the success of the projects
        entrusted to him. He has notably demonstrated a<Highlight>perfect mastery</Highlight> of technologies as well as
        the ability to <Highlight>adapt rapidly</Highlight> to our tools and processes. Matthieu has also demonstrated a
        real talent for developing <Highlight>ergonomic</Highlight> and <Highlight>performant</Highlight> user
        interfaces.
      </p>
    )
  }
]

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={`${signikaNegative.variable} ${sourceSans3.variable} font-sans antialiased`}>
        <div className='max-w-[3840px] mx-auto relative min-h-screen pt-18 sm:pt-24 md:pt-28 pb-24 px-4 sm:px-6 md:px-8 overflow-x-hidden flex flex-col justify-center'>
          <div className='flex flex-nowrap gap-2 justify-between items-center w-full fixed top-4 sm:top-6 md:top-8 left-0 right-0 z-100 h-8 sm:h-10 md:h-12 px-[inherit]'>
            <svg height='100%' viewBox='0 0 800 800' fill='none' xmlns='http://www.w3.org/2000/svg'>
              <rect width='800' height='800' fill='#001428' />
              <rect y='650' width='800' height='150' fill='#007FFF' />
            </svg>
            <div className='whitespace-nowrap'>
              <span>Check out public repo{` `}</span>
              <LinkButton
                href='https://github.com/matthieu-vagnon/matthieu-vagnon-web'
                external
                variant='link'
                size='inline'
                className='text-base'
              >
                here
              </LinkButton>
            </div>
          </div>
          <ProgressiveBlur
            direction='top'
            className='fixed top-0 left-0 w-full h-20 sm:h-28 md:h-36 z-99 pointer-events-none'
          />
          <TestimonialsStatusProvider>
            <DockStatusProvider>
              {children}
              <CardStack items={CARDS} />
              <AppsDock />
            </DockStatusProvider>
          </TestimonialsStatusProvider>
        </div>
      </body>
    </html>
  )
}
