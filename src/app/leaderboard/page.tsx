import Leaderboard from "@/components/Leaderboard";

export const metadata = {
  title: "Leaderboard — Blundin Space RIFT | QuanTM.ai",
  description:
    "RIFT competition leaderboard. See the most efficient transformers ranked across Silicon, Photonic, Quantum, and Universal categories.",
};

export default function LeaderboardPage() {
  return (
    <>
      {/* ─── HEADER ─── */}
      <section className="pt-32 pb-16">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <p className="text-[11px] tracking-[0.3em] uppercase text-accent mb-8">
            Rankings
          </p>
          <h1 className="text-[clamp(2.5rem,5vw,4.5rem)] font-light leading-[1.05] tracking-[-0.02em]">
            <span className="text-accent">RIFT</span> Leaderboard
          </h1>
          <p className="text-foreground-dim text-lg mt-6 max-w-xl">
            Ranked by inference efficiency. Lower TFE per token, higher RIFT
            score. Select a category to re-rank.
          </p>
        </div>
      </section>

      {/* ─── LEADERBOARD ─── */}
      <section className="border-t border-divider">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-24 md:py-32">
          <Leaderboard />
        </div>
      </section>

      {/* ─── METHODOLOGY ─── */}
      <section className="section-light">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-24 md:py-32">
          <div className="grid md:grid-cols-2 gap-16 md:gap-24">
            <div>
              <p className="text-[11px] tracking-[0.3em] uppercase text-[#A51C30] mb-6">
                Methodology
              </p>
              <h2 className="text-3xl font-light text-[#0F0F10] leading-tight">
                How scores are computed
              </h2>
            </div>
            <div className="text-[#555555] leading-relaxed space-y-4">
              <p>
                Each model is audited using{" "}
                <code className="font-mono text-[#A51C30]">rift-audit</code>,
                which instruments the forward pass via PyTorch hooks to count
                every operation. Each operation is mapped to TFE costs using the
                conversion table.
              </p>
              <p>
                RIFT Score = (HellaSwag% &times; 1000) / log&#8321;&#8320;(TFE per
                token). RIFT-Universal is the geometric mean of Silicon, Photonic,
                and Quantum scores.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
