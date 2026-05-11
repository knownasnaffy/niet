/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from "next";
import "./globals.css";
import TopNav from "@/components/TopNav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "NIET",
  description: "Excellence in Engineering",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light h-full antialiased">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&display=swap" rel="stylesheet"/>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet"/>
      </head>
      <body className="bg-canvas text-ink font-body-md min-h-full flex flex-col">
        <TopNav />
        <main className="flex-1 flex flex-col">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
