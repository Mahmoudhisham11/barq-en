'use client';
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./styles.module.css";
import aboutImage from "../../public/images/about.jpeg";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

function About() {
  const sectionRef = useRef(null);
  const imageWrapperRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // أنيميشن الصورة
      gsap.fromTo(
        imageWrapperRef.current,
        { borderRadius: "50%" },
        {
          borderRadius: "8px",
          duration: 1.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          },
        }
      );

      // أنيميشن النصوص
      gsap.fromTo(
        textRef.current.querySelectorAll("p, h3"),
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className={styles.about} ref={sectionRef}>
      <div className={styles.leftSide} ref={textRef}>
        <p>من نحن</p>
        <h3>نحن نقدم أكثر من مجرد شحنة من الراحة والقيمة</h3>
        <p>
          نحن شركة شحن متخصصة في تقديم حلول توصيل آمنة وسريعة داخل وخارج
          الجمهورية. نعمل على توفير أفضل تجربة لعملائنا من خلال الالتزام
          بالمواعيد، تتبع الشحنات لحظة بلحظة، وخدمات دعم متاحة دائمًا. نسعى أن
          نكون الشريك الموثوق لعملك، من خلال شبكة شحن واسعة تغطي جميع المحافظات،
          وخدمات مرنة تناسب الأفراد والشركات على حد سواء.
        </p>
      </div>
        <div className={styles.imageContainer}>
            <div className={styles.rightSide}>
                <Image
                    src={aboutImage}
                    alt="aboutImage"
                    fill
                    style={{ objectFit: "cover", borderRadius: '8px' }}
                    ref={imageWrapperRef}
                />
            </div>
        </div>
    </div>
  );
}

export default About;
