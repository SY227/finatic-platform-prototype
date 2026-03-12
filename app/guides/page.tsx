import type { Metadata } from "next";
import { CtaBanner } from "@/components/CtaBanner";
import { GuideCard } from "@/components/Cards";
import { SectionHeading } from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Guides",
  description: "Read practical personal finance guides from Finatic.",
};

export default function GuidesPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
      <SectionHeading eyebrow="Learning hub" title="Finance guides you can apply this week" />
      <div className="mt-8 grid gap-4 md:grid-cols-2">
        <GuideCard href="/guides/emergency-fund" title="How to Build an Emergency Fund" summary="A clear path from $0 to your first safety net." />
        <GuideCard href="/guides/pay-off-debt" title="How to Pay Off Debt" summary="Methods, behavior tips, and momentum tactics for faster payoff." />
      </div>
      <div className="mt-10">
        <CtaBanner title="Turn these lessons into action" description="Download Finatic for step-by-step planning based on your own numbers." />
      </div>
    </main>
  );
}
