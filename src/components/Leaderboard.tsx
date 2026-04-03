"use client";

import { useState } from "react";
import data from "@/data/leaderboard.json";

type Category = "silicon" | "photonic" | "quantum" | "universal";

const categories: { key: Category; label: string }[] = [
  { key: "universal", label: "Universal" },
  { key: "silicon", label: "Silicon" },
  { key: "photonic", label: "Photonic" },
  { key: "quantum", label: "Quantum" },
];

function formatNum(n: number): string {
  if (n >= 1e12) return `${(n / 1e12).toFixed(1)}T`;
  if (n >= 1e9) return `${(n / 1e9).toFixed(1)}B`;
  if (n >= 1e6) return `${(n / 1e6).toFixed(1)}M`;
  return n.toLocaleString();
}

export default function Leaderboard() {
  const [active, setActive] = useState<Category>("universal");

  const sorted = [...data.entries].sort(
    (a, b) => b.riftScores[active] - a.riftScores[active]
  );

  return (
    <div>
      {/* Category selector */}
      <div className="flex gap-1 mb-12">
        {categories.map((cat) => (
          <button
            key={cat.key}
            onClick={() => setActive(cat.key)}
            className={`px-5 py-2.5 text-[12px] tracking-[0.1em] uppercase transition-all duration-400 ${
              active === cat.key
                ? "bg-accent text-white"
                : "bg-surface text-foreground-dim hover:text-foreground"
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead>
            <tr className="border-b border-divider">
              <th className="pb-4 text-[11px] tracking-[0.15em] uppercase text-foreground-dim font-normal w-12">
                #
              </th>
              <th className="pb-4 text-[11px] tracking-[0.15em] uppercase text-foreground-dim font-normal">
                Model
              </th>
              <th className="pb-4 text-[11px] tracking-[0.15em] uppercase text-foreground-dim font-normal">
                Team
              </th>
              <th className="pb-4 text-right text-[11px] tracking-[0.15em] uppercase text-foreground-dim font-normal">
                Params
              </th>
              <th className="pb-4 text-right text-[11px] tracking-[0.15em] uppercase text-foreground-dim font-normal">
                HellaSwag
              </th>
              <th className="pb-4 text-right text-[11px] tracking-[0.15em] uppercase text-foreground-dim font-normal">
                TFE/Token
              </th>
              <th className="pb-4 text-right text-[11px] tracking-[0.15em] uppercase text-accent font-normal">
                RIFT Score
              </th>
            </tr>
          </thead>
          <tbody>
            {sorted.map((entry, i) => {
              const tfeKey =
                active === "silicon"
                  ? "v1"
                  : active === "photonic"
                  ? "v2"
                  : active === "quantum"
                  ? "v3"
                  : null; // universal shows geometric mean
              return (
                <tr
                  key={entry.name}
                  className="border-b border-divider/50 group hover:bg-surface/50 transition-colors duration-300"
                >
                  <td className="py-5 font-mono text-foreground-dim text-sm">
                    {String(i + 1).padStart(2, "0")}
                  </td>
                  <td className="py-5 text-[15px] font-medium group-hover:text-accent transition-colors duration-300">
                    {entry.name}
                  </td>
                  <td className="py-5 text-sm text-foreground-dim">
                    {entry.team}
                  </td>
                  <td className="py-5 text-right font-mono text-sm text-foreground-dim">
                    {formatNum(entry.parameters)}
                  </td>
                  <td className="py-5 text-right font-mono text-sm text-foreground-muted">
                    {entry.hellaswag.toFixed(1)}%
                  </td>
                  <td className="py-5 text-right font-mono text-sm text-foreground-dim">
                    {tfeKey
                      ? formatNum(
                          entry.tfePerToken[
                            tfeKey as keyof typeof entry.tfePerToken
                          ]
                        )
                      : formatNum(
                          Math.round(
                            Math.pow(
                              entry.tfePerToken.v1 *
                                entry.tfePerToken.v2 *
                                entry.tfePerToken.v3,
                              1 / 3
                            )
                          )
                        )}
                  </td>
                  <td className="py-5 text-right font-mono text-xl text-accent font-medium">
                    {entry.riftScores[active].toFixed(2)}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {sorted.length === 0 && (
        <div className="text-center py-20">
          <p className="text-foreground-dim text-lg">No submissions yet.</p>
          <p className="text-foreground-dim/60 text-sm mt-2">Be the first.</p>
        </div>
      )}
    </div>
  );
}
