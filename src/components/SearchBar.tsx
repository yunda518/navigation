import { useEffect, useRef, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Search, X, ArrowRight } from "lucide-react";

interface SearchBarProps {
  variant?: "hero" | "compact";
  autoFocus?: boolean;
}

export default function SearchBar({ variant = "hero", autoFocus }: SearchBarProps) {
  const [params] = useSearchParams();
  const initial = params.get("q") ?? "";
  const [value, setValue] = useState(initial);
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (autoFocus) inputRef.current?.focus();
  }, [autoFocus]);

  useEffect(() => {
    setValue(initial);
  }, [initial]);

  const submit = (e?: React.FormEvent) => {
    e?.preventDefault();
    const q = value.trim();
    if (!q) return;
    navigate(`/search?q=${encodeURIComponent(q)}`);
  };

  const isHero = variant === "hero";

  return (
    <form
      onSubmit={submit}
      className={`group relative flex items-center gap-2 ${
        isHero
          ? "rounded-2xl bg-white p-2 shadow-card ring-1 ring-slate-200 focus-within:ring-brand-ocean/50"
          : "rounded-xl bg-white/80 p-1.5 border border-slate-200 focus-within:border-brand-ocean/40"
      } transition-all duration-200`}
    >
      <Search
        className={`ml-2 ${isHero ? "h-5 w-5" : "h-4 w-4"} text-slate-400 group-focus-within:text-brand-ocean`}
      />
      <input
        ref={inputRef}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        type="text"
        placeholder={isHero ? "搜索海南网站:输入三亚、海航、椰汁..." : "输入关键词搜索..."}
        className={`flex-1 bg-transparent outline-none text-slate-800 placeholder:text-slate-400 ${
          isHero ? "py-2.5 text-base" : "py-1.5 text-sm"
        }`}
      />
      {value && (
        <button
          type="button"
          onClick={() => {
            setValue("");
            inputRef.current?.focus();
          }}
          aria-label="清空"
          className="p-1.5 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100"
        >
          <X className="h-4 w-4" />
        </button>
      )}
      <button
        type="submit"
        className={`inline-flex items-center gap-1 font-semibold text-white rounded-xl bg-gradient-to-r from-brand-ocean to-brand-lagoon shadow-soft hover:shadow-cardHover active:scale-[0.98] transition-all ${
          isHero ? "px-4 py-2.5 text-sm" : "px-3 py-1.5 text-xs"
        }`}
      >
        搜索
        <ArrowRight className={`${isHero ? "h-4 w-4" : "h-3 w-3"}`} />
      </button>
    </form>
  );
}
