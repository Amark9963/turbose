import Nav from "@/components/Nav";
import Hero from "@/components/sections/Hero";
import WhyUs from "@/components/sections/WhyUs";
import HowWeWork from "@/components/sections/HowWeWork";
import Solutions from "@/components/sections/Solutions";
import Industries from "@/components/sections/Industries";
import About from "@/components/sections/About";
import FAQ from "@/components/sections/FAQ";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-black">
      <Nav />
      <Hero />
      <WhyUs />
      <HowWeWork />
      <Solutions />
      <Industries />
      <About />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}