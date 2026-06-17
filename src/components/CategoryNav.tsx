import { NavLink } from "react-router-dom";
import { categories } from "@/data/categories";

interface CategoryNavProps {
  variant?: "row" | "chips";
  showAll?: boolean;
  className?: string;
}

export default function CategoryNav({
  variant = "row",
  showAll = true,
  className = "",
}: CategoryNavProps) {
  if (variant === "chips") {
    return (
      <div className={`flex gap-2 overflow-x-auto no-scrollbar py-1 ${className}`}>
        <NavLink
          end
          to="/"
          className={({ isActive }) =>
            `chip shrink-0 ${isActive ? "chip-active" : "chip-default"}`
          }
        >
          全部
        </NavLink>
        {categories.map((c) => {
          const Icon = c.icon;
          return (
            <NavLink
              key={c.slug}
              to={`/category/${c.slug}`}
              className={({ isActive }) =>
                `chip shrink-0 ${isActive ? "chip-active" : "chip-default"}`
              }
            >
              <Icon className="h-3.5 w-3.5" />
              {c.name}
            </NavLink>
          );
        })}
      </div>
    );
  }

  return (
    <div className={`grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-8 gap-3 ${className}`}>
      {categories.map((c) => {
        const Icon = c.icon;
        return (
          <NavLink
            key={c.slug}
            to={`/category/${c.slug}`}
            className={({ isActive }) =>
              `group flex flex-col items-center justify-center gap-2 rounded-2xl border bg-white p-3.5 text-center transition-all duration-200 ${
                isActive
                  ? "border-brand-ocean/40 shadow-cardHover ring-2 ring-brand-ocean/15"
                  : "border-slate-200 shadow-card hover:-translate-y-1 hover:border-brand-ocean/30 hover:shadow-cardHover"
              }`
            }
          >
            <span
              className={`inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br ${c.tint} text-white shadow-soft`}
            >
              <Icon className="h-5 w-5" strokeWidth={2.25} />
            </span>
            <span className="text-sm font-semibold text-brand-ink">{c.shortName}</span>
            {showAll && (
              <span className="text-[11px] text-slate-500 group-hover:text-brand-ocean transition-colors">
                查看 →
              </span>
            )}
          </NavLink>
        );
      })}
    </div>
  );
}
