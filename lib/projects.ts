export type Project = {
  slug: string;
  title: string;
  description: string;
  longDescription: string[];
  stack: string[];
  url: string;
  category: string;
  color: string;
  accentColor: string;
  features: string[];
  contribution?: string;
  year: string;
};

export const PROJECTS: Project[] = [
  {
    slug: "facuro",
    title: "Facuro",
    description: "microSaaS de devis & facturation pour artisans et freelances : création de devis, proforma, factures PDF & suivi clients — Next.js, Prisma, PostgreSQL",
    longDescription: [
      "Facuro est un microSaaS de devis et facturation conçu pour les artisans, freelances et petites entreprises d'Afrique de l'Ouest. L'objectif : offrir un outil simple, rapide et professionnel pour créer des devis et factures en FCFA, sans friction comptable.",
      "La plateforme couvre l'intégralité du cycle commercial : création de devis (et proforma), conversion en facture, génération de PDF personnalisés, gestion du carnet clients et catalogue de services. Un tableau de bord avec indicateurs clés (CA, devis en attente, factures impayées) donne une vision claire de l'activité.",
      "L'architecture multi-tenant garantit une isolation stricte des données par entreprise. Le système de numérotation atomique évite les doublons même sous charge, et NextAuth.js assure une authentification sécurisée avec gestion des rôles ARTISAN / ADMIN.",
    ],
    stack: ["Next.js 15", "React 19", "TypeScript", "Tailwind CSS", "Prisma", "PostgreSQL", "NextAuth.js", "@react-pdf/renderer", "Recharts", "Vercel"],
    url: "https://facuro-web.vercel.app/",
    category: "microSaaS",
    color: "from-indigo-600 to-blue-500",
    accentColor: "text-indigo-600",
    features: [
      "Création de devis, proforma et factures en quelques clics",
      "Génération de PDF professionnels personnalisés à l'entête entreprise",
      "Gestion du carnet clients et catalogue de services",
      "Tableau de bord : CA, taux de conversion devis→facture, impayés",
      "Architecture multi-tenant — données isolées par entreprise",
      "Numérotation atomique des documents (DEV-001, FAC-001, PRO-001)",
    ],
    year: "2026",
  },
  {
    slug: "kaxaya",
    title: "Kaxaya",
    description: "SaaS de gestion comptable pour PME : ventes, stocks, caisse, Mobile Money & bot WhatsApp intelligent — Next.js, Prisma, PostgreSQL",
    longDescription: [
      "Kaxaya est un SaaS de gestion comptable et commerciale pensé pour les petites et moyennes entreprises d'Afrique de l'Ouest. L'objectif : centraliser ventes, stocks, dépenses et trésorerie dans un outil simple et accessible, sans expertise comptable préalable.",
      "La plateforme couvre tout le cycle d'exploitation : gestion multi-boutiques, suivi des stocks et fournisseurs, encaissement en caisse, dépenses catégorisées et suivi des transactions Mobile Money (MTN MoMo, Moov Money, Celtiis Pay). Un bot WhatsApp intelligent, propulsé par l'IA, permet aux gérants de consulter leurs chiffres et poser leurs questions comptables directement depuis leur téléphone.",
      "L'architecture est organisée en monorepo (application web, bot et moteur comptable partagé) sur Next.js et Prisma/PostgreSQL, avec une isolation stricte des données par entreprise. Vous portez un projet de gestion sur-mesure pour votre activité ? N'hésitez pas à me contacter pour un devis personnalisé.",
    ],
    stack: ["Next.js", "React", "TypeScript", "Prisma", "PostgreSQL", "Tailwind CSS", "Radix UI", "Groq SDK", "Bot WhatsApp", "Vercel"],
    url: "https://kaxaya-web.vercel.app/",
    category: "SaaS",
    color: "from-green-600 to-emerald-500",
    accentColor: "text-green-600",
    features: [
      "Gestion multi-boutiques avec suivi des stocks en temps réel",
      "Caisse, dépenses catégorisées et suivi de trésorerie",
      "Transactions Mobile Money : MTN MoMo, Moov Money, Celtiis Pay",
      "Bot WhatsApp intelligent pour consulter ses chiffres et poser ses questions comptables",
      "Gestion des clients (grossistes, semi-grossistes, particuliers) et fournisseurs",
      "Rôles et permissions par entreprise (propriétaire, admin, gérant, employé)",
    ],
    year: "2026",
  },
  {
    slug: "juridixio",
    title: "Juridixio",
    description: "Plateforme juridique IA : rédaction de documents légaux OHADA par RAG & LangChain — Next.js, OpenAI",
    longDescription: [
      "Juridixio est une plateforme juridique propulsée par l'IA, spécialement conçue pour le droit des affaires en Afrique de l'Ouest sous le régime OHADA. Elle permet à des entrepreneurs, TPE et avocats de générer des documents juridiques conformes en quelques minutes, sans expertise technique en rédaction légale.",
      "Le cœur du système repose sur une architecture RAG (Retrieval-Augmented Generation) : un corpus de textes juridiques OHADA, de jurisprudences et de modèles de documents est vectorisé et stocké. Lors d'une requête, le système retrouve les passages les plus pertinents et les injecte dans le contexte du LLM pour une génération précise et conforme.",
      "J'ai pris en charge la refonte complète de l'interface utilisateur et l'intégration des flows IA avancés : agents LLM multi-étapes, validation juridique automatique des documents générés, et système de révision interactive."
    ],
    stack: ["Next.js", "TypeScript", "LangChain", "OpenAI GPT-4", "RAG", "Pinecone", "Tailwind CSS", "Vercel"],
    url: "https://www.juridixio.com/",
    category: "IA Générative",
    color: "from-purple-600 to-pink-500",
    accentColor: "text-purple-600",
    features: [
      "Génération de documents OHADA par IA (contrats, statuts, PV d'AG...)",
      "Architecture RAG sur corpus juridique africain vectorisé",
      "Agents LLM multi-étapes pour la validation juridique",
      "Interface de révision interactive document par document",
      "Export PDF et DOCX des documents générés",
      "Historique et versioning des documents par client",
    ],
    contribution: "Refonte complète de l'interface et intégration des flows IA avancés (RAG, agents LLM).",
    year: "2024",
  },
  {
    slug: "wotelo",
    title: "Wotelo",
    description: "SaaS de gestion hôtelière multi-tenant : réservations, chambres & appartements meublés — Next.js, ASP.NET Core",
    longDescription: [
      "Wotelo est un SaaS de gestion hôtelière multi-tenant destiné aux hôtels, résidences et propriétaires d'appartements meublés. Chaque établissement dispose de son propre espace cloisonné avec une configuration personnalisée : tarifs, types de chambres, politique d'annulation, et identité visuelle.",
      "La plateforme gère l'intégralité du cycle de vie d'une réservation : disponibilités en temps réel, booking en ligne, check-in/check-out, facturation et suivi des paiements. Un calendrier visuel permet au personnel de gérer les occupations d'un coup d'œil.",
      "L'architecture backend est construite sur ASP.NET Core avec une séparation stricte des données par tenant via un système de middleware dédié. Le frontend Next.js communique avec l'API via des endpoints REST sécurisés par JWT."
    ],
    stack: ["Next.js", "React", "TypeScript", "ASP.NET Core", "C#", "SQL Server", "Tailwind CSS", "Vercel"],
    url: "https://wotelo.vercel.app/",
    category: "SaaS",
    color: "from-emerald-500 to-teal-500",
    accentColor: "text-emerald-600",
    features: [
      "Architecture multi-tenant isolée par établissement",
      "Calendrier de réservations temps réel avec gestion des disponibilités",
      "Booking en ligne intégré avec confirmation automatique",
      "Check-in / check-out numérique et gestion des séjours",
      "Facturation automatique et suivi des paiements",
      "Tableau de bord : taux d'occupation, revenus, statistiques",
    ],
    year: "2024",
  },
  {
    slug: "gestipro",
    title: "GestiPro",
    description: "SaaS de gestion commerciale sur-mesure : ventes, stocks, caisse & facturation — Next.js, Prisma, PostgreSQL",
    longDescription: [
      "GestiPro est une solution SaaS complète de gestion commerciale conçue pour les PME et commerces qui souhaitent digitaliser leur activité sans friction. L'objectif : remplacer les tableurs Excel et les outils disparates par une plateforme unifiée, rapide et accessible depuis n'importe quel appareil.",
      "Le système couvre l'intégralité du cycle de vente : de la création de produits et la gestion des stocks en temps réel, jusqu'à l'encaissement en caisse et la génération automatique de factures PDF. Chaque opération est tracée et consultable dans un tableau de bord analytique.",
      "L'architecture est pensée pour la performance : rendu serveur Next.js pour un chargement quasi-instantané, base de données PostgreSQL avec Prisma ORM pour des requêtes optimisées, et un système de cache intelligent pour les rapports de vente."
    ],
    stack: ["Next.js", "React", "TypeScript", "Prisma", "PostgreSQL", "Tailwind CSS", "Vercel"],
    url: "https://gestipro-omega.vercel.app/",
    category: "SaaS",
    color: "from-blue-600 to-cyan-500",
    accentColor: "text-blue-600",
    features: [
      "Gestion des produits et stocks en temps réel avec alertes de rupture",
      "Système de caisse avec multiple modes de paiement",
      "Génération automatique de factures PDF personnalisées",
      "Tableau de bord analytique : CA, marges, top produits",
      "Gestion multi-utilisateurs avec rôles et permissions",
      "Historique complet des transactions et exports CSV",
    ],
    year: "2024",
  },
  {
    slug: "goshen",
    title: "Goshen",
    description: "SaaS de gestion agricole automatisé : cultures, stocks & rapports — C# ASP.NET Core, n8n, automatisation des flux",
    longDescription: [
      "Goshen est un SaaS de gestion agricole développé pour moderniser le suivi des exploitations agricoles en Afrique de l'Ouest. Il permet aux agriculteurs et coopératives de suivre leurs cultures, gérer leurs intrants et stocks, et automatiser leurs rapports de production.",
      "L'une des fonctionnalités clés est le moteur d'automatisation basé sur n8n : des workflows se déclenchent automatiquement selon les stades de culture (semis, croissance, récolte) pour envoyer des alertes, générer des rapports hebdomadaires et synchroniser les données avec des partenaires externes.",
      "Le backend en C# ASP.NET Core offre une API robuste et typée, pensée pour fonctionner même en conditions de connectivité limitée grâce à un système de synchronisation optimisée des données."
    ],
    stack: ["C# ASP.NET Core", ".NET", "SQL Server", "n8n", "React", "TypeScript", "Docker"],
    url: "https://alexandrepv-001-site1.rtempurl.com",
    category: "Automatisation",
    color: "from-amber-500 to-orange-500",
    accentColor: "text-amber-600",
    features: [
      "Suivi des cultures par parcelle avec historique complet",
      "Gestion des intrants, semences et stocks d'équipement",
      "Workflows automatisés n8n : alertes, rapports, synchronisation",
      "Rapports de production hebdomadaires générés automatiquement",
      "API REST ASP.NET Core optimisée pour connectivité limitée",
      "Tableau de bord de rendement par saison et par culture",
    ],
    year: "2025",
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return PROJECTS.find((p) => p.slug === slug);
}
