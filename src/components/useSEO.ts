import { useEffect } from "react";

type SEOProps = {
  title: string;
  description: string;
  image?: string;
  url?: string;
};

const DEFAULT_IMAGE = "https://blog.smsidea.in/images/og-blog.png";
const SITE_NAME = "AI Agency Blog";
const SITE_URL = "https://blog.smsidea.in/";

export function useSEO({
  title,
  description,
  image,
  url,
}: SEOProps) {
  useEffect(() => {
    document.title = title ? `${title} | ${SITE_NAME}` : SITE_NAME;

    const metaTags = [
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:image", content: image || DEFAULT_IMAGE },
      { property: "og:url", content: url || SITE_URL },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: image || DEFAULT_IMAGE },
    ];

    metaTags.forEach(({ name, property, content }) => {
      let tag: HTMLMetaElement | null = null;
      if (name) {
        tag = document.querySelector(`meta[name="${name}"]`);
      } else if (property) {
        tag = document.querySelector(`meta[property="${property}"]`);
      }
      if (!tag) {
        tag = document.createElement("meta");
        if (name) tag.setAttribute("name", name);
        if (property) tag.setAttribute("property", property);
        document.head.appendChild(tag);
      }
      tag.setAttribute("content", content);
    });

    // Cleanup: (optional, not removing tags)
    // return () => { ... }
  }, [title, description, image, url]);
}