import Image from "next/image";
import Link from "next/link";
import { APP_STORE_URL, NAV_LINKS } from "@/lib/site";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="text-xl font-bold tracking-tight text-slate-900">
          Finatic
        </Link>
        <nav className="hidden gap-6 md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-slate-700 transition hover:text-emerald-700"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <Link
          href={APP_STORE_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Download Finatic on the App Store"
          className="inline-flex rounded-xl transition hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 focus-visible:ring-offset-2"
        >
          <Image src="/download/app_download.svg" alt="Download on the App Store" width={140} height={46} />
        </Link>
      </div>
    </header>
  );
}
