"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { saveConfig } from "@/lib/storage";
import { ActivityType, DietBase, Goal } from "@/lib/cycle";

type Step = 1 | 2 | 3 | 4 | 5;

const ACTIVITIES: { id: ActivityType; label: string; icon: string }[] = [
  { id: "running", label: "Running", icon: "🏃" },
  { id: "gym", label: "Gym / fuerza", icon: "💪" },
  { id: "yoga", label: "Yoga", icon: "🧘" },
  { id: "pilates", label: "Pilates", icon: "🌀" },
  { id: "crossfit", label: "Crossfit", icon: "⚡" },
  { id: "natacion", label: "Natación", icon: "🏊" },
  { id: "caminata", label: "Caminata", icon: "🚶" },
  { id: "ciclismo", label: "Ciclismo", icon: "🚴" },
];

const DIETS: { id: DietBase; label: string; desc: string }[] = [
  { id: "omnivora", label: "Omnívora", desc: "Como de todo" },
  { id: "vegetariana", label: "Vegetariana", desc: "Sin carne ni pescado" },
  { id: "vegana", label: "Vegana", desc: "Sin ningún producto animal" },
];

const GOALS: { id: Goal; label: string; icon: string }[] = [
  { id: "seguimiento", label: "Seguimiento general", icon: "📊" },
  { id: "embarazo", label: "Busco quedar embarazada", icon: "✨" },
  { id: "anticoncepcion", label: "Evitar embarazo", icon: "🛡" },
];

const TOTAL_STEPS = 5;

export default function OnboardingPage() {
  const router = useRouter();
  const [step, setStep] = useState<Step>(1);

  // Cycle data
  const [lastPeriod, setLastPeriod] = useState("");
  const [cycleLength, setCycleLength] = useState(28);
  const [periodLength, setPeriodLength] = useState(5);

  // Preferences
  const [activities, setActivities] = useState<ActivityType[]>([]);
  const [dietBase, setDietBase] = useState<DietBase>("omnivora");
  const [sinGluten, setSinGluten] = useState(false);
  const [goal, setGoal] = useState<Goal>("seguimiento");

  const today = new Date().toISOString().split("T")[0];
  const progress = (step / TOTAL_STEPS) * 100;

  function toggleActivity(id: ActivityType) {
    setActivities((prev) =>
      prev.includes(id) ? prev.filter((a) => a !== id) : [...prev, id]
    );
  }

  function handleFinish() {
    saveConfig({
      lastPeriodStart: lastPeriod,
      cycleLength,
      periodLength,
      preferences: { activities, dietBase, sinGluten, goal },
    });
    router.push("/dashboard");
  }

  return (
    <div
      className="min-h-screen flex flex-col"
      style={{ backgroundColor: "#3D0845" }}
    >
      {/* Logo bar */}
      <div className="px-6 py-5 flex items-center justify-between">
        <span
          className="text-xl"
          style={{ fontFamily: "var(--font-syne)", fontWeight: 800 }}
        >
          <span className="text-white">mi</span>
          <span style={{ color: "#FF6A00" }}>.</span>
          <span style={{ color: "#FF1FA3" }}>ciclo</span>
        </span>
        <span
          className="text-xs"
          style={{ fontFamily: "var(--font-dm-sans)", color: "rgba(255,255,255,0.35)" }}
        >
          {step} de {TOTAL_STEPS}
        </span>
      </div>

      {/* Progress bar */}
      <div className="px-6">
        <div
          className="h-1 rounded-full overflow-hidden"
          style={{ backgroundColor: "rgba(255,255,255,0.1)" }}
        >
          <div
            className="h-full rounded-full transition-all duration-500"
            style={{
              width: `${progress}%`,
              background: "linear-gradient(135deg, #FF1FA3, #FF6A00)",
            }}
          />
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col items-center justify-center px-6 py-10">
        <div className="w-full max-w-sm flex flex-col gap-7">

          {/* ── STEP 1: Último período ── */}
          {step === 1 && (
            <>
              <div className="flex flex-col gap-2">
                <p
                  className="text-xs font-semibold uppercase tracking-widest"
                  style={{ fontFamily: "var(--font-dm-sans)", color: "#FF6A00" }}
                >
                  Tu ciclo
                </p>
                <h1
                  className="text-3xl font-extrabold leading-tight"
                  style={{ fontFamily: "var(--font-syne)", fontWeight: 800, color: "#FFFFFF" }}
                >
                  ¿Cuándo empezó tu{" "}
                  <span style={{ color: "#FF1FA3" }}>último período</span>?
                </h1>
                <p
                  className="text-sm leading-relaxed"
                  style={{ fontFamily: "var(--font-dm-sans)", color: "rgba(255,255,255,0.5)" }}
                >
                  El primer día de sangrado, no de manchado previo.
                </p>
              </div>

              <input
                type="date"
                value={lastPeriod}
                onChange={(e) => setLastPeriod(e.target.value)}
                max={today}
                className="w-full px-4 py-4 rounded-xl text-base outline-none"
                style={{
                  fontFamily: "var(--font-dm-sans)",
                  backgroundColor: "#2A0638",
                  color: lastPeriod ? "#FFFFFF" : "rgba(255,255,255,0.3)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  colorScheme: "dark",
                }}
              />

              <button
                onClick={() => lastPeriod && setStep(2)}
                disabled={!lastPeriod}
                className="w-full py-4 rounded-full text-base font-semibold text-white transition-all duration-200"
                style={{
                  fontFamily: "var(--font-dm-sans)",
                  backgroundColor: lastPeriod ? "#FF1FA3" : "rgba(255,31,163,0.3)",
                  cursor: lastPeriod ? "pointer" : "not-allowed",
                }}
              >
                Continuar →
              </button>
            </>
          )}

          {/* ── STEP 2: Duración del ciclo ── */}
          {step === 2 && (
            <>
              <div className="flex flex-col gap-2">
                <p
                  className="text-xs font-semibold uppercase tracking-widest"
                  style={{ fontFamily: "var(--font-dm-sans)", color: "#FF6A00" }}
                >
                  Tu ciclo
                </p>
                <h1
                  className="text-3xl font-extrabold leading-tight"
                  style={{ fontFamily: "var(--font-syne)", fontWeight: 800, color: "#FFFFFF" }}
                >
                  ¿Cuántos días dura tu{" "}
                  <span style={{ color: "#C97EFF" }}>ciclo</span>?
                </h1>
                <p
                  className="text-sm"
                  style={{ fontFamily: "var(--font-dm-sans)", color: "rgba(255,255,255,0.5)" }}
                >
                  Del primer día de un período al primero del siguiente. Si no sabés, dejá 28.
                </p>
              </div>

              <div
                className="rounded-xl p-5 flex flex-col gap-4"
                style={{ backgroundColor: "#2A0638" }}
              >
                <div className="flex items-center justify-between">
                  <span className="text-sm" style={{ fontFamily: "var(--font-dm-sans)", color: "rgba(255,255,255,0.5)" }}>
                    Duración
                  </span>
                  <span className="text-3xl font-extrabold" style={{ fontFamily: "var(--font-syne)", fontWeight: 800, color: "#C97EFF" }}>
                    {cycleLength} días
                  </span>
                </div>
                <input
                  type="range" min={21} max={40} value={cycleLength}
                  onChange={(e) => setCycleLength(Number(e.target.value))}
                  style={{ accentColor: "#C97EFF" }} className="w-full"
                />
                <div className="flex justify-between">
                  <span className="text-xs" style={{ fontFamily: "var(--font-dm-sans)", color: "rgba(255,255,255,0.3)" }}>21 días</span>
                  <span className="text-xs" style={{ fontFamily: "var(--font-dm-sans)", color: "rgba(255,255,255,0.3)" }}>40 días</span>
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <button onClick={() => setStep(3)} className="w-full py-4 rounded-full text-base font-semibold text-white" style={{ fontFamily: "var(--font-dm-sans)", backgroundColor: "#FF1FA3" }}>
                  Continuar →
                </button>
                <button onClick={() => setStep(1)} className="text-sm text-center" style={{ fontFamily: "var(--font-dm-sans)", color: "rgba(255,255,255,0.35)" }}>
                  ← Volver
                </button>
              </div>
            </>
          )}

          {/* ── STEP 3: Duración del período ── */}
          {step === 3 && (
            <>
              <div className="flex flex-col gap-2">
                <p
                  className="text-xs font-semibold uppercase tracking-widest"
                  style={{ fontFamily: "var(--font-dm-sans)", color: "#FF6A00" }}
                >
                  Tu ciclo
                </p>
                <h1
                  className="text-3xl font-extrabold leading-tight"
                  style={{ fontFamily: "var(--font-syne)", fontWeight: 800, color: "#FFFFFF" }}
                >
                  ¿Cuántos días te dura{" "}
                  <span style={{ color: "#FFB3EC" }}>el período</span>?
                </h1>
                <p
                  className="text-sm"
                  style={{ fontFamily: "var(--font-dm-sans)", color: "rgba(255,255,255,0.5)" }}
                >
                  Días de sangrado real. Si no sabés, dejá 5.
                </p>
              </div>

              <div
                className="rounded-xl p-5 flex flex-col gap-4"
                style={{ backgroundColor: "#2A0638" }}
              >
                <div className="flex items-center justify-between">
                  <span className="text-sm" style={{ fontFamily: "var(--font-dm-sans)", color: "rgba(255,255,255,0.5)" }}>
                    Duración
                  </span>
                  <span className="text-3xl font-extrabold" style={{ fontFamily: "var(--font-syne)", fontWeight: 800, color: "#FFB3EC" }}>
                    {periodLength} días
                  </span>
                </div>
                <input
                  type="range" min={2} max={10} value={periodLength}
                  onChange={(e) => setPeriodLength(Number(e.target.value))}
                  style={{ accentColor: "#FFB3EC" }} className="w-full"
                />
                <div className="flex justify-between">
                  <span className="text-xs" style={{ fontFamily: "var(--font-dm-sans)", color: "rgba(255,255,255,0.3)" }}>2 días</span>
                  <span className="text-xs" style={{ fontFamily: "var(--font-dm-sans)", color: "rgba(255,255,255,0.3)" }}>10 días</span>
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <button onClick={() => setStep(4)} className="w-full py-4 rounded-full text-base font-semibold text-white" style={{ fontFamily: "var(--font-dm-sans)", backgroundColor: "#FF1FA3" }}>
                  Continuar →
                </button>
                <button onClick={() => setStep(2)} className="text-sm text-center" style={{ fontFamily: "var(--font-dm-sans)", color: "rgba(255,255,255,0.35)" }}>
                  ← Volver
                </button>
              </div>
            </>
          )}

          {/* ── STEP 4: Actividad física ── */}
          {step === 4 && (
            <>
              <div className="flex flex-col gap-2">
                <p
                  className="text-xs font-semibold uppercase tracking-widest"
                  style={{ fontFamily: "var(--font-dm-sans)", color: "#FF6A00" }}
                >
                  Tus preferencias
                </p>
                <h1
                  className="text-3xl font-extrabold leading-tight"
                  style={{ fontFamily: "var(--font-syne)", fontWeight: 800, color: "#FFFFFF" }}
                >
                  ¿Qué tipo de{" "}
                  <span style={{ color: "#C97EFF" }}>ejercicio</span>{" "}
                  hacés?
                </h1>
                <p
                  className="text-sm"
                  style={{ fontFamily: "var(--font-dm-sans)", color: "rgba(255,255,255,0.5)" }}
                >
                  Seleccioná todo lo que aplique. Lo usamos para personalizar las recomendaciones.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-2">
                {ACTIVITIES.map((a) => {
                  const selected = activities.includes(a.id);
                  return (
                    <button
                      key={a.id}
                      onClick={() => toggleActivity(a.id)}
                      className="flex items-center gap-2 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 text-left"
                      style={{
                        fontFamily: "var(--font-dm-sans)",
                        backgroundColor: selected ? "#C97EFF" : "rgba(255,255,255,0.06)",
                        color: selected ? "#2A0638" : "rgba(255,255,255,0.65)",
                        border: selected ? "none" : "1px solid rgba(255,255,255,0.1)",
                        fontWeight: selected ? 600 : 400,
                      }}
                    >
                      <span>{a.icon}</span>
                      <span>{a.label}</span>
                    </button>
                  );
                })}
              </div>

              <div className="flex flex-col gap-3">
                <button onClick={() => setStep(5)} className="w-full py-4 rounded-full text-base font-semibold text-white" style={{ fontFamily: "var(--font-dm-sans)", backgroundColor: "#FF1FA3" }}>
                  {activities.length === 0 ? "Saltar →" : "Continuar →"}
                </button>
                <button onClick={() => setStep(3)} className="text-sm text-center" style={{ fontFamily: "var(--font-dm-sans)", color: "rgba(255,255,255,0.35)" }}>
                  ← Volver
                </button>
              </div>
            </>
          )}

          {/* ── STEP 5: Dieta + Objetivo ── */}
          {step === 5 && (
            <>
              <div className="flex flex-col gap-6">
                {/* Dieta */}
                <div className="flex flex-col gap-3">
                  <div className="flex flex-col gap-1">
                    <p
                      className="text-xs font-semibold uppercase tracking-widest"
                      style={{ fontFamily: "var(--font-dm-sans)", color: "#FF6A00" }}
                    >
                      Alimentación
                    </p>
                    <h2
                      className="text-xl font-extrabold"
                      style={{ fontFamily: "var(--font-syne)", fontWeight: 800, color: "#FFFFFF" }}
                    >
                      ¿Cómo comés?
                    </h2>
                  </div>

                  <div className="flex flex-col gap-2">
                    {DIETS.map((d) => {
                      const selected = dietBase === d.id;
                      return (
                        <button
                          key={d.id}
                          onClick={() => setDietBase(d.id)}
                          className="flex items-center justify-between px-4 py-3 rounded-xl text-sm transition-all duration-200"
                          style={{
                            fontFamily: "var(--font-dm-sans)",
                            backgroundColor: selected ? "#FF6A00" : "rgba(255,255,255,0.06)",
                            color: selected ? "#FFFFFF" : "rgba(255,255,255,0.65)",
                            border: selected ? "none" : "1px solid rgba(255,255,255,0.1)",
                            fontWeight: selected ? 600 : 400,
                          }}
                        >
                          <span>{d.label}</span>
                          <span style={{ opacity: 0.7, fontSize: 12 }}>{d.desc}</span>
                        </button>
                      );
                    })}
                  </div>

                  {/* Sin gluten toggle */}
                  <button
                    onClick={() => setSinGluten((v) => !v)}
                    className="flex items-center justify-between px-4 py-3 rounded-xl transition-all duration-200"
                    style={{
                      backgroundColor: sinGluten ? "rgba(255,233,77,0.15)" : "rgba(255,255,255,0.04)",
                      border: sinGluten ? "1px solid rgba(255,233,77,0.5)" : "1px solid rgba(255,255,255,0.08)",
                    }}
                  >
                    <div className="flex items-center gap-2">
                      <span>🌾</span>
                      <span
                        className="text-sm font-medium"
                        style={{ fontFamily: "var(--font-dm-sans)", color: sinGluten ? "#FFE94D" : "rgba(255,255,255,0.6)" }}
                      >
                        Sin gluten
                      </span>
                    </div>
                    <div
                      className="w-10 h-6 rounded-full flex items-center px-1 transition-all duration-200"
                      style={{ backgroundColor: sinGluten ? "#FFE94D" : "rgba(255,255,255,0.15)" }}
                    >
                      <div
                        className="w-4 h-4 rounded-full bg-white transition-all duration-200"
                        style={{ transform: sinGluten ? "translateX(16px)" : "translateX(0)" }}
                      />
                    </div>
                  </button>
                </div>

                {/* Objetivo */}
                <div className="flex flex-col gap-3">
                  <div className="flex flex-col gap-1">
                    <p
                      className="text-xs font-semibold uppercase tracking-widest"
                      style={{ fontFamily: "var(--font-dm-sans)", color: "#FF6A00" }}
                    >
                      Objetivo
                    </p>
                    <h2
                      className="text-xl font-extrabold"
                      style={{ fontFamily: "var(--font-syne)", fontWeight: 800, color: "#FFFFFF" }}
                    >
                      ¿Para qué usás la app?
                    </h2>
                  </div>

                  <div className="flex flex-col gap-2">
                    {GOALS.map((g) => {
                      const selected = goal === g.id;
                      return (
                        <button
                          key={g.id}
                          onClick={() => setGoal(g.id)}
                          className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm transition-all duration-200"
                          style={{
                            fontFamily: "var(--font-dm-sans)",
                            backgroundColor: selected ? "#FF1FA3" : "rgba(255,255,255,0.06)",
                            color: selected ? "#FFFFFF" : "rgba(255,255,255,0.65)",
                            border: selected ? "none" : "1px solid rgba(255,255,255,0.1)",
                            fontWeight: selected ? 600 : 400,
                          }}
                        >
                          <span>{g.icon}</span>
                          <span>{g.label}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <button
                  onClick={handleFinish}
                  className="w-full py-4 rounded-full text-base font-bold text-white"
                  style={{ fontFamily: "var(--font-dm-sans)", fontWeight: 700, background: "linear-gradient(135deg, #FF1FA3, #FF6A00)" }}
                >
                  Ver mi ciclo ✦
                </button>
                <button onClick={() => setStep(4)} className="text-sm text-center" style={{ fontFamily: "var(--font-dm-sans)", color: "rgba(255,255,255,0.35)" }}>
                  ← Volver
                </button>
              </div>
            </>
          )}

        </div>
      </div>
    </div>
  );
}
