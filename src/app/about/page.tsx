export const metadata = {
  title: "About — QuanTM.ai",
  description:
    "The thesis behind QuanTM.ai and the Blundin Space RIFT competition.",
};

export default function AboutPage() {
  return (
    <>
      {/* ─── HERO ─── */}
      <section className="pt-32 pb-16">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <p className="text-[11px] tracking-[0.3em] uppercase text-accent mb-8">
            About
          </p>
          <h1 className="text-[clamp(2.5rem,5vw,4.5rem)] font-light leading-[1.05] tracking-[-0.02em] max-w-3xl">
            The AI industry optimizes for the wrong variable.
          </h1>
        </div>
      </section>

      {/* ─── THESIS ─── */}
      <section className="border-t border-divider">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-24 md:py-40">
          <div className="grid md:grid-cols-2 gap-16 md:gap-24">
            <div>
              <p className="text-[11px] tracking-[0.3em] uppercase text-accent mb-6">
                The Thesis
              </p>
              <h2 className="text-3xl md:text-4xl font-light leading-tight">
                Training is a one-time cost. Inference is the permanent,
                compounding cost.
              </h2>
            </div>
            <div className="text-foreground-dim leading-[1.8] space-y-6">
              <p>
                Over 95% of all compute cycles consumed by large language models
                are spent on inference. Every query, every token, every agent
                turn. The energy cost of training is amortized across billions of
                forward passes. The energy cost of inference is paid on every
                single one of them.
              </p>
              <p>
                The current AI hardware stack&mdash;FP16 matrix multiplies on
                NVIDIA GPUs&mdash;is a local optimum that will not survive contact
                with photonic tensor cores and quantum coherence. The models that
                thrive on next-generation substrates will be architecturally
                different: lower numerical precision, higher structural sparsity,
                binary and ternary representations where possible.
              </p>
              <p>
                Meanwhile, computation is moving off-planet. Satellite
                constellations, lunar relays, and deep-space autonomous systems
                face the hardest thermal constraints in engineering. No
                convection. Every watt of waste heat radiated through massive
                thermal panels.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── THE NAME ─── */}
      <section className="section-light">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-24 md:py-40">
          <p className="text-[11px] tracking-[0.3em] uppercase text-[#A51C30] mb-12">
            The Name
          </p>
          <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-light text-[#0F0F10] leading-tight max-w-2xl mb-16">
            QuanTM
          </h2>

          <div className="grid md:grid-cols-2 gap-px bg-[#d0d0cc]">
            {[
              {
                label: "Quan",
                meaning: "Quantum-photonic substrates",
                desc: "The next compute paradigm.",
              },
              {
                label: "TM",
                meaning: "Transformer Models",
                desc: "The architecture we're optimizing.",
              },
              {
                label: "TM",
                meaning: "Thermodynamic Minimization",
                desc: "The objective function.",
              },
              {
                label: "TM\u00B3",
                meaning: "The Machine that Makes The Machine",
                desc: "The meta-optimization loop.",
              },
            ].map((item, i) => (
              <div key={i} className="bg-[#F5F5F0] p-8 md:p-10">
                <div className="font-mono text-[#A51C30] text-sm mb-4">
                  {item.label}
                </div>
                <h3 className="text-lg font-medium text-[#0F0F10] mb-2">
                  {item.meaning}
                </h3>
                <p className="text-[#555555] text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── THE COMPETITION ─── */}
      <section className="border-t border-divider">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-24 md:py-40">
          <div className="grid md:grid-cols-2 gap-16 md:gap-24">
            <div>
              <p className="text-[11px] tracking-[0.3em] uppercase text-accent mb-6">
                The Competition
              </p>
              <h2 className="text-3xl md:text-4xl font-light leading-tight">
                The Blundin Space RIFT
              </h2>
            </div>
            <div className="text-foreground-dim leading-[1.8] space-y-6">
              <p>
                In 2024, Keller Jordan&apos;s GPT-2 speedrun asked: how fast can
                you train GPT-2 to a target loss? The answer dropped from 45
                minutes to under 4. A brilliant demonstration&mdash;optimizing for
                the variable that mattered at the time.
              </p>
              <p>
                The Blundin Space RIFT asks a different question: given unlimited
                resources to prepare, what is the most thermally efficient
                transformer you can build?
              </p>
              <p>
                The model that wins is the model you&apos;d put on a spacecraft.
                It&apos;s also the model you&apos;d put in a billion phones. And in
                a photonic data center. And eventually, in a quantum computer.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CONTACT ─── */}
      <section className="border-t border-divider">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-24 md:py-32">
          <p className="text-[11px] tracking-[0.3em] uppercase text-accent mb-6">
            Get in Touch
          </p>
          <a
            href="mailto:rift@quantm.ai"
            className="text-3xl md:text-4xl font-light text-foreground-muted hover:text-accent transition-colors duration-400"
          >
            rift@quantm.ai
          </a>
        </div>
      </section>
    </>
  );
}
