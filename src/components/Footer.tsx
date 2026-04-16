import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { href: "/competition", label: "Competition" },
  { href: "/leaderboard", label: "Leaderboard" },
  { href: "/submit", label: "Submit" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About" },
];

export default function Footer() {
  return (
    <footer className="border-t border-divider">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-16 md:py-24">
        <div className="grid md:grid-cols-3 gap-12 md:gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/images/quantm-logo.jpg"
                alt="QuanTM logo"
                width={40}
                height={40}
                className="h-10 w-10 object-contain rounded-sm"
              />
              <div className="text-xl tracking-[0.15em] font-light uppercase">
                <span className="text-accent font-normal">Quan</span>
                <span className="text-foreground">TM</span>
                <span className="text-foreground-dim">.ai</span>
              </div>
            </div>
            <p className="text-foreground-dim text-sm leading-relaxed max-w-xs">
              The race for speed is over.<br />
              The race for space has begun.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <div className="text-[11px] tracking-[0.2em] uppercase text-foreground-dim mb-6">
              Navigation
            </div>
            <div className="flex flex-col gap-3">
              {navLinks.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="text-sm text-foreground-muted hover:text-accent transition-colors duration-400"
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <div className="text-[11px] tracking-[0.2em] uppercase text-foreground-dim mb-6">
              Contact
            </div>
            <a
              href="mailto:rift@quantm.ai"
              className="text-sm text-foreground-muted hover:text-accent transition-colors duration-400"
            >
              rift@quantm.ai
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-divider flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[11px] tracking-[0.1em] text-foreground-dim">
            &copy; {new Date().getFullYear()} QuanTM.ai. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy" className="text-[11px] tracking-[0.1em] text-foreground-dim hover:text-accent transition-colors">
              Privacy
            </Link>
            <Link href="/terms" className="text-[11px] tracking-[0.1em] text-foreground-dim hover:text-accent transition-colors">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
