import { BadgeCheck, TriangleAlert } from "lucide-react";
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
      <div>
        <p className="text-sm font-black text-ink">Comparaison bon / mauvais exemple</p>
        <p className="mt-1 text-sm leading-6 text-muted">Observe les différences avant de pratiquer.</p>
      </div>

      <div className="mt-4 space-y-4">
        {items.map((item) => (
          <article key={item.id} className="rounded-lg bg-petal p-3">
            <h4 className="text-sm font-black text-ink">{item.title}</h4>
            <div className="mt-3 grid gap-3 md:grid-cols-2">
              <ExampleCard example={item.good} tone="good" />
              <ExampleCard example={item.bad} tone="bad" />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function ExampleCard({ example, tone }: { example: VisualExample; tone: "good" | "bad" }) {
  const Icon = tone === "good" ? BadgeCheck : TriangleAlert;
  const toneClass = tone === "good" ? "text-sage bg-sage/10" : "text-rosewood bg-white";

  return (
    <div className="overflow-hidden rounded-lg border border-rose-100 bg-white">
      <div className="relative aspect-video bg-white">
        <img src={example.imageUrl} alt="" className="h-full w-full object-cover" />
        <span className={`absolute left-3 top-3 inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-black ${toneClass}`}>
          <Icon size={14} aria-hidden="true" />
          {tone === "good" ? "Bon exemple" : "À éviter"}
        </span>
      </div>
      <div className="p-3">
        <p className="text-sm font-black text-ink">{example.title}</p>
        <p className="mt-1 text-sm leading-6 text-muted">{example.description}</p>
      </div>
    </div>
  );
}
