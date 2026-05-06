import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Projects } from "@/components/sections/Projects";
import { Process } from "@/components/sections/Process";
import { Certifications } from "@/components/sections/Certifications";
import { Resume } from "@/components/sections/Resume";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";

function Divider() {
  return (
    <div className="max-w-6xl mx-auto px-6">
      <div className="shimmer-line" />
    </div>
  );
}

export default function App() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <Divider />
        <About />
        <Divider />
        <Skills />
        <Divider />
        <Projects />
        <Divider />
        <Process />
        <Divider />
        <Certifications />
        <Divider />
        <Resume />
        <Divider />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
