"use client";

import { useState } from "react";
import Reveal from "@/components/ui/Reveal";
import { TECH } from "@/content/skills";
import { PROJECTS } from "@/content/projects";
import type { Locale } from "@/lib/i18n";

const CATEGORIES = ["frontend", "backend", "product"] as const;

export default function StackMap({ locale, dict }: { locale: Locale; dict: any }) {
  const [active, setActive] = useState<string | null>(null);
  const activeTech = TECH.find((tc) => tc.id === active);

  return (
    <section id="stack" className="border-t border-line bg-bgAlt">
      <div className="mx-auto max-w-[1080px] px-6 py-20 md:px-8 md:py-24">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.14em] text-accent">{dict.stackEyebrow}</p>
          <h2 className="my-4 max-w-[560px] font-serif text-[28px] font-normal text-ink md:text-[32px]">
            {dict.stackTitle}
          </h2>
          <p className="mb-14 text-sm text-muted">{dict.stackHint}</p>
        </Reveal>

        <div>
          {CATEGORIES.map((cat, i) => (
            <Reveal key={cat} delay={i * 0.1}>
              <div
                className={`flex flex-wrap items-start gap-8 ${
                  i < 2 ? "mb-10 border-b border-dashed border-line pb-10" : ""
                }`}
              >
                <div className="min-w-[140px]">
                  <span className="rounded-full border border-accent px-2.5 py-1 font-mono text-xs text-accentDeep">
                    {dict.layers[cat]}
                  </span>
                </div>
                <div className="flex flex-1 flex-wrap gap-2.5">
                  {TECH.filter((tech) => tech.cat === cat).map((tech) => {
                    const isActive = active === tech.id;
                    return (
                      <button
                        key={tech.id}
                        onClick={() => setActive(isActive ? null : tech.id)}
                        className={`rounded-full border px-3.5 py-2 font-mono text-[13px] transition-transform hover:-translate-y-0.5 ${
                          isActive
                            ? "border-accent bg-accent text-bg"
                            : "border-line bg-transparent text-ink"
                        }`}
                      >
                        {tech.name}
                      </button>
                    );
                  })}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {activeTech && (
          <div className="mt-9 max-w-[520px] rounded-xl border border-line bg-bg px-6 py-5">
            <p className="mb-2 font-mono text-xs text-accentDeep">{activeTech.name}</p>
            <p className="text-sm leading-relaxed text-muted">
              {dict.usedInLabel}{" "}
              {activeTech.usedIn.map((pid) => PROJECTS.find((p) => p.id === pid)?.name).join(", ")}
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
