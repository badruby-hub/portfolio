import Reveal from "@/components/ui/Reveal";

export default function Experience({ dict }: { dict: any }) {
  return (
    <section id="experience" className="border-t border-line">
      <div className="mx-auto max-w-[1080px] px-6 py-20 md:px-8 md:py-24">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.14em] text-accent">{dict.expEyebrow}</p>
          <h2 className="mb-14 mt-4 font-serif text-[28px] font-normal text-ink md:text-[32px]">{dict.expTitle}</h2>
        </Reveal>
        <div>
          {dict.exp.map((e: { period: string; title: string; text: string }, i: number) => (
            <Reveal key={e.title}>
              <div
                className={`grid grid-cols-1 gap-3 border-b border-line py-6 md:grid-cols-[180px_1fr] md:gap-6 ${
                  i === 0 ? "border-t" : ""
                }`}
              >
                <span className="font-mono text-[13px] text-accentDeep">{e.period}</span>
                <div>
                  <h4 className="mb-2 font-serif text-lg font-medium text-ink">{e.title}</h4>
                  <p className="max-w-[560px] text-sm leading-[1.7] text-muted">{e.text}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
