import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { PrintButton } from "./_print-button";
import { Mail, Phone, MapPin, Globe, Linkedin, Github } from "lucide-react";

export const metadata: Metadata = {
  title: "CV — Alexandre d'ALMEIDA • Développeur Full-Stack Next.js & IA",
  description:
    "Curriculum Vitae d'Alexandre d'ALMEIDA, Développeur Full-Stack spécialisé Next.js, ASP.NET Core et IA. Fondateur d'OREBTECH. 7 ans d'expérience.",
};

const CONTACT = [
  { Icon: Mail, text: "alexandrepvdalmeida@gmail.com" },
  { Icon: Phone, text: "+229 0196007981" },
  { Icon: MapPin, text: "Bénin — Disponible en remote" },
  { Icon: Globe, text: "alexandredalmeida.vercel.app" },
  { Icon: Linkedin, text: "alexandre-dalmeida-495277121" },
  { Icon: Github, text: "alexandredalmeidadev" },
];

const SKILLS = [
  { category: "Frontend", items: ["Next.js", "React", "TypeScript", "Tailwind CSS", "HTML5/CSS3"] },
  { category: "Backend", items: ["ASP.NET Core", "C#", "Node.js", "PHP Laravel"] },
  { category: "IA & Automatisation", items: ["OpenAI GPT-4", "Claude API", "LangChain", "RAG", "n8n"] },
  { category: "Bases de données", items: ["PostgreSQL", "SQL Server", "MySQL", "Prisma", "Firebase"] },
  { category: "DevOps", items: ["Docker", "Vercel", "Git", "CI/CD"] },
];

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
      "Conseil et architecture de solutions techniques sur mesure",
    ],
  },
  {
    company: "Juridixio",
    role: "Développeur FullStack & IA (Mission)",
    period: "2024 — 2025",
    bullets: [
      "Refonte complète de l'interface utilisateur de la plateforme",
      "Intégration des flows IA avancés : RAG, agents LLM, validation juridique",
    ],
  },
  {
    company: "CultureWeb",
    role: "Développeur FullStack (Mission Freelance)",
    period: "2024 — 2025",
    bullets: [
      "Développement fullstack de solutions web clients",
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
];

const OLDER_EXP = [
  { company: "WAOUH MONDE", role: "Développeur Laravel", period: "Nov. 2022 — Mai 2023" },
  { company: "DRC TECH", role: "Développeur Laravel & Flutter", period: "Juil. — Oct. 2023" },
  { company: "Culture Web", role: "Analyste Programmeur .NET (Stage)", period: "2020 — 2021" },
];

const PROJECTS = [
  { name: "GestiPro", desc: "SaaS de gestion commerciale", stack: "Next.js · Prisma · PostgreSQL" },
  { name: "Juridixio", desc: "Plateforme juridique IA OHADA", stack: "RAG · LangChain · OpenAI", url: "juridixio.com" },
  { name: "Wotelo", desc: "SaaS hôtelier multi-tenant", stack: "Next.js · ASP.NET Core" },
  { name: "Goshen", desc: "SaaS agricole automatisé", stack: "C# ASP.NET · n8n" },
];

const EDUCATION = [
  { school: "IFRI", degree: "Licence en Système d'Information et Réseau Informatique" },
  { school: "ENEAM", degree: "BTS en Informatique de Gestion" },
  { school: "CSGA", degree: "Baccalauréat série C" },
];

const LANGUAGES = [
  { lang: "Français", level: "Natif" },
  { lang: "Anglais", level: "Professionnel" },
  { lang: "Fon", level: "Natif" },
];

const INTERESTS = [
  "🎤 Club Toasmasters Galaxie (Secrétaire 2022-2023)",
  "🥋 Taekwondo — Ceinture Noire 1er Dan",
  "🧘 Tai-chi",
];

export default function CVPage() {
  return (
    <>
      <style>{`
        @media print {
          @page { size: A4; margin: 0; }
          body { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
          .no-print { display: none !important; }
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

      {/* Page CV */}
      <div className="no-print:bg-zinc-200 no-print:py-8 no-print:px-4 no-print:flex no-print:justify-center print:p-0">
        <div
          className="w-full max-w-[794px] bg-white no-print:shadow-2xl flex"
          style={{ minHeight: "1123px" }}
        >
          {/* ── SIDEBAR ── */}
          <div
            className="w-[32%] flex flex-col gap-5 p-7 text-white"
            style={{
              backgroundColor: "#1e1b4b",
              WebkitPrintColorAdjust: "exact",
              printColorAdjust: "exact",
            } as React.CSSProperties}
          >
            {/* Photo + nom */}
            <div className="flex flex-col items-center gap-3 text-center">
              <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-purple-400 ring-2 ring-purple-400/30 shrink-0">
                <Image
                  src="https://avatars.githubusercontent.com/u/43719341?v=4"
                  alt="Alexandre d'ALMEIDA"
                  width={80}
                  height={80}
                  className="object-cover w-full h-full"
                />
              </div>
              <div>
                <h1 className="text-base font-black leading-tight tracking-tight">
                  Alexandre<br />d&apos;ALMEIDA
                </h1>
                <p className="text-purple-300 text-[10px] font-bold mt-1 leading-snug">
                  Développeur Full-Stack<br />&amp; Fondateur OREBTECH
                </p>
              </div>
            </div>

            <Divider />

            {/* Contact */}
            <SideSection title="Contact">
              <div className="flex flex-col gap-1.5">
                {CONTACT.map(({ Icon, text }) => (
                  <div key={text} className="flex items-start gap-2">
                    <Icon size={10} className="text-purple-400 mt-0.5 shrink-0" />
                    <span className="text-[9px] text-zinc-300 leading-tight break-all">{text}</span>
                  </div>
                ))}
              </div>
            </SideSection>

            <Divider />

            {/* Compétences */}
            <SideSection title="Compétences">
              <div className="flex flex-col gap-2.5">
                {SKILLS.map(({ category, items }) => (
                  <div key={category}>
                    <span className="text-[8px] font-black uppercase text-purple-300 tracking-wider block mb-1">
                      {category}
                    </span>
                    <div className="flex flex-wrap gap-1">
                      {items.map((item) => (
                        <span
                          key={item}
                          className="text-[8px] px-1.5 py-0.5 rounded border border-purple-700/50 text-zinc-200"
                          style={{ backgroundColor: "rgba(88,28,135,0.3)" }}
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </SideSection>

            <Divider />

            {/* Langues */}
            <SideSection title="Langues">
              <div className="flex flex-col gap-1">
                {LANGUAGES.map(({ lang, level }) => (
                  <div key={lang} className="flex items-center justify-between">
                    <span className="text-[10px] font-bold text-zinc-200">{lang}</span>
                    <span className="text-[9px] text-purple-300">{level}</span>
                  </div>
                ))}
              </div>
            </SideSection>

            <Divider />

            {/* Intérêts */}
            <SideSection title="Intérêts">
              <div className="flex flex-col gap-1">
                {INTERESTS.map((item) => (
                  <span key={item} className="text-[9px] text-zinc-300 leading-snug">{item}</span>
                ))}
              </div>
            </SideSection>
          </div>

          {/* ── MAIN CONTENT ── */}
          <div className="flex-1 p-7 flex flex-col gap-5">

            {/* Profil */}
            <MainSection title="Profil">
              <p className="text-zinc-600 text-[11px] leading-relaxed">
                Développeur Full-Stack avec <strong>7 ans d&apos;expérience</strong> en conception de SaaS performants. Expert{" "}
                <strong>Next.js</strong>, <strong>ASP.NET Core</strong> et intégration d&apos;<strong>IA générative</strong>.
                Fondateur d&apos;<strong>OREBTECH</strong>, un studio de développement de produits digitaux à fort ROI.
                Basé au Bénin, disponible en remote pour des clients internationaux.
              </p>
            </MainSection>

            {/* Expériences */}
            <MainSection title="Expériences Professionnelles">
              <div className="flex flex-col gap-3.5">
                {EXPERIENCES.map(({ company, role, period, bullets }) => (
                  <div key={company}>
                    <div className="flex items-start justify-between gap-2 mb-1">
                      <div>
                        <span className="text-[11px] font-black text-zinc-900">{company}</span>
                        <span className="text-[10px] text-purple-700 font-bold"> — {role}</span>
                      </div>
                      <span className="text-[9px] font-bold text-zinc-400 whitespace-nowrap shrink-0">{period}</span>
                    </div>
                    <ul className="flex flex-col gap-0.5">
                      {bullets.map((b) => (
                        <li key={b} className="text-[10px] text-zinc-600 flex items-start gap-1.5">
                          <span className="text-purple-500 mt-0.5 shrink-0">▪</span>
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}

                {/* Expériences condensées */}
                <div className="flex flex-col gap-1 pt-1 border-t border-zinc-100">
                  {OLDER_EXP.map(({ company, role, period }) => (
                    <div key={company} className="flex items-center justify-between gap-2">
                      <span className="text-[10px]">
                        <span className="font-black text-zinc-700">{company}</span>
                        <span className="text-zinc-500 font-medium"> — {role}</span>
                      </span>
                      <span className="text-[9px] text-zinc-400 whitespace-nowrap shrink-0">{period}</span>
                    </div>
                  ))}
                </div>
              </div>
            </MainSection>

            {/* Projets */}
            <MainSection title="Projets Phares">
              <div className="grid grid-cols-2 gap-2">
                {PROJECTS.map(({ name, desc, stack, url }) => (
                  <div key={name} className="p-2.5 rounded-lg border border-zinc-100 bg-zinc-50">
                    <div className="flex items-center justify-between gap-1">
                      <span className="text-[10px] font-black text-zinc-900">{name}</span>
                      {url && <span className="text-[8px] text-purple-600 font-medium">{url}</span>}
                    </div>
                    <p className="text-[9px] text-zinc-500 mt-0.5">{desc}</p>
                    <p className="text-[9px] text-purple-600 font-semibold mt-1">{stack}</p>
                  </div>
                ))}
              </div>
            </MainSection>

            {/* Formation */}
            <MainSection title="Formation">
              <div className="flex flex-col gap-1.5">
                {EDUCATION.map(({ school, degree }) => (
                  <div key={school} className="flex items-start gap-3">
                    <span className="text-[10px] font-black text-purple-700 w-12 shrink-0">{school}</span>
                    <span className="text-[10px] text-zinc-600">{degree}</span>
                  </div>
                ))}
              </div>
            </MainSection>

          </div>
        </div>
      </div>
    </>
  );
}

function Divider() {
  return <div className="border-t border-purple-700/30 w-full" />;
}

function SideSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-2">
      <h2 className="text-[9px] font-black uppercase tracking-[0.3em] text-purple-400">{title}</h2>
      {children}
    </div>
  );
}

function MainSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="flex flex-col gap-2">
      <h2 className="text-[10px] font-black uppercase tracking-[0.3em] text-purple-700 border-b-2 border-purple-700 pb-1">
        {title}
      </h2>
      {children}
    </section>
  );
}
