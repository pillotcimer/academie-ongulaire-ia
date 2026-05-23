import { ActionLink } from "@/components/ActionLink";
import { SectionHeading } from "@/components/SectionHeading";
import { TrainingLessonCard } from "@/components/TrainingLessonCard";
import { allTrainingLessons, beginnerPremiumLessons } from "@/data/content";
import { Camera, Sparkles } from "lucide-react";

export default function BeginnerModulePage() {
  const allLessonIds = allTrainingLessons.map((lesson) => lesson.id);

  return (
    <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <SectionHeading
          eyebrow="Débutant 49 €"
          title="Formation complète débutante en mode test"
          text="Le parcours premium est ouvert pour tester l'expérience sans paiement réel : matériel, anatomie, préparation, capsule, gel, limage, finition et entraînement final."
        />
        <div className="flex flex-col gap-3 sm:flex-row">
          <ActionLink href="/formation#debutant-49" icon={Sparkles} variant="secondary">
            Voir l'offre
          </ActionLink>
          <ActionLink href="/coach-ia" icon={Camera} variant="light">
            Corriger un exercice
          </ActionLink>
        </div>
      </div>
      <div className="mt-8 space-y-4">
        {beginnerPremiumLessons.map((lesson) => (
          <TrainingLessonCard key={lesson.id} lesson={lesson} allLessonIds={allLessonIds} />
        ))}
      </div>
    </section>
  );
}
