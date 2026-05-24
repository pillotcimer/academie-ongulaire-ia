import { Camera, Sparkles } from "lucide-react";
import { ActionLink } from "@/components/ActionLink";
import { SectionHeading } from "@/components/SectionHeading";
import { TrainingCategoryDashboard } from "@/components/TrainingCategoryDashboard";

export default function BeginnerModulePage() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <SectionHeading
          eyebrow="Débutant 49 €"
          title="Formation débutante en catégories claires"
          text="Le parcours premium reste ouvert en mode test. Au lieu d’une longue page, tu choisis le thème à travailler puis tu démarres une leçon courte."
        />
        <div className="flex flex-col gap-3 sm:flex-row">
          <ActionLink href="/formation" icon={Sparkles} variant="secondary">
            Voir les catégories
          </ActionLink>
          <ActionLink href="/coach-ia" icon={Camera} variant="light">
            Corriger un exercice
          </ActionLink>
        </div>
      </div>

      <div className="mt-8">
        <TrainingCategoryDashboard />
      </div>
    </section>
  );
}
