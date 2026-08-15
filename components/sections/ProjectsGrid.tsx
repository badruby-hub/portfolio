import { ArrowUpRight } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import { PROJECTS } from "@/content/projects";
import type { Locale } from "@/lib/i18n";

export default function ProjectsGrid({ locale, dict }: { locale: Locale; dict: any }) {
  return (
    <section id="work" className="border-t border-line">
      <div className="mx-auto max-w-[1080px] px-6 py-20 md:px-8 md:py-24">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.14em] text-accent">{dict.workEyebrow}</p>
          <h2 className="mb-14 mt-4 max-w-[560px] font-serif text-[28px] font-normal text-ink md:text-[32px]">
            {dict.workTitle}
          </h2>
        </Reveal>

        <div className="flex flex-col gap-6">
          {PROJECTS.map((p, i) => (
            <Reveal key={p.id} delay={i * 0.08}>
              <a
                href={p.url}
                target="_blank"
                rel="noreferrer"
                className={`block overflow-hidden rounded-2xl border transition-colors hover:border-accent ${
                  p.featured ? "border-accent bg-bgAlt" : "border-line bg-transparent"
                }`}
              >
                <div className="flex items-center gap-2 border-b border-line bg-ink px-4 py-2.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#E0645C]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#E5B94F]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#63B865]" />
                  <span className="ml-2.5 font-mono text-[11px] text-[#B9B2A4]">
                    {p.url.replace("https://", "")}
                  </span>
                </div>

                <div className="relative h-[220px] w-full overflow-hidden bg-bgAlt md:h-[260px]">
                  <iframe
                    src={p.url}
                    title={p.name}
                    loading="lazy"
                    tabIndex={-1}
                    className="pointer-events-none h-[250%] w-[250%] origin-top-left scale-[0.4] border-0"
                  />
                </div>

                <div className="p-6 md:p-8">
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div className="max-w-[620px]">
                      {p.featured && (
                        <span className="mb-3.5 inline-block rounded-full bg-accentDeep px-2.5 py-1 font-mono text-[11px] uppercase tracking-wide text-bg">
                          {dict.featured}
                        </span>
                      )}
                      <h3 className="mb-1.5 font-serif text-2xl font-medium text-ink">{p.name}</h3>
                      <p className="mb-3.5 font-mono text-[13px] text-accentDeep">{p.tag[locale]}</p>
                      <p className="mb-4.5 text-[15px] leading-[1.7] text-muted">{p.desc[locale]}</p>

                      {p.architecture && (
                        <div className="mb-4.5 inline-block rounded-lg border border-line bg-bg px-3.5 py-2.5 font-mono text-xs text-ink">
                          <span className="mr-2 text-muted">{dict.archTitle}:</span>
                          {p.architecture}
                        </div>
                      )}

                      <div className="flex flex-wrap gap-2">
                        {p.stack.map((s) => (
                          <span
                            key={s}
                            className="rounded-full border border-line px-2.5 py-1 font-mono text-xs text-muted"
                          >
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border border-line">
                      <ArrowUpRight size={18} className="text-ink" />
                    </div>
                  </div>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
