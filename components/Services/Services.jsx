'use client';
import styles from "./styles.module.css";
import { PiPhoneCallFill } from "react-icons/pi";
import { RiComputerLine } from "react-icons/ri";
import { GrMoney } from "react-icons/gr";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Services() {

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
                    <p>Our Services</p>
                    <h2>Fast & Reliable</h2>
                    <p>We provide comprehensive shipping solutions with speed, security, and full support for all your logistics needs.</p>
                </div>
                <div className={styles.content}>
                    <div className={styles.card}>
                        <div className={styles.cardHead}>
                            <p><PiPhoneCallFill /></p>
                            <h3>Customer Service</h3>
                        </div>
                        <div className={styles.cardBody}>
                            <p>We have a specialized customer service team to solve all our customers' problems and follow up with our customers moment by moment in managing their shipments.</p>
                        </div>
                    </div>
                    <div className={styles.card}>
                        <div className={styles.cardHead}>
                            <p><RiComputerLine /></p>
                            <h3>Track accounts</h3>
                        </div>
                        <div className={styles.cardBody}>
                            <p>Through your account on the company’s program, you will be able to track your shipments and see and know where each shipment you have with us</p>
                        </div>
                    </div>
                    <div className={styles.card}>
                        <div className={styles.cardHead}>
                            <p><GrMoney /></p>
                            <h3>Collection</h3>
                        </div>
                        <div className={styles.cardBody}>
                            <p>With our collection service, you can easily receive your collections daily, and we also offer you the possibility of obtaining an advance of up to 15%.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
