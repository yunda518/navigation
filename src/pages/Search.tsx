import { useSearchParams, Link } from "react-router-dom";
import { useMemo } from "react";
import SearchBar from "@/components/SearchBar";
import Section from "@/components/Section";
import SiteCard from "@/components/SiteCard";
import CategoryNav from "@/components/CategoryNav";
import { searchSites } from "@/data/sites";
import { useSeo } from "@/utils/seo";
import { Search as SearchIcon, AlertCircle, Compass } from "lucide-react";

export default function Search() {
  const [params] = useSearchParams();
  const q = (params.get("q") ?? "").trim();

  const results = useMemo(() => searchSites(q), [q]);

  useSeo({
    title: q ? `搜索:${q} - 海南导航站` : "搜索 - 海南导航站",
    description: "在海南导航站内搜索海南省政务、旅游、新闻、教育、交通、企业及生活服务类网站。",
    url: `https://hndir.com/search?q=${encodeURIComponent(q)}`,
  });

  return (
    <div className="container py-10 space-y-8">
      <div className="rounded-3xl bg-gradient-to-br from-brand-ocean/5 via-white to-brand-lagoon/5 border border-slate-200 p-6 sm:p-8 shadow-soft">
        <div className="flex items-start gap-3">
          <span className="mt-1 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-brand-ocean/15 text-brand-ocean">
            <SearchIcon className="h-5 w-5" strokeWidth={2.25} />
          </span>
          <div className="min-w-0 flex-1">
            <h1 className="text-2xl sm:text-3xl font-extrabold text-brand-ink">
              {q ? (
                <>
                  搜索 "<span className="text-brand-ocean">{q}</span>"
                </>
              ) : (
                "站内搜索"
              )}
            </h1>
            <p className="mt-1 text-sm text-slate-600">
              {q ? (
                <>
                  共找到 <span className="font-bold text-brand-ink">{results.length}</span> 个匹配网站。
                </>
              ) : (
                "输入关键词,快速查找海南省相关网站资源。"
              )}
            </p>
          </div>
        </div>

        <div className="mt-6 max-w-2xl">
          <SearchBar variant="hero" autoFocus />
        </div>
      </div>

      <CategoryNav variant="chips" />

      <Section
        title={q ? "搜索结果" : "推荐网站"}
        description={q ? `关键词 "${q}" 的匹配结果,按相关度排序。` : "可按分类标签切换浏览。"}
        icon={Compass}
      >
        {results.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-slate-200 bg-white p-10 text-center">
            <AlertCircle className="mx-auto h-10 w-10 text-slate-300" />
            <p className="mt-3 font-semibold text-brand-ink">未找到匹配的网站</p>
            <p className="mt-1 text-sm text-slate-500">
              试试使用更简洁的关键词,或在分类中浏览。
            </p>
            <div className="mt-5">
              <Link
                to="/"
                className="inline-flex items-center gap-1 rounded-xl bg-gradient-to-r from-brand-ocean to-brand-lagoon px-4 py-2 text-sm font-semibold text-white shadow-soft hover:shadow-cardHover"
              >
                返回首页
              </Link>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3.5">
            {results.map((s, i) => (
              <SiteCard key={s.id} site={s} index={i} />
            ))}
          </div>
        )}
      </Section>
    </div>
  );
}
