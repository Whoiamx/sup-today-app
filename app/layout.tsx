import type { Metadata } from "next";
import { Poppins } from "next/font/google";

import "./globals.css";

export const metadata: Metadata = {
  title: "What's up today? - Tus recordatorios en un solo lugar",
  description: "Nunca mas te olvides tus pendientes del dia",
  icons: {
    icon: "./favicon.ico",
  },
};

const poppins = Poppins({ weight: "400", subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
