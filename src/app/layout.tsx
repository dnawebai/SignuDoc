import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";

import { TooltipProvider } from "@/components/ui/tooltip";

import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  display: "swap",
  subsets: ["latin"],
  variable: "--font-ui",
  weight: ["400", "500", "600", "700", "800"],
});

// The tab icon (icon.svg), the home-screen icon (apple-icon.png), the share
// image (opengraph-image.png) and manifest.ts sit next to this file and are
// picked up by name. All of them are iQuash's own identity.
export const metadata: Metadata = {
  applicationName: "iQuash Sign",
  title: "iQuash Sign",
  description:
    "Free e-signature software for small businesses. Upload, send, sign — no enterprise circus required.",
  openGraph: {
    siteName: "iQuash Sign",
    title: "iQuash Sign",
    description: "Send, sign and seal documents. Part of iQuash.",
  },
};

export const viewport: Viewport = {
  themeColor: "#fdfcfa",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${plusJakartaSans.variable} antialiased`}>
        <TooltipProvider>{children}</TooltipProvider>
      </body>
    </html>
  );
}
