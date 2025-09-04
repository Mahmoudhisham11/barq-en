'use client';
import styles from "./styles.module.css";
import { PiPhoneCallFill } from "react-icons/pi";
import { RiComputerLine } from "react-icons/ri";
import { GrMoney } from "react-icons/gr";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Services({ t }) {

    const servicesRef = useRef(null);

    useEffect(() => {
        const el = servicesRef.current;

        gsap.fromTo(el,
            { y: 100, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: el,
                    start: "top 80%",
                    toggleActions: "play none none", 
                }
            }
        );
    }, []);

    return (
        <div className={styles.servicesContainer} id="services">
            <div className={styles.services} ref={servicesRef}>
                <div className={styles.title}>
                    <p>{t.servicesIntro}</p>
                    <h2>{t.servicesHeadline}</h2>
                    <p>{t.servicesDesc}</p>
                </div>
                <div className={styles.content}>
                    <div className={styles.card}>
                        <div className={styles.cardHead}>
                            <p><PiPhoneCallFill /></p>
                            <h3>{t.servicesCard1H3}</h3>
                        </div>
                        <div className={styles.cardBody}>
                            <p>{t.servicesCard1p}</p>
                        </div>
                    </div>
                    <div className={styles.card}>
                        <div className={styles.cardHead}>
                            <p><RiComputerLine /></p>
                            <h3>{t.servicesCard2H3}</h3>
                        </div>
                        <div className={styles.cardBody}>
                            <p>{t.servicesCard2p}</p>
                        </div>
                    </div>
                    <div className={styles.card}>
                        <div className={styles.cardHead}>
                            <p><GrMoney /></p>
                            <h3>{t.servicesCard3H3}</h3>
                        </div>
                        <div className={styles.cardBody}>
                            <p>{t.servicesCard3p}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
