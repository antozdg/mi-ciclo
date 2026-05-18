"use client";

import { CycleStatus, Phase, getPhaseForDay } from "@/lib/cycle";

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
          Tu ciclo completo
        </h2>
        <span
          className="text-xs"
          style={{
            fontFamily: "var(--font-dm-sans)",
            color: "rgba(255,255,255,0.4)",
          }}
        >
          {status.cycleLength} días
        </span>
      </div>

      {/* Day dots */}
      <div className="flex flex-wrap gap-1.5">
        {days.map((day) => {
          const phase = getPhaseForDay(
            day,
            status.cycleLength,
            status.periodLength
          );
          const isToday = day === status.dayInCycle;
          const isFertile =
            day >= status.fertileWindowStart &&
            day <= status.fertileWindowEnd;
          const isPast = day < status.dayInCycle;

          return (
            <div
              key={day}
              className="relative flex items-center justify-center"
              style={{ width: 20, height: 20 }}
              title={`Día ${day}`}
            >
              <div
                className="rounded-full transition-all duration-200"
                style={{
                  width: isToday ? 20 : 14,
                  height: isToday ? 20 : 14,
                  backgroundColor: isPast || isToday
                    ? PHASE_COLORS[phase]
                    : `${PHASE_COLORS[phase]}30`,
                  border: isToday
                    ? `2px solid white`
                    : isFertile
                    ? `1px solid ${PHASE_COLORS[phase]}80`
                    : "none",
                }}
              />
            </div>
          );
        })}
      </div>

      {/* Legend */}
      <div className="flex flex-wrap gap-3">
        {(
          [
            ["menstrual", "Menstrual"],
            ["folicular", "Folicular"],
            ["ovulatoria", "Ovulatoria"],
            ["lutea", "Lútea"],
          ] as [Phase, string][]
        ).map(([phase, label]) => (
          <div key={phase} className="flex items-center gap-1.5">
            <div
              className="rounded-full"
              style={{
                width: 8,
                height: 8,
                backgroundColor: PHASE_COLORS[phase],
              }}
            />
            <span
              className="text-xs"
              style={{
                fontFamily: "var(--font-dm-sans)",
                color: "rgba(255,255,255,0.45)",
              }}
            >
              {label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
