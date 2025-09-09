'use client';
import { useEffect, useRef } from "react";
import styles from "./styles.module.css";
import aboutImage from "../../public/images/about.jpeg";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const titleRef = useRef(null);
  const textRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    // Animate title
    if (titleRef.current) {
      gsap.from(titleRef.current.children, {
        y: 20,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 90%",
        },
      });
    }

    // Animate text
    if (textRef.current) {
      gsap.from(textRef.current.children, {
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.3,
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 80%",
        },
      });
    }

    // Animate image
    if (imageRef.current) {
      gsap.fromTo(
        imageRef.current,
        { scale: 0.9, opacity: 0.5, borderRadius: "50%" },
        {
          scale: 1,
          opacity: 1,
          borderRadius: "8px",
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: imageRef.current,
            start: "top 80%",
          },
        }
      );
    }
  }, []);

  return (
    <div className={styles.about} id="about">
      <div className={styles.title} ref={titleRef}>
        <p>About us</p>
        <h2>Why choose us</h2>
        <p>Because Barq will make it easier for you to send your package with the features we offer</p>
      </div>
      <div className={styles.content}>
        <div className={styles.textContainer} ref={textRef}>
          <h2>We deliver more than shipments — we deliver peace of mind and reliability</h2>
          <p>Our team ensures every package reaches its destination safely and on time. With advanced tracking and dedicated support, we make shipping simple and worry-free for you.</p>
        </div>
        <div className={styles.imageContainer} ref={imageRef}>
          <Image
            src={aboutImage}
            fill
            style={{ objectFit: "cover", borderRadius: "8px" }}
            alt="About section image"
          />
        </div>
      </div>
    </div>
  );
}
