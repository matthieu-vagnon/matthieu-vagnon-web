import Highlight from '@/components/highlight'
import bibimouneImage from '@/public/testimonials/bibimoune.jpeg'
import rigoriImage from '@/public/testimonials/rigori.jpeg'

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Mohamed Bibimoune',
    company: 'TotalEnergies',
    position: 'Head of Gas&Power Predictive Department',
    testimonial: {
      en: (
        <p>
          Matthieu provided Predictive Layer with <Highlight>high standard quality</Highlight> product from front-end
          point of view. He developed <Highlight>several products</Highlight> used live by our customers to consume the
          forecasts produced by our company. He is <Highlight>serious</Highlight> and always
          <Highlight>delivers on time</Highlight>, taking into account our requirements. I would
          <Highlight>highly recommend him</Highlight> as a service provider for any front application needed.
        </p>
      ),
      fr: (
        <p>
          Matthieu a fourni Predictive Layer avec un <Highlight>niveau de qualité élevé</Highlight> de produit
          front-end. Il a développé <Highlight>plusieurs produits</Highlight> utilisés en direct par nos clients pour
          consommer les prévisions produites par notre entreprise. Il est <Highlight>sérieux</Highlight> et toujours
          <Highlight>livre à temps</Highlight>, en tenant compte de nos exigences. Je le
          <Highlight>recommande</Highlight> vivement comme prestataire de service pour toutes les applications front
          nécessaires.
        </p>
      )
    },
    method: 'LinkedIn',
    image: bibimouneImage
  },
  {
    id: 2,
    name: 'Serge Rigori',
    company: 'Predictive Layer',
    position: 'CEO and Chairman',
    testimonial: {
      en: (
        <p>
          Matthieu has distinguished himself by his <Highlight>technical expertise</Highlight>, his
          <Highlight>creativity</Highlight> and his <Highlight>commitment</Highlight> to the success of the projects
          entrusted to him. He has notably demonstrated a<Highlight>perfect mastery</Highlight> of technologies as well
          as the ability to <Highlight>adapt rapidly</Highlight> to our tools and processes. Matthieu has also
          demonstrated a real talent for developing <Highlight>ergonomic</Highlight> and{' '}
          <Highlight>performant</Highlight> user interfaces.
        </p>
      ),
      fr: (
        <p>
          Matthieu a distingué par son <Highlight>expertise technique</Highlight>, sa <Highlight>créativité</Highlight>{' '}
          et son <Highlight>engagement</Highlight> pour le succès des projets confiés à lui. Il a notamment démontré un
          <Highlight>maîtrise parfaite</Highlight> des technologies ainsi que la capacité à{' '}
          <Highlight>s&apos;adapter rapidement</Highlight> à nos outils et processus. Matthieu a également démontré un
          talent réel pour le développement de <Highlight>ergonomie</Highlight> et de{' '}
          <Highlight>performances</Highlight>
          pour les utilisateurs.
        </p>
      )
    },
    image: rigoriImage
  }
]
