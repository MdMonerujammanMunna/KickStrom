import type { Metadata } from "next";
import { Inter, Geist } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Footer from "@/components/Footer/Footersection";
import Navbar from "@/components/NaBar/Navbar";
import { AuthProvider } from "@/context/AuthContext";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-Inter",
});

export const metadata: Metadata = {
  title: "KickStrom",
  description: "KickStrom is a sports Platform",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={cn(
        "h-full bg-black text-white antialiased font-sans",
        inter.variable,
        geist.variable
      )}
    >
      <body className="min-h-full flex flex-col">
        <AuthProvider>
          <Navbar />

          <main className="flex-1">
            {children}
          </main>

          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}