import type { Metadata } from "next";
import Link from "next/link";
import { PrintButton } from "./_print-button";

export const metadata: Metadata = {
  title: "CV — Alexandre d'ALMEIDA • Développeur Full-Stack Next.js & IA",
  description:
    "Curriculum Vitae d'Alexandre d'ALMEIDA, Développeur Full-Stack spécialisé Next.js, ASP.NET Core et IA. Fondateur d'OREBTECH. 7 ans d'expérience.",
};

const NAVY = "#1c2d45";
const TEAL = "#1a7090";

const EXPERIENCES = [
  {
    company: "OREBTECH",
    role: "Lead Dev & Fondateur",
    period: "2025 — Présent",
    bullets: [
      "Création d'un studio de développement SaaS & IA sur mesure",
      "Développement et lancement de GestiPro, Wotelo et Goshen",
      "Intégration d'IA générative (OpenAI, Claude API, LangChain, RAG)",
    ],
  },
  {
    company: "Studio Inpulsion",
    role: "Consultant Full-Stack JS",
    period: "Janv. 2026 — Présent",
    bullets: [
      "Développement d'applications Web & Mobile en Full Stack JS",
      "Développement de Juridixio : plateforme juridique IA OHADA — refonte UI, RAG, agents LLM",
    ],
  },
  {
    company: "CultureWeb",
    role: "Développeur FullStack — Mission Freelance",
    period: "2024 — 2025",
    bullets: [
      "Développement fullstack d'une application d'expertise comptable",
    ],
  },
  {
    company: "SimpleIT",
    role: "Développeur .NET & SQL",
    period: "2023 — 2024",
    bullets: [
      "Développement backend ASP.NET Core et SQL Server",
      "Conception de modules ERP et reporting métier",
    ],
  },
  {
    company: "DRC TECH",
    role: "Développeur Laravel & Flutter",
    period: "Juil. — Oct. 2023",
    bullets: [
      "Conception de sites et applications web (SynergiePlus - FlammeRencontre)",
      "Conception d'application mobile (SynergiePlus)",
    ],
  },
  {
    company: "WAOUH MONDE",
    role: "Développeur Laravel",
    period: "Nov. 2022 — Mai 2023",
    bullets: [
      "Conception d'une application web (CLEVA)",
      "Sécurisation de sites WordPress",
    ],
  },
  {
    company: "CULTURE WEB",
    role: "Analyste Programmeur .NET — Stage professionnel",
    period: "2020 — 2021",
    bullets: [
      "Conception d'application de normalisation des factures de la SCB — Société de Cimenterie du Bénin",
      "Conception d'application de normalisation des factures de BOLLORE Bénin",
      "Création et gestion de Base De Donnée My-SQL et Microsoft SQL Server",
      "Rédaction des manuels utilisateurs à l'aide de Word et PowerPoint",
    ],
  },
];

const PROJECTS = [
  {
    name: "GestiPro",
    desc: "SaaS de gestion commerciale multi-modules",
    stack: "Next.js · Prisma · PostgreSQL",
  },
  {
    name: "Juridixio",
    desc: "Plateforme juridique IA OHADA (juridixio.com)",
    stack: "RAG · LangChain · OpenAI · Next.js",
  },
  {
    name: "Wotelo",
    desc: "SaaS hôtelier multi-tenant",
    stack: "Next.js · ASP.NET Core · PostgreSQL",
  },
  {
    name: "Goshen",
    desc: "SaaS agricole automatisé",
    stack: "C# ASP.NET · n8n · PostgreSQL",
  },
];

const EDUCATION = [
  {
    code: "IFRI",
    full: "Institut de Formation et de Recherche en Informatique",
    degree: "Licence professionnelle en Système d'Information et Réseau Informatique",
  },
  {
    code: "ENEAM",
    full: "Ecole Nationale d'Economie Appliquée et de Management",
    degree: "Brevet de Technicien Supérieur (BTS) en Informatique de Gestion",
  },
  {
    code: "CSGA",
    full: "Complexe Scolaire la Grande Académie",
    degree: "Baccalauréat série C",
  },
];

const SKILLS = [
  { label: "Frontend", value: "Next.js, React, TypeScript, Tailwind CSS, HTML5/CSS3" },
  { label: "Backend", value: "ASP.NET Core, C#, Node.js, PHP Laravel" },
  { label: "IA & Automatisation", value: "OpenAI GPT-4, Claude API, LangChain, RAG, n8n" },
  { label: "Bases de données", value: "PostgreSQL, SQL Server, MySQL, Prisma, Firebase" },
  { label: "DevOps", value: "Docker, Vercel, Git, CI/CD" },
  { label: "Bureautique", value: "Word (avancé), Excel (avancé), PowerPoint (avancé), LaTeX (avancé)" },
  { label: "Langues", value: "Français (natif), Anglais (professionnel), Fon (natif)" },
];

export default function CVPage() {
  return (
    <>
      <style>{`
        @media print {
          @page { size: A4; margin: 20mm 20mm; }
          @page :first { margin-top: 15mm; }
          html, body { -webkit-print-color-adjust: exact; print-color-adjust: exact; background: white !important; height: auto !important; overflow: visible !important; }
          .no-print { display: none !important; }
          .cv-wrapper { background: white !important; padding: 0 !important; min-height: auto !important; height: auto !important; overflow: visible !important; }
          .cv-doc { box-shadow: none !important; max-width: 100% !important; width: 100% !important; padding: 0 !important; height: auto !important; overflow: visible !important; }
        }
      `}</style>

      {/* Barre de contrôle */}
      <div className="no-print sticky top-0 z-50 bg-zinc-950 text-white px-6 py-3 flex items-center justify-between border-b border-white/10">
        <Link
          href="/"
          className="text-sm font-bold text-zinc-400 hover:text-white transition-colors flex items-center gap-2"
        >
          ← Retour au portfolio
        </Link>
        <div className="flex items-center gap-3">
          <span className="text-xs text-zinc-500 font-medium">Format A4 · Français</span>
          <PrintButton />
        </div>
      </div>

      {/* Document */}
      <div className="cv-wrapper bg-gray-300 py-10 px-4 min-h-screen">
        <div
          className="cv-doc mx-auto bg-white shadow-2xl w-full px-5 py-8 sm:px-10 sm:py-10 md:px-[60px]"
          style={{ maxWidth: "794px" }}
        >
          {/* HEADER */}
          <div className="flex items-center gap-5 mb-8">
            <div style={{ backgroundColor: NAVY }} className="px-5 py-2">
              <span className="text-white font-bold text-xl tracking-widest">CV</span>
            </div>
            <h1 style={{ color: TEAL }} className="text-2xl font-bold tracking-wide">
              Alexandre d&apos;ALMEIDA
            </h1>
          </div>

          {/* INFORMATIONS PERSONNELLES */}
          <CvSection title="Informations personnelles">
            <div className="flex flex-col-reverse sm:flex-row gap-4 sm:gap-8 items-start">
              <table className="flex-1 w-full text-sm">
                <tbody>
                  <InfoRow label="Nom" value="D'ALMEIDA Alexandre Prince Valery" />
                  <InfoRow label="Adresse e-mail" value="alexandrepvdalmeida@gmail.com" />
                  <InfoRow label="Contact" value="+229 0196007981" />
                  <InfoRow label="Adresse" value="Bénin — Disponible en remote" />
                  <InfoRow label="Site web" value="alexandredalmeida.com" href="https://www.alexandredalmeida.com" />
                  <InfoRow label="LinkedIn" value="alexandre-dalmeida-495277121" />
                  <InfoRow label="GitHub" value="alexandredalmeidadev" />
                </tbody>
              </table>
              <div className="shrink-0 mx-auto sm:mx-0">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/maphoto.jpg"
                  alt="Alexandre d'ALMEIDA"
                  width={120}
                  height={140}
                  className="object-cover object-top border border-gray-200"
                  style={{ display: "block" }}
                />
              </div>
            </div>
          </CvSection>

          {/* PROFIL */}
          <CvSection title="Profil">
            <p className="text-sm text-gray-700 leading-relaxed">
              Développeur Full-Stack avec <strong>7 ans d&apos;expérience</strong> en conception de SaaS
              performants et d&apos;applications métier. Expert <strong>Next.js</strong>,{" "}
              <strong>ASP.NET Core</strong> et intégration d&apos;<strong>IA générative</strong> (OpenAI,
              Claude API, LangChain, RAG). Fondateur d&apos;<strong>OREBTECH</strong>, un studio de
              développement de produits digitaux. Basé au Bénin, disponible en remote pour
              des clients internationaux.
            </p>
          </CvSection>

          {/* EXPÉRIENCES */}
          <CvSection title="Expériences professionnelles">
            <div className="flex flex-col gap-3">
              {EXPERIENCES.map(({ company, role, period, bullets }) => (
                <div key={company} style={{ breakInside: "avoid" }}>
                  <p className="text-sm">
                    <strong className="text-gray-900">{company}</strong>
                    <span style={{ color: TEAL }} className="text-xs font-medium">
                      {" "}
                      - {role} ({period})
                    </span>
                  </p>
                  <ul className="mt-0.5">
                    {bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2 text-sm text-gray-700 leading-snug">
                        <span style={{ color: NAVY }} className="shrink-0 mt-0.5 text-xs leading-5">
                          ■
                        </span>
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </CvSection>

          {/* PROJETS PHARES */}
          <CvSection title="Projets Phares">
            <div className="flex flex-col gap-1.5">
              {PROJECTS.map(({ name, desc, stack }) => (
                <div key={name} className="flex items-start gap-2 text-sm" style={{ breakInside: "avoid" }}>
                  <span style={{ color: NAVY }} className="shrink-0 mt-0.5 text-xs leading-5">
                    ■
                  </span>
                  <span className="text-gray-700">
                    <strong className="text-gray-900">{name}</strong>
                    <span style={{ color: TEAL }}> — {desc}</span>
                    <span className="text-gray-400 text-xs"> · {stack}</span>
                  </span>
                </div>
              ))}
            </div>
          </CvSection>

          {/* FORMATION */}
          <CvSection title="Etudes et Diplômes">
            <div className="flex flex-col gap-3">
              {EDUCATION.map(({ code, full, degree }) => (
                <div key={code} style={{ breakInside: "avoid" }}>
                  <h3 className="text-sm font-bold text-gray-900">
                    {code} - {full}
                  </h3>
                  <div className="flex items-start gap-2 mt-0.5">
                    <span style={{ color: NAVY }} className="shrink-0 text-xs leading-5">
                      ■
                    </span>
                    <span className="text-sm text-gray-700">{degree}</span>
                  </div>
                </div>
              ))}
            </div>
          </CvSection>

          {/* COMPÉTENCES */}
          <CvSection title="Compétences">
            <table className="w-full text-sm">
              <tbody>
                {SKILLS.map(({ label, value }) => (
                  <tr key={label}>
                    <td className="py-0.5 pr-1 align-top w-4">
                      <span style={{ color: NAVY }} className="text-xs">
                        ■
                      </span>
                    </td>
                    <td
                      style={{ color: TEAL }}
                      className="py-0.5 pr-2 sm:pr-6 align-top font-bold sm:whitespace-nowrap"
                    >
                      {label}
                    </td>
                    <td className="py-0.5 text-gray-700">{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </CvSection>

          {/* ENGAGEMENT BÉNÉVOLE */}
          <CvSection title="Engagement bénévole &amp; Leadership">
            <div style={{ breakInside: "avoid" }}>
              <h3 className="text-sm font-bold text-gray-900">
                Église Vases d&apos;Honneur Calavi — Assemblée Intimes de Christ
              </h3>
              <p style={{ color: TEAL }} className="text-xs font-medium mb-0.5">
                Responsable Communication · Juil. 2023 — Présent
              </p>
              <div className="flex items-start gap-2">
                <span style={{ color: NAVY }} className="shrink-0 text-xs leading-5">■</span>
                <span className="text-sm text-gray-700">
                  Gestion de la communication interne et externe de l&apos;assemblée : animation des réseaux sociaux, création de supports visuels, sonorisation et projections
                </span>
              </div>
            </div>
          </CvSection>

          {/* CENTRES D'INTÉRÊT */}
          <CvSection title="Centres d'intérêt">
            <div className="flex flex-col gap-3">
              <div style={{ breakInside: "avoid" }}>
                <h3 className="text-sm font-bold text-gray-900">
                  Club d&apos;Art Oratoire (Galaxie Toasmasters)
                </h3>
                <div className="flex items-start gap-2 mt-0.5">
                  <span style={{ color: NAVY }} className="shrink-0 text-xs leading-5">
                    ■
                  </span>
                  <span className="text-sm text-gray-700">
                    Membre et Secrétaire du club Galaxie — Mandature 2022-2023
                  </span>
                </div>
              </div>
              <div style={{ breakInside: "avoid" }}>
                <h3 className="text-sm font-bold text-gray-900">Sport (Art Martiaux)</h3>
                <div className="flex items-start gap-2 mt-0.5">
                  <span style={{ color: NAVY }} className="shrink-0 text-xs leading-5">
                    ■
                  </span>
                  <span className="text-sm text-gray-700">Ceinture Noire 1er Dan Taekwondo</span>
                </div>
              </div>
            </div>
          </CvSection>
        </div>
      </div>
    </>
  );
}

function CvSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-6">
      <h2 className="text-base font-bold text-gray-800 border-b border-gray-300 pb-1 mb-3">
        {title}
      </h2>
      {children}
    </div>
  );
}

function InfoRow({ label, value, href }: { label: string; value: string; href?: string }) {
  return (
    <tr>
      <td
        style={{ color: TEAL }}
        className="font-semibold pr-4 sm:pr-8 py-0.5 align-top whitespace-nowrap"
      >
        {label}
      </td>
      <td className="text-gray-800 py-0.5 break-words">
        {href ? (
          <a href={href} style={{ color: TEAL }} className="underline">
            {value}
          </a>
        ) : value}
      </td>
    </tr>
  );
}
