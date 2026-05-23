import { Camera, CheckCircle2, ClipboardCheck, Sparkles, XCircle } from "lucide-react";
import type { StudentCaseStudyData } from "@/data/lessonVisuals";

type StudentCaseStudyProps = {
  caseStudy: StudentCaseStudyData;
};

export function StudentCaseStudy({ caseStudy }: StudentCaseStudyProps) {
  return (
    <section className="rounded-lg border border-rose-100 bg-white p-4">
      <div className="flex items-start gap-3">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-petal text-rosewood">
          <Camera size={19} aria-hidden="true" />
        </span>
        <div>
          <p className="text-sm font-black text-ink">Cas élève corrigé</p>
          <p className="mt-1 text-sm leading-6 text-muted">{caseStudy.title}</p>
        </div>
      </div>

      <div className="mt-4 grid gap-4 lg:grid-cols-[0.9fr_1.1fr_0.9fr] lg:items-stretch">
        <ImagePanel label="Photo avant" imageUrl={caseStudy.beforeImageUrl} tone="warning" />

        <div className="rounded-lg bg-petal p-4">
          <div className="flex items-center justify-between gap-3">
            <p className="flex items-center gap-2 text-sm font-black text-ink">
              <Sparkles size={16} aria-hidden="true" />
              Correction IA
            </p>
            <span className="rounded-full bg-white px-3 py-1 text-sm font-black text-rosewood">
              {caseStudy.score}/100
            </span>
          </div>

          <div className="mt-4 space-y-4">
            <div>
              <p className="flex items-center gap-2 text-sm font-bold text-rosewood">
                <XCircle size={15} aria-hidden="true" />
                Erreurs détectées
              </p>
              <ul className="mt-2 space-y-2">
                {caseStudy.mistakes.map((mistake) => (
                  <li key={mistake} className="text-sm leading-6 text-muted">{mistake}</li>
                ))}
              </ul>
            </div>
            <div>
              <p className="flex items-center gap-2 text-sm font-bold text-sage">
                <ClipboardCheck size={15} aria-hidden="true" />
                Conseils
              </p>
              <ul className="mt-2 space-y-2">
                {caseStudy.advice.map((advice) => (
                  <li key={advice} className="text-sm leading-6 text-muted">{advice}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <ImagePanel label="Photo après" imageUrl={caseStudy.afterImageUrl} tone="success" />
      </div>
    </section>
  );
}

function ImagePanel({ label, imageUrl, tone }: { label: string; imageUrl: string; tone: "success" | "warning" }) {
  const Icon = tone === "success" ? CheckCircle2 : XCircle;
  const toneClass = tone === "success" ? "text-sage" : "text-rosewood";

  return (
    <div className="overflow-hidden rounded-lg border border-rose-100 bg-petal">
      <div className="relative aspect-video bg-white">
        <img src={imageUrl} alt="" className="h-full w-full object-cover" />
        <span className={`absolute left-3 top-3 inline-flex items-center gap-2 rounded-full bg-white/90 px-3 py-1 text-xs font-black ${toneClass}`}>
          <Icon size={14} aria-hidden="true" />
          {label}
        </span>
      </div>
    </div>
  );
}
