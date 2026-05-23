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
  difference: string;
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

export type StudentCaseStudyData = {
  title: string;
  beforeImageUrl: string;
  afterImageUrl: string;
  score: number;
  mistakes: string[];
  advice: string[];
};

export type GoodBadExample = {
  id: string;
  title: string;
  goodImageUrl: string;
  badImageUrl: string;
  goodLabel: string;
  badLabel: string;
  why: string;
};

export type LessonVisualGuidance = {
  whatToSee: string[];
  whatToAvoid: string[];
  whenToSendPhoto: string;
  expectedResult: string;
};

export type LessonVisualSet = {
  beforeAfter: BeforeAfterComparison[];
  commonMistakes: CommonMistake[];
  expectedResults: ExpectedResult[];
  studentCase: StudentCaseStudyData;
  goodBadExamples: GoodBadExample[];
  guidance: LessonVisualGuidance;
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
      },
      difference: "Le bon exemple montre une surface uniforme. Le mauvais garde des zones brillantes qui provoquent souvent un décollement."
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
  ],
  studentCase: {
    title: "Cas élève : préparation incomplète sur les côtés",
    beforeImageUrl: "/images/lessons/good-bad.svg",
    afterImageUrl: "/images/lessons/preparation.svg",
    score: 76,
    mistakes: ["Zones brillantes près des replis latéraux", "Poussière visible avant l'application du primer"],
    advice: ["Repasser doucement le buffer sur les côtés", "Dépoussiérer avant de toucher aux produits d'adhérence"]
  },
  goodBadExamples: [
    {
      id: "prep-clean-vs-dust",
      title: "Surface prête vs surface poussiéreuse",
      goodImageUrl: "/images/lessons/preparation.svg",
      badImageUrl: "/images/lessons/good-bad.svg",
      goodLabel: "Surface mate et propre",
      badLabel: "Poussière ou brillance",
      why: "Une surface propre permet à la base d'accrocher. La poussière ou la brillance crée des zones faibles."
    }
  ],
  guidance: {
    whatToSee: ["Plaque mate", "Côtés dépoussiérés", "Contour cuticules propre"],
    whatToAvoid: ["Rougeur", "Zone brillante", "Poussière coincée sur les côtés"],
    whenToSendPhoto: "Avant d'appliquer la base, quand l'ongle est préparé mais encore sans produit.",
    expectedResult: "Un ongle naturel propre, matifié sans agressivité et prêt à recevoir les produits d'adhérence."
  }
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
        },
        difference: "Le bon exemple couvre l'ongle sans tension. Le mauvais crée une pression ou un vide qui fragilise la pose."
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
        },
        difference: "Le bon axe suit la ligne du doigt. Le mauvais axe se voit encore plus après la coupe et le gel."
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
    ],
    studentCase: {
      title: "Cas élève : capsule trop petite et axe à reprendre",
      beforeImageUrl: "/images/lessons/good-bad.svg",
      afterImageUrl: "/images/lessons/capsule.svg",
      score: 74,
      mistakes: ["Capsule légèrement trop étroite", "Axe du bord libre décalé vers un côté"],
      advice: ["Choisir la taille au-dessus puis limer les côtés", "Contrôler l'axe de face avant de couper"]
    },
    goodBadExamples: [
      {
        id: "capsule-bubble",
        title: "Collage propre vs bulle d'air",
        goodImageUrl: "/images/lessons/capsule.svg",
        badImageUrl: "/images/lessons/good-bad.svg",
        goodLabel: "Collage progressif",
        badLabel: "Bulle visible",
        why: "Une bulle blanche signifie que l'air est resté sous la capsule. Il faut poser en angle et descendre lentement."
      }
    ],
    guidance: {
      whatToSee: ["Capsule centrée", "Côtés couverts", "Aucune bulle blanche", "Longueur courte"],
      whatToAvoid: ["Capsule forcée", "Débordement sur la peau", "Axe décalé", "Bord libre trop long"],
      whenToSendPhoto: "Après collage, coupe et premier limage, avant de commencer l'application du gel.",
      expectedResult: "Une capsule droite, adaptée à la largeur de l'ongle et prête pour la construction."
    }
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
        },
        difference: "Le bon exemple place le volume au bon endroit. Le mauvais répartit trop de matière partout."
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
    ],
    studentCase: {
      title: "Cas élève : gel trop plat et côtés lourds",
      beforeImageUrl: "/images/lessons/good-bad.svg",
      afterImageUrl: "/images/lessons/gel.svg",
      score: 79,
      mistakes: ["Apex trop plat", "Côtés trop chargés en matière"],
      advice: ["Ajouter une petite bille de gel sur la zone de stress", "Affiner les côtés avant la finition"]
    },
    goodBadExamples: [
      {
        id: "gel-apex-good-bad",
        title: "Apex placé vs pose plate",
        goodImageUrl: "/images/lessons/gel.svg",
        badImageUrl: "/images/lessons/good-bad.svg",
        goodLabel: "Volume central",
        badLabel: "Volume absent",
        why: "L'apex donne de la solidité. Une pose plate casse plus facilement et manque de structure."
      }
    ],
    guidance: {
      whatToSee: ["Apex visible de profil", "Contours propres", "Côtés fins", "Surface régulière"],
      whatToAvoid: ["Gel sur la peau", "Pose plate", "Bourrelet latéral", "Trop de matière au bord libre"],
      whenToSendPhoto: "Après catalysation et avant le limage, avec une photo de face et une photo de profil.",
      expectedResult: "Une construction simple, solide, équilibrée et prête à être limée."
    }
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
        },
        difference: "Le bon exemple garde une symétrie lisible. Le mauvais attire l'œil sur un côté trop creusé ou trop large."
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
    ],
    studentCase: {
      title: "Cas élève : bord libre épais et forme asymétrique",
      beforeImageUrl: "/images/lessons/good-bad.svg",
      afterImageUrl: "/images/lessons/filing.svg",
      score: 82,
      mistakes: ["Côté droit plus épais", "Bord libre manque de symétrie"],
      advice: ["Garder la lime parallèle aux côtés", "Contrôler l'ongle de face après chaque passage"]
    },
    goodBadExamples: [
      {
        id: "filing-sides-good-bad",
        title: "Côtés équilibrés vs côté creusé",
        goodImageUrl: "/images/lessons/filing.svg",
        badImageUrl: "/images/lessons/good-bad.svg",
        goodLabel: "Forme régulière",
        badLabel: "Asymétrie visible",
        why: "Le limage doit corriger sans retirer trop de structure. Une asymétrie se voit avant même la couleur."
      }
    ],
    guidance: {
      whatToSee: ["Bord libre net", "Côtés équilibrés", "Surface régulière", "Apex préservé"],
      whatToAvoid: ["Creuser un côté", "Supprimer tout le volume", "Laisser un bord trop épais"],
      whenToSendPhoto: "Après le limage, avant le top coat, idéalement de face et de profil.",
      expectedResult: "Une forme régulière, douce au toucher et prête pour la finition."
    }
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
        },
        difference: "Le bon exemple brille sans surcharge. Le mauvais laisse un volume visible près des contours."
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
    ],
    studentCase: {
      title: "Cas élève : poussière et top coat trop épais",
      beforeImageUrl: "/images/lessons/good-bad.svg",
      afterImageUrl: "/images/lessons/finish.svg",
      score: 86,
      mistakes: ["Petite surcharge près d'un côté", "Bord libre scellé trop épais"],
      advice: ["Dépoussiérer plus longtemps avant le top", "Étirer le top en couche fine sur le bord libre"]
    },
    goodBadExamples: [
      {
        id: "finish-shine-good-bad",
        title: "Brillance uniforme vs surcharge",
        goodImageUrl: "/images/lessons/finish.svg",
        badImageUrl: "/images/lessons/good-bad.svg",
        goodLabel: "Top fin et brillant",
        badLabel: "Bourrelet visible",
        why: "La finition doit protéger sans épaissir la pose. Une surcharge enlève l'effet professionnel."
      }
    ],
    guidance: {
      whatToSee: ["Brillance régulière", "Contour net", "Bord libre scellé finement", "Cuticules propres"],
      whatToAvoid: ["Poussière sous le top", "Top sur la peau", "Bourrelet au bord libre"],
      whenToSendPhoto: "Après catalysation du top et hydratation légère des cuticules.",
      expectedResult: "Une finition brillante, fine, propre et photographiable sous lumière naturelle."
    }
  }
};

export function getLessonVisuals(lessonId: string) {
  return lessonVisualsByLessonId[lessonId];
}
