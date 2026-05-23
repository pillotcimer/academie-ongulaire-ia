import {
  Award,
  BookOpen,
  Camera,
  CheckCircle2,
  GraduationCap,
  Layers3,
  Sparkles,
  Target,
  Trophy,
  Wand2
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type Lesson = {
  id: number;
  title: string;
  duration: string;
  level: "Débutant" | "Intermédiaire";
  summary: string;
  status: "Disponible" | "En cours" | "À débloquer";
};

export type MaterialBudget = {
  title: string;
  range: string;
  description: string;
  items: string[];
  bestFor: string;
};

export type PricingPlan = {
  title: string;
  price: string;
  description: string;
  features: string[];
  highlighted?: boolean;
};

export type DashboardStat = {
  label: string;
  value: string;
  detail: string;
};

export type HomeFeature = {
  title: string;
  text: string;
  icon: LucideIcon;
};

export const homeFeatures: HomeFeature[] = [
  {
    title: "Parcours débutant",
    text: "Les bases essentielles dans le bon ordre : hygiène, anatomie, préparation et première pose.",
    icon: GraduationCap
  },
  {
    title: "Parcours intermédiaire",
    text: "Chablon, gainage, remplissage, french, babyboomer et correction des défauts.",
    icon: Layers3
  },
  {
    title: "Coach IA photo",
    text: "Une analyse claire de tes exercices avec points forts, erreurs et prochaine étape.",
    icon: Camera
  },
  {
    title: "Matériel guidé",
    text: "Trois budgets prêts à suivre pour acheter utile sans se perdre.",
    icon: Sparkles
  }
];

export const beginnerLessons: Lesson[] = [
  {
    id: 1,
    title: "Introduction au métier",
    duration: "18 min",
    level: "Débutant",
    summary: "Comprendre le rôle, les limites et les qualités d'une prothésiste ongulaire.",
    status: "Disponible"
  },
  {
    id: 2,
    title: "Hygiène et sécurité",
    duration: "24 min",
    level: "Débutant",
    summary: "Désinfection, poste propre, contre-indications et gestes à ne jamais négliger.",
    status: "En cours"
  },
  {
    id: 3,
    title: "Anatomie de l'ongle",
    duration: "20 min",
    level: "Débutant",
    summary: "Plaque, cuticule, matrice, bord libre et zones à protéger pendant la pose.",
    status: "Disponible"
  },
  {
    id: 4,
    title: "Matériel indispensable",
    duration: "26 min",
    level: "Débutant",
    summary: "Le kit de départ, les produits prioritaires et les achats à éviter au début.",
    status: "Disponible"
  },
  {
    id: 5,
    title: "Préparation de l'ongle naturel",
    duration: "32 min",
    level: "Débutant",
    summary: "Repousser, matifier, dépoussiérer, primer et préparer sans abîmer.",
    status: "Disponible"
  },
  {
    id: 6,
    title: "Pose de capsule",
    duration: "34 min",
    level: "Débutant",
    summary: "Choisir la bonne taille, coller proprement et corriger l'axe.",
    status: "Disponible"
  },
  {
    id: 7,
    title: "Pose de gel",
    duration: "38 min",
    level: "Débutant",
    summary: "Base, construction, catalysation, apex et quantité de matière.",
    status: "Disponible"
  },
  {
    id: 8,
    title: "Limage",
    duration: "30 min",
    level: "Débutant",
    summary: "Créer une forme nette, équilibrer les côtés et garder une surface régulière.",
    status: "Disponible"
  },
  {
    id: 9,
    title: "Finition",
    duration: "22 min",
    level: "Débutant",
    summary: "Cleaner, top coat, huile cuticules et contrôle final avant photo.",
    status: "Disponible"
  },
  {
    id: 10,
    title: "Erreurs fréquentes",
    duration: "28 min",
    level: "Débutant",
    summary: "Décollements, bosses, capsules mal posées, cuticules touchées et corrections.",
    status: "Disponible"
  }
];

export const intermediateLessons: Lesson[] = [
  {
    id: 1,
    title: "Chablon",
    duration: "42 min",
    level: "Intermédiaire",
    summary: "Placement, fermeture, axe, extension et première construction sur forme.",
    status: "En cours"
  },
  {
    id: 2,
    title: "Gainage",
    duration: "30 min",
    level: "Intermédiaire",
    summary: "Renforcer l'ongle naturel sans extension et garder un résultat fin.",
    status: "Disponible"
  },
  {
    id: 3,
    title: "Remplissage",
    duration: "36 min",
    level: "Intermédiaire",
    summary: "Préparer la repousse, retirer les décollements et replacer l'apex.",
    status: "Disponible"
  },
  {
    id: 4,
    title: "French",
    duration: "34 min",
    level: "Intermédiaire",
    summary: "Sourire net, symétrie, épaisseur et finitions propres.",
    status: "Disponible"
  },
  {
    id: 5,
    title: "Babyboomer",
    duration: "33 min",
    level: "Intermédiaire",
    summary: "Dégradé doux, dosage du blanc et transition naturelle.",
    status: "Disponible"
  },
  {
    id: 6,
    title: "Formes carrée, amande, ballerine",
    duration: "46 min",
    level: "Intermédiaire",
    summary: "Repères visuels, limage et cohérence d'une main complète.",
    status: "Disponible"
  },
  {
    id: 7,
    title: "Gestion de l'épaisseur",
    duration: "28 min",
    level: "Intermédiaire",
    summary: "Savoir où ajouter, où affiner et comment garder une pose solide.",
    status: "Disponible"
  },
  {
    id: 8,
    title: "Correction des défauts",
    duration: "31 min",
    level: "Intermédiaire",
    summary: "Rattraper une bosse, une asymétrie, un apex plat ou un bord trop épais.",
    status: "Disponible"
  },
  {
    id: 9,
    title: "Vitesse de travail",
    duration: "26 min",
    level: "Intermédiaire",
    summary: "Gagner du temps sans perdre la propreté ni la sécurité.",
    status: "Disponible"
  },
  {
    id: 10,
    title: "Préparation cliente",
    duration: "25 min",
    level: "Intermédiaire",
    summary: "Accueil, questions, choix de prestation, photos et suivi après pose.",
    status: "Disponible"
  }
];

export const materialBudgets: MaterialBudget[] = [
  {
    title: "Budget débutant",
    range: "80 € à 150 €",
    description: "Pour s'entraîner à la maison avec le minimum sérieux.",
    bestFor: "Tester sans acheter trop cher",
    items: [
      "Lampe UV/LED 48W",
      "Limes 100/180 et buffer",
      "Capsules + colle",
      "Gel de construction transparent",
      "Base coat et top coat",
      "Cleaner, primer et cotons",
      "Repoussoir cuticules",
      "Pinceau gel taille moyenne"
    ]
  },
  {
    title: "Budget sérieux",
    range: "150 € à 300 €",
    description: "Pour progresser plus vite avec un poste plus confortable.",
    bestFor: "Apprendre régulièrement",
    items: [
      "Lampe UV/LED plus stable",
      "Ponceuse douce avec embouts",
      "Capsules + chablons",
      "Gels clear, cover et blanc",
      "Pinceaux gel et liner",
      "Aspirateur à poussière compact",
      "Lampe de bureau orientable",
      "Boîte de rangement produits"
    ]
  },
  {
    title: "Budget pro",
    range: "300 € à 600 €",
    description: "Pour créer un vrai espace de pratique et préparer des clientes tests.",
    bestFor: "Objectif niveau salon",
    items: [
      "Lampe professionnelle",
      "Ponceuse avec contrôle précis",
      "Aspirateur puissant",
      "Table stable et chaise réglable",
      "Gamme complète base, gels, top",
      "Chablons de qualité",
      "Pinceaux multiples",
      "Rangement hygiénique séparé"
    ]
  }
];

export const allMaterialItems = [
  "lampe UV/LED",
  "ponceuse",
  "limes",
  "buffer",
  "capsules",
  "chablons",
  "gel de construction",
  "base coat",
  "top coat",
  "cleaner",
  "primer",
  "pinceaux",
  "repoussoir cuticules",
  "aspirateur à poussière",
  "table",
  "chaise",
  "lampe de bureau",
  "rangement"
];

export const dashboardStats: DashboardStat[] = [
  {
    label: "Parcours actif",
    value: "Débutant",
    detail: "formation gratuite + premium test"
  },
  {
    label: "Score moyen IA",
    value: "78/100",
    detail: "sur les 4 dernières analyses"
  },
  {
    label: "Série actuelle",
    value: "5 jours",
    detail: "objectif : 3 exercices semaine"
  }
];

export const recentExercises = [
  "Préparation de l'ongle naturel",
  "Pose capsule main d'entraînement",
  "Limage carré court",
  "Construction gel simple"
];

export const badges = [
  {
    title: "Hygiène validée",
    text: "Les gestes de sécurité sont compris.",
    icon: CheckCircle2
  },
  {
    title: "Première pose",
    text: "Une pose complète a été envoyée au coach.",
    icon: Trophy
  },
  {
    title: "Régularité",
    text: "Trois entraînements dans la même semaine.",
    icon: Target
  },
  {
    title: "Technique",
    text: "Score supérieur à 80 sur un exercice.",
    icon: Award
  }
];

export const pricingPlans: PricingPlan[] = [
  {
    title: "Découverte gratuite",
    price: "0 €",
    description: "Pour tester la méthode, préparer son poste et envoyer une première photo.",
    features: [
      "3 modules gratuits",
      "Liste matériel de base",
      "1 exercice pratique",
      "1 analyse IA en mode démo"
    ]
  },
  {
    title: "Débutant complet",
    price: "49 €",
    description: "Le parcours premium pour apprendre les bases de A à Z.",
    highlighted: true,
    features: [
      "9 modules détaillés",
      "Exercices à chaque leçon",
      "Coach IA photo intégré",
      "Accès en mode test sans paiement"
    ]
  },
  {
    title: "Intermédiaire",
    price: "149 €",
    description: "Pour aller vers les techniques plus avancées après les bases.",
    features: [
      "Chablon, gainage, remplissage",
      "French, babyboomer, formes",
      "Historique complet des corrections",
      "Plus d'analyses IA prévues"
    ]
  }
];

export const faqs = [
  {
    question: "Est-ce adapté si je débute totalement ?",
    answer:
      "Oui. Le parcours commence par l'hygiène, l'anatomie, le matériel et les gestes de base avant les poses complètes."
  },
  {
    question: "Faut-il acheter tout le matériel pro dès le début ?",
    answer:
      "Non. La page matériel propose trois budgets pour commencer simplement puis améliorer ton poste au fur et à mesure."
  },
  {
    question: "Le coach IA remplace une formatrice ?",
    answer:
      "Non. Il sert à s'entraîner, repérer les défauts visibles et obtenir des conseils. Pour les gestes à risque, la sécurité reste prioritaire."
  }
];

export const testimonials = [
  {
    name: "Mélissa",
    text: "J'ai enfin compris l'ordre des étapes. Avant je regardais des vidéos au hasard, là j'ai un vrai parcours."
  },
  {
    name: "Sofia",
    text: "L'analyse photo m'a aidée à voir que mon apex était trop plat. C'est concret et facile à suivre."
  },
  {
    name: "Inès",
    text: "La liste du matériel m'a évité d'acheter des choses inutiles dès le départ."
  }
];

export const exerciseOptions = [
  "hygiène du poste",
  "préparation de l'ongle",
  "pose capsule",
  "application gel",
  "chablon",
  "limage",
  "finition",
  "entraînement final"
];

export const analysisByExercise: Record<
  string,
  {
    score: number;
    strengths: string[];
    mistakes: string[];
    advice: string[];
    nextStep: string;
  }
> = {
  "hygiène du poste": {
    score: 88,
    strengths: ["Le poste semble bien dégagé.", "Les outils principaux sont accessibles sans croiser les mains."],
    mistakes: ["La zone propre et la zone poussière pourraient être mieux séparées.", "Prévois une petite poubelle ou un contenant dédié aux cotons utilisés."],
    advice: ["Place les produits liquides loin du bord de table.", "Garde uniquement le matériel nécessaire à l'exercice du jour."],
    nextStep: "Reprends une photo du poste avec les outils propres d'un côté et les consommables de l'autre."
  },
  "préparation de l'ongle": {
    score: 76,
    strengths: ["La plaque semble bien matifiée.", "Les cuticules ne sont pas noyées."],
    mistakes: ["Certaines zones latérales paraissent encore brillantes.", "Le dépoussiérage doit être plus précis."],
    advice: ["Travaille avec une lime douce en suivant le sens de l'ongle.", "Passe le cleaner seulement après avoir retiré toute la poussière."],
    nextStep: "Refais une photo avec une lumière de côté pour vérifier les zones brillantes."
  },
  "pose capsule": {
    score: 74,
    strengths: ["La capsule est bien centrée.", "La longueur est cohérente pour un exercice débutant."],
    mistakes: ["La zone de collage semble légèrement visible.", "Le bord libre manque de symétrie."],
    advice: ["Choisis une capsule qui couvre les côtés sans forcer.", "Lime l'axe avant d'ajouter la matière."],
    nextStep: "Entraîne-toi sur trois capsules en gardant la même longueur."
  },
  "application gel": {
    score: 79,
    strengths: ["La matière est plutôt régulière.", "Les contours restent propres près des cuticules."],
    mistakes: ["L'apex semble trop plat.", "Les côtés pourraient être affinés."],
    advice: ["Ajoute un peu plus de matière au centre.", "Affiner les parallèles après catalysation pour garder une ligne élégante."],
    nextStep: "Refais l'exercice avec une petite bille de gel au centre."
  },
  chablon: {
    score: 71,
    strengths: ["Le chablon suit globalement l'axe du doigt.", "La longueur reste raisonnable."],
    mistakes: ["La fermeture du chablon semble trop ouverte.", "La construction descend légèrement."],
    advice: ["Pince mieux le chablon sous le bord libre.", "Regarde le profil avant de catalyser."],
    nextStep: "Travaille uniquement le placement du chablon pendant 10 minutes."
  },
  limage: {
    score: 82,
    strengths: ["La surface est propre.", "Le volume général est maîtrisé."],
    mistakes: ["Le bord libre manque encore de symétrie.", "Le côté droit paraît un peu plus épais."],
    advice: ["Garde la lime parallèle aux côtés.", "Compare les deux côtés en regardant l'ongle de face."],
    nextStep: "Refais une photo de face et de profil pour contrôler l'équilibre."
  },
  finition: {
    score: 86,
    strengths: ["La brillance est régulière.", "Le contour final est net."],
    mistakes: ["Une petite surcharge est visible près d'un côté.", "Le bord libre pourrait être scellé plus finement."],
    advice: ["Étire le top coat en couche fine.", "Scelle le bord libre sans créer de bourrelet."],
    nextStep: "Passe à une finition couleur claire pour mieux voir les défauts."
  },
  "entraînement final": {
    score: 81,
    strengths: ["L'ordre général des étapes est cohérent.", "La pose a une longueur adaptée pour un niveau débutant."],
    mistakes: ["La régularité entre les doigts peut encore progresser.", "L'épaisseur du bord libre semble varier d'un ongle à l'autre."],
    advice: ["Travaille main complète en gardant la même quantité de matière.", "Photographie chaque profil avant la finition pour voir les différences."],
    nextStep: "Refais l'exercice final sur trois doigts seulement pour améliorer la régularité."
  }
};

export const trainingPillars = [
  {
    title: "Apprendre",
    text: "Des leçons courtes avec une consigne précise à chaque étape.",
    icon: BookOpen
  },
  {
    title: "Pratiquer",
    text: "Des exercices sur main d'entraînement ou sur capsules avant modèle.",
    icon: Wand2
  },
  {
    title: "Corriger",
    text: "Des retours photo qui expliquent quoi améliorer et dans quel ordre.",
    icon: Camera
  }
];

export type CourseLesson = {
  id: string;
  title: string;
  duration: string;
  level: "Gratuit" | "Débutant premium";
  objective: string;
  explanation: string;
  checklist: string[];
  exercise: string;
};

export const freeCourseLessons: CourseLesson[] = [
  {
    id: "free-materiel-base",
    title: "Matériel de base",
    duration: "25 min",
    level: "Gratuit",
    objective: "Savoir quoi acheter pour commencer sans gaspiller son budget.",
    explanation:
      "Tu vas préparer un poste simple avec une lampe UV/LED, quelques limes, un buffer, des capsules, une base, un gel de construction, un top coat, du cleaner, du primer et un repoussoir. Le but n'est pas d'avoir tout le matériel d'un salon, mais d'avoir assez pour t'entraîner correctement et en sécurité.",
    checklist: [
      "Identifier le matériel indispensable",
      "Séparer les achats obligatoires des achats confort",
      "Prévoir un espace propre et bien éclairé",
      "Noter les produits à éviter au début"
    ],
    exercise: "Crée ta liste d'achat avec ton budget réel, puis compare-la avec la page matériel."
  },
  {
    id: "free-hygiene",
    title: "Hygiène et sécurité",
    duration: "30 min",
    level: "Gratuit",
    objective: "Comprendre les gestes qui protègent l'ongle naturel et évitent les problèmes.",
    explanation:
      "Avant de parler pose, il faut savoir nettoyer, désinfecter, dépoussiérer et reconnaître les situations où il ne faut pas poser. Une pose jolie mais faite sur un ongle abîmé ou mal préparé peut causer des décollements, douleurs ou infections.",
    checklist: [
      "Nettoyer la table avant de commencer",
      "Désinfecter les outils réutilisables",
      "Ne pas poser sur une peau irritée",
      "Éviter de toucher les cuticules avec le gel"
    ],
    exercise: "Prépare ton poste de travail et prends une photo de ton espace avant de commencer."
  },
  {
    id: "free-preparation",
    title: "Préparation de l'ongle",
    duration: "35 min",
    level: "Gratuit",
    objective: "Savoir préparer l'ongle naturel avant toute capsule ou application de gel.",
    explanation:
      "La préparation décide souvent de la tenue. Tu dois repousser doucement les cuticules, matifier la plaque sans creuser, retirer la poussière, puis appliquer les produits d'adhérence dans le bon ordre. Si l'ongle reste brillant sur les côtés, la pose risque de se décoller.",
    checklist: [
      "Repousser les cuticules sans blesser",
      "Matifier toute la plaque",
      "Dépoussiérer les côtés",
      "Appliquer primer ou base selon le protocole"
    ],
    exercise: "Prépare un ongle d'entraînement, prends une photo nette et teste une analyse IA gratuite."
  }
];

export const beginnerPremiumLessons: CourseLesson[] = [
  {
    id: "premium-materiel-complet",
    title: "Matériel complet",
    duration: "40 min",
    level: "Débutant premium",
    objective: "Construire un kit sérieux pour suivre toute la formation débutante.",
    explanation:
      "Tu apprends à composer un poste complet : lampe stable, ponceuse douce, limes adaptées, gels, capsules, pinceaux, cleaner, primer, table, chaise et rangement. Le but est d'acheter dans le bon ordre et de garder un poste propre, pratique et évolutif.",
    checklist: [
      "Choisir une lampe UV/LED fiable",
      "Prévoir limes, buffer et pinceaux",
      "Séparer produits de préparation et produits de finition",
      "Organiser le poste pour ne pas chercher les outils"
    ],
    exercise: "Prépare ton panier matériel et classe chaque achat en indispensable, confort ou plus tard."
  },
  {
    id: "premium-anatomie",
    title: "Anatomie de l'ongle",
    duration: "35 min",
    level: "Débutant premium",
    objective: "Comprendre les zones de l'ongle pour travailler proprement.",
    explanation:
      "Tu repères la plaque, la matrice, les cuticules, les replis latéraux, le bord libre et la zone de stress. Cette compréhension aide à limer sans abîmer, à placer la matière au bon endroit et à éviter les erreurs près de la peau.",
    checklist: [
      "Reconnaître la plaque de l'ongle",
      "Identifier la zone de stress",
      "Comprendre le rôle de l'apex",
      "Repérer les zones à ne pas blesser"
    ],
    exercise: "Sur une photo d'ongle naturel, note les zones importantes avant de commencer la préparation."
  },
  {
    id: "premium-preparation",
    title: "Préparation",
    duration: "45 min",
    level: "Débutant premium",
    objective: "Créer une base propre et adhérente avant la pose.",
    explanation:
      "La préparation commence par l'observation, puis les cuticules, le matifiage, le dépoussiérage, le primer et la base. Tu vas apprendre à ne pas trop limer, à bien passer sur les côtés et à ne jamais laisser de poussière sous le produit.",
    checklist: [
      "Observer l'état de l'ongle",
      "Repousser sans couper trop profondément",
      "Matifier sans creuser",
      "Dépoussiérer avant les produits"
    ],
    exercise: "Prépare deux ongles et envoie une photo au coach IA pour vérifier les zones brillantes."
  },
  {
    id: "premium-pose-capsule",
    title: "Pose capsule",
    duration: "50 min",
    level: "Débutant premium",
    objective: "Poser une capsule droite, adaptée et prête à recevoir la matière.",
    explanation:
      "Tu apprends à choisir la bonne taille, coller sans bulle, vérifier l'axe, raccourcir, puis fondre la démarcation. Une capsule trop petite force les côtés, une capsule trop grande déborde et donne une pose fragile.",
    checklist: [
      "Choisir une capsule qui couvre les côtés",
      "Coller sans bulle d'air",
      "Vérifier l'axe du doigt",
      "Raccourcir avant la construction"
    ],
    exercise: "Pose trois capsules sur main d'entraînement et photographie-les de face."
  },
  {
    id: "premium-application-gel",
    title: "Application gel",
    duration: "55 min",
    level: "Débutant premium",
    objective: "Appliquer le gel avec une construction solide et pas trop épaisse.",
    explanation:
      "Tu travailles la quantité de matière, le placement de l'apex, la distance avec les cuticules et la catalysation. Le gel doit renforcer l'ongle sans former une bosse lourde ni toucher la peau.",
    checklist: [
      "Appliquer une couche de base fine",
      "Placer l'apex au centre de la zone de stress",
      "Garder les côtés plus fins",
      "Catalyser selon le temps du produit"
    ],
    exercise: "Réalise une construction simple et prends une photo de face puis de profil."
  },
  {
    id: "premium-limage",
    title: "Limage",
    duration: "45 min",
    level: "Débutant premium",
    objective: "Obtenir une forme régulière et une surface équilibrée.",
    explanation:
      "Le limage corrige la forme, les côtés, le bord libre et le volume. Tu apprends à vérifier la symétrie de face, l'épaisseur de profil et la douceur autour des cuticules.",
    checklist: [
      "Garder la lime parallèle aux côtés",
      "Comparer gauche et droite",
      "Affiner sans enlever tout l'apex",
      "Vérifier la surface sous plusieurs angles"
    ],
    exercise: "Lime une pose simple puis envoie une photo de face au coach IA."
  },
  {
    id: "premium-finition",
    title: "Finition",
    duration: "30 min",
    level: "Débutant premium",
    objective: "Finir proprement avec brillance, contours nets et bord scellé.",
    explanation:
      "La finition donne le rendu professionnel : poussière retirée, top coat fin, bord libre scellé, contour propre et huile cuticules. Trop de top coat peut créer un bourrelet, pas assez peut ternir rapidement.",
    checklist: [
      "Retirer toute la poussière",
      "Appliquer le top coat en couche fine",
      "Sceller le bord libre",
      "Hydrater les cuticules après catalysation"
    ],
    exercise: "Fais une photo finale sous lumière naturelle et vérifie la brillance."
  },
  {
    id: "premium-erreurs-frequentes",
    title: "Erreurs fréquentes",
    duration: "40 min",
    level: "Débutant premium",
    objective: "Reconnaître les défauts visibles et savoir quoi corriger.",
    explanation:
      "Tu apprends à repérer décollements, bulles, cuticules touchées, apex trop plat, bord libre trop épais, asymétrie et surface bosselée. Chaque défaut a une cause probable et une correction simple.",
    checklist: [
      "Identifier une zone brillante oubliée",
      "Repérer un gel trop proche de la peau",
      "Voir une asymétrie de forme",
      "Comprendre quand recommencer plutôt que camoufler"
    ],
    exercise: "Compare deux photos d'exercice et liste trois défauts à corriger."
  },
  {
    id: "premium-entrainement-final",
    title: "Entraînement final",
    duration: "70 min",
    level: "Débutant premium",
    objective: "Réaliser une pose complète débutante du poste jusqu'à la photo finale.",
    explanation:
      "Tu reprends tout : poste propre, préparation, capsule, gel, limage, finition et contrôle photo. L'objectif n'est pas la perfection, mais une pose propre, symétrique, solide et analysable.",
    checklist: [
      "Préparer le poste avant de commencer",
      "Respecter toutes les étapes dans l'ordre",
      "Prendre une photo de face et de profil",
      "Noter les corrections pour la prochaine pose"
    ],
    exercise: "Réalise une pose complète sur main d'entraînement et envoie-la au coach IA."
  }
];

export const allTrainingLessons = [...freeCourseLessons, ...beginnerPremiumLessons];

export const materialBudgetGuides = [
  {
    title: "Petit budget",
    range: "80 € à 150 €",
    profile: "Pour tester sérieusement à la maison",
    advice:
      "Achète seulement l'indispensable : lampe, limes, capsules, gel transparent, base, top, cleaner, primer et repoussoir. Évite les gros coffrets avec trop de produits inconnus.",
    items: ["Lampe UV/LED", "Limes + buffer", "Capsules", "Gel transparent", "Base + top", "Cleaner + primer"]
  },
  {
    title: "Budget sérieux",
    range: "150 € à 300 €",
    profile: "Pour suivre toute la formation débutante",
    advice:
      "Ajoute une ponceuse douce, de meilleurs pinceaux, quelques chablons, un aspirateur compact et un rangement propre. C'est le meilleur équilibre pour progresser.",
    items: ["Ponceuse", "Pinceaux gel", "Chablons", "Aspirateur compact", "Lampe de bureau", "Rangement"]
  },
  {
    title: "Budget pro",
    range: "300 € à 600 €",
    profile: "Pour préparer un poste proche salon",
    advice:
      "Investis surtout dans le confort et la régularité : bonne table, chaise réglable, aspiration efficace, lampe stable et produits plus qualitatifs.",
    items: ["Table stable", "Chaise réglable", "Aspirateur puissant", "Ponceuse précise", "Gamme complète", "Rangement hygiénique"]
  }
];

export const materialCategories = [
  {
    title: "Lampe UV/LED",
    advice: "Choisir une lampe stable 48W minimum, assez large pour une main entière.",
    mustHave: "Indispensable"
  },
  {
    title: "Ponceuse",
    advice: "Utile pour gagner du temps, mais à utiliser doucement au début.",
    mustHave: "Confort"
  },
  {
    title: "Gels",
    advice: "Commencer avec clear, cover naturel et blanc seulement.",
    mustHave: "Indispensable"
  },
  {
    title: "Capsules",
    advice: "Prendre plusieurs tailles, souples mais pas trop fines.",
    mustHave: "Indispensable"
  },
  {
    title: "Limes",
    advice: "Prévoir 100/180, buffer et une brosse à poussière.",
    mustHave: "Indispensable"
  },
  {
    title: "Pinceaux",
    advice: "Un pinceau gel moyen suffit au début, un liner peut venir ensuite.",
    mustHave: "Indispensable"
  },
  {
    title: "Table",
    advice: "Surface stable, lavable, avec assez de place pour poser les outils.",
    mustHave: "Confort"
  },
  {
    title: "Chaise",
    advice: "Hauteur confortable pour éviter de travailler les épaules levées.",
    mustHave: "Confort"
  },
  {
    title: "Rangement",
    advice: "Séparer les outils propres, les produits et les consommables.",
    mustHave: "Indispensable"
  }
];

export const productCards = [
  { category: "Lampe UV/LED", name: "Lampe LED 48W compacte", price: "25 € à 45 €", level: "Petit budget", note: "Suffisante pour débuter si elle catalyse bien tes gels." },
  { category: "Ponceuse", name: "Ponceuse douce débutante", price: "35 € à 70 €", level: "Budget sérieux", note: "Prends un modèle réglable, pas trop agressif." },
  { category: "Gels", name: "Gel construction clear 15 ml", price: "8 € à 18 €", level: "Petit budget", note: "Un gel transparent permet de s'entraîner sans multiplier les couleurs." },
  { category: "Capsules", name: "Boîte capsules naturelles", price: "6 € à 12 €", level: "Petit budget", note: "Vérifie la variété des tailles avant achat." },
  { category: "Limes", name: "Pack limes 100/180 + buffer", price: "5 € à 12 €", level: "Petit budget", note: "À changer régulièrement pour garder un travail propre." },
  { category: "Pinceaux", name: "Pinceau gel taille 6", price: "6 € à 15 €", level: "Budget sérieux", note: "Un bon pinceau aide plus qu'un gros lot bas de gamme." },
  { category: "Table", name: "Table compacte lavable", price: "50 € à 130 €", level: "Budget pro", note: "La stabilité compte plus que le style." },
  { category: "Chaise", name: "Chaise réglable simple", price: "35 € à 90 €", level: "Budget pro", note: "Protège ton dos pendant les entraînements longs." },
  { category: "Rangement", name: "Boîtes produits empilables", price: "10 € à 30 €", level: "Budget sérieux", note: "Pratique pour séparer propre, poussière et consommables." }
];
