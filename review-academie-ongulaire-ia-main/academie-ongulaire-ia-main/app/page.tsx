import Link from "next/link";
import { ArrowRight, Camera, CheckCircle2, ChevronDown, GraduationCap, Sparkles } from "lucide-react";
import { ActionLink } from "@/components/ActionLink";
import { FeatureCard } from "@/components/FeatureCard";
import { SectionHeading } from "@/components/SectionHeading";
import { faqs, homeFeatures, testimonials, trainingPillars } from "@/data/content";

export default function HomePage() {
  return (
    <>
      <section className="mx-auto grid min-h-[calc(100svh-65px)] max-w-6xl items-center gap-8 px-4 py-8 sm:px-6 md:grid-cols-[1fr_0.9fr] md:py-12 lg:px-8">
        <div>
          <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-white px-3 py-2 text-xs font-bold text-rosewood shadow-tight ring-1 ring-rose-100">
            <Sparkles size={15} aria-hidden="true" />
            Formation ongulaire guidée
          </div>
          <h1 className="max-w-3xl text-4xl font-black leading-tight text-ink sm:text-5xl lg:text-6xl">
            Apprends la prothésie ongulaire chez toi avec ton coach IA personnel.
          </h1>
          <p className="mt-5 max-w-xl text-base leading-8 text-muted sm:text-lg">
            Une formation étape par étape avec analyse photo, exercices pratiques et corrections personnalisées.
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <ActionLink href="/formation" icon={GraduationCap}>
              Commencer la formation
            </ActionLink>
            <ActionLink href="/coach-ia" icon={Camera} variant="secondary">
              Tester le coach IA
            </ActionLink>
          </div>
        </div>

        <div className="relative">
          <img
            src="/studio-preview.png"
            alt="Poste de formation ongulaire avec aperçu mobile du coach IA"
            className="aspect-[4/3] w-full rounded-lg object-cover shadow-soft ring-1 ring-rose-100"
          />
          <div className="absolute -bottom-4 left-4 right-4 rounded-lg border border-rose-100 bg-white p-4 shadow-soft sm:left-auto sm:w-72">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-rosewood">Score IA</p>
                <p className="mt-1 text-2xl font-black text-ink">82/100</p>
              </div>
              <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-sage/10 text-sage">
                <CheckCircle2 size={22} aria-hidden="true" />
              </span>
            </div>
            <p className="mt-2 text-sm leading-6 text-muted">Bord libre plus net. Apex à renforcer au centre.</p>
          </div>
        </div>
      </section>

      <section className="border-y border-rose-100 bg-white px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-6xl gap-4 sm:grid-cols-3">
          {trainingPillars.map((pillar) => (
            <FeatureCard key={pillar.title} title={pillar.title} text={pillar.text} icon={pillar.icon} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Programme"
          title="Une première version complète, pensée pour apprendre sans se perdre"
          text="Le parcours rassemble les cours, la pratique, le matériel, les corrections photo et le suivi."
        />
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {homeFeatures.map((feature) => (
            <FeatureCard key={feature.title} title={feature.title} text={feature.text} icon={feature.icon} />
          ))}
        </div>
      </section>

      <section className="bg-ink px-4 py-14 text-white sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-[0.9fr_1.1fr] md:items-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-blush">Pourquoi ce format</p>
            <h2 className="mt-3 text-3xl font-black sm:text-4xl">Moins cher qu'une formation classique, plus guidé qu'une vidéo seule.</h2>
            <p className="mt-4 text-base leading-8 text-white/72">
              L'objectif est simple : apprendre dans le bon ordre, s'entraîner chez soi et recevoir des corrections compréhensibles avant de passer à l'étape suivante.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-3">
            {["Cours structurés", "Photos corrigées", "Objectifs semaine"].map((item) => (
              <div key={item} className="rounded-lg bg-white/8 p-4 ring-1 ring-white/10">
                <p className="text-sm font-bold">{item}</p>
                <p className="mt-2 text-sm leading-6 text-white/65">Pensé pour progresser sans payer 4000 € avant d'avoir testé.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Avis" title="Témoignages fictifs pour présenter l'expérience" />
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <article key={testimonial.name} className="rounded-lg border border-rose-100 bg-white p-5 shadow-tight">
              <p className="text-sm leading-7 text-muted">"{testimonial.text}"</p>
              <p className="mt-4 font-bold text-ink">{testimonial.name}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-rose-100 bg-white px-4 py-14 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <SectionHeading eyebrow="FAQ" title="Les questions importantes avant de commencer" align="center" />
          <div className="mt-8 space-y-3">
            {faqs.map((faq) => (
              <details key={faq.question} className="group rounded-lg border border-rose-100 bg-petal p-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-bold text-ink">
                  {faq.question}
                  <ChevronDown className="shrink-0 transition group-open:rotate-180" size={18} aria-hidden="true" />
                </summary>
                <p className="mt-3 text-sm leading-7 text-muted">{faq.answer}</p>
              </details>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link href="/tarifs" className="focus-ring inline-flex items-center gap-2 rounded-full bg-ink px-5 py-3 text-sm font-bold text-white shadow-tight transition hover:bg-rosewood">
              Voir les offres
              <ArrowRight size={17} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
