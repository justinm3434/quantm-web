import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata = {
  title: "Blog — QuanTM.ai",
  description: "Research highlights, competition updates, and the case for inference-first AI.",
};

const posts = [
  {
    slug: "why-inference-wins",
    date: "2026-03-26",
    category: "Manifesto",
    title: "The Race for Speed Is Over. The Race for Space Has Begun.",
    excerpt:
      "Training happens once. Inference happens forever. Why the AI industry is optimizing for the wrong variable, and what we're doing about it.",
    featured: true,
  },
  {
    slug: "tfe-methodology",
    date: "2026-03-26",
    category: "Research",
    title: "TFE v1.0: A Substrate-Agnostic Measure of Computational Thermodynamic Cost",
    excerpt:
      "How we derived the Transistor Flip Equivalent conversion table, the published data behind the numbers, and why substrate-agnostic metrics matter for the next decade of compute.",
    featured: false,
  },
  {
    slug: "baseline-results",
    date: "2026-03-26",
    category: "Competition",
    title: "Six Baselines, Three Substrates, One Conclusion",
    excerpt:
      "We scored GPT-2 across FP32, INT8, INT4, distilled, and binary variants. The results prove the RIFT scoring formula produces meaningful separation. Here are the numbers.",
    featured: false,
  },
];

export default function BlogPage() {
  const featured = posts.find((p) => p.featured);
  const rest = posts.filter((p) => !p.featured);

  return (
    <>
      {/* ─── HEADER ─── */}
      <section className="pt-32 pb-16">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <p className="text-[11px] tracking-[0.3em] uppercase text-accent mb-8">
            Insights
          </p>
          <h1 className="text-[clamp(2.5rem,5vw,4.5rem)] font-light leading-[1.05] tracking-[-0.02em]">
            Blog
          </h1>
        </div>
      </section>

      {/* ─── FEATURED POST ─── */}
      {featured && (
        <section className="border-t border-divider">
          <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-24 md:py-32">
            <ScrollReveal>
              <Link href={`/blog/${featured.slug}`} className="block group">
                <div className="grid md:grid-cols-2 gap-12 md:gap-24">
                  <div>
                    <div className="flex items-center gap-4 mb-6">
                      <span className="text-[11px] tracking-[0.2em] uppercase text-accent">
                        {featured.category}
                      </span>
                      <span className="text-foreground-dim text-sm">
                        {featured.date}
                      </span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-light leading-tight group-hover:text-accent transition-colors duration-500">
                      {featured.title}
                    </h2>
                  </div>
                  <div className="flex flex-col justify-end">
                    <p className="text-foreground-dim text-lg leading-relaxed">
                      {featured.excerpt}
                    </p>
                    <div className="mt-6 text-accent text-[13px] tracking-[0.1em] uppercase">
                      Read more &rarr;
                    </div>
                  </div>
                </div>
              </Link>
            </ScrollReveal>
          </div>
        </section>
      )}

      {/* ─── ALL POSTS ─── */}
      <section className="border-t border-divider">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-24 md:py-32">
          <div className="space-y-0">
            {rest.map((post, i) => (
              <ScrollReveal key={post.slug} delay={i * 0.1}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="grid md:grid-cols-[140px_1fr_1fr] gap-6 py-10 border-t border-divider group"
                >
                  <div className="text-sm text-foreground-dim">{post.date}</div>
                  <div>
                    <span className="text-[11px] tracking-[0.2em] uppercase text-accent block mb-2">
                      {post.category}
                    </span>
                    <h3 className="text-xl font-light group-hover:text-accent transition-colors duration-500">
                      {post.title}
                    </h3>
                  </div>
                  <p className="text-foreground-dim text-sm leading-relaxed">
                    {post.excerpt}
                  </p>
                </Link>
              </ScrollReveal>
            ))}
            <div className="border-t border-divider" />
          </div>
        </div>
      </section>
    </>
  );
}
