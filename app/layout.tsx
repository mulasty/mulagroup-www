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
  metadataBase: new URL("https://mulagroup.eu"),
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
  robots: "index, follow",
  themeColor: "#10b981",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/favicon/apple-touch-icon.png",
    other: {
      rel: "manifest",
      url: "/site.webmanifest",
    },
  },
  openGraph: {
    title: "MulaGroup — Tworzenie stron www, SEO, Automatyzacja",
    description:
      "Nowoczesne strony internetowe, SEO, kampanie reklamowe i automatyzacja AI.",
    url: "https://mulagroup.eu",
    siteName: "MulaGroup",
    locale: "pl_PL",
    type: "website",
    images: [
      {
        url: "/og/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "MulaGroup — Tworzenie stron www, SEO, Automatyzacja",
        type: "image/jpeg",
      },
      {
        url: "/og/og-whatsapp.jpg",
        width: 400,
        height: 400,
        alt: "MulaGroup",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MulaGroup — Tworzenie stron www, SEO, Automatyzacja",
    description: "Nowoczesne strony internetowe, SEO i automatyzacja.",
    images: ["/og/og-image.jpg"],
  },
  alternates: {
    canonical: "https://mulagroup.eu",
  },
  verification: {
    google: undefined,
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
      <head>
        <meta name="msapplication-TileColor" content="#0a0a0a" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "MulaGroup",
              url: "https://mulagroup.eu",
              logo: "https://mulagroup.eu/favicon/android-chrome-512x512.png",
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
