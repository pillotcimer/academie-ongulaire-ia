import { BadgeCheck, HelpCircle, XCircle } from "lucide-react";
import type { GoodBadExample } from "@/data/lessonVisuals";

type GoodBadExampleGalleryProps = {
  examples: GoodBadExample[];
};

export function GoodBadExampleGallery({ examples }: GoodBadExampleGalleryProps) {
  if (examples.length === 0) {
    return null;
  }

  return (
    <section className="rounded-lg border border-rose-100 bg-petal p-4">
      <div>
        <p className="text-sm font-black text-ink">Bon exemple / Mauvais exemple</p>
        <p className="mt-1 text-sm leading-6 text-muted">Une lecture rapide pour comprendre pourquoi un résultat fonctionne ou non.</p>
      </div>

      <div className="mt-4 space-y-4">
        {examples.map((example) => (
          <article key={example.id} className="rounded-lg border border-rose-100 bg-white p-3">
            <h4 className="text-sm font-black text-ink">{example.title}</h4>
            <div className="mt-3 grid gap-3 md:grid-cols-2">
              <VisualSide imageUrl={example.goodImageUrl} label={example.goodLabel} tone="good" />
              <VisualSide imageUrl={example.badImageUrl} label={example.badLabel} tone="bad" />
            </div>
            <div className="mt-3 rounded-lg bg-petal p-3">
              <p className="flex items-center gap-2 text-sm font-bold text-rosewood">
                <HelpCircle size={15} aria-hidden="true" />
                Pourquoi
              </p>
              <p className="mt-1 text-sm leading-6 text-muted">{example.why}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function VisualSide({ imageUrl, label, tone }: { imageUrl: string; label: string; tone: "good" | "bad" }) {
  const Icon = tone === "good" ? BadgeCheck : XCircle;
  const toneClass = tone === "good" ? "text-sage" : "text-rosewood";

  return (
    <div className="overflow-hidden rounded-lg bg-petal">
      <div className="relative aspect-video bg-white">
        <img src={imageUrl} alt="" className="h-full w-full object-cover" />
        <span className={`absolute left-3 top-3 inline-flex items-center gap-2 rounded-full bg-white/90 px-3 py-1 text-xs font-black ${toneClass}`}>
          <Icon size={14} aria-hidden="true" />
          {tone === "good" ? "Bon" : "Mauvais"}
        </span>
      </div>
      <p className="p-3 text-sm font-bold text-ink">{label}</p>
    </div>
  );
}
