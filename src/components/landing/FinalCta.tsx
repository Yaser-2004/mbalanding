import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function FinalCta() {
  return (
    <section className="py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden rounded-3xl bg-hero text-white px-6 sm:px-12 py-16 sm:py-20 text-center shadow-elegant"
        >
          <div className="absolute inset-0 opacity-[0.06] pointer-events-none"
            style={{
              backgroundImage:
                "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
              backgroundSize: "48px 48px",
            }}
          />
          <div className="absolute -top-20 left-1/2 -translate-x-1/2 size-[500px] rounded-full bg-gold/15 blur-3xl pointer-events-none" />
          <div className="relative max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-semibold leading-[1.05]">
              Transform your career with{" "}
              <span className="text-gradient-gold">AI-Powered Leadership.</span>
            </h2>
            <p className="mt-5 text-white/70 text-base sm:text-lg max-w-xl mx-auto">
              The Batch 2026 cohort closes 31 July. Secure your seat alongside India's most ambitious leaders.
            </p>
            <div className="mt-9 flex flex-wrap gap-4 justify-center">
              <a
                href="#apply"
                className="inline-flex items-center gap-2 rounded-full bg-gold-gradient px-8 py-4 text-sm font-semibold text-navy-deep shadow-gold hover:brightness-105 transition"
              >
                Apply Now <ArrowRight className="size-4" />
              </a>
              <a
                href="#apply"
                className="inline-flex items-center rounded-full glass px-8 py-4 text-sm font-semibold hover:bg-white/15 transition"
              >
                Talk to Admissions
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
