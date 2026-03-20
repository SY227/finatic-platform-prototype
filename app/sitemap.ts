import type { MetadataRoute } from "next";
import { getAllBlogPosts } from "@/lib/blog";
import { absoluteUrl } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "/",
    "/how-it-works",
    "/tools",
    "/tools/budget-planner",
    "/tools/debt-payoff-calculator",
    "/guides",
    "/guides/debt-payoff-guide",
    "/guides/emergency-fund",
    "/blog",
    "/about",
    "/editorial-policy",
    "/download",
  ];

  const staticEntries = staticRoutes.map((path) => ({
    url: absoluteUrl(path),
    lastModified: new Date(),
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority: path === "/" ? 1 : 0.7,
  })) as MetadataRoute.Sitemap;

  const blogEntries = getAllBlogPosts().map((post) => ({
    url: absoluteUrl(`/blog/${post.slug}`),
    lastModified: new Date(post.publishedAt),
    changeFrequency: "monthly",
    priority: 0.7,
  })) as MetadataRoute.Sitemap;

  return [...staticEntries, ...blogEntries];
}
