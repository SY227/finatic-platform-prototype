import type { Metadata } from "next";
import { BlogCard } from "@/components/Cards";
import { CtaBanner } from "@/components/CtaBanner";
import { SectionHeading } from "@/components/SectionHeading";
import { formatBlogDate, getAllBlogPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog",
  description: "Practical money insights and action steps from Finatic.",
};

export default function BlogPage() {
  const posts = getAllBlogPosts();

  return (
    <main className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="Finatic Blog"
        title="Money guidance for real life"
        description="Clear, practical articles to help you reduce stress, make better decisions, and keep financial momentum."
      />

      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {posts.map((post) => (
          <BlogCard
            key={post.slug}
            href={`/blog/${post.slug}`}
            title={post.title}
            summary={post.excerpt}
            category={post.category}
            date={formatBlogDate(post.publishedAt)}
            readTime={post.readTime}
          />
        ))}
      </div>

      <div className="mt-10">
        <CtaBanner
          title="Ready to turn reading into action?"
          description="Use Finatic to turn these ideas into a personalized weekly plan you can actually follow."
        />
      </div>
    </main>
  );
}
