import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Certificats from "../components/Certificats";
import Education from "../components/Education";
import Experience from "../components/Experience";
import { Analytics } from '@vercel/analytics/react';
import { LanguageProvider } from "../context/LanguageContext";


export default function Home() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-gray-950 text-white">
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Education />
        <Projects />
        <Certificats />
        <Contact />
        <Footer />
        <Analytics />
      </div>
    </LanguageProvider>
  );
}