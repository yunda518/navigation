import { Compass, Waves, Sparkles } from "lucide-react";
import SearchBar from "./SearchBar";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Full-width hero background image */}
      <div className="absolute inset-x-0 top-0 bottom-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2073&auto=format&fit=crop')`,
        }}
      >
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-900/40 to-slate-900/70" />
      </div>

      {/* Decorative elements */}
      <div className="pointer-events-none absolute -top-20 -left-10 h-72 w-72 rounded-full bg-brand-ocean/20 blur-3xl z-0" />
      <div className="pointer-events-none absolute top-10 -right-10 h-72 w-72 rounded-full bg-brand-lagoon/20 blur-3xl z-0" />

      {/* Wave SVG divider */}
      <svg
        className="pointer-events-none absolute bottom-0 left-0 h-24 w-[200%] animate-wave opacity-90 z-10"
        viewBox="0 0 2400 120"
        preserveAspectRatio="none"
        aria-hidden
      >
        <path
          className="wave-path"
          d="M0,60 C300,120 600,0 1200,60 C1500,90 1800,120 2400,60 L2400,120 L0,120 Z"
        />
      </svg>

      <div className="container relative z-20 pt-32 pb-32 sm:pt-40 sm:pb-40">
        <div className="flex flex-col items-center text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-white/30 bg-white/20 px-4 py-1.5 text-sm font-semibold text-white shadow-lg backdrop-blur-sm animate-fadeInUp">
            <Sparkles className="h-4 w-4" />
            发现海南 · 从这里开始
          </span>

          <h1
            className="mt-6 text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white drop-shadow-lg animate-fadeInUp"
            style={{ animationDelay: "80ms" }}
          >
            海南
            <span className="relative mx-2 inline-block align-middle">
              <span className="bg-gradient-to-r from-brand-sand via-amber-200 to-brand-sand bg-clip-text text-transparent drop-shadow-md">
                导航站
              </span>
              <Waves
                className="absolute -right-8 -top-5 h-7 w-7 text-white/80 animate-floatSlow"
                strokeWidth={2}
              />
            </span>
          </h1>

          <p
            className="mt-6 max-w-2xl text-base sm:text-lg leading-relaxed text-white/90 drop-shadow-md animate-fadeInUp"
            style={{ animationDelay: "160ms" }}
          >
            精选收录海南省政务服务、旅游景区、新闻媒体、教育文化、交通出行、
            本地企业与生活服务的官方网站与权威资源,一站式导航。
          </p>

          <div
            className="mt-8 w-full max-w-2xl animate-fadeInUp"
            style={{ animationDelay: "240ms" }}
          >
            <SearchBar variant="hero" />
          </div>

          <div
            className="mt-6 flex flex-wrap items-center justify-center gap-2 text-sm animate-fadeInUp"
            style={{ animationDelay: "320ms" }}
          >
            <span className="inline-flex items-center gap-1.5 text-white/80">
              <Compass className="h-4 w-4" />
              试试搜索
            </span>
            <span className="rounded-full border border-white/30 bg-white/10 px-3 py-1 text-white/90 backdrop-blur-sm hover:bg-white/20 transition-colors cursor-default">
              三亚
            </span>
            <span className="rounded-full border border-white/30 bg-white/10 px-3 py-1 text-white/90 backdrop-blur-sm hover:bg-white/20 transition-colors cursor-default">
              海南航空
            </span>
            <span className="rounded-full border border-white/30 bg-white/10 px-3 py-1 text-white/90 backdrop-blur-sm hover:bg-white/20 transition-colors cursor-default">
              天气预报
            </span>
            <span className="rounded-full border border-white/30 bg-white/10 px-3 py-1 text-white/90 backdrop-blur-sm hover:bg-white/20 transition-colors cursor-default">
              蜈支洲岛
            </span>
            <span className="rounded-full border border-white/30 bg-white/10 px-3 py-1 text-white/90 backdrop-blur-sm hover:bg-white/20 transition-colors cursor-default">
              椰树集团
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
