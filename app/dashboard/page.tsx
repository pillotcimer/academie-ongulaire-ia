import { ArrowRight, Camera, PlayCircle } from "lucide-react";
import Link from "next/link";
import { ActionLink } from "@/components/ActionLink";
import { ProgressRing } from "@/components/ProgressRing";
import { SectionHeading } from "@/components/SectionHeading";
import { StatCard } from "@/components/StatCard";
import { dashboardStats, recentExercises } from "@/data/content";

export default function DashboardPage() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
        <SectionHeading
          eyebrow="Tableau de bord"
          title="Bonjour, prête pour la prochaine étape ?"
          text="Ton espace élève regroupe la progression, les derniers exercices et les accès rapides."
        />
        <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
          <ActionLink href="/modules/debutant" icon={PlayCircle}>
            Continuer
          </ActionLink>
          <ActionLink href="/coach-ia" icon={Camera} variant="secondary">
            Envoyer une photo
          </ActionLink>
        </div>
      </div>

      <div className="mt-8 grid gap-4 lg:grid-cols-[1fr_1.3fr]">
        <article className="rounded-lg border border-rose-100 bg-white p-5 shadow-soft">
          <ProgressRing value={42} label="Progression globale" />
        </article>
        <div className="grid gap-4 sm:grid-cols-3">
          {dashboardStats.map((stat) => (
            <StatCard key={stat.label} label={stat.label} value={stat.value} detail={stat.detail} />
          ))}
        </div>
      </div>

      <div className="mt-8 grid gap-4 lg:grid-cols-2">
        <article className="rounded-lg border border-rose-100 bg-white p-5 shadow-tight">
          <h2 className="text-xl font-bold text-ink">Derniers exercices</h2>
          <div className="mt-4 space-y-3">
            {recentExercises.map((exercise) => (
              <div key={exercise} className="flex items-center justify-between gap-4 rounded-lg bg-petal px-4 py-3">
                <span className="text-sm font-semibold text-ink">{exercise}</span>
                <ArrowRight className="shrink-0 text-rosewood" size={17} aria-hidden="true" />
              </div>
            ))}
          </div>
        </article>
        <article className="rounded-lg border border-rose-100 bg-ink p-5 text-white shadow-soft">
          <h2 className="text-xl font-bold">Prochaine action</h2>
          <p className="mt-3 text-sm leading-7 text-white/72">
            Termine la leçon "Préparation de l'ongle naturel", puis envoie une photo avec une lumière de côté.
          </p>
          <Link href="/coach-ia" className="focus-ring mt-5 inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-bold text-ink transition hover:bg-blush">
            Ouvrir le coach IA
            <Camera size={17} aria-hidden="true" />
          </Link>
        </article>
      </div>
    </section>
  );
}
