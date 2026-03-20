import type { Metadata } from "next";
import Link from "next/link";
import { CtaBanner } from "@/components/CtaBanner";

export const metadata: Metadata = {
  title: "Emergency Fund Guide: Build and Rebuild Savings",
  description: "Learn how to build a starter emergency fund, where to keep it, and how to rebuild after an emergency expense.",
  alternates: { canonical: "/guides/emergency-fund" },
  openGraph: {
    title: "Emergency Fund Guide: Build and Rebuild Savings | Finatic",
    description: "Starter emergency fund strategy, account setup, and rebuild plan.",
    url: "https://finatic.app/guides/emergency-fund",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Emergency Fund Guide: Build and Rebuild Savings | Finatic",
    description: "Starter emergency fund strategy, account setup, and rebuild plan.",
  },
};

export default function EmergencyFundGuide() {
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://finatic.app/" },
      { "@type": "ListItem", position: 2, name: "Guides", item: "https://finatic.app/guides" },
      { "@type": "ListItem", position: 3, name: "Emergency Fund Guide", item: "https://finatic.app/guides/emergency-fund" },
    ],
  };

  return (
    <main className="mx-auto max-w-3xl px-4 py-14 sm:px-6 lg:px-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <h1 className="text-3xl font-bold tracking-tight text-slate-900">How to Build an Emergency Fund</h1>
      <p className="mt-3 text-lg text-slate-600">A staged approach that protects your plan when life gets expensive unexpectedly.</p>
      <p className="mt-2 text-sm text-slate-500">Last updated: March 19, 2026</p>

      <section className="mt-8 rounded-2xl border border-emerald-200 bg-emerald-50 p-6">
        <h2 className="font-semibold text-emerald-900">When to use this approach</h2>
        <p className="mt-2 text-emerald-900/90">Use this if one surprise expense would push you into new debt, missed bills, or borrowing from essentials.</p>
      </section>

      <article className="prose prose-slate mt-8 max-w-none">
        <h2>1) Set a starter target you can hit quickly</h2>
        <p>
          Your first target should be realistic enough to reach in weeks, not years. The purpose is stability, not perfection.
          A quick win builds confidence and reduces panic spending when unexpected costs hit.
        </p>

        <h2>2) Automate a repeatable contribution</h2>
        <p>
          Even small automatic transfers create momentum. The amount matters less than consistency in the early stage.
          Tie transfers to payday so savings happen before discretionary spending.
        </p>

        <h2>3) Keep emergency savings separate</h2>
        <p>
          A separate savings account reduces accidental spending. Many people use high-yield savings for better yield while preserving liquidity.
        </p>

        <h2>4) Rebuild immediately after using the fund</h2>
        <p>
          Emergency fund use is normal, not failure. The key is fast rebuild behavior after withdrawal.
        </p>
      </article>

      <section className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-slate-900">Common misunderstandings</h2>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-slate-700">
          <li>&ldquo;I need a perfect 6-month fund before doing anything else.&rdquo;</li>
          <li>&ldquo;If I use my emergency savings, I failed.&rdquo;</li>
          <li>&ldquo;Emergency savings should stay in checking for convenience.&rdquo;</li>
        </ul>
      </section>

      <section className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-slate-900">FAQs</h2>
        <div className="mt-4 space-y-4 text-sm text-slate-700">
          <div>
            <p className="font-semibold text-slate-900">Where should I keep emergency savings?</p>
            <p>Usually in a separate, liquid savings account. FDIC-insured banks and NCUA-insured credit unions can help protect deposits within coverage limits.</p>
          </div>
          <div>
            <p className="font-semibold text-slate-900">Should I save or pay debt first?</p>
            <p>Many people do both: build a starter emergency buffer while making debt minimums, then increase debt payoff intensity.</p>
          </div>
        </div>
      </section>

      <section className="mt-8 rounded-2xl border border-slate-200 bg-slate-50 p-6 text-sm text-slate-700">
        <p><strong>Educational note:</strong> This guide is educational only and does not provide legal, tax, investment, or individualized financial advice.</p>
        <p className="mt-2"><strong>References:</strong> FDIC consumer guidance on deposit insurance and CFPB financial education materials for household money management.</p>
      </section>

      <section className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-slate-900">Related resources</h2>
        <ul className="mt-3 space-y-2 text-sm text-slate-700">
          <li>• <Link href="/tools/budget-planner" className="font-semibold text-emerald-700 hover:text-emerald-800">Use the budget planner to fund your emergency savings</Link></li>
          <li>• <Link href="/blog/starter-emergency-fund-how-much-is-enough" className="font-semibold text-emerald-700 hover:text-emerald-800">Starter emergency fund: how much is enough?</Link></li>
          <li>• <Link href="/blog/how-to-budget-on-an-irregular-income" className="font-semibold text-emerald-700 hover:text-emerald-800">How to budget on an irregular income</Link></li>
          <li>• <Link href="/download" className="font-semibold text-emerald-700 hover:text-emerald-800">Download Finatic to track savings milestones weekly</Link></li>
        </ul>
      </section>

      <div className="mt-10">
        <CtaBanner title="Build your emergency fund with a clear plan" description="Download Finatic and track your savings milestones week by week." />
      </div>
    </main>
  );
}
