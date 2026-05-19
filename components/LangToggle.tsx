"use client";

import { useLang } from "@/lib/lang-context";

export default function LangToggle() {
  const { lang, toggleLang } = useLang();

  return (
    <button
      onClick={toggleLang}
      aria-label="Switch language"
      className="flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-semibold transition-all duration-200"
      style={{
        fontFamily: "var(--font-dm-sans)",
        backgroundColor: "rgba(255,255,255,0.08)",
        border: "1px solid rgba(255,255,255,0.12)",
      }}
    >
      <span style={{ color: lang === "es" ? "#FF1FA3" : "rgba(255,255,255,0.35)" }}>ES</span>
      <span style={{ color: "rgba(255,255,255,0.2)" }}>/</span>
      <span style={{ color: lang === "en" ? "#FF1FA3" : "rgba(255,255,255,0.35)" }}>EN</span>
    </button>
  );
}
