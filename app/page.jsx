import Image from "next/image";
import Hero from "../components/Hero/page";
import Services from "../components/Services/page";
import About from "../components/About/page";
import Contact from "../components/Contact/page";

export default function Home() {
  return (
    <div className="main">
      <Hero/>
      <About/>
      <Services/>
      <Contact/>
    </div>
  );
}
