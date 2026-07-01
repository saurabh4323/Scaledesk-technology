import { SITE } from "../lib/seo/config";

export default function manifest() {
  return {
    name: SITE.name,
    short_name: SITE.shortName,
    description: SITE.description,
    start_url: "/",
    display: "standalone",
    background_color: "#000000",
    theme_color: "#2F80FF",
    lang: SITE.language,
    categories: ["business", "productivity", "technology"],
    icons: [
      {
        src: "/heroimage.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
