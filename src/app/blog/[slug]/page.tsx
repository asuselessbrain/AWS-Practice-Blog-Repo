import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getPostBySlug, posts } from "@/data/posts";
import Reveal from "@/components/Reveal";

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  return {
    title: post ? `${post.title} — The Field Notes` : "The Field Notes",
  };
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) notFound();

  return (
    <main className="mx-auto w-full max-w-3xl flex-1 px-6 py-16">
      <Reveal>
        <Link
          href="/blog"
          className="headline-link font-mono text-sm text-ink"
        >
          &larr; Back to the archive
        </Link>

        <article className="mt-8">
          <p className="font-mono text-xs uppercase tracking-widest text-accent">
            {post.tag}
          </p>
          <h1 className="mt-3 font-display text-4xl leading-[1.05] text-ink sm:text-5xl">
            {post.title}
          </h1>
          <div className="mt-5 flex items-center gap-3 border-y border-line py-3 font-mono text-xs uppercase tracking-widest text-muted">
            <span>Filed {post.date}</span>
            <span aria-hidden="true">&middot;</span>
            <span>The Field Notes Desk</span>
          </div>

          <div className="mt-8 space-y-5 text-lg leading-relaxed text-ink/85">
            {post.body.map((paragraph, i) => (
              <p key={i} className={i === 0 ? "drop-cap" : undefined}>
                {paragraph}
              </p>
            ))}
          </div>
        </article>
      </Reveal>
    </main>
  );
}
