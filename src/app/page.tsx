import Link from "next/link";
import { getSortedPosts } from "@/data/posts";
import Reveal from "@/components/Reveal";

export default function Home() {
  const posts = getSortedPosts();
  const [lead, ...rest] = posts;

  return (
    <main className="mx-auto w-full max-w-4xl flex-1 px-6">
      {lead && (
        <section className="border-b border-line py-12 sm:py-16">
          <Reveal>
            <p className="font-mono text-xs uppercase tracking-widest text-accent">
              Lead Story &middot; {lead.tag}
            </p>
            <Link href={`/blog/${lead.slug}`} className="group mt-3 block">
              <h2 className="headline-link font-display text-4xl leading-[1.05] text-ink sm:text-5xl">
                {lead.title}
                <span className="cursor-blink" aria-hidden="true" />
              </h2>
            </Link>
            <p className="drop-cap mt-5 max-w-2xl text-lg leading-relaxed text-ink/85">
              {lead.excerpt}
            </p>
            <p className="mt-4 font-mono text-xs uppercase tracking-widest text-muted">
              Filed {lead.date}
            </p>
            <Link
              href={`/blog/${lead.slug}`}
              className="headline-link mt-5 inline-block font-mono text-sm text-ink"
            >
              Continue reading &rarr;
            </Link>
          </Reveal>
        </section>
      )}

      {rest.length > 0 && (
        <section className="py-12">
          <Reveal>
            <p className="font-mono text-xs uppercase tracking-widest text-muted">
              More Entries
            </p>
          </Reveal>

          <div className="mt-6 grid gap-10 border-t border-line pt-8 sm:grid-cols-2">
            {rest.map((post, i) => (
              <Reveal key={post.slug} delay={i * 90}>
                <article className="sm:pr-6 sm:[&:not(:last-child)]:border-r sm:[&:not(:last-child)]:border-line">
                  <p className="font-mono text-[11px] uppercase tracking-widest text-muted">
                    {post.tag}
                  </p>
                  <Link href={`/blog/${post.slug}`} className="group mt-2 block">
                    <h3 className="headline-link font-display text-2xl leading-tight text-ink">
                      {post.title}
                    </h3>
                  </Link>
                  <p className="mt-3 text-ink/75">{post.excerpt}</p>
                  <p className="mt-3 font-mono text-[11px] text-muted">
                    {post.date}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </section>
      )}
    </main>
  );
}
