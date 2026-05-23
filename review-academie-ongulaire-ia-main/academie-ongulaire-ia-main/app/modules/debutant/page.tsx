import { ActionLink } from "@/components/ActionLink";
import { LessonCard } from "@/components/LessonCard";
import { SectionHeading } from "@/components/SectionHeading";
import { beginnerLessons } from "@/data/content";
import { Camera } from "lucide-react";

export default function BeginnerModulePage() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <SectionHeading
          eyebrow="Module débutant"
          title="Les fondations avant de poser sur modèle"
          text="Commence par l'hygiène et la préparation, puis avance vers capsule, gel, limage et finition."
        />
        <ActionLink href="/coach-ia" icon={Camera} variant="secondary">
          Corriger un exercice
        </ActionLink>
      </div>
      <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {beginnerLessons.map((lesson) => (
          <LessonCard key={lesson.id} lesson={lesson} />
        ))}
      </div>
    </section>
  );
}
