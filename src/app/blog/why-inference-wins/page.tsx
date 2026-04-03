import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata = {
  title: "The Race for Speed Is Over — QuanTM.ai",
  description:
    "Training happens once. Inference happens forever. Why the AI industry is optimizing for the wrong variable.",
};

export default function ManifestoPage() {
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
              Manifesto
            </span>
            <span className="text-foreground-dim text-sm">2026-03-26</span>
          </div>
          <h1 className="text-[clamp(2.2rem,4.5vw,4rem)] font-light leading-[1.08] tracking-[-0.02em] max-w-3xl">
            The Race for Speed Is Over. The Race for Space Has Begun.
          </h1>
        </div>
      </section>

      <section className="border-t border-divider">
        <div className="max-w-[800px] mx-auto px-6 md:px-12 py-16 md:py-24">
          <ScrollReveal>
            <div className="prose-dark space-y-8 text-foreground-muted text-[17px] leading-[1.85]">
              <p className="text-foreground text-xl leading-relaxed">
                In 2024, Keller Jordan asked the AI community a sharp question:
                how fast can you train GPT-2 to a target loss? The answer dropped
                from 45 minutes to under 4 minutes. A brilliant result. A solved
                problem. And a solved problem is, by definition, the wrong thing
                to keep optimizing.
              </p>

              <h2 className="text-foreground text-2xl font-light mt-16 mb-6">
                The 5% Problem
              </h2>
              <p>
                Training a model is a one-time capital expenditure. You spend
                the compute, you get the weights, you move on. But every query
                that hits that model after deployment is an inference pass. Every
                token generated, every agent turn, every API call. Over the
                lifetime of a production model, inference accounts for 95% or
                more of total compute.
              </p>
              <p>
                The Keller Jordan speedrun optimized the 5%. The Blundin Space
                RIFT optimizes the 95%.
              </p>

              <h2 className="text-foreground text-2xl font-light mt-16 mb-6">
                The Wrong Leaderboard
              </h2>
              <p>
                Every major ML benchmark measures accuracy or training speed.
                Neither captures the variable that dominates real-world cost:
                how many transistor flips does a single forward pass require?
              </p>
              <p>
                A model that trains in 10 hours but infers at 1 nanojoule per
                token beats a model that trains in 10 seconds at 100 nanojoules
                per token&mdash;within days of deployment. Inference volume
                scales with users. Users scale with deployment.
              </p>

              <h2 className="text-foreground text-2xl font-light mt-16 mb-6">
                The Three Inflections
              </h2>
              <p>
                <strong className="text-foreground">Inference dominance</strong>{" "}
                is already here. GPT-4, Claude, Gemini&mdash;these systems run
                billions of forward passes per day. The training run is a memory.
                The inference fleet is the reality.
              </p>
              <p>
                <strong className="text-foreground">
                  Quantum-photonic substrates
                </strong>{" "}
                are coming. Silicon transistors dissipate energy on every state
                transition. Photonic interconnects and quantum gates operate on
                fundamentally different energy curves. The operation-to-energy
                mapping is about to be rewritten. Models designed for FP16 on
                NVIDIA GPUs may be structurally wrong for photonic tensor cores.
              </p>
              <p>
                <strong className="text-foreground">
                  Orbital compute
                </strong>{" "}
                is real, not metaphorical. Satellite constellations, lunar relays,
                and deep-space autonomous systems face the hardest thermal
                constraints in engineering. In vacuum, there is no convection.
                Every watt of waste heat must be radiated through massive thermal
                panels. The most valuable computer in orbit is the one that
                produces the most intelligence per watt of thermal dissipation.
              </p>

              <h2 className="text-foreground text-2xl font-light mt-16 mb-6">
                Transistor Flip Equivalents
              </h2>
              <p>
                We needed a metric that works across substrates. Not FLOPS
                (silicon-specific). Not tokens-per-second (conflates hardware
                speed with architecture). Not dollars-per-query (embeds pricing
                noise). TFE&mdash;Transistor Flip Equivalents&mdash;counts the
                thermodynamic cost at the physical level.
              </p>
              <p>
                One TFE equals one CMOS transistor state transition at 7nm.
                An INT4 MAC is 32 TFE. An FP32 MAC is 2,048. Softmax per
                element is 8,192. Every operation in a forward pass maps to
                a TFE count.
              </p>
              <p>
                The same model is scored against three tables: v1.0 (current
                CMOS), v2.0 (projected photonic), v3.0 (projected quantum).
                Photonic and quantum substrates generate less heat per
                operation&mdash;a model that wins on CMOS may lose on photonic
                if it leans on operations that photonics makes cheap for other
                architectures.
              </p>

              <h2 className="text-foreground text-2xl font-light mt-16 mb-6">
                The Competition
              </h2>
              <p>
                The Blundin Space RIFT competition is simple: produce a
                GPT-2-equivalent language model that achieves the target quality
                scores while minimizing TFE per token at inference. Any
                architecture, any training budget, any technique. We don&apos;t
                care how you build it. We care how it runs.
              </p>
              <p>
                RIFT Score = (HellaSwag% &times; 1000) / log&#8321;&#8320;(TFE
                per token). Higher is better. The log scale means the first
                10x efficiency gain matters more than the tenth&mdash;matching
                real physics.
              </p>

              <h2 className="text-foreground text-2xl font-light mt-16 mb-6">
                What Comes Next
              </h2>
              <p>
                We have released the{" "}
                <code className="font-mono text-accent text-[15px]">rift-audit</code>{" "}
                tool, which instruments a PyTorch model&apos;s forward pass and
                produces a TFE audit report. We have scored six baselines across
                all three substrate tables. The leaderboard is seeded. The rules
                are published. The inference spec is locked.
              </p>
              <p>
                Now we wait for the community to show us what inference-first
                design looks like. We expect to see aggressive quantization,
                structured sparsity, novel attention mechanisms, binary and
                ternary representations, and architectures that nobody has tried
                because nobody has been measuring the right thing.
              </p>
              <p className="text-foreground text-xl leading-relaxed mt-16 border-l-2 border-accent pl-6">
                The race for training speed is over. The race for inference
                efficiency&mdash;the race for space&mdash;has just begun.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="border-t border-divider">
        <div className="max-w-[800px] mx-auto px-6 md:px-12 py-16 text-center">
          <Link href="/competition" className="btn-primary">
            Enter the RIFT
            <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>
      </section>
    </>
  );
}
