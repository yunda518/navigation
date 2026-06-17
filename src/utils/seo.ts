import { useEffect } from "react";

export interface SeoOptions {
  title?: string;
  description?: string;
  url?: string;
}

export function setSeo({ title, description, url }: SeoOptions) {
  const base = "海南导航站";
  const fullTitle = title ? `${title} | ${base}` : `${base} - 发现海南,从这里开始`;

  if (typeof document !== "undefined") {
    document.title = fullTitle;

    const ensureMeta = (selector: string, name: string, content: string | undefined) => {
      if (!content) return;
      let el = document.head.querySelector<HTMLMetaElement>(selector);
      if (!el) {
        el = document.createElement("meta");
        const [attr, value] = selector
          .replace('meta[', "")
          .replace(']', "")
          .split('=');
        el.setAttribute(attr, value.replace(/"/g, ""));
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };

    ensureMeta('meta[name="description"]', "description", description);
    ensureMeta('meta[property="og:title"]', "og:title", fullTitle);
    ensureMeta('meta[property="og:description"]', "og:description", description);
    if (url) ensureMeta('meta[property="og:url"]', "og:url", url);
  }
}

export function useSeo(options: SeoOptions) {
  useEffect(() => {
    setSeo(options);
  }, [options.title, options.description, options.url]);
}
