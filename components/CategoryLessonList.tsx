"use client";

import Link from "next/link";
import { ArrowLeft, CheckCircle2, Clock3, LockKeyhole, PlayCircle } from "lucide-react";
import { useLessonProgress } from "@/components/useLessonProgress";
import { getLessonMedia } from "@/data/mediaLibrary";
import type { CourseLesson } from "@/data/content";
import type { TrainingCategory } from "@/data/trainingCategories";

type CategoryLessonListProps = {
  category: TrainingCategory;
  lessons: CourseLesson[];
};

function getStatus(isCompleted: boolean, index: number, completedCount: number) {
  if (isCompleted) {
    return "Maîtrisé";
  }

  if (index === completedCount) {
    return "En cours";
  }

  return "À faire";
}

export function CategoryLessonList({ category, lessons }: CategoryLessonListProps) {
  const { completedCount, progress, isCompleted } = useLessonProgress(category.lessonIds);

  return (
    <div>
      <section className="border-b border-rose-100 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
          <Link href="/formation" className="focus-ring inline-flex items-center gap-2 rounded-full text-sm font-bold text-rosewood">
            <ArrowLeft size={16} aria-hidden="true" />
            Retour aux catégories
          </Link>

          <div className="mt-6 grid gap-5 lg:grid-cols-[1fr_18rem] lg:items-end">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.16em] text-rosewood">{category.level}</p>
              <h1 className="mt-3 text-3xl font-black leading-tight text-ink sm:text-4xl">{category.title}</h1>
              <p className="mt-3 max-w-2xl text-base leading-7 text-muted">{category.objective}</p>
            </div>

            <div className="rounded-lg border border-rose-100 bg-petal p-4">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="text-sm font-black text-ink">Progression</p>
                  <p className="mt-1 text-xs font-bold text-muted">
                    {completedCount}/{category.lessonIds.length} leçon{completedCount > 1 ? "s" : ""} terminée{completedCount > 1 ? "s" : ""}
                  </p>
                </div>
                <span className="rounded-full bg-white px-3 py-1 text-sm font-black text-rosewood">{progress}%</span>
              </div>
              <div className="mt-3 h-2 overflow-hidden rounded-full bg-white">
                <div className="h-full rounded-full bg-rosewood transition-all" style={{ width: `${progress}%` }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid gap-4 lg:grid-cols-2">
          {lessons.map((lesson, index) => {
            const completed = isCompleted(lesson.id);
            const media = getLessonMedia(lesson.id);
            const status = getStatus(completed, index, completedCount);

            return (
              <article key={lesson.id} className="overflow-hidden rounded-lg border border-rose-100 bg-white shadow-tight">
                <div className="grid sm:grid-cols-[10rem_1fr]">
                  <div className="relative aspect-video bg-petal sm:aspect-auto">
                    <img src={media?.thumbnailUrl ?? "/images/lesson-thumbnails/preparation.svg"} alt="" className="h-full w-full object-cover" />
                    <span className="absolute left-3 top-3 rounded-full bg-white/92 px-3 py-1 text-xs font-black text-rosewood">{status}</span>
                  </div>

                  <div className="p-4">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <p className="flex items-center gap-2 text-xs font-black uppercase tracking-[0.12em] text-muted">
                          <Clock3 size={14} aria-hidden="true" />
                          {lesson.duration}
                        </p>
                        <h2 className="mt-2 text-lg font-black leading-tight text-ink">{lesson.title}</h2>
                      </div>
                      {completed ? <CheckCircle2 className="shrink-0 text-sage" size={22} aria-hidden="true" /> : null}
                    </div>

                    <p className="mt-2 line-clamp-3 text-sm leading-6 text-muted">{lesson.objective}</p>

                    <div className="mt-4 flex flex-col gap-2 sm:flex-row sm:items-center">
                      <Link
                        href={`/formation/${category.slug}/${lesson.id}`}
                        className="focus-ring inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-ink px-4 py-2 text-sm font-bold text-white transition hover:bg-rosewood"
                      >
                        <PlayCircle size={17} aria-hidden="true" />
                        Démarrer la leçon
                      </Link>
                      {lesson.level === "Débutant premium" ? (
                        <span className="inline-flex min-h-9 items-center justify-center gap-2 rounded-full bg-petal px-3 py-2 text-xs font-bold text-rosewood">
                          <LockKeyhole size={14} aria-hidden="true" />
                          Mode test
                        </span>
                      ) : null}
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </div>
  );
}
