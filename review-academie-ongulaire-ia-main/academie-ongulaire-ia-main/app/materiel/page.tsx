import { CheckCircle2, ShoppingBag } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { allMaterialItems, materialBudgets } from "@/data/content";

export default function MaterialPage() {
  return (
    <div>
      <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Matériel recommandé"
          title="Trois budgets pour acheter utile, sans se disperser"
          text="Le but n'est pas d'acheter tout le plus cher. Le bon kit dépend de ton niveau, de ta fréquence d'entraînement et de ton objectif."
        />
        <div className="mt-8 grid gap-4 lg:grid-cols-3">
          {materialBudgets.map((budget) => (
            <article key={budget.title} className="rounded-lg border border-rose-100 bg-white p-5 shadow-soft">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h2 className="text-xl font-black text-ink">{budget.title}</h2>
                  <p className="mt-1 text-lg font-bold text-rosewood">{budget.range}</p>
                </div>
                <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-petal text-rosewood">
                  <ShoppingBag size={21} aria-hidden="true" />
                </span>
              </div>
              <p className="mt-4 text-sm leading-6 text-muted">{budget.description}</p>
              <p className="mt-3 rounded-lg bg-petal px-3 py-2 text-sm font-bold text-ink">{budget.bestFor}</p>
              <ul className="mt-5 space-y-2">
                {budget.items.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm leading-6 text-muted">
                    <CheckCircle2 className="mt-1 shrink-0 text-sage" size={16} aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-rose-100 bg-white px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <SectionHeading eyebrow="Checklist" title="Tous les éléments à prévoir" />
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {allMaterialItems.map((item) => (
              <div key={item} className="flex min-h-14 items-center gap-3 rounded-lg border border-rose-100 bg-petal px-4 py-3">
                <CheckCircle2 className="shrink-0 text-sage" size={18} aria-hidden="true" />
                <span className="text-sm font-semibold text-ink">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
