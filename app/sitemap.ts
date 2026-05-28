import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://mulagroup.eu";
  return [
    { url: base, lastModified: new Date() },
    { url: `${base}/uslugi`, lastModified: new Date() },
    { url: `${base}/o-nas`, lastModified: new Date() },
    { url: `${base}/kontakt`, lastModified: new Date() },
  ];
}
