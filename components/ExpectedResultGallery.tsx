import { CheckCircle2, Eye, XCircle } from "lucide-react";
import type { ExpectedResult } from "@/data/lessonVisuals";

type ExpectedResultGalleryProps = {
  results: ExpectedResult[];
};

export function ExpectedResultGallery({ results }: ExpectedResultGalleryProps) {
  if (results.length === 0) {
    return null;
  }

  return (
    <section className="rounded-lg border border-rose-100 bg-white p-4">
      <p className="text-sm font-black text-ink">Résultat attendu</p>
      <p className="mt-1 text-sm leading-6 text-muted">Le rendu que tu dois chercher avant de valider l'exercice.</p>

      <div className="mt-4 grid gap-3 lg:grid-cols-2">
        {results.map((result) => (
          <article key={result.id} className="overflow-hidden rounded-lg border border-rose-100 bg-petal">
            <div className="relative aspect-video bg-white">
              <img src={result.imageUrl} alt="" className="h-full w-full object-cover" />
              <span className="absolute left-3 top-3 inline-flex items-center gap-2 rounded-full bg-white/90 px-3 py-1 text-xs font-black text-ink">
                <Eye size={14} aria-hidden="true" />
                Repère visuel
              </span>
            </div>
            <div className="p-4">
              <h4 className="text-base font-black text-ink">{result.title}</h4>
              <p className="mt-2 text-sm leading-6 text-muted">{result.result}</p>

              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                <div className="rounded-lg bg-white p-3">
                  <p className="flex items-center gap-2 text-sm font-bold text-ink">
                    <CheckCircle2 size={15} aria-hidden="true" />
                    Correct
                  </p>
                  <p className="mt-1 text-sm leading-6 text-muted">{result.correctExample}</p>
                </div>
                <div className="rounded-lg bg-white p-3">
                  <p className="flex items-center gap-2 text-sm font-bold text-rosewood">
                    <XCircle size={15} aria-hidden="true" />
                    À éviter
                  </p>
                  <p className="mt-1 text-sm leading-6 text-muted">{result.avoidExample}</p>
                </div>
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                {result.visualTips.map((tip) => (
                  <span key={tip} className="rounded-full bg-white px-3 py-1 text-xs font-bold text-rosewood">
                    {tip}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
