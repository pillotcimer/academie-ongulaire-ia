import { BookOpen, Camera, GraduationCap } from "lucide-react";
import { ActionLink } from "@/components/ActionLink";
import { SectionHeading } from "@/components/SectionHeading";
import { TrainingCategoryDashboard } from "@/components/TrainingCategoryDashboard";
import { TrainingProgressOverview } from "@/components/TrainingProgressOverview";

export default function FormationPage() {
  return (
    <div>
      <section className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid gap-5 lg:grid-cols-[1fr_19rem] lg:items-end">
          <SectionHeading
            eyebrow="Formation"
            title="Ton école ongulaire en parcours guidé"
            text="Choisis un module, démarre la prochaine leçon, valide ton exercice puis avance comme dans une vraie application de formation."
          />
          <div className="grid grid-cols-3 gap-2 lg:grid-cols-1">
            <ActionLink href="/formation/materiel-poste" icon={GraduationCap}>
              Démarrer
            </ActionLink>
            <ActionLink href="/formation/manuel-visuel" variant="secondary" icon={BookOpen}>
              Manuel
            </ActionLink>
            <ActionLink href="/coach-ia" variant="light" icon={Camera}>
              IA
            </ActionLink>
          </div>
        </div>

        <div className="mt-6">
          <TrainingProgressOverview />
        </div>
      </section>

      <section className="border-y border-rose-100 bg-white/72 px-4 py-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="mb-5">
            <SectionHeading eyebrow="Modules" title="Choisis ton parcours" />
          </div>
          <TrainingCategoryDashboard />
        </div>
      </section>
    </div>
  );
}
