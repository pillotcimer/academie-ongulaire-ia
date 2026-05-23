import { analysisByExercise } from "@/data/content";

export type CoachAnalysis = {
  score: number;
  strengths: string[];
  mistakes: string[];
  advice: string[];
  nextStep: string;
};

export type CoachAnalysisResponse = {
  mode: "ai" | "demo";
  analysis: CoachAnalysis;
  message: string;
};

const fallbackExercise = "entraînement final";

export function getDemoAnalysis(exercise: string): CoachAnalysis {
  return normalizeAnalysis(analysisByExercise[exercise] ?? analysisByExercise[fallbackExercise]);
}

export function normalizeAnalysis(value: unknown): CoachAnalysis {
  const candidate = isRecord(value) ? value : {};

  return {
    score: clampScore(candidate.score),
    strengths: normalizeStringArray(candidate.strengths, [
      "La photo permet d'identifier les grandes zones de travail.",
      "L'exercice suit globalement l'objectif demandé."
    ]),
    mistakes: normalizeStringArray(candidate.mistakes, [
      "Certains détails ne sont pas assez visibles pour confirmer la régularité.",
      "Une photo de face et une photo de profil donneraient un diagnostic plus précis."
    ]),
    advice: normalizeStringArray(candidate.advice, [
      "Reprends une photo sous une lumière plus directe.",
      "Compare la symétrie de face puis vérifie l'épaisseur de profil."
    ]),
    nextStep: typeof candidate.nextStep === "string" && candidate.nextStep.trim().length > 0
      ? candidate.nextStep.trim()
      : "Refais l'exercice lentement puis envoie une photo plus proche et mieux éclairée."
  };
}

function clampScore(value: unknown) {
  if (typeof value !== "number" || Number.isNaN(value)) {
    return 70;
  }

  return Math.min(100, Math.max(0, Math.round(value)));
}

function normalizeStringArray(value: unknown, fallback: string[]) {
  if (!Array.isArray(value)) {
    return fallback;
  }

  const normalized = value
    .filter((item): item is string => typeof item === "string")
    .map((item) => item.trim())
    .filter(Boolean)
    .slice(0, 5);

  return normalized.length > 0 ? normalized : fallback;
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null;
}
