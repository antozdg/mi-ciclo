"use client";

import { useLang } from "@/lib/lang-context";
import { T } from "@/lib/translations";

const PHASE_STYLES = [
  { bg: "#2A0638", tagColor: "#C97EFF", tagBg: "rgba(201, 126, 255, 0.15)", textColor: "#C97EFF", bodyColor: "#FFB3EC", accent: "#C97EFF" },
  { bg: "#5E0E75", tagColor: "#FFB3EC", tagBg: "rgba(255, 179, 236, 0.15)", textColor: "#FFFFFF", bodyColor: "#FFB3EC", accent: "#FFB3EC" },
  { bg: "#FF1FA3", tagColor: "#FFE94D", tagBg: "rgba(255, 233, 77, 0.2)", textColor: "#FFFFFF", bodyColor: "rgba(255,255,255,0.85)", accent: "#FFE94D" },
  { bg: "#FF6A00", tagColor: "#FFE94D", tagBg: "rgba(255, 233, 77, 0.2)", textColor: "#FFFFFF", bodyColor: "rgba(255,255,255,0.85)", accent: "#FFE94D" },
];

const NUMBERS = ["01", "02", "03", "04"];

export default function Fases() {
  const { lang } = useLang();
  const t = T[lang].fases;

  return (
    <section
      id="fases"
      className="px-6 lg:px-8 py-20 lg:py-28"
      style={{ backgroundColor: "#3D0845" }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 lg:mb-16">
          <p
            className="text-xs font-semibold uppercase tracking-widest mb-4"
            style={{ fontFamily: "var(--font-dm-sans)", color: "rgba(255,255,255,0.4)" }}
          >
            {t.eyebrow}
          </p>
          <h2
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight"
            style={{ fontFamily: "var(--font-syne)", fontWeight: 800, color: "#FFFFFF" }}
          >
            {t.headline1}{" "}
            <span style={{ color: "#C97EFF" }}>{t.headlineAccent}</span>
            <br className="hidden sm:block" /> {t.headline2}
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {t.items.map((fase, i) => {
            const s = PHASE_STYLES[i];
            return (
              <div
                key={fase.nombre}
                className="relative flex flex-col gap-4 p-6 lg:p-8 rounded-2xl lg:rounded-3xl overflow-hidden"
                style={{ backgroundColor: s.bg }}
              >
                <span
                  className="text-6xl lg:text-7xl font-extrabold leading-none opacity-20 select-none absolute top-4 right-6"
                  style={{ fontFamily: "var(--font-syne)", fontWeight: 800, color: s.accent }}
                >
                  {NUMBERS[i]}
                </span>

                <div
                  className="inline-flex items-center self-start px-3 py-1.5 rounded-full text-xs font-semibold"
                  style={{ fontFamily: "var(--font-dm-sans)", color: s.tagColor, backgroundColor: s.tagBg, border: `1px solid ${s.tagColor}40` }}
                >
                  {fase.tag}
                </div>

                <div className="flex flex-col gap-2 mt-auto">
                  <p className="text-xs font-medium" style={{ fontFamily: "var(--font-dm-sans)", color: s.bodyColor, opacity: 0.6 }}>
                    {fase.dias}
                  </p>
                  <h3 className="text-xl lg:text-2xl font-bold" style={{ fontFamily: "var(--font-syne)", fontWeight: 800, color: s.textColor }}>
                    {fase.nombre}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ fontFamily: "var(--font-dm-sans)", color: s.bodyColor }}>
                    {fase.descripcion}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
