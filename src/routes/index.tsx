import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Projects } from "@/components/sections/Projects";
import { Process } from "@/components/sections/Process";
import { Resume } from "@/components/sections/Resume";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Diaa Eldin Badawy — Junior Network Engineer" },
      {
        name: "description",
        content:
          "Portfolio of Diaa Eldin Badawy, Junior Network Engineer & IT Support Specialist — routing, switching, OSPF, ACLs, AWS cloud and hands-on troubleshooting projects.",
      },
      { property: "og:title", content: "Diaa Eldin Badawy — Junior Network Engineer" },
      {
        property: "og:description",
        content: "Networking-focused portfolio: OSPF, ACLs, VLANs, AWS VPC and real troubleshooting labs.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Process />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
