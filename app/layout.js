import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./_components/layout/Header";
import Footer from "./_components/layout/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "EffluentLogic | Wastewater Technology Selector",
  description:
    "The independent diagnostic tool for South Africa's water industry.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-slate-50 text-slate-800`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
