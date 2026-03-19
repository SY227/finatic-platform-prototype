"use client";

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
      { "@type": "ListItem", position: 3, name: "Debt Payoff Calculator", item: "https://finatic.app/tools/debt-payoff-calculator" }
    ]
  };

  return (
    <main className="mx-auto max-w-4xl px-4 py-14 sm:px-6 lg:px-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Debt Payoff Calculator</h1>
      <p className="mt-3 text-slate-600">Use your current balance, APR, and payment amount to estimate your payoff timeline.</p>

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

      <div className="mt-10">
        <CtaBanner title="Track your debt progress in one place" description="Download Finatic to keep your payoff plan visible and momentum strong." />
      </div>
    </main>
  );
}
