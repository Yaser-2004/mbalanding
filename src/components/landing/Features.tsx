import { motion } from "framer-motion";
import { Radio, GraduationCap, CalendarRange, Brain, LineChart, Settings2 } from "lucide-react";
import { SectionHeader } from "./Section";

const features = [
  {
    icon: Radio,
    title: "100% Live Online Weekend Classes",
    desc: "Real-time learning with IIM faculty — every Saturday & Sunday. Recorded for review.",
  },
  {
    icon: GraduationCap,
    title: "Direct IIM Alumni Status",
    desc: "Join the lifelong IIM Sirmaur alumni network upon graduation.",
  },
  {
    icon: CalendarRange,
    title: "24-Month Duration",
    desc: "Two on-campus immersions to bond with peers and faculty in person.",
  },
  {
    icon: Brain,
    title: "AI-Powered Finance",
    desc: "Quant modeling, algorithmic decisioning, and financial AI use-cases.",
  },
  {
    icon: LineChart,
    title: "AI Marketing Analytics",
    desc: "Modern attribution, GTM intelligence, and growth modelling with AI.",
  },
  {
    icon: Settings2,
    title: "AI Operations",
    desc: "Supply chain optimisation and operational excellence with ML.",
  },
];

export function Features() {
  return (
    <section id="features" className="py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeader
          eyebrow="The Program"
          title={<>A flagship MBA, engineered for the <span className="text-gradient-gold">AI era</span>.</>}
          description="Six pillars that make this the most forward-looking online MBA in India."
        />

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group relative rounded-2xl bg-card hairline p-7 hover:shadow-elegant hover:-translate-y-1 transition-all duration-300"
            >
              <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-gold/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="grid size-12 place-items-center rounded-xl bg-navy-deep text-white group-hover:bg-gold-gradient transition-colors">
                <f.icon className="size-5" />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-navy-deep">{f.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
