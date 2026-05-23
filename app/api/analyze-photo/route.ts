import { NextResponse } from "next/server";
import { getDemoAnalysis, normalizeAnalysis } from "@/lib/coachAnalysis";
import type { CoachAnalysisResponse } from "@/lib/coachAnalysis";

export const runtime = "nodejs";

const openaiEndpoint = "https://api.openai.com/v1/responses";
const maxImageSize = 8 * 1024 * 1024;
const allowedImageTypes = new Set(["image/jpeg", "image/png", "image/webp", "image/gif"]);

export async function POST(request: Request) {
  const formData = await request.formData();
  const image = formData.get("image");
  const exercise = String(formData.get("exercise") ?? "").trim() || "entraînement final";

  if (!(image instanceof File)) {
    return NextResponse.json({ message: "Photo manquante." }, { status: 400 });
  }

  if (!allowedImageTypes.has(image.type)) {
    return NextResponse.json({ message: "Format accepté : JPG, PNG, WEBP ou GIF non animé." }, { status: 400 });
  }

  if (image.size > maxImageSize) {
    return NextResponse.json({ message: "Photo trop lourde. Utilise une image de moins de 8 Mo." }, { status: 400 });
  }

  if (!process.env.OPENAI_API_KEY) {
    return NextResponse.json(makeDemoResponse(exercise, "Mode démo : OPENAI_API_KEY n'est pas configurée."));
  }

  try {
    const imageDataUrl = await fileToDataUrl(image);
    const openaiResponse = await fetch(openaiEndpoint, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        model: process.env.OPENAI_VISION_MODEL ?? "gpt-4.1-mini",
        instructions:
          "Tu es un coach pédagogique de prothésie ongulaire. Analyse uniquement ce qui est visible sur la photo. Ne donne pas de diagnostic médical. Réponds en français, avec des conseils concrets, bienveillants et adaptés à une élève débutante.",
        input: [
          {
            role: "user",
            content: [
              {
                type: "input_text",
                text: [
                  `Exercice à analyser : ${exercise}.`,
                  "Évalue la photo comme une correction pédagogique de formation ongulaire.",
                  "Regarde surtout : hygiène visible, préparation, cuticules, axe, forme, limage, épaisseur, apex, finition, symétrie et zones à reprendre.",
                  "Si la photo ne permet pas de vérifier un point, dis-le dans les erreurs ou conseils au lieu d'inventer."
                ].join(" ")
              },
              {
                type: "input_image",
                image_url: imageDataUrl
              }
            ]
          }
        ],
        text: {
          format: {
            type: "json_schema",
            name: "nail_coach_analysis",
            strict: true,
            schema: {
              type: "object",
              additionalProperties: false,
              properties: {
                score: {
                  type: "integer",
                  minimum: 0,
                  maximum: 100
                },
                strengths: {
                  type: "array",
                  minItems: 2,
                  maxItems: 5,
                  items: { type: "string" }
                },
                mistakes: {
                  type: "array",
                  minItems: 2,
                  maxItems: 5,
                  items: { type: "string" }
                },
                advice: {
                  type: "array",
                  minItems: 2,
                  maxItems: 5,
                  items: { type: "string" }
                },
                nextStep: {
                  type: "string"
                }
              },
              required: ["score", "strengths", "mistakes", "advice", "nextStep"]
            }
          }
        },
        max_output_tokens: 900
      })
    });

    const payload = await openaiResponse.json();

    if (!openaiResponse.ok) {
      console.error("OpenAI vision error", redactOpenAIError(payload));
      return NextResponse.json(
        makeDemoResponse(exercise, "L'IA est indisponible pour l'instant. Mode démo activé."),
        { status: 200 }
      );
    }

    const outputText = extractOutputText(payload);
    const parsed = JSON.parse(outputText);

    return NextResponse.json({
      mode: "ai",
      analysis: normalizeAnalysis(parsed),
      message: "Analyse IA réelle terminée."
    } satisfies CoachAnalysisResponse);
  } catch (error) {
    console.error("Photo analysis route error", error);
    return NextResponse.json(
      makeDemoResponse(exercise, "Impossible de joindre l'IA pour l'instant. Mode démo activé."),
      { status: 200 }
    );
  }
}

function makeDemoResponse(exercise: string, message: string): CoachAnalysisResponse {
  return {
    mode: "demo",
    analysis: getDemoAnalysis(exercise),
    message
  };
}

async function fileToDataUrl(file: File) {
  const buffer = Buffer.from(await file.arrayBuffer());
  return `data:${file.type};base64,${buffer.toString("base64")}`;
}

function extractOutputText(payload: unknown) {
  if (isRecord(payload) && typeof payload.output_text === "string") {
    return payload.output_text;
  }

  if (!isRecord(payload) || !Array.isArray(payload.output)) {
    throw new Error("Réponse OpenAI illisible.");
  }

  for (const item of payload.output) {
    if (!isRecord(item) || !Array.isArray(item.content)) {
      continue;
    }

    for (const content of item.content) {
      if (isRecord(content) && typeof content.text === "string") {
        return content.text;
      }
    }
  }

  throw new Error("Texte d'analyse absent de la réponse OpenAI.");
}

function redactOpenAIError(payload: unknown) {
  if (!isRecord(payload)) {
    return "Unknown OpenAI error";
  }

  return {
    error: isRecord(payload.error)
      ? {
          message: typeof payload.error.message === "string" ? payload.error.message : "Unknown error",
          type: typeof payload.error.type === "string" ? payload.error.type : undefined,
          code: typeof payload.error.code === "string" ? payload.error.code : undefined
        }
      : "Unknown OpenAI error"
  };
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null;
}
