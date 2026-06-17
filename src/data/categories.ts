import type { LucideIcon } from "lucide-react";
import {
  Building2,
  Palmtree,
  Newspaper,
  GraduationCap,
  Plane,
  Factory,
  Heart,
  Truck,
} from "lucide-react";

export type CategorySlug =
  | "government"
  | "tourism"
  | "news"
  | "education"
  | "transport"
  | "business"
  | "life"
  | "logistics";

export interface Category {
  slug: CategorySlug;
  name: string;
  shortName: string;
  description: string;
  icon: LucideIcon;
  tint: string; // gradient classes applied to icon tile
  ring: string; // border/accent color utilities
  dot: string; // dot color
}

export const categories: Category[] = [
  {
    slug: "government",
    name: "政务服务",
    shortName: "政务",
    description: "海南省及各地市官方政务入口、在线办事服务平台。",
    icon: Building2,
    tint: "from-sky-500 to-blue-600",
    ring: "ring-sky-200 text-sky-700 bg-sky-50",
    dot: "bg-sky-500",
  },
  {
    slug: "tourism",
    name: "旅游景区",
    shortName: "旅游",
    description: "三亚、海口及海南各地知名景点、旅游发展官方信息。",
    icon: Palmtree,
    tint: "from-emerald-500 to-teal-600",
    ring: "ring-emerald-200 text-emerald-700 bg-emerald-50",
    dot: "bg-emerald-500",
  },
  {
    slug: "news",
    name: "新闻媒体",
    shortName: "新闻",
    description: "海南日报、南海网等本地权威新闻与媒体平台。",
    icon: Newspaper,
    tint: "from-rose-500 to-pink-600",
    ring: "ring-rose-200 text-rose-700 bg-rose-50",
    dot: "bg-rose-500",
  },
  {
    slug: "education",
    name: "教育文化",
    shortName: "教育",
    description: "海南大学、海南师范大学等高校及文化教育机构。",
    icon: GraduationCap,
    tint: "from-violet-500 to-indigo-600",
    ring: "ring-violet-200 text-violet-700 bg-violet-50",
    dot: "bg-violet-500",
  },
  {
    slug: "transport",
    name: "交通出行",
    shortName: "交通",
    description: "海南航空、机场、环岛高铁及本地公交出行信息。",
    icon: Plane,
    tint: "from-amber-500 to-orange-600",
    ring: "ring-amber-200 text-amber-700 bg-amber-50",
    dot: "bg-amber-500",
  },
  {
    slug: "business",
    name: "商业企业",
    shortName: "企业",
    description: "海南航空、椰树集团、海南农垦等本地知名企业。",
    icon: Factory,
    tint: "from-slate-600 to-slate-800",
    ring: "ring-slate-200 text-slate-700 bg-slate-50",
    dot: "bg-slate-600",
  },
  {
    slug: "life",
    name: "生活服务",
    shortName: "生活",
    description: "天气预报、医院、公共交通等日常便民服务入口。",
    icon: Heart,
    tint: "from-pink-500 to-fuchsia-600",
    ring: "ring-pink-200 text-pink-700 bg-pink-50",
    dot: "bg-pink-500",
  },
  {
    slug: "logistics",
    name: "物流快递",
    shortName: "物流",
    description: "顺丰、中通、圆通、韵达、申通、德邦、京东物流等快递物流企业官网。",
    icon: Truck,
    tint: "from-orange-500 to-red-600",
    ring: "ring-orange-200 text-orange-700 bg-orange-50",
    dot: "bg-orange-500",
  },
];

export const categoryBySlug = (slug: string): Category | undefined =>
  categories.find((c) => c.slug === slug);
