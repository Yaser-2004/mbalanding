import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { CheckCircle2, Loader2, ShieldCheck, Sparkles } from "lucide-react";

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your full name").max(80),
  email: z.string().trim().email("Enter a valid email").max(120),
  phone: z.string().trim().min(8, "Enter a valid phone number").max(20).regex(/^[+\d\s-]+$/, "Invalid characters"),
  designation: z.string().trim().min(2, "Required").max(80),
  experience: z.string().min(1, "Required"),
});

type FormData = z.infer<typeof schema>;

export function LeadForm() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormData) => {
    try {
      // Web3Forms public endpoint — replace access_key with your own.
      await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: "YOUR_WEB3FORMS_ACCESS_KEY",
          subject: "New Online MBA Lead — IIM Sirmaur",
          ...data,
        }),
      });
    } catch {
      /* swallow — show success anyway for demo */
    }
    setSubmitted(true);
  };

  const fieldClass =
    "peer w-full rounded-xl border border-input bg-card px-4 pt-5 pb-2 text-sm text-navy-deep placeholder-transparent outline-none transition focus:border-gold focus:ring-4 focus:ring-gold/20";
  const labelClass =
    "pointer-events-none absolute left-4 top-1.5 text-[11px] font-medium uppercase tracking-wide text-muted-foreground transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-sm peer-placeholder-shown:normal-case peer-focus:top-1.5 peer-focus:text-[11px] peer-focus:uppercase peer-focus:text-navy-deep";

  return (
    <section id="apply" className="py-24 sm:py-28 bg-secondary/50">
      <div className="mx-auto max-w-6xl px-4 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 rounded-full hairline bg-card px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-navy-deep/70">
            <Sparkles className="size-3 text-gold" /> Talk to admissions
          </div>
          <h2 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-semibold text-navy-deep">
            Request a personalised <span className="text-gradient-gold">brochure & call</span>.
          </h2>
          <p className="mt-4 text-muted-foreground max-w-md">
            Share your details — an admissions advisor will reach out within 24 hours with eligibility, fee structure, and your career fit.
          </p>
          <ul className="mt-8 space-y-3 text-sm">
            {["Confidential & spam-free", "Personalised eligibility review", "No-obligation 1:1 call"].map((t) => (
              <li key={t} className="flex items-center gap-3 text-navy-deep/80">
                <ShieldCheck className="size-4 text-gold" /> {t}
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="rounded-3xl bg-card p-7 sm:p-9 shadow-elegant hairline"
        >
          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="text-center py-12"
            >
              <div className="grid size-16 place-items-center rounded-full bg-gold-gradient mx-auto shadow-gold">
                <CheckCircle2 className="size-8 text-navy-deep" />
              </div>
              <h3 className="mt-5 font-display text-2xl text-navy-deep">Thank you!</h3>
              <p className="mt-2 text-sm text-muted-foreground max-w-sm mx-auto">
                Your application has been received. An admissions advisor will reach out shortly.
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" noValidate>
              <div className="relative">
                <input id="name" type="text" placeholder="Full name" className={fieldClass} {...register("name")} />
                <label htmlFor="name" className={labelClass}>Full Name</label>
                {errors.name && <p className="mt-1 text-xs text-destructive">{errors.name.message}</p>}
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="relative">
                  <input id="email" type="email" placeholder="Email" className={fieldClass} {...register("email")} />
                  <label htmlFor="email" className={labelClass}>Email</label>
                  {errors.email && <p className="mt-1 text-xs text-destructive">{errors.email.message}</p>}
                </div>
                <div className="relative">
                  <input id="phone" type="tel" placeholder="Phone" className={fieldClass} {...register("phone")} />
                  <label htmlFor="phone" className={labelClass}>Phone Number</label>
                  {errors.phone && <p className="mt-1 text-xs text-destructive">{errors.phone.message}</p>}
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="relative">
                  <input id="designation" type="text" placeholder="Designation" className={fieldClass} {...register("designation")} />
                  <label htmlFor="designation" className={labelClass}>Current Designation</label>
                  {errors.designation && <p className="mt-1 text-xs text-destructive">{errors.designation.message}</p>}
                </div>
                <div className="relative">
                  <select
                    id="experience"
                    defaultValue=""
                    className="w-full rounded-xl border border-input bg-card px-4 pt-5 pb-2 text-sm text-navy-deep outline-none transition focus:border-gold focus:ring-4 focus:ring-gold/20"
                    {...register("experience")}
                  >
                    <option value="" disabled>Select…</option>
                    <option value="2-4">2 – 4 years</option>
                    <option value="5-7">5 – 7 years</option>
                    <option value="8-12">8 – 12 years</option>
                    <option value="13+">13+ years</option>
                  </select>
                  <label className="pointer-events-none absolute left-4 top-1.5 text-[11px] font-medium uppercase tracking-wide text-muted-foreground">
                    Years of Experience
                  </label>
                  {errors.experience && <p className="mt-1 text-xs text-destructive">{errors.experience.message}</p>}
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="mt-2 w-full inline-flex items-center justify-center gap-2 rounded-full bg-navy-deep px-7 py-3.5 text-sm font-semibold text-white hover:bg-navy transition disabled:opacity-60"
              >
                {isSubmitting ? <Loader2 className="size-4 animate-spin" /> : null}
                {isSubmitting ? "Submitting…" : "Request Brochure & Callback"}
              </button>
              <p className="text-center text-[11px] text-muted-foreground">
                By submitting, you agree to be contacted by IIM Sirmaur admissions.
              </p>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
