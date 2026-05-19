export type Phase = "menstrual" | "folicular" | "ovulatoria" | "lutea";

export type ActivityType =
  | "running"
  | "gym"
  | "yoga"
  | "pilates"
  | "crossfit"
  | "natacion"
  | "caminata"
  | "ciclismo";

export type DietBase = "omnivora" | "vegetariana" | "vegana";
export type Goal = "seguimiento" | "embarazo" | "anticoncepcion";

export interface UserPreferences {
  activities: ActivityType[];
  dietBase: DietBase;
  sinGluten: boolean;
  goal: Goal;
}

export interface CycleConfig {
  lastPeriodStart: string; // ISO date string YYYY-MM-DD
  cycleLength: number;
  periodLength: number;
  preferences?: UserPreferences;
}

export interface CycleStatus {
  dayInCycle: number;
  phase: Phase;
  phaseDay: number;       // day within the current phase
  daysUntilNextPeriod: number;
  daysUntilOvulation: number | null;
  isInFertileWindow: boolean;
  fertileWindowStart: number; // day in cycle
  fertileWindowEnd: number;   // day in cycle
  ovulationDay: number;       // day in cycle
  nextPeriodDate: Date;
  cycleLength: number;
  periodLength: number;
}

export function getPhaseForDay(day: number, cycleLength: number, periodLength: number): Phase {
  const ovulationDay = cycleLength - 14;
  if (day <= periodLength) return "menstrual";
  if (day <= ovulationDay - 2) return "folicular";
  if (day <= ovulationDay + 1) return "ovulatoria";
  return "lutea";
}

export function getCycleStatus(config: CycleConfig): CycleStatus {
  const { lastPeriodStart, cycleLength, periodLength } = config;
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  // Parse as local date to avoid UTC offset shifting the day
  const [y, m, d] = lastPeriodStart.split("-").map(Number);
  const startDate = new Date(y, m - 1, d);

  const diffMs = today.getTime() - startDate.getTime();
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

  // Normalize to current cycle (handle if multiple cycles have passed)
  const dayInCycle = (diffDays % cycleLength) + 1;
  const cyclesElapsed = Math.floor(diffDays / cycleLength);

  const phase = getPhaseForDay(dayInCycle, cycleLength, periodLength);

  const ovulationDay = cycleLength - 14;
  const fertileWindowStart = ovulationDay - 5;
  const fertileWindowEnd = ovulationDay + 1;

  const daysUntilNextPeriod = cycleLength - dayInCycle + 1;

  const daysUntilOvulation =
    dayInCycle < ovulationDay ? ovulationDay - dayInCycle : null;

  const isInFertileWindow =
    dayInCycle >= fertileWindowStart && dayInCycle <= fertileWindowEnd;

  const nextPeriodDate = new Date(startDate);
  nextPeriodDate.setDate(
    startDate.getDate() + (cyclesElapsed + 1) * cycleLength
  );

  // Calculate phaseDay (how many days into the current phase)
  let phaseStartDay: number;
  switch (phase) {
    case "menstrual":
      phaseStartDay = 1;
      break;
    case "folicular":
      phaseStartDay = periodLength + 1;
      break;
    case "ovulatoria":
      phaseStartDay = ovulationDay - 1;
      break;
    case "lutea":
      phaseStartDay = ovulationDay + 2;
      break;
  }
  const phaseDay = dayInCycle - phaseStartDay + 1;

  return {
    dayInCycle,
    phase,
    phaseDay,
    daysUntilNextPeriod,
    daysUntilOvulation,
    isInFertileWindow,
    fertileWindowStart,
    fertileWindowEnd,
    ovulationDay,
    nextPeriodDate,
    cycleLength,
    periodLength,
  };
}

export const PHASE_META: Record<
  Phase,
  { label: string; tag: string; color: string; bg: string; textColor: string; description: string }
> = {
  menstrual: {
    label: "Menstrual",
    tag: "Introspección",
    color: "#C97EFF",
    bg: "#2A0638",
    textColor: "#C97EFF",
    description:
      "Tu cuerpo pide descanso. Es el momento de hacia adentro: reflexionar, priorizar, soltar lo que ya no sirve.",
  },
  folicular: {
    label: "Folicular",
    tag: "Energía nueva",
    color: "#FFB3EC",
    bg: "#5E0E75",
    textColor: "#FFFFFF",
    description:
      "Los estrógenos suben y con ellos tu energía, tu claridad mental y tus ganas de conectar con el mundo.",
  },
  ovulatoria: {
    label: "Ovulatoria",
    tag: "Pico de poder",
    color: "#FFE94D",
    bg: "#FF1FA3",
    textColor: "#FFFFFF",
    description:
      "Tu punto más alto del mes. Comunicación, carisma y rendimiento en su pico. El mundo te ve — aprovechalo.",
  },
  lutea: {
    label: "Lútea",
    tag: "Calma activa",
    color: "#FFE94D",
    bg: "#FF6A00",
    textColor: "#FFFFFF",
    description:
      "La progesterona toma el mando. Atención al detalle, trabajo profundo, autocuidado. Tu fase más productiva a solas.",
  },
};
