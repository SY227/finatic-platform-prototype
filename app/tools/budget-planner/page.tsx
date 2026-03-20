"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { CtaBanner } from "@/components/CtaBanner";

export default function BudgetPlannerPage() {
  const [income, setIncome] = useState(5000);
  const [housing, setHousing] = useState(1600);
  const [utilities, setUtilities] = useState(300);
  const [food, setFood] = useState(600);
  const [transport, setTransport] = useState(450);
  const [other, setOther] = useState(500);

  const summary = useMemo(() => {
    const totalExpenses = housing + utilities + food + transport + other;
    const remaining = income - totalExpenses;
    const savingsRate = income > 0 ? Math.max((remaining / income) * 100, 0) : 0;
    return { totalExpenses, remaining, savingsRate };
  }, [income, housing, utilities, food, transport, other]);

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://finatic.app/" },
      { "@type": "ListItem", position: 2, name: "Tools", item: "https://finatic.app/tools" },
      { "@type": "ListItem", position: 3, name: "Budget Planner", item: "https://finatic.app/tools/budget-planner" },
    ],
  };

  return (
    <main className="mx-auto max-w-4xl px-4 py-14 sm:px-6 lg:px-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Free Monthly Budget Planner</h1>
      <p className="mt-3 text-slate-600">Estimate your monthly cash flow and see how much margin you can direct toward goals.</p>

      <section className="mt-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm space-y-4 text-slate-700">
        <p>
          Most budgets fail because people start too detailed and too optimistic. This planner is designed for real-world use:
          income, major expenses, and one clear number for your remaining margin. If your margin is positive, you can
          assign it to debt payoff, emergency savings, or a mixed plan. If your margin is negative, you know you need
          a short-term spending reset before setting aggressive goals.
        </p>
        <p>
          Example: if you bring in $5,000 and your core expenses are $4,200, your margin is $800. You might direct
          $500 toward high-interest debt and $300 toward a starter emergency fund. If your margin is only $150, your
          first priority is protecting essentials and reducing leak categories before trying to optimize everything.
        </p>
        <p>
          Use this result as a weekly decision tool, not a one-time scorecard. Recheck after big changes (rent,
          insurance, income shifts) and keep your plan realistic enough to follow through.
        </p>
      </section>

      <div className="mt-8 grid gap-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:grid-cols-2">
        {[
          ["Monthly income", income, setIncome],
          ["Housing", housing, setHousing],
          ["Utilities", utilities, setUtilities],
          ["Food", food, setFood],
          ["Transportation", transport, setTransport],
          ["Other spending", other, setOther],
        ].map(([label, value, setValue]) => (
          <label key={label as string} className="space-y-1 text-sm font-medium text-slate-700">
            {label as string}
            <input
              type="number"
              className="w-full rounded-lg border border-slate-300 px-3 py-2"
              value={value as number}
              onChange={(e) => (setValue as (v: number) => void)(Number(e.target.value) || 0)}
            />
          </label>
        ))}
      </div>

      <section className="mt-8 rounded-2xl bg-slate-900 p-6 text-white">
        <h2 className="text-xl font-semibold">Budget Summary</h2>
        <div className="mt-4 grid gap-3 sm:grid-cols-3">
          <p>Total expenses: <span className="font-semibold">${summary.totalExpenses.toLocaleString()}</span></p>
          <p>Remaining margin: <span className="font-semibold">${summary.remaining.toLocaleString()}</span></p>
          <p>Potential savings rate: <span className="font-semibold">{summary.savingsRate.toFixed(1)}%</span></p>
        </div>
      </section>

      <section className="mt-8 grid gap-4 md:grid-cols-2">
        <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-slate-900">How to use this result</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-slate-700">
            <li>If margin is positive, pre-assign it to debt payoff and/or emergency savings.</li>
            <li>If margin is near zero, reduce one flexible category this week and re-check.</li>
            <li>If margin is negative, prioritize bill sequencing and short-term expense triage.</li>
          </ul>
        </article>
        <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-slate-900">Common mistakes</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-slate-700">
            <li>Budgeting from your best month instead of your normal month.</li>
            <li>Ignoring annual/irregular costs like car maintenance or school fees.</li>
            <li>Treating one overspend as total failure and abandoning the plan.</li>
          </ul>
        </article>
      </section>

      <section className="mt-8 rounded-2xl border border-slate-200 bg-slate-50 p-6 text-sm text-slate-700">
        <p><strong>Methodology note:</strong> This planner is a simplified cash-flow model for education. It does not include taxes, investment returns, credit underwriting criteria, or individualized financial advice.</p>
        <p className="mt-2"><strong>Last updated:</strong> March 19, 2026</p>
      </section>

      <section className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-slate-900">Related guidance</h2>
        <ul className="mt-3 space-y-2 text-sm text-slate-700">
          <li>• <Link href="/guides/emergency-fund" className="font-semibold text-emerald-700 hover:text-emerald-800">Emergency Fund Guide: build your first stability buffer</Link></li>
          <li>• <Link href="/blog/how-to-make-a-budget-when-you-hate-budgeting" className="font-semibold text-emerald-700 hover:text-emerald-800">How to make a budget when you hate budgeting</Link></li>
          <li>• <Link href="/blog/how-to-budget-on-an-irregular-income" className="font-semibold text-emerald-700 hover:text-emerald-800">How to budget on an irregular income</Link></li>
          <li>• <Link href="/download" className="font-semibold text-emerald-700 hover:text-emerald-800">Download Finatic and turn this into a weekly routine</Link></li>
        </ul>
      </section>

      <div className="mt-10">
        <CtaBanner title="Ready to make this your weekly plan?" description="Download Finatic to turn your budget numbers into actionable next steps." />
      </div>
    </main>
  );
}
