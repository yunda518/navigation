import { Compass, Mail, Heart, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import { categories } from "@/data/categories";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative mt-20 border-t border-slate-200 bg-white">
      <div className="container py-12 grid gap-10 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2.5">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-brand-ocean to-brand-lagoon shadow-soft">
              <Compass className="h-5 w-5 text-white" strokeWidth={2.25} />
            </span>
            <div className="leading-tight">
              <div className="text-lg font-extrabold text-brand-ink">海南导航站</div>
              <div className="text-[11px] text-slate-500 font-medium">hndir.com</div>
            </div>
          </div>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-slate-600">
            发现海南,从这里开始。海南导航站致力于精选收录海南本地政务、旅游、
            新闻、教育、交通、企业及生活服务类官方网站,帮助用户快速找到所需的优质资源。
          </p>
          <div className="mt-5 flex flex-wrap gap-2 text-xs">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-100 px-3 py-1.5 text-slate-600">
              <Heart className="h-3.5 w-3.5 text-brand-ocean" /> 由海南爱好者维护
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-100 px-3 py-1.5 text-slate-600">
              <Mail className="h-3.5 w-3.5 text-brand-lagoon" /> contact@hndir.com
            </span>
          </div>
        </div>

        <div>
          <div className="text-sm font-bold text-brand-ink mb-3">分类导航</div>
          <ul className="space-y-2">
            {categories.map((c) => {
              const Icon = c.icon;
              return (
                <li key={c.slug}>
                  <Link
                    to={`/category/${c.slug}`}
                    className="inline-flex items-center gap-2 text-sm text-slate-600 hover:text-brand-ocean transition-colors"
                  >
                    <Icon className="h-3.5 w-3.5" />
                    {c.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        <div>
          <div className="text-sm font-bold text-brand-ink mb-3">关于</div>
          <ul className="space-y-2 text-sm text-slate-600">
            <li>
              <Link to="/about" className="hover:text-brand-ocean transition-colors">
                关于本站
              </Link>
            </li>
            <li>
              <Link to="/about#rules" className="hover:text-brand-ocean transition-colors">
                收录规则
              </Link>
            </li>
            <li>
              <Link to="/about#contact" className="hover:text-brand-ocean transition-colors">
                联系方式
              </Link>
            </li>
            <li>
              <a
                href="https://www.baidu.com/s?wd=%E6%B5%B7%E5%8D%97"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 hover:text-brand-ocean transition-colors"
              >
                百度搜索海南
                <ExternalLink className="h-3 w-3" />
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-slate-100">
        <div className="container py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-slate-500">
          <span>© {year} 海南导航站 hndir.com · 保留所有权利</span>
          <span className="flex flex-wrap items-center gap-x-3 gap-y-1">
            <span>椰风海韵 · 自贸海南</span>
            <span className="hidden sm:inline">·</span>
            <span>本站仅作导航聚合,内容版权归原网站所有</span>
          </span>
        </div>
      </div>
    </footer>
  );
}
