import type { Metadata } from "next";
import Link from "next/link";
import { CtaBanner } from "@/components/CtaBanner";
import { BlogCard, FeatureCard, GuideCard, TestimonialCard, ToolCard } from "@/components/Cards";
import { FaqAccordion } from "@/components/FaqAccordion";
import { SectionHeading } from "@/components/SectionHeading";
import { formatBlogDate, getRecentBlogPosts } from "@/lib/blog";
import { absoluteUrl } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Financial Planning Tools, Guides, and Money Routines",
  description:
    "Use Finatic's free debt payoff and budget planning tools plus practical guides on emergency funds and financial goal planning.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Finatic Financial Planning Tools and Guides",
    description:
      "Debt payoff, budgeting, emergency fund, and goal planning resources for practical progress.",
    url: "https://finatic.app/",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Finatic Financial Planning Tools and Guides",
    description:
      "Debt payoff, budgeting, emergency fund, and goal planning resources for practical progress.",
  },
};

const faqs = [
  {
    question: "Is Finatic only for people in debt?",
    answer:
      "No. Finatic is designed for people building stability, improving cash flow, growing savings, and planning future goals.",
  },
  {
    question: "Does Finatic replace a financial advisor?",
    answer:
      "Finatic is an educational progress platform. It helps with planning and habits but does not provide professional fiduciary advice.",
  },
  {
    question: "Can I start before I have a perfect budget?",
    answer:
      "Absolutely. Finatic is built around practical next steps so you can improve week by week, not all at once.",
  },
];

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Finatic",
  url: "https://finatic.app",
  logo: absoluteUrl("/favicon.ico"),
  sameAs: ["https://apps.apple.com/us/app/finatic-reach-financial-goals/id6758930999"],
};

export default function HomePage() {
  const featuredPosts = getRecentBlogPosts(2);

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }} />

      <section className="mx-auto max-w-6xl px-4 pb-16 pt-16 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-br from-emerald-700 via-emerald-600 to-cyan-600 p-10 text-white shadow-xl sm:p-14">
          <p className="text-sm font-semibold uppercase tracking-wide text-emerald-100">Financial progress platform</p>
          <h1 className="mt-3 max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl">Your goals are possible with the right plan and consistent action.</h1>
          <p className="mt-5 max-w-2xl text-lg text-emerald-50">
            Finatic helps you turn money stress into a clear path with personalized goal plans, practical tools, and motivation to keep moving.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/download" className="rounded-full bg-white px-6 py-3 font-semibold text-emerald-700 hover:bg-slate-100">Download Finatic</Link>
            <Link href="/tools" className="rounded-full border border-white/80 px-6 py-3 font-semibold text-white hover:bg-white/10">Explore Tools</Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <SectionHeading title="A more practical way to make money progress" description="Finatic combines planning, education, and momentum so you always know your next move." />
        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <FeatureCard title="Personalized priorities" text="Focus on the highest-impact actions based on your goals and current cash flow." />
          <FeatureCard title="Action-first planning" text="Get clear weekly steps instead of generic advice that is hard to apply." />
          <FeatureCard title="Progress visibility" text="Track your wins over time and stay motivated as milestones get closer." />
          <FeatureCard title="Built for real life" text="Adjust your plan when life changes without losing momentum." />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Goal clusters" title="Start where your life needs it most" />
        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <article className="rounded-2xl border border-slate-200 bg-white p-5 text-slate-700 shadow-sm">
            <p className="font-semibold text-slate-900">Debt payoff</p>
            <Link href="/guides/debt-payoff-guide" className="mt-2 inline-block text-sm font-semibold text-emerald-700">Read debt payoff guide →</Link>
          </article>
          <article className="rounded-2xl border border-slate-200 bg-white p-5 text-slate-700 shadow-sm">
            <p className="font-semibold text-slate-900">Budgeting / cash flow</p>
            <Link href="/tools/budget-planner" className="mt-2 inline-block text-sm font-semibold text-emerald-700">Use budget planner →</Link>
          </article>
          <article className="rounded-2xl border border-slate-200 bg-white p-5 text-slate-700 shadow-sm">
            <p className="font-semibold text-slate-900">Emergency fund / stability</p>
            <Link href="/guides/emergency-fund" className="mt-2 inline-block text-sm font-semibold text-emerald-700">Read emergency fund guide →</Link>
          </article>
          <article className="rounded-2xl border border-slate-200 bg-white p-5 text-slate-700 shadow-sm">
            <p className="font-semibold text-slate-900">Goal planning</p>
            <Link href="/blog/72-hour-money-reset" className="mt-2 inline-block text-sm font-semibold text-emerald-700">Start 30-day money plan →</Link>
          </article>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Tools" title="Interactive calculators that make planning easier" />
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          <ToolCard href="/tools/budget-planner" title="Budget Planner" text="Map monthly income and essential spending to uncover realistic savings room." />
          <ToolCard href="/tools/debt-payoff-calculator" title="Debt Payoff Calculator" text="Estimate timelines and total interest based on your payment strategy." />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Guides" title="Step-by-step education you can actually use" />
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          <GuideCard href="/guides/emergency-fund" title="How to Build an Emergency Fund" summary="A realistic framework to save your first safety net and protect your plan from surprises." />
          <GuideCard href="/guides/debt-payoff-guide" title="How to Pay Off Debt Faster" summary="Compare payoff methods, reduce friction, and create a payoff rhythm you can sustain." />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Blog"
          title="Fresh financial insights for everyday decisions"
          description="Read practical breakdowns that help you feel less overwhelmed and more in control."
        />
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {featuredPosts.map((post) => (
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
        <Link
          href="/blog"
          className="mt-6 inline-block font-semibold text-emerald-700 hover:text-emerald-800"
        >
          Browse all articles →
        </Link>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="How it works" title="Three steps to consistent progress" />
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {[
            ["1. Set your goal", "Choose the goal that matters most right now."],
            ["2. Get your plan", "Finatic maps clear, achievable next actions."],
            ["3. Build momentum", "Track wins and adapt as your life changes."],
          ].map(([title, text]) => (
            <FeatureCard key={title} title={title} text={text} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Social proof" title="What early users are saying" />
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          <TestimonialCard quote="This helped me stop guessing and start acting on my budget." name="Alex P., Austin" />
          <TestimonialCard quote="The debt planner made my payoff timeline finally feel real." name="Jordan M., Seattle" />
          <TestimonialCard quote="I like that it feels motivating without being overwhelming." name="Sam R., Atlanta" />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="FAQ" title="Questions people ask before they start" />
        <div className="mt-8"><FaqAccordion items={faqs} /></div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-16 pt-4 sm:px-6 lg:px-8">
        <CtaBanner title="Ready to make steady financial progress?" description="Download Finatic and turn goals into a clear weekly plan." />
      </section>
    </main>
  );
}
