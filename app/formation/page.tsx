import { BookOpen, Camera, GraduationCap, Sparkles } from "lucide-react";
import { ActionLink } from "@/components/ActionLink";
import { FeatureCard } from "@/components/FeatureCard";
import { SectionHeading } from "@/components/SectionHeading";
import { TrainingCategoryDashboard } from "@/components/TrainingCategoryDashboard";
import { trainingPillars } from "@/data/content";

export default function FormationPage() {
  return (
    <div>
      <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[1fr_22rem] lg:items-end">
          <SectionHeading
            eyebrow="Formation"
            title="Choisis une catégorie, puis avance étape par étape"
            text="La formation fonctionne maintenant comme un tableau de bord : tu sélectionnes le thème que tu veux travailler, puis tu suis une seule leçon à la fois."
          />
          <div className="rounded-lg border border-rose-100 bg-white p-4 shadow-tight">
            <p className="flex items-center gap-2 text-sm font-black text-ink">
              <Sparkles size={17} aria-hidden="true" />
              Mode test ouvert
            </p>
            <p className="mt-2 text-sm leading-6 text-muted">
              Les catégories premium sont accessibles sans paiement réel pour tester l’expérience complète.
            </p>
          </div>
        </div>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <ActionLink href="/formation/materiel-poste" icon={GraduationCap}>
            Commencer gratuitement
          </ActionLink>
          <ActionLink href="/formation/manuel-visuel" variant="secondary" icon={BookOpen}>
            Ouvrir le manuel visuel
          </ActionLink>
          <ActionLink href="/coach-ia" variant="light" icon={Camera}>
            Tester le coach IA
          </ActionLink>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {trainingPillars.map((pillar) => (
            <FeatureCard key={pillar.title} title={pillar.title} text={pillar.text} icon={pillar.icon} />
          ))}
        </div>
      </section>

      <section className="border-y border-rose-100 bg-white/72 px-4 py-10 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeading
              eyebrow="Catégories"
              title="Tableau de bord de la formation"
              text="Chaque carte montre le niveau, le nombre de leçons, la durée, ton statut et ta progression."
            />
          </div>

          <TrainingCategoryDashboard />
        </div>
      </section>
    </div>
  );
}
