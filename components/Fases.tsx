const fases = [
  {
    numero: "01",
    nombre: "Menstrual",
    dias: "Días 1–5",
    tag: "Introspección",
    descripcion:
      "Tu cuerpo pide descanso y autoobservación. Ideal para reflexionar, planear y priorizar sin presión.",
    bg: "#2A0638",
    tagColor: "#C97EFF",
    tagBg: "rgba(201, 126, 255, 0.15)",
    textColor: "#C97EFF",
    bodyColor: "#FFB3EC",
    accent: "#C97EFF",
  },
  {
    numero: "02",
    nombre: "Folicular",
    dias: "Días 6–13",
    tag: "Energía nueva",
    descripcion:
      "Subida de estrógenos = más energía, claridad mental y predisposición al aprendizaje y las conexiones.",
    bg: "#5E0E75",
    tagColor: "#FFB3EC",
    tagBg: "rgba(255, 179, 236, 0.15)",
    textColor: "#FFFFFF",
    bodyColor: "#FFB3EC",
    accent: "#FFB3EC",
  },
  {
    numero: "03",
    nombre: "Ovulatoria",
    dias: "Días 14–16",
    tag: "Pico de poder",
    descripcion:
      "Tu punto más alto. Estrógeno y testosterona en su pico — comunicación, carisma y rendimiento máximo.",
    bg: "#FF1FA3",
    tagColor: "#FFE94D",
    tagBg: "rgba(255, 233, 77, 0.2)",
    textColor: "#FFFFFF",
    bodyColor: "rgba(255,255,255,0.85)",
    accent: "#FFE94D",
  },
  {
    numero: "04",
    nombre: "Lútea",
    dias: "Días 17–28",
    tag: "Calma activa",
    descripcion:
      "Progesterona al mando. Atención al detalle, trabajo profundo y autocuidado. Tu fase más productiva en soledad.",
    bg: "#FF6A00",
    tagColor: "#FFE94D",
    tagBg: "rgba(255, 233, 77, 0.2)",
    textColor: "#FFFFFF",
    bodyColor: "rgba(255,255,255,0.85)",
    accent: "#FFE94D",
  },
];

export default function Fases() {
  return (
    <section
      id="fases"
      className="px-6 lg:px-8 py-20 lg:py-28"
      style={{ backgroundColor: "#3D0845" }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="mb-12 lg:mb-16">
          <p
            className="text-xs font-semibold uppercase tracking-widest mb-4"
            style={{
              fontFamily: "var(--font-dm-sans)",
              color: "rgba(255,255,255,0.4)",
            }}
          >
            Las 4 fases del ciclo
          </p>
          <h2
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight"
            style={{
              fontFamily: "var(--font-syne)",
              fontWeight: 800,
              color: "#FFFFFF",
            }}
          >
            Cada semana,{" "}
            <span style={{ color: "#C97EFF" }}>una versión</span>
            <br className="hidden sm:block" /> distinta de vos.
          </h2>
        </div>

        {/* Grid 2x2 on mobile, 4 columns on desktop */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {fases.map((fase) => (
            <div
              key={fase.numero}
              className="relative flex flex-col gap-4 p-6 lg:p-8 rounded-2xl lg:rounded-3xl overflow-hidden"
              style={{ backgroundColor: fase.bg }}
            >
              {/* Number */}
              <span
                className="text-6xl lg:text-7xl font-extrabold leading-none opacity-20 select-none absolute top-4 right-6"
                style={{
                  fontFamily: "var(--font-syne)",
                  fontWeight: 800,
                  color: fase.accent,
                }}
              >
                {fase.numero}
              </span>

              {/* Tag */}
              <div
                className="inline-flex items-center self-start px-3 py-1.5 rounded-full text-xs font-semibold"
                style={{
                  fontFamily: "var(--font-dm-sans)",
                  color: fase.tagColor,
                  backgroundColor: fase.tagBg,
                  border: `1px solid ${fase.tagColor}40`,
                }}
              >
                {fase.tag}
              </div>

              {/* Content */}
              <div className="flex flex-col gap-2 mt-auto">
                <p
                  className="text-xs font-medium"
                  style={{
                    fontFamily: "var(--font-dm-sans)",
                    color: fase.bodyColor,
                    opacity: 0.6,
                  }}
                >
                  {fase.dias}
                </p>
                <h3
                  className="text-xl lg:text-2xl font-bold"
                  style={{
                    fontFamily: "var(--font-syne)",
                    fontWeight: 800,
                    color: fase.textColor,
                  }}
                >
                  {fase.nombre}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{
                    fontFamily: "var(--font-dm-sans)",
                    color: fase.bodyColor,
                  }}
                >
                  {fase.descripcion}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
