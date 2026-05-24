"use client";

import Link from "next/link";
import {
  BadgeCheck,
  BriefcaseBusiness,
  Camera,
  Gem,
  Hand,
  Ruler,
  ShieldCheck,
  Sparkles,
  TriangleAlert
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { trainingCategories } from "@/data/trainingCategories";
import type { CategoryIconName, TrainingCategory } from "@/data/trainingCategories";
import { useLessonProgress } from "@/components/useLessonProgress";

const iconByName: Record<CategoryIconName, LucideIcon> = {
  briefcase: BriefcaseBusiness,
  shield: ShieldCheck,
  hand: Hand,
  badge: BadgeCheck,
  sparkles: Sparkles,
  ruler: Ruler,
  gem: Gem,
  warning: TriangleAlert,
  camera: Camera
};

function getStatus(progress: number) {
  if (progress >= 100) {
    return "Maîtrisé";
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
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
      {trainingCategories.map((category) => {
        const Icon = iconByName[category.iconName];
        const { completedCount, progress, status } = getProgress(category, completedLessons);
        const displayLevel = category.level === "Débutant premium" ? "Premium" : category.level;

        return (
          <article key={category.slug} className="rounded-lg border border-rose-100 bg-white p-4 shadow-tight">
            <div className="flex items-start gap-3">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-petal text-rosewood">
                <Icon size={21} aria-hidden="true" />
              </span>
              <div className="min-w-0">
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="text-base font-black leading-tight text-ink">{category.title}</h3>
                  <span className="rounded-full bg-petal px-2.5 py-1 text-[11px] font-black uppercase tracking-[0.1em] text-rosewood">
                    {status}
                  </span>
                </div>
                <p className="mt-2 text-sm leading-6 text-muted">{category.description}</p>
              </div>
            </div>

            <div className="mt-4 grid grid-cols-3 gap-2 text-center">
              <MetaChip label="Leçons" value={`${category.lessonIds.length}`} />
              <MetaChip label="Durée" value={category.estimatedDuration} />
              <MetaChip label="Niveau" value={displayLevel} />
            </div>

            <div className="mt-4">
              <div className="flex items-center justify-between gap-3 text-xs font-bold text-muted">
                <span>
                  {completedCount}/{category.lessonIds.length} leçon{completedCount > 1 ? "s" : ""} validée{completedCount > 1 ? "s" : ""}
                </span>
                <span className="text-ink">{progress}%</span>
              </div>
              <div className="mt-2 h-2 overflow-hidden rounded-full bg-petal">
                <div className="h-full rounded-full bg-rosewood transition-all" style={{ width: `${progress}%` }} />
              </div>
            </div>

            <Link
              href={`/formation/${category.slug}`}
              className="focus-ring mt-4 inline-flex min-h-11 w-full items-center justify-center rounded-full bg-ink px-4 py-2 text-sm font-bold text-white shadow-tight transition hover:bg-rosewood"
            >
              Commencer
            </Link>
          </article>
        );
      })}
    </div>
  );
}

function MetaChip({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-lg bg-petal px-2 py-3">
      <p className="text-[11px] font-black uppercase tracking-[0.1em] text-muted">{label}</p>
      <p className="mt-1 truncate text-sm font-black text-ink">{value}</p>
    </div>
  );
}
