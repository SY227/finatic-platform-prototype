import type { Metadata } from "next";
import { CtaBanner } from "@/components/CtaBanner";
import { SectionHeading } from "@/components/SectionHeading";
import { ToolCard } from "@/components/Cards";

export const metadata: Metadata = {
  title: "Tools",
  description: "Use Finatic planning tools to budget smarter and pay off debt with confidence.",
};

export default function ToolsPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
      <SectionHeading eyebrow="Tools hub" title="Interactive planning tools" description="Use these tools to turn rough numbers into a practical action plan." />
      <div className="mt-8 grid gap-4 md:grid-cols-2">
        <ToolCard href="/tools/budget-planner" title="Budget Planner" text="Estimate monthly cash flow and identify where you can create margin." />
        <ToolCard href="/tools/debt-payoff-calculator" title="Debt Payoff Calculator" text="Visualize payoff timelines and compare payment strategies." />
      </div>
      <div className="mt-10">
        <CtaBanner title="Want these tools with guided next steps?" description="Use Finatic to keep all your plans, goals, and progress in one place." />
      </div>
    </main>
  );
}
