export type LessonMedia = {
  videoTitle: string;
  videoDescription: string;
  videoUrl: string;
  source: "Pexels" | "Pixabay" | "Mixkit" | "Coverr" | "Local";
  license: string;
  thumbnailUrl: string;
  isEmbedded: boolean;
  isLocal: boolean;
  searchKeywords: string[];
  videoSource?: "Pexels" | "Pixabay" | "Mixkit" | "Coverr" | "Local";
  videoLicense?: string;
};

export const authorizedVideoSources = ["Pexels", "Pixabay", "Mixkit", "Coverr"] as const;

export const lessonMediaLibrary: Record<string, LessonMedia> = {
  "free-materiel-base": {
    videoTitle: "Poste de travail et outils de manucure",
    videoDescription:
      "Plan de travail de prothesie ongulaire pour illustrer le materiel minimum et l'organisation de depart.",
    videoUrl: "https://www.pexels.com/video/nail-technician-working-7424023/",
    videoSource: "Pexels",
    videoLicense: "Pexels License - free to use, attribution not required",
    source: "Pexels",
    license: "Pexels License - free to use, attribution not required",
    thumbnailUrl: "/images/lesson-thumbnails/kit.svg",
    isEmbedded: false,
    isLocal: false,
    searchKeywords: ["nail technician", "manicure tools", "nail salon", "beauty workspace"]
  },
  "free-hygiene": {
    videoTitle: "Hygiene du poste et gestes propres",
    videoDescription:
      "Video de technicienne ongulaire au poste de travail, utile pour montrer l'importance des outils propres et de la zone organisee.",
    videoUrl: "https://www.pexels.com/video/nail-technician-working-7424017/",
    videoSource: "Pexels",
    videoLicense: "Pexels License - free to use, attribution not required",
    source: "Pexels",
    license: "Pexels License - free to use, attribution not required",
    thumbnailUrl: "/images/lesson-thumbnails/hygiene.svg",
    isEmbedded: false,
    isLocal: false,
    searchKeywords: ["nail technician", "hygiene", "manicure gloves", "clean nail station"]
  },
  "free-preparation": {
    videoTitle: "Preparation et matifiage de l'ongle",
    videoDescription:
      "Extrait de manucure centre sur le travail de surface, proche des gestes de preparation avant pose.",
    videoUrl: "https://www.pexels.com/video/manicure-filing-nails-16117150/",
    videoSource: "Pexels",
    videoLicense: "Pexels License - free to use, attribution not required",
    source: "Pexels",
    license: "Pexels License - free to use, attribution not required",
    thumbnailUrl: "/images/lesson-thumbnails/preparation.svg",
    isEmbedded: false,
    isLocal: false,
    searchKeywords: ["nail preparation", "cuticle care", "nail buffing", "manicure filing"]
  },
  "premium-materiel-complet": {
    videoTitle: "Materiel complet pour une pose gel",
    videoDescription:
      "Selection de videos gel nails a utiliser pour remplacer plus tard par une vraie demonstration de kit complet.",
    videoUrl: "https://pixabay.com/videos/search/gel%20nails/",
    videoSource: "Pixabay",
    videoLicense: "Pixabay Content License - free to use, attribution not required",
    source: "Pixabay",
    license: "Pixabay Content License - free to use, attribution not required",
    thumbnailUrl: "/images/lesson-thumbnails/pro-kit.svg",
    isEmbedded: false,
    isLocal: false,
    searchKeywords: ["gel nails", "uv nail lamp", "nail tools", "manicure"]
  },
  "premium-anatomie": {
    videoTitle: "Observer l'ongle et ses zones",
    videoDescription:
      "Vue des mains et des ongles permettant d'introduire les zones a reperer avant de travailler.",
    videoUrl: "https://www.pexels.com/video/person-showing-her-manicured-nails-4783779/",
    videoSource: "Pexels",
    videoLicense: "Pexels License - free to use, attribution not required",
    source: "Pexels",
    license: "Pexels License - free to use, attribution not required",
    thumbnailUrl: "/images/lesson-thumbnails/anatomy.svg",
    isEmbedded: false,
    isLocal: false,
    searchKeywords: ["fingernails", "nail anatomy", "manicured nails", "nail care"]
  },
  "premium-preparation": {
    videoTitle: "Protocole de preparation avant gel",
    videoDescription:
      "Video de limage et soin proche du protocole de preparation : observer, matifier, depoussierer.",
    videoUrl: "https://www.pexels.com/video/manicure-filing-nails-16117150/",
    videoSource: "Pexels",
    videoLicense: "Pexels License - free to use, attribution not required",
    source: "Pexels",
    license: "Pexels License - free to use, attribution not required",
    thumbnailUrl: "/images/lesson-thumbnails/preparation.svg",
    isEmbedded: false,
    isLocal: false,
    searchKeywords: ["nail preparation", "cuticle care", "nail filing", "nail buffing"]
  },
  "premium-pose-capsule": {
    videoTitle: "Extension et allongement de l'ongle",
    videoDescription:
      "Bibliotheque pertinente pour remplacer ensuite par une vraie video de pose capsule ou extension.",
    videoUrl: "https://www.pexels.com/search/videos/nail%20extension/",
    videoSource: "Pexels",
    videoLicense: "Pexels License - free to use, attribution not required",
    source: "Pexels",
    license: "Pexels License - free to use, attribution not required",
    thumbnailUrl: "/images/lesson-thumbnails/capsule.svg",
    isEmbedded: false,
    isLocal: false,
    searchKeywords: ["nail extension", "nail tips", "gel nails", "nail technician"]
  },
  "premium-application-gel": {
    videoTitle: "Application du gel sur l'ongle",
    videoDescription:
      "Video de gel manicure utile pour illustrer la precision du geste, la quantite de produit et le travail de surface.",
    videoUrl: "https://www.pexels.com/video/video-of-person-applying-nail-polish-4802704/",
    videoSource: "Pexels",
    videoLicense: "Pexels License - free to use, attribution not required",
    source: "Pexels",
    license: "Pexels License - free to use, attribution not required",
    thumbnailUrl: "/images/lesson-thumbnails/gel.svg",
    isEmbedded: false,
    isLocal: false,
    searchKeywords: ["gel manicure", "gel nails", "nail polish application", "nail technician"]
  },
  "premium-limage": {
    videoTitle: "Limage et regularite de la forme",
    videoDescription:
      "Geste de limage en gros plan pour accompagner les explications de symetrie, bord libre et volume.",
    videoUrl: "https://www.pexels.com/video/manicure-filing-nails-16117150/",
    videoSource: "Pexels",
    videoLicense: "Pexels License - free to use, attribution not required",
    source: "Pexels",
    license: "Pexels License - free to use, attribution not required",
    thumbnailUrl: "/images/lesson-thumbnails/filing.svg",
    isEmbedded: false,
    isLocal: false,
    searchKeywords: ["nail filing", "manicure filing nails", "nail shape", "nail technician"]
  },
  "premium-finition": {
    videoTitle: "Rendu final et brillance",
    videoDescription:
      "Video de mains manucurees, adaptee pour montrer le controle final, la brillance et le rendu propre.",
    videoUrl: "https://www.pexels.com/video/colorful-manicured-nails-7338505/",
    videoSource: "Pexels",
    videoLicense: "Pexels License - free to use, attribution not required",
    source: "Pexels",
    license: "Pexels License - free to use, attribution not required",
    thumbnailUrl: "/images/lesson-thumbnails/finish.svg",
    isEmbedded: false,
    isLocal: false,
    searchKeywords: ["manicured nails", "nail finish", "top coat", "colorful nails"]
  },
  "premium-erreurs-frequentes": {
    videoTitle: "Analyser les defauts visibles",
    videoDescription:
      "Selection de videos ongles pour comparer les angles, la forme, la brillance et les zones a corriger.",
    videoUrl: "https://pixabay.com/videos/search/nails/",
    videoSource: "Pixabay",
    videoLicense: "Pixabay Content License - free to use, attribution not required",
    source: "Pixabay",
    license: "Pixabay Content License - free to use, attribution not required",
    thumbnailUrl: "/images/lesson-thumbnails/diagnostic.svg",
    isEmbedded: false,
    isLocal: false,
    searchKeywords: ["nails", "manicure", "nail filing", "gel nails", "nail defects"]
  },
  "premium-entrainement-final": {
    videoTitle: "Pose complete en conditions salon",
    videoDescription:
      "Video de technicienne ongulaire au travail pour illustrer une sequence complete, de la preparation au controle final.",
    videoUrl: "https://www.pexels.com/video/nail-technician-working-7424023/",
    videoSource: "Pexels",
    videoLicense: "Pexels License - free to use, attribution not required",
    source: "Pexels",
    license: "Pexels License - free to use, attribution not required",
    thumbnailUrl: "/images/lesson-thumbnails/final-pose.svg",
    isEmbedded: false,
    isLocal: false,
    searchKeywords: ["nail technician", "manicure", "gel nails", "nail salon", "nail care"]
  }
};

export function getLessonMedia(lessonId: string) {
  return lessonMediaLibrary[lessonId];
}
