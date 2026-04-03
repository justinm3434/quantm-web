"use client";

import { useState } from "react";
import tfeData from "@/data/tfe-tables.json";

type TableVersion = "v1" | "v2" | "v3";

const versionMeta: Record<TableVersion, { label: string; sub: string }> = {
  v1: { label: "v1.0", sub: "CMOS 7nm" },
  v2: { label: "v2.0", sub: "Photonic" },
  v3: { label: "v3.0", sub: "Quantum" },
};

export default function TFETable() {
  const [activeCol, setActiveCol] = useState<TableVersion | null>(null);

  return (
    <div className="overflow-x-auto -mx-1">
      <table className="w-full text-left">
        <thead>
          <tr>
            <th className="pb-4 pr-6 text-[11px] tracking-[0.15em] uppercase text-foreground-dim font-normal">
              Operation
            </th>
            {(["v1", "v2", "v3"] as TableVersion[]).map((v) => (
              <th
                key={v}
                className="pb-4 pl-6 text-right cursor-pointer group"
                onMouseEnter={() => setActiveCol(v)}
                onMouseLeave={() => setActiveCol(null)}
              >
                <div
                  className={`text-[11px] tracking-[0.15em] uppercase font-normal transition-colors duration-300 ${
                    activeCol === v ? "text-accent" : "text-foreground-dim"
                  }`}
                >
                  {versionMeta[v].label}
                </div>
                <div className="text-[10px] text-foreground-dim/60 font-normal mt-0.5">
                  {versionMeta[v].sub}
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {tfeData.operations.map((op, i) => (
            <tr key={i} className="border-t border-divider/50 group">
              <td className="py-3.5 pr-6 text-[13px] text-foreground-muted group-hover:text-foreground transition-colors duration-300">
                {op.name}
              </td>
              {(["v1", "v2", "v3"] as TableVersion[]).map((v) => {
                const val = op[v];
                const isInherit = val === "inherit";
                return (
                  <td
                    key={v}
                    className={`py-3.5 pl-6 text-right font-mono text-[13px] tabular-nums transition-all duration-300 ${
                      isInherit
                        ? "text-foreground-dim/50 italic text-[11px]"
                        : activeCol === v
                          ? "text-accent font-medium"
                          : "text-foreground-dim group-hover:text-foreground-muted"
                    }`}
                    title={
                      isInherit
                        ? "Inherits TFE cost from the underlying MAC operation dtype (e.g. FP16 MAC, INT8 MAC)"
                        : undefined
                    }
                  >
                    {typeof val === "number"
                      ? val.toLocaleString()
                      : isInherit
                        ? "inherit\u2009*"
                        : val}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
      <p className="mt-4 text-foreground-dim/60 text-[11px]">
        * Attention QK^T inherits the TFE cost of the underlying MAC operation for
        the model&apos;s data type (e.g. a FP16 model uses FP16 MAC cost per element).
      </p>
    </div>
  );
}
