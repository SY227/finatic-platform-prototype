import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { APP_STORE_URL } from "@/lib/site";
import { SectionHeading } from "@/components/SectionHeading";

export const metadata: Metadata = {
  alternates: { canonical: "/download" },
  openGraph: {
    title: "Download Finatic iPhone App",
    description: "Get Finatic on iPhone to turn money goals into practical daily actions.",
    url: "https://finatic.app/download",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Download Finatic iPhone App",
    description: "Get Finatic on iPhone to turn money goals into practical daily actions.",
  },
  title: "Download Finatic iPhone App",
  description: "Download the Finatic iPhone app to create a practical daily plan for debt payoff, budgeting, savings, and financial goals.",
};

const keyBenefits = [
  {
    title: "One clear goal at a time",
    text: "Choose debt payoff, savings, investing, retirement, or a custom goal and get a focused path forward.",
  },
  {
    title: "Daily action that fits real life",
    text: "Get one practical step at a time so progress feels doable, even on busy weeks.",
  },
  {
    title: "Plan + coach in one place",
    text: "Use Finatic's AI coach David to refine your plan, understand tradeoffs, and stay on track.",
  },
  {
    title: "Progress you can actually see",
    text: "Track milestones, completion momentum, and your financial health score as you move forward.",
  },
];

const audience = [
  "People paying down debt and trying to stay consistent",
  "Anyone building an emergency fund or better savings habits",
  "Households that want a realistic budget and a clear next move",
  "Beginners who want confidence before investing or retirement planning",
];

export default function DownloadPage() {
  return (
    <main>
      <section className="mx-auto max-w-6xl px-4 pb-14 pt-14 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 rounded-3xl bg-white p-8 shadow-lg ring-1 ring-slate-200 sm:p-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-emerald-700">Now on iPhone</p>
            <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
              Reach your financial goals with a daily plan you can follow
            </h1>
            <p className="mt-5 max-w-2xl text-lg text-slate-600">
              Finatic turns big money goals into clear, manageable action. Pick a goal, answer a few focused
              questions, and get a personalized roadmap built for real life.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href={APP_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Download Finatic on the App Store"
                className="inline-flex rounded-xl transition hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 focus-visible:ring-offset-2"
              >
                <Image
                  src="/download/app_download.svg"
                  alt="Download on the App Store"
                  width={180}
                  height={60}
                  priority
                />
              </Link>
              <p className="text-sm text-slate-500">Free on the App Store · Age 4+</p>
            </div>

            <div className="mt-8 grid gap-3 text-sm text-slate-700 sm:grid-cols-2">
              <div className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3">
                <p className="font-semibold text-slate-900">Start in minutes</p>
                <p className="mt-1">Answer about 15 focused questions and get your first action step quickly.</p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3">
                <p className="font-semibold text-slate-900">Action, not overwhelm</p>
                <p className="mt-1">One clear daily step helps you move forward without guesswork.</p>
              </div>
            </div>
          </div>

          <div className="mx-auto w-full max-w-sm rounded-[2.5rem] border border-slate-200 bg-gradient-to-b from-slate-50 to-white p-3 shadow-md">
            <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-100">
              <Image
                src="/download/image_1.png"
                alt="Finatic iPhone app screen"
                width={1242}
                height={2688}
                className="h-auto w-full"
                sizes="(max-width: 1024px) 70vw, 32vw"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Why Finatic"
          title="A practical app for people who want progress, not financial noise"
          description="The App Store version of Finatic focuses on clarity: one goal, one plan, one next step."
        />
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {keyBenefits.map((item) => (
            <article key={item.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="text-lg font-semibold text-slate-900">{item.title}</h2>
              <p className="mt-2 text-slate-600">{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="In the app"
          title="See Finatic in action"
          description="A quick look at the app experience and the simple workflow behind daily financial progress."
        />
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            ["/download/image_2.png", "Set a goal and build your plan"],
            ["/download/image_3.png", "Track your progress with clear milestones"],
            ["/download/image_4.png", "Get guidance and keep your momentum"],
          ].map(([src, caption]) => (
            <figure key={src} className="rounded-3xl border border-slate-200 bg-white p-3 shadow-sm">
              <div className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-100">
                <Image
                  src={src}
                  alt={caption}
                  width={370}
                  height={800}
                  className="h-auto w-full"
                  sizes="(max-width: 1024px) 45vw, 28vw"
                />
              </div>
              <figcaption className="px-1 pb-1 pt-3 text-sm text-slate-600">{caption}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-6 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm lg:grid-cols-2 lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-emerald-700">Who it is for</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900">Built for everyday people making real money decisions</h2>
            <ul className="mt-5 space-y-3 text-slate-700">
              {audience.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-1 text-emerald-700">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl bg-slate-50 p-6 ring-1 ring-slate-200">
            <h3 className="text-xl font-semibold text-slate-900">Why download now</h3>
            <p className="mt-3 text-slate-600">
              Big goals feel hard when the next step is unclear. Finatic gives you that next step daily so you can
              build momentum immediately.
            </p>
            <div className="mt-6">
              <Link
                href={APP_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Download Finatic from the App Store"
                className="inline-flex rounded-xl transition hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 focus-visible:ring-offset-2"
              >
                <Image src="/download/app_download.svg" alt="Download on the App Store" width={180} height={60} />
              </Link>
            </div>
            <p className="mt-3 text-xs text-slate-500">Secure account protections and privacy-focused data handling.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
