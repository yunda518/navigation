import { Link } from "react-router-dom";
import { ArrowRight, type LucideIcon } from "lucide-react";
import type { ReactNode } from "react";

interface SectionProps {
  title: string;
  description?: string;
  icon?: LucideIcon;
  hrefMore?: string;
  children: ReactNode;
  actionLabel?: string;
  id?: string;
}

export default function Section({
  title,
  description,
  icon: Icon,
  hrefMore,
  children,
  actionLabel = "查看全部",
  id,
}: SectionProps) {
  return (
    <section id={id} className="scroll-mt-24">
      <div className="flex items-end justify-between gap-4 mb-5">
        <div className="flex items-start gap-3">
          {Icon && (
            <span className="mt-0.5 inline-flex h-8 w-8 items-center justify-center rounded-lg bg-brand-ocean/10 text-brand-ocean">
              <Icon className="h-4 w-4" strokeWidth={2.25} />
            </span>
          )}
          <div>
            <h2 className="section-title flex items-center gap-2">{title}</h2>
            {description && (
              <p className="mt-1 text-sm text-slate-500 max-w-2xl">{description}</p>
            )}
          </div>
        </div>
        {hrefMore && (
          <Link
            to={hrefMore}
            className="group hidden sm:inline-flex items-center gap-1 text-sm font-semibold text-brand-ocean hover:text-brand-lagoon"
          >
            {actionLabel}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        )}
      </div>
      {children}
    </section>
  );
}
