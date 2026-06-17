import { ExternalLink, Flame } from "lucide-react";
import type { Site } from "@/data/sites";
import { categoryBySlug } from "@/data/categories";

interface SiteCardProps {
  site: Site;
  index?: number;
}

function hostOf(url: string) {
  try {
    const h = new URL(url).hostname;
    return h.replace(/^www\./, "");
  } catch {
    return url;
  }
}

export default function SiteCard({ site, index = 0 }: SiteCardProps) {
  const cat = categoryBySlug(site.category);
  const host = hostOf(site.url);
  const delay = Math.min(index, 8) * 30;

  return (
    <a
      href={site.url}
      target="_blank"
      rel="noopener noreferrer"
      className="site-card group animate-fadeInUp"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="flex items-start gap-3">
        <span
          className={`inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${
            cat?.tint ?? "from-slate-500 to-slate-700"
          } text-white text-xl shadow-soft`}
        >
          <span aria-hidden>{site.emoji ?? "🔗"}</span>
        </span>

        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-2">
            <h3 className="text-[15px] font-bold text-brand-ink truncate">
              {site.name}
            </h3>
            {site.hot && (
              <span className="inline-flex items-center gap-1 rounded-full bg-brand-sand/15 px-1.5 py-0.5 text-[10px] font-bold text-brand-sand-dark ring-1 ring-brand-sand/30">
                <Flame className="h-3 w-3" />
                HOT
              </span>
            )}
            <ExternalLink className="ml-auto h-3.5 w-3.5 text-slate-300 group-hover:text-brand-ocean transition-colors" />
          </div>

          <div className="mt-1 text-xs font-medium text-brand-ocean truncate">
            {host}
          </div>

          <p className="mt-2 line-clamp-2 text-[13px] leading-relaxed text-slate-600">
            {site.description}
          </p>

          {cat && (
            <div className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-slate-50 px-2 py-1 text-[11px] text-slate-600 ring-1 ring-slate-100">
              <span className={`h-1.5 w-1.5 rounded-full ${cat.dot}`} />
              {cat.name}
            </div>
          )}
        </div>
      </div>
    </a>
  );
}
