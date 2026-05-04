import { motion } from "framer-motion";
import { Terminal, Prompt } from "@/components/Terminal";

export function Hero() {
  return (
    <section id="home" className="relative pt-32 pb-20 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-grid-fade pointer-events-none" />
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center relative">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="font-mono text-xs text-primary mb-4 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            status: available_for_hire
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05]">
            Diaa Eldin <span className="gradient-text">Badawy</span>
          </h1>
          <p className="mt-3 font-mono text-sm sm:text-base text-primary">
            &gt; Junior Network Engineer / IT Support Specialist
          </p>
          <p className="mt-6 text-muted-foreground text-lg max-w-xl">
            Configuring networks, securing traffic, and troubleshooting real-world
            connectivity issues — one packet at a time.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#projects" className="px-5 py-2.5 rounded-md bg-primary text-primary-foreground font-medium hover:opacity-90 transition shadow-lg shadow-primary/20">
              View Projects
            </a>
            <a href="https://drive.google.com/file/d/1YIXRvEAHCgOBvyU4G426TvMxggb7pvG0/view" download className="px-5 py-2.5 rounded-md border border-primary/40 text-primary hover:bg-primary/10 transition font-medium">
              Download CV
            </a>
            <a href="#contact" className="px-5 py-2.5 rounded-md border border-border hover:border-foreground/40 transition font-medium">
              Contact
            </a>
          </div>

          <a
            href="https://linkedin.com/in/diaa-badawy-492366256"
            target="_blank" rel="noreferrer"
            className="mt-6 inline-flex items-center gap-3 px-4 py-3 rounded-md border border-secondary/40 bg-secondary/10 hover:bg-secondary/20 transition group"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-secondary">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
            <div className="font-mono text-xs">
              <div className="text-muted-foreground break-all sm:break-normal">linkedin.com/in/</div>
              <div className="text-foreground group-hover:text-secondary break-all sm:break-normal">diaa-badawy-492366256</div>
            </div>
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <Terminal title="whoami — diaa@netlab">
            <Prompt>whoami</Prompt>
            <span className="text-[var(--terminal-foreground)]">diaa_eldin_badawy{"\n"}</span>
            <Prompt>cat ./profile.yml</Prompt>
            <span className="text-cyan-300">role:</span> Junior Network Engineer{"\n"}
            <span className="text-cyan-300">focus:</span> [routing, switching, security, cloud]{"\n"}
            <span className="text-cyan-300">stack:</span>{"\n"}
            {"  - "}Cisco Packet Tracer{"\n"}
            {"  - "}Wireshark{"\n"}
            {"  - "}AWS (EC2, S3, VPC, IAM){"\n"}
            <span className="text-cyan-300">protocols:</span> [OSPF, TCP/IP, ICMP, DHCP, NAT]{"\n"}
            <span className="text-cyan-300">goal:</span> System / Network Engineering internship{"\n"}
            <Prompt>ping recruiters.io</Prompt>
            <span className="text-green-400">64 bytes from recruiters.io: time=0.42ms ✓</span>
            <span className="inline-block w-2 h-4 bg-primary ml-1 animate-pulse" />
          </Terminal>
        </motion.div>
      </div>
    </section>
  );
}
