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
          <Link href="/tools" className="block hover:text-emerald-700">Tools</Link>
          <Link href="/guides" className="block hover:text-emerald-700">Guides</Link>
          <Link href="/download" className="block hover:text-emerald-700">Download</Link>
        </div>
        <p className="text-xs leading-relaxed">
          Finatic provides educational information and planning support. It does not provide legal, tax, investment, or fiduciary advice.
        </p>
      </div>
    </footer>
  );
}
