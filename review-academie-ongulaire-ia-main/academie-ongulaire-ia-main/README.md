# OngleMentor AI

Application web responsive mobile-first pour une formation de prothésie ongulaire avec parcours de cours, matériel recommandé, tableau de bord, progression et coach IA photo simulé.

## Lancer en local

```bash
npm install
npm run dev
```

Puis ouvrir `http://localhost:3000`.

## Pages incluses

- Accueil : `/`
- Formation : `/formation`
- Tableau de bord élève : `/dashboard`
- Module débutant : `/modules/debutant`
- Module intermédiaire : `/modules/intermediaire`
- Matériel recommandé : `/materiel`
- Coach IA photo : `/coach-ia`
- Progression : `/progression`
- Tarifs : `/tarifs`
- Connexion / inscription : `/connexion`

## Prévu pour la suite

- Brancher Supabase pour les comptes élèves, les progressions et les photos.
- Remplacer l'analyse simulée par une vraie API IA.
- Ajouter Stripe ou une autre solution de paiement.
