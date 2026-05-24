"use client";

import { Award, CheckCircle2, Sparkles, Trophy } from "lucide-react";
import { trainingCategories } from "@/data/trainingCategories";
import { useLessonProgress } from "@/components/useLessonProgress";

export function TrainingProgressOverview() {
  const allLessonIds = trainingCategories.flatMap((category) => category.lessonIds);
  const { completedLessons, completedCount, progress } = useLessonProgress(allLessonIds);
  const completedCategories = trainingCategories.filter((category) =>
    category.lessonIds.every((lessonId) => completedLessons.includes(lessonId))
  ).length;
  const score = Math.min(100, Math.max(12, Math.round(progress * 0.92 + completedCategories * 2)));
  const activeBadges = [
    completedCount > 0 ? "Premier cours lancé" : null,
    completedCategories > 0 ? "Module validé" : null,
    progress >= 50 ? "Rythme régulier" : null,
    progress >= 100 ? "Formation terminée" : null
  ].filter((badge): badge is string => Boolean(badge));

  return (
    <section className="rounded-lg border border-rose-100 bg-ink p-4 text-white shadow-soft sm:p-5">
      <div className="grid gap-5 lg:grid-cols-[1fr_18rem] lg:items-center">
        <div>
          <p className="flex items-center gap-2 text-xs font-black uppercase tracking-[0.14em] text-blush">
            <Sparkles size={15} aria-hidden="true" />
            Formation débutante
          </p>
          <div className="mt-3 flex flex-wrap items-end gap-3">
            <h2 className="text-3xl font-black leading-none sm:text-4xl">{progress}% terminé</h2>
            <span className="rounded-full bg-white/10 px-3 py-1 text-sm font-bold text-white/76">Score {score}/100</span>
          </div>
          <div className="mt-4 h-3 overflow-hidden rounded-full bg-white/12">
            <div className="h-full rounded-full bg-blush transition-all" style={{ width: `${progress}%` }} />
          </div>
        </div>

        <div className="grid grid-cols-3 gap-2 text-center">
          <OverviewStat label="Leçons" value={`${completedCount}/${allLessonIds.length}`} />
          <OverviewStat label="Modules" value={`${completedCategories}/${trainingCategories.length}`} />
          <OverviewStat label="Score" value={`${score}`} />
        </div>
      </div>

      <div className="mt-5 grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
        {(activeBadges.length > 0 ? activeBadges : ["Début du parcours"]).map((badge) => (
          <div key={badge} className="flex min-h-12 items-center gap-2 rounded-lg bg-white/10 px-3 py-2 text-sm font-bold text-white/82">
            {badge === "Formation terminée" ? <Trophy size={17} aria-hidden="true" /> : <Award size={17} aria-hidden="true" />}
            <span>{badge}</span>
          </div>
        ))}
        {progress === 0 ? (
          <div className="flex min-h-12 items-center gap-2 rounded-lg bg-white/10 px-3 py-2 text-sm font-bold text-white/82">
            <CheckCircle2 size={17} aria-hidden="true" />
            <span>Objectif : valider Matériel</span>
          </div>
        ) : null}
      </div>
    </section>
  );
}

function OverviewStat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-lg bg-white/10 px-2 py-3">
      <p className="text-[11px] font-black uppercase tracking-[0.12em] text-white/58">{label}</p>
      <p className="mt-1 text-lg font-black text-white">{value}</p>
    </div>
  );
}
