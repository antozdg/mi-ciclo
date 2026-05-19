"use client";

import { useLang } from "@/lib/lang-context";
import { T } from "@/lib/translations";

export default function Hero() {
  const { lang } = useLang();
  const t = T[lang].hero;

  return (
    <section
      id="como-funciona"
      className="min-h-screen flex flex-col items-center justify-center px-6 lg:px-8 pt-24 pb-20"
      style={{ backgroundColor: "#3D0845" }}
    >
      <div className="max-w-4xl mx-auto w-full flex flex-col items-center text-center gap-10">
        {/* Eyebrow badge */}
        <div
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium border"
          style={{
            fontFamily: "var(--font-dm-sans)",
            borderColor: "#FF6A00",
            color: "#FF6A00",
            backgroundColor: "rgba(255, 106, 0, 0.1)",
          }}
        >
          <span>✦</span>
          <span>{t.badge}</span>
        </div>

        {/* Pills stack */}
        <div className="flex flex-col items-center gap-3 w-full">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 w-full">
            <div className="px-7 py-4 rounded-full sm:-rotate-1" style={{ backgroundColor: "#FFFFFF" }}>
              <span className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-none whitespace-nowrap" style={{ fontFamily: "var(--font-syne)", fontWeight: 800, color: "#3D0845" }}>
                {t.pill1}
              </span>
            </div>
            <div className="px-7 py-4 rounded-full border-2 sm:rotate-1" style={{ borderColor: "rgba(255,255,255,0.4)" }}>
              <span className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-none whitespace-nowrap" style={{ fontFamily: "var(--font-syne)", fontWeight: 800, color: "rgba(255,255,255,0.85)" }}>
                {t.pill2}
              </span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 w-full">
            <div className="px-7 py-4 rounded-full sm:rotate-1" style={{ backgroundColor: "#C97EFF" }}>
              <span className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-none whitespace-nowrap" style={{ fontFamily: "var(--font-syne)", fontWeight: 800, color: "#3D0845" }}>
                {t.pill3}
              </span>
            </div>
            <div className="px-7 py-4 rounded-full sm:-rotate-1" style={{ backgroundColor: "#FF1FA3" }}>
              <span className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-none whitespace-nowrap" style={{ fontFamily: "var(--font-syne)", fontWeight: 800, color: "#FFFFFF" }}>
                {t.pill4}
              </span>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <div className="px-7 py-4 rounded-full" style={{ backgroundColor: "#FF6A00" }}>
              <span className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-none whitespace-nowrap" style={{ fontFamily: "var(--font-syne)", fontWeight: 800, color: "#FFFFFF" }}>
                Mi Ciclo
              </span>
            </div>
          </div>
        </div>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl max-w-2xl leading-relaxed font-medium" style={{ fontFamily: "var(--font-dm-sans)", color: "#E8B4FF" }}>
          {t.subtitle}
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <a
            href="/onboarding"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-base font-semibold text-white transition-all duration-200"
            style={{ fontFamily: "var(--font-dm-sans)", fontWeight: 600, backgroundColor: "#FF1FA3" }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "linear-gradient(135deg, #FF1FA3, #FF6A00)"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "#FF1FA3"; }}
          >
            {t.cta} <span aria-hidden="true">→</span>
          </a>
          <a
            href="#como-funciona"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-base font-semibold text-white transition-all duration-200"
            style={{ fontFamily: "var(--font-dm-sans)", fontWeight: 600, backgroundColor: "#FF6A00" }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.filter = "brightness(110%)"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.filter = "brightness(100%)"; }}
          >
            {t.howItWorks}
          </a>
        </div>

        {/* Tag */}
        <p className="text-sm" style={{ fontFamily: "var(--font-dm-sans)", color: "rgba(255,255,255,0.45)" }}>
          <span style={{ color: "#FF1FA3" }}>●</span>{" "}{t.tag}
        </p>
      </div>
    </section>
  );
}
