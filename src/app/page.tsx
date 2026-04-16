import Link from "next/link";
import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";

export default function Home() {
  return (
    <>
      {/* ─── HERO ─── */}
      <section className="min-h-screen flex items-center relative overflow-hidden hero-grid">
        <div className="hero-glow" />
        <div className="hero-glow-2" />
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-32 w-full relative z-10">
          <div className="max-w-3xl">
            <div className="mb-10">
              <Image
                src="/images/quantm-logo.png"
                alt="QuanTM"
                width={800}
                height={312}
                priority
                className="h-28 md:h-44 lg:h-52 w-auto object-contain mb-12"
              />
              <div className="flex items-center gap-3">
                <span className="inline-block w-2 h-2 rounded-full bg-accent pulse-dot" />
                <p className="text-[11px] tracking-[0.3em] uppercase text-accent">
                  The Blundin Space RIFT Competition
                </p>
              </div>
            </div>
            <h1 className="text-[clamp(2.8rem,6.5vw,6rem)] font-light leading-[1.02] tracking-[-0.03em] mb-8">
              Training happens once.
              <br />
              <span className="text-foreground-dim">
                Inference happens forever.
              </span>
            </h1>
            <p className="text-lg md:text-xl text-foreground-dim leading-relaxed max-w-xl mb-14">
              The AI industry optimizes for the wrong variable. We measure what
              matters: inference efficiency across CMOS, photonic, and quantum
              substrates.
            </p>
            <div className="flex items-center gap-8">
              <Link href="/competition" className="btn-primary">
                Enter the RIFT
                <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
              <Link href="/leaderboard" className="btn-ghost">
                View Leaderboard
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />

        {/* Name explanation */}
        <div className="absolute bottom-8 left-0 right-0 z-10">
          <div className="max-w-[1400px] mx-auto px-6 md:px-12">
            <p className="text-[11px] tracking-[0.15em] text-foreground-dim/40">
              <span className="text-accent/50">Quan</span>tum-photonic substrates
              &middot; <span className="text-foreground/30">T</span>ransformer{" "}
              <span className="text-foreground/30">M</span>odels &middot;{" "}
              <span className="text-foreground/30">T</span>hermo
              <span className="text-foreground/30">d</span>ynamic{" "}
              <span className="text-foreground/30">M</span>inimization
            </p>
          </div>
        </div>
      </section>

      {/* ─── STATS BAR ─── */}
      <section className="border-t border-divider bg-background-alt">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px">
            {[
              { value: "95%", label: "of LLM compute is inference\u00B9" },
              { value: "3", label: "substrate generations scored" },
              { value: "128", label: "token audit sequence" },
              { value: "0", label: "training constraints" },
            ].map((stat, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="py-10 md:py-14 pr-8">
                  <div className="stat-number text-4xl md:text-5xl text-accent mb-3">
                    {stat.value}
                  </div>
                  <div className="text-[12px] tracking-[0.1em] uppercase text-foreground-dim">
                    {stat.label}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
          <div className="pt-4 pb-2 border-t border-divider/50">
            <p className="text-[10px] text-foreground-dim/40">
              &sup1; Estimated based on industry analyses from Epoch AI, SemiAnalysis, and production LLM deployment data (2024&ndash;2026). Training is a one-time cost amortized across billions of inference passes.
            </p>
          </div>
        </div>
      </section>

      {/* ─── THE PROBLEM ─── */}
      <section className="border-t border-divider">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-24 md:py-40">
          <div className="grid md:grid-cols-2 gap-16 md:gap-24">
            <ScrollReveal>
              <div>
                <p className="text-[11px] tracking-[0.3em] uppercase text-accent mb-6">
                  The Problem
                </p>
                <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-light leading-[1.1] tracking-[-0.01em]">
                  The Keller Jordan speedrun optimized the 5%.
                </h2>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.15}>
              <div className="flex flex-col justify-end">
                <p className="text-foreground-dim text-lg leading-relaxed">
                  Over 95% of all compute cycles consumed by large language models
                  are spent on inference. The Blundin Space RIFT optimizes the 95%.
                  We don&apos;t care how long you took to build it. We care what you
                  built.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ─── THREE INFLECTIONS ─── */}
      <section className="border-t border-divider">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-24 md:py-40">
          <ScrollReveal>
            <p className="text-[11px] tracking-[0.3em] uppercase text-accent mb-16">
              Three Inflections
            </p>
          </ScrollReveal>

          <div className="space-y-0">
            {[
              {
                num: "01",
                title: "Inference Dominance",
                desc: "A model that trains in 10 hours but infers at 1 nanojoule per token will obliterate a model that trains in 10 seconds but burns 100 nanojoules per token\u2014within days of deployment. The era of training-centric thinking is ending.",
              },
              {
                num: "02",
                title: "Quantum-Photonic Substrates",
                desc: "Silicon transistors dissipate energy on every state transition. Photonic interconnects do not. The operation-to-energy mapping is about to be rewritten. Models must be designed for the new mapping\u2014not retrofitted onto it.",
              },
              {
                num: "03",
                title: "Orbital & Deep-Space Compute",
                desc: "In vacuum there is no convection. Every watt of waste heat must be radiated via massive thermal panels. The most valuable computer in orbit produces the most intelligence per watt of thermal dissipation.",
              },
            ].map((item, i) => (
              <ScrollReveal key={item.num} delay={i * 0.1}>
                <div className={`grid md:grid-cols-[120px_1fr] gap-6 py-12 border-t border-divider ${i === 2 ? "border-b" : ""} group`}>
                  <div className="num-accent text-[2.5rem] font-light">{item.num}</div>
                  <div className="grid md:grid-cols-2 gap-8">
                    <h3 className="text-2xl md:text-3xl font-light leading-tight">
                      {item.title}
                    </h3>
                    <p className="text-foreground-dim leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── THE FORMULA (light section) ─── */}
      <section className="section-light">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-24 md:py-40">
          <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-center">
            <ScrollReveal>
              <div>
                <p className="text-[11px] tracking-[0.3em] uppercase text-[#A51C30] mb-6">
                  The Metric
                </p>
                <h2 className="text-[clamp(1.8rem,3.5vw,3rem)] font-light leading-[1.15] tracking-[-0.01em] text-[#0A0A0B]">
                  Transistor Flip Equivalents per token
                </h2>
                <p className="text-[#555555] text-lg leading-relaxed mt-6">
                  TFE is a substrate-agnostic measure of computational thermodynamic
                  cost. Every submission is scored against CMOS, photonic, and
                  quantum tables simultaneously.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.15}>
              <div className="bg-[#0A0A0B] text-white p-8 md:p-12 border border-[#1E1E24]">
                <div className="font-mono text-foreground-dim text-xs mb-4 tracking-wider">
                  SCORING FORMULA
                </div>
                <div className="font-mono text-xl md:text-2xl leading-relaxed">
                  <span className="text-accent">RIFT</span> ={" "}
                  <span className="text-white">HellaSwag%</span>{" "}
                  <span className="text-foreground-dim">&times;</span> 1000{" "}
                  <span className="text-foreground-dim">/</span>{" "}
                  log<sub>10</sub>
                  <span className="text-foreground-dim">(</span>TFE
                  <span className="text-foreground-dim">)</span>
                </div>
                <div className="font-mono text-foreground-dim text-xs mt-6">
                  Higher is better. Intelligence up. Thermal cost down.
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ─── LEADERBOARD CATEGORIES ─── */}
      <section className="border-t border-divider">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-24 md:py-40">
          <ScrollReveal>
            <p className="text-[11px] tracking-[0.3em] uppercase text-accent mb-16">
              Four Leaderboards
            </p>
          </ScrollReveal>

          <div className="grid md:grid-cols-4 gap-px bg-divider">
            {[
              {
                num: "01",
                name: "RIFT-Silicon",
                desc: "Scored on TFE v1.0. Current CMOS at 7nm. Win this today.",
              },
              {
                num: "02",
                name: "RIFT-Photonic",
                desc: "Scored on TFE v2.0. Design for the substrate that\u2019s coming.",
              },
              {
                num: "03",
                name: "RIFT-Quantum",
                desc: "Scored on TFE v3.0. The long game. Radical architectures welcome.",
              },
              {
                num: "04",
                name: "RIFT-Universal",
                desc: "Geometric mean of all three. The overall champion.",
              },
            ].map((cat, i) => (
              <ScrollReveal key={cat.name} delay={i * 0.08}>
                <div className="glow-card p-8 md:p-10 h-full">
                  <div className="num-accent text-sm mb-6">{cat.num}</div>
                  <h3 className="text-lg font-medium mb-3">{cat.name}</h3>
                  <p className="text-foreground-dim text-sm leading-relaxed">
                    {cat.desc}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── WHAT WE ALLOW / WHAT WE MEASURE ─── */}
      <section className="border-t border-divider">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-24 md:py-40">
          <div className="grid md:grid-cols-2 gap-16 md:gap-24">
            <ScrollReveal>
              <div>
                <p className="text-[11px] tracking-[0.3em] uppercase text-foreground-dim mb-8">
                  What You Control
                </p>
                <ul className="space-y-5 text-foreground-muted text-[15px] leading-relaxed">
                  <li className="flex items-start gap-3">
                    <span className="text-foreground-dim mt-1.5 text-xs">&mdash;</span>
                    Any architecture, any framework
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-foreground-dim mt-1.5 text-xs">&mdash;</span>
                    Any quantization scheme
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-foreground-dim mt-1.5 text-xs">&mdash;</span>
                    Any amount of training time and compute
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-foreground-dim mt-1.5 text-xs">&mdash;</span>
                    Distillation, pruning, sparsity&mdash;all allowed
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-foreground-dim mt-1.5 text-xs">&mdash;</span>
                    No parameter budget
                  </li>
                </ul>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.15}>
              <div>
                <p className="text-[11px] tracking-[0.3em] uppercase text-accent mb-8">
                  What We Measure
                </p>
                <ul className="space-y-5 text-foreground text-[15px] leading-relaxed">
                  <li className="flex items-start gap-3">
                    <span className="text-accent mt-1.5 text-xs">&rarr;</span>
                    TFE per token at inference time
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent mt-1.5 text-xs">&rarr;</span>
                    Scored across three substrate tables
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent mt-1.5 text-xs">&rarr;</span>
                    HellaSwag accuracy{" "}
                    <span className="text-foreground-dim">&ge; 30.0%</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent mt-1.5 text-xs">&rarr;</span>
                    Validation loss{" "}
                    <span className="text-foreground-dim">&le; 3.28</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent mt-1.5 text-xs">&rarr;</span>
                    Audited by{" "}
                    <span className="font-mono text-accent">rift-audit</span>
                  </li>
                </ul>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="border-t border-divider relative overflow-hidden">
        <div className="absolute inset-0 hero-grid opacity-50" />
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-32 md:py-44 text-center relative z-10">
          <ScrollReveal>
            <h2 className="text-[clamp(2rem,4.5vw,4rem)] font-light leading-[1.1] mb-6">
              We don&apos;t care how you build it.
              <br />
              <span className="text-foreground-dim">We care how it runs.</span>
            </h2>
            <p className="text-foreground-dim text-lg mb-14">
              Build for space. Win everywhere.
            </p>
            <Link href="/submit" className="btn-primary">
              Submit Your Model
              <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
