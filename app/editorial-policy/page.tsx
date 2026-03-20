import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Editorial Policy",
  description: "How Finatic creates, reviews, and updates educational personal finance content.",
  alternates: { canonical: "/editorial-policy" },
};

export default function EditorialPolicyPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-14 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold tracking-tight text-slate-900">Finatic Editorial Policy</h1>
      <p className="mt-4 text-slate-600">Last updated: March 19, 2026</p>

      <section className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm space-y-4 text-slate-700">
        <p>Finatic publishes educational personal finance content intended to help people take practical next steps.</p>
        <p>Our articles are written and reviewed by finance-focused editors and are updated when workflows, assumptions, or guidance needs clarification.</p>
        <p>Content is educational only and does not constitute legal, tax, investment, credit counseling, or fiduciary advice.</p>
        <p>Where factual claims are used (for example around savings account protection or debt servicing basics), we prefer source references to public institutions such as CFPB, FDIC, and the Federal Reserve.</p>
      </section>
    </main>
  );
}
