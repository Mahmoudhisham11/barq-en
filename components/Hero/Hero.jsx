'use client';
import styles from "./styles.module.css";
import Header from "../Header/Header";
import Link from "next/link";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Hero({ t, locale }) {

  // refs للانيميشن
  const textRef = useRef([]);
  const btnRef = useRef(null);

  useEffect(() => {
    gsap.from(textRef.current, {
      y: 50,
      opacity: 0,
      duration: 1,
      stagger: 0.3,
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
       <Header t={t} locale={locale}/>
       <div className={styles.content}>
          <div className={styles.text}>
            <h2 ref={el => textRef.current[0] = el}>{t.heroH1} <span>{t.span1}</span></h2>
            <h2 ref={el => textRef.current[1] = el}>{t.part1} <span>{t.span2}</span> {t.heroH2}</h2>
            <h2 ref={el => textRef.current[2] = el}>{t.heroH3} <span>{t.span3}</span></h2>
            <Link ref={btnRef} href={"/"} className={styles.heroLink}>{t.heroBtn}</Link>
          </div>
       </div>
    </div>
  );
}
