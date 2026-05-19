"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { saveConfig } from "@/lib/storage";
import { ActivityType, DietBase, Goal } from "@/lib/cycle";
import { useLang } from "@/lib/lang-context";
import { T } from "@/lib/translations";
import LangToggle from "@/components/LangToggle";

type Step = 1 | 2 | 3 | 4 | 5;

const ACTIVITY_IDS: ActivityType[] = [
  "running", "gym", "yoga", "pilates", "crossfit", "natacion", "caminata", "ciclismo",
];
const ACTIVITY_ICONS: Record<ActivityType, string> = {
  running: "🏃", gym: "💪", yoga: "🧘", pilates: "🌀",
  crossfit: "⚡", natacion: "🏊", caminata: "🚶", ciclismo: "🚴",
};

const DIET_IDS: DietBase[] = ["omnivora", "vegetariana", "vegana"];
const GOAL_IDS: Goal[] = ["seguimiento", "embarazo", "anticoncepcion"];
const GOAL_ICONS: Record<Goal, string> = {
  seguimiento: "📊", embarazo: "✨", anticoncepcion: "🛡",
};

const TOTAL_STEPS = 5;

export default function OnboardingPage() {
  const router = useRouter();
  const { lang } = useLang();
  const [step, setStep] = useState<Step>(1);

  const [lastPeriod, setLastPeriod] = useState("");
  const [cycleLength, setCycleLength] = useState(28);
  const [periodLength, setPeriodLength] = useState(5);
  const [activities, setActivities] = useState<ActivityType[]>([]);
  const [dietBase, setDietBase] = useState<DietBase>("omnivora");
  const [sinGluten, setSinGluten] = useState(false);
  const [goal, setGoal] = useState<Goal>("seguimiento");

  const today = new Date().toISOString().split("T")[0];
  const progress = (step / TOTAL_STEPS) * 100;
  const t = T[lang].onboarding;

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
        <div className="flex items-center gap-3">
          <LangToggle />
          <span
            className="text-xs"
            style={{ fontFamily: "var(--font-dm-sans)", color: "rgba(255,255,255,0.35)" }}
          >
            {step} {t.stepOf} {TOTAL_STEPS}
          </span>
        </div>
      </div>

      {/* Progress bar */}
      <div className="px-6">
        <div
          className="h-1 rounded-full overflow-hidden"
          style={{ backgroundColor: "rgba(255,255,255,0.1)" }}
        >
          <div
            className="h-full rounded-full transition-all duration-500"
            style={{ width: `${progress}%`, background: "linear-gradient(135deg, #FF1FA3, #FF6A00)" }}
          />
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col items-center justify-center px-6 py-10">
        <div className="w-full max-w-sm flex flex-col gap-7">

          {/* ── STEP 1 ── */}
          {step === 1 && (
            <>
              <div className="flex flex-col gap-2">
                <p
                  className="text-xs font-semibold uppercase tracking-widest"
                  style={{ fontFamily: "var(--font-dm-sans)", color: "#FF6A00" }}
                >
                  {t.step1.eyebrow}
                </p>
                <h1
                  className="text-3xl font-extrabold leading-tight"
                  style={{ fontFamily: "var(--font-syne)", fontWeight: 800, color: "#FFFFFF" }}
                >
                  {t.step1.title1}{" "}
                  <span style={{ color: "#FF1FA3" }}>{t.step1.titleAccent}</span>
                  {t.step1.title2}
                </h1>
                <p
                  className="text-sm leading-relaxed"
                  style={{ fontFamily: "var(--font-dm-sans)", color: "rgba(255,255,255,0.5)" }}
                >
                  {t.step1.subtitle}
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
                {t.step1.continue}
              </button>
            </>
          )}

          {/* ── STEP 2 ── */}
          {step === 2 && (
            <>
              <div className="flex flex-col gap-2">
                <p className="text-xs font-semibold uppercase tracking-widest" style={{ fontFamily: "var(--font-dm-sans)", color: "#FF6A00" }}>
                  {t.step2.eyebrow}
                </p>
                <h1 className="text-3xl font-extrabold leading-tight" style={{ fontFamily: "var(--font-syne)", fontWeight: 800, color: "#FFFFFF" }}>
                  {t.step2.title1}{" "}
                  <span style={{ color: "#C97EFF" }}>{t.step2.titleAccent}</span>
                  {t.step2.title2}
                </h1>
                <p className="text-sm" style={{ fontFamily: "var(--font-dm-sans)", color: "rgba(255,255,255,0.5)" }}>
                  {t.step2.subtitle}
                </p>
              </div>

              <div className="rounded-xl p-5 flex flex-col gap-4" style={{ backgroundColor: "#2A0638" }}>
                <div className="flex items-center justify-between">
                  <span className="text-sm" style={{ fontFamily: "var(--font-dm-sans)", color: "rgba(255,255,255,0.5)" }}>
                    {t.step2.durationLabel}
                  </span>
                  <span className="text-3xl font-extrabold" style={{ fontFamily: "var(--font-syne)", fontWeight: 800, color: "#C97EFF" }}>
                    {cycleLength} {t.step2.daysUnit}
                  </span>
                </div>
                <input type="range" min={21} max={40} value={cycleLength} onChange={(e) => setCycleLength(Number(e.target.value))} style={{ accentColor: "#C97EFF" }} className="w-full" />
                <div className="flex justify-between">
                  <span className="text-xs" style={{ fontFamily: "var(--font-dm-sans)", color: "rgba(255,255,255,0.3)" }}>21 {t.step2.daysUnit}</span>
                  <span className="text-xs" style={{ fontFamily: "var(--font-dm-sans)", color: "rgba(255,255,255,0.3)" }}>40 {t.step2.daysUnit}</span>
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <button onClick={() => setStep(3)} className="w-full py-4 rounded-full text-base font-semibold text-white" style={{ fontFamily: "var(--font-dm-sans)", backgroundColor: "#FF1FA3" }}>
                  {t.step2.continue}
                </button>
                <button onClick={() => setStep(1)} className="text-sm text-center" style={{ fontFamily: "var(--font-dm-sans)", color: "rgba(255,255,255,0.35)" }}>
                  {t.step2.back}
                </button>
              </div>
            </>
          )}

          {/* ── STEP 3 ── */}
          {step === 3 && (
            <>
              <div className="flex flex-col gap-2">
                <p className="text-xs font-semibold uppercase tracking-widest" style={{ fontFamily: "var(--font-dm-sans)", color: "#FF6A00" }}>
                  {t.step3.eyebrow}
                </p>
                <h1 className="text-3xl font-extrabold leading-tight" style={{ fontFamily: "var(--font-syne)", fontWeight: 800, color: "#FFFFFF" }}>
                  {t.step3.title1}{" "}
                  <span style={{ color: "#FFB3EC" }}>{t.step3.titleAccent}</span>
                  {t.step3.title2}
                </h1>
                <p className="text-sm" style={{ fontFamily: "var(--font-dm-sans)", color: "rgba(255,255,255,0.5)" }}>
                  {t.step3.subtitle}
                </p>
              </div>

              <div className="rounded-xl p-5 flex flex-col gap-4" style={{ backgroundColor: "#2A0638" }}>
                <div className="flex items-center justify-between">
                  <span className="text-sm" style={{ fontFamily: "var(--font-dm-sans)", color: "rgba(255,255,255,0.5)" }}>
                    {t.step3.durationLabel}
                  </span>
                  <span className="text-3xl font-extrabold" style={{ fontFamily: "var(--font-syne)", fontWeight: 800, color: "#FFB3EC" }}>
                    {periodLength} {t.step3.daysUnit}
                  </span>
                </div>
                <input type="range" min={2} max={10} value={periodLength} onChange={(e) => setPeriodLength(Number(e.target.value))} style={{ accentColor: "#FFB3EC" }} className="w-full" />
                <div className="flex justify-between">
                  <span className="text-xs" style={{ fontFamily: "var(--font-dm-sans)", color: "rgba(255,255,255,0.3)" }}>2 {t.step3.daysUnit}</span>
                  <span className="text-xs" style={{ fontFamily: "var(--font-dm-sans)", color: "rgba(255,255,255,0.3)" }}>10 {t.step3.daysUnit}</span>
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <button onClick={() => setStep(4)} className="w-full py-4 rounded-full text-base font-semibold text-white" style={{ fontFamily: "var(--font-dm-sans)", backgroundColor: "#FF1FA3" }}>
                  {t.step3.continue}
                </button>
                <button onClick={() => setStep(2)} className="text-sm text-center" style={{ fontFamily: "var(--font-dm-sans)", color: "rgba(255,255,255,0.35)" }}>
                  {t.step3.back}
                </button>
              </div>
            </>
          )}

          {/* ── STEP 4 ── */}
          {step === 4 && (
            <>
              <div className="flex flex-col gap-2">
                <p className="text-xs font-semibold uppercase tracking-widest" style={{ fontFamily: "var(--font-dm-sans)", color: "#FF6A00" }}>
                  {t.step4.eyebrow}
                </p>
                <h1 className="text-3xl font-extrabold leading-tight" style={{ fontFamily: "var(--font-syne)", fontWeight: 800, color: "#FFFFFF" }}>
                  {t.step4.title1}{" "}
                  <span style={{ color: "#C97EFF" }}>{t.step4.titleAccent}</span>{" "}
                  {t.step4.title2}
                </h1>
                <p className="text-sm" style={{ fontFamily: "var(--font-dm-sans)", color: "rgba(255,255,255,0.5)" }}>
                  {t.step4.subtitle}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-2">
                {ACTIVITY_IDS.map((id) => {
                  const selected = activities.includes(id);
                  return (
                    <button
                      key={id}
                      onClick={() => toggleActivity(id)}
                      className="flex items-center gap-2 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 text-left"
                      style={{
                        fontFamily: "var(--font-dm-sans)",
                        backgroundColor: selected ? "#C97EFF" : "rgba(255,255,255,0.06)",
                        color: selected ? "#2A0638" : "rgba(255,255,255,0.65)",
                        border: selected ? "none" : "1px solid rgba(255,255,255,0.1)",
                        fontWeight: selected ? 600 : 400,
                      }}
                    >
                      <span>{ACTIVITY_ICONS[id]}</span>
                      <span>{t.step4.activities[id]}</span>
                    </button>
                  );
                })}
              </div>

              <div className="flex flex-col gap-3">
                <button onClick={() => setStep(5)} className="w-full py-4 rounded-full text-base font-semibold text-white" style={{ fontFamily: "var(--font-dm-sans)", backgroundColor: "#FF1FA3" }}>
                  {activities.length === 0 ? t.step4.skip : t.step4.continue}
                </button>
                <button onClick={() => setStep(3)} className="text-sm text-center" style={{ fontFamily: "var(--font-dm-sans)", color: "rgba(255,255,255,0.35)" }}>
                  {t.step4.back}
                </button>
              </div>
            </>
          )}

          {/* ── STEP 5 ── */}
          {step === 5 && (
            <>
              <div className="flex flex-col gap-6">
                {/* Diet */}
                <div className="flex flex-col gap-3">
                  <div className="flex flex-col gap-1">
                    <p className="text-xs font-semibold uppercase tracking-widest" style={{ fontFamily: "var(--font-dm-sans)", color: "#FF6A00" }}>
                      {t.step5.dietEyebrow}
                    </p>
                    <h2 className="text-xl font-extrabold" style={{ fontFamily: "var(--font-syne)", fontWeight: 800, color: "#FFFFFF" }}>
                      {t.step5.dietTitle}
                    </h2>
                  </div>

                  <div className="flex flex-col gap-2">
                    {DIET_IDS.map((id) => {
                      const selected = dietBase === id;
                      const d = t.step5.diets[id];
                      return (
                        <button
                          key={id}
                          onClick={() => setDietBase(id)}
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
                      <span className="text-sm font-medium" style={{ fontFamily: "var(--font-dm-sans)", color: sinGluten ? "#FFE94D" : "rgba(255,255,255,0.6)" }}>
                        {t.step5.sinGluten}
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

                {/* Goal */}
                <div className="flex flex-col gap-3">
                  <div className="flex flex-col gap-1">
                    <p className="text-xs font-semibold uppercase tracking-widest" style={{ fontFamily: "var(--font-dm-sans)", color: "#FF6A00" }}>
                      {t.step5.goalEyebrow}
                    </p>
                    <h2 className="text-xl font-extrabold" style={{ fontFamily: "var(--font-syne)", fontWeight: 800, color: "#FFFFFF" }}>
                      {t.step5.goalTitle}
                    </h2>
                  </div>

                  <div className="flex flex-col gap-2">
                    {GOAL_IDS.map((id) => {
                      const selected = goal === id;
                      return (
                        <button
                          key={id}
                          onClick={() => setGoal(id)}
                          className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm transition-all duration-200"
                          style={{
                            fontFamily: "var(--font-dm-sans)",
                            backgroundColor: selected ? "#FF1FA3" : "rgba(255,255,255,0.06)",
                            color: selected ? "#FFFFFF" : "rgba(255,255,255,0.65)",
                            border: selected ? "none" : "1px solid rgba(255,255,255,0.1)",
                            fontWeight: selected ? 600 : 400,
                          }}
                        >
                          <span>{GOAL_ICONS[id]}</span>
                          <span>{t.step5.goals[id]}</span>
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
                  {t.step5.finish}
                </button>
                <button onClick={() => setStep(4)} className="text-sm text-center" style={{ fontFamily: "var(--font-dm-sans)", color: "rgba(255,255,255,0.35)" }}>
                  {t.step5.back}
                </button>
              </div>
            </>
          )}

        </div>
      </div>
    </div>
  );
}
