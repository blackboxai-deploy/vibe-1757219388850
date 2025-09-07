import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "HealthGuard - Smart Community Health Monitoring",
  description: "Early Warning System for Water-Borne Diseases - Protecting Communities Through Smart Health Monitoring",
  keywords: "health monitoring, water-borne diseases, early warning system, community health, disease tracking",
  authors: [{ name: "HealthGuard Team" }],
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={cn(
        "min-h-screen bg-gray-50 font-sans antialiased flex flex-col",
        inter.className
      )}>
        <div className="flex min-h-screen">
          {children}
        </div>
      </body>
    </html>
  );
}