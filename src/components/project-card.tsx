import { cn } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import { BlurFade } from './ui/blur-fade'
import { Magnetic } from './ui/magnetic'

export type Project = {
  title: string
  description: string
  image?: string
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
  title,
  description,
  image,
  url,
  type,
  coverImage
}: Project & { priority: number; coverImage: string }) {
  return (
    <BlurFade delay={0.2 + priority * 0.1} className='h-80 sm:h-90 md:h-100 w-60 sm:w-70 md:w-80'>
      <Magnetic range={500} intensity={0.1} className='h-full w-full'>
        <Link
          href={url}
          className='relative rounded-lg h-full w-full hover:shadow-2xl transition-shadow duration-300 overflow-hidden group flex flex-col justify-end items-start gap-2 px-5 py-4'
        >
          <div className={cn('rounded-sm px-2 py-1 text-xs font-medium z-2', typeVariants[type])}>{type}</div>
          <h3 className='text-2xl font-bold text-white z-2 font-sans-special'>{title}</h3>
          <p className='text-sm text-white z-1'>{description}</p>
          {image && (
            <div className='absolute w-full p-2 left-0 top-0 rounded-sm z-1'>
              <Image
                className='pointer-events-none w-full rounded-sm shadow-lg'
                src={image}
                alt={title}
                width={300}
                height={200}
              />
            </div>
          )}
          <Image
            className='absolute pointer-events-none object-cover object-center h-full w-full left-0 right-0 group-hover:scale-110 transition-transform duration-300'
            src={coverImage}
            alt={title}
            fill
          />
        </Link>
      </Magnetic>
    </BlurFade>
  )
}
