"use client";

import { useLang } from "@/lib/lang-context";
import { T } from "@/lib/translations";

export default function Footer() {
  const { lang } = useLang();
  const t = T[lang].footer;

  return (
    <footer
      className="px-6 lg:px-8 py-12 lg:py-16"
      style={{ backgroundColor: "#2A0638" }}
    >
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        <a href="/" className="flex items-center">
          <span className="text-2xl" style={{ fontFamily: "var(--font-syne)", fontWeight: 800 }}>
            <span className="text-white">mi</span>
            <span style={{ color: "#FF6A00" }}>.</span>
            <span style={{ color: "#FF1FA3" }}>ciclo</span>
          </span>
        </a>

        <div className="flex items-center gap-6">
          {t.links.map((link) => (
            <a
              key={link}
              href="#"
              className="text-sm transition-colors duration-200"
              style={{ fontFamily: "var(--font-dm-sans)", color: "rgba(255,255,255,0.4)" }}
              onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "rgba(255,255,255,0.8)")}
              onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "rgba(255,255,255,0.4)")}
            >
              {link}
            </a>
          ))}
        </div>

        <p className="text-sm" style={{ fontFamily: "var(--font-dm-sans)", color: "rgba(255,255,255,0.4)" }}>
          © 2026 Mi Ciclo
        </p>
      </div>
    </footer>
  );
}
