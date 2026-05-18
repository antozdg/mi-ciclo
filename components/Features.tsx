const features = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
      </svg>
    ),
    titulo: "Hormonas explicadas",
    descripcion:
      "Entendé qué está pasando en tu cuerpo en cada fase: estrógeno, progesterona, testosterona y cortisol — sin jerga médica.",
    accent: "#FF1FA3",
    accentBg: "rgba(255, 31, 163, 0.08)",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2z"/>
        <path d="M12 6v6l4 2"/>
      </svg>
    ),
    titulo: "Nutrición por fase",
    descripcion:
      "Qué comer — y qué evitar — según el momento del mes. Recomendaciones personalizadas que trabajan con tu biología, no contra ella.",
    accent: "#FF6A00",
    accentBg: "rgba(255, 106, 0, 0.08)",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="5" r="3"/>
        <path d="M6.5 8a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2v-8a2 2 0 0 0-2-2"/>
        <path d="M12 8v8M8 12l4 4 4-4"/>
      </svg>
    ),
    titulo: "Ejercicio inteligente",
    descripcion:
      "¿Hoy es día de hiit o de yoga? Tu ciclo sabe. Guías de entrenamiento adaptadas a tu energía real de cada semana.",
    accent: "#C97EFF",
    accentBg: "rgba(201, 126, 255, 0.08)",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <path d="M8 14s1.5 2 4 2 4-2 4-2"/>
        <line x1="9" y1="9" x2="9.01" y2="9"/>
        <line x1="15" y1="9" x2="15.01" y2="9"/>
      </svg>
    ),
    titulo: "Impacto emocional",
    descripcion:
      "Tus emociones no son aleatorias. Entendé cuándo y por qué sentís lo que sentís — y cómo navegar esas semanas con más gracia.",
    accent: "#FF1FA3",
    accentBg: "rgba(255, 31, 163, 0.08)",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
      </svg>
    ),
    titulo: "Fertilidad",
    descripcion:
      "Tu ventana fértil, día a día. Para las que buscan quedar embarazadas — o simplemente quieren conocer su cuerpo mejor.",
    accent: "#FFE94D",
    accentBg: "rgba(255, 233, 77, 0.08)",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
    titulo: "Suplementos & vitaminas",
    descripcion:
      "Qué tomar y en qué momento del ciclo para apoyar tu bienestar. Hierro, magnesio, omega-3 — explicados para vos.",
    accent: "#4CAF50",
    accentBg: "rgba(76, 175, 80, 0.08)",
  },
];

export default function Features() {
  return (
    <section
      className="px-6 lg:px-8 py-20 lg:py-28"
      style={{ backgroundColor: "#F9F0FF" }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="mb-12 lg:mb-16 text-center">
          <h2
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight"
            style={{
              fontFamily: "var(--font-syne)",
              fontWeight: 800,
              color: "#3D0845",
            }}
          >
            Lo que Mi Ciclo{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #FF1FA3, #FF6A00)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              hace por vos.
            </span>
          </h2>
        </div>

        {/* Grid: 1 col mobile, 2 col tablet, 3 col desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {features.map((feature) => (
            <div
              key={feature.titulo}
              className="flex flex-col gap-4 p-6 lg:p-8 rounded-2xl lg:rounded-3xl"
              style={{ backgroundColor: "#FFFFFF" }}
            >
              {/* Icon */}
              <div
                className="w-12 h-12 flex items-center justify-center rounded-xl"
                style={{
                  color: feature.accent,
                  backgroundColor: feature.accentBg,
                }}
              >
                {feature.icon}
              </div>

              {/* TODO: Feature illustration/mockup image — 16:9 or square, goes here above title */}

              {/* Content */}
              <div className="flex flex-col gap-2">
                <h3
                  className="text-lg font-bold"
                  style={{
                    fontFamily: "var(--font-syne)",
                    fontWeight: 800,
                    color: "#3D0845",
                  }}
                >
                  {feature.titulo}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{
                    fontFamily: "var(--font-dm-sans)",
                    color: "#5A3800",
                  }}
                >
                  {feature.descripcion}
                </p>
              </div>

              {/* Accent line */}
              <div
                className="h-0.5 w-10 rounded-full mt-auto"
                style={{ backgroundColor: feature.accent }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
