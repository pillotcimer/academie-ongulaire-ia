import { CalendarCheck, TrendingUp } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { badges } from "@/data/content";

const history = [
  { exercise: "Limage carré court", score: "82/100", date: "Aujourd'hui" },
  { exercise: "Construction gel simple", score: "79/100", date: "Hier" },
  { exercise: "Pose capsule", score: "74/100", date: "Cette semaine" }
];

const goals = ["2 leçons débutant", "1 photo de limage", "1 exercice de préparation", "Relire les erreurs fréquentes"];

export default function ProgressionPage() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="Progression"
        title="Suis ton niveau et tes objectifs"
        text="La progression rend l'apprentissage plus concret : badges, historique des analyses et objectifs de la semaine."
      />

      <div className="mt-8 grid gap-4 lg:grid-cols-[0.9fr_1.1fr]">
        <article className="rounded-lg border border-rose-100 bg-white p-5 shadow-soft">
          <div className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-petal text-rosewood">
              <TrendingUp size={22} aria-hidden="true" />
            </span>
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.14em] text-rosewood">Niveau actuel</p>
              <h2 className="text-2xl font-black text-ink">Débutant avancé</h2>
            </div>
          </div>
          <div className="mt-6 h-3 overflow-hidden rounded-full bg-petal">
            <div className="h-full w-[58%] rounded-full bg-rosewood" />
          </div>
          <p className="mt-3 text-sm leading-6 text-muted">Encore 4 leçons et 2 analyses photo avant le module intermédiaire.</p>
        </article>

        <div className="grid gap-4 sm:grid-cols-2">
          {badges.map((badge) => {
            const Icon = badge.icon;
            return (
              <article key={badge.title} className="rounded-lg border border-rose-100 bg-white p-5 shadow-tight">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-champagne text-ink">
                  <Icon size={20} aria-hidden="true" />
                </span>
                <h3 className="mt-4 font-bold text-ink">{badge.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted">{badge.text}</p>
              </article>
            );
          })}
        </div>
      </div>

      <div className="mt-8 grid gap-4 lg:grid-cols-2">
        <article className="rounded-lg border border-rose-100 bg-white p-5 shadow-tight">
          <h2 className="text-xl font-bold text-ink">Historique des analyses</h2>
          <div className="mt-4 space-y-3">
            {history.map((item) => (
              <div key={item.exercise} className="grid grid-cols-[1fr_auto] gap-3 rounded-lg bg-petal px-4 py-3">
                <div>
                  <p className="text-sm font-bold text-ink">{item.exercise}</p>
                  <p className="text-xs text-muted">{item.date}</p>
                </div>
                <p className="text-sm font-black text-rosewood">{item.score}</p>
              </div>
            ))}
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
