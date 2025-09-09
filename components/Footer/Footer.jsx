'use client';
import styles from "./styles.module.css";
import Link from "next/link";
import { FaFacebookF, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <div className={styles.footerContainer}>
      <div className={styles.footer}>
        <div className={styles.footerContent}>
          <div className={styles.title}>
            <h3>With <span>BARQ,</span> the fastest shipment in Egypt from Cairo and Giza to Alexandria, Lower Egypt, Hurghada and Upper Egypt</h3>
          </div>
          <div className={styles.linkContainer}>
            <p>Contact us</p>
            <p>Ezbet Alaa El-Din - Khusus - Qalyubia</p>
            <p>+20 105 582 8222</p>
            <p>+20 122 223 3666</p>
            <p>+20 112 678 4187</p>
          </div>
          <div className={styles.linkContainer}>
            <p>Fast Links</p>
            <Link href={"#home"} className={styles.Links}>Home</Link>
            <Link href={"#about"} className={styles.Links}>About us</Link>
            <Link href={"#services"} className={styles.Links}>Services</Link>
            <Link href={"#contact"} className={styles.Links}>Contact us</Link>
          </div>
        </div>
        <div className={styles.icons}>
          <Link href={"https://www.instagram.com/barq.shipping?igsh=MXh0bm9vb2gzbWhuYQ=="} target="_blank" className={styles.iconsLinks}><FaInstagram/></Link>
          <Link href={"https://www.facebook.com/share/1B5jhDctVv/"} target="_blank" className={styles.iconsLinks}><FaFacebookF/></Link>
        </div>
        <hr style={{ width: '100%' }} />
        <div className={styles.cobyRights}>
          <h4>&copy; Licensed copy of BARQ Company. All rights reserved.</h4>
          <p>Designed By: DEVORIA</p>
        </div>
      </div>
    </div>
  );
}
