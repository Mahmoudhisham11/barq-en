'use client'

import About from "@/components/About/page"
import Contact from "@/components/Contact/page"
import Footer from "@/components/Footer/page"
import Hero from "@/components/Hero/page"
import Services from "@/components/Services/page"

export default function Home() {
  return (
    <main className="main">
      <Hero />
      <About />
      <Services />
      <Contact />
      <Footer/>
    </main>
  )
}
