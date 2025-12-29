import Highlight from "@/components/Highlight";
import bibimouneImage from "@/public/testimonials/bibimoune.jpeg";
import ousamaBoujaouaneImage from "@/public/testimonials/ousama-boujaouane.jpeg";
import rigoriImage from "@/public/testimonials/rigori.jpeg";
import saussayeImage from "@/public/testimonials/saussaye.jpeg";

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Mohamed Bibimoune",
    company: "TotalEnergies",
    position: "Head of Gas&Power Predictive Department",
    testimonial: {
      original: "en",
      en: (
        <>
          Matthieu provided Predictive Layer with{" "}
          <Highlight color="emerald">high standard quality</Highlight> product
          from front-end point of view. He developed{" "}
          <Highlight color="emerald">several products</Highlight> used live by
          our customers to consume the forecasts produced by our company. He is{" "}
          <Highlight color="emerald">serious</Highlight> and always
          <Highlight color="emerald">delivers on time</Highlight>, taking into
          account our requirements. I would
          <Highlight color="emerald">highly recommend him</Highlight> as a
          service provider for any front application needed.
        </>
      ),
      fr: (
        <>
          Matthieu a fourni Predictive Layer avec{" "}
          <Highlight color="emerald">une qualité élevée</Highlight> du point de
          vue front-end. Il a développé{" "}
          <Highlight color="emerald">plusieurs produits</Highlight> utilisés en
          direct par nos clients pour consommer les prévisions produites par
          notre entreprise. Il est{" "}
          <Highlight color="emerald">sérieux</Highlight> et toujours
          <Highlight color="emerald">livre à temps</Highlight>, prenant en
          compte nos exigences. Je{" "}
          <Highlight color="emerald">recommande</Highlight> vivement son service
          pour toutes les applications front-end nécessaires.
        </>
      ),
    },
    method: "LinkedIn",
    image: bibimouneImage,
  },
  {
    id: 2,
    name: "Serge Rigori",
    company: "Predictive Layer",
    position: "CEO and Chairman",
    testimonial: {
      original: "fr",
      en: (
        <>
          As a freelance front-end developer, Matthieu distinguished himself
          through his <Highlight color="emerald">technical expertise</Highlight>
          , his <Highlight color="emerald">creativity</Highlight> and his{" "}
          <Highlight color="emerald">commitment</Highlight> to the success of
          the projects entrusted to him. He notably demonstrated{" "}
          <Highlight color="emerald">perfect mastery</Highlight> of technologies
          such as TypeScript, Next.js, Git, Figma, React, as well as a{" "}
          <Highlight color="emerald">capacity to adapt quickly</Highlight> to
          our tools and processes. Matthieu also demonstrated a{" "}
          <Highlight color="emerald">true talent</Highlight> for developing
          ergonomic and high-performing user interfaces, designing and
          integrating pleasant and appropriate visuals.
        </>
      ),
      fr: (
        <>
          En tant que développeur front-end freelance, Matthieu s&apos;est
          distingué par son{" "}
          <Highlight color="emerald">expertise technique</Highlight>, sa{" "}
          <Highlight color="emerald">créativité</Highlight> et son{" "}
          <Highlight color="emerald">engagement</Highlight> envers la réussite
          des projets qui lui ont été confiés. Il a notamment démontré une{" "}
          <Highlight color="emerald">parfaite maîtrise</Highlight> des
          technologies telles que TypeScript, Next.js, Git, Figma, React, ainsi
          qu&apos;une{" "}
          <Highlight color="emerald">
            capacité à s&apos;adapter rapidement
          </Highlight>{" "}
          à nos outils et processus. Matthieu a aussi démontré un{" "}
          <Highlight color="emerald">vrai talent</Highlight> pour développer des
          interfaces utilisateurs ergonomiques et performants, en concevant et
          intégrant également des visuels plaisants et adaptés.
        </>
      ),
    },
    image: rigoriImage,
  },
  {
    id: 3,
    name: "Matthieu Saussaye",
    company: "Pulse Partners",
    position: "CEO",
    testimonial: {
      original: "fr",
      en: (
        <>
          I hired Matthieu for our{" "}
          <Highlight color="emerald">SmartInterview interface</Highlight>.
          Thanks to his skills, we were able to greatly improve the{" "}
          <Highlight color="emerald">design and ease of use</Highlight> for our
          users. Thank you for everything!
        </>
      ),
      fr: (
        <>
          J’ai fait appel à Matthieu pour notre{" "}
          <Highlight color="emerald">interface SmartInterview</Highlight>. Grâce
          à ses compétences, nous avons pu améliorer énormément le{" "}
          <Highlight color="emerald">
            design et faciliter l&apos;usage
          </Highlight>{" "}
          pour nos utilisateurs. Merci pour tout !
        </>
      ),
    },
    image: saussayeImage,
  },
  {
    id: 4,
    name: "Ousama Boujaouane",
    company: "myDev & GPF (AI Commission)",
    position: "President",
    testimonial: {
      original: "fr",
      en: (
        <>
          I had the opportunity to work with Matthieu on the development of the
          website of one of my clients, and I greatly appreciated his{" "}
          <Highlight color="emerald">
            professionalism and responsiveness
          </Highlight>
          . Matthieu has{" "}
          <Highlight color="emerald">solid skills in TypeScript</Highlight>, a{" "}
          <Highlight color="emerald">
            very good understanding of React.js and Next.js
          </Highlight>
          , as well as a{" "}
          <Highlight color="emerald">
            true sense of interface design and user experience
          </Highlight>
          . It is a
          <Highlight color="emerald">
            serious, efficient and very nice profile
          </Highlight>{" "}
          <Highlight color="emerald">I recommend without hesitation!</Highlight>
        </>
      ),
      fr: (
        <>
          J’ai eu l’occasion de travailler avec Matthieu sur le développement du
          site web d’un de mes clients, et j’ai beaucoup apprécié son{" "}
          <Highlight color="emerald">
            professionnalisme et sa réactivité
          </Highlight>
          . Matthieu dispose de{" "}
          <Highlight color="emerald">
            solides compétences en TypeScript
          </Highlight>
          , d’une{" "}
          <Highlight color="emerald">
            très bonne compréhension de React.js et Next.js
          </Highlight>
          , ainsi que d’un{" "}
          <Highlight color="emerald">
            vrai sens du design d’interface et de l’expérience utilisateur
          </Highlight>
          . C’est un{" "}
          <Highlight color="emerald">
            profil sérieux, efficace et super sympa.
          </Highlight>{" "}
          <Highlight color="emerald">Je recommande sans hésitation !</Highlight>
        </>
      ),
    },
    image: ousamaBoujaouaneImage,
  },
];
