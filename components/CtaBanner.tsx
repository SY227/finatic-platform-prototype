import Link from "next/link";

type Props = {
  title: string;
  description: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
};

export function CtaBanner({
  title,
  description,
  primaryLabel = "Download Finatic",
  primaryHref = "/download",
  secondaryLabel = "Explore Tools",
  secondaryHref = "/tools",
}: Props) {
  return (
    <section className="rounded-3xl bg-gradient-to-r from-emerald-600 to-cyan-600 p-8 text-white shadow-lg sm:p-10">
      <h3 className="text-2xl font-bold sm:text-3xl">{title}</h3>
      <p className="mt-3 max-w-2xl text-white/90">{description}</p>
      <div className="mt-6 flex flex-wrap gap-3">
        <Link href={primaryHref} className="rounded-full bg-white px-5 py-2.5 font-semibold text-emerald-700 hover:bg-slate-100">
          {primaryLabel}
        </Link>
        <Link href={secondaryHref} className="rounded-full border border-white/70 px-5 py-2.5 font-semibold text-white hover:bg-white/10">
          {secondaryLabel}
        </Link>
      </div>
    </section>
  );
}
