import type { Metadata } from "next";
import { Syne, DM_Sans } from "next/font/google";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  weight: ["700", "800"],
  variable: "--font-syne",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mi Ciclo — Tu ciclo. Tu poder.",
  description:
    "Entendé la predisposición que tiene tu cuerpo en cada momento del mes. Tu energía, tus emociones, tu bienestar. Solo cargá tus períodos y la app hace el resto.",
  openGraph: {
    title: "Mi Ciclo — Tu ciclo. Tu poder.",
    description:
      "You can do it all — solo necesitás que tu mente y tus hormonas estén de acuerdo.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${syne.variable} ${dmSans.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
