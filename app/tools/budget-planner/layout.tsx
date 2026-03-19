import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free Monthly Budget Planner",
  description: "Free monthly budget planner to estimate income, expenses, and savings margin for smarter cash flow decisions.",
  alternates: { canonical: "/tools/budget-planner" },
  openGraph: {
    title: "Free Monthly Budget Planner | Finatic",
    description: "Estimate income, expenses, and monthly savings margin.",
    url: "https://finatic.app/tools/budget-planner",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Monthly Budget Planner | Finatic",
    description: "Estimate income, expenses, and monthly savings margin.",
  },
};

export default function BudgetPlannerLayout({ children }: { children: React.ReactNode }) {
  return children;
}
