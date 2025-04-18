import Highlight from '@/components/highlight';
import bibimouneImage from '@/public/testimonials/bibimoune.jpeg';
import rigoriImage from '@/public/testimonials/rigori.jpeg';

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Mohamed Bibimoune',
    company: 'TotalEnergies',
    position: 'Head of Gas&Power Predictive Department',
    testimonial: {
      en: (
        <p>
          Matthieu provided Predictive Layer with{' '}
          <Highlight>high standard quality</Highlight> product from front-end
          point of view. He developed <Highlight>several products</Highlight>{' '}
          used live by our customers to consume the forecasts produced by our
          company. He is <Highlight>serious</Highlight> and always
          <Highlight>delivers on time</Highlight>, taking into account our
          requirements. I would
          <Highlight>highly recommend him</Highlight> as a service provider for
          any front application needed.
        </p>
      ),
    },
    method: 'LinkedIn',
    image: bibimouneImage,
  },
  {
    id: 2,
    name: 'Serge Rigori',
    company: 'Predictive Layer',
    position: 'CEO and Chairman',
    testimonial: {
      fr: (
        <p>
          En tant que développeur front-end freelance, Matthieu s&apos;est
          distingué par son <Highlight>expertise technique</Highlight>, sa
          <Highlight>créativité</Highlight> et son{' '}
          <Highlight>engagement</Highlight> envers la réussite des projets qui
          lui ont été confiés. Il a notamment démontré une{' '}
          <Highlight>parfaite maîtrise</Highlight> des technologies telles que
          TypeScript, Next.js, Git, Figma, React, ainsi qu&apos;une
          <Highlight>capacité à s&apos;adapter rapidement</Highlight> à nos
          outils et processus. Matthieu a aussi démontré un{' '}
          <Highlight>vrai talent</Highlight> pour développer des interfaces
          utilisateurs ergonomiques et performants, en concevant et intégrant
          également des visuels plaisants et adaptés.
        </p>
      ),
    },
    image: rigoriImage,
  },
];
