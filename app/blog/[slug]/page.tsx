import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CtaBanner } from "@/components/CtaBanner";
import { formatBlogDate, getAllBlogPosts, getBlogPostBySlug } from "@/lib/blog";

type Params = {
  slug: string;
};

export function generateStaticParams() {
  return getAllBlogPosts().map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }: { params: Params }): Metadata {
  const post = getBlogPostBySlug(params.slug);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default function BlogPostPage({ params }: { params: Params }) {
  const post = getBlogPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-3xl px-4 py-14 sm:px-6 lg:px-8">
      <Link href="/blog" className="text-sm font-semibold text-emerald-700 hover:text-emerald-800">
        ← Back to Blog
      </Link>

      <header className="mt-4">
        <p className="text-sm font-semibold uppercase tracking-wide text-emerald-700">{post.category}</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">{post.title}</h1>
        <p className="mt-3 text-sm text-slate-500">
          {formatBlogDate(post.publishedAt)} · {post.readTime} · {post.author}
        </p>
      </header>

      <div className="mt-6 space-y-4 text-lg text-slate-700">
        {post.intro.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>

      <section className="mt-8 rounded-2xl border border-emerald-200 bg-emerald-50 p-6">
        <h2 className="font-semibold text-emerald-900">Key takeaways</h2>
        <ul className="mt-3 list-disc space-y-1 pl-5 text-emerald-900/90">
          {post.keyTakeaways.map((takeaway) => (
            <li key={takeaway}>{takeaway}</li>
          ))}
        </ul>
      </section>

      <article className="mt-10 space-y-8 text-slate-700">
        {post.sections.map((section) => (
          <section key={section.heading} className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight text-slate-900">{section.heading}</h2>
            {section.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            {section.bullets?.length ? (
              <ul className="list-disc space-y-1 pl-5">
                {section.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            ) : null}
          </section>
        ))}
      </article>

      <div className="mt-12">
        <CtaBanner
          title="Want a plan built around your real numbers?"
          description="Finatic helps you turn these ideas into focused weekly actions and measurable progress."
          primaryLabel="Download Finatic"
          primaryHref="/download"
          secondaryLabel="Read More Articles"
          secondaryHref="/blog"
        />
      </div>
    </main>
  );
}
