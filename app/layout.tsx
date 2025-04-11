import type { Metadata } from "next";
import { Poppins } from "next/font/google";

import "./globals.css";

export const metadata: Metadata = {
  title: "What's up today?",
  description: "Nunca mas te olvides tus pendientes del dia",
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
