---
alwaysApply: true
---

# Stack & Environnement

- **Stack principale** : TypeScript (strict), React.js / React Native, Next.js (App Router), Tailwind CSS
- **Date de référence** : 2025
- **MCP Context7** : Utiliser systématiquement pour récupérer les documentations récentes des librairies (Next.js, React, Tailwind, etc.) quand une question porte sur une API, une fonctionnalité ou une syntaxe potentiellement mise à jour.

---

# Principes Fondamentaux

## Style de Réponse

- Réponses concises et directes (2-4 phrases max sauf demande explicite de détails)
- Pas de préambule ni de postambule inutile
- Pas d'emojis sauf demande explicite
- Markdown pour la mise en forme, backticks pour le code inline

## Avant de Coder

1. **Comprendre** : Reformuler la demande réelle de l'utilisateur
2. **Explorer** : Vérifier le contexte existant (fichiers, patterns, dépendances)
3. **Planifier** : Définir précisément ce qui change et ce qui reste intact
4. **Clarifier** : Poser des questions si ambiguïté avant d'implémenter

## Pendant le Développement

- Ne jamais deviner l'existence d'une librairie — vérifier `package.json` ou les imports voisins
- Respecter les conventions du projet existant (nommage, structure, patterns)
- Créer des composants petits et focalisés plutôt que des fichiers monolithiques
- Ne jamais ajouter de fonctionnalités non demandées

---

# TypeScript

```typescript
// ✅ Bonnes pratiques
- Mode strict activé
- Typage explicite des retours de fonctions
- Interface pour les objets, type pour les unions
- Jamais de `any` sans justification explicite
- Utiliser `satisfies` plutôt que les assertions de type quand possible
- Imports groupés : externes → internes (@/) → relatifs → types
```

## Conventions de Nommage

- **Composants** : `PascalCase.tsx`
- **Hooks** : `use[Name].ts`
- **Utilitaires** : `camelCase.ts`
- **Types** : `[name].types.ts` ou `types/[name].ts`
- **Props booléennes** : `is[State]`, `has[Feature]`, `can[Action]`
- **Handlers** : `handle[Event]` ou `on[Event]`
- **Fonctions async** : `fetch[Resource]`, `create[Resource]`

---

# React / React Native

```tsx
// ✅ Patterns obligatoires
- Composants fonctionnels avec hooks uniquement
- Exports nommés (pas de default export sauf pages Next.js)
- Préférer const arrow functions
- Props typées via interface
- Pas de logique métier dans les composants — extraire dans des hooks ou utils
```

## Gestion d'État

- `useState` : état local UI uniquement
- `Zustand` ou `Jotai` : état global client
- `@tanstack/react-query` (React Query) : état serveur, cache, data fetching
- **Ne jamais fetch dans useEffect** — utiliser React Query ou passer les données depuis RSC

## Structure Composant

```tsx
// 1. Interface props en haut
interface ButtonProps {
  variant?: 'primary' | 'secondary';
  isLoading?: boolean;
  onClick: () => void;
  children: React.ReactNode;
}

// 2. Composant exporté nommément
export function Button({ variant = 'primary', isLoading, onClick, children }: ButtonProps) {
  // 3. Hooks
  // 4. Handlers
  // 5. Render
  return (/* JSX */);
}
```

---

# Next.js (App Router)

## Conventions Next.js 14+

- **App Router** par défaut (pas Pages Router sauf demande explicite)
- Server Components par défaut — `'use client'` uniquement si nécessaire
- `params`, `searchParams`, `headers`, `cookies` sont **async** — toujours `await`
- Server Actions pour les mutations plutôt que des routes API
- Suspense boundaries pour les états de chargement

## Structure de Fichiers

```
src/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── (auth)/
│   │   ├── login/page.tsx
│   │   └── register/page.tsx
│   └── api/
│       └── [resource]/route.ts
├── components/
│   ├── ui/           # Composants génériques (Button, Card, etc.)
│   └── features/     # Composants spécifiques au domaine
├── hooks/
├── lib/
│   └── utils.ts
├── types/
└── styles/
    └── globals.css
```

## SEO (Automatique)

- Balises `<title>` avec mot-clé principal (< 60 caractères)
- Meta description (< 160 caractères)
- Un seul `<h1>` par page
- HTML sémantique : `<main>`, `<article>`, `<section>`, `<header>`, `<footer>`
- Alt text sur toutes les images
- Lazy loading pour les images

---

# Tailwind CSS

## Règles Critiques

```tsx
// ❌ INTERDIT — styles directs
<div className="bg-white text-black">

// ✅ OBLIGATOIRE — tokens sémantiques
<div className="bg-background text-foreground">
```

## Design System

- **Toujours** utiliser les tokens sémantiques définis dans `globals.css` et `tailwind.config.ts`
- Couleurs HSL dans les variables CSS
- Maximum 3-5 couleurs totales
- Maximum 2 familles de polices
- Utiliser l'échelle de spacing Tailwind (`p-4`, `gap-6`) — jamais de valeurs arbitraires
- Classes responsive : `md:`, `lg:`, `xl:`
- Utiliser `cn()` de `lib/utils.ts` pour les classes conditionnelles

## Tokens Obligatoires

```css
/* globals.css */
:root {
  --background: 0 0% 100%;
  --foreground: 222.2 84% 4.9%;
  --primary: 222.2 47.4% 11.2%;
  --primary-foreground: 210 40% 98%;
  --secondary: 210 40% 96%;
  --muted: 210 40% 96%;
  --accent: 210 40% 96%;
  --destructive: 0 84.2% 60.2%;
  --border: 214.3 31.8% 91.4%;
  --radius: 0.5rem;
}
```

---

# Validation & Sécurité

## Validation

- `zod` pour toute validation de données (API, formulaires)
- `react-hook-form` + `zod` pour les formulaires React
- Exporter les types générés depuis les schémas zod

## Sécurité

- Ne jamais exposer de secrets dans le code client
- Variables d'environnement sensibles côté serveur uniquement
- Row Level Security (RLS) obligatoire avec Supabase
- Validation côté serveur systématique

---

# Patterns Interdits (DO NOT)

```typescript
// ❌ NE JAMAIS FAIRE
- Composants classe
- CSS modules (utiliser Tailwind)
- default exports (sauf pages)
- any sans justification
- fetch dans useEffect
- Imports relatifs profonds (utiliser @/)
- Fichiers > 200 lignes
- Commentaires inutiles
- Valeurs arbitraires Tailwind (p-[17px])
- Couleurs directes (text-white, bg-black)
```

---

# Documentation & MCP Context7

Quand une question concerne :

- Une API ou syntaxe récente de Next.js, React, Tailwind, ou toute librairie
- Une fonctionnalité dont la documentation pourrait avoir changé
- Un pattern dont tu n'es pas certain de la version actuelle

→ **Utiliser MCP Context7** pour récupérer la documentation à jour avant de répondre.

---

# Workflow de Développement

1. **Lire** le contexte existant (fichiers fournis, structure projet)
2. **Rechercher** si la fonctionnalité existe déjà
3. **Planifier** les changements minimaux nécessaires
4. **Implémenter** en respectant les conventions
5. **Vérifier** avec lint/typecheck si disponibles
6. **Ne jamais commit** sans demande explicite

---

# Références Utiles

- @next.config.ts
- @tailwind.config.ts
- @tsconfig.json
- @package.json
- @src/lib/utils.ts
