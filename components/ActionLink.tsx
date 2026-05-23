import Link from "next/link";
import type { LucideIcon } from "lucide-react";

type ActionLinkProps = {
  href: string;
  children: React.ReactNode;
  icon?: LucideIcon;
  variant?: "primary" | "secondary" | "light";
};

export function ActionLink({ href, children, icon: Icon, variant = "primary" }: ActionLinkProps) {
  const classes = {
    primary: "bg-ink text-white hover:bg-rosewood",
    secondary: "bg-white text-ink ring-1 ring-rose-100 hover:bg-petal",
    light: "bg-petal text-rosewood hover:bg-blush"
  };

  return (
    <Link
      href={href}
      className={[
        "focus-ring inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-bold shadow-tight transition",
        classes[variant]
      ].join(" ")}
    >
      {Icon ? <Icon size={18} aria-hidden="true" /> : null}
      <span>{children}</span>
    </Link>
  );
}
