import { motion } from "framer-motion";
import { SectionHeading } from "@/components/SectionHeading";

export function Certifications() {
  const certs = [
    {
      id: "ccna",
      title: "Cloud Services Management",
      status: "Completed",
      issuer: "NTI",
      date: "2026",
      image: "/Certificates/1.png",
      progress: 100,
    },
    {
      id: "cert1",
      title: "Network Infrastructure",
      status: "Completed",
      issuer: "NTI",
      date: "2025",
      image: "/Certificates/2.png",
      progress: 100,
    },
    {
      id: "cert2",
      title: "Generative AI",
      status: "Completed",
      issuer: "Linkedin",
      date: "2023",
      image: "/Certificates/3.png",
      progress: 100,
    },
  ];

  return (
    <section id="certifications" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          index="05 / certifications"
          title="Certifications & Badges"
          subtitle="Continuous learning and formal validation of networking skills."
        />
        <div className="grid md:grid-cols-3 gap-6">
          {certs.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="rounded-2xl border border-border bg-card/40 overflow-hidden flex flex-col hover:border-primary/50 transition-colors"
            >
              <div className="p-6 flex-1 flex flex-col items-center text-center">
                {cert.image ? (
                  <div className="w-full aspect-[4/3] rounded-lg overflow-hidden bg-background mb-6 border border-border/50">
                    <img
                      src={`${import.meta.env.BASE_URL}${cert.image.replace(/^\//, '')}`}
                      alt={cert.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ) : (
                  <div className="w-32 h-32 rounded-full border-4 border-dashed border-primary/40 bg-primary/5 flex items-center justify-center mb-6 relative">
                    <svg
                      width="48"
                      height="48"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-primary/60"
                    >
                      <circle cx="12" cy="8" r="6" />
                      <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-full h-full rounded-full animate-spin-slow bg-gradient-to-tr from-transparent via-transparent to-primary/20" />
                    </div>
                  </div>
                )}

                <h3 className="font-bold text-lg leading-tight mb-2">
                  {cert.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {cert.issuer} • {cert.date}
                </p>

                <div className="w-full mt-auto">
                  <div className="flex justify-between items-center mb-2 font-mono text-[10px] uppercase tracking-wider">
                    <span
                      className={
                        cert.status === "Completed"
                          ? "text-green-400"
                          : "text-primary"
                      }
                    >
                      {cert.status}
                    </span>
                    <span className="text-muted-foreground">
                      {cert.progress}%
                    </span>
                  </div>
                  <div className="h-1.5 w-full bg-background rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${cert.progress}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                      className={`h-full ${
                        cert.status === "Completed"
                          ? "bg-green-400"
                          : "bg-primary"
                      }`}
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
