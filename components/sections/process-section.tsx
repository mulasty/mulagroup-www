"use client";

import { motion } from "framer-motion";
import { processSteps } from "@/lib/data";

export function ProcessSection() {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 h-full w-full object-cover opacity-80"
        >
          <source src="/videos/process-video.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-card/60 via-card/40 to-card/70" />
      </div>
      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Proces tworzenia stron www
          </h2>
          <p className="text-muted-foreground text-lg">
            Od pomysłu do gotowej witryny — przeprowadzimy Cię przez każdy krok
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {processSteps.map((step, index) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative rounded-2xl border border-border bg-background p-6"
            >
              <span className="absolute -top-4 -left-2 text-5xl font-bold text-primary/20 select-none">
                {step.step}
              </span>
              <div className="relative z-10 pt-4">
                <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
