import me from '@/public/profile/me.png';

export const profile: Profile = {
  avatarUrl: me,
  about: {
    en: (
      <div className='flex flex-col gap-3'>
        <span>
          🪄 I’m not just a developer — I’m a magician who:
          <ul className='list-disc list-inside'>
            <li>Increases your customer loyalty</li>
            <li>Unlocks the full potential of your SaaS or web app</li>
            <li>Makes you stand out from the competition</li>
            <li>Teach you how to internalize my competences</li>
          </ul>
        </span>
        <span>
          📌 I’m a front-end developer (React & Next.js expert) and digital
          designer with a strong belief: No matter how great your product is,
          it’s worth nothing without a high-quality user interface. Because
          UI/UX is the first and most powerful lever for conversion — even more
          than advanced features.
        </span>
        <span>
          👆 The truth? User experience often matters more than raw
          functionality.
        </span>
        <span>
          👨‍💻 As a hybrid developer-designer, I merge design and development into
          a single smooth process, which leads to:
          <ul className='list-disc list-inside'>
            <li>Faster delivery</li>
            <li>Pixel-perfect implementation</li>
            <li>Lower development costs</li>
          </ul>
        </span>
      </div>
    ),
    fr: (
      <div className='flex flex-col gap-3'>
        <span>
          🪄 Je ne suis pas un simple développeur, je suis un magicien qui :
          <ul className='list-disc list-inside'>
            <li>Améliore la fidélité de vos clients</li>
            <li>Booste le potentiel de vos SaaS/applications</li>
            <li>Vous fait briller face à la concurrence</li>
            <li>Vous apprend à internaliser mes compétences</li>
          </ul>
        </span>
        <span>
          📌 Je suis un développeur front-end, expert en React et Next.js et
          designer digital, dont la conviction est qu&apos;une application web,
          peu importe ce qu&apos;elle apporte, ne vaut rien sans une interface
          utilisateur de qualité car c&apos;est là le premier levier de
          conversion, bien avant les features avancées.
        </span>
        <span>
          👆 La réalité c&apos;est que l&apos;expérience de l&apos;utilisateur
          prévaut bien souvent sur les fonctionnalités brutes.
        </span>
        <span>
          👨‍💻 En tant que développeur-designer, j&apos;apporte une unification
          des processus de design et développement, ce qui résulte en :
          <ul className='list-disc list-inside'>
            <li>Une livraison plus rapide</li>
            <li>Un rendu 100% fidèle à vos maquettes</li>
            <li>Une mise en œuvre moins coûteuse</li>
          </ul>
        </span>
      </div>
    ),
    ja: (
      <div className='flex flex-col gap-3'>
        <span>
          🪄 私はただの開発者ではありません。私は魔法使いです。
          <ul className='list-disc list-inside'>
            <li>ユーザーのロイヤリティを高め</li>
            <li>あなたのSaaSやWebアプリのポテンシャルを最大化し</li>
            <li>競合との差別化を実現します</li>
            <li>私の能力を内面化する方法を教える</li>
          </ul>
        </span>
        <span>
          📌
          私はReact・Next.jsのエキスパートであり、デジタルデザイナーでもあるフロントエンド開発者です。
          どれだけ優れたサービスでも、質の高いUIがなければ価値はありません。
          なぜなら、UI/UXこそが最も強力なコンバージョンのレバーだからです。高度な機能よりも、まずは体験。
        </span>
        <span>
          👆
          実際、ユーザーが感じる「体験」は、機能そのものよりも重要になることが多いのです。
        </span>
        <span>
          👨‍💻 デザインと開発の両方を担える私だからこそ、プロセスを統一でき、
          <ul className='list-disc list-inside'>
            <li>開発スピードの向上</li>
            <li>デザイン通りの忠実な実装</li>
            <li>コスト削減</li>
          </ul>
        </span>
      </div>
    ),
  },
};
