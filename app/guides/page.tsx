import type { Metadata } from "next";
import Link from "next/link";
import { CtaBanner } from "@/components/CtaBanner";
import { GuideCard } from "@/components/Cards";
import { SectionHeading } from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Personal Finance Guides by Topic",
  description: "Explore practical guides for debt payoff, budgeting, emergency funds, and financial goal planning.",
  alternates: { canonical: "/guides" },
  openGraph: {
    title: "Personal Finance Guides by Topic | Finatic",
    description: "Debt payoff, budgeting, emergency fund, and goal planning guides.",
    url: "https://finatic.app/guides",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Personal Finance Guides by Topic | Finatic",
    description: "Debt payoff, budgeting, emergency fund, and goal planning guides.",
  },
};

export default function GuidesPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
      <SectionHeading eyebrow="Learning hub" title="Finance guides organized by search intent" />

      <section className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-2xl font-bold text-slate-900">Debt payoff cluster</h2>
        <p className="mt-2 text-slate-600">Debt payoff calculator, payoff methods, snowball vs avalanche, extra payments, and timeline strategy.</p>
        <div className="mt-3">
          <GuideCard href="/guides/debt-payoff-guide" title="Debt Payoff Guide" summary="Methods, behavior tips, and momentum tactics for faster payoff." />
        </div>
        <div className="mt-3 text-sm font-semibold text-emerald-700">
          <Link href="/tools/debt-payoff-calculator">Use debt payoff calculator →</Link>
        </div>
      </section>

      <section className="mt-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-2xl font-bold text-slate-900">Budgeting / cash flow cluster</h2>
        <p className="mt-2 text-slate-600">Monthly budget planning, zero-based budgeting, paycheck budgeting, variable income, and expense reduction.</p>
        <div className="mt-3 text-sm font-semibold text-emerald-700">
          <Link href="/tools/budget-planner">Use monthly budget planner →</Link>
        </div>
      </section>

      <section className="mt-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-2xl font-bold text-slate-900">Emergency fund / stability cluster</h2>
        <p className="mt-2 text-slate-600">Starter emergency fund, where to keep savings, and how to rebuild after withdrawals.</p>
        <div className="mt-3">
          <GuideCard href="/guides/emergency-fund" title="Emergency Fund Guide" summary="A clear path from your first starter fund to a stronger stability cushion." />
        </div>
      </section>

      <section className="mt-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-2xl font-bold text-slate-900">Goal planning cluster</h2>
        <p className="mt-2 text-slate-600">How to prioritize goals, debt vs savings tradeoffs, first 30-day plan, and weekly money routine.</p>
        <div className="mt-3 text-sm font-semibold text-emerald-700">
          <Link href="/blog/72-hour-money-reset">Read the 72-hour money reset article →</Link>
        </div>
      </section>

      <div className="mt-10">
        <CtaBanner title="Turn these lessons into action" description="Download Finatic for step-by-step planning based on your own numbers." />
      </div>
    </main>
  );
}
