"use client";

import { useCallback, useEffect, useMemo, useState } from "react";

const STORAGE_KEY = "onglementor.completedLessons";

function readCompletedLessons() {
  if (typeof window === "undefined") {
    return [];
  }

  try {
    if (!window.localStorage) {
      return [];
    }

    const raw = window.localStorage.getItem(STORAGE_KEY);
    const parsed = raw ? JSON.parse(raw) : [];
    return Array.isArray(parsed) ? parsed.filter((item): item is string => typeof item === "string") : [];
  } catch {
    return [];
  }
}

export function useLessonProgress(totalLessonIds: string[]) {
  const [completedLessons, setCompletedLessons] = useState<string[]>([]);

  useEffect(() => {
    setCompletedLessons(readCompletedLessons());
  }, []);

  const persist = useCallback((next: string[]) => {
    setCompletedLessons(next);

    try {
      if (!window.localStorage) {
        return;
      }

      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      window.dispatchEvent(new CustomEvent("onglementor-progress-updated"));
    } catch {
      // Some embedded browsers can block localStorage; the current session still updates.
    }
  }, []);

  const toggleLesson = useCallback(
    (lessonId: string) => {
      const current = readCompletedLessons();
      const next = current.includes(lessonId)
        ? current.filter((item) => item !== lessonId)
        : [...current, lessonId];

      persist(next);
    },
    [persist]
  );

  const completeLesson = useCallback(
    (lessonId: string) => {
      const current = readCompletedLessons();

      if (current.includes(lessonId)) {
        persist(current);
        return;
      }

      persist([...current, lessonId]);
    },
    [persist]
  );

  useEffect(() => {
    function syncProgress() {
      setCompletedLessons(readCompletedLessons());
    }

    window.addEventListener("storage", syncProgress);
    window.addEventListener("onglementor-progress-updated", syncProgress);

    return () => {
      window.removeEventListener("storage", syncProgress);
      window.removeEventListener("onglementor-progress-updated", syncProgress);
    };
  }, []);

  const completedInScope = useMemo(
    () => completedLessons.filter((lessonId) => totalLessonIds.includes(lessonId)),
    [completedLessons, totalLessonIds]
  );

  const progress = totalLessonIds.length > 0 ? Math.round((completedInScope.length / totalLessonIds.length) * 100) : 0;

  return {
    completedLessons,
    completedCount: completedInScope.length,
    progress,
    isCompleted: (lessonId: string) => completedLessons.includes(lessonId),
    toggleLesson,
    completeLesson
  };
}
