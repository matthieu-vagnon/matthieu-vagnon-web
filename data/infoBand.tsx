import { BadgeCheck, BadgeEuro } from "lucide-react";

export const infoBand: InfoBand[] = [
  {
    text: {
      en: "Certified member of the CCIFJ since June 2025.",
      fr: "Membre certifié de la CCIFJ depuis juin 2025.",
    },
    url: {
      en: "https://www.ccifj.or.jp/",
    },
    icon: BadgeCheck,
  },
  {
    text: {
      en: "Accredited for the French Innovation Tax Credit since 2025.",
      fr: "Prestataire agréé CII (Crédit Impôt Innovation).",
    },
    icon: BadgeEuro,
    url: {
      en: "https://www.entreprises.gouv.fr/espace-entreprises/beneficier-d-une-aide-ou-d-un-credit-d-impot/credit-dimpot-innovation",
    },
  },
];
