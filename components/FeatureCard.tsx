import type { LucideIcon } from "lucide-react";

type FeatureCardProps = {
  title: string;
  text: string;
  icon: LucideIcon;
};

export function FeatureCard({ title, text, icon: Icon }: FeatureCardProps) {
  return (
    <article className="rounded-lg border border-rose-100 bg-white p-5 shadow-tight">
      <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-petal text-rosewood">
        <Icon size={21} aria-hidden="true" />
      </div>
      <h3 className="text-lg font-bold text-ink">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-muted">{text}</p>
    </article>
  );
}
