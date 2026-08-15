import Reveal from "@/components/ui/Reveal";

export default function About({ dict }: { dict: any }) {
  return (
    <section id="about" className="border-t border-line">
      <div className="mx-auto grid max-w-[1080px] grid-cols-1 gap-10 px-6 py-20 md:grid-cols-[0.9fr_1.4fr] md:gap-14 md:px-8 md:py-24">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.14em] text-accent">{dict.aboutEyebrow}</p>
          <h2 className="mt-4 font-serif text-[28px] font-normal leading-tight text-ink md:text-[32px]">
            {dict.aboutTitle}
          </h2>
        </Reveal>
        <div>
          <Reveal delay={0.1}>
            <p className="mb-5 text-[16px] leading-[1.8] text-ink">{dict.aboutText}</p>
          </Reveal>
          <Reveal delay={0.18}>
            <p className="text-[16px] leading-[1.8] text-muted">{dict.aboutText2}</p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
