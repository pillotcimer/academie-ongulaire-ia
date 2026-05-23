import { ActionLink } from "@/components/ActionLink";
import { LessonCard } from "@/components/LessonCard";
import { SectionHeading } from "@/components/SectionHeading";
import { intermediateLessons } from "@/data/content";
import { Camera } from "lucide-react";

export default function IntermediateModulePage() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <SectionHeading
          eyebrow="Module intermédiaire"
          title="Construire plus propre, plus solide et plus vite"
          text="Chablon, gainage, remplissage, formes, french, babyboomer et correction des défauts visibles."
        />
        <ActionLink href="/coach-ia" icon={Camera} variant="secondary">
          Analyser une pose
        </ActionLink>
      </div>
      <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {intermediateLessons.map((lesson) => (
          <LessonCard key={lesson.id} lesson={lesson} />
        ))}
      </div>
    </section>
  );
}
