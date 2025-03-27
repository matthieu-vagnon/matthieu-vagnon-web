'use client'

import { BlurFade } from '@/components/ui/blur-fade'
import { Card, CardContent } from '@/components/ui/card'
import { TextRotate } from '@/components/ui/text-rotate'
import { cn } from '@/lib/utils'
import { LayoutGroup, motion } from 'motion/react'
import { LinkButton } from './ui/button'
import { CardStack } from './ui/card-stack'
import { Particles } from './ui/particles'

type SocialLink = {
  label: string
  link: string
}

type Card = {
  id: number
  name: string
  designation: string
  content: React.ReactNode
}

const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'LinkedIn',
    link: 'https://linkedin.com/in/matthieu-vagnon'
  },
  {
    label: 'Instagram Portfolio',
    link: 'https://instagram.com/matthieu.vagnon'
  },
  {
    label: 'Github Portfolio',
    link: 'https://github.com/matthieu-vagnon'
  }
  // {
  //   label: 'Curriculum Vitae',
  //   link: '#'
  // }
]

const Highlight = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  return (
    <span
      className={cn(
        'font-bold bg-emerald-100 text-emerald-700 dark:bg-emerald-700/[0.2] dark:text-emerald-500 px-1 py-0.5',
        className
      )}
    >
      {children}
    </span>
  )
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

export default function LandingTitle() {
  return (
    <LayoutGroup>
      <div className='h-screen w-full flex justify-center items-center'>
        <div className='flex flex-col gap-6 sm:gap-8 md:gap-12 justify-center items-center'>
          <motion.div layout>
            <BlurFade className='flex'>
              <motion.div layout transition={{ type: 'spring', damping: 30, stiffness: 400 }}>
                <Card variant='dots' className='h-fit w-fit bg-white'>
                  <CardContent className='flex flex-col gap-1 md:gap-3 whitespace-pre items-center font-sans-special text-xl sm:text-3xl md:text-4xl translate-y-[6px]'>
                    <BlurFade delay={0.1} className='flex'>
                      <motion.span layout transition={{ type: 'spring', damping: 30, stiffness: 400 }}>
                        Hello, I&apos;m <span className='font-bold'>Matthieu Vagnon</span>,
                      </motion.span>
                    </BlurFade>
                    <BlurFade delay={0.2} className='flex'>
                      <span className='flex items-center mt-1 md:mt-2'>
                        <motion.span layout transition={{ type: 'spring', damping: 30, stiffness: 400 }}>
                          Freelance{' '}
                        </motion.span>
                        <TextRotate
                          texts={['Front-End Engineer', 'Digital Designer', 'Website Creator']}
                          mainClassName='text-white px-2 sm:px-2 md:px-3 bg-[#007fff] overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg'
                          staggerFrom={'last'}
                          initial={{ y: '100%' }}
                          animate={{ y: 0 }}
                          exit={{ y: '-120%' }}
                          staggerDuration={0.025}
                          splitLevelClassName='overflow-hidden pb-0.5 sm:pb-1 md:pb-1'
                          transition={{ type: 'spring', damping: 30, stiffness: 400 }}
                          rotationInterval={3000}
                        />
                      </span>
                    </BlurFade>
                  </CardContent>
                </Card>
              </motion.div>
            </BlurFade>
          </motion.div>
          <BlurFade delay={0.5} className='flex'>
            <div className='flex items-center justify-center gap-3 flex-wrap'>
              {SOCIAL_LINKS.map((link) => (
                <LinkButton variant='secondary' size='sm' key={link.label} href={link.link} external>
                  {link.label}
                </LinkButton>
              ))}
            </div>
          </BlurFade>
        </div>
      </div>
      <BlurFade delay={1} className='flex'>
        <div className='absolute hidden xl:block bottom-8 right-0'>
          <CardStack items={CARDS} />
        </div>
      </BlurFade>
      <Particles className='fixed inset-0 -z-1' quantity={100} ease={80} color='black' refresh />
    </LayoutGroup>
  )
}
