import { motion } from "framer-motion";
import { Briefcase, Cpu, Users, TrendingUp, Compass, Clock } from "lucide-react";
import { SectionHeader } from "./Section";

const points = [
  { icon: Briefcase, title: "Learn without quitting your job", desc: "Designed around the working professional — zero career interruption." },
  { icon: Cpu, title: "Industry-aligned AI curriculum", desc: "Built with practitioners. Updated continuously with what hiring managers want." },
  { icon: Compass, title: "Leadership · Management · AI", desc: "Strategy and leadership grounding fused with applied AI fluency." },
  { icon: Users, title: "Networking that compounds", desc: "Cohort of mid-career leaders, faculty mentors, and the IIM alumni network." },
  { icon: TrendingUp, title: "Career acceleration", desc: "Promotion-ready outcomes. Average uplift seen across early cohorts: 40%+." },
  { icon: Clock, title: "Weekend live classes", desc: "Saturdays & Sundays. Live, interactive, and recorded for flexibility." },
];

export function WhyMba() {
  return (
    <section id="why" className="py-24 sm:py-28 bg-secondary/50 relative overflow-hidden">
      <div className="absolute -top-20 right-0 size-[400px] rounded-full bg-gold/10 blur-3xl pointer-events-none" />
      <div className="mx-auto max-w-7xl px-4 relative">
        <SectionHeader
          eyebrow="Why this MBA"
          title={<>Built for leaders who refuse to <span className="text-gradient-gold">choose</span>.</>}
          description="Career, family, ambition — keep all three. Here's how we make that possible."
        />

        <div className="mt-16 grid lg:grid-cols-2 gap-5">
          {points.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, x: i % 2 === 0 ? -16 : 16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="flex gap-5 rounded-2xl bg-card p-6 sm:p-7 hairline hover:shadow-elegant transition-shadow"
            >
              <div className="grid size-12 shrink-0 place-items-center rounded-xl bg-gold-gradient text-navy-deep shadow-gold">
                <p.icon className="size-5" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-navy-deep">{p.title}</h3>
                <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
