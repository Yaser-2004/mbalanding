import { motion } from "framer-motion";
import { GraduationCap, CalendarClock, PhoneCall } from "lucide-react";

const items = [
  { icon: GraduationCap, label: "Eligibility", value: "Bachelor's Degree (50%+)", sub: "Min. 2 years work experience" },
  { icon: CalendarClock, label: "Application Deadline", value: "31st July 2026", sub: "Limited seats. Rolling admissions." },
  { icon: PhoneCall, label: "Admissions Helpline", value: "+91 98765 43210", sub: "Mon – Sat · 10 AM to 7 PM" },
];

export function Eligibility() {
  return (
    <section id="dates" className="py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl bg-hero p-8 sm:p-12 text-white shadow-elegant"
        >
          <div className="absolute -top-24 -right-24 size-[360px] rounded-full bg-gold/20 blur-3xl" />
          <div className="relative grid lg:grid-cols-3 gap-6 lg:gap-8">
            {items.map((it, i) => (
              <motion.div
                key={it.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="glass rounded-2xl p-6"
              >
                <div className="grid size-11 place-items-center rounded-xl bg-gold-gradient text-navy-deep">
                  <it.icon className="size-5" />
                </div>
                <div className="mt-4 text-[11px] uppercase tracking-[0.2em] text-white/60">{it.label}</div>
                <div className="mt-1 font-display text-2xl">{it.value}</div>
                <div className="mt-1 text-sm text-white/70">{it.sub}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
