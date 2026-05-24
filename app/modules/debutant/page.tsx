import { Camera, Sparkles } from "lucide-react";
import { ActionLink } from "@/components/ActionLink";
import { SectionHeading } from "@/components/SectionHeading";
import { TrainingCategoryDashboard } from "@/components/TrainingCategoryDashboard";
import { TrainingProgressOverview } from "@/components/TrainingProgressOverview";

export default function BeginnerModulePage() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <SectionHeading
          eyebrow="Débutant 49 €"
          title="Formation débutante en parcours"
          text="Tout est organisé par modules courts, avec progression, badges, leçon active et exercices IA."
        />
        <div className="grid grid-cols-2 gap-3 sm:flex">
          <ActionLink href="/formation" icon={Sparkles} variant="secondary">
            Modules
          </ActionLink>
          <ActionLink href="/coach-ia" icon={Camera} variant="light">
            Coach IA
          </ActionLink>
        </div>
      </div>

      <div className="mt-6">
        <TrainingProgressOverview />
      </div>

      <div className="mt-6">
        <TrainingCategoryDashboard />
      </div>
    </section>
  );
}
