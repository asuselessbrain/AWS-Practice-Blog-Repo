import Link from "next/link";
import type { Metadata } from "next";
import { getSortedPosts } from "@/data/posts";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "All Entries — The Field Notes",
};

export default function BlogIndex() {
  const posts = getSortedPosts();

  return (
    <main className="mx-auto w-full max-w-4xl flex-1 px-6 py-16">
      <Reveal>
        <p className="font-mono text-xs uppercase tracking-widest text-accent">
          The Archive
        </p>
        <h1 className="mt-2 font-display text-4xl text-ink">All Entries</h1>
        <div className="masthead-rule mt-5 h-px bg-rule" />
      </Reveal>

      <ol className="mt-10 divide-y divide-line">
        {posts.map((post, i) => (
          <Reveal key={post.slug} delay={i * 100}>
            <li className="group grid grid-cols-[3rem_1fr] gap-4 py-7 sm:grid-cols-[4rem_1fr_9rem]">
              <span className="font-mono text-sm text-muted">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <p className="font-mono text-[11px] uppercase tracking-widest text-muted">
                  {post.tag}
                </p>
                <Link href={`/blog/${post.slug}`} className="mt-1 block">
                  <h2 className="headline-link inline font-display text-2xl text-ink">
                    {post.title}
                  </h2>
                </Link>
                <p className="mt-2 max-w-xl text-ink/75">{post.excerpt}</p>
              </div>
              <span className="hidden font-mono text-xs text-muted sm:block sm:text-right">
                {post.date}
              </span>
            </li>
          </Reveal>
        ))}
      </ol>
    </main>
  );
}
