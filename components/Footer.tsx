import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50">
      <div className="mx-auto grid max-w-6xl gap-6 px-4 py-10 text-sm text-slate-600 sm:px-6 lg:grid-cols-3 lg:px-8">
        <div>
          <p className="text-base font-semibold text-slate-900">Finatic</p>
          <p className="mt-2">Practical progress for your money goals.</p>
        </div>
        <div className="space-y-2">
          <Link href="/tools/debt-payoff-calculator" className="block hover:text-emerald-700">Debt Payoff Calculator</Link>
          <Link href="/tools/budget-planner" className="block hover:text-emerald-700">Budget Planner</Link>
          <Link href="/guides/debt-payoff-guide" className="block hover:text-emerald-700">Debt Payoff Guide</Link>
          <Link href="/guides/emergency-fund" className="block hover:text-emerald-700">Emergency Fund Guide</Link>
          <Link href="/guides" className="block hover:text-emerald-700">All Guides</Link>
          <Link href="/blog" className="block hover:text-emerald-700">Blog</Link>
          <Link href="/download" className="block hover:text-emerald-700">Download</Link>
        </div>
        <p className="text-xs leading-relaxed">
          Finatic provides educational information and planning support. It does not provide legal, tax, investment, or fiduciary advice.
        </p>
      </div>
    </footer>
  );
}
