import { Github, Linkedin, Mail, Send } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import { CONTACT } from "@/content/contact";

export default function Contact({ dict }: { dict: any }) {
  const links = [
    { icon: Send, label: "Telegram", href: CONTACT.telegram },
    { icon: Mail, label: "Email", href: `mailto:${CONTACT.email}` },
    { icon: Github, label: "GitHub", href: CONTACT.github },
    { icon: Linkedin, label: "LinkedIn", href: CONTACT.linkedin },
  ];

  return (
    <section id="contact" className="border-t border-line">
      <div className="mx-auto max-w-[1080px] px-6 py-20 text-center md:px-8 md:py-24">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.14em] text-accent">{dict.contactEyebrow}</p>
          <h2 className="mx-auto mb-4 mt-4 max-w-[560px] font-serif text-[28px] font-normal text-ink md:text-[38px]">
            {dict.contactTitle}
          </h2>
          <p className="mx-auto mb-10 max-w-[440px] text-[15px] text-muted">{dict.contactText}</p>

          <div className="flex flex-wrap justify-center gap-3.5">
            {links.map(({ icon: Icon, label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 rounded-full border border-line px-5 py-3 font-mono text-[13px] text-ink transition-transform active:scale-[0.97]"
              >
                <Icon size={15} /> {label}
              </a>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
