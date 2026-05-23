"use client";

import { useEffect, useState } from "react";
import { AlertCircle, Camera, CheckCircle2, ClipboardCheck, Loader2, Upload, XCircle } from "lucide-react";
import { analysisByExercise, exerciseOptions } from "@/data/content";
import type { CoachAnalysis } from "@/lib/coachAnalysis";
import { requestPhotoAnalysis } from "@/components/photoAnalysisClient";

export function CoachAnalyzer() {
  const [selectedExercise, setSelectedExercise] = useState(exerciseOptions[0]);
  const [photoFile, setPhotoFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysis, setAnalysis] = useState<CoachAnalysis | null>(null);
  const [analysisMode, setAnalysisMode] = useState<"ai" | "demo">("demo");
  const [message, setMessage] = useState("Ajoute une photo pour lancer une analyse.");

  useEffect(() => {
    return () => {
      if (preview) {
        URL.revokeObjectURL(preview);
      }
    };
  }, [preview]);

  function handleFileChange(event: React.ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    if (!file) {
      return;
    }

    if (preview) {
      URL.revokeObjectURL(preview);
    }

    setPhotoFile(file);
    setPreview(URL.createObjectURL(file));
    setAnalysis(null);
    setAnalysisMode("demo");
    setMessage("Photo ajoutée. Tu peux lancer l'analyse.");
  }

  async function handleAnalyze() {
    if (!photoFile) {
      setMessage("Ajoute d'abord une photo de ton exercice.");
      return;
    }

    setIsAnalyzing(true);
    setAnalysis(null);
    setMessage("Analyse en cours : l'image est envoyée à la route sécurisée.");

    try {
      const result = await requestPhotoAnalysis({
        image: photoFile,
        exercise: selectedExercise
      });

      setAnalysis(result.analysis);
      setAnalysisMode(result.mode);
      setMessage(result.message);
    } catch {
      setAnalysis(analysisByExercise[selectedExercise]);
      setAnalysisMode("demo");
      setMessage("L'analyse réelle n'a pas pu être lancée. Mode démo activé.");
    } finally {
      setIsAnalyzing(false);
    }
  }

  const hasResult = Boolean(analysis);
  const statusLabel = analysisMode === "ai" ? "Analyse IA réelle" : "Mode démo";

  return (
    <div className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
      <section className="rounded-lg border border-rose-100 bg-white p-5 shadow-soft">
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-petal text-rosewood">
            <Camera size={22} aria-hidden="true" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-ink">Coach IA photo</h2>
            <p className="text-sm text-muted">Choisis un exercice puis ajoute une photo.</p>
          </div>
        </div>

        <div className="mt-5 flex items-start gap-3 rounded-lg border border-champagne bg-champagne/60 p-4">
          <AlertCircle className="mt-1 shrink-0 text-ink" size={18} aria-hidden="true" />
          <div>
            <p className="text-sm font-bold text-ink">Route IA sécurisée</p>
            <p className="mt-1 text-sm leading-6 text-muted">
              Si `OPENAI_API_KEY` est configurée côté serveur, la photo est analysée par OpenAI Vision. Sinon, le site garde le mode démo.
            </p>
          </div>
        </div>

        <label className="mt-6 block text-sm font-bold text-ink" htmlFor="exercise">
          Exercice
        </label>
        <select
          id="exercise"
          value={selectedExercise}
          onChange={(event) => {
            setSelectedExercise(event.target.value);
            setAnalysis(null);
            setAnalysisMode("demo");
            setMessage(preview ? "Exercice changé. Relance l'analyse pour obtenir le nouveau retour." : "Ajoute une photo pour lancer une analyse.");
          }}
          className="focus-ring mt-2 w-full rounded-lg border border-rose-100 bg-petal px-4 py-3 text-sm font-semibold text-ink"
        >
          {exerciseOptions.map((exercise) => (
            <option key={exercise} value={exercise}>
              {exercise}
            </option>
          ))}
        </select>

        <label
          htmlFor="photo"
          className="focus-ring mt-5 flex min-h-64 cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-rose-200 bg-petal p-4 text-center transition hover:border-rosewood"
          tabIndex={0}
        >
          {preview ? (
            <img src={preview} alt="Prévisualisation de l'exercice" className="max-h-64 rounded-lg object-contain" />
          ) : (
            <>
              <Upload className="text-rosewood" size={34} aria-hidden="true" />
              <span className="mt-3 text-sm font-bold text-ink">Ajouter une photo</span>
              <span className="mt-1 text-xs leading-5 text-muted">JPG, PNG, WEBP ou GIF non animé</span>
            </>
          )}
          <input id="photo" type="file" accept="image/jpeg,image/png,image/webp,image/gif" className="sr-only" onChange={handleFileChange} />
        </label>

        <button
          type="button"
          onClick={handleAnalyze}
          disabled={isAnalyzing}
          className="focus-ring mt-5 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-ink px-5 py-3 text-sm font-bold text-white shadow-tight transition hover:bg-rosewood disabled:cursor-wait disabled:opacity-70"
        >
          {isAnalyzing ? <Loader2 className="animate-spin" size={18} aria-hidden="true" /> : <ClipboardCheck size={18} aria-hidden="true" />}
          {isAnalyzing ? "Analyse en cours" : "Analyser mon travail"}
        </button>

        <p className="mt-3 rounded-lg bg-petal px-4 py-3 text-sm leading-6 text-muted">{message}</p>
      </section>

      <section className="rounded-lg border border-rose-100 bg-white p-5 shadow-soft">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.14em] text-rosewood">Résultat</p>
            <h2 className="mt-2 text-2xl font-black text-ink">{analysis ? `${analysis.score}/100` : "En attente"}</h2>
          </div>
          <span className="rounded-full bg-petal px-3 py-1 text-xs font-bold text-rosewood">
            {hasResult ? statusLabel : "En attente"}
          </span>
        </div>

        {analysis ? (
          <div className="mt-6 space-y-5">
            <div className="rounded-lg border border-champagne bg-champagne/60 p-4">
              <p className="text-sm font-bold text-ink">
                {analysisMode === "ai" ? "Lecture réelle de la photo" : "Lecture simulée de la photo"}
              </p>
              <p className="mt-2 text-sm leading-6 text-muted">
                Exercice analysé : <span className="font-bold text-ink">{selectedExercise}</span>.
              </p>
            </div>
            <ResultBlock title="Points réussis" icon={CheckCircle2} items={analysis.strengths} tone="success" />
            <ResultBlock title="Erreurs détectées" icon={XCircle} items={analysis.mistakes} tone="warning" />
            <ResultBlock title="Conseils de correction" icon={ClipboardCheck} items={analysis.advice} tone="neutral" />
            <div className="rounded-lg bg-ink p-4 text-white">
              <p className="text-sm font-bold">Étape suivante recommandée</p>
              <p className="mt-2 text-sm leading-6 text-white/78">{analysis.nextStep}</p>
            </div>
          </div>
        ) : (
          <div className="mt-6 rounded-lg bg-petal p-5">
            <p className="text-sm leading-7 text-muted">
              Exemple : ton limage est correct mais le bord libre manque de symétrie. L'apex semble trop plat. Ajoute un peu plus de matière au centre puis affine les côtés.
            </p>
          </div>
        )}
      </section>
    </div>
  );
}

type ResultBlockProps = {
  title: string;
  icon: typeof CheckCircle2;
  items: string[];
  tone: "success" | "warning" | "neutral";
};

function ResultBlock({ title, icon: Icon, items, tone }: ResultBlockProps) {
  const toneClass = {
    success: "bg-sage/10 text-sage",
    warning: "bg-champagne text-ink",
    neutral: "bg-petal text-rosewood"
  };

  return (
    <div>
      <div className="flex items-center gap-2">
        <span className={`flex h-8 w-8 items-center justify-center rounded-lg ${toneClass[tone]}`}>
          <Icon size={17} aria-hidden="true" />
        </span>
        <h3 className="font-bold text-ink">{title}</h3>
      </div>
      <ul className="mt-3 space-y-2">
        {items.map((item) => (
          <li key={item} className="rounded-lg border border-rose-50 bg-white px-3 py-2 text-sm leading-6 text-muted">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
