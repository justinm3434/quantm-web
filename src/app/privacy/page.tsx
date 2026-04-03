import Link from "next/link";

export const metadata = {
  title: "Privacy Policy — QuanTM.ai",
  description: "Privacy policy for QuanTM.ai and the Blundin Space RIFT competition.",
};

export default function PrivacyPage() {
  return (
    <>
      <section className="pt-32 pb-16">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <Link
            href="/"
            className="text-[11px] tracking-[0.2em] uppercase text-foreground-dim hover:text-accent transition-colors mb-8 inline-block"
          >
            &larr; Home
          </Link>
          <h1 className="text-[clamp(2.2rem,4.5vw,4rem)] font-light leading-[1.08] tracking-[-0.02em] max-w-3xl">
            Privacy Policy
          </h1>
          <p className="text-foreground-dim text-sm mt-4">
            Last updated: March 26, 2026
          </p>
        </div>
      </section>

      <section className="border-t border-divider">
        <div className="max-w-[800px] mx-auto px-6 md:px-12 py-16 md:py-24">
          <div className="prose-dark space-y-8 text-foreground-muted text-[17px] leading-[1.85]">
            <h2 className="text-foreground text-2xl font-light mt-0 mb-4">
              Overview
            </h2>
            <p>
              QuanTM.ai operates the Blundin Space RIFT competition and the
              associated website at quantm.ai. This policy describes what data we
              collect and how we use it.
            </p>

            <h2 className="text-foreground text-2xl font-light mt-12 mb-4">
              What We Collect
            </h2>
            <p>
              <strong className="text-foreground">Competition submissions:</strong>{" "}
              When you submit a model to the RIFT competition via email, we receive
              your email address, model weights, inference script, audit report, and
              architecture description. These are used solely for scoring,
              verification, and leaderboard publication.
            </p>
            <p>
              <strong className="text-foreground">Website analytics:</strong>{" "}
              We use Vercel Analytics to collect anonymous, aggregated usage data
              (page views, browser type, country). No personally identifiable
              information is collected through analytics.
            </p>
            <p>
              <strong className="text-foreground">Contact emails:</strong>{" "}
              If you email us at rift@quantm.ai, we retain your email address and
              message content for the purpose of responding to your inquiry.
            </p>

            <h2 className="text-foreground text-2xl font-light mt-12 mb-4">
              What We Do Not Collect
            </h2>
            <p>
              We do not use cookies for tracking. We do not sell or share personal
              data with third parties. We do not run advertising. We do not collect
              payment information.
            </p>

            <h2 className="text-foreground text-2xl font-light mt-12 mb-4">
              Leaderboard Publication
            </h2>
            <p>
              By submitting to the RIFT competition, you consent to having your
              team name, model name, parameter count, and RIFT scores published on
              the public leaderboard. Model weights and inference scripts may be
              shared publicly if you opt into open-source publication.
            </p>

            <h2 className="text-foreground text-2xl font-light mt-12 mb-4">
              Data Retention
            </h2>
            <p>
              Submission data is retained for the duration of the competition and
              leaderboard operation. You may request deletion of your submission
              data at any time by emailing rift@quantm.ai.
            </p>

            <h2 className="text-foreground text-2xl font-light mt-12 mb-4">
              Contact
            </h2>
            <p>
              For privacy-related questions, contact us at{" "}
              <a
                href="mailto:rift@quantm.ai"
                className="text-accent hover:underline"
              >
                rift@quantm.ai
              </a>
              .
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
