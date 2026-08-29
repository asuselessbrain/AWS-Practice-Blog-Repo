export default function SiteFooter() {
  return (
    <footer className="mt-auto border-t-4 border-double border-rule">
      <div className="mx-auto max-w-4xl px-6 py-8 text-center">
        <p className="font-display text-lg text-ink">The Field Notes</p>
        <p className="mt-2 font-mono text-[11px] uppercase tracking-widest text-muted">
          Next.js &middot; Yarn &middot; Deployed on EC2 &middot; No robots
          were harmed in the making of this build
        </p>
      </div>
    </footer>
  );
}
