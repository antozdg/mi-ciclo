"use client";

import { useRouter } from "next/navigation";
import { clearConfig } from "@/lib/storage";
import { useLang } from "@/lib/lang-context";
import { T } from "@/lib/translations";
import LangToggle from "@/components/LangToggle";

export default function AppNav() {
  const router = useRouter();
  const { lang } = useLang();
  const t = T[lang].appNav;

  function handleReset() {
    if (confirm(t.resetConfirm)) {
      clearConfig();
      router.push("/onboarding");
    }
  }

  return (
    <nav
      className="sticky top-0 z-50 px-4 lg:px-8"
      style={{ backgroundColor: "#3D0845" }}
    >
      <div className="max-w-2xl mx-auto flex items-center justify-between h-14">
        {/* Logo */}
        <a href="/" className="flex items-center">
          <span
            className="text-xl"
            style={{ fontFamily: "var(--font-syne)", fontWeight: 800 }}
          >
            <span className="text-white">mi</span>
            <span style={{ color: "#FF6A00" }}>.</span>
            <span style={{ color: "#FF1FA3" }}>ciclo</span>
          </span>
        </a>

        {/* Actions */}
        <div className="flex items-center gap-2">
          <LangToggle />
          <button
            onClick={handleReset}
            className="text-xs px-3 py-1.5 rounded-full transition-colors duration-200"
            style={{
              fontFamily: "var(--font-dm-sans)",
              color: "rgba(255,255,255,0.4)",
              border: "1px solid rgba(255,255,255,0.1)",
            }}
          >
            {t.editData}
          </button>
        </div>
      </div>
    </nav>
  );
}
