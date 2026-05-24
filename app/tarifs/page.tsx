import { CheckCircle2 } from "lucide-react";
import { ActionLink } from "@/components/ActionLink";
import { SectionHeading } from "@/components/SectionHeading";
import { pricingPlans } from "@/data/content";

export default function PricingPage() {
  const hrefByPlan: Record<string, string> = {
    "Découverte gratuite": "/formation/materiel-poste",
    "Débutant complet": "/modules/debutant",
    Intermédiaire: "/modules/intermediaire"
  };

  return (
    <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="Tarifs"
        title="Trois offres simples pour tester, apprendre ou progresser avec l'IA"
        text="Le paiement réel n'est pas encore activé. Les boutons ouvrent les parcours en mode test pour valider la formation avant Stripe."
      />

      <div className="mt-8 grid gap-4 lg:grid-cols-3">
        {pricingPlans.map((plan) => (
          <article
            key={plan.title}
            className={[
              "rounded-lg border p-5 shadow-soft",
              plan.highlighted ? "border-rosewood bg-ink text-white" : "border-rose-100 bg-white text-ink"
            ].join(" ")}
          >
            <p className={plan.highlighted ? "text-sm font-bold text-blush" : "text-sm font-bold text-rosewood"}>{plan.title}</p>
            <div className="mt-3 flex items-end gap-2">
              <span className="text-4xl font-black">{plan.price}</span>
              <span className={plan.highlighted ? "pb-1 text-sm text-white/60" : "pb-1 text-sm text-muted"}>accès</span>
            </div>
            <p className={plan.highlighted ? "mt-4 text-sm leading-7 text-white/70" : "mt-4 text-sm leading-7 text-muted"}>{plan.description}</p>
            <ul className="mt-5 space-y-3">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-start gap-2 text-sm leading-6">
                  <CheckCircle2 className={plan.highlighted ? "mt-1 shrink-0 text-blush" : "mt-1 shrink-0 text-sage"} size={16} aria-hidden="true" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <ActionLink href={hrefByPlan[plan.title] ?? "/formation"} variant={plan.highlighted ? "secondary" : "primary"}>
                {plan.price === "0 €" ? "Commencer gratuitement" : "Accéder en mode test"}
              </ActionLink>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
