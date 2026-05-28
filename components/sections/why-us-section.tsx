"use client";

import { motion } from "framer-motion";
import { whyUs } from "@/lib/data";
import { Icon } from "@/components/icon";

export function WhyUsSection() {
  return (
    <section className="py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Dlaczego my?
          </h2>
          <p className="text-muted-foreground text-lg">
            Tworzymy strony, które nie tylko wyglądają, ale przynoszą realne wyniki
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {whyUs.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-start"
            >
              <div className="mb-4 inline-flex items-center justify-center w-10 h-10 rounded-lg bg-secondary text-primary">
                <Icon name={item.icon as any} className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
