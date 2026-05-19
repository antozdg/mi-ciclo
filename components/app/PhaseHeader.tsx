"use client";

import { CycleStatus, PHASE_META } from "@/lib/cycle";
import { useLang } from "@/lib/lang-context";
import { T } from "@/lib/translations";

interface Props {
  status: CycleStatus;
}

export default function PhaseHeader({ status }: Props) {
  const meta = PHASE_META[status.phase];
  const { lang } = useLang();
  const t = T[lang].phase;
  const phaseMeta = t.meta[status.phase];
  const progress = (status.dayInCycle / status.cycleLength) * 100;

  return (
    <div
      className="rounded-2xl lg:rounded-3xl p-6 lg:p-8 flex flex-col gap-5"
      style={{ backgroundColor: meta.bg }}
    >
      {/* Top row: tag + day */}
      <div className="flex items-center justify-between">
        <span
          className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-semibold"
          style={{
            fontFamily: "var(--font-dm-sans)",
            backgroundColor: `${meta.color}25`,
            color: meta.color,
            border: `1px solid ${meta.color}40`,
          }}
        >
          {phaseMeta.tag}
        </span>
        <span
          className="text-sm font-medium"
          style={{ fontFamily: "var(--font-dm-sans)", color: "rgba(255,255,255,0.5)" }}
        >
          {t.day} {status.dayInCycle} {t.of} {status.cycleLength}
        </span>
      </div>

      {/* Phase name */}
      <div>
        <p
          className="text-sm font-medium mb-1"
          style={{ fontFamily: "var(--font-dm-sans)", color: "rgba(255,255,255,0.5)" }}
        >
          {t.current}
        </p>
        <h1
          className="text-4xl lg:text-5xl font-extrabold"
          style={{ fontFamily: "var(--font-syne)", fontWeight: 800, color: meta.textColor }}
        >
          {phaseMeta.label}
        </h1>
      </div>

      {/* Description */}
      <p
        className="text-sm lg:text-base leading-relaxed"
        style={{ fontFamily: "var(--font-dm-sans)", color: "rgba(255,255,255,0.75)" }}
      >
        {phaseMeta.description}
      </p>

      {/* Progress bar */}
      <div className="flex flex-col gap-2">
        <div className="h-1.5 rounded-full overflow-hidden" style={{ backgroundColor: "rgba(255,255,255,0.15)" }}>
          <div
            className="h-full rounded-full transition-all duration-500"
            style={{ width: `${progress}%`, backgroundColor: meta.color }}
          />
        </div>
        <div className="flex justify-between">
          <span className="text-xs" style={{ fontFamily: "var(--font-dm-sans)", color: "rgba(255,255,255,0.4)" }}>
            {t.dayLabel} 1
          </span>
          <span className="text-xs" style={{ fontFamily: "var(--font-dm-sans)", color: "rgba(255,255,255,0.4)" }}>
            {t.dayLabel} {status.cycleLength}
          </span>
        </div>
      </div>

      {/* Stats row */}
      <div className="grid grid-cols-2 gap-3 mt-1">
        <div className="rounded-xl p-4 flex flex-col gap-1" style={{ backgroundColor: "rgba(255,255,255,0.08)" }}>
          <span className="text-2xl font-extrabold" style={{ fontFamily: "var(--font-syne)", fontWeight: 800, color: meta.color }}>
            {status.daysUntilNextPeriod}
          </span>
          <span className="text-xs" style={{ fontFamily: "var(--font-dm-sans)", color: "rgba(255,255,255,0.5)" }}>
            {t.daysUntilPeriod}
          </span>
        </div>

        <div className="rounded-xl p-4 flex flex-col gap-1" style={{ backgroundColor: "rgba(255,255,255,0.08)" }}>
          {status.isInFertileWindow ? (
            <>
              <span className="text-2xl font-extrabold" style={{ fontFamily: "var(--font-syne)", fontWeight: 800, color: "#FFE94D" }}>
                {t.todayLabel}
              </span>
              <span className="text-xs" style={{ fontFamily: "var(--font-dm-sans)", color: "rgba(255,255,255,0.5)" }}>
                {t.inFertileWindow}
              </span>
            </>
          ) : status.daysUntilOvulation !== null ? (
            <>
              <span className="text-2xl font-extrabold" style={{ fontFamily: "var(--font-syne)", fontWeight: 800, color: meta.color }}>
                {status.daysUntilOvulation}
              </span>
              <span className="text-xs" style={{ fontFamily: "var(--font-dm-sans)", color: "rgba(255,255,255,0.5)" }}>
                {t.daysUntilOvulation}
              </span>
            </>
          ) : (
            <>
              <span className="text-2xl font-extrabold" style={{ fontFamily: "var(--font-syne)", fontWeight: 800, color: meta.color }}>
                {t.phaseDayLabel} {status.phaseDay}
              </span>
              <span className="text-xs" style={{ fontFamily: "var(--font-dm-sans)", color: "rgba(255,255,255,0.5)" }}>
                {t.phaseDay}
              </span>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
