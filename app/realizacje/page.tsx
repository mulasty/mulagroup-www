"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { projects } from "@/lib/data";
import { LayoutGrid, Filter } from "lucide-react";

const categories = [
  { id: "all", label: "Wszystkie" },
  { id: "strony-www", label: "Strony WWW" },
  { id: "sklepy", label: "Sklepy" },
  { id: "seo", label: "SEO" },
  { id: "reklamy", label: "Reklamy" },
  { id: "automatyzacja", label: "Automatyzacja" },
];

export default function RealizacjePage() {
  const [active, setActive] = useState("all");

  const filtered =
    active === "all"
      ? projects
      : projects.filter((p) => p.category === active);

  return (
    <div className="py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 text-primary mb-4">
            <LayoutGrid className="h-5 w-5" />
          </div>
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            Realizacje
          </h1>
          <p className="text-muted-foreground text-lg">
            Zobacz wybrane projekty, które zrealizowaliśmy dla naszych klientów.
            Każdy projekt to inna historia, wspólny cel — realne wyniki.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          <Filter className="h-4 w-4 text-muted-foreground mr-2 hidden sm:block" />
          {categories.map((cat) => (
            <Button
              key={cat.id}
              variant={active === cat.id ? "default" : "outline"}
              size="sm"
              onClick={() => setActive(cat.id)}
            >
              {cat.label}
            </Button>
          ))}
        </div>

        <AnimatePresence mode="popLayout">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {filtered.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
              >
                <Card className="h-full bg-background border-border hover:border-primary/40 transition-colors group overflow-hidden">
                  <div className="relative h-52 w-full overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
                    <div className="absolute top-3 left-3">
                      <span className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
                        {project.categoryLabel}
                      </span>
                    </div>
                  </div>
                  <CardContent className="pt-4">
                    <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="inline-flex items-center rounded-md bg-secondary px-2 py-1 text-xs font-medium text-secondary-foreground"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {filtered.length === 0 && (
          <div className="text-center py-20 text-muted-foreground">
            Brak realizacji w wybranej kategorii.
          </div>
        )}
      </div>
    </div>
  );
}
