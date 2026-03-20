import type { Metadata } from "next";
import { BlogCard } from "@/components/Cards";
import { CtaBanner } from "@/components/CtaBanner";
import { SectionHeading } from "@/components/SectionHeading";
import { formatBlogDate, getAllBlogPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Personal Finance Blog for Practical Money Decisions",
  description: "Read practical articles on budgeting, debt payoff, emergency funds, and financial goal planning.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Personal Finance Blog for Practical Money Decisions | Finatic",
    description: "Practical money articles for debt payoff, budgeting, emergency fund stability, and goal planning.",
    url: "https://finatic.app/blog",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Personal Finance Blog for Practical Money Decisions | Finatic",
    description: "Practical money articles for debt payoff, budgeting, emergency fund stability, and goal planning.",
  },
};

export default function BlogPage() {
  const posts = getAllBlogPosts();

  return (
    <main className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="Finatic Blog"
        title="Money guidance for real life"
        description="Each post is built around one practical framework you can apply this week."
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
