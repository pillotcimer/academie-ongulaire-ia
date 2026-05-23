import { Clock3, Play, Video } from "lucide-react";

type VideoLessonBlockProps = {
  title: string;
  duration: string;
  videoUrl?: string;
};

export function VideoLessonBlock({ title, duration, videoUrl }: VideoLessonBlockProps) {
  return (
    <section className="overflow-hidden rounded-lg border border-rose-100 bg-ink text-white shadow-tight">
      <div className="relative aspect-video min-h-48 bg-[linear-gradient(135deg,#242124_0%,#A94C67_55%,#F7DCE5_100%)]">
        {videoUrl ? (
          <iframe
            className="absolute inset-0 h-full w-full"
            src={videoUrl}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 px-5 text-center">
            <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white/18 backdrop-blur">
              <Video size={28} aria-hidden="true" />
            </span>
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-white/70">Vidéo de cours</p>
              <h4 className="mt-2 text-lg font-black leading-tight">{title}</h4>
            </div>
          </div>
        )}
      </div>

      <div className="flex flex-col gap-3 p-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm font-bold">{title}</p>
          <p className="mt-1 flex items-center gap-2 text-xs font-semibold text-white/65">
            <Clock3 size={14} aria-hidden="true" />
            {duration}
          </p>
        </div>
        {videoUrl ? (
          <a
            href={videoUrl}
            className="focus-ring inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-bold text-ink transition hover:bg-blush"
          >
            <Play size={16} aria-hidden="true" />
            Lecture
          </a>
        ) : (
          <button
            type="button"
            className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-white/12 px-4 py-2 text-sm font-bold text-white"
            aria-label="Vidéo bientôt ajoutée"
          >
            <Play size={16} aria-hidden="true" />
            Lecture
          </button>
        )}
      </div>
    </section>
  );
}
