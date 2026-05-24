import { HelpCircle, RotateCcw } from "lucide-react";
import type { GoodBadExample } from "@/data/lessonVisuals";

type GoodBadExampleGalleryProps = {
  examples: GoodBadExample[];
};

export function GoodBadExampleGallery({ examples }: GoodBadExampleGalleryProps) {
  if (examples.length === 0) {
    return null;
  }

  return (
    <section className="rounded-lg border border-rose-100 bg-white p-4">
      <p className="text-sm font-black text-ink">Repères rapides</p>
      <p className="mt-1 text-sm leading-6 text-muted">Des cartes courtes pour comprendre sans gros blocs vert/rouge.</p>

      <div className="mt-4 grid gap-3 lg:grid-cols-2">
        {examples.map((example) => (
          <article key={example.id} className="overflow-hidden rounded-lg border border-rose-100 bg-petal">
            <div className="grid gap-0 sm:grid-cols-2">
              <VisualSide imageUrl={example.goodImageUrl} label="Correct" text={example.goodLabel} />
              <VisualSide imageUrl={example.badImageUrl} label="À éviter" text={example.badLabel} />
            </div>
            <div className="grid gap-3 p-3 sm:grid-cols-2">
              <MiniCard title="Pourquoi" text={example.why} icon="why" />
              <MiniCard title="Comment corriger" text="Reprends le geste lentement, contrôle l’axe ou la surface, puis photographie avant de continuer." icon="fix" />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function VisualSide({ imageUrl, label, text }: { imageUrl: string; label: string; text: string }) {
  return (
    <div className="bg-white">
      <div className="relative aspect-video">
        <img src={imageUrl} alt="" className="h-full w-full object-cover" />
        <span className="absolute left-3 top-3 rounded-full bg-white/92 px-3 py-1 text-xs font-black text-ink">{label}</span>
      </div>
      <p className="p-3 text-sm font-bold leading-6 text-ink">{text}</p>
    </div>
  );
}

function MiniCard({ title, text, icon }: { title: string; text: string; icon: "why" | "fix" }) {
  const Icon = icon === "why" ? HelpCircle : RotateCcw;

  return (
    <div className="rounded-lg bg-white p-3">
      <p className="flex items-center gap-2 text-sm font-black text-rosewood">
        <Icon size={15} aria-hidden="true" />
        {title}
      </p>
      <p className="mt-1 text-sm leading-6 text-muted">{text}</p>
    </div>
  );
}
