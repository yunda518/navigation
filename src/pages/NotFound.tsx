import { Link } from "react-router-dom";
import { Compass, Home, Anchor } from "lucide-react";
import { useSeo } from "@/utils/seo";

export default function NotFound() {
  useSeo({
    title: "页面未找到 - 海南导航站",
    description: "访问的页面不存在或已被移除。",
  });

  return (
    <div className="container py-20 flex flex-col items-center text-center">
      <span className="inline-flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br from-brand-ocean to-brand-lagoon text-white shadow-card">
        <Compass className="h-10 w-10" />
      </span>
      <h1 className="mt-8 text-6xl sm:text-7xl font-extrabold text-brand-ink tracking-tight">
        404
      </h1>
      <p className="mt-2 text-2xl font-bold text-slate-500">海岛迷失了...</p>
      <p className="mt-3 max-w-md text-sm text-slate-600">
        您访问的页面似乎不存在,或许是还未被收录的小岛。
        回到首页继续发现更多海南省的网站资源。
      </p>
      <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
        <Link
          to="/"
          className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-brand-ocean to-brand-lagoon px-5 py-2.5 text-sm font-semibold text-white shadow-soft hover:shadow-cardHover"
        >
          <Home className="h-4 w-4" />
          返回首页
        </Link>
        <Link
          to="/category/tourism"
          className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-2.5 text-sm font-semibold text-brand-ink border border-slate-200 shadow-soft hover:border-brand-ocean/30"
        >
          <Anchor className="h-4 w-4" />
          查看旅游分类
        </Link>
      </div>
    </div>
  );
}
