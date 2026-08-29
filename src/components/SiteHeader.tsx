import Link from "next/link";
import LogoMark from "./LogoMark";

function todayDateline() {
  return new Intl.DateTimeFormat("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(new Date());
}

export default function SiteHeader() {
  return (
    <header className="border-b-4 border-double border-rule">
      <div className="mx-auto max-w-4xl px-6 pt-8 pb-4">
        <div className="flex items-center justify-between font-mono text-[11px] uppercase tracking-widest text-muted">
          <span>{todayDateline()}</span>
          <span>Vol. I &middot; No. 003</span>
          <span className="hidden sm:inline">Est. 2026</span>
        </div>

        <Link href="/" className="group mt-4 block text-center">
          <span className="mx-auto flex justify-center">
            <LogoMark size={40} />
          </span>
          <h1 className="mt-2 font-display text-5xl tracking-tight text-ink sm:text-6xl">
            The Field Notes
          </h1>
          <p className="mt-2 font-mono text-xs uppercase tracking-[0.25em] text-muted">
            dispatches from a next.js build, deployed by hand
          </p>
        </Link>

        <div className="masthead-rule mt-5 h-[3px] bg-rule" />
        <div
          className="masthead-rule mt-1 h-px bg-rule"
          style={{ animationDelay: "120ms" }}
        />

        <nav className="mt-3 flex items-center justify-center gap-8 font-mono text-xs uppercase tracking-widest text-ink">
          <Link href="/" className="headline-link">
            Front Page
          </Link>
          <Link href="/blog" className="headline-link">
            All Entries
          </Link>
          <Link href="/about" className="headline-link">
            About
          </Link>
        </nav>
      </div>
    </header>
  );
}
