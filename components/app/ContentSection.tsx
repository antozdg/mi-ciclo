"use client";

import { useState } from "react";
import { Phase } from "@/lib/cycle";
import { Category, CATEGORY_META, PHASE_CONTENT } from "@/lib/content";

interface Props {
  phase: Phase;
}

const CATEGORIES: Category[] = [
  "hormonas",
  "nutricion",
  "ejercicio",
  "emociones",
  "fertilidad",
  "suplementos",
];

export default function ContentSection({ phase }: Props) {
  const [active, setActive] = useState<Category>("hormonas");
  const content = PHASE_CONTENT[phase][active];
  const meta = CATEGORY_META[active];

  return (
    <div className="flex flex-col gap-4">
      {/* Category tabs — 3x2 grid so all 6 are always visible */}
      <div className="grid grid-cols-3 gap-2">
        {CATEGORIES.map((cat) => {
          const m = CATEGORY_META[cat];
          const isActive = cat === active;
          return (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className="flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-200"
              style={{
                fontFamily: "var(--font-dm-sans)",
                backgroundColor: isActive ? m.accent : "rgba(255,255,255,0.06)",
                color: isActive ? "#FFFFFF" : "rgba(255,255,255,0.5)",
                border: isActive ? "none" : "1px solid rgba(255,255,255,0.1)",
              }}
            >
              <span>{m.icon}</span>
              <span>{m.label}</span>
            </button>
          );
        })}
      </div>

      {/* Content card */}
      <div
        className="rounded-2xl p-6 lg:p-8 flex flex-col gap-5"
        style={{ backgroundColor: "#2A0638" }}
      >
        {/* Header */}
        <div className="flex items-start gap-3">
          <div
            className="w-10 h-10 rounded-xl flex items-center justify-center text-lg flex-shrink-0"
            style={{ backgroundColor: `${meta.accent}20` }}
          >
            {meta.icon}
          </div>
          <div>
            <p
              className="text-xs font-semibold uppercase tracking-widest mb-1"
              style={{
                fontFamily: "var(--font-dm-sans)",
                color: meta.accent,
              }}
            >
              {meta.label}
            </p>
            <h3
              className="text-lg lg:text-xl font-bold leading-snug"
              style={{
                fontFamily: "var(--font-syne)",
                fontWeight: 800,
                color: "#FFFFFF",
              }}
            >
              {content.title}
            </h3>
          </div>
        </div>

        {/* Body */}
        <p
          className="text-sm lg:text-base leading-relaxed"
          style={{
            fontFamily: "var(--font-dm-sans)",
            color: "rgba(255,255,255,0.7)",
          }}
        >
          {content.body}
        </p>

        {/* Highlight callout */}
        {content.highlight && (
          <div
            className="rounded-xl p-4 border-l-4"
            style={{
              backgroundColor: `${meta.accent}12`,
              borderColor: meta.accent,
            }}
          >
            <p
              className="text-sm leading-relaxed font-medium"
              style={{
                fontFamily: "var(--font-dm-sans)",
                color: "rgba(255,255,255,0.85)",
              }}
            >
              {content.highlight}
            </p>
          </div>
        )}

        {/* Tips */}
        <div className="flex flex-col gap-2">
          <p
            className="text-xs font-semibold uppercase tracking-widest mb-1"
            style={{
              fontFamily: "var(--font-dm-sans)",
              color: "rgba(255,255,255,0.35)",
            }}
          >
            Claves para esta fase
          </p>
          {content.tips.map((tip, i) => (
            <div key={i} className="flex items-start gap-3">
              <div
                className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0"
                style={{ backgroundColor: meta.accent }}
              />
              <p
                className="text-sm leading-relaxed"
                style={{
                  fontFamily: "var(--font-dm-sans)",
                  color: "rgba(255,255,255,0.65)",
                }}
              >
                {tip}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
