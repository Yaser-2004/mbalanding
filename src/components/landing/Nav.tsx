import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const links = [
  { href: "#features", label: "Program" },
  { href: "#why", label: "Why IIM" },
  { href: "#curriculum", label: "Curriculum" },
  { href: "#dates", label: "Dates" },
  { href: "#faq", label: "FAQ" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "py-2" : "py-4"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4">
        <div
          className={`flex items-center justify-between rounded-2xl px-4 sm:px-6 py-3 transition-all ${
            scrolled ? "glass-light shadow-elegant" : "bg-transparent"
          }`}
        >
          <a href="#top" className="flex items-center gap-2.5">
            <span className="grid size-9 place-items-center rounded-lg bg-gold-gradient shadow-gold">
              <span className="font-display text-navy-deep font-bold text-lg">S</span>
            </span>
            <div className="leading-tight">
              <div className={`font-display font-semibold text-base ${scrolled ? "text-navy-deep" : "text-white"}`}>
                IIM Sirmaur
              </div>
              <div className={`text-[10px] uppercase tracking-[0.18em] ${scrolled ? "text-muted-foreground" : "text-white/70"}`}>
                Online MBA · AI
              </div>
            </div>
          </a>

          <nav className="hidden lg:flex items-center gap-8">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className={`text-sm font-medium transition-colors ${
                  scrolled ? "text-navy-deep/80 hover:text-navy-deep" : "text-white/80 hover:text-white"
                }`}
              >
                {l.label}
              </a>
            ))}
          </nav>

          <a
            href="#apply"
            className="hidden sm:inline-flex items-center rounded-full bg-gold-gradient px-5 py-2.5 text-sm font-semibold text-navy-deep shadow-gold hover:brightness-105 transition"
          >
            Apply Now
          </a>
        </div>
      </div>
    </motion.header>
  );
}
