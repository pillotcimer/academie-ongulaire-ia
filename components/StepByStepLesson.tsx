"use client";

import { useMemo } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  Camera,
  CheckCircle2,
  ClipboardCheck,
  Eye,
  FileText,
  Image as ImageIcon,
  PlayCircle,
  RotateCcw,
  Sparkles,
  Target
} from "lucide-react";
import { InteractiveChecklist } from "@/components/InteractiveChecklist";
import { LessonCoachBlock } from "@/components/LessonCoachBlock";
import { VideoLessonBlock } from "@/components/VideoLessonBlock";
import { useLessonProgress } from "@/components/useLessonProgress";
import type { CourseLesson } from "@/data/content";
import { getLessonMedia } from "@/data/mediaLibrary";
import { getLessonVisuals } from "@/data/lessonVisuals";
import type { TrainingCategory, VisualManualCard } from "@/data/trainingCategories";

type StepByStepLessonProps = {
  category: TrainingCategory;
  lesson: CourseLesson;
  activeStepIndex: number;
  nextLessonHref?: string;
  nextLessonTitle?: string;
};

type LessonStep = {
  title: string;
  shortTitle: string;
  icon: React.ComponentType<{ size?: number; "aria-hidden"?: boolean }>;
  content: React.ReactNode;
};

function getShortExplanation(text: string) {
  const sentences = text
    .split(". ")
    .map((sentence) => sentence.trim())
    .filter(Boolean);

  return sentences.slice(0, 2).join(". ") + (sentences.length > 0 && !sentences.slice(0, 2).join(". ").endsWith(".") ? "." : "");
}

function getManualCard(category: TrainingCategory, lesson: CourseLesson): VisualManualCard {
  return (
    category.manualCards[0] ?? {
      id: lesson.id,
      title: lesson.title,
      imageUrl: "/images/lessons/good-bad.svg",
      correct: lesson.correctExample,
      avoid: lesson.commonError,
      why: lesson.expectedResult,
      fix: "Reviens à la checklist, corrige un point à la fois, puis reprends une photo nette."
    }
  );
}

export function StepByStepLesson({ category, lesson, activeStepIndex, nextLessonHref, nextLessonTitle }: StepByStepLessonProps) {
  const { completeLesson, isCompleted } = useLessonProgress([lesson.id]);
  const media = getLessonMedia(lesson.id);
  const visuals = getLessonVisuals(lesson.id);
  const manualCard = getManualCard(category, lesson);
  const completed = isCompleted(lesson.id);

  const steps: LessonStep[] = useMemo(
    () => [
      {
        title: "Vidéo",
        shortTitle: "Vidéo",
        icon: PlayCircle,
        content: <VideoLessonBlock title={lesson.videoTitle} duration={lesson.videoDuration} videoUrl={lesson.videoUrl} media={media} />
      },
      {
        title: "Schéma / visuel",
        shortTitle: "Visuel",
        icon: ImageIcon,
        content: <VisualStep card={manualCard} guidance={visuals?.guidance} />
      },
      {
        title: "Explication courte",
        shortTitle: "Cours",
        icon: FileText,
        content: <ExplanationStep lesson={lesson} />
      },
      {
        title: "Checklist",
        shortTitle: "Checklist",
        icon: ClipboardCheck,
        content: <InteractiveChecklist lessonId={lesson.id} items={lesson.checklist} />
      },
      {
        title: "Exercice",
        shortTitle: "Exercice",
        icon: Target,
        content: <PracticeStep lesson={lesson} />
      },
      {
        title: "Photo au coach IA",
        shortTitle: "Coach IA",
        icon: Camera,
        content: <LessonCoachBlock lessonId={lesson.id} exercise={lesson.coachExercise} />
      },
      {
        title: "Validation",
        shortTitle: "Valider",
        icon: CheckCircle2,
        content: (
          <ValidationStep
            completed={completed}
            lesson={lesson}
            nextLessonHref={nextLessonHref}
            nextLessonTitle={nextLessonTitle}
            onComplete={() => completeLesson(lesson.id)}
          />
        )
      }
    ],
    [completeLesson, completed, lesson, manualCard, media, nextLessonHref, nextLessonTitle, visuals?.guidance]
  );

  const activeStep = Math.min(Math.max(activeStepIndex, 0), steps.length - 1);
  const currentStep = steps[activeStep];
  const progress = Math.round(((activeStep + 1) / steps.length) * 100);
  const lessonHref = `/formation/${category.slug}/${lesson.id}`;
  const previousStepHref = activeStep > 0 ? `${lessonHref}?etape=${activeStep}` : lessonHref;
  const nextStepHref = activeStep < steps.length - 1 ? `${lessonHref}?etape=${activeStep + 2}` : undefined;

  return (
    <div>
      <section className="border-b border-rose-100 bg-white">
        <div className="mx-auto max-w-5xl px-4 py-6 sm:px-6 lg:px-8">
          <Link href={`/formation/${category.slug}`} className="focus-ring inline-flex items-center gap-2 rounded-full text-sm font-bold text-rosewood">
            <ArrowLeft size={16} aria-hidden="true" />
            Retour à la catégorie
          </Link>

          <div className="mt-5">
            <p className="text-xs font-black uppercase tracking-[0.16em] text-rosewood">{category.title}</p>
            <h1 className="mt-2 text-3xl font-black leading-tight text-ink sm:text-4xl">{lesson.title}</h1>
            <p className="mt-3 max-w-3xl text-base leading-7 text-muted">{lesson.objective}</p>
          </div>

          <div className="mt-5 rounded-lg border border-rose-100 bg-petal p-3">
            <div className="flex items-center justify-between gap-3">
              <p className="text-sm font-black text-ink">
                Étape {activeStep + 1} sur {steps.length} : {currentStep.title}
              </p>
              <span className="rounded-full bg-white px-3 py-1 text-xs font-black text-rosewood">{progress}%</span>
            </div>
            <div className="mt-3 h-2 overflow-hidden rounded-full bg-white">
              <div className="h-full rounded-full bg-rosewood transition-all" style={{ width: `${progress}%` }} />
            </div>
          </div>

          <div className="mt-4 grid grid-cols-4 gap-2 sm:grid-cols-7">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const active = index === activeStep;
              const done = index < activeStep || (index === steps.length - 1 && completed);

              return (
                <Link
                  key={step.title}
                  href={`${lessonHref}?etape=${index + 1}`}
                  aria-current={active ? "step" : undefined}
                  className={[
                    "focus-ring flex min-h-16 flex-col items-center justify-center gap-1 rounded-lg border px-2 py-2 text-center text-[11px] font-black transition",
                    active
                      ? "border-rosewood bg-ink text-white"
                      : done
                        ? "border-sage/30 bg-sage/10 text-ink"
                        : "border-rose-100 bg-white text-muted hover:border-rosewood/40"
                  ].join(" ")}
                >
                  <Icon size={17} aria-hidden={true} />
                  <span className="leading-tight">{step.shortTitle}</span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-6 sm:px-6 lg:px-8">
        <div className="rounded-lg border border-rose-100 bg-white p-4 shadow-soft sm:p-5">{currentStep.content}</div>

        <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <Link
            href={previousStepHref}
            aria-disabled={activeStep === 0}
            className={[
              "focus-ring inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-bold transition",
              activeStep === 0 ? "pointer-events-none bg-petal text-rosewood opacity-45" : "bg-petal text-rosewood hover:bg-blush"
            ].join(" ")}
          >
            <ArrowLeft size={17} aria-hidden="true" />
            Retour
          </Link>

          {nextStepHref ? (
            <Link
              href={nextStepHref}
              className="focus-ring inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-ink px-5 py-3 text-sm font-bold text-white shadow-tight transition hover:bg-rosewood"
            >
              Valider cette étape
              <ArrowRight size={17} aria-hidden="true" />
            </Link>
          ) : null}
        </div>
      </section>
    </div>
  );
}

function VisualStep({ card, guidance }: { card: VisualManualCard; guidance?: { whatToSee: string[]; whatToAvoid: string[] } }) {
  return (
    <div>
      <div className="overflow-hidden rounded-lg border border-rose-100 bg-petal">
        <div className="grid gap-0 lg:grid-cols-[1fr_1.05fr]">
          <div className="relative aspect-video bg-white">
            <img src={card.imageUrl} alt="" className="h-full w-full object-cover" />
            <span className="absolute left-3 top-3 rounded-full bg-white/92 px-3 py-1 text-xs font-black text-rosewood">Schéma</span>
          </div>
          <div className="p-4">
            <h2 className="text-xl font-black text-ink">{card.title}</h2>
            <p className="mt-2 text-sm leading-6 text-muted">Regarde d’abord le repère visuel, puis vérifie seulement les points ci-dessous.</p>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              <MiniInfoCard title="Correct" text={card.correct} tone="neutral" />
              <MiniInfoCard title="À éviter" text={card.avoid} tone="alert" />
              <MiniInfoCard title="Pourquoi" text={card.why} tone="neutral" />
              <MiniInfoCard title="Comment corriger" text={card.fix} tone="action" />
            </div>
          </div>
        </div>
      </div>

      {guidance ? (
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          <CompactList title="Ce que tu dois voir" items={guidance.whatToSee} icon={Eye} />
          <CompactList title="Ce que tu dois éviter" items={guidance.whatToAvoid} icon={RotateCcw} />
        </div>
      ) : null}
    </div>
  );
}

function ExplanationStep({ lesson }: { lesson: CourseLesson }) {
  return (
    <div className="grid gap-4 lg:grid-cols-[1fr_18rem]">
      <div>
        <h2 className="text-xl font-black text-ink">À comprendre avant de pratiquer</h2>
        <p className="mt-3 text-base leading-7 text-muted">{getShortExplanation(lesson.explanation)}</p>
      </div>
      <div className="rounded-lg bg-petal p-4">
        <p className="text-xs font-black uppercase tracking-[0.12em] text-rosewood">Résultat attendu</p>
        <p className="mt-2 text-sm leading-6 text-muted">{lesson.expectedResult}</p>
      </div>
    </div>
  );
}

function PracticeStep({ lesson }: { lesson: CourseLesson }) {
  return (
    <div className="grid gap-4 lg:grid-cols-[1fr_18rem]">
      <div>
        <h2 className="text-xl font-black text-ink">{lesson.practice.objective}</h2>
        <ol className="mt-4 space-y-3">
          {lesson.practice.instructions.map((instruction, index) => (
            <li key={instruction} className="flex gap-3 rounded-lg bg-petal p-3 text-sm leading-6 text-muted">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white text-xs font-black text-rosewood">
                {index + 1}
              </span>
              <span>{instruction}</span>
            </li>
          ))}
        </ol>
      </div>

      <div className="space-y-3">
        <MiniInfoCard title="Résultat attendu" text={lesson.practice.expectedResult} tone="neutral" />
        <MiniInfoCard title="À éviter" text={lesson.practice.mistakesToAvoid.slice(0, 2).join(" ")} tone="alert" />
      </div>
    </div>
  );
}

function ValidationStep({
  completed,
  lesson,
  nextLessonHref,
  nextLessonTitle,
  onComplete
}: {
  completed: boolean;
  lesson: CourseLesson;
  nextLessonHref?: string;
  nextLessonTitle?: string;
  onComplete: () => void;
}) {
  return (
    <div className="text-center">
      <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-lg bg-petal text-rosewood">
        <Sparkles size={24} aria-hidden="true" />
      </span>
      <h2 className="mt-4 text-2xl font-black text-ink">Valide seulement quand c’est fait</h2>
      <p className="mx-auto mt-3 max-w-2xl text-base leading-7 text-muted">
        Tu dois avoir regardé la vidéo, vérifié le visuel, coché la checklist, fait l’exercice et envoyé une photo si tu veux une correction.
      </p>

      <div className="mx-auto mt-5 max-w-xl rounded-lg bg-petal p-4 text-left">
        <p className="text-xs font-black uppercase tracking-[0.12em] text-rosewood">Contrôle final</p>
        <p className="mt-2 text-sm leading-6 text-muted">{lesson.expectedResult}</p>
      </div>

      <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
        <button
          type="button"
          onClick={onComplete}
          className="focus-ring inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-ink px-5 py-3 text-sm font-bold text-white shadow-tight transition hover:bg-rosewood"
        >
          <CheckCircle2 size={18} aria-hidden="true" />
          {completed ? "Étape validée" : "Valider cette étape"}
        </button>

        {nextLessonHref ? (
          <Link
            href={nextLessonHref}
            className="focus-ring inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-petal px-5 py-3 text-sm font-bold text-rosewood transition hover:bg-blush"
          >
            Passer à la leçon suivante : {nextLessonTitle}
            <ArrowRight size={17} aria-hidden="true" />
          </Link>
        ) : (
          <Link
            href="/formation"
            className="focus-ring inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-petal px-5 py-3 text-sm font-bold text-rosewood transition hover:bg-blush"
          >
            Revenir aux catégories
            <ArrowRight size={17} aria-hidden="true" />
          </Link>
        )}
      </div>
    </div>
  );
}

function CompactList({ title, items, icon: Icon }: { title: string; items: string[]; icon: React.ComponentType<{ size?: number; "aria-hidden"?: boolean }> }) {
  return (
    <div className="rounded-lg border border-rose-100 bg-white p-4">
      <p className="flex items-center gap-2 text-sm font-black text-ink">
        <Icon size={16} aria-hidden={true} />
        {title}
      </p>
      <ul className="mt-3 space-y-2">
        {items.slice(0, 4).map((item) => (
          <li key={item} className="flex items-start gap-2 text-sm leading-6 text-muted">
            <CheckCircle2 className="mt-1 shrink-0 text-rosewood" size={14} aria-hidden="true" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function MiniInfoCard({ title, text, tone }: { title: string; text: string; tone: "neutral" | "alert" | "action" }) {
  const toneClass = {
    neutral: "bg-white text-ink",
    alert: "bg-white text-rosewood",
    action: "bg-ink text-white"
  };

  return (
    <div className={`rounded-lg p-3 ${toneClass[tone]}`}>
      <p className="text-xs font-black uppercase tracking-[0.12em] opacity-75">{title}</p>
      <p className={tone === "action" ? "mt-2 text-sm leading-6 text-white/78" : "mt-2 text-sm leading-6 text-muted"}>{text}</p>
    </div>
  );
}
