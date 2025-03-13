import LandingTitle from '@/app/components/LandingTitle'
import StackCarousel from '@/app/components/StackCarousel'

export default function Home() {
  return (
    <div className='flex flex-col items-center justify-center h-screen'>
      <LandingTitle />
      <StackCarousel />
    </div>
  )
}
