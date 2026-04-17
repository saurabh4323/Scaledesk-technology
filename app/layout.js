import { Manrope } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

const manrope = Manrope({
  subsets: ["latin"],
});

export const metadata = {
  title: "ScaleDesk Technology",
  description: "Enterprise tech solutions for scale",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className={`min-h-full flex flex-col bg-[#0a0a0a] text-white ${manrope.className}`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
