"use client";

import { useRef, type MouseEvent } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
  type Variants,
} from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import { PROJECTS, type Project } from "@/content/projects";
import type { Locale } from "@/lib/i18n";

const gridVariants: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.05 } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40, scale: 0.96 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 90, damping: 18, mass: 0.8 },
  },
};

function ProjectCard({ p, locale, dict }: { p: Project; locale: Locale; dict: any }) {
  const ref = useRef<HTMLAnchorElement>(null);
  const reduceMotion = useReducedMotion();

  // Cursor position within the card, normalized to 0..1
  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);

  const spring = { stiffness: 150, damping: 20 };
  const rotateX = useSpring(useTransform(my, [0, 1], [6, -6]), spring);
  const rotateY = useSpring(useTransform(mx, [0, 1], [-6, 6]), spring);

  const glowX = useTransform(mx, (v) => `${v * 100}%`);
  const glowY = useTransform(my, (v) => `${v * 100}%`);
  const glow = useMotionTemplate`radial-gradient(420px circle at ${glowX} ${glowY}, rgba(156,122,70,0.18), transparent 65%)`;

  function handleMove(e: MouseEvent<HTMLAnchorElement>) {
    if (reduceMotion || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    mx.set((e.clientX - rect.left) / rect.width);
    my.set((e.clientY - rect.top) / rect.height);
  }

  function handleLeave() {
    mx.set(0.5);
    my.set(0.5);
  }

  return (
    <motion.div variants={cardVariants} style={{ perspective: 1200 }} className="h-full">
      <motion.a
        ref={ref}
        href={p.url}
        target="_blank"
        rel="noreferrer"
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
        initial="rest"
        whileHover="hover"
        animate="rest"
        style={reduceMotion ? undefined : { rotateX, rotateY, transformStyle: "preserve-3d" }}
        variants={{
          rest: { y: 0, boxShadow: "0 0 0 rgba(32,32,29,0)" },
          hover: { y: -6, boxShadow: "0 24px 50px -20px rgba(32,32,29,0.35)" },
        }}
        transition={{ type: "spring", stiffness: 260, damping: 22 }}
        className={`group relative flex h-full flex-col overflow-hidden rounded-2xl border transition-colors duration-300 hover:border-accent ${
          p.featured ? "border-accent bg-bgAlt" : "border-line bg-bg"
        }`}
      >
        {/* Cursor-following glow */}
        <motion.div
          aria-hidden
          className="pointer-events-none absolute inset-0 z-10 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{ background: glow }}
        />

        <div className="flex items-center gap-2 border-b border-line bg-ink px-4 py-2.5">
          <span className="h-2.5 w-2.5 rounded-full bg-[#E0645C]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#E5B94F]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#63B865]" />
          <span className="ml-2.5 truncate font-mono text-[11px] text-[#B9B2A4]">
            {p.url.replace("https://", "").replace(/\/$/, "")}
          </span>
        </div>

        <div className="relative h-[200px] w-full overflow-hidden bg-bgAlt md:h-[230px]">
          <motion.div
            className="h-full w-full origin-top"
            variants={{ rest: { scale: 1 }, hover: { scale: 1.04 } }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <iframe
              src={p.url}
              title={p.name}
              loading="lazy"
              tabIndex={-1}
              className="pointer-events-none h-[250%] w-[250%] origin-top-left scale-[0.4] border-0"
            />
          </motion.div>
          {/* <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-bg/80 to-transparent" /> */}
        </div>

        <div className="flex flex-1 flex-col p-6 md:p-7">
          <div className="flex items-start justify-between gap-4">
            <div>
              {p.featured && (
                <span
                  className="mb-3 inline-block rounded-full bg-accentDeep px-2.5 py-1 font-mono text-[11px] uppercase tracking-wide text-bg"
                >
                  {dict.featured}
                </span>
              )}
              <h3 className="mb-1.5 font-serif text-2xl font-medium text-ink">
                {p.name}
              </h3>
              <p className="font-mono text-[13px] text-accentDeep">
                {p.tag[locale]}
              </p>
            </div>

            <motion.div
              variants={{ rest: { rotate: 0, scale: 1 }, hover: { rotate: 45, scale: 1.1 } }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
              className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border border-line bg-bg transition-colors duration-300 group-hover:border-accent group-hover:bg-ink"
            >
              <ArrowUpRight size={18} className="text-ink transition-colors duration-300 group-hover:text-bg" />
            </motion.div>
          </div>

          <p className="mb-4 mt-3.5 text-[15px] leading-[1.7] text-muted">{p.desc[locale]}</p>

          {p.architecture && (
            <div className="mb-4 rounded-lg border border-line bg-bg px-3.5 py-2.5 font-mono text-xs leading-relaxed text-ink">
              <span className="mr-2 text-muted">{dict.archTitle}:</span>
              {p.architecture}
            </div>
          )}

          <div className="mt-auto flex flex-wrap gap-2">
            {p.stack.map((s, i) => (
              <motion.span
                key={s}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.04, duration: 0.3 }}
                className="rounded-full border border-line px-2.5 py-1 font-mono text-xs text-muted transition-colors duration-300 group-hover:border-accent/50 group-hover:text-ink"
              >
                {s}
              </motion.span>
            ))}
          </div>
        </div>
      </motion.a>
    </motion.div>
  );
}

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

        <motion.div
          variants={gridVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 gap-6 md:grid-cols-2"
        >
          {PROJECTS.map((p) => (
            <ProjectCard key={p.id} p={p} locale={locale} dict={dict} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
