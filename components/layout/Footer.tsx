export default function Footer({ dict }: { dict: any }) {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-[1080px] flex-wrap items-center justify-between gap-3 px-6 py-7 md:px-8">
        <span className="font-serif text-[15px] text-ink">NAZIM FATALIEV</span>
        <span className="font-mono text-xs text-muted">
          © {new Date().getFullYear()} · {dict.footerText}
        </span>
      </div>
    </footer>
  );
}
