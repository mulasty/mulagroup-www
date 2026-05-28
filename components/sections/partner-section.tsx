"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { partner } from "@/lib/data";
import { ExternalLink, Mail, Phone } from "lucide-react";

export function PartnerSection() {
  return (
    <section className="py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden border border-border">
              <Image
                src="/images/krx-creative.jpg"
                alt="Kreatywna współpraca z KrXProduce"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
            </div>
            <div className="text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                Współpraca kreatywna
              </h2>
              <p className="text-muted-foreground text-lg mb-6">
                Projektowanie graficzne, branding i materiały wideo realizujemy
                we współpracy z naszym partnerem —{" "}
                <span className="text-foreground font-semibold">{partner.name}</span>.
                Dzięki temu Twoja marka zyskuje spójną i profesjonalną identyfikację
                wizualną na każdym etapie.
              </p>

              <div className="flex flex-col sm:flex-row items-center md:items-start justify-center md:justify-start gap-4 text-sm text-muted-foreground mb-8">
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
                <a
                  href={partner.website}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Zobacz portfolio {partner.name}
                  <ExternalLink className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
