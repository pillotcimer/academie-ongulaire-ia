import Link from "next/link";
import { ArrowLeft, BookOpen, CheckCircle2, Lightbulb, XCircle } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { trainingCategories } from "@/data/trainingCategories";

export default function VisualManualPage() {
  return (
    <div>
      <section className="border-b border-rose-100 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
          <Link href="/formation" className="focus-ring inline-flex items-center gap-2 rounded-full text-sm font-bold text-rosewood">
            <ArrowLeft size={16} aria-hidden="true" />
            Retour
          </Link>
          <div className="mt-6">
            <SectionHeading
              eyebrow="Manuel visuel"
              title="Les repères à garder sous les yeux"
              text="Des fiches courtes pour vérifier le geste sans relire une longue leçon."
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid gap-4 lg:grid-cols-2">
          {trainingCategories.map((category) =>
            category.manualCards.map((card) => (
              <article key={card.id} className="overflow-hidden rounded-lg border border-rose-100 bg-white shadow-tight">
                <div className="grid gap-0 sm:grid-cols-[12rem_1fr]">
                  <div className="relative aspect-video bg-petal sm:aspect-auto">
                    <img src={card.imageUrl} alt="" className="h-full w-full object-cover" />
                    <span className="absolute left-3 top-3 inline-flex items-center gap-2 rounded-full bg-white/92 px-3 py-1 text-xs font-black text-rosewood">
                      <BookOpen size={13} aria-hidden="true" />
                      Guide
                    </span>
                  </div>
                  <div className="p-4">
                    <p className="text-xs font-black uppercase tracking-[0.12em] text-rosewood">{category.title}</p>
                    <h2 className="mt-2 text-lg font-black leading-tight text-ink">{card.title}</h2>
                    <div className="mt-4 grid gap-3">
                      <ManualLine title="Correct" text={card.correct} icon="check" />
                      <ManualLine title="À éviter" text={card.avoid} icon="avoid" />
                      <ManualLine title="Astuce pro" text={card.proTip} icon="tip" />
                    </div>
                  </div>
                </div>
              </article>
            ))
          )}
        </div>
      </section>
    </div>
  );
}

function ManualLine({ title, text, icon }: { title: string; text: string; icon: "check" | "avoid" | "tip" }) {
  const Icon = icon === "avoid" ? XCircle : icon === "tip" ? Lightbulb : CheckCircle2;

  return (
    <div className="rounded-lg bg-petal p-3">
      <p className="flex items-center gap-2 text-sm font-black text-ink">
        <Icon size={15} aria-hidden="true" />
        {title}
      </p>
      <p className="mt-1 text-sm leading-6 text-muted">{text}</p>
    </div>
  );
}
