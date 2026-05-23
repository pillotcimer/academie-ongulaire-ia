"use client";

import { useEffect, useMemo, useState } from "react";
import { CheckCircle2, Circle } from "lucide-react";

type InteractiveChecklistProps = {
  lessonId: string;
  items: string[];
};

function readChecklist(storageKey: string) {
  if (typeof window === "undefined") {
    return [];
  }

  try {
    const raw = window.localStorage?.getItem(storageKey);
    const parsed = raw ? JSON.parse(raw) : [];
    return Array.isArray(parsed) ? parsed.filter((item): item is number => Number.isInteger(item)) : [];
  } catch {
    return [];
  }
}

export function InteractiveChecklist({ lessonId, items }: InteractiveChecklistProps) {
  const storageKey = useMemo(() => `onglementor.lessonChecklist.${lessonId}`, [lessonId]);
  const [checkedIndexes, setCheckedIndexes] = useState<number[]>([]);

  useEffect(() => {
    setCheckedIndexes(readChecklist(storageKey));
  }, [storageKey]);

  function persist(next: number[]) {
    setCheckedIndexes(next);

    try {
      window.localStorage?.setItem(storageKey, JSON.stringify(next));
    } catch {
      // The checklist remains usable during the current session.
    }
  }

  function toggleItem(index: number) {
    const next = checkedIndexes.includes(index)
      ? checkedIndexes.filter((item) => item !== index)
      : [...checkedIndexes, index];

    persist(next);
  }

  const completedCount = checkedIndexes.filter((index) => index >= 0 && index < items.length).length;
  const progress = items.length > 0 ? Math.round((completedCount / items.length) * 100) : 0;

  return (
    <section className="rounded-lg border border-rose-100 bg-white p-4">
      <div className="flex items-center justify-between gap-3">
        <div>
          <p className="text-sm font-bold text-ink">Checklist</p>
          <p className="mt-1 text-xs font-semibold text-muted">
            {completedCount}/{items.length} points validés
          </p>
        </div>
        <span className="rounded-full bg-petal px-3 py-1 text-xs font-black text-rosewood">{progress}%</span>
      </div>

      <div className="mt-3 h-2 overflow-hidden rounded-full bg-petal">
        <div className="h-full rounded-full bg-sage transition-all" style={{ width: `${progress}%` }} />
      </div>

      <div className="mt-4 space-y-2">
        {items.map((item, index) => {
          const checked = checkedIndexes.includes(index);

          return (
            <button
              key={`${lessonId}-${item}`}
              type="button"
              aria-pressed={checked}
              onClick={() => toggleItem(index)}
              className={[
                "focus-ring flex min-h-12 w-full items-start gap-3 rounded-lg border px-3 py-3 text-left text-sm leading-6 transition",
                checked
                  ? "border-sage/40 bg-sage/10 text-ink"
                  : "border-rose-100 bg-petal/70 text-muted hover:border-rosewood/30 hover:bg-white"
              ].join(" ")}
            >
              {checked ? (
                <CheckCircle2 className="mt-1 shrink-0 text-sage" size={18} aria-hidden="true" />
              ) : (
                <Circle className="mt-1 shrink-0 text-rosewood" size={18} aria-hidden="true" />
              )}
              <span>{item}</span>
            </button>
          );
        })}
      </div>
    </section>
  );
}
