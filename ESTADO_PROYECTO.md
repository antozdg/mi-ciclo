# ESTADO — Mi Ciclo Landing Page
> Última actualización: 18 mayo 2026

---

## QUÉ ES

Landing page para **Mi Ciclo** — app web de seguimiento del ciclo menstrual y hormonal.

Stack: Next.js 15 (app router) + Tailwind CSS + TypeScript. Deploy en Vercel.

---

## ESTADO ACTUAL

**Fase:** Estructura base completa. Listo para instalar dependencias y testear localmente.

---

## QUÉ ESTÁ HECHO

### Archivos de configuración
- `package.json` — Next.js 15.3.2 + React 19 + Tailwind 3.4
- `next.config.ts`
- `tailwind.config.ts` — colores de marca configurados como tokens
- `tsconfig.json`
- `postcss.config.js`
- `.eslintrc.json`
- `.gitignore`

### App shell
- `app/globals.css` — CSS variables de marca, imports Tailwind
- `app/layout.tsx` — Google Fonts (Syne 700/800 + DM Sans 400/500/600), metadata SEO

### Componentes (todos en `/components/`)
- `Nav.tsx` — sticky, scroll-aware, logo mi.ciclo, links, CTA magenta
- `Hero.tsx` — pills apiladas estilo Bifirst, subtitle, botones, tag
- `Diferenciador.tsx` — fondo amarillo, headline con "presión" en magenta, pills
- `Fases.tsx` — grid 2x2 mobile / 4 col desktop, 4 cards con colores de fase
- `Features.tsx` — grid 1→2→3 col, 6 cards con iconos SVG inline
- `BannerCTA.tsx` — fondo magenta, headline con "hormonas" en amarillo, botón amarillo
- `Footer.tsx` — fondo plum-deep, logo, links, copyright

### Entry point
- `app/page.tsx` — ensambla todos los componentes en orden

---

## DECISIONES TOMADAS

- **Componentes separados** (no todo en page.tsx) para facilitar edición sección por sección.
- **Inline styles + Tailwind mixto** — los colores de marca exactos van en style={{ }} para garantizar precisión. Tailwind se usa para layout y espaciado.
- **No hay imágenes todavía** — hay `{/* TODO: App mockup image */}` en Hero y Features como placeholder.
- **Iconos SVG inline** en Features — sin dependencia de librerías de iconos.
- **hover states con onMouseEnter/Leave** — para gradientes en botones que Tailwind no soporta nativamente.

---

## PRÓXIMOS PASOS

1. **Instalar y testear localmente:**
   ```bash
   cd /Users/antonella/Desktop/CLAUDE/05_MiCiclo
   npm install
   npm run dev
   ```

2. **Revisar diseño en browser** y ajustar lo que haga falta sección por sección.

3. **Agregar mockups/imágenes** cuando estén disponibles (ver comentarios TODO en código).

4. **Deploy en Vercel:**
   - Hacer push del proyecto a GitHub
   - Conectar repo en vercel.com
   - Deploy automático

---

## AJUSTES PENDIENTES (para próxima sesión)

- [ ] Revisar pills del hero en mobile (tamaño de texto, wrap)
- [ ] Revisar responsividad de la sección Fases en tablet
- [ ] Agregar animaciones de entrada (opcional, fase siguiente)
- [ ] Definir si va a haber formulario de waitlist / email capture en el CTA

---

## PALETA DE COLORES

| Token | Hex |
|-------|-----|
| plum | #3D0845 |
| plum-deep | #2A0638 |
| magenta | #FF1FA3 |
| orange | #FF6A00 |
| yellow | #FFE94D |
| lavender | #C97EFF |
| pink-light | #FFB3EC |

---

## ESTRUCTURA DE ARCHIVOS

```
05_MiCiclo/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── Nav.tsx
│   ├── Hero.tsx
│   ├── Diferenciador.tsx
│   ├── Fases.tsx
│   ├── Features.tsx
│   ├── BannerCTA.tsx
│   └── Footer.tsx
├── public/
├── .eslintrc.json
├── .gitignore
├── ESTADO_PROYECTO.md
├── next.config.ts
├── package.json
├── postcss.config.js
├── tailwind.config.ts
└── tsconfig.json
```
