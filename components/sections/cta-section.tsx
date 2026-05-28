"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function CtaSection() {
  return (
    <section className="py-20 md:py-28 bg-primary/5 border-y border-primary/10">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Gotowy na nową stronę?
          </h2>
          <p className="text-muted-foreground text-lg mb-8">
            Porozmawiajmy o Twoim projekcie. Przygotujemy ofertę dopasowaną do
            potrzeb, budżetu i celów biznesowych.
          </p>
          <Button asChild size="lg" className="gap-2">
            <Link href="/kontakt">
              Wyślij zapytanie <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
