'use client';
import { useSearchParams } from "next/navigation";
import styles from "./styles.module.css";
import ar from "../../locales/ar.json";
import en from "../../locales/en.json";
import Link from "next/link";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

function Footer() {
    const searchParams = useSearchParams();
    const locale = searchParams.get("locale") || "en";
    const t = locale === "ar" ? ar : en;
    return(
        <div className={styles.footerContainer}>
            <div className={styles.footer}>
                <div className={styles.footerContent}>
                    <div className={styles.title}>
                        <h3>{t.footerTitleP1} <span>{t.footerTitleP2}</span> {t.footerTitleP3}</h3>
                    </div>
                    <div className={styles.linkContainer}>
                        <p>{t.contactTitle}</p>
                        <p>{t.address}</p>
                        <p>{t.phone1}</p>
                        <p>{t.phone2}</p>
                        <p>{t.phone3}</p>
                        <p>{t.phone4}</p>
                    </div>
                    <div className={styles.linkContainer}>
                        <p>{t.footerLinkTitle}</p>
                        <Link href={"#home"} className={styles.Links}>{t.homeLink}</Link>
                        <Link href={"#about"} className={styles.Links}>{t.aboutLink}</Link>
                        <Link href={"#services"} className={styles.Links}>{t.servicesLink}</Link>
                        <Link href={"#contact"} className={styles.Links}>{t.contactLink}</Link>
                    </div>
                </div>
                <div className={styles.icons}>
                    <Link href={"/"} className={styles.iconsLinks}><FaInstagram/></Link>
                    <Link href={"/"} className={styles.iconsLinks}><FaFacebookF/></Link>
                </div>
                <hr style={{width: '100%'}} />
                <div className={styles.cobyRights}>
                    <h4>&copy; {t.copyRight}</h4>
                    <p>{t.companyName} DEVORIA</p>
                </div>
            </div>
        </div>
    )
}

export default Footer;