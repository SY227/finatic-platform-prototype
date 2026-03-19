import type { Metadata } from "next";
import { CtaBanner } from "@/components/CtaBanner";

export const metadata: Metadata = {
  title: "Emergency Fund Guide: Build and Rebuild Savings",
  description: "Learn how to build a starter emergency fund, where to keep it, and how to rebuild after an emergency expense.",
  alternates: { canonical: "/guides/emergency-fund" },
  openGraph: {
    title: "Emergency Fund Guide: Build and Rebuild Savings | Finatic",
    description: "Starter emergency fund strategy, account setup, and rebuild plan.",
    url: "https://finatic.app/guides/emergency-fund",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Emergency Fund Guide: Build and Rebuild Savings | Finatic",
    description: "Starter emergency fund strategy, account setup, and rebuild plan.",
  },
};

export default function EmergencyFundGuide() {
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://finatic.app/" },
      { "@type": "ListItem", position: 2, name: "Guides", item: "https://finatic.app/guides" },
      { "@type": "ListItem", position: 3, name: "Emergency Fund Guide", item: "https://finatic.app/guides/emergency-fund" }
    ]
  };

  return (
    <main className="mx-auto max-w-3xl px-4 py-14 sm:px-6 lg:px-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <h1 className="text-3xl font-bold tracking-tight text-slate-900">How to Build an Emergency Fund</h1>
      <p className="mt-3 text-lg text-slate-600">An emergency fund gives your budget breathing room and keeps setbacks from becoming financial spirals.</p>

      <section className="mt-8 rounded-2xl border border-emerald-200 bg-emerald-50 p-6">
        <h2 className="font-semibold text-emerald-900">Key takeaways</h2>
        <ul className="mt-3 list-disc space-y-1 pl-5 text-emerald-900/90">
          <li>Start with a small first milestone to create momentum.</li>
          <li>Automate consistent contributions, even if they are modest.</li>
          <li>Keep emergency savings separate from daily spending.</li>
        </ul>
      </section>

      <article className="prose prose-slate mt-8 max-w-none">
        <h2>1) Define your first target</h2>
        <p>A common starting point is one month of core expenses or a fixed starter amount. The exact number matters less than building the habit quickly.</p>
        <h2>2) Create your funding rhythm</h2>
        <p>Set a weekly transfer tied to payday. If your budget is tight, redirect one discretionary category and one small subscription to your emergency fund.</p>
        <h2>3) Protect the account</h2>
        <p>Use a separate high-yield savings account. Keep access easy enough for true emergencies but not frictionless for impulse spending.</p>
        <h2>4) Rebuild after withdrawals</h2>
        <p>Using the fund is normal. When it happens, switch back into rebuild mode immediately with a temporary spending reset.</p>
      </article>

      <div className="mt-10">
        <CtaBanner title="Build your emergency fund with a clear plan" description="Download Finatic and track your savings milestones week by week." />
      </div>
    </main>
  );
}
