import { useEffect } from "react";

const ensureMetaTag = (name: string, content: string, property = false) => {
  const selector = property ? `meta[property='${name}']` : `meta[name='${name}']`;
  let meta = document.querySelector(selector) as HTMLMetaElement | null;

  if (!meta) {
    meta = document.createElement("meta");
    if (property) {
      meta.setAttribute("property", name);
    } else {
      meta.name = name;
    }
    document.head.appendChild(meta);
  }

  meta.setAttribute("content", content);
};

export const usePageMetadata = (title: string, description?: string, keywords?: string) => {
  useEffect(() => {
    document.title = title;

    if (description) {
      ensureMetaTag("description", description);
      ensureMetaTag("og:description", description, true);
      ensureMetaTag("twitter:description", description);
    }

    if (keywords) {
      ensureMetaTag("keywords", keywords);
    }

    ensureMetaTag("og:title", title, true);
  }, [title, description, keywords]);
};
