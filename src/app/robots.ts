import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
      {
        userAgent: ["Googlebot", "Googlebot-Image"],
        allow: [
          "/",
          "/favicon.ico",
          "/favicon.png",
          "/favicon-192.png",
          "/apple-touch-icon.png",
          "/site.webmanifest",
          "/assets/",
        ],
      },
    ],
    sitemap: "https://www.satishphotography.com/sitemap.xml",
  };
}
