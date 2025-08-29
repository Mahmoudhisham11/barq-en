'use client'
import { useSearchParams } from "next/navigation"
import ar from "../../locales/ar.json"
import en from "../../locales/en.json"
import styles from "./styles.module.css";
import Header from "../Header/page";
import Link from "next/link";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Hero() {
  const searchParams = useSearchParams()
  const locale = searchParams.get("locale") || "en"
  const t = locale === "ar" ? ar : en

  // نعمل refs عشان نحدد العناصر اللي هيتعملها انيميشن
  const textRef = useRef([]);
  const btnRef = useRef(null);

  useEffect(() => {
    gsap.from(textRef.current, {
      y: 50,          // ينزل من تحت
      opacity: 0,     // يبقى شفاف
      duration: 1,    // مدة الحركة
      stagger: 0.3,   // تأخير بين كل عنصر والتاني
      ease: "power3.out"
    });

    gsap.from(btnRef.current, {
      y: 50,
      opacity: 0,
      duration: 1,
      delay: 1,
      ease: "power3.out"
    });
  }, []);

  return (
    <div className={styles.hero}>
       <Header/>
       <div className={styles.content}>
          <div className={styles.text}>
            <h2 ref={el => textRef.current[0] = el}>{t.heroH1} <span>{t.span1}</span></h2>
            <h2 ref={el => textRef.current[1] = el}>{t.part1} <span>{t.span2}</span> {t.heroH2}</h2>
            <h2 ref={el => textRef.current[2] = el}>{t.heroH3} <span>{t.span3}</span></h2>
            <Link ref={btnRef} href={"/"} className={styles.heroLink}>{t.heroBtn}</Link>
          </div>
       </div>
    </div>
  )
}
