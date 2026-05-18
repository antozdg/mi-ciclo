"use client";

export default function BannerCTA() {
  return (
    <section
      id="empezar"
      className="px-6 lg:px-8 py-20 lg:py-28"
      style={{ backgroundColor: "#FF1FA3" }}
    >
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center gap-8">
        <h2
          className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight"
          style={{
            fontFamily: "var(--font-syne)",
            fontWeight: 800,
            color: "#FFFFFF",
          }}
        >
          You can do it all — solo necesitás que tu mente y tus{" "}
          <span style={{ color: "#FFE94D" }}>hormonas</span>{" "}
          estén de acuerdo.
        </h2>

        <a
          href="#"
          className="inline-flex items-center gap-2 px-10 py-5 rounded-full text-base font-bold transition-all duration-200"
          style={{
            fontFamily: "var(--font-dm-sans)",
            fontWeight: 700,
            backgroundColor: "#FFE94D",
            color: "#3D0845",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLElement).style.filter = "brightness(105%)";
            (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.filter = "brightness(100%)";
            (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
          }}
        >
          Empezar gratis <span aria-hidden="true">→</span>
        </a>
      </div>
    </section>
  );
}
