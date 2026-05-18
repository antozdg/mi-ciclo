import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Diferenciador from "@/components/Diferenciador";
import Fases from "@/components/Fases";
import Features from "@/components/Features";
import BannerCTA from "@/components/BannerCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Diferenciador />
        <Fases />
        <Features />
        <BannerCTA />
      </main>
      <Footer />
    </>
  );
}
