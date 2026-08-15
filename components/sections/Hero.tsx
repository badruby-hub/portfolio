"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import type { Locale } from "@/lib/i18n";

export default function Hero({ locale, dict }: { locale: Locale; dict: any }) {
  const [photoError, setPhotoError] = useState(false);

  return (
    <header id="top" className="relative overflow-hidden">
      <svg
        width="620"
        height="620"
        viewBox="0 0 620 620"
        className="pointer-events-none absolute -right-40 -top-36 opacity-50"
      >
        <circle cx="310" cy="310" r="300" fill="none" stroke="#9C7A46" strokeWidth="0.6" opacity="0.35" />
        <circle cx="310" cy="310" r="230" fill="none" stroke="#9C7A46" strokeWidth="0.6" opacity="0.3" />
        <path d="M 60 420 A 260 260 0 0 1 420 60" fill="none" stroke="#9C7A46" strokeWidth="1" opacity="0.55" />
      </svg>

      <div className="mx-auto flex max-w-[1080px] flex-col-reverse items-center gap-12 px-6 pb-24 pt-32 md:flex-row md:px-8 md:pb-32 md:pt-36">
        <div className="min-w-0 flex-1">
          <Reveal>
            <p className="font-mono text-xs uppercase tracking-[0.14em] text-accent">{dict.eyebrow}</p>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="my-5 font-serif text-[38px] font-normal leading-[1.14] tracking-tight text-ink md:text-[54px]">
              {dict.heroTitle}
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mb-10 max-w-[500px] text-[17px] leading-[1.7] text-muted">{dict.heroText}</p>
          </Reveal>
          <Reveal delay={0.24}>
            <div className="flex flex-wrap gap-3.5">
              <a
                href="#work"
                className="flex items-center gap-2 rounded-full bg-ink px-6 py-3.5 font-mono text-sm text-bg transition-transform active:scale-[0.97]"
              >
                {dict.ctaPrimary} <ArrowRight size={15} />
              </a>
              <a
                href="#contact"
                className="rounded-full border border-line px-6 py-3.5 font-mono text-sm text-ink transition-transform active:scale-[0.97]"
              >
                {dict.ctaSecondary}
              </a>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.12} className="flex-shrink-0">
          <div className="relative h-[220px] w-[180px] md:h-[320px] md:w-[260px]">
            <div className="absolute -inset-3.5 rounded-[20px] border border-accent opacity-45" />
            {!photoError ? (
              <img
                src="nazim-photo.jpg"
                alt="Nazim Fataliev"
                onError={() => setPhotoError(true)}
                className="block h-full w-full rounded-2xl border border-line object-cover"
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center rounded-2xl border border-accentDeep bg-accent">
                <span className="font-serif text-5xl text-bg md:text-6xl">
                  {locale === "ru" ? "НФ" : "NF"}
                </span>
              </div>
            )}
          </div>
        </Reveal>
      </div>
    </header>
  );
}
