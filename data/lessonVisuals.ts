export type VisualExample = {
  title: string;
  description: string;
  imageUrl: string;
};

export type BeforeAfterComparison = {
  id: string;
  title: string;
  good: VisualExample;
  bad: VisualExample;
};

export type CommonMistake = {
  id: string;
  name: string;
  consequence: string;
  correction: string;
  imageUrl: string;
};

export type ExpectedResult = {
  id: string;
  title: string;
  result: string;
  correctExample: string;
  avoidExample: string;
  visualTips: string[];
  imageUrl: string;
};

export type LessonVisualSet = {
  beforeAfter: BeforeAfterComparison[];
  commonMistakes: CommonMistake[];
  expectedResults: ExpectedResult[];
};

const preparationVisuals: LessonVisualSet = {
  beforeAfter: [
    {
      id: "prep-matte",
      title: "Surface mate vs surface brillante",
      good: {
        title: "Bon exemple",
        description: "La plaque est matifiée partout, y compris près des côtés et des cuticules.",
        imageUrl: "/images/lessons/preparation.svg"
      },
      bad: {
        title: "Mauvais exemple",
        description: "Le centre est mat, mais les côtés restent brillants : la tenue sera fragile.",
        imageUrl: "/images/lessons/good-bad.svg"
      }
    }
  ],
  commonMistakes: [
    {
      id: "prep-too-hard",
      name: "Trop limer le centre",
      consequence: "L'ongle naturel chauffe, rougit ou devient sensible.",
      correction: "Utilise une lime douce, effleure la surface et arrête dès que la brillance disparaît.",
      imageUrl: "/images/lessons/preparation.svg"
    },
    {
      id: "prep-side-shine",
      name: "Oublier les côtés",
      consequence: "La pose se décolle souvent sur les replis latéraux.",
      correction: "Incline légèrement le doigt et contrôle les deux côtés sous une lumière directe.",
      imageUrl: "/images/lessons/good-bad.svg"
    }
  ],
  expectedResults: [
    {
      id: "prep-result",
      title: "Ongle prêt à recevoir la base",
      result: "Surface mate, propre, sans poussière visible et sans rougeur.",
      correctExample: "La lumière ne reflète plus de zone brillante sur la plaque.",
      avoidExample: "Une plaque rayée profondément ou poussiéreuse.",
      visualTips: ["Regarder de face", "Contrôler les côtés", "Dépoussiérer avant primer ou base"],
      imageUrl: "/images/lessons/preparation.svg"
    }
  ]
};

export const lessonVisualsByLessonId: Record<string, LessonVisualSet> = {
  "free-preparation": preparationVisuals,
  "premium-preparation": preparationVisuals,
  "premium-pose-capsule": {
    beforeAfter: [
      {
        id: "capsule-size",
        title: "Capsule adaptée vs capsule forcée",
        good: {
          title: "Bon exemple",
          description: "La capsule couvre les côtés sans pression et suit naturellement le doigt.",
          imageUrl: "/images/lessons/capsule.svg"
        },
        bad: {
          title: "Mauvais exemple",
          description: "La capsule est trop petite, force sur les côtés ou laisse un espace visible.",
          imageUrl: "/images/lessons/good-bad.svg"
        }
      },
      {
        id: "capsule-axis",
        title: "Axe droit vs axe décalé",
        good: {
          title: "Bon exemple",
          description: "Le bord libre prolonge la ligne du doigt.",
          imageUrl: "/images/lessons/capsule.svg"
        },
        bad: {
          title: "Mauvais exemple",
          description: "La capsule part vers un côté et la forme sera difficile à rattraper.",
          imageUrl: "/images/lessons/good-bad.svg"
        }
      }
    ],
    commonMistakes: [
      {
        id: "capsule-air",
        name: "Bulle d'air sous la capsule",
        consequence: "La zone de collage devient fragile et peut se décoller rapidement.",
        correction: "Pose la capsule en angle, puis descends progressivement pour chasser l'air.",
        imageUrl: "/images/lessons/capsule.svg"
      },
      {
        id: "capsule-too-long",
        name: "Longueur trop grande",
        consequence: "La débutante perd le contrôle de l'axe et du limage.",
        correction: "Coupe court pour t'entraîner, puis allonge quand la pose est stable.",
        imageUrl: "/images/lessons/good-bad.svg"
      }
    ],
    expectedResults: [
      {
        id: "capsule-result",
        title: "Capsule prête pour le gel",
        result: "Capsule centrée, courte, sans bulle visible, côtés couverts et bord libre régulier.",
        correctExample: "L'axe est droit quand tu regardes le doigt de face.",
        avoidExample: "Capsule qui déborde, bulle blanche ou bord libre de travers.",
        visualTips: ["Contrôler les côtés", "Regarder l'axe de face", "Couper court avant le gel"],
        imageUrl: "/images/lessons/capsule.svg"
      }
    ]
  },
  "premium-application-gel": {
    beforeAfter: [
      {
        id: "gel-apex",
        title: "Apex équilibré vs pose plate",
        good: {
          title: "Bon exemple",
          description: "La matière renforce la zone de stress et reste fine sur les côtés.",
          imageUrl: "/images/lessons/gel.svg"
        },
        bad: {
          title: "Mauvais exemple",
          description: "La même épaisseur partout donne une pose plate ou lourde.",
          imageUrl: "/images/lessons/good-bad.svg"
        }
      }
    ],
    commonMistakes: [
      {
        id: "gel-cuticle",
        name: "Gel trop près des cuticules",
        consequence: "Le produit touche la peau et crée des décollements.",
        correction: "Garde une marge fine et nettoie avant catalysation.",
        imageUrl: "/images/lessons/gel.svg"
      },
      {
        id: "gel-heavy-sides",
        name: "Côtés trop épais",
        consequence: "La pose paraît large et manque d'élégance.",
        correction: "Guide la matière vers le centre, puis affine les parallèles au limage.",
        imageUrl: "/images/lessons/good-bad.svg"
      }
    ],
    expectedResults: [
      {
        id: "gel-result",
        title: "Construction simple et solide",
        result: "Apex visible de profil, contours propres, surface régulière et côtés affinés.",
        correctExample: "Le volume est au centre de la zone de stress.",
        avoidExample: "Gel plat, cuticules noyées ou bourrelet sur les côtés.",
        visualTips: ["Regarder de profil", "Nettoyer les contours", "Catalyser sans précipitation"],
        imageUrl: "/images/lessons/gel.svg"
      }
    ]
  },
  "premium-limage": {
    beforeAfter: [
      {
        id: "filing-symmetry",
        title: "Forme régulière vs asymétrie",
        good: {
          title: "Bon exemple",
          description: "Les deux côtés sont équilibrés et le bord libre est net.",
          imageUrl: "/images/lessons/filing.svg"
        },
        bad: {
          title: "Mauvais exemple",
          description: "Un côté est plus creusé ou plus épais que l'autre.",
          imageUrl: "/images/lessons/good-bad.svg"
        }
      }
    ],
    commonMistakes: [
      {
        id: "filing-overfile",
        name: "Enlever tout l'apex",
        consequence: "La pose devient fragile malgré une forme jolie de face.",
        correction: "Alterne vue de face et vue de profil pendant le limage.",
        imageUrl: "/images/lessons/filing.svg"
      },
      {
        id: "filing-thick-edge",
        name: "Bord libre trop épais",
        consequence: "La pose paraît lourde et accroche au toucher.",
        correction: "Affine le bord libre par petits passages réguliers.",
        imageUrl: "/images/lessons/good-bad.svg"
      }
    ],
    expectedResults: [
      {
        id: "filing-result",
        title: "Forme prête pour la finition",
        result: "Bord libre symétrique, côtés doux, surface régulière et volume préservé.",
        correctExample: "La lime corrige sans creuser brutalement.",
        avoidExample: "Surface bosselée, apex supprimé ou bord libre épais.",
        visualTips: ["Comparer gauche et droite", "Contrôler le profil", "Dépoussiérer avant finition"],
        imageUrl: "/images/lessons/filing.svg"
      }
    ]
  },
  "premium-finition": {
    beforeAfter: [
      {
        id: "finish-shine",
        title: "Brillance fine vs surcharge",
        good: {
          title: "Bon exemple",
          description: "Le top coat est fin, régulier et scelle le bord libre.",
          imageUrl: "/images/lessons/finish.svg"
        },
        bad: {
          title: "Mauvais exemple",
          description: "Trop de top crée un bourrelet près des côtés ou des cuticules.",
          imageUrl: "/images/lessons/good-bad.svg"
        }
      }
    ],
    commonMistakes: [
      {
        id: "finish-dust",
        name: "Poussière sous le top",
        consequence: "La finition n'est pas lisse et perd son rendu premium.",
        correction: "Dépoussière soigneusement avant d'appliquer le top coat.",
        imageUrl: "/images/lessons/finish.svg"
      },
      {
        id: "finish-edge",
        name: "Bord libre non scellé",
        consequence: "La finition peut s'user ou s'écailler plus vite.",
        correction: "Passe une fine couche sur le bord libre sans créer de bourrelet.",
        imageUrl: "/images/lessons/good-bad.svg"
      }
    ],
    expectedResults: [
      {
        id: "finish-result",
        title: "Rendu final professionnel",
        result: "Brillance uniforme, contours propres, bord libre scellé et cuticules hydratées.",
        correctExample: "La lumière se reflète de façon régulière sur toute la pose.",
        avoidExample: "Bourrelet, poussière visible ou top coat sur la peau.",
        visualTips: ["Nettoyer avant top", "Sceller finement", "Photographier sous lumière naturelle"],
        imageUrl: "/images/lessons/finish.svg"
      }
    ]
  }
};

export function getLessonVisuals(lessonId: string) {
  return lessonVisualsByLessonId[lessonId];
}
