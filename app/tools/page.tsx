import type { Metadata } from "next";
import Link from "next/link";
import { CtaBanner } from "@/components/CtaBanner";
import { SectionHeading } from "@/components/SectionHeading";
import { ToolCard } from "@/components/Cards";

export const metadata: Metadata = {
  title: "Financial Calculators and Planning Tools",
  description: "Use Finatic's free debt payoff calculator and monthly budget planner to estimate timelines, interest, and cash flow.",
  alternates: { canonical: "/tools" },
  openGraph: {
    title: "Free Financial Calculators and Planning Tools | Finatic",
    description: "Debt payoff and budget planning tools for practical money decisions.",
    url: "https://finatic.app/tools",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Financial Calculators and Planning Tools | Finatic",
    description: "Debt payoff and budget planning tools for practical money decisions.",
  },
};

export default function ToolsPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
      <SectionHeading eyebrow="Tools hub" title="Interactive planning tools" description="Use these tools to turn rough numbers into a practical action plan." />
      <div className="mt-8 grid gap-4 md:grid-cols-2">
        <ToolCard href="/tools/budget-planner" title="Free Monthly Budget Planner" text="Estimate monthly cash flow, find spending margin, and support zero-based or paycheck budgeting." />
        <ToolCard href="/tools/debt-payoff-calculator" title="Debt Payoff Calculator" text="Estimate payoff timeline, total interest, and impact of extra monthly payments." />
      </div>

      <section className="mt-10 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-2xl font-bold tracking-tight text-slate-900">Search-intent clusters supported</h2>
        <ul className="mt-4 space-y-2 text-slate-700">
          <li>• Debt payoff cluster: calculator, payoff timeline, extra payment scenarios</li>
          <li>• Budgeting / cash flow cluster: monthly planning and savings room estimation</li>
        </ul>
        <p className="mt-4 text-sm text-slate-600">
          Next planned tools: emergency fund calculator, snowball vs avalanche comparison, variable income budget planner.
        </p>
        <div className="mt-3 flex flex-wrap gap-4 text-sm font-semibold text-emerald-700">
          <Link href="/guides/debt-payoff-guide">Read debt payoff methods guide →</Link>
          <Link href="/guides/emergency-fund">Read emergency fund guide →</Link>
        </div>
      </section>

      <div className="mt-10">
        <CtaBanner title="Want these tools with guided next steps?" description="Use Finatic to keep all your plans, goals, and progress in one place." />
      </div>
    </main>
  );
}
