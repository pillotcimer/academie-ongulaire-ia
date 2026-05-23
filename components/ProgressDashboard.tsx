"use client";

import { Award, CheckCircle2, Camera, GraduationCap, Target } from "lucide-react";
import { allTrainingLessons } from "@/data/content";
import { useLessonProgress } from "@/components/useLessonProgress";

const analysisHistory = [
  {
    exercise: "Préparation de l'ongle",
    score: "76/100",
    feedback: "Zones latérales à mieux matifier."
  },
  {
    exercise: "Pose capsule",
    score: "74/100",
    feedback: "Axe correct, bord libre à régulariser."
  },
  {
    exercise: "Limage",
    score: "82/100",
    feedback: "Volume propre, côté droit un peu plus épais."
  }
];

export function ProgressDashboard() {
  const allLessonIds = allTrainingLessons.map((lesson) => lesson.id);
  const { completedCount, progress } = useLessonProgress(allLessonIds);

  const badgeState = [
    {
      title: "Départ sérieux",
      text: "Termine une première leçon.",
      icon: GraduationCap,
      active: completedCount >= 1
    },
    {
      title: "Bases propres",
      text: "Termine les trois modules gratuits.",
      icon: CheckCircle2,
      active: completedCount >= 3
    },
    {
      title: "Débutante engagée",
      text: "Termine cinq leçons au total.",
      icon: Target,
      active: completedCount >= 5
    },
    {
      title: "Prête à pratiquer",
      text: "Termine toute la formation débutante.",
      icon: Award,
      active: progress === 100
    }
  ];

  return (
    <div className="space-y-6">
      <section className="rounded-lg border border-rose-100 bg-white p-5 shadow-soft">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.14em] text-rosewood">Progression sauvegardée</p>
            <h2 className="mt-2 text-3xl font-black text-ink">{progress}%</h2>
            <p className="mt-1 text-sm leading-6 text-muted">
              {completedCount} leçon{completedCount > 1 ? "s" : ""} terminée{completedCount > 1 ? "s" : ""} sur {allLessonIds.length}.
            </p>
          </div>
          <div className="h-4 w-full overflow-hidden rounded-full bg-petal sm:max-w-sm">
            <div className="h-full rounded-full bg-rosewood transition-all" style={{ width: `${progress}%` }} />
          </div>
        </div>
      </section>

      <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {badgeState.map((badge) => {
          const Icon = badge.icon;
          return (
            <article
              key={badge.title}
              className={[
                "rounded-lg border p-5 shadow-tight",
                badge.active ? "border-sage bg-sage/10" : "border-rose-100 bg-white"
              ].join(" ")}
            >
              <span
                className={[
                  "flex h-10 w-10 items-center justify-center rounded-lg",
                  badge.active ? "bg-sage text-white" : "bg-petal text-rosewood"
                ].join(" ")}
              >
                <Icon size={20} aria-hidden="true" />
              </span>
              <h3 className="mt-4 font-bold text-ink">{badge.title}</h3>
              <p className="mt-2 text-sm leading-6 text-muted">{badge.text}</p>
            </article>
          );
        })}
      </section>

      <section className="rounded-lg border border-rose-100 bg-white p-5 shadow-tight">
        <div className="flex items-center gap-3">
          <Camera className="text-rosewood" size={22} aria-hidden="true" />
          <h2 className="text-xl font-bold text-ink">Historique des analyses IA</h2>
        </div>
        <div className="mt-4 grid gap-3 md:grid-cols-3">
          {analysisHistory.map((item) => (
            <article key={item.exercise} className="rounded-lg bg-petal p-4">
              <p className="text-sm font-bold text-ink">{item.exercise}</p>
              <p className="mt-2 text-2xl font-black text-rosewood">{item.score}</p>
              <p className="mt-2 text-sm leading-6 text-muted">{item.feedback}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
