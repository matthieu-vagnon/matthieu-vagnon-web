import Image from 'next/image'

export default function ProjectCard({
  image,
  title,
  description
}: {
  image: string
  title: string
  description: string
}) {
  return <Image src={image} alt={title} width={500} height={500} />
}
