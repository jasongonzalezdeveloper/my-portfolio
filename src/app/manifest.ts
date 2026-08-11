import type { MetadataRoute } from "next";
import { assetPath } from "@/lib/assetPath";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Jason González — Senior Frontend Engineer",
    short_name: "Jason González",
    description:
      "Senior Frontend Engineer with 7+ years building scalable React and Angular applications. Specialized in accessibility, performance, and TypeScript.",
    start_url: assetPath("/"),
    display: "standalone",
    background_color: "#0b0f1a",
    theme_color: "#fb923c",
    icons: [
      {
        src: assetPath("/favicon.ico"),
        sizes: "any",
        type: "image/x-icon",
      },
      {
        src: assetPath("/icons/icon.svg"),
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
