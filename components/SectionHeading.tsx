type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  text?: string;
  align?: "left" | "center";
};

export function SectionHeading({ eyebrow, title, text, align = "left" }: SectionHeadingProps) {
  return (
    <div className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      {eyebrow ? (
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.16em] text-rosewood">{eyebrow}</p>
      ) : null}
      <h2 className="text-2xl font-bold text-ink sm:text-3xl">{title}</h2>
      {text ? <p className="mt-3 text-base leading-7 text-muted">{text}</p> : null}
    </div>
  );
}
