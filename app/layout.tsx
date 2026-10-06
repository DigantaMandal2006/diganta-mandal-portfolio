import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Diganta Mandal | AI & Data Science Portfolio",
  description: "Portfolio of Diganta Mandal, a B.Tech CSE (AI & ML) student building practical software and data-driven solutions.",
  openGraph: { title: "Diganta Mandal | Portfolio", description: "AI, data science, and software projects by Diganta Mandal.", type: "website" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
