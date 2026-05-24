"use client";

import Link from "next/link";
import { BadgeCheck, BriefcaseBusiness, Gem, Hand, Ruler, Sparkles, Trophy } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { trainingCategories } from "@/data/trainingCategories";
import type { CategoryIconName, TrainingCategory } from "@/data/trainingCategories";
import { useLessonProgress } from "@/components/useLessonProgress";

const iconByName: Record<CategoryIconName, LucideIcon> = {
  briefcase: BriefcaseBusiness,
  hand: Hand,
  badge: BadgeCheck,
  sparkles: Sparkles,
  ruler: Ruler,
  gem: Gem,
  trophy: Trophy
};

function getStatus(progress: number) {
  if (progress >= 100) {
    return "Terminé";
  }

  if (progress > 0) {
    return "En cours";
  }

  return "À faire";
}

function getProgress(category: TrainingCategory, completedLessons: string[]) {
  const completedCount = category.lessonIds.filter((lessonId) => completedLessons.includes(lessonId)).length;
  const progress = category.lessonIds.length > 0 ? Math.round((completedCount / category.lessonIds.length) * 100) : 0;

  return { completedCount, progress, status: getStatus(progress) };
}

export function TrainingCategoryDashboard() {
  const allLessonIds = trainingCategories.flatMap((category) => category.lessonIds);
  const { completedLessons } = useLessonProgress(allLessonIds);

  return (
    <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
      {trainingCategories.map((category) => {
        const Icon = iconByName[category.iconName];
        const { completedCount, progress, status } = getProgress(category, completedLessons);
        const displayLevel = category.level === "Débutant premium" ? "Premium" : category.level;

        return (
          <article key={category.slug} className="overflow-hidden rounded-lg border border-rose-100 bg-white shadow-tight transition hover:-translate-y-0.5 hover:shadow-soft">
            <div className="relative aspect-[16/8] bg-petal">
              <img src={category.coverImageUrl} alt="" className="h-full w-full object-cover" />
              <span className="absolute left-3 top-3 rounded-full bg-white/92 px-3 py-1 text-[11px] font-black text-rosewood">{status}</span>
            </div>

            <div className="p-3 sm:p-4">
              <div className="flex items-center gap-3">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-petal text-rosewood">
                <Icon size={22} aria-hidden="true" />
              </span>
              <div className="min-w-0 flex-1">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="text-lg font-black leading-tight text-ink">{category.title}</h3>
                  {progress >= 100 ? <span className="shrink-0 rounded-full bg-sage/10 px-2.5 py-1 text-[11px] font-black text-sage">Réussi</span> : null}
                </div>
                <p className="mt-1 text-sm leading-5 text-muted">{category.description}</p>
              </div>
            </div>

            <div className="mt-4 flex items-center justify-between gap-3 text-xs font-bold text-muted">
              <span>{category.lessonIds.length} leçon{category.lessonIds.length > 1 ? "s" : ""}</span>
              <span>{displayLevel}</span>
              <span>{category.estimatedDuration}</span>
            </div>

            <div className="mt-3">
              <div className="flex items-center justify-between text-xs font-bold text-muted">
                <span>
                  {completedCount}/{category.lessonIds.length} validée{completedCount > 1 ? "s" : ""}
                </span>
                <span className="text-ink">{progress}%</span>
              </div>
              <div className="mt-2 h-2 overflow-hidden rounded-full bg-petal">
                <div className="h-full rounded-full bg-rosewood transition-all" style={{ width: `${progress}%` }} />
              </div>
            </div>

            <Link
              href={`/formation/${category.slug}`}
              className="focus-ring mt-4 inline-flex min-h-12 w-full items-center justify-center rounded-full bg-ink px-4 py-3 text-sm font-bold text-white shadow-tight transition hover:bg-rosewood"
            >
              Commencer
            </Link>
            </div>
          </article>
        );
      })}
    </div>
  );
}
