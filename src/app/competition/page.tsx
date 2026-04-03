import TFETable from "@/components/TFETable";
import Link from "next/link";

export const metadata = {
  title: "Competition — Blundin Space RIFT | QuanTM.ai",
  description:
    "Full specification for the Blundin Space RIFT competition. Rules, TFE table, scoring, and submission format.",
};

export default function CompetitionPage() {
  return (
    <>
      {/* ─── HERO ─── */}
      <section className="pt-32 pb-16">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <p className="text-[11px] tracking-[0.3em] uppercase text-accent mb-8">
            Competition Specification
          </p>
          <h1 className="text-[clamp(2.5rem,5vw,4.5rem)] font-light leading-[1.05] tracking-[-0.02em] max-w-3xl">
            The Blundin Space{" "}
            <span className="text-accent">RIFT</span>
          </h1>
          <p className="text-foreground-muted text-sm tracking-wide uppercase mt-4">
            The GPT-2 Race for Space Speedrun
          </p>
          <p className="text-foreground-dim text-lg mt-6 max-w-xl">
            Reduced Inference Fast Transformer &mdash; produce a GPT-2-equivalent
            model that minimizes Transistor Flip Equivalents per token at inference.
          </p>
        </div>
      </section>

      {/* ─── KELLER JORDAN CONTEXT ─── */}
      <section className="border-t border-divider">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-24 md:py-32">
          <div className="grid md:grid-cols-2 gap-16 md:gap-24">
            <div>
              <p className="text-[11px] tracking-[0.3em] uppercase text-accent mb-6">
                Background
              </p>
              <h2 className="text-3xl md:text-4xl font-light leading-tight">
                The Keller Jordan speedrun optimized the 5%. The RIFT optimizes
                the 95%.
              </h2>
            </div>
            <div className="flex flex-col justify-end space-y-4">
              <p className="text-foreground-dim leading-relaxed">
                In 2024, Keller Jordan&apos;s GPT-2 speedrun asked: how fast can
                you train GPT-2 to a target loss? The answer dropped from 45
                minutes to under 4 minutes. A brilliant result&mdash;and a solved
                problem.
              </p>
              <p className="text-foreground-dim leading-relaxed">
                But training happens once. Inference happens forever. Over 95% of
                all compute cycles consumed by LLMs are spent on inference. The
                Blundin Space RIFT supersedes the speedrun by shifting the target:
                same qualifying scores, unlimited training budget, but scored
                entirely on inference efficiency.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── MISSION ─── */}
      <section className="border-t border-divider">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-24 md:py-32">
          <div className="grid md:grid-cols-2 gap-16 md:gap-24">
            <div>
              <p className="text-[11px] tracking-[0.3em] uppercase text-accent mb-6">
                Mission
              </p>
              <h2 className="text-3xl md:text-4xl font-light leading-tight">
                Any architecture. Any training budget. Only inference cost matters.
              </h2>
            </div>
            <div className="flex flex-col justify-end">
              <p className="text-foreground-dim leading-relaxed">
                You may use any amount of training time, any amount of training
                compute, any quantization scheme, any sparsity pattern, any
                distillation pipeline. We do not care how you build it. We care how
                it runs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── QUALIFYING CRITERIA ─── */}
      <section className="border-t border-divider">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-24 md:py-32">
          <p className="text-[11px] tracking-[0.3em] uppercase text-accent mb-12">
            Qualifying Criteria
          </p>
          <div className="max-w-2xl">
            {[
              { metric: "HellaSwag accuracy", target: "\u2265 30.0%" },
              { metric: "Validation loss (OpenWebText)", target: "\u2264 3.28" },
              { metric: "Parameter budget", target: "No limit" },
              { metric: "Training compute", target: "No limit" },
              { metric: "Training time", target: "No limit" },
            ].map((row, i) => (
              <div
                key={i}
                className="flex justify-between items-baseline py-5 border-t border-divider"
              >
                <span className="text-foreground-muted text-[15px]">
                  {row.metric}
                </span>
                <span className="font-mono text-[15px] text-foreground">
                  {row.target}
                </span>
              </div>
            ))}
            <div className="border-t border-divider" />
          </div>
        </div>
      </section>

      {/* ─── SCORING ─── */}
      <section className="section-light">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-24 md:py-32">
          <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-start">
            <div>
              <p className="text-[11px] tracking-[0.3em] uppercase text-[#A51C30] mb-6">
                Scoring
              </p>
              <div className="bg-[#0F0F10] text-white p-8 md:p-10 font-mono">
                <div className="text-foreground-dim text-xs tracking-wider mb-4">
                  RIFT SCORE
                </div>
                <div className="text-xl md:text-2xl leading-relaxed">
                  <span className="text-accent">RIFT</span> = (HellaSwag%{" "}
                  <span className="text-foreground-dim">&times;</span> 1000){" "}
                  <span className="text-foreground-dim">/</span>{" "}
                  log<sub>10</sub>(TFE/token)
                </div>
              </div>
            </div>
            <div className="text-[#555555] leading-relaxed space-y-4 pt-4">
              <p>
                Higher is better. The numerator rewards intelligence. The
                denominator penalizes thermal cost on a log scale&mdash;because the
                gains from 10x efficiency matter more at the bottom of the curve
                than at the top.
              </p>
              <p>
                Every submission is scored against all three TFE table versions
                simultaneously. A model that wins on CMOS may lose on Photonic if
                it relies heavily on operations that photonics makes cheap for other
                architectures.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── TFE TABLE ─── */}
      <section className="border-t border-divider">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-24 md:py-32">
          <p className="text-[11px] tracking-[0.3em] uppercase text-accent mb-4">
            The TFE Conversion Table
          </p>
          <p className="text-foreground-dim mb-12 max-w-xl">
            Substrate-agnostic measure of computational thermodynamic cost. Hover a
            column to highlight. Submissions are scored against all three versions.
          </p>
          <TFETable />
          <p className="mt-8 text-foreground-dim text-sm leading-relaxed max-w-2xl">
            Lower TFE values in v2.0 and v3.0 reflect the physical reality that
            photonic and quantum substrates generate significantly less heat per
            operation. Models designed for these substrates will score higher on
            future leaderboards.
          </p>
          <div className="mt-6 grid md:grid-cols-3 gap-6 text-sm text-foreground-dim">
            <div>
              <span className="font-mono text-accent text-xs">v1.0</span>{" "}
              Current CMOS at 7nm
            </div>
            <div>
              <span className="font-mono text-accent text-xs">v2.0</span>{" "}
              Projected photonic tensor cores (2027&ndash;2029)
            </div>
            <div>
              <span className="font-mono text-accent text-xs">v3.0</span>{" "}
              Fault-tolerant quantum, 1000+ logical qubits (2030+)
            </div>
          </div>
        </div>
      </section>

      {/* ─── LEADERBOARD CATEGORIES ─── */}
      <section className="border-t border-divider">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-24 md:py-32">
          <p className="text-[11px] tracking-[0.3em] uppercase text-accent mb-12">
            Leaderboard Categories
          </p>
          <div className="grid md:grid-cols-2 gap-px bg-divider">
            {[
              {
                name: "RIFT-Silicon",
                desc: "Scored on TFE v1.0. The near-term leaderboard. Win this today.",
              },
              {
                name: "RIFT-Photonic",
                desc: "Scored on TFE v2.0. Design for the substrate that's coming.",
              },
              {
                name: "RIFT-Quantum",
                desc: "Scored on TFE v3.0. The long game. Radical architectures welcome.",
              },
              {
                name: "RIFT-Universal",
                desc: "Geometric mean of all three scores. The overall champion.",
              },
            ].map((cat) => (
              <div key={cat.name} className="bg-background p-8 md:p-10">
                <h3 className="text-lg font-medium mb-2">{cat.name}</h3>
                <p className="text-foreground-dim text-sm leading-relaxed">
                  {cat.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SUBMISSION FORMAT ─── */}
      <section className="border-t border-divider">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-24 md:py-32">
          <p className="text-[11px] tracking-[0.3em] uppercase text-accent mb-12">
            Submission Format
          </p>
          <div className="space-y-0">
            {[
              {
                num: "01",
                title: "Model weights",
                desc: "Any format, any framework.",
              },
              {
                num: "02",
                title: "Inference script",
                desc: "Self-contained Python: token sequence in, next-token logits out.",
              },
              {
                num: "03",
                title: "TFE audit report",
                desc: "Per-layer breakdown generated by the official rift-audit tool.",
              },
              {
                num: "04",
                title: "Architecture description",
                desc: "Document explaining design choices and TFE minimization strategy.",
              },
            ].map((item) => (
              <div
                key={item.num}
                className="grid md:grid-cols-[80px_1fr] gap-4 py-8 border-t border-divider"
              >
                <div className="num-accent text-xl">{item.num}</div>
                <div>
                  <h3 className="text-lg font-medium mb-1">{item.title}</h3>
                  <p className="text-foreground-dim text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
            <div className="border-t border-divider" />
          </div>
        </div>
      </section>

      {/* ─── TIMELINE ─── */}
      <section className="border-t border-divider">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-24 md:py-32">
          <p className="text-[11px] tracking-[0.3em] uppercase text-accent mb-12">
            Timeline
          </p>
          <div className="max-w-2xl space-y-0">
            {[
              {
                date: "Q2 2026",
                event:
                  "Competition announced. TFE v1.0 table published. Audit tool released.",
              },
              {
                date: "Q3 2026",
                event: "First leaderboard opens (RIFT-Silicon).",
              },
              {
                date: "Q1 2027",
                event:
                  "TFE v2.0 (Photonic) table published. RIFT-Photonic leaderboard opens.",
              },
              {
                date: "Q1 2028",
                event:
                  "TFE v3.0 (Quantum) table published. RIFT-Quantum leaderboard opens.",
              },
              {
                date: "Ongoing",
                event:
                  "Tables updated annually. Leaderboards permanent and cumulative.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="grid grid-cols-[100px_1fr] gap-8 py-5 border-t border-divider"
              >
                <span className="font-mono text-sm text-accent">
                  {item.date}
                </span>
                <span className="text-foreground-muted text-[15px]">
                  {item.event}
                </span>
              </div>
            ))}
            <div className="border-t border-divider" />
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="border-t border-divider">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-24 md:py-32 text-center">
          <p className="text-foreground-dim text-lg mb-4">
            Build for space. Win everywhere.
          </p>
          <h2 className="text-3xl md:text-4xl font-light mb-8">
            Ready to enter?
          </h2>
          <Link
            href="/submit"
            className="inline-flex items-center gap-3 bg-accent hover:bg-accent-hover text-white text-[13px] tracking-[0.1em] uppercase px-8 py-4 transition-colors duration-400"
          >
            Submit Your Model
            <svg
              width="16"
              height="16"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path
                d="M3 8h10M9 4l4 4-4 4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </div>
      </section>
    </>
  );
}
