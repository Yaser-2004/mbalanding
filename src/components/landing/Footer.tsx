import { Linkedin, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-navy-deep text-white/80">
      <div className="mx-auto max-w-7xl px-4 py-16 grid lg:grid-cols-12 gap-10">
        <div className="lg:col-span-4">
          <div className="flex items-center gap-2.5">
            <span className="grid size-9 place-items-center rounded-lg bg-gold-gradient">
              <span className="font-display text-navy-deep font-bold text-lg">S</span>
            </span>
            <div className="leading-tight">
              <div className="font-display font-semibold text-base text-white">IIM Sirmaur</div>
              <div className="text-[10px] uppercase tracking-[0.18em] text-white/50">Online MBA · AI</div>
            </div>
          </div>
          <p className="mt-5 text-sm leading-relaxed max-w-sm">
            India's first AI-native MBA for working professionals. Earn an IIM degree without quitting your job.
          </p>
          <div className="mt-6 flex gap-3">
            {[Linkedin, Twitter, Instagram, Youtube].map((Icon, i) => (
              <a key={i} href="#" aria-label="Social" className="grid size-9 place-items-center rounded-lg glass hover:bg-white/15 transition">
                <Icon className="size-4" />
              </a>
            ))}
          </div>
        </div>

        <div className="lg:col-span-2">
          <div className="text-xs uppercase tracking-widest text-white/40 font-semibold">Program</div>
          <ul className="mt-4 space-y-2.5 text-sm">
            {["Overview", "Curriculum", "Faculty", "Fees", "Eligibility"].map((l) => (
              <li key={l}><a href="#features" className="hover:text-gold transition">{l}</a></li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-2">
          <div className="text-xs uppercase tracking-widest text-white/40 font-semibold">Company</div>
          <ul className="mt-4 space-y-2.5 text-sm">
            {["About IIM Sirmaur", "Alumni", "Press", "Careers", "Contact"].map((l) => (
              <li key={l}><a href="#" className="hover:text-gold transition">{l}</a></li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-4">
          <div className="text-xs uppercase tracking-widest text-white/40 font-semibold">Contact</div>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex items-start gap-3"><Phone className="size-4 mt-0.5 text-gold" /> +91 98765 43210</li>
            <li className="flex items-start gap-3"><Mail className="size-4 mt-0.5 text-gold" /> admissions@iim-sirmaur-online.in</li>
            <li className="flex items-start gap-3"><MapPin className="size-4 mt-0.5 text-gold" /> IIM Sirmaur, Himachal Pradesh, India</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-6 flex flex-col sm:flex-row gap-3 items-center justify-between text-xs text-white/50">
          <div>© {year} IIM Sirmaur Online MBA. All rights reserved.</div>
          <div className="flex gap-5">
            <a href="#" className="hover:text-white transition">Privacy Policy</a>
            <a href="#" className="hover:text-white transition">Terms</a>
            <a href="#" className="hover:text-white transition">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
