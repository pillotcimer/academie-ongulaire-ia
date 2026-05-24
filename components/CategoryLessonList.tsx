"use client";

import Link from "next/link";
import { ArrowLeft, CheckCircle2, Clock3, LockKeyhole, PlayCircle, Video } from "lucide-react";
import { useLessonProgress } from "@/components/useLessonProgress";
import { getLessonMedia } from "@/data/mediaLibrary";
import type { CourseLesson } from "@/data/content";
import type { TrainingCategory } from "@/data/trainingCategories";

type CategoryLessonListProps = {
  category: TrainingCategory;
  lessons: CourseLesson[];
};

function getLessonState(isCompleted: boolean, index: number, completedCount: number) {
  if (isCompleted) {
    return "Terminé";
  }

  if (index === completedCount) {
    return "En cours";
  }

  return "Verrouillée";
}

export function CategoryLessonList({ category, lessons }: CategoryLessonListProps) {
  const { completedCount, progress, isCompleted } = useLessonProgress(category.lessonIds);
  const allDone = progress >= 100;

  return (
    <div>
      <section className="border-b border-rose-100 bg-white">
        <div className="mx-auto max-w-4xl px-4 py-5 sm:px-6 lg:px-8">
          <Link href="/formation" className="focus-ring inline-flex items-center gap-2 rounded-full text-sm font-bold text-rosewood">
            <ArrowLeft size={16} aria-hidden="true" />
            Retour
          </Link>

          <div className="mt-4 overflow-hidden rounded-lg border border-rose-100 bg-petal shadow-tight">
            <div className="grid gap-0 sm:grid-cols-[14rem_1fr]">
              <div className="relative aspect-video sm:aspect-auto">
                <img src={category.coverImageUrl} alt="" className="h-full w-full object-cover" />
                <span className="absolute left-3 top-3 rounded-full bg-white/92 px-3 py-1 text-xs font-black text-rosewood">{category.level}</span>
              </div>

              <div className="p-4">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h1 className="text-3xl font-black leading-tight text-ink">{category.title}</h1>
                    <p className="mt-2 max-w-2xl text-sm leading-6 text-muted">{category.objective}</p>
                  </div>
                  <span className="shrink-0 rounded-full bg-white px-3 py-1 text-sm font-black text-rosewood">{progress}%</span>
                </div>

                <div className="mt-4 h-2 overflow-hidden rounded-full bg-white">
                  <div className="h-full rounded-full bg-rosewood transition-all" style={{ width: `${progress}%` }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-5 sm:px-6 lg:px-8">
        <div className="mb-4 flex items-center justify-between gap-3">
          <div>
            <p className="text-sm font-black text-ink">Parcours du module</p>
            <p className="mt-1 text-xs font-bold text-muted">
              {completedCount}/{category.lessonIds.length} leçon{completedCount > 1 ? "s" : ""} validée{completedCount > 1 ? "s" : ""}
            </p>
          </div>
          {allDone ? <span className="rounded-full bg-sage/10 px-3 py-1 text-xs font-black text-sage">Module réussi</span> : null}
        </div>

        <div className="space-y-3">
          {lessons.map((lesson, index) => {
            const completed = isCompleted(lesson.id);
            const state = getLessonState(completed, index, completedCount);
            const locked = state === "Verrouillée";
            const media = getLessonMedia(lesson.id);

            return (
              <article
                key={lesson.id}
                className={[
                  "relative overflow-hidden rounded-lg border bg-white shadow-tight",
                  locked ? "border-rose-100 opacity-68" : "border-rose-100"
                ].join(" ")}
              >
                {index < lessons.length - 1 ? <span className="absolute left-9 top-[6.2rem] h-8 w-px bg-rose-100" aria-hidden="true" /> : null}

                <div className="grid gap-0 sm:grid-cols-[9rem_1fr]">
                  <div className="relative aspect-video bg-petal sm:aspect-auto">
                    <img src={media?.thumbnailUrl ?? category.coverImageUrl} alt="" className="h-full w-full object-cover" />
                    <span className="absolute left-3 top-3 inline-flex items-center gap-1 rounded-full bg-white/92 px-2.5 py-1 text-[11px] font-black text-rosewood">
                      <Video size={12} aria-hidden="true" />
                      Vidéo
                    </span>
                  </div>

                <div className="flex gap-3 p-4">
                  <span
                    className={[
                      "flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-sm font-black",
                      completed ? "bg-sage text-white" : locked ? "bg-petal text-muted" : "bg-ink text-white"
                    ].join(" ")}
                  >
                    {completed ? <CheckCircle2 size={19} aria-hidden="true" /> : locked ? <LockKeyhole size={17} aria-hidden="true" /> : index + 1}
                  </span>

                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <h2 className="text-base font-black leading-tight text-ink">{lesson.title}</h2>
                      <span className="rounded-full bg-petal px-2.5 py-1 text-[11px] font-black text-rosewood">{state}</span>
                      {completed ? <span className="rounded-full bg-sage/10 px-2.5 py-1 text-[11px] font-black text-sage">Leçon terminée</span> : null}
                    </div>
                    <p className="mt-1 flex items-center gap-2 text-xs font-bold text-muted">
                      <Clock3 size={13} aria-hidden="true" />
                      {lesson.duration}
                    </p>
                    <p className="mt-2 line-clamp-2 text-sm leading-6 text-muted">{lesson.objective}</p>

                    <div className="mt-3">
                      {locked ? (
                        <button
                          type="button"
                          disabled
                          className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-full bg-petal px-4 py-2 text-sm font-bold text-muted sm:w-auto"
                        >
                          <LockKeyhole size={16} aria-hidden="true" />
                          Termine la leçon précédente
                        </button>
                      ) : (
                        <Link
                          href={`/formation/${category.slug}/${lesson.id}`}
                          className="focus-ring inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-full bg-ink px-4 py-2 text-sm font-bold text-white transition hover:bg-rosewood sm:w-auto"
                        >
                          <PlayCircle size={17} aria-hidden="true" />
                          {completed ? "Revoir" : "Démarrer la leçon"}
                        </Link>
                      )}
                    </div>
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
