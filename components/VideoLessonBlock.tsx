import { Clock3, ExternalLink, Play, ShieldCheck, Video } from "lucide-react";
import type { LessonMedia } from "@/data/mediaLibrary";

type VideoLessonBlockProps = {
  title: string;
  duration: string;
  videoUrl?: string;
  media?: LessonMedia;
};

export function VideoLessonBlock({ title, duration, videoUrl, media }: VideoLessonBlockProps) {
  const displayTitle = media?.videoTitle ?? title;
  const displayDescription = media?.videoDescription ?? "Vidéo pédagogique prête à être remplacée par ton propre contenu.";
  const displayUrl = media?.videoUrl ?? videoUrl;

  return (
    <section className="overflow-hidden rounded-lg border border-rose-100 bg-ink text-white shadow-tight">
      <div className="grid gap-0 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="relative aspect-video min-h-48 bg-[linear-gradient(135deg,#242124_0%,#A94C67_55%,#F7DCE5_100%)]">
          {media?.thumbnailUrl ? (
            <img src={media.thumbnailUrl} alt="" className="h-full w-full object-cover" />
          ) : (
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 px-5 text-center">
              <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white/18 backdrop-blur">
                <Video size={28} aria-hidden="true" />
              </span>
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-white/70">Vidéo de cours</p>
                <h4 className="mt-2 text-lg font-black leading-tight">{displayTitle}</h4>
              </div>
            </div>
          )}
        </div>

        <div className="flex flex-col justify-between gap-5 p-4 sm:p-5">
          <div>
            <p className="inline-flex w-fit items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-black uppercase tracking-[0.12em] text-white/72">
              <Play size={13} aria-hidden="true" />
              Vidéo pédagogique
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
              {media ? (
                <p className="flex items-center gap-2">
                  <ShieldCheck size={14} aria-hidden="true" />
                  {media.videoSource}
                </p>
              ) : null}
            </div>

            {media ? (
              <div className="rounded-lg bg-white/10 p-3">
                <p className="text-xs font-bold uppercase tracking-[0.12em] text-white/58">Licence</p>
                <p className="mt-1 text-xs leading-5 text-white/76">{media.videoLicense}</p>
              </div>
            ) : null}

            {displayUrl ? (
              <a
                href={displayUrl}
                target="_blank"
                rel="noreferrer"
                className="focus-ring inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-bold text-ink transition hover:bg-blush sm:w-auto"
              >
                Voir la vidéo
                <ExternalLink size={16} aria-hidden="true" />
              </a>
            ) : (
              <button
                type="button"
                className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-full bg-white/12 px-4 py-2 text-sm font-bold text-white sm:w-auto"
                aria-label="Vidéo bientôt ajoutée"
              >
                Voir la vidéo
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
