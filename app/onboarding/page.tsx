"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { saveConfig } from "@/lib/storage";

type Step = 1 | 2 | 3;

export default function OnboardingPage() {
  const router = useRouter();
  const [step, setStep] = useState<Step>(1);
  const [lastPeriod, setLastPeriod] = useState("");
  const [cycleLength, setCycleLength] = useState(28);
  const [periodLength, setPeriodLength] = useState(5);

  const today = new Date().toISOString().split("T")[0];

  function handleFinish() {
    saveConfig({ lastPeriodStart: lastPeriod, cycleLength, periodLength });
    router.push("/dashboard");
  }

  return (
    <div
      className="min-h-screen flex flex-col"
      style={{ backgroundColor: "#3D0845" }}
    >
      {/* Logo bar */}
      <div className="px-6 py-5">
        <span
          className="text-xl"
          style={{ fontFamily: "var(--font-syne)", fontWeight: 800 }}
        >
          <span className="text-white">mi</span>
          <span style={{ color: "#FF6A00" }}>.</span>
          <span style={{ color: "#FF1FA3" }}>ciclo</span>
        </span>
      </div>

      {/* Progress dots */}
      <div className="flex justify-center gap-2 py-4">
        {[1, 2, 3].map((s) => (
          <div
            key={s}
            className="rounded-full transition-all duration-300"
            style={{
              width: s === step ? 24 : 8,
              height: 8,
              backgroundColor:
                s === step
                  ? "#FF1FA3"
                  : s < step
                  ? "rgba(255,31,163,0.4)"
                  : "rgba(255,255,255,0.15)",
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col items-center justify-center px-6 pb-16">
        <div className="w-full max-w-sm flex flex-col gap-8">
          {step === 1 && (
            <>
              <div className="flex flex-col gap-3">
                <p
                  className="text-xs font-semibold uppercase tracking-widest"
                  style={{ fontFamily: "var(--font-dm-sans)", color: "#FF6A00" }}
                >
                  Paso 1 de 3
                </p>
                <h1
                  className="text-3xl font-extrabold leading-tight"
                  style={{
                    fontFamily: "var(--font-syne)",
                    fontWeight: 800,
                    color: "#FFFFFF",
                  }}
                >
                  ¿Cuándo empezó tu{" "}
                  <span style={{ color: "#FF1FA3" }}>último período</span>?
                </h1>
                <p
                  className="text-sm leading-relaxed"
                  style={{
                    fontFamily: "var(--font-dm-sans)",
                    color: "rgba(255,255,255,0.55)",
                  }}
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

          {step === 2 && (
            <>
              <div className="flex flex-col gap-3">
                <p
                  className="text-xs font-semibold uppercase tracking-widest"
                  style={{ fontFamily: "var(--font-dm-sans)", color: "#FF6A00" }}
                >
                  Paso 2 de 3
                </p>
                <h1
                  className="text-3xl font-extrabold leading-tight"
                  style={{
                    fontFamily: "var(--font-syne)",
                    fontWeight: 800,
                    color: "#FFFFFF",
                  }}
                >
                  ¿Cuántos días dura tu{" "}
                  <span style={{ color: "#C97EFF" }}>ciclo</span>?
                </h1>
                <p
                  className="text-sm leading-relaxed"
                  style={{
                    fontFamily: "var(--font-dm-sans)",
                    color: "rgba(255,255,255,0.55)",
                  }}
                >
                  Del primer día de un período al primero del siguiente. Si no sabés, dejá 28.
                </p>
              </div>

              {/* Cycle length control */}
              <div
                className="rounded-xl p-5 flex flex-col gap-4"
                style={{ backgroundColor: "#2A0638" }}
              >
                <div className="flex items-center justify-between">
                  <span
                    className="text-sm"
                    style={{
                      fontFamily: "var(--font-dm-sans)",
                      color: "rgba(255,255,255,0.5)",
                    }}
                  >
                    Duración del ciclo
                  </span>
                  <span
                    className="text-3xl font-extrabold"
                    style={{
                      fontFamily: "var(--font-syne)",
                      fontWeight: 800,
                      color: "#C97EFF",
                    }}
                  >
                    {cycleLength} días
                  </span>
                </div>
                <input
                  type="range"
                  min={21}
                  max={40}
                  value={cycleLength}
                  onChange={(e) => setCycleLength(Number(e.target.value))}
                  className="w-full accent-pink-500"
                  style={{ accentColor: "#C97EFF" }}
                />
                <div className="flex justify-between">
                  <span
                    className="text-xs"
                    style={{
                      fontFamily: "var(--font-dm-sans)",
                      color: "rgba(255,255,255,0.3)",
                    }}
                  >
                    21 días
                  </span>
                  <span
                    className="text-xs"
                    style={{
                      fontFamily: "var(--font-dm-sans)",
                      color: "rgba(255,255,255,0.3)",
                    }}
                  >
                    40 días
                  </span>
                </div>
              </div>

              <button
                onClick={() => setStep(1)}
                className="text-sm text-center"
                style={{
                  fontFamily: "var(--font-dm-sans)",
                  color: "rgba(255,255,255,0.35)",
                }}
              >
                ← Volver
              </button>

              <button
                onClick={() => setStep(3)}
                className="w-full py-4 rounded-full text-base font-semibold text-white transition-all duration-200"
                style={{
                  fontFamily: "var(--font-dm-sans)",
                  backgroundColor: "#FF1FA3",
                }}
              >
                Continuar →
              </button>
            </>
          )}

          {step === 3 && (
            <>
              <div className="flex flex-col gap-3">
                <p
                  className="text-xs font-semibold uppercase tracking-widest"
                  style={{ fontFamily: "var(--font-dm-sans)", color: "#FF6A00" }}
                >
                  Paso 3 de 3
                </p>
                <h1
                  className="text-3xl font-extrabold leading-tight"
                  style={{
                    fontFamily: "var(--font-syne)",
                    fontWeight: 800,
                    color: "#FFFFFF",
                  }}
                >
                  ¿Cuántos días te dura{" "}
                  <span style={{ color: "#FFB3EC" }}>el período</span>?
                </h1>
                <p
                  className="text-sm leading-relaxed"
                  style={{
                    fontFamily: "var(--font-dm-sans)",
                    color: "rgba(255,255,255,0.55)",
                  }}
                >
                  Los días de sangrado, sin contar el manchado final. Si no sabés, dejá 5.
                </p>
              </div>

              {/* Period length control */}
              <div
                className="rounded-xl p-5 flex flex-col gap-4"
                style={{ backgroundColor: "#2A0638" }}
              >
                <div className="flex items-center justify-between">
                  <span
                    className="text-sm"
                    style={{
                      fontFamily: "var(--font-dm-sans)",
                      color: "rgba(255,255,255,0.5)",
                    }}
                  >
                    Duración del período
                  </span>
                  <span
                    className="text-3xl font-extrabold"
                    style={{
                      fontFamily: "var(--font-syne)",
                      fontWeight: 800,
                      color: "#FFB3EC",
                    }}
                  >
                    {periodLength} días
                  </span>
                </div>
                <input
                  type="range"
                  min={2}
                  max={10}
                  value={periodLength}
                  onChange={(e) => setPeriodLength(Number(e.target.value))}
                  style={{ accentColor: "#FFB3EC" }}
                  className="w-full"
                />
                <div className="flex justify-between">
                  <span
                    className="text-xs"
                    style={{
                      fontFamily: "var(--font-dm-sans)",
                      color: "rgba(255,255,255,0.3)",
                    }}
                  >
                    2 días
                  </span>
                  <span
                    className="text-xs"
                    style={{
                      fontFamily: "var(--font-dm-sans)",
                      color: "rgba(255,255,255,0.3)",
                    }}
                  >
                    10 días
                  </span>
                </div>
              </div>

              <button
                onClick={() => setStep(2)}
                className="text-sm text-center"
                style={{
                  fontFamily: "var(--font-dm-sans)",
                  color: "rgba(255,255,255,0.35)",
                }}
              >
                ← Volver
              </button>

              <button
                onClick={handleFinish}
                className="w-full py-4 rounded-full text-base font-bold text-white transition-all duration-200"
                style={{
                  fontFamily: "var(--font-dm-sans)",
                  fontWeight: 700,
                  background: "linear-gradient(135deg, #FF1FA3, #FF6A00)",
                }}
              >
                Ver mi ciclo ✦
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
