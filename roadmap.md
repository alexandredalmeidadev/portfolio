# Roadmap SEO — Portfolio Alexandre d'ALMEIDA

> Généré le 2026-07-05 après audit complet du codebase.  
> Stack : Next.js 15, React 19, Tailwind CSS 4, Vercel

---

## Légende

- `[ ]` À faire
- `[x]` Déjà implémenté
- `[!]` Bug / problème actif à corriger

---

## AUDIT — État actuel du projet

### Ce qui est en place
- `[x]` `lang="fr"` sur la balise `<html>` (`app/layout.tsx:24`)
- `[x]` `<title>` et `<meta description>` basiques dans `app/layout.tsx`
- `[x]` Structure sémantique H1 → H2 → H3 → H4 cohérente
- `[x]` CV téléchargeable en PDF (`/CV-Alexandre-Dalmeida.pdf`)
- `[x]` Liens GitHub + LinkedIn dans le header
- `[x]` `vercel.json` présent à la racine

### Bugs actifs à corriger en priorité

- `[!]` **vercel.json** : `buildCommand` pointe vers `npm run postinstall` qui n'existe pas → build Vercel planté
- `[!]` **vercel.json** : `installCommand` utilise `yarn install` mais le projet utilise npm (`package-lock.json`) → conflit de lockfiles
- `[!]` Image hero (`Hero.tsx:43`) : `unoptimized={true}` explicitement passé à `<Image>` → pas d'optimisation
- `[!]` **`next.config.ts`** : `unoptimized: true` global → TOUTES les images du site sont non-optimisées (impact LCP / Core Web Vitals)
- `[!]` Lien `http://cultureweb.net` (`Status.tsx:183`) : HTTP non sécurisé → Google pénalise les liens sortants non-HTTPS
- `[!]` Header (`Header.tsx:16`) : image avatar via `<img>` natif (non optimisé) au lieu de `<Image>` Next.js
- `[!]` Work (`Work.tsx:24`) : `<img>` natif au lieu de `<Image>` Next.js sur les logos d'expérience

---

## PRIORITÉ 1 — Fondations SEO (bloquants indexation)

### 1.1 Metadata enrichie Open Graph + Twitter Card
**Fichier :** `app/layout.tsx`  
**État :** `[ ]` — Seuls `title` et `description` sont présents

```tsx
export const metadata: Metadata = {
  title: "Alexandre d'ALMEIDA • Développeur Full-Stack Next.js & IA",
  description: "Développeur Full-Stack spécialisé Next.js, ASP.NET Core et IA. Je construis des SaaS performants et des solutions digitales à fort ROI pour les entrepreneurs.",
  metadataBase: new URL("https://alexandredalmeida.vercel.app"), // ← à remplacer par ton domaine final
  openGraph: {
    title: "Alexandre d'ALMEIDA • Développeur Full-Stack Next.js & IA",
    description: "Développeur Full-Stack — Next.js, ASP.NET Core, IA générative. Fondateur d'OREBTECH.",
    url: "https://alexandredalmeida.vercel.app",
    siteName: "Alexandre d'ALMEIDA",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Alexandre d'ALMEIDA – Développeur Full-Stack" }],
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Alexandre d'ALMEIDA • Développeur Full-Stack",
    description: "SaaS, Next.js, ASP.NET Core et IA — Solutions digitales à fort ROI.",
    images: ["/og-image.png"],
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  alternates: { canonical: "https://alexandredalmeida.vercel.app" },
};
```

### 1.2 `robots.txt`
**Fichier :** `app/robots.ts`  
**État :** `[ ]` — Fichier manquant, Google indexe potentiellement des ressources indésirables

```ts
import { MetadataRoute } from "next";
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: "https://alexandredalmeida.vercel.app/sitemap.xml",
  };
}
```

### 1.3 `sitemap.xml`
**Fichier :** `app/sitemap.ts`  
**État :** `[ ]` — Fichier manquant, Google ne peut pas découvrir toutes les pages

```ts
import { MetadataRoute } from "next";
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: "https://alexandredalmeida.vercel.app", lastModified: new Date(), changeFrequency: "monthly", priority: 1 },
  ];
}
```

### 1.4 Image Open Graph (og-image)
**Fichier :** `app/opengraph-image.tsx`  
**État :** `[ ]` — Aucune image de partage social (1200×630px)

Créer avec `ImageResponse` de Next.js : nom + titre + couleurs de la charte graphique.  
Affiché lors du partage LinkedIn / WhatsApp / Twitter.

### 1.5 Favicon configuré dans metadata
**Fichier :** `app/layout.tsx`  
**État :** `[ ]` — Le fichier `favicon.ico` existe à la racine mais n'est pas déclaré dans metadata

```tsx
icons: {
  icon: "/favicon.ico",
  apple: "/apple-touch-icon.png", // à créer (180×180px)
}
```

---

## PRIORITÉ 2 — Données structurées JSON-LD (Rich Snippets Google)

### 2.1 Schema `Person`
**Fichier :** `app/layout.tsx` (balise `<script type="application/ld+json">`)  
**État :** `[ ]` — Aucun schema structuré

```json
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Alexandre d'ALMEIDA",
  "jobTitle": "Développeur Full-Stack",
  "url": "https://alexandredalmeida.vercel.app",
  "email": "alexandrepvdalmeida@gmail.com",
  "sameAs": [
    "https://github.com/alexandredalmeidadev",
    "https://www.linkedin.com/in/alexandre-dalmeida-495277121/"
  ],
  "knowsAbout": ["Next.js", "ASP.NET Core", "Intelligence Artificielle", "SaaS", "n8n", "React", "C#"]
}
```

### 2.2 Schema `ProfessionalService` / `Organization`
**État :** `[ ]` — Pas de données structurées pour les services proposés

Permet à Google d'afficher tes services directement dans les résultats de recherche.

### 2.3 Schema `BreadcrumbList`
**État :** `[ ]` — Utile si tu ajoutes des pages `/projects/[slug]` plus tard

---

## PRIORITÉ 3 — Performance Web Vitals (Core Web Vitals = facteur de ranking Google)

### 3.1 Désactiver `unoptimized: true` global
**Fichier :** `next.config.ts:4`  
**État :** `[!]` — Bug actif

Supprimer `unoptimized: true`. Next.js optimise automatiquement les images vers WebP/AVIF,  
réduit leur taille et améliore le LCP (Largest Contentful Paint).

### 3.2 Remplacer les `<img>` natifs par `<Image>` Next.js
**Fichiers :** `Header.tsx:16`, `Work.tsx:24`, `Status.tsx:50-55`, `Status.tsx:81-86`  
**État :** `[ ]` — 4 composants utilisent encore `<img>` non optimisé

### 3.3 Image Hero locale
**Fichier :** `Hero.tsx:43`  
**État :** `[ ]` — Image chargée depuis Unsplash (dépendance externe, latence non contrôlée)

→ Télécharger l'image localement dans `/public/images/hero.jpg` et servir en local.

### 3.4 Alt texts pertinents et descriptifs
**État :** `[ ]` — Alt texts trop génériques ou manquants

| Composant | Alt actuel | Alt recommandé |
|---|---|---|
| `Hero.tsx:48` | `"Workspace"` | `"Environnement de travail d'Alexandre d'ALMEIDA, développeur Full-Stack"` |
| `Header.tsx:18` | `"Alexandre"` | `"Alexandre d'ALMEIDA, développeur Full-Stack"` |
| `Footer.tsx:17` | `"Alexandre"` | `"Alexandre d'ALMEIDA, développeur Full-Stack"` |
| `Status.tsx:55` | `"Studio Inpulsion"` | `"Logo Studio Inpulsion – Agence de développement web"` |
| `Status.tsx:87` | `"OREBTECH"` | `"Logo OREBTECH – Studio SaaS et IA"` |

### 3.5 Corriger le lien HTTP vers HTTPS
**Fichier :** `Status.tsx:183`  
**État :** `[!]` — `http://cultureweb.net` → remplacer par `https://cultureweb.net`

---

## PRIORITÉ 4 — Contenu & Mots-clés

### 4.1 Mots-clés cibles à intégrer naturellement dans les textes

| Mot-clé | Volume estimé | Difficulté | Section cible |
|---|---|---|---|
| `développeur fullstack freelance` | Fort | Moyen | Hero, Services |
| `développeur Next.js freelance` | Moyen | Faible | Hero, Skills |
| `création SaaS sur-mesure` | Moyen | Faible | Services, Projects |
| `intégration IA entreprise` | Moyen | Faible | Services, Skills |
| `développeur ASP.NET Core freelance` | Faible | Très faible | Skills |
| `automatisation n8n` | Faible | Très faible | Services |
| `développeur fullstack Bénin` | Faible | Nul | Status (localisation) |

### 4.2 Section "À propos" + localisation géographique
**État :** `[ ]` — Google ne sait pas où tu es basé (Bénin / Afrique de l'Ouest)

Ajouter dans Hero ou Status une mention géographique :  
> *"Basé au Bénin, disponible en remote pour des clients internationaux"*

### 4.3 Descriptions de projets enrichies
**Fichier :** `Projects.tsx:37-63`  
**État :** `[ ]` — Les 4 projets ont des descriptions d'une seule ligne

Étendre chaque description avec la stack technique et l'impact métier :
- GestiPro → "Solution complète de gestion commerciale (ventes, stock, caisse, factures) — Next.js, Prisma, PostgreSQL"
- Juridixio → "Plateforme juridique IA (documents légaux OHADA) — RAG, LangChain, Next.js"
- Wotelo → "SaaS de gestion hôtelière — Next.js, ASP.NET Core, Multi-tenant"
- Goshen → "SaaS de gestion agricole automatisé — C# ASP.NET, n8n, automatisation des flux"

### 4.4 Pages dédiées par projet `/projects/[slug]`
**État :** `[ ]` — Tous les projets sont des liens externes sans page interne

Créer `app/projects/[slug]/page.tsx` avec :
- Description complète (stack, problème résolu, résultats)
- Screenshots
- Metadata spécifique par projet (title, description, og:image)

### 4.5 Section "Témoignages / Social Proof"
**État :** `[ ]` — Aucun témoignage client

Les reviews clients améliorent la crédibilité E-E-A-T (Experience, Expertise, Authoritativeness, Trustworthiness) aux yeux de Google.

---

## PRIORITÉ 5 — Suivi & Analyse

### 5.1 Google Search Console
**État :** `[ ]` — Pas de vérification du domaine

1. Aller sur search.google.com/search-console
2. Ajouter la propriété avec le domaine final
3. Vérifier via fichier HTML ou meta tag dans `layout.tsx`
4. Soumettre le sitemap

### 5.2 Analytics (Vercel Analytics ou Google Analytics 4)
**État :** `[ ]` — Aucun tracking côté client visible

Vercel Analytics est gratuit et s'intègre en 2 lignes :
```bash
npm install @vercel/analytics
```
```tsx
// app/layout.tsx
import { Analytics } from "@vercel/analytics/react";
// Ajouter <Analytics /> dans le body
```

### 5.3 Vercel Speed Insights
**État :** `[ ]` — Aucun monitoring des Core Web Vitals

```bash
npm install @vercel/speed-insights
```

---

## PRIORITÉ 6 — Corrections techniques urgentes (hors SEO)

### 6.1 Corriger `vercel.json`
**Fichier :** `vercel.json`  
**État :** `[!]` — Build Vercel planté (postinstall inexistant, yarn vs npm)

```json
{
  "buildCommand": "next build",
  "devCommand": "npm run dev",
  "installCommand": "npm install",
  "framework": "nextjs",
  "regions": ["fra1"],
  "env": { "NODE_ENV": "production" }
}
```

### 6.2 Ajouter `rel="noopener noreferrer"` sur tous les liens externes
**Fichier :** `Header.tsx:34-45`, `SideProject.tsx:23`  
**État :** `[ ]` — Certains liens externes `target="_blank"` n'ont pas `rel="noopener noreferrer"`

Sécurité + signal de qualité pour Google.

### 6.3 `<html>` sans AnimatedBackground dans le layout
**État :** `[ ]` — `AnimatedBackground` est importé dans `layout.tsx` mais non utilisé (import mort)

---

## Tableau de bord global

| # | Tâche | Fichier(s) | Impact SEO | Effort | Statut |
|---|---|---|---|---|---|
| 1.1 | Open Graph + Twitter Card | `layout.tsx` | Élevé | 30 min | `[x]` |
| 1.2 | `robots.txt` | `app/robots.ts` | Élevé | 10 min | `[x]` |
| 1.3 | `sitemap.xml` | `app/sitemap.ts` | Élevé | 15 min | `[x]` |
| 1.4 | og-image 1200×630 | `app/opengraph-image.tsx` | Élevé | 45 min | `[x]` |
| 1.5 | Favicon metadata | `layout.tsx` | Faible | 10 min | `[x]` |
| 2.1 | JSON-LD Person | `layout.tsx` | Élevé | 20 min | `[x]` |
| 2.2 | JSON-LD Service | `layout.tsx` | Moyen | 20 min | `[x]` |
| 3.1 | Désactiver `unoptimized` | `next.config.ts` | Élevé | 5 min | `[x]` |
| 3.2 | `<img>` → `<Image>` | 4 composants | Moyen | 30 min | `[x]` |
| 3.3 | Image hero locale | `Hero.tsx` | Moyen | 20 min | `[ ]` |
| 3.4 | Alt texts complets | 5 composants | Moyen | 20 min | `[x]` |
| 3.5 | Lien HTTP → HTTPS | `Status.tsx:183` | Faible | 2 min | `[x]` |
| 4.1 | Mots-clés dans textes | Hero, Services, Skills | Élevé | 1h | `[ ]` |
| 4.2 | Localisation géo | Hero ou Status | Moyen | 15 min | `[x]` |
| 4.3 | Descriptions projets | `Projects.tsx` | Moyen | 30 min | `[x]` |
| 4.4 | Pages `/projects/[slug]` | `app/projects/` | Élevé | 3h | `[ ]` |
| 4.5 | Section témoignages | Nouveau composant | Moyen | 2h | `[ ]` |
| 5.1 | Google Search Console | — | Élevé | 30 min | `[ ]` |
| 5.2 | Vercel Analytics | `layout.tsx` | Moyen | 10 min | `[x]` |
| 5.3 | Speed Insights | `layout.tsx` | Moyen | 10 min | `[x]` |
| 6.1 | Corriger `vercel.json` | `vercel.json` | Critique | 5 min | `[x]` |
| 6.2 | `rel="noopener"` | Header, SideProject | Faible | 10 min | `[ ]` |
| 6.3 | Import mort AnimatedBackground | `layout.tsx` | Nul | 2 min | `[x]` |

---

## Ordre d'exécution recommandé

```
Semaine 1 — Quick wins (2-3h total)
  → 6.1 Corriger vercel.json          [5 min]
  → 3.1 Désactiver unoptimized        [5 min]
  → 3.5 Lien HTTP → HTTPS             [2 min]
  → 1.2 robots.txt                    [10 min]
  → 1.3 sitemap.xml                   [15 min]
  → 1.1 Open Graph + Twitter Card     [30 min]
  → 2.1 JSON-LD Person + Service      [40 min]
  → 3.4 Alt texts                     [20 min]
  → 5.1 Google Search Console         [30 min]
  → 5.2 Vercel Analytics              [10 min]

Semaine 2 — Contenu & Performance
  → 1.4 og-image 1200×630             [45 min]
  → 3.2 <img> → <Image>               [30 min]
  → 3.3 Image hero locale             [20 min]
  → 4.1 Mots-clés dans textes         [1h]
  → 4.2 Localisation géo              [15 min]
  → 4.3 Descriptions projets          [30 min]

Semaine 3 — Expansion & Autorité
  → 4.4 Pages /projects/[slug]        [3h]
  → 4.5 Section témoignages           [2h]
```
