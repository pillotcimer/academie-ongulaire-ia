import { CoachAnalyzer } from "@/components/CoachAnalyzer";
import { SectionHeading } from "@/components/SectionHeading";

export default function CoachPage() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="Coach IA photo"
        title="Analyse ton exercice et récupère une correction claire"
        text="La V1 prépare déjà le parcours pour brancher plus tard une vraie API IA. Aujourd'hui, l'analyse simulée permet de tester l'expérience complète."
      />
      <div className="mt-8">
        <CoachAnalyzer />
      </div>
    </section>
  );
}
