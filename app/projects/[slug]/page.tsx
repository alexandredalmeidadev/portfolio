import { notFound } from "next/navigation";
import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, CheckCircle2, Globe, Layers } from "lucide-react";
import { PROJECTS, getProjectBySlug } from "@/lib/projects";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return PROJECTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};
  return {
    title: `${project.title} — Projet de Alexandre d'ALMEIDA`,
    description: project.description,
    openGraph: {
      title: `${project.title} • Alexandre d'ALMEIDA`,
      description: project.description,
      type: "website",
    },
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  return (
    <main className="min-h-screen bg-white">

      {/* Nav */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-zinc-100">
        <div className="max-w-5xl mx-auto px-4 md:px-8 py-4 flex items-center justify-between">
          <Link
            href="/#projects"
            className="flex items-center gap-2 text-sm font-bold text-zinc-500 hover:text-zinc-900 transition-colors group"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            Retour au portfolio
          </Link>
          <Link
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-900 text-white text-xs font-black uppercase tracking-widest hover:scale-105 transition-all"
          >
            Voir le projet
            <ArrowUpRight size={14} />
          </Link>
        </div>
      </div>

      {/* Hero */}
      <section className="pt-32 pb-20 px-4 md:px-8">
        <div className="max-w-5xl mx-auto flex flex-col gap-8">

          <div className="flex items-center gap-3">
            <span className={`text-xs font-black uppercase tracking-[0.3em] px-3 py-1.5 rounded-full bg-zinc-100 text-zinc-600`}>
              {project.category}
            </span>
            <span className="text-xs font-semibold text-zinc-400">{project.year}</span>
          </div>

          <h1 className={`text-6xl md:text-8xl font-black font-caption tracking-tighter leading-[0.9] bg-gradient-to-r ${project.color} bg-clip-text text-transparent`}>
            {project.title}
          </h1>

          <p className="text-xl md:text-2xl text-zinc-600 max-w-3xl leading-relaxed font-medium">
            {project.longDescription[0]}
          </p>

          {/* Stack badges */}
          <div className="flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1.5 rounded-full border border-zinc-200 bg-zinc-50 text-zinc-700 text-sm font-bold"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-4 pt-2">
            <Link
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r ${project.color} text-white font-black text-base hover:scale-105 transition-all shadow-xl`}
            >
              <Globe size={18} />
              Voir le projet en ligne
              <ArrowUpRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className={`h-1 w-full bg-gradient-to-r ${project.color} opacity-20`} />

      {/* Description complète */}
      {project.longDescription.length > 1 && (
        <section className="py-24 px-4 md:px-8 bg-zinc-50">
          <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-4 flex flex-col gap-4">
              <div className={`flex items-center gap-2 ${project.accentColor}`}>
                <Layers size={20} />
                <span className="font-black text-xs tracking-[0.3em] uppercase">À propos</span>
              </div>
              <h2 className="text-4xl font-black font-caption tracking-tighter">
                Le projet en détail
              </h2>
            </div>
            <div className="lg:col-span-8 flex flex-col gap-6">
              {project.longDescription.slice(1).map((paragraph, i) => (
                <p key={i} className="text-zinc-600 text-lg leading-relaxed font-medium">
                  {paragraph}
                </p>
              ))}
              {project.contribution && (
                <div className={`p-6 rounded-2xl border-l-4 bg-white border-current ${project.accentColor}`}>
                  <p className="text-sm font-black uppercase tracking-widest mb-2 opacity-60">Ma contribution</p>
                  <p className="text-zinc-700 font-semibold leading-relaxed">{project.contribution}</p>
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* Features */}
      <section className="py-24 px-4 md:px-8">
        <div className="max-w-5xl mx-auto flex flex-col gap-16">
          <div className="flex flex-col gap-4">
            <div className={`flex items-center gap-2 ${project.accentColor}`}>
              <CheckCircle2 size={20} />
              <span className="font-black text-xs tracking-[0.3em] uppercase">Fonctionnalités</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black font-caption tracking-tighter">
              Ce que fait {project.title}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {project.features.map((feature, i) => (
              <div
                key={i}
                className="flex items-start gap-4 p-6 rounded-2xl bg-zinc-50 border border-zinc-100 hover:bg-white hover:shadow-lg transition-all duration-300"
              >
                <div className={`w-8 h-8 rounded-full bg-gradient-to-br ${project.color} flex items-center justify-center shrink-0 mt-0.5`}>
                  <CheckCircle2 size={16} className="text-white" />
                </div>
                <p className="text-zinc-700 font-semibold leading-relaxed">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stack */}
      <section className="py-24 px-4 md:px-8 bg-zinc-950">
        <div className="max-w-5xl mx-auto flex flex-col gap-12">
          <div className="flex flex-col gap-4">
            <span className="font-black text-xs tracking-[0.3em] uppercase text-zinc-500">Stack technique</span>
            <h2 className="text-4xl md:text-6xl font-black font-caption tracking-tighter text-white">
              Technologies utilisées
            </h2>
          </div>
          <div className="flex flex-wrap gap-4">
            {project.stack.map((tech) => (
              <div
                key={tech}
                className="px-6 py-3 rounded-2xl border border-white/10 bg-white/5 text-white font-bold text-base hover:bg-white/10 transition-colors"
              >
                {tech}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 px-4 md:px-8">
        <div className="max-w-5xl mx-auto flex flex-col items-center text-center gap-8">
          <h2 className="text-5xl md:text-7xl font-black font-caption tracking-tighter leading-tight">
            Vous avez un projet<br />
            <span className={`bg-gradient-to-r ${project.color} bg-clip-text text-transparent`}>
              similaire ?
            </span>
          </h2>
          <p className="text-xl text-zinc-500 font-medium max-w-2xl">
            Je construis des solutions sur-mesure adaptées à vos besoins métier. Discutons de votre projet.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <Link
              href="/#contact"
              className="px-10 py-5 rounded-full bg-zinc-900 text-white font-black text-lg hover:scale-105 transition-all shadow-2xl flex items-center gap-3"
            >
              Lancer un projet
              <ArrowUpRight size={20} />
            </Link>
            <Link
              href="/#projects"
              className="px-10 py-5 rounded-full border-2 border-zinc-200 text-zinc-700 font-bold text-lg hover:bg-zinc-50 transition-all"
            >
              Voir d&apos;autres projets
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}
