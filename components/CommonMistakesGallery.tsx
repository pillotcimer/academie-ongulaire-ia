import { RotateCcw, TriangleAlert } from "lucide-react";
import type { CommonMistake } from "@/data/lessonVisuals";

type CommonMistakesGalleryProps = {
  mistakes: CommonMistake[];
};

export function CommonMistakesGallery({ mistakes }: CommonMistakesGalleryProps) {
  if (mistakes.length === 0) {
    return null;
  }

  return (
    <section className="rounded-lg border border-rose-100 bg-petal p-4">
      <div>
        <p className="text-sm font-black text-ink">Erreurs fréquentes en images</p>
        <p className="mt-1 text-sm leading-6 text-muted">Chaque erreur indique ce qu'elle provoque et comment la corriger.</p>
      </div>

      <div className="mt-4 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
        {mistakes.map((mistake) => (
          <article key={mistake.id} className="overflow-hidden rounded-lg border border-rose-100 bg-white">
            <div className="relative aspect-video bg-white">
              <img src={mistake.imageUrl} alt="" className="h-full w-full object-cover" />
              <span className="absolute left-3 top-3 inline-flex items-center gap-2 rounded-full bg-white/90 px-3 py-1 text-xs font-black text-ink">
                <TriangleAlert size={14} aria-hidden="true" />
                À éviter
              </span>
            </div>
            <div className="p-3">
              <h4 className="text-sm font-black text-ink">{mistake.name}</h4>
              <p className="mt-2 text-xs font-black uppercase tracking-[0.12em] text-muted">Conséquence</p>
              <p className="mt-1 text-sm leading-6 text-muted">{mistake.consequence}</p>
              <div className="mt-3 rounded-lg bg-petal p-3">
                <p className="flex items-center gap-2 text-sm font-bold text-ink">
                  <RotateCcw size={15} aria-hidden="true" />
                  Astuce pro
                </p>
                <p className="mt-1 text-sm leading-6 text-muted">{mistake.correction}</p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
