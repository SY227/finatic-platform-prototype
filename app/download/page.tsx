import type { Metadata } from "next";
import Link from "next/link";
import { APP_STORE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Download",
  description: "Download Finatic on the App Store and start reaching your financial goals.",
};

export default function DownloadPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
      <div className="grid items-center gap-8 lg:grid-cols-2">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-emerald-700">Get the app</p>
          <h1 className="mt-2 text-4xl font-bold tracking-tight text-slate-900">Download Finatic and move your money goals forward</h1>
          <p className="mt-4 text-lg text-slate-600">Build a personalized plan, track progress, and stay motivated with practical next steps designed for real life.</p>
          <Link href={APP_STORE_URL} target="_blank" className="mt-7 inline-block rounded-full bg-emerald-600 px-6 py-3 font-semibold text-white hover:bg-emerald-700">
            Download on the App Store
          </Link>
          <ul className="mt-6 space-y-2 text-slate-700">
            <li>• Goal-based planning for debt, savings, and budgeting</li>
            <li>• Actionable weekly tasks and progress checkpoints</li>
            <li>• Clear visual tracking to stay consistent</li>
          </ul>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="h-72 rounded-3xl border border-slate-200 bg-white p-4 shadow-sm">
            <div className="h-full rounded-2xl border-2 border-dashed border-slate-300 bg-slate-50" />
            <p className="mt-2 text-center text-sm text-slate-500">Goal dashboard mock</p>
          </div>
          <div className="h-72 rounded-3xl border border-slate-200 bg-white p-4 shadow-sm">
            <div className="h-full rounded-2xl border-2 border-dashed border-slate-300 bg-slate-50" />
            <p className="mt-2 text-center text-sm text-slate-500">Plan steps mock</p>
          </div>
        </div>
      </div>
    </main>
  );
}
