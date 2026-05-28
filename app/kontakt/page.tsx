import type { Metadata } from "next";
import { FadeIn } from "@/components/fade-in";
import { ContactForm, ContactInfo } from "@/components/contact-form";

export const metadata: Metadata = {
  title: "Kontakt — MulaGroup",
  description:
    "Skontaktuj się z MulaGroup. Napisz na info@mulagroup.eu lub zadzwoń 666 337 001.",
};

export default function ContactPage() {
  return (
    <div className="py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <div className="text-center max-w-2xl mx-auto mb-14">
              <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
                Kontakt
              </h1>
              <p className="text-muted-foreground text-lg">
                Masz pytanie lub chcesz rozpocząć projekt? Napisz do nas —
                odpowiemy najszybciej jak to możliwe.
              </p>
            </div>
          </FadeIn>

          <div className="grid gap-10 lg:grid-cols-3">
            <FadeIn delay={0.1} className="lg:col-span-2">
              <div className="rounded-2xl border border-border bg-card p-6 md:p-8">
                <ContactForm />
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <ContactInfo />
            </FadeIn>
          </div>
        </div>
      </div>
    </div>
  );
}
