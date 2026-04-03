import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata = {
  title: "Six Baselines, Three Substrates — QuanTM.ai",
  description:
    "Baseline RIFT scores for GPT-2 variants across FP32, INT8, INT4, distilled, and binary architectures.",
};

const baselines = [
  {
    name: "BitNet-GPT2 Binary",
    dtype: "INT1",
    params: "124.4M",
    silicon: 3937.01,
    photonic: 4228.33,
    quantum: 4529.50,
    universal: 4224.06,
    tfe: "41.9M",
    insight: "Binary weights with sign activations. 1,888x fewer TFE than FP32. The theoretical ceiling for quantization-only optimization.",
  },
  {
    name: "DistilGPT-2 INT4",
    dtype: "INT4",
    params: "81.9M",
    silicon: 3354.49,
    photonic: 3602.97,
    quantum: 3876.11,
    universal: 3604.26,
    tfe: "876.6M",
    insight: "Distillation + quantization. 34% fewer parameters and INT4 precision. Shows compounding benefit of architecture + dtype optimization.",
  },
  {
    name: "GPT-2 INT4",
    dtype: "INT4",
    params: "124.4M",
    silicon: 3287.71,
    photonic: 3522.66,
    quantum: 3784.60,
    universal: 3525.83,
    tfe: "1.33B",
    insight: "Same architecture, aggressive quantization. 59x fewer TFE than FP32. The low-hanging fruit of dtype optimization.",
  },
  {
    name: "DistilGPT-2 FP16",
    dtype: "FP16",
    params: "81.9M",
    silicon: 2955.16,
    photonic: 3319.61,
    quantum: 3469.93,
    universal: 3241.02,
    tfe: "14.0B",
    insight: "Architecture-level efficiency without aggressive quantization. Fewer layers, fewer MACs, but still FP16 precision.",
  },
  {
    name: "GPT-2 INT8",
    dtype: "INT8",
    params: "124.4M",
    silicon: 3088.37,
    photonic: 3331.14,
    quantum: 3511.19,
    universal: 3305.67,
    tfe: "5.17B",
    insight: "Standard INT8 quantization. 15x fewer TFE than FP32. The most common production optimization.",
  },
  {
    name: "GPT-2 FP32",
    dtype: "FP32",
    params: "124.4M",
    silicon: 2752.50,
    photonic: 3157.31,
    quantum: 3294.54,
    universal: 3059.24,
    tfe: "79.3B",
    insight: "Unmodified GPT-2. Maximum TFE. Every submission should beat this.",
  },
];

export default function BaselineResultsPage() {
  return (
    <>
      <section className="pt-32 pb-16">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <Link
            href="/blog"
            className="text-[11px] tracking-[0.2em] uppercase text-foreground-dim hover:text-accent transition-colors mb-8 inline-block"
          >
            &larr; Blog
          </Link>
          <div className="flex items-center gap-4 mb-6">
            <span className="text-[11px] tracking-[0.2em] uppercase text-accent">
              Competition
            </span>
            <span className="text-foreground-dim text-sm">2026-03-26</span>
          </div>
          <h1 className="text-[clamp(2rem,4vw,3.5rem)] font-light leading-[1.08] tracking-[-0.02em] max-w-3xl">
            Six Baselines, Three Substrates, One Conclusion
          </h1>
        </div>
      </section>

      <section className="border-t border-divider">
        <div className="max-w-[800px] mx-auto px-6 md:px-12 py-16 md:py-24">
          <ScrollReveal>
            <div className="space-y-8 text-foreground-muted text-[17px] leading-[1.85]">
              <p className="text-foreground text-xl leading-relaxed">
                Before opening the RIFT competition, we needed to verify that
                the scoring formula produces meaningful separation across
                different optimization strategies. We scored six GPT-2 variants
                to seed the leaderboard and validate the approach.
              </p>

              <h2 className="text-foreground text-2xl font-light mt-16 mb-6">
                Key Findings
              </h2>
              <p>
                The RIFT-Silicon scores span from 2,752 (FP32 baseline) to
                3,937 (binary weights)&mdash;a 43% spread. This is exactly what
                we want: meaningful differentiation that rewards aggressive
                optimization without making the formula degenerate.
              </p>
              <p>
                The ranking is consistent across all three substrates (CMOS,
                photonic, quantum), confirming that our TFE tables preserve
                relative ordering. Models that are efficient on CMOS remain
                efficient on photonic and quantum substrates, but the gap
                narrows&mdash;photonic and quantum substrates disproportionately
                benefit lower-precision operations.
              </p>
              <p>
                The log scale in the denominator prevents extreme TFE reductions
                from producing unbounded scores. The binary model achieves an
                1,888x TFE reduction over FP32 but only a 43% score improvement.
                This is intentional: we want diminishing returns to reflect the
                physical reality that each order of magnitude of efficiency is
                harder than the last.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ─── RESULTS TABLE ─── */}
      <section className="border-t border-divider">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-16 md:py-24">
          <ScrollReveal>
            <p className="text-[11px] tracking-[0.3em] uppercase text-accent mb-8">
              Baseline Results
            </p>
            <div className="space-y-0">
              {baselines.map((b, i) => (
                <div
                  key={i}
                  className="grid md:grid-cols-[200px_1fr] gap-6 py-8 border-t border-divider"
                >
                  <div>
                    <div className="text-foreground font-medium mb-1">{b.name}</div>
                    <div className="text-xs text-foreground-dim">
                      {b.params} &middot; {b.dtype} &middot; {b.tfe} TFE/tok
                    </div>
                  </div>
                  <div>
                    <div className="grid grid-cols-4 gap-4 mb-3">
                      {[
                        { label: "Silicon", val: b.silicon },
                        { label: "Photonic", val: b.photonic },
                        { label: "Quantum", val: b.quantum },
                        { label: "Universal", val: b.universal },
                      ].map((s) => (
                        <div key={s.label}>
                          <div className="text-[10px] tracking-[0.15em] uppercase text-foreground-dim mb-1">
                            {s.label}
                          </div>
                          <div className="font-mono text-accent text-lg">
                            {s.val.toFixed(0)}
                          </div>
                        </div>
                      ))}
                    </div>
                    <p className="text-foreground-dim text-sm leading-relaxed">
                      {b.insight}
                    </p>
                  </div>
                </div>
              ))}
              <div className="border-t border-divider" />
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="border-t border-divider">
        <div className="max-w-[800px] mx-auto px-6 md:px-12 py-16 md:py-24">
          <ScrollReveal>
            <div className="space-y-8 text-foreground-muted text-[17px] leading-[1.85]">
              <h2 className="text-foreground text-2xl font-light mt-4 mb-6">
                What This Means for Competitors
              </h2>
              <p>
                The baselines show that quantization alone (INT4) produces a
                strong 20% score improvement over FP32. Combining architecture
                reduction with quantization (DistilGPT-2 INT4) adds another 2%.
                And binary weights push the theoretical ceiling to 43% above
                baseline.
              </p>
              <p>
                But these are all projections on the same GPT-2 architecture.
                A truly novel architecture&mdash;one designed from scratch for
                inference efficiency, with attention mechanisms that avoid the
                8,192 TFE softmax cost, or feedforward layers that use binary
                activations instead of GELU&mdash;could go much further.
              </p>
              <p className="text-foreground text-xl leading-relaxed border-l-2 border-accent pl-6">
                The baselines prove the formula works. Now show us what a model
                designed for TFE minimization actually looks like.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
