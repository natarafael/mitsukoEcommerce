import type { Metadata } from "next";
import { Inria_Serif } from "next/font/google";
import "./globals.css";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer";
import SessionProvider from "./SessionProvider";

const inria = Inria_Serif({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: "Mitsuko",
  description: "Velas Aromáticas • Artesanais • Veganas • Ecológicas",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`flex h-screen flex-col justify-between ${inria.className}`}
      >
        <SessionProvider session={null}>
          <Navbar />
          <main className="m-auto min-w-[300px] max-w-7xl p-4">{children}</main>
          <Footer />
        </SessionProvider>
      </body>
    </html>
  );
}
