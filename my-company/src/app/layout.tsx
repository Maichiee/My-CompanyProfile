import type { Metadata } from "next";
import { Oswald, Roboto, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const oswald = Oswald({ 
  subsets: ['latin'], 
  weight: ['200','300','400','500','600','700'],
  variable: '--font-oswald'
});

const roboto = Roboto({ 
  subsets: ['latin'], 
  weight: ['100','300','400','500','700','900'],
  variable: '--font-roboto'
});

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "My Company",
  description: "Professional web development services",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${oswald.variable} ${roboto.variable} ${inter.className} w-full max-w-[1920px] mx-auto bg-white`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
