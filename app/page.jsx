'use client';

import About from "@/components/About/About";
import Contact from "@/components/Contact/Contact";
import Footer from "@/components/Footer/Footer";
import Hero from "@/components/Hero/Hero";
import Services from "@/components/Services/Services";

export default function HomePage() {

  return (
    <main className="main">
      <Hero/>
      <About/>
      <Services/>
      <Contact/>
      <Footer/>
    </main>
  );
}
