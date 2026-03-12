import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Debt Payoff Calculator",
  description: "Estimate debt payoff timeline and interest with a simple calculator.",
};

export default function DebtPayoffLayout({ children }: { children: React.ReactNode }) {
  return children;
}
