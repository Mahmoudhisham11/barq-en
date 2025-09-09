'use client';
import styles from "./styles.module.css";
import { FaLocationDot } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";

export default function Contact() {
  return (
    <div className={styles.contact} id="contact">
      <div className={styles.title}>
        <p>Contact us</p>
        <h3>Let's start working together</h3>
        <p>Get in touch to start shipping your goods</p>
      </div>
      <div className={styles.content}>
        <div className={styles.rightSide}>
          <strong>
            <span><FaLocationDot /></span>
            <span>Ezbet Alaa El-Din - Khusus - Qalyubia</span>
          </strong>
          <strong>
            <span><IoCall /></span>
            <span>+20 105 582 8222</span>
          </strong>
          <strong>
            <span><IoCall /></span>
            <span>+20 122 223 3666</span>
          </strong>
          <strong>
            <span><IoCall /></span>
            <span>+20 112 678 4187</span>
          </strong>
        </div>
        <div className={styles.leftSide}>
          <iframe
            src="https://www.google.com/maps?q=30.159837,31.311185&hl=ar&z=17&output=embed"
            width="100%"
            height="300"
            style={{ border: 0, borderRadius: "10px" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
