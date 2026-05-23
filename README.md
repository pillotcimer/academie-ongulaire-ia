# OngleMentor AI

Application web responsive mobile-first pour une formation de prothésie ongulaire avec parcours gratuit, formation débutante premium en mode test, matériel recommandé, tableau de bord, progression locale et coach IA photo.

## Lancer en local

```bash
npm install
npm run dev
```

Puis ouvrir `http://localhost:3000`.

## Coach IA OpenAI Vision

Créer un fichier `.env.local` à la racine du projet :

```bash
OPENAI_API_KEY=sk-votre-cle-openai
```

Si la clé est absente, le coach IA garde automatiquement le mode démo.

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

## Parcours inclus

- Formation gratuite : matériel de base, hygiène, préparation de l'ongle, exercice pratique et analyse IA gratuite en mode démo.
- Débutant 49 € : parcours premium accessible en mode test sans paiement réel.
- Progression locale : les leçons terminées sont sauvegardées dans `localStorage`.

## Prévu pour la suite

- Brancher Supabase pour les comptes élèves, les progressions et les photos.
- Ajouter un historique serveur des analyses IA.
- Ajouter Stripe ou une autre solution de paiement.
