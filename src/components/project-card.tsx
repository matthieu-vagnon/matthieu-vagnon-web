import { cn } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import { BlurFade } from './ui/blur-fade'
import { Magnetic } from './ui/magnetic'

export type Project = {
  backgroundImage: string
  previewImage?: string
  title: string
  description: string
  url: string
  type: 'Web Application' | 'SaaS' | 'Contribution' | 'Other'
}

const typeVariants = {
  'Web Application': 'bg-blue-500',
  SaaS: 'bg-green-500',
  Contribution: 'bg-yellow-500',
  Other: 'bg-gray-500'
}

export default function ProjectCard({
  priority,
  backgroundImage,
  previewImage,
  title,
  description,
  url,
  type
}: Project & { priority: number }) {
  return (
    <BlurFade delay={0.2 + priority * 0.2} className='flex flex-auto h-90 md:h-100 min-w-70 max-w-80 w-min'>
      <Magnetic range={500} intensity={0.1} className='h-full w-full'>
        <Link
          href={url}
          className='relative rounded-lg h-full w-full overflow-hidden group flex flex-col justify-end items-start gap-2 px-5 py-4'
        >
          <div className={cn('rounded-sm px-2 py-1 text-xs font-medium z-2', typeVariants[type])}>{type}</div>
          <h2 className='text-2xl font-bold text-white z-2 font-sans-special'>{title}</h2>
          <p className='text-sm max-h-0 text-white opacity-0 group-hover:max-h-full group-hover:opacity-100 transition-all duration-300 z-1'>
            {description}
          </p>
          {previewImage && (
            <div className='absolute w-full p-2 left-0 top-0 rounded-sm z-1'>
              <Image className='w-full rounded-sm shadow-lg' src={previewImage} alt={title} width={300} height={200} />
            </div>
          )}
          <Image
            className='absolute object-cover object-center h-full w-full left-0 right-0 group-hover:scale-110 transition-transform duration-300'
            src={backgroundImage}
            alt={title}
            fill
          />
        </Link>
      </Magnetic>
    </BlurFade>
  )
}
