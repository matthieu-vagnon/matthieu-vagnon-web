export default function PageTitle({ title, description }: { title: string; description: string }) {
  return (
    <div className='flex flex-col items-center justify-center'>
      <h1 className='text-center'>{title}</h1>
      <h2 className='text-base md:text-lg font-sans-special text-center mt-2 text-gray-500'>{description}</h2>
    </div>
  )
}
