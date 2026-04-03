import Link from "next/link";

export const metadata = {
  title: "Terms of Service — QuanTM.ai",
  description: "Terms of service for QuanTM.ai and the Blundin Space RIFT competition.",
};

export default function TermsPage() {
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
            Terms of Service
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
              Competition Rules
            </h2>
            <p>
              The Blundin Space RIFT competition is operated by QuanTM.ai. By
              submitting a model, you agree to the following terms.
            </p>

            <h2 className="text-foreground text-2xl font-light mt-12 mb-4">
              Eligibility
            </h2>
            <p>
              The competition is open to individuals and teams worldwide. There
              are no restrictions on team size, affiliation, or geography.
              Participants must be 18 years of age or older, or have the consent
              of a legal guardian.
            </p>

            <h2 className="text-foreground text-2xl font-light mt-12 mb-4">
              Submissions
            </h2>
            <p>
              All submissions must be original work or properly licensed. You
              retain ownership of your model weights, inference scripts, and
              architecture descriptions. By submitting, you grant QuanTM.ai
              permission to:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                Run the official <code className="font-mono text-accent text-[15px]">rift-audit</code> tool
                against your model for independent verification
              </li>
              <li>
                Publish your team name, model name, parameter count, and RIFT
                scores on the public leaderboard
              </li>
              <li>
                Reference your submission in competition announcements and
                research publications
              </li>
            </ul>

            <h2 className="text-foreground text-2xl font-light mt-12 mb-4">
              Scoring and Verification
            </h2>
            <p>
              All submissions are audited using the official{" "}
              <code className="font-mono text-accent text-[15px]">rift-audit</code> tool.
              Submissions must pass both cryptographic signature verification and
              independent re-audit. QuanTM.ai reserves the right to disqualify
              submissions that cannot be independently verified.
            </p>
            <p>
              RIFT scores are computed using the published scoring formula and TFE
              conversion table at the time of submission. Table version updates do
              not retroactively change existing scores.
            </p>

            <h2 className="text-foreground text-2xl font-light mt-12 mb-4">
              Intellectual Property
            </h2>
            <p>
              Participants retain full ownership of their submissions. QuanTM.ai
              does not claim any rights to submitted model weights, code, or
              documentation beyond the limited permissions described above.
            </p>
            <p>
              The TFE conversion table, RIFT scoring formula, and{" "}
              <code className="font-mono text-accent text-[15px]">rift-audit</code> tool
              are released under the MIT license.
            </p>

            <h2 className="text-foreground text-2xl font-light mt-12 mb-4">
              Leaderboard
            </h2>
            <p>
              Leaderboards are permanent and cumulative. Entries are not removed
              unless a submission is found to be fraudulent or in violation of
              these terms. QuanTM.ai reserves the right to update leaderboard
              categories and add new TFE table versions over time.
            </p>

            <h2 className="text-foreground text-2xl font-light mt-12 mb-4">
              Limitation of Liability
            </h2>
            <p>
              QuanTM.ai provides the competition platform, audit tool, and
              leaderboard on an &ldquo;as is&rdquo; basis. We are not liable for
              any damages arising from participation in the competition, use of
              the audit tool, or reliance on published scores.
            </p>

            <h2 className="text-foreground text-2xl font-light mt-12 mb-4">
              Modifications
            </h2>
            <p>
              QuanTM.ai may update these terms at any time. Continued
              participation in the competition after changes constitutes acceptance
              of the updated terms. Material changes will be announced on the blog.
            </p>

            <h2 className="text-foreground text-2xl font-light mt-12 mb-4">
              Contact
            </h2>
            <p>
              Questions about these terms should be directed to{" "}
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
