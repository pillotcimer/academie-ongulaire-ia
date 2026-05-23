"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { BookOpen, Camera, Home, LayoutDashboard, UserRound } from "lucide-react";

const items = [
  { href: "/", label: "Accueil", icon: Home },
  { href: "/formation", label: "Cours", icon: BookOpen },
  { href: "/coach-ia", label: "Coach", icon: Camera },
  { href: "/dashboard", label: "Élève", icon: LayoutDashboard },
  { href: "/connexion", label: "Compte", icon: UserRound }
];

export function MobileNav() {
  const pathname = usePathname();

  return (
    <nav className="fixed inset-x-0 bottom-0 z-50 border-t border-rose-100 bg-white/95 px-2 py-2 shadow-[0_-12px_28px_rgba(36,33,36,0.08)] backdrop-blur-xl md:hidden">
      <div className="mx-auto grid max-w-md grid-cols-5 gap-1">
        {items.map((item) => {
          const Icon = item.icon;
          const active = pathname === item.href;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={[
                "focus-ring flex min-h-14 flex-col items-center justify-center rounded-lg px-1 text-[11px] font-semibold transition",
                active ? "bg-petal text-rosewood" : "text-muted hover:bg-rose-50 hover:text-ink"
              ].join(" ")}
            >
              <Icon size={20} aria-hidden="true" />
              <span className="mt-1 leading-none">{item.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
