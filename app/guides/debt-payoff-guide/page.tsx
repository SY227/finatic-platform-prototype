import type { Metadata } from "next";
import { CtaBanner } from "@/components/CtaBanner";

export const metadata: Metadata = {
  title: "Debt Payoff Guide: Methods, Timeline, and Extra Payments",
  description: "Compare debt payoff methods, estimate payoff timeline impact, and use extra payments to reduce total interest.",
  alternates: { canonical: "/guides/debt-payoff-guide" },
  openGraph: {
    title: "Debt Payoff Guide: Methods, Timeline, and Extra Payments | Finatic",
    description: "Snowball vs avalanche, credit card and personal loan payoff strategy, and extra payment tactics.",
    url: "https://finatic.app/guides/debt-payoff-guide",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Debt Payoff Guide: Methods, Timeline, and Extra Payments | Finatic",
    description: "Snowball vs avalanche, credit card and personal loan payoff strategy, and extra payment tactics.",
  },
};

export default function DebtPayoffGuide() {
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://finatic.app/" },
      { "@type": "ListItem", position: 2, name: "Guides", item: "https://finatic.app/guides" },
      { "@type": "ListItem", position: 3, name: "Debt Payoff Guide", item: "https://finatic.app/guides/debt-payoff-guide" }
    ]
  };

  return (
    <main className="mx-auto max-w-3xl px-4 py-14 sm:px-6 lg:px-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <h1 className="text-3xl font-bold tracking-tight text-slate-900">How to Pay Off Debt Faster</h1>
      <p className="mt-3 text-lg text-slate-600">Debt payoff works best when your strategy matches your behavior, not just the math on paper.</p>

      <section className="mt-8 rounded-2xl border border-cyan-200 bg-cyan-50 p-6">
        <h2 className="font-semibold text-cyan-900">Key takeaways</h2>
        <ul className="mt-3 list-disc space-y-1 pl-5 text-cyan-900/90">
          <li>Choose a method you can stick with: snowball for momentum or avalanche for lower interest.</li>
          <li>Automate minimums and apply extra payments immediately.</li>
          <li>Use milestone rewards to maintain motivation through long payoff timelines.</li>
        </ul>
      </section>

      <article className="prose prose-slate mt-8 max-w-none">
        <h2>1) Pick your payoff strategy</h2>
        <p>Snowball method: pay smallest balances first for quick wins. Avalanche method: pay highest APR first for lower long-term interest. Both can work for credit cards and personal loans.</p>
        <h2>2) Create a payoff buffer</h2>
        <p>Before aggressive payoff, set aside a small emergency buffer so minor surprises do not push you back into new debt.</p>
        <h2>3) Increase monthly principal</h2>
        <p>Redirect raises, side income, and reduced subscriptions toward debt. Even moderate additional payments can materially shorten payoff time.</p>
        <h2>4) Track visible progress</h2>
        <p>Seeing balances drop keeps motivation alive. Update progress weekly and celebrate each account closure.</p>
      </article>

      <div className="mt-10">
        <CtaBanner title="Get a payoff plan you can sustain" description="Download Finatic to track debt balances and next steps in one place." />
      </div>
    </main>
  );
}
