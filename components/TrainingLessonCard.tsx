"use client";

import Link from "next/link";
import { Camera, CheckCircle2, ClipboardCheck, Target } from "lucide-react";
import type { CourseLesson } from "@/data/content";
import { useLessonProgress } from "@/components/useLessonProgress";

type TrainingLessonCardProps = {
  lesson: CourseLesson;
  allLessonIds: string[];
};

export function TrainingLessonCard({ lesson, allLessonIds }: TrainingLessonCardProps) {
  const { isCompleted, toggleLesson } = useLessonProgress(allLessonIds);
  const completed = isCompleted(lesson.id);

  return (
    <article className="rounded-lg border border-rose-100 bg-white p-5 shadow-tight">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.14em] text-rosewood">{lesson.level}</p>
          <h3 className="mt-2 text-xl font-black text-ink">{lesson.title}</h3>
          <p className="mt-1 text-sm font-semibold text-muted">{lesson.duration}</p>
        </div>
        <span
          className={[
            "inline-flex w-fit items-center gap-2 rounded-full px-3 py-1 text-xs font-bold",
            completed ? "bg-sage/10 text-sage" : "bg-petal text-rosewood"
          ].join(" ")}
        >
          <CheckCircle2 size={14} aria-hidden="true" />
          {completed ? "Terminé" : "À faire"}
        </span>
      </div>

      <div className="mt-5 rounded-lg bg-petal p-4">
        <div className="flex items-start gap-3">
          <Target className="mt-1 shrink-0 text-rosewood" size={18} aria-hidden="true" />
          <div>
            <p className="text-sm font-bold text-ink">Objectif</p>
            <p className="mt-1 text-sm leading-6 text-muted">{lesson.objective}</p>
          </div>
        </div>
      </div>

      <div className="mt-5">
        <p className="text-sm font-bold text-ink">Explication</p>
        <p className="mt-2 text-sm leading-7 text-muted">{lesson.explanation}</p>
      </div>

      <div className="mt-5 grid gap-4 lg:grid-cols-2">
        <div>
          <p className="text-sm font-bold text-ink">Checklist</p>
          <ul className="mt-3 space-y-2">
            {lesson.checklist.map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm leading-6 text-muted">
                <CheckCircle2 className="mt-1 shrink-0 text-sage" size={15} aria-hidden="true" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-lg border border-rose-100 bg-white p-4">
          <div className="flex items-start gap-3">
            <ClipboardCheck className="mt-1 shrink-0 text-rosewood" size={18} aria-hidden="true" />
            <div>
              <p className="text-sm font-bold text-ink">Exercice pratique</p>
              <p className="mt-2 text-sm leading-6 text-muted">{lesson.exercise}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-5 flex flex-col gap-3 sm:flex-row">
        <button
          type="button"
          onClick={() => toggleLesson(lesson.id)}
          className={[
            "focus-ring inline-flex min-h-12 items-center justify-center rounded-full px-5 py-3 text-sm font-bold shadow-tight transition",
            completed ? "bg-sage text-white hover:bg-rosewood" : "bg-ink text-white hover:bg-rosewood"
          ].join(" ")}
        >
          {completed ? "Leçon terminée" : "J'ai terminé"}
        </button>
        <Link
          href="/coach-ia"
          className="focus-ring inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-petal px-5 py-3 text-sm font-bold text-rosewood transition hover:bg-blush"
        >
          <Camera size={17} aria-hidden="true" />
          Envoyer une photo au coach IA
        </Link>
      </div>
    </article>
  );
}
