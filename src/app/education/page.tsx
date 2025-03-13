import { BlurFade } from '@/components/ui/blur-fade'
import { Timeline } from '@/components/ui/timeline'

export default function Education() {
  const data = [
    {
      title: '2024',
      content: (
        <div>
          <h3 className='text-lg font-bold'>Starting my Freelance Journey</h3>
          <p className='text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8'>
            I started my freelance journey in 2024. I&apos;ve been working on various projects and learning new things.
          </p>
        </div>
      )
    }
  ]

  return (
    <BlurFade>
      <Timeline data={data} />
    </BlurFade>
  )
}
