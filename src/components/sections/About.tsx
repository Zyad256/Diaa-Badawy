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
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-3 order-first relative"
          >
            <div className="aspect-square sm:aspect-[4/3] lg:aspect-square w-full sm:w-2/3 lg:w-full mx-auto rounded-2xl overflow-hidden border border-border bg-card/60 card-glow p-1 relative group">
              <div className="absolute inset-0 bg-primary/10 rounded-2xl" />
              <img 
                src={`${import.meta.env.BASE_URL}diaa.jpeg`} 
                alt="Diaa Eldin Badawy" 
                className="w-full h-full object-cover rounded-xl relative z-10 grayscale-[50%] group-hover:grayscale-0 transition-all duration-500" 
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-6 space-y-4 text-muted-foreground leading-relaxed"
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
          <div className="lg:col-span-3 grid grid-cols-2 lg:grid-cols-1 gap-3">
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
