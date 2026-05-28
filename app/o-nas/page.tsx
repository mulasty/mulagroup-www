import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { FadeIn } from "@/components/fade-in";
import { company, partner } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { ExternalLink, Mail, Phone, Code, Shield, Bot, Rocket } from "lucide-react";

export const metadata: Metadata = {
  title: "O nas — MulaGroup",
  description:
    "Poznaj MulaGroup. Tworzymy strony www, wdrażamy SEO i automatyzację. Współpracujemy z KrXProduce.",
};

export default function AboutPage() {
  return (
    <div className="py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn>
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-6 text-center">
              O nas
            </h1>
          </FadeIn>

          <FadeIn delay={0.1}>
            <p className="text-lg text-muted-foreground leading-relaxed mb-10 text-center">
              {company.name} to zespół specjalistów łączących technologię,
              automatyzację i myślenie bezpieczeństwa w jeden praktyczny model
              dostarczania wartości.
            </p>
          </FadeIn>

          <FadeIn delay={0.12}>
            <div className="relative h-56 md:h-72 rounded-2xl overflow-hidden border border-border mb-12">
              <Image
                src="/images/about-team.jpg"
                alt="Zespół MulaGroup przy pracy"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
            </div>
          </FadeIn>

          <div className="grid gap-6 sm:grid-cols-2 mb-12">
            <FadeIn delay={0.15} className="rounded-2xl border border-border bg-card p-6">
              <div className="mb-3 inline-flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 text-primary">
                <Rocket className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Inżynieria biznesowa</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Projektujemy systemy wokół realnych problemów operacyjnych, nie
                trendów technologicznych. Każda realizacja jest planowana z myślą o
                automatyzacji, monitoringu i skalowalności.
              </p>
            </FadeIn>

            <FadeIn delay={0.2} className="rounded-2xl border border-border bg-card p-6">
              <div className="mb-3 inline-flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 text-primary">
                <Shield className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Bezpieczeństwo od fundamentów</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Audyty bezpieczeństwa, kontrola dostępu, backupy i utwardzanie
                infrastruktury są dla nas standardem, nie opcją dodatkową.
              </p>
            </FadeIn>

            <FadeIn delay={0.25} className="rounded-2xl border border-border bg-card p-6">
              <div className="mb-3 inline-flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 text-primary">
                <Bot className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Automatyzacja & AI</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Wdrażamy przepływy pracy wspomagane AI, inteligentne
                integracje i systemy raportowania, które przyspieszają operacje
                i redukują koszty.
              </p>
            </FadeIn>

            <FadeIn delay={0.3} className="rounded-2xl border border-border bg-card p-6">
              <div className="mb-3 inline-flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 text-primary">
                <Code className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Nowoczesny web</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Tworzymy szybkie, responsywne i SEO-friendly strony oparte o
                Next.js, React i WordPress. Od wizytówki po zaawansowany system.
              </p>
            </FadeIn>
          </div>

          <FadeIn delay={0.35}>
            <div className="rounded-2xl border border-border bg-card p-6 md:p-8">
              <h2 className="text-2xl font-bold mb-4">Współpraca z {partner.name}</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Wszystkie projekty graficzne, branding, identyfikacja wizualna oraz
                materiały wideo realizujemy we współpracy z naszym zaufanym
                partnerem —{" "}
                <span className="text-foreground font-semibold">{partner.name}</span>.
                Dzięki temu Twoja marka otrzymuje spójną i profesjonalną szatę
                graficzną na każdym etapie współpracy.
              </p>
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 text-sm text-muted-foreground mb-6">
                <span className="inline-flex items-center gap-2">
                  <Mail className="h-4 w-4 text-primary" />
                  {partner.email}
                </span>
                <span className="inline-flex items-center gap-2">
                  <Phone className="h-4 w-4 text-primary" />
                  {partner.phone}
                </span>
              </div>
              <Button asChild variant="outline" className="gap-2">
                <a href={partner.website} target="_blank" rel="noopener noreferrer">
                  Zobacz portfolio {partner.name}
                  <ExternalLink className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </FadeIn>

          <FadeIn delay={0.4}>
            <div className="mt-10 text-center">
              <p className="text-muted-foreground mb-4">
                Chcesz poznać szczegóły naszej oferty?
              </p>
              <Button asChild size="lg">
                <Link href="/kontakt">Skontaktuj się z nami</Link>
              </Button>
            </div>
          </FadeIn>
        </div>
      </div>
    </div>
  );
}
