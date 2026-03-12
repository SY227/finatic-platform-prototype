import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Budget Planner",
  description: "Estimate your monthly budget and identify savings room.",
};

export default function BudgetPlannerLayout({ children }: { children: React.ReactNode }) {
  return children;
}
