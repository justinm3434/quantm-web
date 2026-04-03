import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata = {
  title: "Submit — Blundin Space RIFT | QuanTM.ai",
  description: "Submit your model to the Blundin Space RIFT competition.",
};

export default function SubmitPage() {
  return (
    <>
      {/* ─── HEADER ─── */}
      <section className="pt-32 pb-16">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <p className="text-[11px] tracking-[0.3em] uppercase text-accent mb-8">
            Submission Guide
          </p>
          <h1 className="text-[clamp(2.5rem,5vw,4.5rem)] font-light leading-[1.05] tracking-[-0.02em] max-w-2xl">
            Submit Your Model
          </h1>
          <p className="text-foreground-dim text-lg mt-6 max-w-xl">
            Four steps from model to leaderboard. All submissions are
            cryptographically signed and independently verified.
          </p>
        </div>
      </section>

      {/* ─── STEPS ─── */}
      <section className="border-t border-divider">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-24 md:py-32">
          {/* Step 1 */}
          <ScrollReveal>
            <div className="grid md:grid-cols-[120px_1fr] gap-6 py-12 border-t border-divider">
              <div className="num-accent text-[2.5rem] font-light">01</div>
              <div>
                <h3 className="text-2xl font-light mb-6">
                  Install the audit tool
                </h3>
                <div className="code-block p-6 md:p-8 text-sm max-w-xl">
                  <span className="text-foreground-dim">$</span>{" "}
                  <span className="text-foreground">pip install rift-audit[transformers]</span>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Step 2 */}
          <ScrollReveal>
            <div className="grid md:grid-cols-[120px_1fr] gap-6 py-12 border-t border-divider">
              <div className="num-accent text-[2.5rem] font-light">02</div>
              <div>
                <h3 className="text-2xl font-light mb-6">Audit your model</h3>
                <div className="code-block p-6 md:p-8 text-sm max-w-xl space-y-1">
                  <div>
                    <span className="text-foreground-dim">$</span>{" "}
                    rift-audit ./your-model \
                  </div>
                  <div className="pl-6 text-foreground-muted">
                    --hellaswag-acc 31.5 \
                  </div>
                  <div className="pl-6 text-foreground-muted">
                    --val-loss 3.15 \
                  </div>
                  <div className="pl-6 text-foreground-muted">
                    --output report.json
                  </div>
                </div>
                <p className="text-foreground-dim text-sm mt-4 max-w-xl">
                  The tool instruments your model&apos;s forward pass, counts every
                  operation, generates a TFE report with RIFT scores across all
                  three substrate tables, and <strong className="text-foreground">cryptographically signs</strong> the
                  report with a hash of your model weights.
                </p>
                <div className="code-block p-6 md:p-8 text-sm max-w-xl mt-4 space-y-1 text-foreground-dim">
                  <div className="text-foreground-muted"># Example output:</div>
                  <div>Computing model weight hash...</div>
                  <div>Model hash: <span className="text-accent">a3f8c1d2e4b5...</span></div>
                  <div>Auditing ./your-model (seq_len=128, device=cpu)...</div>
                  <div>Report saved to report.json <span className="text-accent">(signed)</span></div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Step 3 */}
          <ScrollReveal>
            <div className="grid md:grid-cols-[120px_1fr] gap-6 py-12 border-t border-divider">
              <div className="num-accent text-[2.5rem] font-light">03</div>
              <div>
                <h3 className="text-2xl font-light mb-6">
                  Prepare your submission
                </h3>
                <div className="max-w-xl space-y-0">
                  {[
                    ["Model weights", "Hosted on HuggingFace Hub (required for verification)"],
                    ["Inference script", "Self-contained Python: tokens in, logits out"],
                    ["Signed audit report", "JSON output from rift-audit (includes integrity hash)"],
                    ["Architecture description", "Design choices and TFE minimization strategy"],
                  ].map(([title, desc], i) => (
                    <div
                      key={i}
                      className="flex justify-between items-baseline py-4 border-t border-divider gap-4"
                    >
                      <span className="text-foreground text-[15px]">{title}</span>
                      <span className="text-foreground-dim text-sm text-right">{desc}</span>
                    </div>
                  ))}
                  <div className="border-t border-divider" />
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Step 4 */}
          <ScrollReveal>
            <div className="grid md:grid-cols-[120px_1fr] gap-6 py-12 border-t border-divider">
              <div className="num-accent text-[2.5rem] font-light">04</div>
              <div>
                <h3 className="text-2xl font-light mb-6">Submit</h3>
                <p className="text-foreground-dim leading-relaxed max-w-xl mb-6">
                  Email your submission to{" "}
                  <a
                    href="mailto:rift@quantm.ai"
                    className="text-accent hover:text-accent-hover transition-colors"
                  >
                    rift@quantm.ai
                  </a>{" "}
                  with the subject line{" "}
                  <code className="font-mono text-foreground text-sm">
                    [RIFT Submission] Your Model Name
                  </code>
                  .
                </p>
                <p className="text-foreground-dim leading-relaxed max-w-xl">
                  Include a link to your model weights on HuggingFace Hub and
                  attach the signed audit report JSON and architecture
                  description.
                </p>
              </div>
            </div>
          </ScrollReveal>
          <div className="border-t border-divider" />
        </div>
      </section>

      {/* ─── VERIFICATION ─── */}
      <section className="section-light">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-24 md:py-32">
          <ScrollReveal>
            <div className="grid md:grid-cols-2 gap-16 md:gap-24">
              <div>
                <p className="text-[11px] tracking-[0.3em] uppercase text-[#A51C30] mb-6">
                  Verification
                </p>
                <h2 className="text-3xl font-light text-[#0A0A0B] leading-tight">
                  All submissions are independently verified
                </h2>
              </div>
              <div className="text-[#555555] leading-relaxed space-y-4">
                <p>
                  Every submission goes through a two-step verification process
                  before appearing on the leaderboard:
                </p>
                <p>
                  <strong className="text-[#0A0A0B]">Step 1: Signature check.</strong>{" "}
                  We verify the report&apos;s cryptographic signature has not been
                  tampered with. Any modification to scores, TFE counts, or model
                  metadata invalidates the signature.
                </p>
                <p>
                  <strong className="text-[#0A0A0B]">Step 2: Independent re-audit.</strong>{" "}
                  We download your model weights from HuggingFace Hub and re-run{" "}
                  <code className="font-mono text-[#A51C30]">rift-audit</code> ourselves.
                  The model weight hash must match. The TFE counts must match.
                  HellaSwag accuracy and validation loss are re-evaluated independently.
                </p>
                <div className="bg-[#0A0A0B] text-white p-6 font-mono text-sm mt-6 space-y-1">
                  <div className="text-foreground-dim"># Our verification process:</div>
                  <div>$ rift-verify report.json --model your-model-id</div>
                  <div className="mt-2 text-accent">RESULT: PASS</div>
                  <div className="text-foreground-dim">Signature valid: True</div>
                  <div className="text-foreground-dim">Model hash matches: True</div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ─── REQUIREMENTS ─── */}
      <section className="border-t border-divider">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-24 md:py-32">
          <ScrollReveal>
            <p className="text-[11px] tracking-[0.3em] uppercase text-accent mb-12">
              Qualifying Requirements
            </p>
            <div className="grid md:grid-cols-2 gap-16 max-w-xl">
              <div>
                <div className="text-[11px] tracking-[0.2em] uppercase text-foreground-dim mb-2">
                  HellaSwag Accuracy
                </div>
                <div className="stat-number text-4xl text-accent">
                  &ge; 30.0%
                </div>
              </div>
              <div>
                <div className="text-[11px] tracking-[0.2em] uppercase text-foreground-dim mb-2">
                  Validation Loss
                </div>
                <div className="stat-number text-4xl text-accent">
                  &le; 3.28
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="border-t border-divider">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-24 md:py-32 text-center">
          <p className="text-foreground-dim mb-4">
            Need the full competition specification?
          </p>
          <Link
            href="/competition"
            className="text-accent text-[13px] tracking-[0.1em] uppercase hover:text-accent-hover transition-colors duration-400"
          >
            Read the rules &rarr;
          </Link>
        </div>
      </section>
    </>
  );
}
