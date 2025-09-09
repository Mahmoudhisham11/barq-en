'use client';
import styles from "./styles.module.css";
import Header from "../Header/Header";
import Link from "next/link";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Hero() {

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
       <Header/>
       <div className={styles.content}>
          <div className={styles.text}>
            <h2 ref={el => textRef.current[0] = el}>We can deliver your <span>shipment</span></h2>
            <h2 ref={el => textRef.current[1] = el}>Easily, <span>quickly</span> and safely</h2>
            <h2 ref={el => textRef.current[2] = el}>Wherever you <span>are</span></h2>
            <Link ref={btnRef} href={"/"} className={styles.heroLink}>Learn more</Link>
          </div>
       </div>
    </div>
  );
}
