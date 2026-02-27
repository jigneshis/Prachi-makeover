import type { Metadata } from "next";
import { Montserrat, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Toaster } from "../components/ui/sonner";
import { AuthProvider } from "../components/auth/AuthProvider";

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
  title: "Prachi Makeover | Luxury Makeup Artist",
  description: "Experience world-class makeup artistry with Prachi Makeover. Bridal, celebrity, and editorial makeup services.",
  keywords: ["makeup artist", "bridal makeup", "luxury makeover", "Prachi Makeover", "makeup studio"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${montserrat.variable} ${playfair.variable}`}>
      <body className="font-sans antialiased bg-cream-soft">
        <AuthProvider>
          {children}
          <Toaster position="top-center" />
        </AuthProvider>
      </body>
    </html>
  );
}