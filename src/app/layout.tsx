import type { Metadata } from "next";
import { Montserrat, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Toaster } from "../components/ui/sonner";
import { AuthProvider } from "../components/auth/AuthProvider";
import { SmoothScroll } from "../components/layout/SmoothScroll";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Prachi Makeover | Luxury Makeup Artistry",
  description: "Bespoke beauty transformations for bridal, celebrity, and editorial. Experience the pinnacle of makeup artistry.",
  keywords: ["makeup artist", "bridal makeup", "luxury makeover", "Prachi Makeover", "celebrity makeup"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${montserrat.variable} ${playfair.variable}`}>
      <body className="font-sans antialiased bg-cream-soft overflow-x-hidden">
        <AuthProvider>
          <SmoothScroll>
            {children}
          </SmoothScroll>
          <Toaster position="bottom-right" theme="light" closeButton />
        </AuthProvider>
      </body>
    </html>
  );
}