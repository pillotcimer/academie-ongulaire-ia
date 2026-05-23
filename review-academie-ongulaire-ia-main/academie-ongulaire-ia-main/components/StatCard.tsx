type StatCardProps = {
  label: string;
  value: string;
  detail: string;
};

export function StatCard({ label, value, detail }: StatCardProps) {
  return (
    <article className="rounded-lg border border-rose-100 bg-white p-5 shadow-tight">
      <p className="text-sm font-semibold text-muted">{label}</p>
      <p className="mt-2 text-2xl font-black text-ink">{value}</p>
      <p className="mt-1 text-sm leading-6 text-muted">{detail}</p>
    </article>
  );
}
