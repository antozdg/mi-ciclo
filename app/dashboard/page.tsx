"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { loadConfig } from "@/lib/storage";
import { getCycleStatus, CycleStatus, UserPreferences } from "@/lib/cycle";
import { useLang } from "@/lib/lang-context";
import { T } from "@/lib/translations";
import AppNav from "@/components/app/AppNav";
import PhaseHeader from "@/components/app/PhaseHeader";
import CycleMiniMap from "@/components/app/CycleMiniMap";
import ContentSection from "@/components/app/ContentSection";

const GOAL_ICONS: Record<string, string> = {
  seguimiento: "📊",
  embarazo: "🤰",
  anticoncepcion: "🛡️",
};

export default function DashboardPage() {
  const router = useRouter();
  const { lang } = useLang();
  const [status, setStatus] = useState<CycleStatus | null>(null);
  const [preferences, setPreferences] = useState<UserPreferences | null>(null);

  useEffect(() => {
    const config = loadConfig();
    if (!config) {
      router.push("/onboarding");
      return;
    }
    setStatus(getCycleStatus(config));
    setPreferences(config.preferences ?? null);
  }, [router]);

  if (!status) {
    return (
      <div
        className="min-h-screen flex items-center justify-center"
        style={{ backgroundColor: "#3D0845" }}
      >
        <div
          className="w-8 h-8 rounded-full border-2 border-t-transparent animate-spin"
          style={{ borderColor: "#FF1FA3", borderTopColor: "transparent" }}
        />
      </div>
    );
  }

  const t = T[lang].dashboard;

  const nextPeriodFormatted = status.nextPeriodDate.toLocaleDateString(
    lang === "es" ? "es-AR" : "en-US",
    { day: "numeric", month: "long" }
  );

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#3D0845" }}>
      <AppNav />

      <main className="max-w-2xl mx-auto px-4 lg:px-6 py-6 flex flex-col gap-5 pb-16">
        {/* Phase header */}
        <PhaseHeader status={status} />

        {/* Next period callout */}
        <div
          className="flex items-center justify-between px-5 py-4 rounded-xl"
          style={{ backgroundColor: "#2A0638" }}
        >
          <div className="flex items-center gap-3">
            <span className="text-lg">🗓</span>
            <div>
              <p className="text-xs" style={{ fontFamily: "var(--font-dm-sans)", color: "rgba(255,255,255,0.4)" }}>
                {t.nextPeriod}
              </p>
              <p className="text-sm font-semibold" style={{ fontFamily: "var(--font-dm-sans)", color: "#FFB3EC" }}>
                {nextPeriodFormatted}
              </p>
            </div>
          </div>
          <div
            className="px-3 py-1.5 rounded-full text-xs font-semibold"
            style={{ fontFamily: "var(--font-dm-sans)", backgroundColor: "rgba(255,179,236,0.1)", color: "#FFB3EC" }}
          >
            {t.inDays} {status.daysUntilNextPeriod} {t.daysUnit}
          </div>
        </div>

        {/* Fertile window callout */}
        {status.isInFertileWindow && (
          <div
            className="flex items-center gap-3 px-5 py-4 rounded-xl border"
            style={{ backgroundColor: "rgba(255,233,77,0.08)", borderColor: "rgba(255,233,77,0.3)" }}
          >
            <span className="text-lg">✨</span>
            <p className="text-sm font-medium" style={{ fontFamily: "var(--font-dm-sans)", color: "#FFE94D" }}>
              {t.fertileAlert}
            </p>
          </div>
        )}

        {/* Content by category */}
        <ContentSection phase={status.phase} />

        {/* Cycle minimap */}
        <CycleMiniMap status={status} />

        {/* Preferences card */}
        {preferences && (
          <div
            className="rounded-2xl p-5 flex flex-col gap-4"
            style={{ backgroundColor: "#2A0638" }}
          >
            <h2
              className="text-sm font-bold"
              style={{ fontFamily: "var(--font-syne)", color: "#FFFFFF" }}
            >
              {t.profile.title}
            </h2>

            <div className="flex items-center gap-3">
              <span className="text-lg">{GOAL_ICONS[preferences.goal]}</span>
              <div>
                <p className="text-xs" style={{ fontFamily: "var(--font-dm-sans)", color: "rgba(255,255,255,0.4)" }}>
                  {t.profile.goal}
                </p>
                <p className="text-sm font-semibold" style={{ fontFamily: "var(--font-dm-sans)", color: "#FFFFFF" }}>
                  {t.goals[preferences.goal]}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-lg">🥗</span>
              <div>
                <p className="text-xs" style={{ fontFamily: "var(--font-dm-sans)", color: "rgba(255,255,255,0.4)" }}>
                  {t.profile.diet}
                </p>
                <p className="text-sm font-semibold" style={{ fontFamily: "var(--font-dm-sans)", color: "#FFFFFF" }}>
                  {t.diets[preferences.dietBase]}
                  {preferences.sinGluten && ` ${t.profile.sinGluten}`}
                </p>
              </div>
            </div>

            {preferences.activities.length > 0 && (
              <div className="flex flex-col gap-2">
                <p className="text-xs" style={{ fontFamily: "var(--font-dm-sans)", color: "rgba(255,255,255,0.4)" }}>
                  {t.profile.activity}
                </p>
                <div className="flex flex-wrap gap-2">
                  {preferences.activities.map((act) => (
                    <span
                      key={act}
                      className="px-3 py-1 rounded-full text-xs font-semibold"
                      style={{ fontFamily: "var(--font-dm-sans)", backgroundColor: "rgba(201,126,255,0.15)", color: "#C97EFF" }}
                    >
                      {t.activities[act]}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {/* Disclaimer */}
        <p
          className="text-xs text-center px-4"
          style={{ fontFamily: "var(--font-dm-sans)", color: "rgba(255,255,255,0.2)" }}
        >
          {t.disclaimer}
        </p>
      </main>
    </div>
  );
}
