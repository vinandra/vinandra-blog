import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Banner from "@/components/Banner";
import { Footer } from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Vinandra • Blog",
  description: "Blog",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Banner />
        {children}
        <Footer />
      </body>
    </html>
  );
}
