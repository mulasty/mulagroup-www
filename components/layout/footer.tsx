import Link from "next/link";
import { company, partner, navLinks } from "@/lib/data";
import { Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-card text-card-foreground">
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-16">
        <div className="grid gap-10 md:grid-cols-3">
          <div className="space-y-4">
            <h3 className="text-lg font-bold">{company.name}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Tworzymy nowoczesne strony internetowe, prowadzimy kampanie SEO i reklamowe oraz wdrażamy automatyzację biznesową.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider">Nawigacja</h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider">Kontakt</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="h-4 w-4 text-primary" />
                <a href={`mailto:${company.email}`} className="hover:text-foreground transition-colors">
                  {company.email}
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone className="h-4 w-4 text-primary" />
                <a href={`tel:${company.phoneRaw}`} className="hover:text-foreground transition-colors">
                  {company.phone}
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 text-primary" />
                <span>{company.location}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-border/40 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} {company.name}. Wszelkie prawa zastrzeżone.
          </p>
          <p className="text-xs text-muted-foreground">
            Współpraca graficzna:{" "}
            <a
              href={partner.website}
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-foreground"
            >
              {partner.name}
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
