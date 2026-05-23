import { motion } from "framer-motion";
import { Banknote, Megaphone, Truck, ArrowUpRight } from "lucide-react";
import { SectionHeader } from "./Section";

const tracks = [
  {
    icon: Banknote,
    title: "AI-Powered Finance",
    desc: "Algorithmic decisioning, financial modelling, and predictive risk — augmented with modern AI tooling.",
    tags: ["Quant", "Risk", "FinML"],
  },
  {
    icon: Megaphone,
    title: "AI Marketing Analytics",
    desc: "Attribution, segmentation, generative content workflows, and growth experimentation at scale.",
    tags: ["Growth", "Attribution", "GenAI"],
  },
  {
    icon: Truck,
    title: "AI Operations & Supply Chain",
    desc: "Forecasting, route optimization, and operational AI for resilient, modern enterprises.",
    tags: ["Forecasting", "Optimization", "ML"],
  },
];

export function Curriculum() {
  return (
    <section id="curriculum" className="py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeader
          eyebrow="Specializations"
          title={<>Three tracks. <span className="text-gradient-gold">One unfair advantage.</span></>}
          description="Choose a specialization that mirrors where your industry is heading — not where it is."
        />

        <div className="mt-16 grid md:grid-cols-3 gap-5">
          {tracks.map((t, i) => (
            <motion.a
              key={t.title}
              href="#apply"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group relative rounded-3xl bg-navy-deep p-8 text-white overflow-hidden hover:-translate-y-1 transition-transform duration-300 shadow-elegant"
            >
              <div className="absolute -top-16 -right-16 size-48 rounded-full bg-gold/20 blur-3xl group-hover:bg-gold/30 transition" />
              <div className="relative flex items-start justify-between">
                <div className="grid size-12 place-items-center rounded-xl bg-gold-gradient text-navy-deep">
                  <t.icon className="size-5" />
                </div>
                <ArrowUpRight className="size-5 text-white/40 group-hover:text-gold transition" />
              </div>
              <h3 className="relative mt-6 font-display text-2xl">{t.title}</h3>
              <p className="relative mt-3 text-sm text-white/70 leading-relaxed">{t.desc}</p>
              <div className="relative mt-6 flex flex-wrap gap-2">
                {t.tags.map((tag) => (
                  <span key={tag} className="rounded-full glass px-3 py-1 text-[11px] font-medium tracking-wide">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
