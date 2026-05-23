import { CheckCircle2, PackageCheck, ShoppingBag, SlidersHorizontal } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { materialBudgetGuides, materialCategories, productCards } from "@/data/content";

export default function MaterialPage() {
  return (
    <div>
      <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Matériel recommandé"
          title="Choisis ton matériel selon ton budget et ton objectif"
          text="Le but n'est pas d'acheter tout le plus cher. Le bon kit commence par l'indispensable, puis ajoute du confort quand tu t'entraînes vraiment."
        />
        <div className="mt-8 grid gap-4 lg:grid-cols-3">
          {materialBudgetGuides.map((budget) => (
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
              <p className="mt-4 rounded-lg bg-petal px-3 py-2 text-sm font-bold text-ink">{budget.profile}</p>
              <p className="mt-4 text-sm leading-7 text-muted">{budget.advice}</p>
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
          <SectionHeading
            eyebrow="Catégories"
            title="Les achats à comprendre avant de commander"
            text="Chaque catégorie a un rôle précis. L'objectif est de savoir ce qui est obligatoire, ce qui améliore le confort et ce qui peut attendre."
          />
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {materialCategories.map((category) => (
              <article key={category.title} className="rounded-lg border border-rose-100 bg-petal p-4">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="font-bold text-ink">{category.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-muted">{category.advice}</p>
                  </div>
                  <span className="rounded-full bg-white px-3 py-1 text-xs font-bold text-rosewood">{category.mustHave}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            eyebrow="Repères produits"
            title="Exemples de prix pour comparer sans se perdre"
            text="Ces cartes servent de repères indicatifs pour comprendre combien prévoir avant de chercher des marques précises."
          />
          <div className="flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-bold text-rosewood shadow-tight ring-1 ring-rose-100">
            <SlidersHorizontal size={17} aria-hidden="true" />
            Comparaison budget
          </div>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {productCards.map((product) => (
            <article key={`${product.category}-${product.name}`} className="rounded-lg border border-rose-100 bg-white p-5 shadow-tight">
              <div className="flex items-start gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-petal text-rosewood">
                  <PackageCheck size={19} aria-hidden="true" />
                </span>
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.14em] text-rosewood">{product.category}</p>
                  <h3 className="mt-1 font-bold text-ink">{product.name}</h3>
                </div>
              </div>
              <p className="mt-4 text-2xl font-black text-ink">{product.price}</p>
              <p className="mt-1 text-sm font-semibold text-sage">{product.level}</p>
              <p className="mt-3 text-sm leading-6 text-muted">{product.note}</p>
            </article>
          ))}
        </div>

        <div className="mt-8 rounded-lg border border-rose-100 bg-petal p-5">
          <div className="flex items-start gap-3">
            <CheckCircle2 className="mt-1 shrink-0 text-sage" size={20} aria-hidden="true" />
            <p className="text-sm leading-7 text-muted">
              Conseil d'achat : commence avec un panier simple, garde une marge pour remplacer les consommables, et n'achète une ponceuse ou une table plus chère que si tu t'entraînes vraiment plusieurs fois par semaine.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
