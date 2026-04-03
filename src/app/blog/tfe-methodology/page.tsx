import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import TFETable from "@/components/TFETable";

export const metadata = {
  title: "TFE v1.0 Methodology — QuanTM.ai",
  description:
    "How we derived the Transistor Flip Equivalent conversion table. Published data, methodology, and citations.",
};

export default function TFEMethodologyPage() {
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
              Research
            </span>
            <span className="text-foreground-dim text-sm">2026-03-26</span>
          </div>
          <h1 className="text-[clamp(2rem,4vw,3.5rem)] font-light leading-[1.08] tracking-[-0.02em] max-w-3xl">
            TFE v1.0: A Substrate-Agnostic Measure of Computational
            Thermodynamic Cost
          </h1>
        </div>
      </section>

      <section className="border-t border-divider">
        <div className="max-w-[800px] mx-auto px-6 md:px-12 py-16 md:py-24">
          <ScrollReveal>
            <div className="space-y-8 text-foreground-muted text-[17px] leading-[1.85]">
              <p className="text-foreground text-xl leading-relaxed">
                The TFE conversion table is the scientific core of the RIFT
                competition. This document explains how the v1.0 values were
                derived, the published data they reference, and the methodology
                for future table versions.
              </p>

              <h2 className="text-foreground text-2xl font-light mt-16 mb-6">
                Design Principles
              </h2>
              <p>
                TFE measures the thermodynamic cost of computation at the
                physical level. One TFE equals the energy dissipated by a
                single CMOS transistor state transition at 7nm process
                technology. All operations are expressed as multiples of this
                base unit.
              </p>
              <p>
                This approach provides three properties that existing metrics
                (FLOPS, tokens/sec, $/query) lack:
              </p>
              <ul className="space-y-3 pl-6 text-foreground-dim">
                <li className="flex gap-3">
                  <span className="text-accent">&rarr;</span>
                  <span><strong className="text-foreground">Substrate-agnostic:</strong> the same model
                  can be scored against CMOS, photonic, and quantum cost tables</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent">&rarr;</span>
                  <span><strong className="text-foreground">Physics-grounded:</strong> values derive from
                  energy-per-operation measurements, not benchmark throughput</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent">&rarr;</span>
                  <span><strong className="text-foreground">Dtype-aware:</strong> INT4 and FP32 are scored
                  differently because they dissipate different amounts of energy</span>
                </li>
              </ul>

              <h2 className="text-foreground text-2xl font-light mt-16 mb-6">
                v1.0 CMOS Derivation
              </h2>
              <p>
                The foundational reference for energy-per-operation data is Mark
                Horowitz&apos;s ISSCC 2014 keynote, which established energy costs
                for arithmetic operations and memory accesses at 45nm. These
                values have been widely cited and scaled to subsequent process
                nodes by multiple research groups.
              </p>
              <p>
                Key reference data points (scaled to 7nm estimates):
              </p>
              <div className="code-block p-6 my-6 text-sm space-y-2">
                <div><span className="text-foreground-dim"># Horowitz 2014 (scaled 45nm → 7nm)</span></div>
                <div>INT8 multiply: <span className="text-accent">~0.03 pJ</span></div>
                <div>FP16 multiply: <span className="text-accent">~0.1 pJ</span></div>
                <div>FP32 multiply: <span className="text-accent">~0.4 pJ</span></div>
                <div>SRAM read (8KB): <span className="text-accent">~0.5 pJ/byte</span></div>
                <div>DRAM read: <span className="text-accent">~10-20 pJ/byte</span></div>
              </div>
              <p>
                The TFE table normalizes these energy costs relative to a
                single transistor flip. At 7nm CMOS, a transistor state
                transition dissipates approximately 0.5 fJ (femtojoules) at the
                switching level. The TFE values represent the ratio of each
                operation&apos;s energy cost to this base unit.
              </p>

              <h3 className="text-foreground text-xl font-light mt-12 mb-4">
                Arithmetic Operations
              </h3>
              <p>
                An INT8 multiply-accumulate requires approximately 128
                transistor-level switching events (adder trees, partial products,
                accumulation). An FP32 MAC requires mantissa multiplication (24-bit),
                exponent addition, normalization, and rounding&mdash;approximately
                2,048 equivalent transitions. The 16x ratio between INT8 and FP32
                is consistent with published energy ratios from ISSCC papers and
                NVIDIA GPU power measurements.
              </p>
              <p>
                INT4 operations (32 TFE) reflect the quadratic scaling of
                multiplier area with bit width. Binary operations (1 TFE for XNOR
                + popcount) represent the theoretical minimum: a single gate-level
                operation per bit.
              </p>

              <h3 className="text-foreground text-xl font-light mt-12 mb-4">
                Memory Operations
              </h3>
              <p>
                Memory access energy dominates in bandwidth-bound inference. The
                128 TFE per byte (SRAM) and 4,096 TFE per byte (DRAM) values
                reflect the well-established energy hierarchy: DRAM reads cost
                approximately 30-100x more energy than SRAM reads at equivalent
                process nodes. This ratio is documented in multiple ISSCC papers
                and aligns with the observation that memory access, not
                computation, is the primary energy bottleneck in modern inference.
              </p>

              <h3 className="text-foreground text-xl font-light mt-12 mb-4">
                Complex Operations
              </h3>
              <p>
                Softmax (8,192 TFE per element) and LayerNorm (4,096 TFE per
                element) include the cost of exponentiation, division, square
                root, and normalization. These are multi-step operations that
                cannot be reduced to a single MAC equivalent. The assigned costs
                assume a standard hardware implementation without dedicated
                functional units.
              </p>
              <p>
                Non-linear activations (GELU/SiLU at 8,192 TFE) reflect the
                approximation circuits required. Binary activations (sign function
                at 1 TFE) are a single comparison operation&mdash;the theoretical
                minimum.
              </p>

              <h2 className="text-foreground text-2xl font-light mt-16 mb-6">
                v2.0 and v3.0 Projections
              </h2>
              <p>
                The photonic (v2.0) and quantum (v3.0) tables represent
                projected costs based on published roadmaps and physical
                constraints:
              </p>
              <p>
                <strong className="text-foreground">v2.0 Photonic</strong> values
                reflect the key advantage of photonic computing: matrix
                multiplication via optical interference is extremely
                energy-efficient. MAC operations see 6-50x cost reductions.
                Memory reads see smaller reductions (2-8x) because photonic
                memory is still an open research problem.
              </p>
              <p>
                <strong className="text-foreground">v3.0 Quantum</strong> values
                project fault-tolerant quantum computing at 1,000+ logical qubits.
                Linear algebra operations benefit most. Non-linear operations
                (softmax, activations) see large reductions because quantum
                circuits can evaluate non-linear functions more efficiently
                through quantum amplitude estimation.
              </p>

              <h2 className="text-foreground text-2xl font-light mt-16 mb-6">
                References
              </h2>
              <ul className="space-y-4 text-[15px]">
                <li className="flex gap-3">
                  <span className="text-accent font-mono text-xs mt-1">[1]</span>
                  <span>Horowitz, M. &ldquo;Computing&apos;s Energy Problem (and what we can do about it).&rdquo; ISSCC 2014 Keynote. Energy per operation benchmarks at 45nm.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent font-mono text-xs mt-1">[2]</span>
                  <span>Sze, V. et al. &ldquo;Efficient Processing of Deep Neural Networks.&rdquo; Synthesis Lectures on Computer Architecture, 2020. Energy analysis of DNN accelerators.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent font-mono text-xs mt-1">[3]</span>
                  <span>Jouppi, N. et al. &ldquo;In-Datacenter Performance Analysis of a Tensor Processing Unit.&rdquo; ISCA 2017. TPU energy efficiency analysis.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent font-mono text-xs mt-1">[4]</span>
                  <span>Dally, W. &ldquo;High-Performance Hardware for Machine Learning.&rdquo; NIPS 2015 Tutorial. Energy cost hierarchy for ML operations.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent font-mono text-xs mt-1">[5]</span>
                  <span>Shastri, B. et al. &ldquo;Photonics for artificial intelligence and neuromorphic computing.&rdquo; Nature Photonics, 2021. Energy projections for photonic tensor cores.</span>
                </li>
              </ul>

              <h2 className="text-foreground text-2xl font-light mt-16 mb-6">
                Version Policy
              </h2>
              <p>
                TFE tables are updated annually. When a new table version is
                published, all existing submissions are re-scored against it.
                Leaderboards are permanent and cumulative. Previous table
                versions remain active&mdash;a model&apos;s RIFT-Silicon score
                is always computed against v1.0.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ─── INLINE TFE TABLE ─── */}
      <section className="border-t border-divider">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-16 md:py-24">
          <ScrollReveal>
            <p className="text-[11px] tracking-[0.3em] uppercase text-accent mb-8">
              TFE Conversion Table v1.0
            </p>
            <TFETable />
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
