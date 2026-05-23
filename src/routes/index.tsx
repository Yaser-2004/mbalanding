import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/landing/Nav";
import { Hero } from "@/components/landing/Hero";
import { Features } from "@/components/landing/Features";
import { WhyMba } from "@/components/landing/WhyMba";
import { Eligibility } from "@/components/landing/Eligibility";
import { Curriculum } from "@/components/landing/Curriculum";
import { Testimonials } from "@/components/landing/Testimonials";
import { Faq } from "@/components/landing/Faq";
import { LeadForm } from "@/components/landing/LeadForm";
import { FinalCta } from "@/components/landing/FinalCta";
import { Footer } from "@/components/landing/Footer";
import { StickyCta } from "@/components/landing/StickyCta";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "IIM Sirmaur Online MBA in Data Science & AI for Working Professionals" },
      {
        name: "description",
        content:
          "India's first AI-native MBA from IIM Sirmaur. Live weekend classes, IIM alumni status, 24-month program. Earn your MBA without quitting your job.",
      },
      { property: "og:title", content: "IIM Sirmaur Online MBA — AI-Native, for Working Professionals" },
      {
        property: "og:description",
        content: "Earn an IIM MBA in Data Science & AI. Live weekend classes. Apply by 31 July 2026.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Nav />
      <main>
        <Hero />
        <Features />
        <WhyMba />
        <Eligibility />
        <Curriculum />
        <Testimonials />
        <Faq />
        <LeadForm />
        <FinalCta />
      </main>
      <Footer />
      <StickyCta />
    </div>
  );
}
