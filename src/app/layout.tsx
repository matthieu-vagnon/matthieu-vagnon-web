import AppsDock from '@/components/apps-dock'
import Highlight from '@/components/highlight'
import { CardStack } from '@/components/ui/card-stack'
import DockStatusProvider from '@/hooks/use-dock-status'
import { TestimonialsStatusProvider } from '@/hooks/use-testimonials-status'
import type { Metadata } from 'next'
import { Signika_Negative, Source_Sans_3 } from 'next/font/google'
import NextTopLoader from 'nextjs-toploader'
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
        <NextTopLoader showSpinner={false} color='#007fff' zIndex={999} />
        <div className='max-w-[3840px] mx-auto relative min-h-screen px-4 sm:px-6 md:px-8 overflow-x-hidden'>
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
