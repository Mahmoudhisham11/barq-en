'use client';
import styles from "./styles.module.css";
import { FaLocationDot } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";

export default function Contact({ t }) {
  return (
    <div className={styles.contact} id="contact">
      <div className={styles.title}>
        <p>{t.contactTitle}</p>
        <h3>{t.contactSubtitle}</h3>
        <p>{t.contactDesc}</p>
      </div>
      <div className={styles.content}>
        <div className={styles.rightSide}>
          <strong>
            <span><FaLocationDot /></span>
            <span>{t.address}</span>
          </strong>
          <strong>
            <span><IoCall /></span>
            <span>{t.phone1}</span>
          </strong>
          <strong>
            <span><IoCall /></span>
            <span>{t.phone2}</span>
          </strong>
          <strong>
            <span><IoCall /></span>
            <span>{t.phone3}</span>
          </strong>
          <strong>
            <span><IoCall /></span>
            <span>{t.phone4}</span>
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
