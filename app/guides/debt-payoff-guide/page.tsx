import type { Metadata } from "next";
import Link from "next/link";
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
      { "@type": "ListItem", position: 3, name: "Debt Payoff Guide", item: "https://finatic.app/guides/debt-payoff-guide" },
    ],
  };

  return (
    <main className="mx-auto max-w-3xl px-4 py-14 sm:px-6 lg:px-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <h1 className="text-3xl font-bold tracking-tight text-slate-900">How to Pay Off Debt Faster</h1>
      <p className="mt-3 text-lg text-slate-600">Use a method you can sustain, not just one that looks good on paper.</p>
      <p className="mt-2 text-sm text-slate-500">Last updated: March 19, 2026</p>

      <section className="mt-8 rounded-2xl border border-cyan-200 bg-cyan-50 p-6">
        <h2 className="font-semibold text-cyan-900">When to use this approach</h2>
        <p className="mt-2 text-cyan-900/90">Use this guide when minimum payments are consuming too much monthly margin, balances are not shrinking fast enough, or payoff feels unstructured.</p>
      </section>

      <article className="prose prose-slate mt-8 max-w-none">
        <h2>1) Pick your method: avalanche, snowball, or hybrid</h2>
        <p>
          Avalanche targets highest APR first and usually minimizes interest. Snowball targets smallest balance first and often improves motivation early.
          Hybrid works for many people: close one small balance for momentum, then switch to avalanche.
        </p>

        <h2>2) Build a small buffer before aggressive payoff</h2>
        <p>
          Without any emergency cushion, a normal setback can send you back to borrowing. A starter buffer protects payoff consistency.
          This is especially important for households with variable income or unstable expenses.
        </p>

        <h2>3) Set a realistic extra-payment rule</h2>
        <p>
          A sustainable extra payment beats an ambitious amount you miss repeatedly. Example: commit to an additional $100 every payday,
          then increase after each debt closure.
        </p>

        <h2>4) Track progress weekly, not emotionally</h2>
        <p>
          Weekly tracking prevents drift. Monthly-only check-ins often hide problems until they become discouraging.
        </p>
      </article>

      <section className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-slate-900">Common mistakes</h2>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-slate-700">
          <li>Switching methods every month and losing focus.</li>
          <li>Ignoring due-date sequencing and triggering avoidable late fees.</li>
          <li>Skipping a starter emergency buffer, then adding new debt during surprises.</li>
        </ul>
      </section>

      <section className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-slate-900">FAQs</h2>
        <div className="mt-4 space-y-4 text-sm text-slate-700">
          <div>
            <p className="font-semibold text-slate-900">Is snowball always worse than avalanche?</p>
            <p>No. Avalanche often saves more interest, but snowball can outperform if it helps you stay consistent long enough to finish.</p>
          </div>
          <div>
            <p className="font-semibold text-slate-900">Should I stop saving while paying debt?</p>
            <p>Usually no. A starter buffer can reduce reliance on debt when unexpected costs hit.</p>
          </div>
        </div>
      </section>

      <section className="mt-8 rounded-2xl border border-slate-200 bg-slate-50 p-6 text-sm text-slate-700">
        <p><strong>Educational note:</strong> This guide provides general educational information and is not individualized legal, tax, credit counseling, or investment advice.</p>
        <p className="mt-2"><strong>Reference:</strong> Consumer Financial Protection Bureau guidance on debt collection and repayment rights can provide additional context for debt management decisions.</p>
      </section>

      <section className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-slate-900">Related resources</h2>
        <ul className="mt-3 space-y-2 text-sm text-slate-700">
          <li>• <Link href="/tools/debt-payoff-calculator" className="font-semibold text-emerald-700 hover:text-emerald-800">Debt Payoff Calculator: estimate timeline and interest</Link></li>
          <li>• <Link href="/blog/debt-snowball-vs-avalanche-for-real-people" className="font-semibold text-emerald-700 hover:text-emerald-800">Debt snowball vs avalanche for real people</Link></li>
          <li>• <Link href="/blog/what-to-do-when-your-paycheck-is-already-spoken-for" className="font-semibold text-emerald-700 hover:text-emerald-800">What to do when your paycheck is already spoken for</Link></li>
          <li>• <Link href="/download" className="font-semibold text-emerald-700 hover:text-emerald-800">Download Finatic to run your debt plan weekly</Link></li>
        </ul>
      </section>

      <div className="mt-10">
        <CtaBanner title="Get a payoff plan you can sustain" description="Download Finatic to track debt balances and next steps in one place." />
      </div>
    </main>
  );
}
