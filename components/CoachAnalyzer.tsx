"use client";

import { useMemo, useState } from "react";
import { Camera, CheckCircle2, ClipboardCheck, Loader2, Upload, XCircle } from "lucide-react";
import { analysisByExercise, exerciseOptions } from "@/data/content";

export function CoachAnalyzer() {
  const [selectedExercise, setSelectedExercise] = useState(exerciseOptions[0]);
  const [preview, setPreview] = useState<string | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [hasResult, setHasResult] = useState(false);

  const analysis = useMemo(() => analysisByExercise[selectedExercise], [selectedExercise]);

  function handleFileChange(event: React.ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    if (!file) {
      return;
    }

    const imageUrl = URL.createObjectURL(file);
    setPreview(imageUrl);
    setHasResult(false);
  }

  function handleAnalyze() {
    setIsAnalyzing(true);
    setHasResult(false);

    window.setTimeout(() => {
      setIsAnalyzing(false);
      setHasResult(true);
    }, 900);
  }

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

        <label className="mt-6 block text-sm font-bold text-ink" htmlFor="exercise">
          Exercice
        </label>
        <select
          id="exercise"
          value={selectedExercise}
          onChange={(event) => {
            setSelectedExercise(event.target.value);
            setHasResult(false);
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
              <span className="mt-1 text-xs leading-5 text-muted">JPG, PNG ou photo prise avec le téléphone</span>
            </>
          )}
          <input id="photo" type="file" accept="image/*" className="sr-only" onChange={handleFileChange} />
        </label>

        <button
          type="button"
          onClick={handleAnalyze}
          disabled={isAnalyzing}
          className="focus-ring mt-5 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-ink px-5 py-3 text-sm font-bold text-white shadow-tight transition hover:bg-rosewood disabled:cursor-wait disabled:opacity-70"
        >
          {isAnalyzing ? <Loader2 className="animate-spin" size={18} aria-hidden="true" /> : <ClipboardCheck size={18} aria-hidden="true" />}
          Analyser mon travail
        </button>
      </section>

      <section className="rounded-lg border border-rose-100 bg-white p-5 shadow-soft">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.14em] text-rosewood">Résultat</p>
            <h2 className="mt-2 text-2xl font-black text-ink">{hasResult ? `${analysis.score}/100` : "En attente"}</h2>
          </div>
          <span className="rounded-full bg-petal px-3 py-1 text-xs font-bold text-rosewood">
            {hasResult ? "Analyse prête" : "Aperçu IA"}
          </span>
        </div>

        {hasResult ? (
          <div className="mt-6 space-y-5">
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
