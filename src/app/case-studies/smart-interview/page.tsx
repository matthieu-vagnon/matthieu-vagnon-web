import Header from '@/components/header'
import PageTitle from '@/components/page-title'
import { BlurFade } from '@/components/ui/blur-fade'

export default function SmartInterview() {
  return (
    <div>
      <BlurFade>
        <Header />
      </BlurFade>
      <BlurFade delay={0.1}>
        <PageTitle
          title='Smart Interview'
          description='A platform to create AI-powered questionnaires and mass analyze responses.'
        />
      </BlurFade>
    </div>
  )
}
