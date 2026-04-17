import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata = {
  title: "ScaleDesk Technology",
  description: "Enterprise tech solutions for scale",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className={`min-h-full flex flex-col bg-[#0a0a0a] text-white ${inter.className}`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
