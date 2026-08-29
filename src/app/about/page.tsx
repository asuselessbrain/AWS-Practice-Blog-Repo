import type { Metadata } from "next";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "About — The Field Notes",
};

export default function About() {
  return (
    <main className="mx-auto w-full max-w-3xl flex-1 px-6 py-16">
      <Reveal>
        <p className="font-mono text-xs uppercase tracking-widest text-accent">
          Masthead
        </p>
        <h1 className="mt-2 font-display text-4xl text-ink">
          About This Publication
        </h1>
        <div className="mt-5 border-y border-line py-3 font-mono text-xs uppercase tracking-widest text-muted">
          Editorial note
        </div>

        <div className="drop-cap mt-8 space-y-5 text-lg leading-relaxed text-ink/85">
          <p>
            This is a small practice project: a Next.js site, scaffolded with
            yarn, built to be deployed by hand on an AWS EC2 instance.
          </p>
          <p>
            The content is intentionally minimal — a handful of journal
            entries about the build itself — because the point of this
            exercise is the deploy pipeline, not the writing.
          </p>
          <p>
            Stack: Next.js (App Router) + TypeScript + Tailwind CSS, built
            with yarn, served behind Nginx on an EC2 box.
          </p>
        </div>
      </Reveal>
    </main>
  );
}
