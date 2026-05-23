type ProgressRingProps = {
  value: number;
  label: string;
};

export function ProgressRing({ value, label }: ProgressRingProps) {
  return (
    <div className="flex items-center gap-4">
      <div
        className="grid h-24 w-24 shrink-0 place-items-center rounded-full"
        style={{
          background: `conic-gradient(#A94C67 ${value * 3.6}deg, #F7DCE5 0deg)`
        }}
      >
        <div className="grid h-20 w-20 place-items-center rounded-full bg-white text-xl font-black text-ink shadow-tight">
          {value}%
        </div>
      </div>
      <div>
        <p className="text-sm font-bold uppercase tracking-[0.14em] text-rosewood">{label}</p>
        <p className="mt-1 text-sm leading-6 text-muted">Continue les leçons courtes et envoie une photo après chaque exercice important.</p>
      </div>
    </div>
  );
}
