'use client';

import { useSearchParams } from "next/navigation";
import dynamic from "next/dynamic";
import ar from "../locales/ar.json";
import en from "../locales/en.json";

// استيراد المكونات بطريقة dynamic لمنع SSR
const Hero = dynamic(() => import("@/components/Hero/Hero"), { ssr: false });
const About = dynamic(() => import("@/components/About/About"), { ssr: false });
const Services = dynamic(() => import("@/components/Services/Services"), { ssr: false });
const Contact = dynamic(() => import("@/components/Contact/Contact"), { ssr: false });
const Footer = dynamic(() => import("@/components/Footer/Footer"), { ssr: false });

export default function HomePage() {
  const searchParams = useSearchParams();
  const locale = searchParams?.get("locale") || "en"; // تحديد اللغة من الـ URL
  const t = locale === "ar" ? ar : en; // اختيار اللغة المناسبة

  return (
    <main className="main">
      <Hero t={t} />
      <About t={t} />
      <Services t={t} />
      <Contact t={t} />
      <Footer t={t} />
    </main>
  );
}
