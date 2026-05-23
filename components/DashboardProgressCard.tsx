"use client";

import { allTrainingLessons } from "@/data/content";
import { useLessonProgress } from "@/components/useLessonProgress";

export function DashboardProgressCard() {
  const lessonIds = allTrainingLessons.map((lesson) => lesson.id);
  const { completedCount, progress } = useLessonProgress(lessonIds);

  return (
    <article className="rounded-lg border border-rose-100 bg-white p-5 shadow-soft">
      <div className="flex items-center gap-4">
        <div
          className="grid h-24 w-24 shrink-0 place-items-center rounded-full"
          style={{
            background: `conic-gradient(#A94C67 ${progress * 3.6}deg, #F7DCE5 0deg)`
          }}
        >
          <div className="grid h-20 w-20 place-items-center rounded-full bg-white text-xl font-black text-ink shadow-tight">
            {progress}%
          </div>
        </div>
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.14em] text-rosewood">Progression réelle</p>
          <p className="mt-1 text-sm leading-6 text-muted">
            {completedCount} leçon{completedCount > 1 ? "s" : ""} validée{completedCount > 1 ? "s" : ""} dans ce navigateur.
          </p>
        </div>
      </div>
    </article>
  );
}
