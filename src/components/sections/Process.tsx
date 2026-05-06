import { motion } from "framer-motion";
import { SectionHeading } from "@/components/SectionHeading";

const steps = [
  { n: "01", t: "Identify the OSI layer", d: "Narrow the failure domain — physical, data-link, network, transport, or application." },
  { n: "02", t: "Test connectivity", d: "ping, traceroute, mtr — measure reachability and where packets actually die." },
  { n: "03", t: "Check IP configuration", d: "Verify IP, mask, gateway, DNS, DHCP lease — most bugs live here." },
  { n: "04", t: "Verify routing tables", d: "show ip route, OSPF neighbors, next-hop sanity, recursive lookups." },
  { n: "05", t: "Analyze ACL & security", d: "Inspect firewall rules, ACLs, security groups — silently dropped traffic clues." },
];

export function Process() {
  return (
    <section id="process" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          index="04 / process"
          title="How I troubleshoot"
          subtitle="A repeatable, OSI-anchored playbook I run on every connectivity issue."
        />
        <ol className="relative border-l border-primary/30 ml-3 space-y-8">
          {steps.map((s, i) => (
            <motion.li
              key={s.n}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="pl-8 relative group"
            >
              <span className="absolute -left-[14px] top-1 w-7 h-7 rounded-full bg-background border-2 border-primary flex items-center justify-center font-mono text-[10px] text-primary group-hover:bg-primary/10 group-hover:scale-110 group-hover:glow-pulse transition-all">
                {s.n}
              </span>
              <div className="rounded-lg border border-transparent group-hover:border-primary/20 group-hover:bg-primary/5 p-3 -mx-3 -mt-3 transition-colors">
                <h3 className="font-semibold">{s.t}</h3>
                <p className="text-sm text-muted-foreground mt-1 group-hover:text-foreground/80 transition-colors">{s.d}</p>
              </div>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
