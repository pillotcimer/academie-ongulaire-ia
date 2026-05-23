"use client";

import { ChangeEvent, useEffect, useState } from "react";
import { Camera, CheckCircle2, ClipboardCheck, Loader2, Sparkles, Upload, XCircle } from "lucide-react";
import { analysisByExercise } from "@/data/content";
import type { CoachAnalysis } from "@/lib/coachAnalysis";
import { requestPhotoAnalysis } from "@/components/photoAnalysisClient";

type LessonCoachBlockProps = {
  lessonId: string;
  exercise: string;
};

const fallbackAnalysis = analysisByExercise["entraînement final"];

export function LessonCoachBlock({ lessonId, exercise }: LessonCoachBlockProps) {
  const [photoFile, setPhotoFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysis, setAnalysis] = useState<CoachAnalysis | null>(null);
  const [analysisMode, setAnalysisMode] = useState<"ai" | "demo">("demo");
  const [message, setMessage] = useState("");

  useEffect(() => {
    return () => {
      if (previewUrl) {
        URL.revokeObjectURL(previewUrl);
      }
    };
  }, [previewUrl]);

  function handleUpload(event: ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];

    if (!file) {
      return;
    }

    if (previewUrl) {
      URL.revokeObjectURL(previewUrl);
    }

    setPhotoFile(file);
    setPreviewUrl(URL.createObjectURL(file));
    setAnalysis(null);
    setAnalysisMode("demo");
    setMessage("");
  }

  async function analyzePhoto() {
    if (!photoFile) {
      setMessage("Ajoute une photo de ton exercice avant de lancer l'analyse.");
      return;
    }

    setMessage("");
    setAnalysis(null);
    setIsAnalyzing(true);

    try {
      const result = await requestPhotoAnalysis({
        image: photoFile,
        exercise
      });

      setAnalysis(result.analysis);
      setAnalysisMode(result.mode);
      setMessage(result.message);
    } catch {
      setAnalysis(analysisByExercise[exercise] ?? fallbackAnalysis);
      setAnalysisMode("demo");
      setMessage("L'analyse réelle n'a pas pu être lancée. Mode démo activé.");
    } finally {
      setIsAnalyzing(false);
    }
  }

  return (
    <section className="rounded-lg border border-rose-100 bg-petal p-4">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="inline-flex w-fit items-center gap-2 rounded-full bg-white px-3 py-1 text-xs font-black uppercase tracking-[0.12em] text-rosewood">
            <Sparkles size={13} aria-hidden="true" />
            {analysisMode === "ai" && analysis ? "IA réelle" : "Mode démo possible"}
          </p>
          <h4 className="mt-3 text-base font-black text-ink">Coach IA intégré</h4>
          <p className="mt-1 text-sm leading-6 text-muted">
            Exercice analysé : <span className="font-bold text-ink">{exercise}</span>
          </p>
        </div>
        <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-white text-rosewood">
          <Camera size={20} aria-hidden="true" />
        </span>
      </div>

      <div className="mt-4 grid gap-4 lg:grid-cols-[0.85fr_1.15fr]">
        <div>
          <label
            htmlFor={`lesson-photo-${lessonId}`}
            className="focus-ring flex min-h-12 cursor-pointer items-center justify-center gap-2 rounded-full bg-white px-4 py-3 text-sm font-bold text-rosewood shadow-tight transition hover:bg-blush"
          >
            <Upload size={17} aria-hidden="true" />
            Ajouter une photo
          </label>
          <input
            id={`lesson-photo-${lessonId}`}
            type="file"
            accept="image/jpeg,image/png,image/webp,image/gif"
            className="sr-only"
            onChange={handleUpload}
          />

          <div className="mt-3 overflow-hidden rounded-lg border border-rose-100 bg-white">
            {previewUrl ? (
              <img
                src={previewUrl}
                alt="Aperçu de l'exercice envoyé au coach IA"
                className="h-56 w-full object-cover sm:h-64"
              />
            ) : (
              <div className="flex h-48 flex-col items-center justify-center gap-3 px-5 text-center text-sm text-muted">
                <Camera size={28} className="text-rosewood" aria-hidden="true" />
                Ajoute une photo nette de ton exercice.
              </div>
            )}
          </div>

          {message ? <p className="mt-2 text-sm font-semibold text-rosewood">{message}</p> : null}

          <button
            type="button"
            onClick={analyzePhoto}
            disabled={isAnalyzing}
            className="focus-ring mt-3 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-ink px-5 py-3 text-sm font-bold text-white shadow-tight transition hover:bg-rosewood disabled:cursor-wait disabled:opacity-70"
          >
            {isAnalyzing ? <Loader2 className="animate-spin" size={17} aria-hidden="true" /> : <Sparkles size={17} aria-hidden="true" />}
            {isAnalyzing ? "Analyse en cours" : "Analyser ma photo"}
          </button>
        </div>

        <div className="rounded-lg border border-rose-100 bg-white p-4">
          {analysis ? (
            <div>
              <div className="flex items-center justify-between gap-3">
                <p className="text-sm font-bold text-ink">
                  {analysisMode === "ai" ? "Analyse IA réelle" : "Analyse simulée"}
                </p>
                <span className="rounded-full bg-sage/10 px-3 py-1 text-sm font-black text-sage">
                  {analysis.score}/100
                </span>
              </div>

              <div className="mt-4 space-y-4">
                <AnalysisList title="Points réussis" items={analysis.strengths} icon="success" />
                <AnalysisList title="Erreurs détectées" items={analysis.mistakes} icon="warning" />
                <AnalysisList title="Conseils de correction" items={analysis.advice} icon="advice" />

                <div className="rounded-lg bg-petal p-3">
                  <p className="text-xs font-black uppercase tracking-[0.12em] text-rosewood">Prochaine étape</p>
                  <p className="mt-2 text-sm leading-6 text-muted">{analysis.nextStep}</p>
                </div>
              </div>
            </div>
          ) : (
            <div className="flex h-full min-h-56 flex-col justify-center">
              <p className="text-sm font-bold text-ink">Résultat après upload</p>
              <p className="mt-2 text-sm leading-7 text-muted">
                Le retour affichera un score, les réussites, les erreurs visibles, les corrections à appliquer et la prochaine étape.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

function AnalysisList({
  title,
  items,
  icon
}: {
  title: string;
  items: string[];
  icon: "success" | "warning" | "advice";
}) {
  const Icon = icon === "warning" ? XCircle : icon === "advice" ? ClipboardCheck : CheckCircle2;
  const color = icon === "warning" ? "text-rosewood" : icon === "advice" ? "text-ink" : "text-sage";

  return (
    <div>
      <p className="text-xs font-black uppercase tracking-[0.12em] text-muted">{title}</p>
      <ul className="mt-2 space-y-2">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-2 text-sm leading-6 text-muted">
            <Icon className={`mt-1 shrink-0 ${color}`} size={15} aria-hidden="true" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
