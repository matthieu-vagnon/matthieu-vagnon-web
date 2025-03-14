import LandingTitle from '@/components/LandingTitle'

export default function Home() {
  return (
    <div className='flex flex-col'>
      <LandingTitle />
      <div className='flex flex-col items-center py-16 px-8 min-h-screen justify-center'>
        <h1>Hello, I&apos;m Matthieu Vagnon</h1>
      </div>
    </div>
  )
}
