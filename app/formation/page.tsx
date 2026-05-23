import { ActionLink } from "@/components/ActionLink";
import { FeatureCard } from "@/components/FeatureCard";
import { SectionHeading } from "@/components/SectionHeading";
import { TrainingLessonCard } from "@/components/TrainingLessonCard";
import { allTrainingLessons, beginnerPremiumLessons, freeCourseLessons, trainingPillars } from "@/data/content";
import { Camera, CheckCircle2, GraduationCap, LockKeyhole, Sparkles } from "lucide-react";

export default function FormationPage() {
  const allLessonIds = allTrainingLessons.map((lesson) => lesson.id);

  return (
    <div>
      <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-[1.1fr_0.9fr] md:items-end">
          <SectionHeading
            eyebrow="Formation"
            title="Une vraie progression, du test gratuit à la formation débutante complète"
            text="Commence sans payer avec les bases, puis accède en mode test au parcours premium débutant 49 € pour voir toute l'expérience."
          />
          <div className="flex flex-col gap-3 sm:flex-row md:justify-end">
            <ActionLink href="#formation-gratuite" icon={GraduationCap}>
              Formation gratuite
            </ActionLink>
            <ActionLink href="#debutant-49" variant="secondary" icon={Sparkles}>
              Débutant 49 €
            </ActionLink>
          </div>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {trainingPillars.map((pillar) => (
            <FeatureCard key={pillar.title} title={pillar.title} text={pillar.text} icon={pillar.icon} />
          ))}
        </div>
      </section>

      <section id="formation-gratuite" className="border-y border-rose-100 bg-white px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <SectionHeading
              eyebrow="Formation gratuite"
              title="3 modules pour démarrer sans paiement"
              text="Matériel de base, hygiène, préparation de l'ongle et un premier exercice pratique avec analyse IA gratuite en mode démo."
            />
            <div className="rounded-lg border border-rose-100 bg-petal p-5">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="mt-1 shrink-0 text-sage" size={20} aria-hidden="true" />
                <div>
                  <h3 className="font-bold text-ink">Inclus gratuitement</h3>
                  <p className="mt-2 text-sm leading-6 text-muted">
                    Accès direct, aucune carte bancaire, 1 exercice photo et un bouton pour tester le coach IA.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 space-y-4">
            {freeCourseLessons.map((lesson, index) => (
              <TrainingLessonCard
                key={lesson.id}
                lesson={lesson}
                allLessonIds={allLessonIds}
                nextLessonId={freeCourseLessons[index + 1]?.id}
              />
            ))}
          </div>

          <div className="mt-6">
            <ActionLink href="/coach-ia" icon={Camera} variant="light">
              Tester une analyse IA gratuite
            </ActionLink>
          </div>
        </div>
      </section>

      <section id="debutant-49" className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <SectionHeading
            eyebrow="Débutant 49 €"
            title="Le parcours premium débutant, accessible en mode test"
            text="Pas de paiement réel pour l'instant : le bouton mode test permet de parcourir la formation comme une élève payante."
          />
          <article className="rounded-lg border border-rosewood bg-ink p-5 text-white shadow-soft">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm font-bold text-blush">Formation premium</p>
                <p className="mt-2 text-4xl font-black">49 €</p>
              </div>
              <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-white/10 text-blush">
                <LockKeyhole size={21} aria-hidden="true" />
              </span>
            </div>
            <p className="mt-4 text-sm leading-7 text-white/72">
              Paiement désactivé pendant les tests. Le contenu reste accessible pour valider l'expérience complète.
            </p>
            <div className="mt-5">
              <ActionLink href="/modules/debutant" variant="secondary">
                Accéder en mode test
              </ActionLink>
            </div>
          </article>
        </div>

        <div className="mt-8 space-y-4">
          {beginnerPremiumLessons.map((lesson, index) => (
            <TrainingLessonCard
              key={lesson.id}
              lesson={lesson}
              allLessonIds={allLessonIds}
              nextLessonId={beginnerPremiumLessons[index + 1]?.id}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
