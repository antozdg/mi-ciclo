"use client";

import { useState, useEffect } from "react";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#3D0845]/95 backdrop-blur-md shadow-lg shadow-black/20"
          : "bg-[#3D0845]"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a href="/" className="flex items-center">
            <span
              className="text-2xl lg:text-3xl"
              style={{ fontFamily: "var(--font-syne)", fontWeight: 800 }}
            >
              <span className="text-white">mi</span>
              <span style={{ color: "#FF6A00" }}>.</span>
              <span style={{ color: "#FF1FA3" }}>ciclo</span>
            </span>
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            <a
              href="#como-funciona"
              className="text-sm font-medium transition-colors duration-200"
              style={{
                fontFamily: "var(--font-dm-sans)",
                color: "rgba(255,255,255,0.7)",
              }}
              onMouseEnter={(e) =>
                ((e.target as HTMLElement).style.color = "#C97EFF")
              }
              onMouseLeave={(e) =>
                ((e.target as HTMLElement).style.color = "rgba(255,255,255,0.7)")
              }
            >
              Cómo funciona
            </a>
            <a
              href="#tu-ciclo"
              className="text-sm font-medium transition-colors duration-200"
              style={{
                fontFamily: "var(--font-dm-sans)",
                color: "rgba(255,255,255,0.7)",
              }}
              onMouseEnter={(e) =>
                ((e.target as HTMLElement).style.color = "#C97EFF")
              }
              onMouseLeave={(e) =>
                ((e.target as HTMLElement).style.color = "rgba(255,255,255,0.7)")
              }
            >
              Tu ciclo
            </a>
            <a
              href="#fases"
              className="text-sm font-medium transition-colors duration-200"
              style={{
                fontFamily: "var(--font-dm-sans)",
                color: "rgba(255,255,255,0.7)",
              }}
              onMouseEnter={(e) =>
                ((e.target as HTMLElement).style.color = "#C97EFF")
              }
              onMouseLeave={(e) =>
                ((e.target as HTMLElement).style.color = "rgba(255,255,255,0.7)")
              }
            >
              Fases
            </a>
          </div>

          {/* CTA button */}
          <a
            href="/onboarding"
            className="inline-flex items-center gap-1 px-5 py-2.5 rounded-full text-sm font-semibold text-white transition-all duration-200"
            style={{
              fontFamily: "var(--font-dm-sans)",
              backgroundColor: "#FF1FA3",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.background =
                "linear-gradient(135deg, #FF1FA3, #FF6A00)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.background = "#FF1FA3";
            }}
          >
            Empezar gratis <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </nav>
  );
}
