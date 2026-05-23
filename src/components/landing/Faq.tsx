import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import { SectionHeader } from "./Section";

const faqs = [
  { q: "Is the program fully online?", a: "Yes — classes are 100% online, with two optional on-campus immersions at IIM Sirmaur for networking and intensive workshops." },
  { q: "Are classes live?", a: "Every session is live and interactive over weekends. Recordings are available within 24 hours for review." },
  { q: "Will I receive alumni status?", a: "Absolutely. Graduates earn full IIM Sirmaur alumni status and access to the broader IIM alumni network." },
  { q: "Can working professionals manage the workload?", a: "The schedule is engineered for working professionals — Saturday & Sunday classes plus 6–8 hours of self-paced work per week." },
  { q: "Are there campus immersions?", a: "Yes. Two on-campus immersions are scheduled across the 24-month program. They're highly recommended but flexible." },
];

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="py-24 sm:py-28">
      <div className="mx-auto max-w-3xl px-4">
        <SectionHeader eyebrow="FAQ" title={<>Questions, answered.</>} />

        <div className="mt-12 space-y-3">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q} className="rounded-2xl hairline bg-card overflow-hidden">
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="font-medium text-navy-deep">{f.q}</span>
                  <motion.span animate={{ rotate: isOpen ? 45 : 0 }} transition={{ duration: 0.25 }}>
                    <Plus className="size-5 text-navy-deep/60" />
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-5 text-sm text-muted-foreground leading-relaxed">{f.a}</div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
