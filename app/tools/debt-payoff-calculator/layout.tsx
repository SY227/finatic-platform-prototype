import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Debt Payoff Calculator: Estimate Timeline and Interest",
  description: "Use this debt payoff calculator to estimate payoff timeline, total interest, and the impact of extra monthly payments.",
  alternates: { canonical: "/tools/debt-payoff-calculator" },
  openGraph: {
    title: "Debt Payoff Calculator: Estimate Timeline and Interest | Finatic",
    description: "Estimate debt payoff timeline, interest, and extra payment impact.",
    url: "https://finatic.app/tools/debt-payoff-calculator",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Debt Payoff Calculator: Estimate Timeline and Interest | Finatic",
    description: "Estimate debt payoff timeline, interest, and extra payment impact.",
  },
};

export default function DebtPayoffLayout({ children }: { children: React.ReactNode }) {
  return children;
}
