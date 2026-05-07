import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import SmoothScroll from "./components/SmoothScroll";
import CinematicCursor from "./components/CinematicCursor";
import AmbientCanvas from "./components/AmbientCanvas";
import AtmosphereSystem from "./components/AtmosphereSystem";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-space-grotesk",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-jetbrains-mono",
});

export const metadata = {
  title: "ScaleDesk Technology - Enterprise AI Infrastructure",
  description:
    "ScaleDesk operates as your dedicated engineering partner. Build, deploy, and scale enterprise products with world-class software development, AI automation, and robust infrastructure.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full antialiased">
      <body
        className={`min-h-full flex flex-col bg-[#030303] text-white ${inter.className} ${spaceGrotesk.variable} ${jetbrainsMono.variable}`}
      >
        {/* Ambient particle layer — fixed, behind everything */}
        <AtmosphereSystem />
        <AmbientCanvas />

        {/* Premium cursor system */}
        <CinematicCursor />

        {/* Navbar */}
        <Navbar />

        {/* Page content with smooth scroll */}
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
