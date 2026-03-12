"use client";

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

  return (
    <main className="mx-auto max-w-4xl px-4 py-14 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Budget Planner</h1>
      <p className="mt-3 text-slate-600">Estimate your monthly cash flow and see how much margin you can direct toward goals.</p>

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
        <h2 className="text-xl font-semibold">Summary</h2>
        <div className="mt-4 grid gap-3 sm:grid-cols-3">
          <p>Total expenses: <span className="font-semibold">${summary.totalExpenses.toLocaleString()}</span></p>
          <p>Remaining margin: <span className="font-semibold">${summary.remaining.toLocaleString()}</span></p>
          <p>Potential savings rate: <span className="font-semibold">{summary.savingsRate.toFixed(1)}%</span></p>
        </div>
      </section>

      <div className="mt-10">
        <CtaBanner title="Ready to make this your weekly plan?" description="Download Finatic to turn your budget numbers into actionable next steps." />
      </div>
    </main>
  );
}
