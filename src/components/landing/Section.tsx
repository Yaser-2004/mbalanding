import { motion } from "framer-motion";
import type { ReactNode } from "react";

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "center",
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: string;
  align?: "center" | "left";
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6 }}
      className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : ""}`}
    >
      {eyebrow && (
        <div className="inline-flex items-center gap-2 rounded-full hairline bg-secondary px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-navy-deep/70">
          <span className="size-1 rounded-full bg-gold" />
          {eyebrow}
        </div>
      )}
      <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-semibold text-navy-deep">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base sm:text-lg text-muted-foreground">{description}</p>
      )}
    </motion.div>
  );
}
