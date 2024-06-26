import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/app/component/navigation/Navbar";
import "@/app/style/main.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "The Dragon's Flagon",
  description: "A gaming community, by gamers, for gamers.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="h-12">
          <Navbar />
        </header>
        {children}
      </body>
    </html>
  );
}
