"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import type { Locale } from "@/lib/i18n";

const NAV_IDS = ["work", "about", "stack", "contact"] as const;

export default function Navbar({ locale, dict }: { locale: Locale; dict: any }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const otherLocale = locale === "ru" ? "en" : "ru";
  const otherHref = pathname.replace(`/${locale}`, `/${otherLocale}`) || `/${otherLocale}`;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`sticky top-0 z-50 border-b transition-colors duration-300 ${
        scrolled ? "border-line bg-bg/80 backdrop-blur-md" : "border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-[72px] max-w-[1080px] items-center justify-between px-6 md:px-8">
        <a href="#top" className="font-serif text-xl tracking-wide text-ink">
          NAZIM
        </a>

        <div className="hidden items-center gap-9 md:flex">
          {NAV_IDS.map((id) => (
            <a
              key={id}
              href={`#${id}`}
              className="font-mono text-[13px] tracking-wide text-ink transition-opacity hover:opacity-60"
            >
              {dict.nav[id]}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3 md:gap-4">
          <Link
            href={otherHref}
            className="rounded-full border border-line px-3 py-1.5 font-mono text-xs tracking-wide text-ink"
          >
            {locale === "ru" ? "RU / EN" : "EN / RU"}
          </Link>
          <a
            href="#contact"
            className="hidden items-center gap-1.5 rounded-full bg-ink px-4 py-2 font-mono text-[13px] text-bg md:flex"
          >
            Let&apos;s talk <ArrowUpRight size={14} />
          </a>
          <button
            className="text-ink md:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label="Menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="flex flex-col gap-4 border-t border-line bg-bg px-5 py-6 md:hidden">
          {NAV_IDS.map((id) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={() => setOpen(false)}
              className="font-mono text-[15px] text-ink"
            >
              {dict.nav[id]}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
