import { motion } from "framer-motion";

export function SectionHeading({
  index,
  title,
  subtitle,
}: {
  index: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5 }}
      className="mb-10"
    >
      <div className="font-mono text-xs text-primary mb-2">
        <span className="text-muted-foreground">// </span>
        {index}
      </div>
      <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-muted-foreground max-w-2xl">{subtitle}</p>
      )}
      <div className="mt-4 h-px w-24 bg-gradient-to-r from-primary to-transparent" />
    </motion.div>
  );
}
