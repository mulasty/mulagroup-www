"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { partner } from "@/lib/data";
import { ExternalLink, Mail, Phone, Volume2, VolumeX } from "lucide-react";

const VIDEO_ID = "Q64fpFz0UAU";

export function PartnerSection() {
  const [muted, setMuted] = useState(true);

  const embedUrl = `https://www.youtube.com/embed/${VIDEO_ID}?autoplay=1&loop=1&controls=0&modestbranding=1&rel=0&showinfo=0&iv_load_policy=3&disablekb=1&playlist=${VIDEO_ID}&mute=${muted ? 1 : 0}`;

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
            <div className="relative aspect-video rounded-2xl overflow-hidden border border-border bg-black">
              <iframe
                key={embedUrl}
                src={embedUrl}
                title="KrXProduce - portfolio"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className="absolute inset-0 h-full w-full"
              />
              <div className="absolute bottom-3 right-3 z-10">
                <Button
                  size="sm"
                  variant="secondary"
                  className="gap-1.5 bg-background/80 backdrop-blur-sm hover:bg-background"
                  onClick={() => setMuted((m) => !m)}
                >
                  {muted ? (
                    <>
                      <VolumeX className="h-4 w-4" /> Włącz dźwięk
                    </>
                  ) : (
                    <>
                      <Volume2 className="h-4 w-4" /> Wyłącz dźwięk
                    </>
                  )}
                </Button>
              </div>
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
