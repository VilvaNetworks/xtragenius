import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://xtragenius.com";

  const staticRoutes = [
    "",
    "/company/",
    "/mds-message/",
    "/partner-with-us/",
    "/courses/",
    "/courses/abacus/",
    "/vedic-math/",
    "/mind-dart/",
    "/hand-writing/",
    "/contact-us/",
    "/faqs/",
    "/our-team/",
    "/our-culture/",
    "/offline-competition/",
    "/online-competition/",
    "/rank/",
  ];

  return staticRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "daily" : "weekly",
    priority:
      route === ""
        ? 1.0
        : route.startsWith("/courses/") ||
          route.startsWith("/vedic-math/") ||
          route.startsWith("/mind-dart/") ||
          route.startsWith("/hand-writing/")
        ? 0.8
        : 0.5,
  }));
}
