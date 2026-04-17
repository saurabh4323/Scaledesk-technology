import Hero from "./components/Hero";
import About from "./components/About";

export default function Home() {
  return (
    <main className="bg-[#0a0a0a] min-h-screen">
      <Hero />
      <About />
    </main>
  );
}
