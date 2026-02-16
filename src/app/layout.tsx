import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google"; // Correct import from google
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair-display",
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Luis y Mª Carmen - ¡Nos Casamos!",
  description: "Web de la boda de Luis y Mª Carmen - 20 de noviembre 2026",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body
        className={cn(
          "min-h-screen bg-wedding-cream/30 font-sans antialiased text-wedding-text",
          inter.variable,
          playfair.variable,
        )}
      >
        {children}
      </body>
    </html>
  );
}
