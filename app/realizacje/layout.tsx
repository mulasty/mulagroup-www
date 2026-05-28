import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Realizacje — MulaGroup",
  description:
    "Zobacz wybrane projekty MulaGroup: strony internetowe, sklepy, SEO, kampanie reklamowe i automatyzacja.",
};

export default function RealizacjeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
