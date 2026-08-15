import Reveal from "@/components/ui/Reveal";

export default function Services({ dict }: { dict: any }) {
  return (
    <section id="services" className="border-t border-line bg-bgAlt">
      <div className="mx-auto max-w-[1080px] px-6 py-20 md:px-8 md:py-24">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.14em] text-accent">{dict.servicesEyebrow}</p>
          <h2 className="mb-14 mt-4 max-w-[560px] font-serif text-[28px] font-normal text-ink md:text-[32px]">
            {dict.servicesTitle}
          </h2>
        </Reveal>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {dict.services.map((s: { title: string; text: string }, i: number) => (
            <Reveal key={s.title} delay={i * 0.08}>
              <div className="h-full rounded-2xl border border-line bg-bg p-7">
                <span className="font-mono text-xs text-accent">0{i + 1}</span>
                <h3 className="my-3 font-serif text-[19px] font-medium text-ink">{s.title}</h3>
                <p className="text-sm leading-[1.7] text-muted">{s.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
