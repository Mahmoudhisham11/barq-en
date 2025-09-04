'use client';

import { useSearchParams } from "next/navigation";
import Hero from "@/components/Hero/Hero";
import About from "@/components/About/About";
import Services from "@/components/Services/Services";
import Contact from "@/components/Contact/Contact";
import Footer from "@/components/Footer/Footer";
import ar from "../locales/ar.json";
import en from "../locales/en.json";

export default function HomePage() {
  // نستخدم hook للـ client side فقط
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
