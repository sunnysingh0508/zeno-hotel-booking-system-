import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "react-hot-toast";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ZENO | Smart Hotel Booking Made Simple",
  description: "Search, compare, and book the world's best hotels instantly with ZENO. The most seamless booking experience.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased bg-white text-slate-900`}>
        {children}
        <Toaster position="top-right" />
      </body>
    </html>
  );
}
