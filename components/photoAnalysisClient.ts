import type { CoachAnalysisResponse } from "@/lib/coachAnalysis";

export async function requestPhotoAnalysis({
  image,
  exercise
}: {
  image: File;
  exercise: string;
}): Promise<CoachAnalysisResponse> {
  const formData = new FormData();
  formData.append("image", image);
  formData.append("exercise", exercise);

  const response = await fetch("/api/analyze-photo", {
    method: "POST",
    body: formData
  });

  const payload = await response.json().catch(() => null);

  if (!response.ok || !payload) {
    throw new Error(
      typeof payload?.message === "string" ? payload.message : "L'analyse IA n'a pas pu être lancée."
    );
  }

  return payload as CoachAnalysisResponse;
}
