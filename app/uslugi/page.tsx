import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { services } from "@/lib/data";
import { FadeIn } from "@/components/fade-in";
import { Icon } from "@/components/icon";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Usługi — MulaGroup",
  description:
    "Tworzenie stron www, SEO, kampanie reklamowe, automatyzacja AI i audyty bezpieczeństwa.",
};

const serviceImages: Record<string, string> = {
  webdev: "/images/service-webdev.jpg",
  seo: "/images/service-seo.jpg",
  ads: "/images/service-ads.jpg",
  automation: "/images/service-automation.jpg",
  audit: "/images/service-audit.jpg",
};

export default function ServicesPage() {
  return (
    <div className="py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-2xl mx-auto text-center mb-14">
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            Nasze usługi
          </h1>
          <p className="text-muted-foreground text-lg">
            Oferujemy kompleksowe wsparcie — od projektu strony, przez marketing,
            po automatyzację i bezpieczeństwo.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {services.map((service, index) => (
            <FadeIn key={service.id} delay={index * 0.1}>
              <Link href={`/uslugi/${service.id}`} className="block h-full group">
                <Card className="h-full bg-background border-border hover:border-primary/40 transition-colors overflow-hidden">
                  <div className="relative h-48 w-full overflow-hidden">
                    <Image
                      src={serviceImages[service.id] || "/images/hero-bg.jpg"}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
                  </div>
                  <CardHeader className="pb-3">
                    <div className="mb-3 inline-flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 text-primary">
                      <Icon name={service.icon as any} className="h-5 w-5" />
                    </div>
                    <CardTitle className="text-xl group-hover:text-primary transition-colors">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      {service.description}
                    </p>
                    <div className="flex items-center text-sm font-medium text-primary gap-1 group-hover:gap-2 transition-all">
                      Zobacz szczegóły i cennik
                      <ArrowRight className="h-4 w-4" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </FadeIn>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-6">
            Nie wiesz, który pakiet wybrać? Umów się na bezpłatną konsultację.
          </p>
          <Button asChild size="lg">
            <Link href="/kontakt">Umów konsultację</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
