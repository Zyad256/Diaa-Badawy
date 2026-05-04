import { SectionHeading } from "@/components/SectionHeading";
import { motion } from "framer-motion";

const items = [
  { y: "2024 — Present", t: "Self-directed Network Labs", d: "Building Cisco Packet Tracer + AWS labs covering OSPF, ACLs, VLAN trunking, VPC design." },
  { y: "2023 — 2024", t: "B.Sc. Computer Science", d: "Graduated with focus on networks, operating systems, and distributed systems." },
  { y: "Targeting", t: "CCNA — in progress", d: "Preparing for Cisco Certified Network Associate certification." },
];

export function Resume() {
  return (
    <section id="resume" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeading index="05 / resume" title="Resume" subtitle="Quick snapshot — full PDF available below." />
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-4">
            {items.map((it, i) => (
              <motion.div
                key={it.t}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="rounded-lg border border-border bg-card/60 p-5"
              >
                <div className="font-mono text-[11px] text-primary">{it.y}</div>
                <h3 className="font-semibold mt-1">{it.t}</h3>
                <p className="text-sm text-muted-foreground mt-1">{it.d}</p>
              </motion.div>
            ))}
          </div>
          <div className="rounded-xl border border-border bg-card/60 p-6 flex flex-col items-center justify-center text-center">
            <div className="w-20 h-24 rounded border border-primary/40 bg-background/60 mb-4 flex flex-col items-center justify-center font-mono text-[10px] text-primary">
              <div className="w-12 h-1 bg-primary/40 mb-1 rounded" />
              <div className="w-10 h-1 bg-muted-foreground/30 mb-1 rounded" />
              <div className="w-12 h-1 bg-muted-foreground/30 mb-1 rounded" />
              <div className="w-8 h-1 bg-muted-foreground/30 rounded" />
              <span className="mt-2">CV.pdf</span>
            </div>
            <h3 className="font-semibold">Full CV</h3>
            <p className="text-xs text-muted-foreground mt-1 mb-4">PDF · 1 page · ATS-friendly</p>
            <a
              href="https://drive.google.com/file/d/1YIXRvEAHCgOBvyU4G426TvMxggb7pvG0/view"
              download
              className="px-4 py-2 rounded-md bg-primary text-primary-foreground font-medium text-sm hover:opacity-90 transition w-full"
            >
              Download CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
