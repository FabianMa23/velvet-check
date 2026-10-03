import { useEffect } from "react";

const DEFAULT_TITLE = "Velvet Check – Independent Luxury Hotel Testing";

export function usePageMeta(title, description) {
  useEffect(() => {
    document.title = title ? `${title} – Velvet Check` : DEFAULT_TITLE;
    const meta = document.querySelector('meta[name="description"]');
    const previous = meta?.getAttribute("content");
    if (meta && description) meta.setAttribute("content", description);
    return () => {
      document.title = DEFAULT_TITLE;
      if (meta && previous) meta.setAttribute("content", previous);
    };
  }, [title, description]);
}
