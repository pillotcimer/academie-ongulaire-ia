import { HelpCircle, RotateCcw } from "lucide-react";
import type { BeforeAfterComparison, VisualExample } from "@/data/lessonVisuals";

type BeforeAfterGalleryProps = {
  items: BeforeAfterComparison[];
};

export function BeforeAfterGallery({ items }: BeforeAfterGalleryProps) {
  if (items.length === 0) {
    return null;
  }

  return (
    <section className="rounded-lg border border-rose-100 bg-white p-4">
      <p className="text-sm font-black text-ink">Comparaisons rapides</p>
      <p className="mt-1 text-sm leading-6 text-muted">Une version plus légère : correct, à éviter, pourquoi, comment corriger.</p>

      <div className="mt-4 grid gap-3 lg:grid-cols-2">
        {items.map((item) => (
          <article key={item.id} className="overflow-hidden rounded-lg border border-rose-100 bg-petal">
            <h4 className="p-3 text-sm font-black text-ink">{item.title}</h4>
            <div className="grid gap-0 sm:grid-cols-2">
              <ExampleCard example={item.good} label="Correct" />
              <ExampleCard example={item.bad} label="À éviter" />
            </div>
            <div className="grid gap-3 p-3 sm:grid-cols-2">
              <MiniCard title="Pourquoi" text={item.difference} icon="why" />
              <MiniCard title="Comment corriger" text="Reviens au repère correct, corrige un seul défaut, puis contrôle avant de passer à l’étape suivante." icon="fix" />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function ExampleCard({ example, label }: { example: VisualExample; label: string }) {
  return (
    <div className="bg-white">
      <div className="relative aspect-video">
        <img src={example.imageUrl} alt="" className="h-full w-full object-cover" />
        <span className="absolute left-3 top-3 rounded-full bg-white/92 px-3 py-1 text-xs font-black text-ink">{label}</span>
      </div>
      <div className="p-3">
        <p className="text-sm font-black text-ink">{example.title}</p>
        <p className="mt-1 text-sm leading-6 text-muted">{example.description}</p>
      </div>
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
