import { Onest, Inter, } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const onest = Onest({
  variable: "--font-onest",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata = {
  title: "Amit Kushwaha",
  description: "This is Amit Kushwaha's Portfolio.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Navbar />
      <body className={`${onest.variable} ${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
