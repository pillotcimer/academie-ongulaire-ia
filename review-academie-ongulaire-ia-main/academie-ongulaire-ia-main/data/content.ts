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
    label: "Progression globale",
    value: "42 %",
    detail: "6 leçons terminées sur 20"
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
    title: "Découverte",
    price: "19 €",
    description: "Pour tester la méthode et commencer les bases.",
    features: [
      "Accès au module débutant",
      "Liste matériel de départ",
      "2 analyses IA démo",
      "Suivi de progression simple"
    ]
  },
  {
    title: "Formation complète",
    price: "49 €",
    description: "Le meilleur point de départ pour se former sérieusement.",
    highlighted: true,
    features: [
      "Modules débutant et intermédiaire",
      "Plan d'entraînement semaine par semaine",
      "10 analyses IA incluses",
      "Badges et objectifs personnalisés"
    ]
  },
  {
    title: "Premium IA",
    price: "99 €",
    description: "Pour progresser avec plus de retours photo.",
    features: [
      "Tout le contenu de formation",
      "Analyses IA avancées",
      "Historique complet des corrections",
      "Priorité sur les nouveaux modules"
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
  "préparation de l'ongle",
  "pose capsule",
  "gel",
  "chablon",
  "limage",
  "finition"
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
  gel: {
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
