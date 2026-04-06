import CircuitBackground from "@/components/ui/CircuitBackground";
import Header from "@/components/layout/Header";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Experience from "@/components/sections/Experience";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Learning from "@/components/sections/Learning";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/layout/Footer";

export default function HomePage() {
  return (
    <>
      <CircuitBackground />
      <Header />
      <main id="main-content" className="flex flex-col">
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Learning />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
