import Highlight from '@/components/highlight';
import bibimouneImage from '@/public/testimonials/bibimoune.jpeg';
import rigoriImage from '@/public/testimonials/rigori.jpeg';
import saussayeImage from '@/public/testimonials/saussaye.jpeg';

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Mohamed Bibimoune',
    company: 'TotalEnergies',
    position: 'Head of Gas&Power Predictive Department',
    testimonial: {
      original: 'en',
      en: (
        <>
          Matthieu provided Predictive Layer with{' '}
          <Highlight color='emerald'>high standard quality</Highlight> product
          from front-end point of view. He developed{' '}
          <Highlight color='emerald'>several products</Highlight> used live by
          our customers to consume the forecasts produced by our company. He is{' '}
          <Highlight color='emerald'>serious</Highlight> and always
          <Highlight color='emerald'>delivers on time</Highlight>, taking into
          account our requirements. I would
          <Highlight color='emerald'>highly recommend him</Highlight> as a
          service provider for any front application needed.
        </>
      ),
      fr: (
        <>
          Matthieu a fourni Predictive Layer avec{' '}
          <Highlight color='emerald'>une qualité élevée</Highlight> du point de
          vue front-end. Il a développé{' '}
          <Highlight color='emerald'>plusieurs produits</Highlight> utilisés en
          direct par nos clients pour consommer les prévisions produites par
          notre entreprise. Il est{' '}
          <Highlight color='emerald'>sérieux</Highlight> et toujours
          <Highlight color='emerald'>livre à temps</Highlight>, prenant en
          compte nos exigences. Je{' '}
          <Highlight color='emerald'>recommande</Highlight> vivement son service
          pour toutes les applications front-end nécessaires.
        </>
      ),
      ja: (
        <>
          マチューはPredictive Layerに
          <Highlight color='emerald'>高品質な</Highlight>
          フロントエンド製品を提供しました。彼は当社が生成した予測を顧客が利用するための
          <Highlight color='emerald'>複数の製品</Highlight>を開発しました。彼は
          <Highlight color='emerald'>真面目で</Highlight>常に
          <Highlight color='emerald'>期限通りに納品し</Highlight>
          、私たちの要件を考慮してくれます。必要なフロントエンドアプリケーションのサービスプロバイダーとして
          <Highlight color='emerald'>強くお勧めします</Highlight>。
        </>
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
      original: 'fr',
      en: (
        <>
          As a freelance front-end developer, Matthieu distinguished himself
          through his <Highlight color='emerald'>technical expertise</Highlight>
          , his <Highlight color='emerald'>creativity</Highlight> and his{' '}
          <Highlight color='emerald'>commitment</Highlight> to the success of
          the projects entrusted to him. He notably demonstrated{' '}
          <Highlight color='emerald'>perfect mastery</Highlight> of technologies
          such as TypeScript, Next.js, Git, Figma, React, as well as a{' '}
          <Highlight color='emerald'>capacity to adapt quickly</Highlight> to
          our tools and processes. Matthieu also demonstrated a{' '}
          <Highlight color='emerald'>true talent</Highlight> for developing
          ergonomic and high-performing user interfaces, designing and
          integrating pleasant and appropriate visuals.
        </>
      ),
      fr: (
        <>
          En tant que développeur front-end freelance, Matthieu s&apos;est
          distingué par son{' '}
          <Highlight color='emerald'>expertise technique</Highlight>, sa{' '}
          <Highlight color='emerald'>créativité</Highlight> et son{' '}
          <Highlight color='emerald'>engagement</Highlight> envers la réussite
          des projets qui lui ont été confiés. Il a notamment démontré une{' '}
          <Highlight color='emerald'>parfaite maîtrise</Highlight> des
          technologies telles que TypeScript, Next.js, Git, Figma, React, ainsi
          qu&apos;une{' '}
          <Highlight color='emerald'>
            capacité à s&apos;adapter rapidement
          </Highlight>{' '}
          à nos outils et processus. Matthieu a aussi démontré un{' '}
          <Highlight color='emerald'>vrai talent</Highlight> pour développer des
          interfaces utilisateurs ergonomiques et performants, en concevant et
          intégrant également des visuels plaisants et adaptés.
        </>
      ),
      ja: (
        <>
          フリーランスのフロントエンド開発者として、マチューは
          <Highlight color='emerald'>技術的専門知識</Highlight>、
          <Highlight color='emerald'>創造性</Highlight>、そして彼に任された
          プロジェクトの成功への
          <Highlight color='emerald'>コミットメント</Highlight>によって
          際立っていました。彼はTypeScript、Next.js、Git、Figma、Reactなどの技術の
          <Highlight color='emerald'>完璧な習熟度</Highlight>
          と、私たちのツールとプロセスに
          <Highlight color='emerald'>素早く適応する能力</Highlight>
          を示しました。
          マチューはまた、人間工学に基づいた高性能なユーザーインターフェースを開発し、
          魅力的で適切なビジュアルをデザインおよび統合する
          <Highlight color='emerald'>真の才能</Highlight>を発揮しました。
        </>
      ),
    },
    image: rigoriImage,
  },
  {
    id: 3,
    name: 'Matthieu Saussaye',
    company: 'Pulse Partners',
    position: 'CEO',
    testimonial: {
      original: 'fr',
      en: (
        <>
          I hired Matthieu for our{' '}
          <Highlight color='emerald'>SmartInterview interface</Highlight>.
          Thanks to his skills, we were able to greatly improve the{' '}
          <Highlight color='emerald'>design and ease of use</Highlight> for our
          users. Thank you for everything!
        </>
      ),
      fr: (
        <>
          J’ai fait appel à Matthieu pour notre{' '}
          <Highlight color='emerald'>interface SmartInterview</Highlight>. Grâce
          à ses compétences, nous avons pu améliorer énormément le{' '}
          <Highlight color='emerald'>
            design et faciliter l&apos;usage
          </Highlight>{' '}
          pour nos utilisateurs. Merci pour tout !
        </>
      ),
      ja: (
        <>
          私はMatthieuに私たちの
          <Highlight color='emerald'>SmartInterviewインターフェース</Highlight>
          を雇った。彼のスキルにより、私たちはユーザーの使用を大幅に改善することができました。
          ありがとうございました！
        </>
      ),
    },
    image: saussayeImage,
  },
];
