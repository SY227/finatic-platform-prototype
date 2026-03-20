"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { CtaBanner } from "@/components/CtaBanner";

export default function DebtPayoffCalculatorPage() {
  const [balance, setBalance] = useState(12000);
  const [apr, setApr] = useState(18);
  const [monthlyPayment, setMonthlyPayment] = useState(350);

  const result = useMemo(() => {
    const monthlyRate = apr / 100 / 12;
    if (monthlyPayment <= balance * monthlyRate) {
      return { months: Infinity, interest: Infinity };
    }

    let b = balance;
    let months = 0;
    let interestPaid = 0;

    while (b > 0 && months < 600) {
      const interest = b * monthlyRate;
      const principal = monthlyPayment - interest;
      interestPaid += interest;
      b -= principal;
      months += 1;
    }

    return { months, interest: interestPaid };
  }, [balance, apr, monthlyPayment]);

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://finatic.app/" },
      { "@type": "ListItem", position: 2, name: "Tools", item: "https://finatic.app/tools" },
      { "@type": "ListItem", position: 3, name: "Debt Payoff Calculator", item: "https://finatic.app/tools/debt-payoff-calculator" },
    ],
  };

  return (
    <main className="mx-auto max-w-4xl px-4 py-14 sm:px-6 lg:px-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Debt Payoff Calculator</h1>
      <p className="mt-3 text-slate-600">Use your current balance, APR, and payment amount to estimate your payoff timeline.</p>

      <section className="mt-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm space-y-4 text-slate-700">
        <p>
          This calculator helps you answer two practical questions: &ldquo;How long will this debt take to clear?&rdquo; and
          &ldquo;How much interest will I likely pay if nothing changes?&rdquo; Seeing both numbers makes payoff strategy more
          concrete than just paying whatever feels possible each month.
        </p>
        <p>
          Example: with a $12,000 balance at 18% APR, paying $350 monthly produces a very different timeline than
          paying $450. Even modest extra payments can remove multiple months and reduce total interest meaningfully.
          If your payment is near interest-only territory, your balance may barely move; that is a signal to change
          strategy quickly.
        </p>
        <p>
          Use this estimate to choose realistic next actions: raise your monthly payment target, cut one recurring
          expense and redirect it, or close one smaller balance for momentum while maintaining minimums on others.
        </p>
      </section>

      <div className="mt-8 grid gap-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:grid-cols-3">
        <label className="space-y-1 text-sm font-medium text-slate-700">
          Total debt balance
          <input type="number" className="w-full rounded-lg border border-slate-300 px-3 py-2" value={balance} onChange={(e) => setBalance(Number(e.target.value) || 0)} />
        </label>
        <label className="space-y-1 text-sm font-medium text-slate-700">
          APR (%)
          <input type="number" className="w-full rounded-lg border border-slate-300 px-3 py-2" value={apr} onChange={(e) => setApr(Number(e.target.value) || 0)} />
        </label>
        <label className="space-y-1 text-sm font-medium text-slate-700">
          Monthly payment
          <input type="number" className="w-full rounded-lg border border-slate-300 px-3 py-2" value={monthlyPayment} onChange={(e) => setMonthlyPayment(Number(e.target.value) || 0)} />
        </label>
      </div>

      <section className="mt-8 rounded-2xl bg-slate-900 p-6 text-white">
        <h2 className="text-xl font-semibold">Estimated payoff timeline and interest</h2>
        {Number.isFinite(result.months) ? (
          <div className="mt-4 space-y-2">
            <p>Estimated payoff time: <span className="font-semibold">{result.months} months</span></p>
            <p>Estimated interest paid: <span className="font-semibold">${result.interest.toFixed(0)}</span></p>
          </div>
        ) : (
          <p className="mt-4">Increase your monthly payment to exceed monthly interest and start reducing principal.</p>
        )}
      </section>

      <section className="mt-8 grid gap-4 md:grid-cols-2">
        <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-slate-900">How to use this result</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-slate-700">
            <li>Set a target payoff date and required payment to hit it.</li>
            <li>Test one extra-payment scenario and compare months saved.</li>
            <li>Use weekly check-ins to keep payment consistency high.</li>
          </ul>
        </article>
        <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-slate-900">Common mistakes</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-slate-700">
            <li>Ignoring fees or variable APR changes over time.</li>
            <li>Choosing an aggressive payment you cannot sustain monthly.</li>
            <li>Skipping emergency buffer planning, then relying on debt again.</li>
          </ul>
        </article>
      </section>

      <section className="mt-8 rounded-2xl border border-slate-200 bg-slate-50 p-6 text-sm text-slate-700">
        <p><strong>Methodology note:</strong> This estimate assumes fixed APR and consistent monthly payment. It is educational and does not replace lender amortization schedules or personalized financial advice.</p>
        <p className="mt-2"><strong>Last updated:</strong> March 19, 2026</p>
      </section>

      <section className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-slate-900">Related guidance</h2>
        <ul className="mt-3 space-y-2 text-sm text-slate-700">
          <li>• <Link href="/guides/debt-payoff-guide" className="font-semibold text-emerald-700 hover:text-emerald-800">Debt Payoff Guide: methods, timeline, and extra payments</Link></li>
          <li>• <Link href="/blog/debt-snowball-vs-avalanche-for-real-people" className="font-semibold text-emerald-700 hover:text-emerald-800">Debt snowball vs avalanche for real people</Link></li>
          <li>• <Link href="/blog/how-to-pay-off-credit-card-debt-faster" className="font-semibold text-emerald-700 hover:text-emerald-800">How to pay off credit card debt faster</Link></li>
          <li>• <Link href="/download" className="font-semibold text-emerald-700 hover:text-emerald-800">Download Finatic and track your payoff plan weekly</Link></li>
        </ul>
      </section>

      <div className="mt-10">
        <CtaBanner title="Track your debt progress in one place" description="Download Finatic to keep your payoff plan visible and momentum strong." />
      </div>
    </main>
  );
}
