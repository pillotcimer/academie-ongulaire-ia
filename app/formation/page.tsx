import { ActionLink } from "@/components/ActionLink";
import { FeatureCard } from "@/components/FeatureCard";
import { LessonCard } from "@/components/LessonCard";
import { SectionHeading } from "@/components/SectionHeading";
import { beginnerLessons, intermediateLessons, trainingPillars } from "@/data/content";
import { Camera, Layers3 } from "lucide-react";

export default function FormationPage() {
  return (
    <div>
      <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-[1.1fr_0.9fr] md:items-end">
          <SectionHeading
            eyebrow="Formation"
            title="Un parcours de A à Z pour passer des bases aux poses propres"
            text="Chaque module contient une leçon courte, une consigne de pratique et un lien vers le coach IA pour vérifier ton exercice."
          />
          <div className="flex flex-col gap-3 sm:flex-row md:justify-end">
            <ActionLink href="/modules/debutant">Module débutant</ActionLink>
            <ActionLink href="/modules/intermediaire" variant="secondary" icon={Layers3}>
              Intermédiaire
            </ActionLink>
          </div>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {trainingPillars.map((pillar) => (
            <FeatureCard key={pillar.title} title={pillar.title} text={pillar.text} icon={pillar.icon} />
          ))}
        </div>
      </section>

      <section className="border-y border-rose-100 bg-white px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeading eyebrow="Débutant" title="Les bases indispensables" />
            <ActionLink href="/coach-ia" icon={Camera} variant="light">
              Envoyer une photo
            </ActionLink>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {beginnerLessons.slice(0, 6).map((lesson) => (
              <LessonCard key={lesson.id} lesson={lesson} />
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Intermédiaire" title="Les techniques qui donnent un rendu plus professionnel" />
        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {intermediateLessons.slice(0, 6).map((lesson) => (
            <LessonCard key={lesson.id} lesson={lesson} />
          ))}
        </div>
      </section>
    </div>
  );
}
