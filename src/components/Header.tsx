import { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Compass, Menu, X } from "lucide-react";
import { categories } from "@/data/categories";

export default function Header() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const onHome = location.pathname === "/";

  return (
    <header className="sticky top-0 z-40 backdrop-blur-xl bg-white/75 border-b border-slate-200/70">
      <div className="container flex items-center justify-between py-3.5">
        <Link
          to="/" className="flex items-center gap-2.5 group" onClick={() => setOpen(false)}>
          <span className="relative inline-flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-brand-ocean to-brand-lagoon shadow-soft">
            <Compass className="h-5 w-5 text-white" strokeWidth={2.25} />
          </span>
          <span className="flex flex-col leading-tight">
            <span className="text-lg font-extrabold tracking-tight text-brand-ink">
              海南导航站
            </span>
            <span className="text-[11px] font-medium text-slate-500">
              hndir.com · 发现海南
            </span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                isActive || (onHome && location.hash === "")
                  ? "text-brand-ocean bg-brand-ocean/10"
                  : "text-slate-600 hover:text-brand-ink hover:bg-slate-100"
              }`
            }
          >
            首页
          </NavLink>
          {categories.slice(0, 5).map((c) => (
            <NavLink
              key={c.slug}
              to={`/category/${c.slug}`}
              className={({ isActive }) =>
                `px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                  isActive
                    ? "text-brand-ocean bg-brand-ocean/10"
                    : "text-slate-600 hover:text-brand-ink hover:bg-slate-100"
                }`
              }
            >
              {c.shortName}
            </NavLink>
          ))}
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                isActive
                  ? "text-brand-ocean bg-brand-ocean/10"
                  : "text-slate-600 hover:text-brand-ink hover:bg-slate-100"
              }`
            }
          >
            关于
          </NavLink>
        </nav>

        <button
          className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-lg text-slate-600 hover:bg-slate-100"
          aria-label="切换菜单"
          onClick={() => setOpen((s) => !s)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-slate-100 bg-white animate-fadeIn">
          <nav className="container flex flex-wrap gap-1 py-3">
          <Link
            to="/"
            className="w-full px-3 py-2 text-sm font-medium rounded-lg text-brand-ink bg-slate-100"
            onClick={() => setOpen(false)}
          >
            首页
          </Link>
          {categories.map((c) => {
            const Icon = c.icon;
            return (
              <Link
                key={c.slug}
                to={`/category/${c.slug}`}
                onClick={() => setOpen(false)}
                className="flex items-center gap-2 w-full px-3 py-2 text-sm font-medium rounded-lg text-slate-700 hover:bg-slate-100"
              >
                <Icon className="h-4 w-4 text-brand-ocean" />
                {c.name}
              </Link>
            );
          })}
          <Link
            to="/about"
            onClick={() => setOpen(false)}
            className="w-full px-3 py-2 text-sm font-medium rounded-lg text-slate-700 hover:bg-slate-100"
          >
            关于本站
          </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
