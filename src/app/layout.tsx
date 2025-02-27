import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

import Header from "@/components/header/header";

const poppinsRegular = Poppins({
  variable: "--poppins-regular",
  subsets: ["latin"],
  weight: '400',
});

export const metadata: Metadata = {
  title: "Jeevan | Portfolio",
  description: "Jeevan is a full-stack developer with a passion for the frontend.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${poppinsRegular.variable} bg-zinc-200 text-neutral-900
          dark:bg-zinc-900 dark:text-neutral-100
          transition-all`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
