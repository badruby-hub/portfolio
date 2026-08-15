import type { Metadata } from "next";
import { Fraunces, Inter, JetBrains_Mono } from "next/font/google";
import "../globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { locales, type Locale, getDictionary } from "@/lib/i18n";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
});
const inter = Inter({ subsets: ["latin"], variable: "--font-sans", weight: ["400", "500", "600"] });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono", weight: ["400", "500"] });

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export const metadata: Metadata = {
  title: "Nazim Fataliev — Frontend / Full-stack Developer",
  description: "Frontend / Full-stack Developer portfolio — React, Next.js, Node.js, Prisma, PostgreSQL.",
};

export default function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: Locale };
}) {
  const dict = getDictionary(params.locale);
  return (
    <html lang={params.locale}>
      <body className={`${fraunces.variable} ${inter.variable} ${mono.variable} bg-bg font-sans text-ink`}>
        <Navbar locale={params.locale} dict={dict} />
        {children}
        <Footer dict={dict} />
      </body>
    </html>
  );
}
