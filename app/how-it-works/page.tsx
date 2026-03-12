import type { Metadata } from "next";
import { CtaBanner } from "@/components/CtaBanner";
import { FeatureCard } from "@/components/Cards";
import { SectionHeading } from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "How It Works",
  description: "Learn how Finatic helps you set goals, build a plan, and stay consistent.",
};

export default function HowItWorksPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="Process"
        title="How Finatic turns money goals into weekly progress"
        description="A clear workflow designed for consistency, not perfection."
      />
      <div className="mt-8 grid gap-4 md:grid-cols-3">
        <FeatureCard title="Clarify your goal" text="Choose one priority, like debt payoff or emergency savings, and define a practical target." />
        <FeatureCard title="Build your action plan" text="Use guided steps and planning tools to map what to do this week and this month." />
        <FeatureCard title="Review and adjust" text="Track progress, review setbacks without guilt, and keep momentum with small wins." />
      </div>
      <div className="mt-10 rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
        <h2 className="text-2xl font-bold text-slate-900">Why this works</h2>
        <p className="mt-3 text-slate-600">Most plans fail because they are too abstract. Finatic keeps your next step concrete and visible, so your behavior can compound over time.</p>
      </div>
      <div className="mt-10">
        <CtaBanner title="See the process in action" description="Download the app to create your first personalized financial progress plan." />
      </div>
    </main>
  );
}
