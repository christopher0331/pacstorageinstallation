import type { Metadata } from "next";
import { Manrope, Syne } from "next/font/google";
import "./globals.css";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://pacstorageinstallation.com"),
  title: {
    default: "Pacific Storage Install | Seattle Garage Storage",
    template: "%s | Pacific Storage Install",
  },
  description:
    "Overhead garage storage and cabinet installation in Seattle, Washington. Motorized and fixed systems, installed with care.",
  keywords: [
    "garage storage",
    "overhead garage storage",
    "motorized garage storage",
    "garage cabinets",
    "Seattle",
    "Pacific Storage Install",
  ],
  openGraph: {
    title: "Pacific Storage Install",
    description:
      "Overhead garage storage and cabinet installation serving Seattle, Washington.",
    url: "https://pacstorageinstallation.com",
    siteName: "Pacific Storage Install",
    locale: "en_US",
    type: "website",
  },
  alternates: {
    canonical: "https://pacstorageinstallation.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${syne.variable} ${manrope.variable} h-full`}>
      <body className="min-h-full flex flex-col antialiased">{children}</body>
    </html>
  );
}
