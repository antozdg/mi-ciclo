"use client";

import { CycleStatus, Phase, getPhaseForDay } from "@/lib/cycle";
import { useLang } from "@/lib/lang-context";
import { T } from "@/lib/translations";

const PHASE_COLORS: Record<Phase, string> = {
  menstrual: "#C97EFF",
  folicular: "#FFB3EC",
  ovulatoria: "#FF1FA3",
  lutea: "#FF6A00",
};

interface Props {
  status: CycleStatus;
}

export default function CycleMiniMap({ status }: Props) {
  const { lang } = useLang();
  const t = T[lang].minimap;
  const days = Array.from({ length: status.cycleLength }, (_, i) => i + 1);

  return (
    <div
      className="rounded-2xl p-5 flex flex-col gap-4"
      style={{ backgroundColor: "#2A0638" }}
    >
      <div className="flex items-center justify-between">
        <h2
          className="text-sm font-bold"
          style={{ fontFamily: "var(--font-syne)", color: "#FFFFFF" }}
        >
          {t.title}
        </h2>
        <span
          className="text-xs"
          style={{ fontFamily: "var(--font-dm-sans)", color: "rgba(255,255,255,0.4)" }}
        >
          {status.cycleLength} {t.days}
        </span>
      </div>

      {/* Day dots */}
      <div className="flex flex-wrap gap-1.5">
        {days.map((day) => {
          const phase = getPhaseForDay(day, status.cycleLength, status.periodLength);
          const isToday = day === status.dayInCycle;
          const isFertile = day >= status.fertileWindowStart && day <= status.fertileWindowEnd;
          const isPast = day < status.dayInCycle;

          return (
            <div
              key={day}
              className="relative flex items-center justify-center"
              style={{ width: 22, height: 22 }}
              title={`${lang === "es" ? "Día" : "Day"} ${day}`}
            >
              {isToday && (
                <div
                  className="absolute rounded-full"
                  style={{ width: 22, height: 22, backgroundColor: "white", opacity: 0.25 }}
                />
              )}
              <div
                className="rounded-full transition-all duration-200"
                style={{
                  width: isToday ? 18 : 13,
                  height: isToday ? 18 : 13,
                  backgroundColor: isPast || isToday ? PHASE_COLORS[phase] : `${PHASE_COLORS[phase]}28`,
                  border: isToday ? `2.5px solid white` : isFertile ? `1px solid ${PHASE_COLORS[phase]}70` : "none",
                  boxShadow: isToday ? `0 0 8px ${PHASE_COLORS[phase]}CC` : "none",
                }}
              />
            </div>
          );
        })}
      </div>

      {/* Legend */}
      <div className="flex flex-wrap gap-3">
        {(["menstrual", "folicular", "ovulatoria", "lutea"] as Phase[]).map((phase) => (
          <div key={phase} className="flex items-center gap-1.5">
            <div className="rounded-full" style={{ width: 8, height: 8, backgroundColor: PHASE_COLORS[phase] }} />
            <span className="text-xs" style={{ fontFamily: "var(--font-dm-sans)", color: "rgba(255,255,255,0.45)" }}>
              {t.legend[phase]}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
