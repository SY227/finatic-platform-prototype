import type { Metadata } from "next";
import { CtaBanner } from "@/components/CtaBanner";

export const metadata: Metadata = {
  title: "Pay Off Debt Guide",
  description: "A practical guide to prioritizing and paying down debt with consistency.",
};

export default function PayOffDebtGuide() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-14 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold tracking-tight text-slate-900">How to Pay Off Debt Faster</h1>
      <p className="mt-3 text-lg text-slate-600">Debt payoff works best when your strategy matches your behavior, not just the math on paper.</p>

      <section className="mt-8 rounded-2xl border border-cyan-200 bg-cyan-50 p-6">
        <h2 className="font-semibold text-cyan-900">Key takeaways</h2>
        <ul className="mt-3 list-disc space-y-1 pl-5 text-cyan-900/90">
          <li>Choose a method you can stick with: momentum-first or interest-first.</li>
          <li>Automate minimums and apply extra payments immediately.</li>
          <li>Use small milestone rewards to maintain motivation.</li>
        </ul>
      </section>

      <article className="prose prose-slate mt-8 max-w-none">
        <h2>1) Pick your payoff strategy</h2>
        <p>Snowball method: pay smallest balances first for quick wins. Avalanche method: pay highest APR first for lower long-term interest. Both can work.</p>
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
