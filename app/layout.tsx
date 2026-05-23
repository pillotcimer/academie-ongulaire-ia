import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { MobileNav } from "@/components/MobileNav";

export const metadata: Metadata = {
  title: "OngleMentor AI",
  description:
    "Formation ongulaire mobile-first avec parcours guidé, matériel recommandé, progression et coach IA photo."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body>
        <Header />
        <main className="pb-24 md:pb-0">{children}</main>
        <MobileNav />
      </body>
    </html>
  );
}
