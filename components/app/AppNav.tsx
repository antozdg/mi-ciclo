"use client";

import { useRouter } from "next/navigation";
import { clearConfig } from "@/lib/storage";

export default function AppNav() {
  const router = useRouter();

  function handleReset() {
    if (confirm("¿Resetear tus datos y volver al inicio?")) {
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
        <button
          onClick={handleReset}
          className="text-xs px-3 py-1.5 rounded-full transition-colors duration-200"
          style={{
            fontFamily: "var(--font-dm-sans)",
            color: "rgba(255,255,255,0.4)",
            border: "1px solid rgba(255,255,255,0.1)",
          }}
        >
          Editar datos
        </button>
      </div>
    </nav>
  );
}
