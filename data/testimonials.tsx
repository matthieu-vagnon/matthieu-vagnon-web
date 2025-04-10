import Highlight from '@/components/highlight'
import bibimouneImage from '@/public/testimonials/bibimoune.jpeg'
import rigoriImage from '@/public/testimonials/rigori.jpeg'

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Mohamed Bibimoune',
    company: 'TotalEnergies',
    position: 'Head of Gas&Power Predictive Department',
    testimonial: (
      <p>
        Matthieu provided Predictive Layer with <Highlight>high standard quality</Highlight> product from front-end
        point of view. He developed <Highlight>several products</Highlight> used live by our customers to consume the
        forecasts produced by our company. He is <Highlight>serious</Highlight> and always
        <Highlight>delivers on time</Highlight>, taking into account our requirements. I would
        <Highlight>highly recommend him</Highlight> as a service provider for any front application needed.
      </p>
    ),
    method: 'LinkedIn',
    image: bibimouneImage
  },
  {
    id: 2,
    name: 'Serge Rigori',
    company: 'Predictive Layer',
    position: 'CEO and Chairman',
    testimonial: (
      <p>
        Matthieu has distinguished himself by his <Highlight>technical expertise</Highlight>, his
        <Highlight>creativity</Highlight> and his <Highlight>commitment</Highlight> to the success of the projects
        entrusted to him. He has notably demonstrated a<Highlight>perfect mastery</Highlight> of technologies as well as
        the ability to <Highlight>adapt rapidly</Highlight> to our tools and processes. Matthieu has also demonstrated a
        real talent for developing <Highlight>ergonomic</Highlight> and <Highlight>performant</Highlight> user
        interfaces.
      </p>
    ),
    image: rigoriImage
  }
]
