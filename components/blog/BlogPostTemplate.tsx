import Link from "next/link";
import { CtaBanner } from "@/components/CtaBanner";
import { BlogPost, formatBlogDate, getAllBlogPosts, getAuthorProfile } from "@/lib/blog";

type Props = { post: BlogPost };

export function BlogPostTemplate({ post }: Props) {
  const related = getAllBlogPosts().filter((p) => p.slug !== post.slug).slice(0, 2);
  const authorProfile = getAuthorProfile(post.author);

  return (
    <main className="mx-auto max-w-3xl px-4 py-14 sm:px-6 lg:px-8">
      <Link href="/blog" className="text-sm font-semibold text-emerald-700 hover:text-emerald-800">
        ← Back to Blog
      </Link>

      <header className="mt-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <p className="text-sm font-semibold uppercase tracking-wide text-emerald-700">{post.category}</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">{post.title}</h1>
        <p className="mt-3 text-sm text-slate-500">
          Published {formatBlogDate(post.publishedAt)} · Updated {formatBlogDate(post.updatedAt)} · {post.readTime}
        </p>
        <p className="mt-1 text-sm text-slate-600">By {post.author} · {post.authorRole}</p>
        <div className="mt-4 rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-sm text-emerald-900">
          <p><strong>Reader promise:</strong> {post.readerPromise}</p>
          <p className="mt-1"><strong>Framework:</strong> {post.framework}</p>
        </div>
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

      <section className="mt-10 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-slate-900">Apply this next</h2>
        <ul className="mt-3 space-y-2 text-sm text-slate-700">
          <li>• <Link href={post.relatedToolHref} className="font-semibold text-emerald-700 hover:text-emerald-800">{post.relatedToolText}</Link></li>
          <li>• <Link href={post.relatedGuideHref} className="font-semibold text-emerald-700 hover:text-emerald-800">{post.relatedGuideText}</Link></li>
          <li>• <Link href={post.siblingPostHref} className="font-semibold text-emerald-700 hover:text-emerald-800">{post.siblingPostText}</Link></li>
          <li>• <Link href="/download" className="font-semibold text-emerald-700 hover:text-emerald-800">Download Finatic and turn this into a weekly plan</Link></li>
        </ul>
      </section>

      {post.references?.length ? (
        <section className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-slate-900">References</h3>
          <ul className="mt-3 space-y-2 text-sm text-slate-700">
            {post.references.map((ref) => (
              <li key={ref.href}>
                • <a href={ref.href} target="_blank" rel="noopener noreferrer" className="font-semibold text-emerald-700 hover:text-emerald-800">{ref.label}</a>
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      <section className="mt-8 rounded-2xl border border-slate-200 bg-slate-50 p-6">
        <h3 className="text-lg font-semibold text-slate-900">Author and editorial note</h3>
        <p className="mt-2 text-sm text-slate-700">
          {authorProfile?.bio ?? `This article was reviewed by ${post.author}.`} Finatic content is educational and intended for general planning support.
          It is not legal, tax, investment, or individualized financial advice.
        </p>
        <Link href="/editorial-policy" className="mt-3 inline-block text-sm font-semibold text-emerald-700 hover:text-emerald-800">
          Read editorial policy →
        </Link>
      </section>

      <section className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h3 className="text-lg font-semibold text-slate-900">Related reading</h3>
        <ul className="mt-3 space-y-2 text-sm text-slate-700">
          {related.map((item) => (
            <li key={item.slug}>• <Link href={`/blog/${item.slug}`} className="font-semibold text-emerald-700 hover:text-emerald-800">{item.title}</Link></li>
          ))}
        </ul>
      </section>

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
