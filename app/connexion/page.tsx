import { Mail, LockKeyhole, UserRound } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";

export default function LoginPage() {
  return (
    <section className="mx-auto grid max-w-6xl gap-8 px-4 py-10 sm:px-6 md:grid-cols-[0.9fr_1.1fr] md:items-center lg:px-8">
      <div>
        <SectionHeading
          eyebrow="Compte élève"
          title="Connexion et inscription prêtes pour la suite"
          text="La page est déjà dessinée pour une future connexion Supabase. Pour l'instant, le formulaire sert à valider l'expérience."
        />
        <div className="mt-6 rounded-lg border border-rose-100 bg-white p-5 shadow-tight">
          <h2 className="text-lg font-bold text-ink">Ce qui sera branché plus tard</h2>
          <ul className="mt-4 space-y-3 text-sm leading-6 text-muted">
            <li>Création de compte élève</li>
            <li>Connexion sécurisée</li>
            <li>Sauvegarde des scores et photos</li>
            <li>Accès selon l'offre choisie</li>
          </ul>
        </div>
      </div>

      <form className="rounded-lg border border-rose-100 bg-white p-5 shadow-soft">
        <div className="flex items-center gap-3">
          <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-petal text-rosewood">
            <UserRound size={22} aria-hidden="true" />
          </span>
          <div>
            <h1 className="text-2xl font-black text-ink">Bienvenue</h1>
            <p className="text-sm text-muted">Connecte-toi ou crée ton accès.</p>
          </div>
        </div>

        <label className="mt-6 block text-sm font-bold text-ink" htmlFor="email">
          Email
        </label>
        <div className="mt-2 flex items-center gap-3 rounded-lg border border-rose-100 bg-petal px-4 py-3">
          <Mail className="shrink-0 text-rosewood" size={18} aria-hidden="true" />
          <input id="email" type="email" placeholder="ton@email.fr" className="focus-ring w-full bg-transparent text-sm text-ink placeholder:text-muted" />
        </div>

        <label className="mt-5 block text-sm font-bold text-ink" htmlFor="password">
          Mot de passe
        </label>
        <div className="mt-2 flex items-center gap-3 rounded-lg border border-rose-100 bg-petal px-4 py-3">
          <LockKeyhole className="shrink-0 text-rosewood" size={18} aria-hidden="true" />
          <input id="password" type="password" placeholder="••••••••" className="focus-ring w-full bg-transparent text-sm text-ink placeholder:text-muted" />
        </div>

        <button
          type="button"
          className="focus-ring mt-6 min-h-12 w-full rounded-full bg-ink px-5 py-3 text-sm font-bold text-white shadow-tight transition hover:bg-rosewood"
        >
          Continuer
        </button>
        <button
          type="button"
          className="focus-ring mt-3 min-h-12 w-full rounded-full bg-petal px-5 py-3 text-sm font-bold text-rosewood transition hover:bg-blush"
        >
          Créer un compte
        </button>
      </form>
    </section>
  );
}
