import Link from "next/link";

export function FeatureCard({ title, text }: { title: string; text: string }) {
  return (
    <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
      <p className="mt-2 text-slate-600">{text}</p>
    </article>
  );
}

export function ToolCard({
  title,
  text,
  href,
}: {
  title: string;
  text: string;
  href: string;
}) {
  return (
    <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
      <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
      <p className="mt-2 text-slate-600">{text}</p>
      <Link href={href} className="mt-4 inline-block font-semibold text-emerald-700 hover:text-emerald-800">
        Open tool →
      </Link>
    </article>
  );
}

export function GuideCard({
  title,
  summary,
  href,
}: {
  title: string;
  summary: string;
  href: string;
}) {
  return (
    <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <h3 className="text-xl font-semibold text-slate-900">{title}</h3>
      <p className="mt-2 text-slate-600">{summary}</p>
      <Link href={href} className="mt-4 inline-block font-semibold text-emerald-700 hover:text-emerald-800">
        Read guide →
      </Link>
    </article>
  );
}

export function TestimonialCard({ quote, name }: { quote: string; name: string }) {
  return (
    <figure className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <blockquote className="text-slate-700">“{quote}”</blockquote>
      <figcaption className="mt-4 text-sm font-semibold text-slate-900">{name}</figcaption>
    </figure>
  );
}
