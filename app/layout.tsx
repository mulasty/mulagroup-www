import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MulaGroup — Tworzenie stron www, SEO, Automatyzacja",
  description:
    "MulaGroup projektuje nowoczesne strony internetowe, prowadzi kampanie SEO i reklamowe oraz wdraża automatyzację biznesową. Współpraca z KrXProduce.",
  keywords: [
    "tworzenie stron www",
    "pozycjonowanie",
    "SEO",
    "Google Ads",
    "automatyzacja",
    "strony internetowe",
    "MulaGroup",
  ],
  authors: [{ name: "MulaGroup" }],
  openGraph: {
    title: "MulaGroup — Tworzenie stron www, SEO, Automatyzacja",
    description:
      "Nowoczesne strony internetowe, SEO, kampanie reklamowe i automatyzacja AI.",
    url: "https://mulagroup.eu",
    siteName: "MulaGroup",
    locale: "pl_PL",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MulaGroup — Tworzenie stron www, SEO, Automatyzacja",
    description: "Nowoczesne strony internetowe, SEO i automatyzacja.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pl"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "MulaGroup",
              url: "https://mulagroup.eu",
              email: "info@mulagroup.eu",
              telephone: "+48666337001",
              areaServed: "PL",
              sameAs: [
                "https://mulagroup-site.vercel.app",
              ],
            }),
          }}
        />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
