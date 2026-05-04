import { motion } from "framer-motion";
import { SectionHeading } from "@/components/SectionHeading";

const stats = [
  { k: "Networking", v: "Routing • Switching • Security" },
  { k: "Cloud", v: "AWS EC2 • S3 • VPC • IAM" },
  { k: "Mindset", v: "OSI-layer troubleshooter" },
  { k: "Goal", v: "Network Engineering Internship" },
];

export function About() {
  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeading index="01 / about" title="About me" />
        <div className="grid lg:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2 space-y-4 text-muted-foreground leading-relaxed"
          >
            <p>
              I am a <span className="text-foreground">Computer Science Graduate and Network Infrastructure trainee</span> with hands-on experience in IP networking, routing, switching, and network troubleshooting.
            </p>
            <p>
              Experienced in designing and simulating network solutions using Cisco tools, with knowledge of <span className="text-primary font-mono">cloud fundamentals and system operations</span>.
            </p>
            <p>
              With a strong interest in communication systems and emerging technologies, I am seeking a <span className="text-foreground">System/Network Engineering Internship</span> to contribute to mission-critical solutions and technical support environments.
            </p>
          </motion.div>
          <div className="grid grid-cols-2 lg:grid-cols-1 gap-3">
            {stats.map((s) => (
              <motion.div
                key={s.k}
                initial={{ opacity: 0, x: 16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="rounded-lg border border-border bg-card/60 p-4"
              >
                <div className="font-mono text-[11px] text-primary uppercase tracking-wider">{s.k}</div>
                <div className="mt-1 text-sm">{s.v}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
