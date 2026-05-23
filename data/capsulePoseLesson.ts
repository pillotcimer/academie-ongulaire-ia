export type CapsulePoseStep = {
  id: string;
  title: string;
  explanation: string;
  checklist: string[];
  commonError: string;
  correction: string;
  imageLabel: string;
  imageUrl: string;
  goodExample: string;
  badExample: string;
  expectedResult: string;
  visualTip: string;
};

export type CapsuleGalleryItem = {
  title: string;
  description: string;
  status: "good" | "warning";
};

export const capsuleLessonMaterials = [
  "Capsules adaptées à plusieurs tailles d'ongles",
  "Colle à capsules",
  "Repoussoir cuticules",
  "Lime 180 ou 100/180",
  "Buffer doux",
  "Brosse à poussière",
  "Coupe-capsule",
  "Cleaner et coton non pelucheux",
  "Main d'entraînement ou doigt d'entraînement"
];

export const capsulePoseSteps: CapsulePoseStep[] = [
  {
    id: "choose-size",
    title: "Étape 1 : choisir la bonne taille de capsule",
    explanation:
      "Pose la capsule sur l'ongle sans colle. Elle doit couvrir l'ongle d'un côté à l'autre sans forcer. Si tu dois appuyer fort pour qu'elle touche les côtés, elle est trop petite.",
    checklist: [
      "Tester la capsule avant de mettre la colle",
      "Vérifier qu'elle couvre les deux côtés",
      "Choisir une taille légèrement plus grande si tu hésites",
      "Ne jamais forcer une capsule trop étroite"
    ],
    commonError: "Prendre une capsule trop petite parce qu'elle semble plus fine et plus jolie.",
    correction: "Prends la taille au-dessus, puis lime doucement les côtés pour l'adapter à l'ongle.",
    imageLabel: "Capsule alignée avant collage",
    imageUrl: "/images/lessons/capsule.svg",
    goodExample: "La capsule couvre les deux côtés sans pression.",
    badExample: "La capsule laisse un espace sur les côtés ou pince l'ongle.",
    expectedResult: "Une capsule choisie avant colle, stable et adaptée à la largeur de l'ongle.",
    visualTip: "Si tu hésites entre deux tailles, prends la plus grande et lime les côtés."
  },
  {
    id: "check-sides",
    title: "Étape 2 : vérifier les côtés",
    explanation:
      "Regarde les replis latéraux : la capsule doit rejoindre les côtés sans laisser de trou. Un espace sur le côté crée souvent un décollement ou une pose fragile.",
    checklist: [
      "Regarder l'ongle de face",
      "Contrôler le côté gauche",
      "Contrôler le côté droit",
      "Vérifier que la capsule ne déborde pas sur la peau"
    ],
    commonError: "Se concentrer uniquement sur le centre de l'ongle et oublier les côtés.",
    correction: "Avant collage, incline légèrement le doigt et vérifie les deux côtés sous la lumière.",
    imageLabel: "Contrôle des côtés",
    imageUrl: "/images/lessons/capsule.svg",
    goodExample: "Les côtés touchent la capsule sans débordement sur la peau.",
    badExample: "Un côté reste découvert ou la capsule passe sur le repli latéral.",
    expectedResult: "Les deux côtés sont couverts de façon régulière.",
    visualTip: "Regarde le doigt légèrement incliné pour voir le côté gauche puis le côté droit."
  },
  {
    id: "prepare-nail",
    title: "Étape 3 : préparer l'ongle",
    explanation:
      "Repousse doucement les cuticules, matifie l'ongle naturel, puis retire toute la poussière. La colle adhère mieux sur une surface propre et légèrement mate.",
    checklist: [
      "Repousser les cuticules sans blesser",
      "Matifier avec un buffer ou une lime douce",
      "Dépoussiérer les côtés et le bord libre",
      "Ne pas toucher l'ongle avec les doigts après préparation"
    ],
    commonError: "Coller sur un ongle encore brillant ou poussiéreux.",
    correction: "Reprends le matifiage doucement puis dépoussière avant de coller.",
    imageLabel: "Ongle préparé",
    imageUrl: "/images/lessons/preparation.svg",
    goodExample: "L'ongle est mat, propre et sans poussière visible.",
    badExample: "La surface brille encore ou la poussière reste dans les côtés.",
    expectedResult: "Une base propre qui permet à la colle d'adhérer correctement.",
    visualTip: "La lumière ne doit pas créer de reflet brillant sur la plaque."
  },
  {
    id: "apply-glue",
    title: "Étape 4 : appliquer la colle",
    explanation:
      "Mets une petite quantité de colle dans l'encoche de la capsule. La colle doit former un film fin, pas une grosse goutte qui déborde sur la peau.",
    checklist: [
      "Mettre la colle dans la zone de contact",
      "Utiliser une petite quantité",
      "Éviter les bords de la peau",
      "Garder la capsule prête à poser immédiatement"
    ],
    commonError: "Mettre trop de colle, ce qui crée des débordements et des bulles.",
    correction: "Essuie l'excès avant la pose ou recommence avec une capsule propre.",
    imageLabel: "Colle fine dans l'encoche",
    imageUrl: "/images/lessons/capsule.svg",
    goodExample: "La colle forme un film fin dans la zone de contact.",
    badExample: "Une grosse goutte déborde vers la peau ou les côtés.",
    expectedResult: "Assez de colle pour adhérer, pas assez pour couler.",
    visualTip: "Mieux vaut une fine couche bien placée qu'une grosse quantité."
  },
  {
    id: "no-air-bubble",
    title: "Étape 5 : poser sans bulle d'air",
    explanation:
      "Place d'abord l'encoche contre le bord libre, puis baisse la capsule progressivement vers l'ongle. La pression doit chasser l'air vers l'extérieur.",
    checklist: [
      "Placer la capsule à 45 degrés",
      "Descendre lentement vers l'ongle",
      "Maintenir une pression régulière",
      "Contrôler qu'aucune bulle blanche n'apparaisse"
    ],
    commonError: "Poser la capsule à plat d'un coup, ce qui emprisonne l'air.",
    correction: "Retire la capsule si la bulle est importante, nettoie, puis recommence lentement.",
    imageLabel: "Pose progressive sans bulle",
    imageUrl: "/images/lessons/capsule.svg",
    goodExample: "La capsule descend progressivement et la colle se répartit sans zone blanche.",
    badExample: "Une bulle blanche reste visible sous la capsule.",
    expectedResult: "Aucune bulle visible dans la zone de collage.",
    visualTip: "Commence en angle puis baisse lentement la capsule."
  },
  {
    id: "check-axis",
    title: "Étape 6 : vérifier l'axe",
    explanation:
      "Regarde le doigt de face : la capsule doit suivre la ligne naturelle du doigt, pas seulement la forme de l'ongle. Un axe décalé se voit encore plus après le gel.",
    checklist: [
      "Regarder le doigt de face",
      "Comparer avec la ligne du doigt",
      "Vérifier avant que la colle sèche totalement",
      "Corriger tout de suite si la capsule part de travers"
    ],
    commonError: "Aligner la capsule sur un ongle naturel déjà un peu de travers.",
    correction: "Aligne-toi sur le doigt complet, puis corrige la forme au limage.",
    imageLabel: "Axe central du doigt",
    imageUrl: "/images/lessons/capsule.svg",
    goodExample: "La capsule prolonge la ligne centrale du doigt.",
    badExample: "Le bord libre part vers la gauche ou vers la droite.",
    expectedResult: "Un axe droit avant de couper et limer.",
    visualTip: "Pose le doigt à plat et regarde depuis la main, pas seulement depuis l'ongle."
  },
  {
    id: "cut-file",
    title: "Étape 7 : couper et limer",
    explanation:
      "Coupe la capsule à une longueur confortable pour débuter, puis lime le bord libre et les côtés. Le but est une forme simple, droite et facile à contrôler.",
    checklist: [
      "Couper court pour un premier entraînement",
      "Limer le bord libre",
      "Affiner légèrement les côtés",
      "Ne pas limer trop fort la zone de collage"
    ],
    commonError: "Garder une longueur trop grande dès le premier essai.",
    correction: "Raccourcis : une capsule courte est plus facile à aligner, limer et renforcer.",
    imageLabel: "Longueur courte et limée",
    imageUrl: "/images/lessons/filing.svg",
    goodExample: "La longueur est courte, régulière et facile à contrôler.",
    badExample: "La capsule est trop longue ou le bord libre part de travers.",
    expectedResult: "Un bord libre net, court et prêt pour la construction gel.",
    visualTip: "Pour débuter, coupe plus court que ce que tu trouves joli."
  },
  {
    id: "send-photo",
    title: "Étape 8 : envoyer une photo au coach IA",
    explanation:
      "Prends une photo nette de face, avec la capsule visible jusqu'aux côtés. Le coach vérifiera la taille, l'axe, la présence de bulle et la régularité du bord libre.",
    checklist: [
      "Prendre la photo sous bonne lumière",
      "Montrer toute la capsule",
      "Éviter le flou",
      "Envoyer la photo dans le bloc Coach IA de cette leçon"
    ],
    commonError: "Envoyer une photo trop sombre ou trop proche pour voir l'axe.",
    correction: "Recule légèrement, pose la main à plat et prends une photo de face.",
    imageLabel: "Photo prête pour analyse",
    imageUrl: "/images/lessons/good-bad.svg",
    goodExample: "La photo montre la capsule entière, les côtés et l'axe du doigt.",
    badExample: "La photo est floue, trop proche ou trop sombre.",
    expectedResult: "Une photo claire que le coach IA peut réellement analyser.",
    visualTip: "Utilise une lumière de côté et garde le téléphone stable."
  }
];

export const capsuleGallery: CapsuleGalleryItem[] = [
  {
    title: "Bonne pose",
    description: "La capsule couvre les côtés, suit l'axe du doigt et ne montre pas de bulle visible.",
    status: "good"
  },
  {
    title: "Capsule trop petite",
    description: "Les côtés ne sont pas couverts. La capsule force et risque de se décoller.",
    status: "warning"
  },
  {
    title: "Capsule trop grande",
    description: "La capsule déborde sur les côtés et peut toucher la peau.",
    status: "warning"
  },
  {
    title: "Bulle d'air",
    description: "Une zone blanche apparaît sous la capsule : l'air est resté coincé dans la colle.",
    status: "warning"
  },
  {
    title: "Axe décalé",
    description: "La capsule part vers la gauche ou la droite au lieu de suivre la ligne du doigt.",
    status: "warning"
  }
];
