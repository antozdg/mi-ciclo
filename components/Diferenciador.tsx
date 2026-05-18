export default function Diferenciador() {
  return (
    <section
      id="tu-ciclo"
      className="px-6 lg:px-8 py-20 lg:py-28"
      style={{ backgroundColor: "#FFE94D" }}
    >
      <div className="max-w-4xl mx-auto flex flex-col gap-8">
        {/* Label */}
        <p
          className="text-xs font-semibold uppercase tracking-widest"
          style={{
            fontFamily: "var(--font-dm-sans)",
            color: "#8B6800",
          }}
        >
          Por qué Mi Ciclo es diferente
        </p>

        {/* Headline */}
        <h2
          className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight"
          style={{
            fontFamily: "var(--font-syne)",
            fontWeight: 800,
            color: "#3D0845",
          }}
        >
          Sin{" "}
          <span style={{ color: "#FF1FA3" }}>presión</span>{" "}
          de completar datos todos los días.
        </h2>

        {/* Body text */}
        <p
          className="text-lg lg:text-xl leading-relaxed max-w-2xl"
          style={{
            fontFamily: "var(--font-dm-sans)",
            color: "#5A3800",
          }}
        >
          La mayoría de las apps te piden que registres cómo te sentís cada
          día. Nosotras no. Mi Ciclo funciona sola — basada en lo que tu ciclo
          hace naturalmente. Si querés agregar más datos, podés. Pero nunca es
          obligatorio.
        </p>

        {/* Pills */}
        <div className="flex flex-wrap gap-3 mt-2">
          {/* Pill plum/lavender */}
          <div
            className="inline-flex items-center px-5 py-3 rounded-full text-sm font-semibold"
            style={{
              fontFamily: "var(--font-dm-sans)",
              backgroundColor: "#3D0845",
              color: "#C97EFF",
            }}
          >
            Solo tus períodos
          </div>
          {/* Pill magenta/white */}
          <div
            className="inline-flex items-center px-5 py-3 rounded-full text-sm font-semibold"
            style={{
              fontFamily: "var(--font-dm-sans)",
              backgroundColor: "#FF1FA3",
              color: "#FFFFFF",
            }}
          >
            La app hace el resto
          </div>
          {/* Pill orange/white */}
          <div
            className="inline-flex items-center px-5 py-3 rounded-full text-sm font-semibold"
            style={{
              fontFamily: "var(--font-dm-sans)",
              backgroundColor: "#FF6A00",
              color: "#FFFFFF",
            }}
          >
            Personalizable cuando quieras
          </div>
        </div>
      </div>
    </section>
  );
}
