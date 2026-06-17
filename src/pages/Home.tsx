import Hero from "@/components/Hero";
import Section from "@/components/Section";
import CategoryNav from "@/components/CategoryNav";
import SiteCard from "@/components/SiteCard";
import { categories } from "@/data/categories";
import { featuredByCategory, hotSites } from "@/data/sites";
import { Flame, Sparkles } from "lucide-react";
import { useSeo } from "@/utils/seo";

export default function Home() {
  useSeo({
    title: undefined,
    description: "海南导航站 —— 精选海南省政务、旅游、新闻、教育、交通、企业、生活服务的官方网站导航。",
    url: "https://hndir.com",
  });

  const hot = hotSites(10);

  return (
    <>
      <Hero />

      <div className="container space-y-12 mt-10 sm:mt-12">
        {/* Hot / 热门 */}
        {hot.length > 0 && (
          <Section
            title="热门推荐"
            description="高频使用、深受欢迎的海南本地网站。"
            icon={Flame}
          >
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3.5">
              {hot.map((s, i) => (
                <SiteCard key={s.id} site={s} index={i} />
              ))}
            </div>
          </Section>
        )}

        {/* 分类入口 */}
        <Section
          title="按分类浏览"
          description="七大类目,覆盖海南政务、旅游、新闻、教育、交通、企业、生活服务。"
          icon={Sparkles}
        >
          <CategoryNav />
        </Section>

        {/* 分类精选 */}
        <div className="space-y-14">
          {categories.map((c) => {
            const list = featuredByCategory(c.slug, 6);
            const Icon = c.icon;
            return (
              <Section
                key={c.slug}
                title={c.name}
                description={c.description}
                icon={Icon}
                hrefMore={`/category/${c.slug}`}
                actionLabel={`查看 ${c.name} 全部`}
              >
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3.5">
                  {list.map((s, i) => (
                    <SiteCard key={s.id} site={s} index={i} />
                  ))}
                </div>
              </Section>
            );
          })}
        </div>

        {/* 友情提示 */}
        <div className="rounded-2xl border border-slate-200 bg-white p-6 text-sm text-slate-600 shadow-card">
          <div className="flex items-start gap-3">
            <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-brand-ocean/10 text-brand-ocean">
              <Sparkles className="h-4 w-4" />
            </span>
            <div>
              <p className="font-semibold text-brand-ink">关于本站链接</p>
              <p className="mt-1 leading-relaxed">
                本站收录的链接均为相关机构的官方网站。若您希望推荐或更新某个网站的链接,
                请前往<a href="/about" className="mx-1 text-brand-ocean hover:underline">关于页</a>
                联系站长。页面信息持续更新,请以各站点实际内容为准。
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
