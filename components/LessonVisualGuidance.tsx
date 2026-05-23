import { Camera, CheckCircle2, Eye, Target, XCircle } from "lucide-react";
import type { LessonVisualGuidance as LessonVisualGuidanceData } from "@/data/lessonVisuals";

type LessonVisualGuidanceProps = {
  guidance: LessonVisualGuidanceData;
};

export function LessonVisualGuidance({ guidance }: LessonVisualGuidanceProps) {
  return (
    <section className="rounded-lg border border-rose-100 bg-white p-4">
      <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
        <GuidancePanel title="Ce que tu dois voir" items={guidance.whatToSee} icon="see" />
        <GuidancePanel title="Ce que tu dois éviter" items={guidance.whatToAvoid} icon="avoid" />
        <div className="rounded-lg bg-petal p-4">
          <p className="flex items-center gap-2 text-sm font-black text-rosewood">
            <Camera size={16} aria-hidden="true" />
            Quand envoyer une photo
          </p>
          <p className="mt-2 text-sm leading-6 text-muted">{guidance.whenToSendPhoto}</p>
        </div>
        <div className="rounded-lg bg-ink p-4 text-white">
          <p className="flex items-center gap-2 text-sm font-black">
            <Target size={16} aria-hidden="true" />
            Résultat attendu
          </p>
          <p className="mt-2 text-sm leading-6 text-white/76">{guidance.expectedResult}</p>
        </div>
      </div>
    </section>
  );
}

function GuidancePanel({ title, items, icon }: { title: string; items: string[]; icon: "see" | "avoid" }) {
  const Icon = icon === "see" ? Eye : XCircle;
  const color = icon === "see" ? "text-sage" : "text-rosewood";

  return (
    <div className="rounded-lg bg-petal p-4">
      <p className={`flex items-center gap-2 text-sm font-black ${color}`}>
        <Icon size={16} aria-hidden="true" />
        {title}
      </p>
      <ul className="mt-2 space-y-2">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-2 text-sm leading-6 text-muted">
            <CheckCircle2 className={`mt-1 shrink-0 ${color}`} size={14} aria-hidden="true" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
