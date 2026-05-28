import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { services } from "@/lib/data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Icon } from "@/components/icon";
import { FadeIn } from "@/components/fade-in";
import {
  Check,
  ArrowRight,
  ArrowLeft,
  Sparkles,
} from "lucide-react";

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.id === slug);
  if (!service) return {};
  return {
    title: `${service.title} — MulaGroup`,
    description: service.short,
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = services.find((s) => s.id === slug);
  if (!service) return notFound();

  return (
    <div className="py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-6">
        <FadeIn>
          <div className="max-w-3xl mx-auto text-center mb-14">
            <Link
              href="/uslugi"
              className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors mb-6"
            >
              <ArrowLeft className="h-4 w-4" />
              Wróć do usług
            </Link>
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary mb-6">
              <Icon name={service.icon as any} className="h-6 w-6" />
            </div>
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
              {service.title}
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed">
              {service.description}
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="max-w-4xl mx-auto mb-20">
            <h2 className="text-2xl font-bold tracking-tight mb-6 text-center">
              Co obejmuje usługa
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {service.features.map((feature) => (
                <div
                  key={feature}
                  className="flex items-start gap-3 rounded-xl border border-border bg-card/50 p-4"
                >
                  <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-sm text-muted-foreground leading-relaxed">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.15}>
          <div className="max-w-6xl mx-auto mb-20">
            <h2 className="text-2xl font-bold tracking-tight mb-2 text-center">
              Pakiety i cennik
            </h2>
            <p className="text-muted-foreground text-center mb-10">
              Wybierz pakiet dopasowany do skali projektu i budżetu
            </p>
            <div className="grid md:grid-cols-3 gap-6 items-start">
              {service.packages.map((pkg) => (
                <Card
                  key={pkg.name}
                  className={`h-full border ${
                    pkg.highlighted
                      ? "border-primary bg-primary/5 shadow-lg"
                      : "border-border bg-background"
                  }`}
                >
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between mb-2">
                      <CardTitle className="text-lg">{pkg.name}</CardTitle>
                      {pkg.highlighted && (
                        <span className="inline-flex items-center gap-1 rounded-full bg-primary px-2 py-0.5 text-xs font-medium text-primary-foreground">
                          <Sparkles className="h-3 w-3" />
                          Polecany
                        </span>
                      )}
                    </div>
                    <div className="text-2xl font-bold text-foreground">
                      {pkg.price}
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {pkg.description}
                    </p>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <ul className="space-y-3">
                      {pkg.includes.map((item) => (
                        <li key={item} className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                          <span className="text-sm text-muted-foreground">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="max-w-2xl mx-auto text-center rounded-2xl border border-primary/20 bg-primary/5 p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4">
              Nie wiesz, który pakiet wybrać?
            </h2>
            <p className="text-muted-foreground mb-6">
              Porozmawiajmy o Twoim projekcie. Przygotujemy dopasowaną ofertę i
              pomożemy wybrać najlepsze rozwiązanie.
            </p>
            <Button asChild size="lg" className="gap-2">
              <Link href="/kontakt">
                Umów bezpłatną konsultację
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
