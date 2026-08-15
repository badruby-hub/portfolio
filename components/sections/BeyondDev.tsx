import Reveal from "@/components/ui/Reveal";

export default function BeyondDev({ dict }: { dict: any }) {
  return (
    <section className="bg-inkDeep text-bg">
      <div className="mx-auto max-w-[1080px] px-6 py-16 md:px-8 md:py-20">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.14em] text-accent">{dict.beyondEyebrow}</p>
          <h2 className="my-4 max-w-[560px] font-serif text-2xl font-normal md:text-[28px]">
            {dict.beyondTitle}
          </h2>
          <p className="max-w-[600px] text-[15px] leading-[1.8] text-[#B9B2A4]">{dict.beyondText}</p>
        </Reveal>
      </div>
    </section>
  );
}
