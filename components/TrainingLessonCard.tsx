"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowRight, BadgeCheck, CheckCircle2, ClipboardCheck, Target, TriangleAlert } from "lucide-react";
import type { CourseLesson } from "@/data/content";
import { InteractiveChecklist } from "@/components/InteractiveChecklist";
import { LessonCoachBlock } from "@/components/LessonCoachBlock";
import { VideoLessonBlock } from "@/components/VideoLessonBlock";
import { useLessonProgress } from "@/components/useLessonProgress";

type TrainingLessonCardProps = {
  lesson: CourseLesson;
  allLessonIds: string[];
  nextLessonId?: string;
};

export function TrainingLessonCard({ lesson, allLessonIds, nextLessonId }: TrainingLessonCardProps) {
  const { isCompleted, completeLesson } = useLessonProgress(allLessonIds);
  const completed = isCompleted(lesson.id);

  return (
    <article id={`lesson-${lesson.id}`} className="scroll-mt-6 rounded-lg border border-rose-100 bg-white p-4 shadow-tight sm:p-5">
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

      <div className="mt-5">
        <VideoLessonBlock title={lesson.videoTitle} duration={lesson.videoDuration} videoUrl={lesson.videoUrl} />
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

      <div className="mt-5 grid gap-3 md:grid-cols-3">
        <LessonFact
          title="Exemple correct"
          text={lesson.correctExample}
          icon={<BadgeCheck size={17} aria-hidden="true" />}
          tone="success"
        />
        <LessonFact
          title="Erreur fréquente"
          text={lesson.commonError}
          icon={<TriangleAlert size={17} aria-hidden="true" />}
          tone="warning"
        />
        <LessonFact
          title="Résultat attendu"
          text={lesson.expectedResult}
          icon={<CheckCircle2 size={17} aria-hidden="true" />}
          tone="neutral"
        />
      </div>

      <div className="mt-5">
        <InteractiveChecklist lessonId={lesson.id} items={lesson.checklist} />
      </div>

      <section className="mt-5 rounded-lg border border-rose-100 bg-white p-4">
        <div className="flex items-start gap-3">
          <ClipboardCheck className="mt-1 shrink-0 text-rosewood" size={18} aria-hidden="true" />
          <div>
            <p className="text-sm font-bold text-ink">Exercice pratique</p>
            <p className="mt-2 text-sm leading-6 text-muted">{lesson.exercise}</p>
          </div>
        </div>

        <div className="mt-4 grid gap-4 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="rounded-lg bg-petal p-4">
            <p className="text-sm font-bold text-ink">Objectif de l'exercice</p>
            <p className="mt-2 text-sm leading-6 text-muted">{lesson.practice.objective}</p>
            <p className="mt-4 text-sm font-bold text-ink">Résultat attendu</p>
            <p className="mt-2 text-sm leading-6 text-muted">{lesson.practice.expectedResult}</p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            <div>
              <p className="text-sm font-bold text-ink">Consignes</p>
              <ul className="mt-2 space-y-2">
                {lesson.practice.instructions.map((instruction) => (
                  <li key={instruction} className="flex items-start gap-2 text-sm leading-6 text-muted">
                    <CheckCircle2 className="mt-1 shrink-0 text-sage" size={15} aria-hidden="true" />
                    <span>{instruction}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-sm font-bold text-ink">Erreurs à éviter</p>
              <ul className="mt-2 space-y-2">
                {lesson.practice.mistakesToAvoid.map((mistake) => (
                  <li key={mistake} className="flex items-start gap-2 text-sm leading-6 text-muted">
                    <TriangleAlert className="mt-1 shrink-0 text-rosewood" size={15} aria-hidden="true" />
                    <span>{mistake}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <div className="mt-5">
        <LessonCoachBlock lessonId={lesson.id} exercise={lesson.coachExercise} />
      </div>

      <div className="mt-5 flex flex-col gap-3 sm:flex-row">
        <button
          type="button"
          onClick={() => completeLesson(lesson.id)}
          className={[
            "focus-ring inline-flex min-h-12 flex-1 items-center justify-center rounded-full px-5 py-3 text-sm font-bold shadow-tight transition",
            completed ? "bg-sage text-white" : "bg-ink text-white hover:bg-rosewood"
          ].join(" ")}
        >
          {completed ? "Étape validée" : "Valider cette étape"}
        </button>
        <Link
          href={nextLessonId ? `#lesson-${nextLessonId}` : "/progression"}
          className="focus-ring inline-flex min-h-12 flex-1 items-center justify-center gap-2 rounded-full bg-petal px-5 py-3 text-sm font-bold text-rosewood transition hover:bg-blush"
        >
          Passer à la leçon suivante
          <ArrowRight size={17} aria-hidden="true" />
        </Link>
      </div>
    </article>
  );
}

function LessonFact({
  title,
  text,
  icon,
  tone
}: {
  title: string;
  text: string;
  icon: ReactNode;
  tone: "success" | "warning" | "neutral";
}) {
  const color = tone === "success" ? "text-sage" : tone === "warning" ? "text-rosewood" : "text-ink";

  return (
    <section className="rounded-lg border border-rose-100 bg-white p-4">
      <div className={`flex items-center gap-2 text-sm font-black ${color}`}>
        {icon}
        {title}
      </div>
      <p className="mt-2 text-sm leading-6 text-muted">{text}</p>
    </section>
  );
}
