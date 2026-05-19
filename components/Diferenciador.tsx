"use client";

import { useLang } from "@/lib/lang-context";
import { T } from "@/lib/translations";

export default function Diferenciador() {
  const { lang } = useLang();
  const t = T[lang].diferenciador;

  return (
    <section
      id="tu-ciclo"
      className="px-6 lg:px-8 py-20 lg:py-28"
      style={{ backgroundColor: "#FFE94D" }}
    >
      <div className="max-w-4xl mx-auto flex flex-col gap-8">
        <p
          className="text-xs font-semibold uppercase tracking-widest"
          style={{ fontFamily: "var(--font-dm-sans)", color: "#8B6800" }}
        >
          {t.eyebrow}
        </p>

        <h2
          className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight"
          style={{ fontFamily: "var(--font-syne)", fontWeight: 800, color: "#3D0845" }}
        >
          {t.headline1}{" "}
          <span style={{ color: "#FF1FA3" }}>{t.headlineAccent}</span>{" "}
          {t.headline2}
        </h2>

        <p
          className="text-lg lg:text-xl leading-relaxed max-w-2xl"
          style={{ fontFamily: "var(--font-dm-sans)", color: "#5A3800" }}
        >
          {t.body}
        </p>

        <div className="flex flex-wrap gap-3 mt-2">
          <div
            className="inline-flex items-center px-5 py-3 rounded-full text-sm font-semibold"
            style={{ fontFamily: "var(--font-dm-sans)", backgroundColor: "#3D0845", color: "#C97EFF" }}
          >
            {t.pill1}
          </div>
          <div
            className="inline-flex items-center px-5 py-3 rounded-full text-sm font-semibold"
            style={{ fontFamily: "var(--font-dm-sans)", backgroundColor: "#FF1FA3", color: "#FFFFFF" }}
          >
            {t.pill2}
          </div>
          <div
            className="inline-flex items-center px-5 py-3 rounded-full text-sm font-semibold"
            style={{ fontFamily: "var(--font-dm-sans)", backgroundColor: "#FF6A00", color: "#FFFFFF" }}
          >
            {t.pill3}
          </div>
        </div>
      </div>
    </section>
  );
}
