"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { services } from "@/lib/data";
import { Mail, Phone, MapPin, Loader2, CheckCircle2 } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, "Imię i nazwisko jest wymagane"),
  email: z.string().email("Podaj prawidłowy adres e-mail"),
  company: z.string().optional(),
  service: z.string().optional(),
  message: z.string().min(10, "Wiadomość musi mieć min. 10 znaków"),
});

type FormData = z.infer<typeof formSchema>;

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  async function onSubmit(data: FormData) {
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Błąd wysyłki");
      setStatus("success");
      reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-primary/30 bg-primary/5 p-8 text-center">
        <CheckCircle2 className="mx-auto h-10 w-10 text-primary mb-4" />
        <h3 className="text-xl font-semibold mb-2">Wiadomość wysłana!</h3>
        <p className="text-muted-foreground">
          Dziękujemy za kontakt. Odpowiemy najszybciej jak to możliwe.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="name">Imię i nazwisko *</Label>
          <Input id="name" placeholder="Jan Kowalski" {...register("name")} />
          {errors.name && (
            <p className="text-xs text-red-400">{errors.name.message}</p>
          )}
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Adres e-mail *</Label>
          <Input
            id="email"
            type="email"
            placeholder="jan@example.com"
            {...register("email")}
          />
          {errors.email && (
            <p className="text-xs text-red-400">{errors.email.message}</p>
          )}
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="company">Firma (opcjonalnie)</Label>
          <Input id="company" placeholder="Nazwa firmy" {...register("company")} />
        </div>
        <div className="space-y-2">
          <Label htmlFor="service">Interesująca usługa</Label>
          <Select onValueChange={(val) => setValue("service", val)}>
            <SelectTrigger id="service">
              <SelectValue placeholder="Wybierz usługę" />
            </SelectTrigger>
            <SelectContent>
              {services.map((s) => (
                <SelectItem key={s.id} value={s.title}>
                  {s.title}
                </SelectItem>
              ))}
              <SelectItem value="Inne">Inne / nie wiem</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">Wiadomość *</Label>
        <Textarea
          id="message"
          placeholder="Opisz swój projekt..."
          rows={5}
          {...register("message")}
        />
        {errors.message && (
          <p className="text-xs text-red-400">{errors.message.message}</p>
        )}
      </div>

      {status === "error" && (
        <p className="text-sm text-red-400">
          Wystąpił błąd podczas wysyłania. Spróbuj ponownie lub napisz bezpośrednio na info@mulagroup.eu
        </p>
      )}

      <Button type="submit" disabled={status === "loading"} className="w-full sm:w-auto gap-2">
        {status === "loading" && <Loader2 className="h-4 w-4 animate-spin" />}
        Wyślij zapytanie
      </Button>
    </form>
  );
}

export function ContactInfo() {
  const { company, partner } = require("@/lib/data");
  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-lg font-semibold mb-4">Dane kontaktowe</h3>
        <ul className="space-y-4 text-sm text-muted-foreground">
          <li className="flex items-center gap-3">
            <Mail className="h-4 w-4 text-primary" />
            <a href={`mailto:${company.email}`} className="hover:text-foreground transition-colors">
              {company.email}
            </a>
          </li>
          <li className="flex items-center gap-3">
            <Phone className="h-4 w-4 text-primary" />
            <a href={`tel:${company.phoneRaw}`} className="hover:text-foreground transition-colors">
              {company.phone}
            </a>
          </li>
          <li className="flex items-center gap-3">
            <MapPin className="h-4 w-4 text-primary" />
            <span>{company.location}</span>
          </li>
        </ul>
      </div>

      <div className="rounded-2xl border border-border bg-card p-5">
        <h4 className="text-sm font-semibold mb-2">Współpraca graficzna</h4>
        <p className="text-sm text-muted-foreground mb-3">
          Projekty graficzne i wideo realizowane wspólnie z{" "}
          <span className="text-foreground font-medium">{partner.name}</span>.
        </p>
        <ul className="space-y-2 text-sm text-muted-foreground">
          <li className="flex items-center gap-2">
            <Mail className="h-3.5 w-3.5 text-primary" />
            {partner.email}
          </li>
          <li className="flex items-center gap-2">
            <Phone className="h-3.5 w-3.5 text-primary" />
            {partner.phone}
          </li>
        </ul>
      </div>
    </div>
  );
}
