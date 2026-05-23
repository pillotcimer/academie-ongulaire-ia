import Link from "next/link";
import { ArrowRight, Clock3 } from "lucide-react";
import type { Lesson } from "@/data/content";

type LessonCardProps = {
  lesson: Lesson;
};

export function LessonCard({ lesson }: LessonCardProps) {
  const statusClass =
    lesson.status === "En cours"
      ? "bg-champagne text-ink"
      : lesson.status === "À débloquer"
        ? "bg-slate-100 text-muted"
        : "bg-petal text-rosewood";

  return (
    <article className="rounded-lg border border-rose-100 bg-white p-5 shadow-tight">
      <div className="flex items-start justify-between gap-4">
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-ink text-sm font-bold text-white">
          {lesson.id}
        </span>
        <span className={`rounded-full px-3 py-1 text-xs font-bold ${statusClass}`}>{lesson.status}</span>
      </div>
      <h3 className="mt-4 text-lg font-bold text-ink">{lesson.title}</h3>
      <p className="mt-2 min-h-12 text-sm leading-6 text-muted">{lesson.summary}</p>
      <div className="mt-4 flex items-center justify-between gap-3 border-t border-rose-50 pt-4 text-sm">
        <span className="inline-flex items-center gap-2 font-semibold text-muted">
          <Clock3 size={16} aria-hidden="true" />
          {lesson.duration}
        </span>
        <Link href="/coach-ia" className="focus-ring inline-flex items-center gap-1 rounded-lg font-bold text-rosewood">
          Exercice
          <ArrowRight size={16} aria-hidden="true" />
        </Link>
      </div>
    </article>
  );
}
