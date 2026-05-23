"use client";

import { useState } from "react";
import { Clock3, Play, ShieldCheck, Video, X } from "lucide-react";
import type { LessonMedia } from "@/data/mediaLibrary";

type VideoLessonBlockProps = {
  title: string;
  duration: string;
  videoUrl?: string;
  media?: LessonMedia;
};

export function VideoLessonBlock({ title, duration, videoUrl, media }: VideoLessonBlockProps) {
  const [isPlayerOpen, setIsPlayerOpen] = useState(false);
  const displayTitle = media?.videoTitle ?? title;
  const displayDescription = media?.videoDescription ?? "Vidéo pédagogique prête à être remplacée par ton propre contenu.";
  const displayUrl = media?.videoUrl ?? videoUrl ?? "";
  const source = media?.source ?? media?.videoSource ?? "Source locale";
  const license = media?.license ?? media?.videoLicense ?? "Licence à renseigner";
  const canPlayInline = Boolean(displayUrl && (media?.isLocal || media?.isEmbedded));

  return (
    <section className="overflow-hidden rounded-lg border border-rose-100 bg-ink text-white shadow-tight">
      <div className="grid gap-0 lg:grid-cols-[1.12fr_0.88fr]">
        <button
          type="button"
          onClick={() => setIsPlayerOpen(true)}
          className="focus-ring group relative aspect-video min-h-56 w-full overflow-hidden bg-[linear-gradient(135deg,#242124_0%,#A94C67_55%,#F7DCE5_100%)] text-left"
          aria-label={`Lire la vidéo : ${displayTitle}`}
        >
          {media?.thumbnailUrl ? (
            <img src={media.thumbnailUrl} alt="" className="h-full w-full object-cover opacity-95 transition duration-300 group-hover:scale-[1.02]" />
          ) : (
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 px-5 text-center">
              <Video size={34} aria-hidden="true" />
            </div>
          )}
          <div className="absolute inset-0 bg-ink/28" />
          <span className="absolute left-1/2 top-1/2 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-ink shadow-soft transition group-hover:scale-105">
            <Play className="ml-1" size={30} fill="currentColor" aria-hidden="true" />
          </span>
          <div className="absolute bottom-4 left-4 right-4">
            <p className="text-xs font-black uppercase tracking-[0.14em] text-white/72">Vidéo intégrée</p>
            <h4 className="mt-1 text-xl font-black leading-tight text-white">{displayTitle}</h4>
          </div>
        </button>

        <div className="flex flex-col justify-between gap-5 p-4 sm:p-5">
          <div>
            <p className="inline-flex w-fit items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-black uppercase tracking-[0.12em] text-white/72">
              <Play size={13} aria-hidden="true" />
              Cours vidéo
            </p>
            <h4 className="mt-3 text-lg font-black leading-tight">{displayTitle}</h4>
            <p className="mt-2 text-sm leading-6 text-white/72">{displayDescription}</p>
          </div>

          <div className="space-y-3">
            <div className="grid gap-2 text-xs font-semibold text-white/70 sm:grid-cols-2">
              <p className="flex items-center gap-2">
                <Clock3 size={14} aria-hidden="true" />
                Cours : {duration}
              </p>
              <p className="flex items-center gap-2">
                <ShieldCheck size={14} aria-hidden="true" />
                {source}
              </p>
            </div>

            <div className="rounded-lg bg-white/10 p-3">
              <p className="text-xs font-bold uppercase tracking-[0.12em] text-white/58">Licence</p>
              <p className="mt-1 text-xs leading-5 text-white/76">{license}</p>
            </div>

            <button
              type="button"
              onClick={() => setIsPlayerOpen(true)}
              className="focus-ring inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-bold text-ink transition hover:bg-blush sm:w-auto"
            >
              <Play size={16} fill="currentColor" aria-hidden="true" />
              Lire dans le cours
            </button>
          </div>
        </div>
      </div>

      {isPlayerOpen ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-ink/78 p-4 backdrop-blur-sm" role="dialog" aria-modal="true" aria-label={displayTitle}>
          <div className="w-full max-w-4xl overflow-hidden rounded-lg bg-white text-ink shadow-soft">
            <div className="flex items-start justify-between gap-3 border-b border-rose-100 p-4">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.14em] text-rosewood">Lecteur intégré</p>
                <h3 className="mt-1 text-lg font-black">{displayTitle}</h3>
              </div>
              <button
                type="button"
                onClick={() => setIsPlayerOpen(false)}
                className="focus-ring flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-petal text-rosewood transition hover:bg-blush"
                aria-label="Fermer la vidéo"
              >
                <X size={18} aria-hidden="true" />
              </button>
            </div>
            <div className="bg-ink">
              {canPlayInline && media?.isEmbedded ? (
                <iframe
                  className="aspect-video w-full"
                  src={displayUrl}
                  title={displayTitle}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              ) : canPlayInline ? (
                <video className="aspect-video w-full bg-ink" controls playsInline poster={media?.thumbnailUrl}>
                  <source src={displayUrl} />
                  Votre navigateur ne peut pas lire cette vidéo.
                </video>
              ) : (
                <div className="flex aspect-video flex-col items-center justify-center gap-4 px-6 text-center text-white">
                  <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white/12">
                    <Video size={28} aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-lg font-black">Lecteur prêt pour une vidéo locale</p>
                    <p className="mt-2 max-w-xl text-sm leading-6 text-white/70">
                      Place une vidéo dans `public/videos/`, puis renseigne son chemin dans `data/mediaLibrary.ts`.
                    </p>
                  </div>
                </div>
              )}
            </div>
            <div className="p-4">
              <p className="text-sm leading-6 text-muted">{displayDescription}</p>
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
}
