import { Link } from '@/i18n/navigation'
import { cn, getTranslatedData } from '@/lib/utils'
import { useLocale } from 'next-intl'
import Image, { StaticImageData } from 'next/image'
import { Magnetic } from './ui/magnetic'

const typeVariants = {
  'Web Application': 'bg-blue-500',
  SaaS: 'bg-green-500',
  Contribution: 'bg-yellow-500',
  Other: 'bg-gray-500'
}

export default function ProjectCard({
  coverImage,
  url,
  ...project
}: Project & { coverImage: StaticImageData; url: string }) {
  const locale = useLocale()

  return (
    <Magnetic size='lg' className='h-70 sm:h-90 md:h-100 w-45 sm:w-70 md:w-80'>
      <Link
        href={url}
        className='relative rounded-lg h-full w-full hover:shadow-2xl transition-shadow duration-300 overflow-hidden group flex flex-col justify-end items-start gap-2 p-3 sm:p-4'
      >
        <div className={cn('rounded-full px-2 py-1 text-xs font-medium z-2', typeVariants[project.type])}>
          {project.type}
        </div>
        <div className='flex flex-row items-baseline gap-1 sm:gap-2 max-w-full'>
          <h3 className='text-md sm:text-xl md:text-2xl font-bold text-white z-1 font-sans-special overflow-x-hidden text-ellipsis whitespace-nowrap'>
            {project.title}
          </h3>
          <span className='text-xs sm:text-sm md:text-base text-white/50 font-bold z-1'>{project.year}</span>
        </div>
        <p className='text-xs sm:text-sm md:text-base text-white z-1'>
          {getTranslatedData(project.shortDescription, locale)}
        </p>
        {project.previewImg && (
          <div className='absolute w-full p-2 left-0 top-0 rounded-sm z-1'>
            <Image
              className='pointer-events-none w-full rounded-sm shadow-lg'
              placeholder='blur'
              src={project.previewImg}
              alt={project.title}
            />
          </div>
        )}
        <Image
          className='absolute pointer-events-none object-cover object-center h-full w-full left-0 top-0 group-hover:scale-110 transition-transform duration-300'
          placeholder='blur'
          src={coverImage}
          height={400}
          width={320}
          alt='Background'
          quality={40}
        />
      </Link>
    </Magnetic>
  )
}
