import type { Metadata } from "next";
import { Headland_One } from "next/font/google";
import "./globals.css";

const headlandOne = Headland_One({
  variable: "--font-headland-one",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Parley - AI Agent Framer Template for SaaS Startups",
  description:
    "Launch an AI agent or automation startup site with Parley, a polished Framer template with product sections, workflows, pricing, blog pages, and conversion-ready layouts.",
  icons: {
    icon: "/seo/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${headlandOne.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
