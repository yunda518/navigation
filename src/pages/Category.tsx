import { useParams, Link, Navigate } from "react-router-dom";
import Section from "@/components/Section";
import SiteCard from "@/components/SiteCard";
import CategoryNav from "@/components/CategoryNav";
import { categoryBySlug } from "@/data/categories";
import { sitesByCategory } from "@/data/sites";
import { useSeo } from "@/utils/seo";
import { Home, ArrowLeft } from "lucide-react";

export default function Category() {
  const { slug = "" } = useParams();
  const cat = categoryBySlug(slug);

  useSeo({
    title: cat ? `${cat.name} - 海南导航站` : "分类 - 海南导航站",
    description: cat?.description,
    url: `https://hndir.com/category/${slug}`,
  });

  if (!cat) {
    return <Navigate to="/404" replace />;
  }

  const list = sitesByCategory(cat.slug);
  const Icon = cat.icon;

  return (
    <div className="container py-10 space-y-10">
      <div className="rounded-3xl bg-gradient-to-br from-brand-ocean/5 via-white to-brand-lagoon/5 border border-slate-200 p-8 shadow-soft">
        <div className="flex items-start gap-4">
          <span
            className={`inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${cat.tint} text-white shadow-card`}
          >
            <Icon className="h-8 w-8" strokeWidth={2.25} />
          </span>
          <div className="min-w-0">
            <div className="text-xs font-semibold text-brand-ocean tracking-wide">
              <Link to="/" className="inline-flex items-center gap-1 hover:underline">
                <ArrowLeft className="h-3 w-3" /> 返回首页
              </Link>
            </div>
            <h1 className="mt-1 text-3xl sm:text-4xl font-extrabold text-brand-ink">
              {cat.name}
            </h1>
            <p className="mt-2 max-w-2xl text-sm sm:text-base text-slate-600">
              {cat.description}
            </p>
            <div className="mt-2 text-sm font-semibold text-slate-700">
              共收录 <span className="text-brand-ocean">{list.length}</span> 个精选网站
            </div>
          </div>
        </div>
      </div>

      <CategoryNav variant="chips" />

      <Section
        title={`${cat.name} · 全部网站`}
        description={`海南省${cat.name}分类下的所有收录网站。`}
        icon={Icon}
      >
        {list.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-slate-200 bg-white p-10 text-center text-sm text-slate-500">
            暂无收录,如有建议欢迎提交。
            <br />
            <Link to="/about#contact" className="ml-1 text-brand-ocean hover:underline">
              联系我们
            </Link>
            <Home className="mx-auto mt-4 h-8 w-8 text-slate-300" />
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3.5">
            {list.map((s, i) => (
              <SiteCard key={s.id} site={s} index={i} />
            ))}
          </div>
        )}
      </Section>
    </div>
  );
}
