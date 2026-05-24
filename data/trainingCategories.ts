import { allTrainingLessons } from "@/data/content";
import type { CourseLesson } from "@/data/content";

export type CategoryIconName = "briefcase" | "hand" | "badge" | "sparkles" | "ruler" | "gem" | "trophy";

export type TrainingCategory = {
  slug: string;
  title: string;
  description: string;
  objective: string;
  level: "Gratuit" | "Débutant premium";
  estimatedDuration: string;
  iconName: CategoryIconName;
  lessonIds: string[];
  manualCards: VisualManualCard[];
};

export type VisualManualCard = {
  id: string;
  title: string;
  imageUrl: string;
  correct: string;
  avoid: string;
  proTip: string;
};

export const trainingCategories: TrainingCategory[] = [
  {
    slug: "materiel-poste",
    title: "Matériel",
    description: "Kit, table, lampe et organisation du poste.",
    objective: "Préparer un poste clair, propre et prêt pour apprendre sans se disperser.",
    level: "Gratuit",
    estimatedDuration: "1 h 05",
    iconName: "briefcase",
    lessonIds: ["free-materiel-base", "premium-materiel-complet"],
    manualCards: [
      {
        id: "materiel-zone",
        title: "Poste organisé",
        imageUrl: "/images/lesson-thumbnails/kit.svg",
        correct: "Outils propres d’un côté, produits au centre, zone poussière séparée.",
        avoid: "Tout mélanger sur la table ou poser les liquides au bord.",
        proTip: "Prépare une zone propre, une zone limage et une petite boîte pour les consommables utilisés."
      }
    ]
  },
  {
    slug: "preparation-ongle",
    title: "Préparation",
    description: "Hygiène, sécurité, matifiage et base propre.",
    objective: "Créer une base saine et adhérente avant capsule, gel ou finition.",
    level: "Gratuit",
    estimatedDuration: "1 h 50",
    iconName: "hand",
    lessonIds: ["free-hygiene", "free-preparation", "premium-preparation"],
    manualCards: [
      {
        id: "hygiene-clean",
        title: "Zone propre",
        imageUrl: "/images/lesson-thumbnails/hygiene.svg",
        correct: "Table nettoyée, outils désinfectés, mains propres, produits fermés.",
        avoid: "Réutiliser une lime sale ou poser sur une peau irritée.",
        proTip: "Nettoie la surface, change les consommables et reporte la pose si l’ongle semble abîmé."
      },
      {
        id: "prep-matte",
        title: "Plaque prête",
        imageUrl: "/images/lessons/preparation.svg",
        correct: "Surface mate partout, surtout près des côtés et des cuticules.",
        avoid: "Centre mat mais côtés brillants ou plaque rougie par trop de limage.",
        proTip: "Travaille plus doucement, incline le doigt et contrôle les côtés sous une lumière directe."
      }
    ]
  },
  {
    slug: "pose-capsule",
    title: "Capsules",
    description: "Taille, collage, axe et bulles d’air.",
    objective: "Poser une capsule courte, droite, propre et prête pour le gel.",
    level: "Débutant premium",
    estimatedDuration: "1 h 15",
    iconName: "badge",
    lessonIds: ["premium-pose-capsule"],
    manualCards: [
      {
        id: "capsule-axis",
        title: "Capsule droite",
        imageUrl: "/images/lessons/capsule.svg",
        correct: "La capsule couvre les côtés sans forcer et suit l’axe du doigt.",
        avoid: "Capsule trop petite, bulle blanche ou extension qui part sur le côté.",
        proTip: "Essaie la taille au-dessus, pose en angle pour chasser l’air, puis vérifie l’axe avant de couper."
      }
    ]
  },
  {
    slug: "gel-construction",
    title: "Gel",
    description: "Matière, apex, catalysation et contours.",
    objective: "Construire une pose solide sans surcharge ni contact avec la peau.",
    level: "Débutant premium",
    estimatedDuration: "55 min",
    iconName: "sparkles",
    lessonIds: ["premium-application-gel"],
    manualCards: [
      {
        id: "gel-apex",
        title: "Apex visible",
        imageUrl: "/images/lessons/gel.svg",
        correct: "Volume au centre de la zone de stress, côtés plus fins, cuticules propres.",
        avoid: "Gel plat, bourrelet latéral ou produit qui touche la peau.",
        proTip: "Place une petite quantité au centre, guide la matière et nettoie les contours avant catalysation."
      }
    ]
  },
  {
    slug: "limage-forme",
    title: "Limage",
    description: "Forme, symétrie, volume et profil.",
    objective: "Obtenir un bord libre propre, une surface équilibrée et une pose agréable à regarder.",
    level: "Débutant premium",
    estimatedDuration: "45 min",
    iconName: "ruler",
    lessonIds: ["premium-limage"],
    manualCards: [
      {
        id: "filing-balance",
        title: "Forme équilibrée",
        imageUrl: "/images/lessons/filing.svg",
        correct: "Bord libre symétrique, côtés doux, volume conservé.",
        avoid: "Un côté creusé, bord trop épais ou apex complètement retiré.",
        proTip: "Alterne vue de face et de profil, puis dépoussière pour vérifier la surface."
      }
    ]
  },
  {
    slug: "finition",
    title: "Finition",
    description: "Brillance, top coat, bord scellé et rendu net.",
    objective: "Terminer la pose sans poussière, sans bourrelet et avec un contrôle photo final.",
    level: "Débutant premium",
    estimatedDuration: "30 min",
    iconName: "gem",
    lessonIds: ["premium-finition"],
    manualCards: [
      {
        id: "finish-shine",
        title: "Top coat fin",
        imageUrl: "/images/lessons/finish.svg",
        correct: "Brillance uniforme, contour net, bord libre scellé finement.",
        avoid: "Top coat trop épais, poussière sous la finition ou produit sur la peau.",
        proTip: "Dépoussière longtemps, applique une couche fine et photographie sous lumière claire."
      }
    ]
  },
  {
    slug: "certification-finale",
    title: "Certification finale",
    description: "Erreurs fréquentes, pose complète et correction IA.",
    objective: "Valider une pose complète, comprendre les défauts et préparer la suite.",
    level: "Débutant premium",
    estimatedDuration: "1 h 50",
    iconName: "trophy",
    lessonIds: ["premium-erreurs-frequentes", "premium-entrainement-final"],
    manualCards: [
      {
        id: "mistakes-diagnostic",
        title: "Diagnostic simple",
        imageUrl: "/images/lesson-thumbnails/diagnostic.svg",
        correct: "Repérer un défaut, sa cause et une seule correction prioritaire.",
        avoid: "Tout camoufler avec plus de matière sans comprendre l’origine.",
        proTip: "Note le défaut principal, refais l’étape concernée, puis envoie une photo au coach IA."
      },
      {
        id: "ai-training",
        title: "Photo analysable",
        imageUrl: "/images/lesson-thumbnails/final-pose.svg",
        correct: "Photo nette, de face et si possible de profil, sous une lumière claire.",
        avoid: "Photo floue, sombre ou trop éloignée pour voir les défauts.",
        proTip: "Pose la main à plat, approche l’appareil et prends une deuxième photo de profil."
      }
    ]
  }
];

const lessonById = new Map(allTrainingLessons.map((lesson) => [lesson.id, lesson]));

export function getTrainingCategory(slug: string) {
  return trainingCategories.find((category) => category.slug === slug);
}

export function getCategoryLessons(category: TrainingCategory): CourseLesson[] {
  return category.lessonIds.map((lessonId) => lessonById.get(lessonId)).filter((lesson): lesson is CourseLesson => Boolean(lesson));
}

export function getLessonInCategory(categorySlug: string, lessonId: string) {
  const category = getTrainingCategory(categorySlug);

  if (!category || !category.lessonIds.includes(lessonId)) {
    return null;
  }

  const lesson = lessonById.get(lessonId);

  if (!lesson) {
    return null;
  }

  return { category, lesson };
}

export function getNextLessonInCategory(category: TrainingCategory, lessonId: string) {
  const currentIndex = category.lessonIds.indexOf(lessonId);
  const nextLessonId = currentIndex >= 0 ? category.lessonIds[currentIndex + 1] : undefined;

  return nextLessonId ? lessonById.get(nextLessonId) : undefined;
}
