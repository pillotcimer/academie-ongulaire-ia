import { CalendarCheck } from "lucide-react";
import Link from "next/link";
import { Camera, GraduationCap } from "lucide-react";
import { ProgressDashboard } from "@/components/ProgressDashboard";
import { SectionHeading } from "@/components/SectionHeading";

const goals = ["2 leçons débutant", "1 photo de limage", "1 exercice de préparation", "Relire les erreurs fréquentes"];

export default function ProgressionPage() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="Progression"
        title="Suis ton niveau et tes objectifs"
        text="Les leçons validées sont sauvegardées dans ce navigateur. Tu peux fermer et revenir plus tard sans perdre ta progression locale."
      />

      <div className="mt-8">
        <ProgressDashboard />
      </div>

      <div className="mt-8 grid gap-4 lg:grid-cols-2">
        <article className="rounded-lg border border-rose-100 bg-ink p-5 text-white shadow-soft">
          <h2 className="text-xl font-bold">Continuer maintenant</h2>
          <p className="mt-3 text-sm leading-7 text-white/72">
            Le meilleur rythme : une leçon courte, un exercice pratique, puis une photo au coach IA.
          </p>
          <div className="mt-5 flex flex-col gap-3 sm:flex-row">
            <Link href="/formation" className="focus-ring inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-bold text-ink transition hover:bg-blush">
              <GraduationCap size={17} aria-hidden="true" />
              Reprendre la formation
            </Link>
            <Link href="/coach-ia" className="focus-ring inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-white/10 px-5 py-3 text-sm font-bold text-white ring-1 ring-white/20 transition hover:bg-white/15">
              <Camera size={17} aria-hidden="true" />
              Envoyer une photo
            </Link>
          </div>
        </article>

        <article className="rounded-lg border border-rose-100 bg-white p-5 shadow-tight">
          <div className="flex items-center gap-3">
            <CalendarCheck className="text-rosewood" size={22} aria-hidden="true" />
            <h2 className="text-xl font-bold text-ink">Objectifs de la semaine</h2>
          </div>
          <ul className="mt-4 space-y-3">
            {goals.map((goal) => (
              <li key={goal} className="rounded-lg border border-rose-50 bg-white px-4 py-3 text-sm font-semibold text-muted">
                {goal}
              </li>
            ))}
          </ul>
        </article>
      </div>
    </section>
  );
}
