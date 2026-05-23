import { motion } from "framer-motion";
import { ArrowRight, Download, Sparkles, GraduationCap, Calendar, Radio } from "lucide-react";
import heroImg from '../../assets/hero-mba.jpg'

const badges = [
  { icon: Radio, label: "Live Weekend Classes" },
  { icon: GraduationCap, label: "IIM Alumni Status" },
  { icon: Sparkles, label: "AI-Powered Curriculum" },
  { icon: Calendar, label: "24-Month Program" },
];

export function Hero() {
  return (
    <section id="top" className="relative bg-hero overflow-hidden pt-32 pb-20 lg:pt-40 lg:pb-28">
      {/* decorative grid */}
      <div className="absolute inset-0 opacity-[0.06] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />
      <div className="absolute -top-32 -right-32 size-[480px] rounded-full bg-gold/20 blur-3xl pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 text-white">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-medium tracking-wide text-white/90"
          >
            <span className="size-1.5 rounded-full bg-gold animate-pulse" />
            Admissions Open · Batch 2026
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="mt-6 text-4xl sm:text-5xl lg:text-[68px] leading-[1.05] font-semibold"
          >
            India's First{" "}
            <span className="text-gradient-gold">AI-Native MBA</span>
            <br className="hidden sm:block" /> for Working Professionals.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mt-6 max-w-xl text-lg text-white/75"
          >
            Earn an MBA degree from IIM Sirmaur — without quitting your job.
            Live weekend classes, an AI-powered curriculum, and lifetime IIM alumni status.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-9 flex flex-wrap gap-4"
          >
            <a
              href="#apply"
              className="group inline-flex items-center gap-2 rounded-full bg-gold-gradient px-7 py-3.5 text-sm font-semibold text-navy-deep shadow-gold hover:brightness-105 transition"
            >
              <Download className="size-4" /> Download Brochure
            </a>
            <a
              href="#apply"
              className="group inline-flex items-center gap-2 rounded-full glass px-7 py-3.5 text-sm font-semibold text-white hover:bg-white/15 transition"
            >
              Apply Now <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-2xl"
          >
            {badges.map((b) => (
              <div key={b.label} className="glass rounded-xl p-3 flex items-start gap-2.5">
                <b.icon className="size-4 text-gold mt-0.5 shrink-0" />
                <span className="text-xs sm:text-[13px] font-medium text-white/90 leading-snug">
                  {b.label}
                </span>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="lg:col-span-5 relative"
        >
          <div className="relative rounded-3xl overflow-hidden shadow-elegant ring-1 ring-white/10">
            <img
              src={heroImg}
              alt="Online MBA student attending live AI-powered weekend class"
              className="max-sm:hidden w-full h-[440px] lg:h-[560px] object-cover"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/70 via-transparent to-transparent" />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="max-sm:hidden absolute -bottom-6 -left-4 sm:-left-8 glass-light rounded-2xl p-4 shadow-elegant max-w-[260px]"
          >
            <div className="flex items-center gap-3">
              <div className="grid size-10 place-items-center rounded-xl bg-gold-gradient">
                <GraduationCap className="size-5 text-navy-deep" />
              </div>
              <div>
                <div className="text-xs text-muted-foreground">Cohort placements</div>
                <div className="font-display font-semibold text-navy-deep">95% career uplift</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.75 }}
            className="max-sm:hidden absolute -top-4 -right-3 sm:-right-6 glass rounded-2xl p-3 px-4 text-white"
          >
            <div className="text-[10px] uppercase tracking-widest text-white/60">Next intake</div>
            <div className="font-display text-lg">31 Jul 2026</div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
