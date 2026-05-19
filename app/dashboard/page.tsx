"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { loadConfig } from "@/lib/storage";
import { getCycleStatus, CycleStatus, UserPreferences } from "@/lib/cycle";
import AppNav from "@/components/app/AppNav";
import PhaseHeader from "@/components/app/PhaseHeader";
import CycleMiniMap from "@/components/app/CycleMiniMap";
import ContentSection from "@/components/app/ContentSection";

const ACTIVITY_LABELS: Record<string, string> = {
  running: "Running",
  gym: "Gym",
  yoga: "Yoga",
  pilates: "Pilates",
  crossfit: "CrossFit",
  natacion: "Natación",
  caminata: "Caminata",
  ciclismo: "Ciclismo",
};

const DIET_LABELS: Record<string, string> = {
  omnivora: "Omnívora",
  vegetariana: "Vegetariana",
  vegana: "Vegana",
};

const GOAL_LABELS: Record<string, string> = {
  seguimiento: "Seguimiento general",
  embarazo: "Busco quedar embarazada",
  anticoncepcion: "Evito el embarazo",
};

const GOAL_ICONS: Record<string, string> = {
  seguimiento: "📊",
  embarazo: "🤰",
  anticoncepcion: "🛡️",
};

export default function DashboardPage() {
  const router = useRouter();
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

  const nextPeriodFormatted = status.nextPeriodDate.toLocaleDateString("es-AR", {
    day: "numeric",
    month: "long",
  });

  return (
    <div
      className="min-h-screen"
      style={{ backgroundColor: "#3D0845" }}
    >
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
              <p
                className="text-xs"
                style={{
                  fontFamily: "var(--font-dm-sans)",
                  color: "rgba(255,255,255,0.4)",
                }}
              >
                Próximo período estimado
              </p>
              <p
                className="text-sm font-semibold"
                style={{
                  fontFamily: "var(--font-dm-sans)",
                  color: "#FFB3EC",
                }}
              >
                {nextPeriodFormatted}
              </p>
            </div>
          </div>
          <div
            className="px-3 py-1.5 rounded-full text-xs font-semibold"
            style={{
              fontFamily: "var(--font-dm-sans)",
              backgroundColor: "rgba(255,179,236,0.1)",
              color: "#FFB3EC",
            }}
          >
            en {status.daysUntilNextPeriod} días
          </div>
        </div>

        {/* Fertile window callout — only show when relevant */}
        {status.isInFertileWindow && (
          <div
            className="flex items-center gap-3 px-5 py-4 rounded-xl border"
            style={{
              backgroundColor: "rgba(255,233,77,0.08)",
              borderColor: "rgba(255,233,77,0.3)",
            }}
          >
            <span className="text-lg">✨</span>
            <p
              className="text-sm font-medium"
              style={{
                fontFamily: "var(--font-dm-sans)",
                color: "#FFE94D",
              }}
            >
              Estás en tu ventana fértil
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
              Tu perfil
            </h2>

            {/* Goal */}
            <div className="flex items-center gap-3">
              <span className="text-lg">{GOAL_ICONS[preferences.goal]}</span>
              <div>
                <p
                  className="text-xs"
                  style={{
                    fontFamily: "var(--font-dm-sans)",
                    color: "rgba(255,255,255,0.4)",
                  }}
                >
                  Objetivo
                </p>
                <p
                  className="text-sm font-semibold"
                  style={{
                    fontFamily: "var(--font-dm-sans)",
                    color: "#FFFFFF",
                  }}
                >
                  {GOAL_LABELS[preferences.goal]}
                </p>
              </div>
            </div>

            {/* Diet */}
            <div className="flex items-center gap-3">
              <span className="text-lg">🥗</span>
              <div>
                <p
                  className="text-xs"
                  style={{
                    fontFamily: "var(--font-dm-sans)",
                    color: "rgba(255,255,255,0.4)",
                  }}
                >
                  Alimentación
                </p>
                <p
                  className="text-sm font-semibold"
                  style={{
                    fontFamily: "var(--font-dm-sans)",
                    color: "#FFFFFF",
                  }}
                >
                  {DIET_LABELS[preferences.dietBase]}
                  {preferences.sinGluten && " · Sin gluten"}
                </p>
              </div>
            </div>

            {/* Activities */}
            {preferences.activities.length > 0 && (
              <div className="flex flex-col gap-2">
                <p
                  className="text-xs"
                  style={{
                    fontFamily: "var(--font-dm-sans)",
                    color: "rgba(255,255,255,0.4)",
                  }}
                >
                  Actividad física
                </p>
                <div className="flex flex-wrap gap-2">
                  {preferences.activities.map((act) => (
                    <span
                      key={act}
                      className="px-3 py-1 rounded-full text-xs font-semibold"
                      style={{
                        fontFamily: "var(--font-dm-sans)",
                        backgroundColor: "rgba(201,126,255,0.15)",
                        color: "#C97EFF",
                      }}
                    >
                      {ACTIVITY_LABELS[act]}
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
          style={{
            fontFamily: "var(--font-dm-sans)",
            color: "rgba(255,255,255,0.2)",
          }}
        >
          Mi Ciclo es una herramienta informativa. No reemplaza el consejo médico
          profesional.
        </p>
      </main>
    </div>
  );
}
