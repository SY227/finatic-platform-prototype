import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BlogPostTemplate } from "@/components/blog/BlogPostTemplate";
import { getAllBlogPosts, getBlogPostBySlug } from "@/lib/blog";
import { absoluteUrl } from "@/lib/seo";

type Params = Promise<{ slug: string }>;

export function generateStaticParams() {
  return getAllBlogPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return { title: "Post Not Found", robots: { index: false, follow: false } };
  }

  const canonicalPath = `/blog/${post.slug}`;
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: canonicalPath },
    openGraph: {
      title: `${post.title} | Finatic`,
      description: post.excerpt,
      type: "article",
      url: absoluteUrl(canonicalPath),
    },
    twitter: {
      card: "summary_large_image",
      title: `${post.title} | Finatic`,
      description: post.excerpt,
    },
  };
}

export default async function BlogPostPage({ params }: { params: Params }) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) notFound();

  const postUrl = absoluteUrl(`/blog/${post.slug}`);
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://finatic.app/" },
      { "@type": "ListItem", position: 2, name: "Blog", item: "https://finatic.app/blog" },
      { "@type": "ListItem", position: 3, name: post.title, item: postUrl },
    ],
  };

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.publishedAt,
    dateModified: post.updatedAt,
    author: { "@type": "Person", name: post.author },
    publisher: { "@type": "Organization", name: "Finatic" },
    mainEntityOfPage: postUrl,
    keywords: [post.primaryKeyword],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <BlogPostTemplate post={post} />
    </>
  );
}
