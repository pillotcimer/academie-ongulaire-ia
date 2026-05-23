import Link from "next/link";
import { Sparkles } from "lucide-react";

const navItems = [
  { href: "/formation", label: "Formation" },
  { href: "/materiel", label: "Matériel" },
  { href: "/coach-ia", label: "Coach IA" },
  { href: "/tarifs", label: "Tarifs" }
];

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-rose-100/80 bg-white/88 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2 focus-ring rounded-lg">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-ink text-white shadow-tight">
            <Sparkles size={18} aria-hidden="true" />
          </span>
          <span className="text-base font-bold text-ink">OngleMentor AI</span>
        </Link>

        <nav className="hidden items-center gap-6 text-sm font-medium text-muted md:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="transition hover:text-ink focus-ring rounded-lg">
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/connexion"
          className="hidden rounded-full bg-ink px-4 py-2 text-sm font-semibold text-white shadow-tight transition hover:bg-rosewood focus-ring md:inline-flex"
        >
          Connexion
        </Link>
      </div>
    </header>
  );
}
