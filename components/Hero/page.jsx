'use client'
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import styles from "./styles.module.css";
import Link from "next/link";
import Header from "../Header/page";

function Hero() {
  const h3Refs = useRef([]);
  const leftSideRef = useRef([])

  useEffect(() => {
    gsap.fromTo(
      h3Refs.current,
      { y: 50, opacity: 0 },   // البداية
      { y: 0, opacity: 1, duration: 1, ease: "power3.out", stagger: 0.3 } // النهاية
    );
    gsap.fromTo(
      leftSideRef.current,
      { x: -150, opacity: 0 },   // البداية
      { x: 0, opacity: 1, duration: 1, ease: "power3.out", stagger: 0.3 } // النهاية
    );
  }, []);

  return (
    <div className={styles.hero}>
      <Header/>
      <div className={styles.content}>
          <div className={styles.rightSide}>
            <h3 ref={(el) => (h3Refs.current[0] = el)}>سنقوم <span>بتوصيل</span></h3>
            <h3 ref={(el) => (h3Refs.current[1] = el)}>شحنتك بامان و سرعة</h3>
            <h3 ref={(el) => (h3Refs.current[2] = el)}>اينما <span>كنت</span></h3>
              <Link href={"/"} ref={(el) => (h3Refs.current[3] = el)} className={styles.heroLink}>
              <span></span>
              <span>تعرف على المزيد</span>
            </Link>
          </div>
      </div>
    </div>
  );
}

export default Hero;
