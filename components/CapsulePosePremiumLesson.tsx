"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import {
  ArrowRight,
  BadgeCheck,
  CheckCircle2,
  ClipboardCheck,
  Image as ImageIcon,
  PackageCheck,
  Sparkles,
  Target,
  TriangleAlert
} from "lucide-react";
import type { CourseLesson } from "@/data/content";
import { capsuleGallery, capsuleLessonMaterials, capsulePoseSteps } from "@/data/capsulePoseLesson";
import { getLessonMedia } from "@/data/mediaLibrary";
import { LessonCoachBlock } from "@/components/LessonCoachBlock";
import { VideoLessonBlock } from "@/components/VideoLessonBlock";
import { useLessonProgress } from "@/components/useLessonProgress";

type CapsulePosePremiumLessonProps = {
  lesson: CourseLesson;
  allLessonIds: string[];
  nextLessonId?: string;
};

const storageKey = "onglementor.capsulePose.understoodSteps";

function readUnderstoodSteps() {
  if (typeof window === "undefined") {
    return [];
  }

  try {
    const raw = window.localStorage?.getItem(storageKey);
    const parsed = raw ? JSON.parse(raw) : [];
    return Array.isArray(parsed) ? parsed.filter((item): item is string => typeof item === "string") : [];
  } catch {
    return [];
  }
}

export function CapsulePosePremiumLesson({ lesson, allLessonIds, nextLessonId }: CapsulePosePremiumLessonProps) {
  const { isCompleted, completeLesson } = useLessonProgress(allLessonIds);
  const [understoodSteps, setUnderstoodSteps] = useState<string[]>([]);
  const completed = isCompleted(lesson.id);
  const media = getLessonMedia(lesson.id);

  useEffect(() => {
    setUnderstoodSteps(readUnderstoodSteps());
  }, []);

  function markStepUnderstood(stepId: string) {
    const next = understoodSteps.includes(stepId) ? understoodSteps : [...understoodSteps, stepId];
    setUnderstoodSteps(next);

    try {
      window.localStorage?.setItem(storageKey, JSON.stringify(next));
    } catch {
      // The button still updates during the current session.
    }
  }

  const progress = useMemo(
    () => Math.round((understoodSteps.filter((stepId) => capsulePoseSteps.some((step) => step.id === stepId)).length / capsulePoseSteps.length) * 100),
    [understoodSteps]
  );

  return (
    <article id={`lesson-${lesson.id}`} className="scroll-mt-6 rounded-lg border border-rose-100 bg-white p-4 shadow-tight sm:p-5">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.14em] text-rosewood">{lesson.level}</p>
          <h3 className="mt-2 text-2xl font-black text-ink">{lesson.title}</h3>
          <p className="mt-1 text-sm font-semibold text-muted">Leçon premium complète - {lesson.duration}</p>
        </div>
        <span
          className={[
            "inline-flex w-fit items-center gap-2 rounded-full px-3 py-1 text-xs font-bold",
            completed ? "bg-sage/10 text-sage" : "bg-petal text-rosewood"
          ].join(" ")}
        >
          <CheckCircle2 size={14} aria-hidden="true" />
          {completed ? "Terminée" : "À suivre"}
        </span>
      </div>

      <section className="mt-5 rounded-lg bg-ink p-4 text-white sm:p-5">
        <div className="grid gap-5 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.14em] text-blush">Introduction</p>
            <h4 className="mt-2 text-xl font-black leading-tight">Poser une capsule droite, adaptée et sans bulle d'air</h4>
            <p className="mt-3 text-sm leading-7 text-white/76">
              Cette leçon te guide comme une vraie formatrice : tu apprends à choisir la bonne taille, contrôler les côtés,
              coller proprement, vérifier l'axe, couper, limer, puis envoyer une photo au coach IA pour correction.
            </p>
          </div>
          <div className="rounded-lg bg-white/10 p-4">
            <div className="flex items-center justify-between gap-3">
              <p className="text-sm font-bold">Progression des étapes</p>
              <span className="rounded-full bg-white px-3 py-1 text-xs font-black text-ink">{progress}%</span>
            </div>
            <div className="mt-3 h-2 overflow-hidden rounded-full bg-white/14">
              <div className="h-full rounded-full bg-blush transition-all" style={{ width: `${progress}%` }} />
            </div>
          </div>
        </div>
      </section>

      <section className="mt-5 rounded-lg border border-rose-100 bg-petal p-4">
        <div className="flex items-start gap-3">
          <PackageCheck className="mt-1 shrink-0 text-rosewood" size={20} aria-hidden="true" />
          <div>
            <p className="text-sm font-black text-ink">Matériel nécessaire</p>
            <p className="mt-1 text-sm leading-6 text-muted">Prépare tout avant la colle : une fois la colle posée, tu dois travailler calmement mais sans chercher ton matériel.</p>
          </div>
        </div>
        <div className="mt-4 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
          {capsuleLessonMaterials.map((material) => (
            <p key={material} className="flex items-start gap-2 rounded-lg bg-white px-3 py-2 text-sm leading-6 text-muted">
              <CheckCircle2 className="mt-1 shrink-0 text-sage" size={15} aria-hidden="true" />
              {material}
            </p>
          ))}
        </div>
      </section>

      <div className="mt-5">
        <VideoLessonBlock title="Démonstration : poser une capsule proprement" duration="18 min" videoUrl={lesson.videoUrl} media={media} />
      </div>

      <section className="mt-6">
        <div className="flex items-start gap-3">
          <Target className="mt-1 shrink-0 text-rosewood" size={20} aria-hidden="true" />
          <div>
            <p className="text-sm font-black uppercase tracking-[0.12em] text-rosewood">Parcours étape par étape</p>
            <h4 className="mt-1 text-xl font-black text-ink">Suis l'ordre, valide chaque point</h4>
          </div>
        </div>

        <div className="mt-4 space-y-4">
          {capsulePoseSteps.map((step, index) => (
            <StepCard
              key={step.id}
              step={step}
              index={index}
              understood={understoodSteps.includes(step.id)}
              onUnderstood={() => markStepUnderstood(step.id)}
            />
          ))}
        </div>
      </section>

      <section className="mt-6 rounded-lg border border-rose-100 bg-white p-4">
        <div className="flex items-start gap-3">
          <ImageIcon className="mt-1 shrink-0 text-rosewood" size={20} aria-hidden="true" />
          <div>
            <p className="text-sm font-black text-ink">Galerie de repères</p>
            <p className="mt-1 text-sm leading-6 text-muted">Compare ton résultat avec ces cas fréquents avant d'envoyer ta photo au coach IA.</p>
          </div>
        </div>

        <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {capsuleGallery.map((item, index) => (
            <article key={item.title} className="overflow-hidden rounded-lg border border-rose-100 bg-petal">
              <CapsulePlaceholder label={item.title} index={index} status={item.status} />
              <div className="p-3">
                <p className="text-sm font-black text-ink">{item.title}</p>
                <p className="mt-1 text-xs leading-5 text-muted">{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-6 rounded-lg border border-rose-100 bg-petal p-4">
        <div className="flex items-start gap-3">
          <ClipboardCheck className="mt-1 shrink-0 text-rosewood" size={20} aria-hidden="true" />
          <div>
            <p className="text-sm font-black text-ink">Exercice final</p>
            <p className="mt-2 text-sm leading-7 text-muted">
              Pose une capsule sur un doigt d'entraînement ou une main d'entraînement, puis envoie une photo. Fais simple :
              longueur courte, capsule bien centrée, pas de bulle visible, côtés contrôlés.
            </p>
          </div>
        </div>
      </section>

      <section className="mt-6">
        <div className="mb-3 flex items-center gap-2 text-sm font-black text-rosewood">
          <Sparkles size={17} aria-hidden="true" />
          Contexte automatique : pose de capsule
        </div>
        <LessonCoachBlock lessonId={`${lesson.id}-complete`} exercise="pose capsule" />
      </section>

      <div className="mt-5 flex flex-col gap-3 sm:flex-row">
        <button
          type="button"
          onClick={() => completeLesson(lesson.id)}
          className={[
            "focus-ring inline-flex min-h-12 flex-1 items-center justify-center rounded-full px-5 py-3 text-sm font-bold shadow-tight transition",
            completed ? "bg-sage text-white" : "bg-ink text-white hover:bg-rosewood"
          ].join(" ")}
        >
          {completed ? "Leçon validée" : "Valider cette leçon"}
        </button>
        <Link
          href={nextLessonId ? `#lesson-${nextLessonId}` : "/progression"}
          className="focus-ring inline-flex min-h-12 flex-1 items-center justify-center gap-2 rounded-full bg-petal px-5 py-3 text-center text-sm font-bold text-rosewood transition hover:bg-blush"
        >
          Passer à la leçon suivante : Application du gel
          <ArrowRight size={17} aria-hidden="true" />
        </Link>
      </div>
    </article>
  );
}

function StepCard({
  step,
  index,
  understood,
  onUnderstood
}: {
  step: (typeof capsulePoseSteps)[number];
  index: number;
  understood: boolean;
  onUnderstood: () => void;
}) {
  return (
    <section className="rounded-lg border border-rose-100 bg-white p-4">
      <div className="grid gap-4 lg:grid-cols-[0.72fr_1.28fr]">
        <CapsulePlaceholder label={step.imageLabel} index={index} status="good" />

        <div>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.12em] text-rosewood">Étape {index + 1}</p>
              <h5 className="mt-1 text-lg font-black text-ink">{step.title}</h5>
            </div>
            <span
              className={[
                "inline-flex w-fit items-center gap-2 rounded-full px-3 py-1 text-xs font-bold",
                understood ? "bg-sage/10 text-sage" : "bg-petal text-rosewood"
              ].join(" ")}
            >
              <CheckCircle2 size={14} aria-hidden="true" />
              {understood ? "Compris" : "À lire"}
            </span>
          </div>

          <p className="mt-3 text-sm leading-7 text-muted">{step.explanation}</p>

          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <div>
              <p className="text-sm font-bold text-ink">Checklist</p>
              <ul className="mt-2 space-y-2">
                {step.checklist.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm leading-6 text-muted">
                    <CheckCircle2 className="mt-1 shrink-0 text-sage" size={15} aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-3">
              <div className="rounded-lg bg-petal p-3">
                <p className="flex items-center gap-2 text-sm font-bold text-rosewood">
                  <TriangleAlert size={15} aria-hidden="true" />
                  Erreur fréquente
                </p>
                <p className="mt-2 text-sm leading-6 text-muted">{step.commonError}</p>
              </div>
              <div className="rounded-lg bg-sage/10 p-3">
                <p className="flex items-center gap-2 text-sm font-bold text-sage">
                  <BadgeCheck size={15} aria-hidden="true" />
                  Correction
                </p>
                <p className="mt-2 text-sm leading-6 text-muted">{step.correction}</p>
              </div>
            </div>
          </div>

          <button
            type="button"
            onClick={onUnderstood}
            className={[
              "focus-ring mt-4 inline-flex min-h-11 w-full items-center justify-center rounded-full px-4 py-2 text-sm font-bold transition sm:w-auto",
              understood ? "bg-sage text-white" : "bg-ink text-white hover:bg-rosewood"
            ].join(" ")}
          >
            {understood ? "Compris" : "J'ai compris"}
          </button>
        </div>
      </div>
    </section>
  );
}

function CapsulePlaceholder({
  label,
  index,
  status
}: {
  label: string;
  index: number;
  status: "good" | "warning";
}) {
  const offset = index % 2 === 0 ? "rotate-0" : "rotate-2";
  const color = status === "good" ? "bg-sage" : "bg-rosewood";

  return (
    <div className="relative min-h-56 overflow-hidden rounded-lg bg-[linear-gradient(135deg,#fff5f7_0%,#f7dce5_55%,#e8d8cb_100%)] p-4">
      <div className="absolute right-4 top-4 rounded-full bg-white/85 px-3 py-1 text-xs font-black text-ink">
        Image placeholder
      </div>
      <div className="flex h-full min-h-48 items-center justify-center">
        <div className="relative h-36 w-44">
          <div className="absolute bottom-0 left-4 h-28 w-20 rounded-t-[3rem] bg-white shadow-tight" />
          <div className={`absolute left-16 top-2 h-32 w-16 ${offset} rounded-t-[3rem] border-4 border-white ${color} shadow-tight`} />
          <div className="absolute bottom-5 left-28 h-8 w-28 rounded-full bg-ink/80" />
          <div className="absolute bottom-10 left-36 h-2 w-14 rounded-full bg-white/80" />
        </div>
      </div>
      <p className="absolute bottom-4 left-4 right-4 rounded-lg bg-white/88 px-3 py-2 text-sm font-bold text-ink">
        {label}
      </p>
    </div>
  );
}
