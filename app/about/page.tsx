import type { Metadata } from "next";
import { CtaBanner } from "@/components/CtaBanner";

export const metadata: Metadata = {
  title: "About Finatic",
  description: "Learn about Finatic's mission and approach to practical financial planning and consistent money progress.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Finatic",
    description: "Finatic helps people make practical financial progress without overwhelm.",
    url: "https://finatic.app/about",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Finatic",
    description: "Finatic helps people make practical financial progress without overwhelm.",
  },
};

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-14 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold tracking-tight text-slate-900">About Finatic</h1>
      <p className="mt-4 text-lg text-slate-600">Finatic exists to help people make practical financial progress without confusion, shame, or unrealistic plans.</p>
      <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
        <h2 className="text-xl font-semibold text-slate-900">Our approach</h2>
        <p className="mt-3 text-slate-600">We focus on clarity, consistency, and momentum. Instead of overwhelming users with complexity, Finatic highlights the next best action based on current goals and constraints.</p>
      </div>
      <div className="mt-10">
        <CtaBanner title="Join the Finatic journey" description="Download the app and start building your financial plan today." />
      </div>
    </main>
  );
}
