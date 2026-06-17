import Section from "@/components/Section";
import { useSeo } from "@/utils/seo";
import {
  BookOpen,
  Mail,
  ShieldCheck,
  Lightbulb,
  MapPin,
  CheckCircle2,
} from "lucide-react";

export default function About() {
  useSeo({
    title: "关于 - 海南导航站",
    description: "海南导航站的建站目的、收录规则与联系方式。",
    url: "https://hndir.com/about",
  });

  return (
    <div className="container py-10 space-y-10">
      <div className="rounded-3xl bg-gradient-to-br from-brand-ocean/5 via-white to-brand-lagoon/5 border border-slate-200 p-8 shadow-soft">
        <div className="flex items-start gap-4">
          <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-ocean to-brand-lagoon text-white shadow-card">
            <BookOpen className="h-7 w-7" />
          </span>
          <div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-brand-ink">
              关于海南导航站
            </h1>
            <p className="mt-2 max-w-2xl text-sm sm:text-base text-slate-600">
              hndir.com 是一个面向海南本地居民及外来游客的精选网站导航平台,
              致力于聚合海南省政务、旅游、新闻、教育、交通、企业、生活服务等领域的官方与权威资源。
            </p>
          </div>
        </div>
      </div>

      <Section title="建站目的" description="为什么要做海南导航站?" icon={Lightbulb}>
        <div className="grid sm:grid-cols-3 gap-3.5">
          {[
            {
              title: "一站式入口",
              text: "整合海南本地常用网站,避免在搜索引擎中反复寻找。",
              icon: <MapPin className="h-4 w-4 text-brand-ocean" />,
            },
            {
              title: "官方与权威",
              text: "优先收录政府、高校、知名企业的官方网站与可靠信息源。",
              icon: <ShieldCheck className="h-4 w-4 text-brand-lagoon" />,
            },
            {
              title: "轻量与快速",
              text: "纯静态页面,加载迅速,支持移动设备友好浏览。",
              icon: <Lightbulb className="h-4 w-4 text-brand-sand-dark" />,
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-slate-200 bg-white p-5 shadow-card"
            >
              <div className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-brand-ocean/10 text-brand-ocean">
                {item.icon}
              </div>
              <h3 className="mt-3 text-lg font-bold text-brand-ink">{item.title}</h3>
              <p className="mt-1 text-sm leading-relaxed text-slate-600">{item.text}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section
        id="rules"
        title="收录规则"
        description="哪些网站会被收录,以及如何排序。"
        icon={CheckCircle2}
      >
        <div className="rounded-2xl border border-slate-200 bg-white p-6 text-sm leading-relaxed text-slate-700 shadow-card">
          <ol className="list-decimal space-y-2 pl-5 marker:text-brand-ocean marker:font-bold">
            <li>
              <span className="font-semibold text-brand-ink">官方优先:</span>
              政府机构、事业单位、国有企业的官方网站优先收录。
            </li>
            <li>
              <span className="font-semibold text-brand-ink">权威媒体:</span>
              省级及市级党媒、主流广播电视台网站可被收录。
            </li>
            <li>
              <span className="font-semibold text-brand-ink">本地知名:</span>
              在海南具有较高知名度的企业、景区官网。
            </li>
            <li>
              <span className="font-semibold text-brand-ink">服务实用:</span>
              为用户提供政务办理、交通、查询、预约等实用服务的站点。
            </li>
            <li>
              <span className="font-semibold text-brand-ink">拒绝违规:</span>
              不收录含有违法违规、虚假、商业推广性质的链接。
            </li>
          </ol>
          <p className="mt-4 text-xs text-slate-500">
            注意:本站为公益性导航聚合,不向任何网站收费收录。若您发现链接失效或有更新,
            欢迎与我们联系。
          </p>
        </div>
      </Section>

      <Section
        id="contact"
        title="联系方式"
        description="如果您有推荐、建议或发现失效链接,欢迎告知。"
        icon={Mail}
      >
        <div className="grid sm:grid-cols-2 gap-3.5">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-card">
            <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-brand-ocean/10 text-brand-ocean">
              <Mail className="h-5 w-5" />
            </div>
            <h3 className="mt-3 text-lg font-bold text-brand-ink">站长邮箱</h3>
            <p className="mt-1 text-sm text-slate-600">
              contact<span className="text-slate-400">[at]</span>hndir.com
            </p>
            <p className="mt-3 text-xs text-slate-500">
              邮件请尽量写明:推荐/更新/失效的链接名称、官方地址、
              简要说明。我们会在审核后处理。
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-card">
            <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-brand-lagoon/10 text-brand-lagoon">
              <MapPin className="h-5 w-5" />
            </div>
            <h3 className="mt-3 text-lg font-bold text-brand-ink">工作地点</h3>
            <p className="mt-1 text-sm text-slate-600">
              海南 · 海口 / 三亚 · 线上志愿者维护
            </p>
            <p className="mt-3 text-xs text-slate-500">
              我们是公益性的信息聚合项目,并不以盈利为目的。
              若您是相关官方机构,对本站收录有任何疑问,欢迎通过邮箱联系。
            </p>
          </div>
        </div>
      </Section>

      <div className="rounded-2xl border border-dashed border-brand-ocean/30 bg-brand-ocean/5 p-6 text-sm leading-relaxed text-slate-700">
        <p className="font-semibold text-brand-ink mb-1">免责声明</p>
        <p>
          本站所有外部链接均指向第三方网站,链接内容、政策、服务由对应网站负责。
          本站不保证链接的绝对可用性及内容的完整性,相关信息请以官方网站最新公告为准。
        </p>
      </div>
    </div>
  );
}
