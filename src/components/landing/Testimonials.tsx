import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { SectionHeader } from "./Section";

const items = [
  {
    name: "Priya Menon",
    role: "Senior Product Manager",
    company: "HDFC Bank",
    quote:
      "The AI-Finance track reframed how I approach credit decisioning. I shipped two ML-powered features within six months of starting the program.",
  },
  {
    name: "Arjun Verma",
    role: "Marketing Director",
    company: "Tata CLiQ",
    quote:
      "Weekend classes meant I never paused my career. The IIM alumni network alone has been worth the investment.",
  },
  {
    name: "Neha Iyer",
    role: "Operations Lead",
    company: "Flipkart",
    quote:
      "The supply-chain AI module changed our forecasting playbook. My team now ships demand plans 3x faster.",
  },
  {
    name: "Rahul Kapoor",
    role: "VP, Strategy",
    company: "Aditya Birla Group",
    quote:
      "Real faculty, real practitioners, and real outcomes. The campus immersion was the highlight of my year.",
  },
];

const initials = (n: string) => n.split(" ").map((p) => p[0]).slice(0, 2).join("");

export function Testimonials() {
  return (
    <section className="py-24 sm:py-28 bg-secondary/50">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeader
          eyebrow="Cohort voices"
          title={<>Built and trusted by <span className="text-gradient-gold">working leaders</span>.</>}
        />

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-2 gap-5">
          {items.map((t, i) => (
            <motion.figure
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="rounded-2xl bg-card p-7 sm:p-8 hairline hover:shadow-elegant transition-shadow"
            >
              <Quote className="size-7 text-gold" />
              <blockquote className="mt-4 text-[15px] sm:text-base text-navy-deep/85 leading-relaxed">
                "{t.quote}"
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <div className="grid size-12 place-items-center rounded-full bg-gold-gradient font-display font-semibold text-navy-deep">
                  {initials(t.name)}
                </div>
                <div>
                  <div className="font-semibold text-navy-deep">{t.name}</div>
                  <div className="text-xs text-muted-foreground">
                    {t.role} · <span className="font-medium">{t.company}</span>
                  </div>
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
