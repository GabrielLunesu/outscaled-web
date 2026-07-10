import type { Metadata } from "next";
import { Headland_One } from "next/font/google";
import "./globals.css";

const headlandOne = Headland_One({
  variable: "--font-headland-one",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Outscaled - AI Agents for Ecommerce Teams",
  description:
    "Connect your store and the tools you already use, then create AI employees with Outscaled for any job, from product listers to creative strategists.",
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
