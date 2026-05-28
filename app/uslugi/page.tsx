import type { Metadata } from "next";
import { services } from "@/lib/data";
import { FadeIn } from "@/components/fade-in";
import { Icon } from "@/components/icon";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Usługi — MulaGroup",
  description:
    "Tworzenie stron www, SEO, kampanie reklamowe, automatyzacja AI i audyty bezpieczeństwa.",
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
              <Card className="h-full bg-background border-border hover:border-primary/40 transition-colors">
                <CardHeader className="pb-3">
                  <div className="mb-3 inline-flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 text-primary">
                    <Icon name={service.icon as any} className="h-5 w-5" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            </FadeIn>
          ))}
        </div>
      </div>
    </div>
  );
}
