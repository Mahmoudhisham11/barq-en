'use client';
import styles from './styles.module.css';
import logo from "../../public/images/logo.png";
import Image from 'next/image';
import Link from 'next/link';
import { FaBarsStaggered } from "react-icons/fa6";
import { useState } from 'react';

function Header() {
    const [active, setActive] = useState(false)
    return(
        <div className={styles.headerContainer}>
            <div className={styles.headerBox}>
                <div className={styles.header}>
                    <div className={styles.rightSide}>
                        <Link href={"https://barq.visionsubscribe.com/FollowUpOreders"} className={styles.contact}>متابعة الشحنات</Link>
                    </div>
                    <div className={styles.middelSide}>
                        <Link href={"/"} className={styles.headerLink}>الصفحة الرئيسية</Link>
                        <Link href={"/"} className={styles.headerLink}>من نحن</Link>
                        <Link href={"/"} className={styles.headerLink}>خدماتنا</Link>
                        <Link href={"/"} className={styles.headerLink}>اتصل بنا</Link>
                    </div>  
                    <div className={styles.leftSide}>
                        <Link href={"/"}>
                            <Image src={logo} fill style={{objectFit: 'cover'}} alt='logo'/>
                        </Link>
                    </div>

                </div>
            </div>
            <div className={active ? `${styles.moblieHeader} ${styles.active}` : `${styles.moblieHeader}`}>
                <div className={styles.head}>
                    <div className={styles.rightSide}>
                        <button onClick={() => setActive(active ? false : true)}><FaBarsStaggered/></button>
                    </div>
                    <div className={styles.leftSide}>
                        <Link href={"/"}>
                            <Image src={logo} fill style={{objectFit: 'cover'}} alt='logo' />
                        </Link>
                    </div>
                </div>
                <div className={styles.body} style={{display: active ? 'flex' : 'none'}}>
                    <Link href={"/"} className={styles.moblieLinks}>الصفحة الرئيسية</Link>
                    <Link href={"/"} className={styles.moblieLinks}>من نحن</Link>
                    <Link href={"/"} className={styles.moblieLinks}>خدماتنا</Link>
                    <Link href={"/"} className={styles.moblieLinks}>اتصل بنا</Link>
                    <Link href={"https://barq.visionsubscribe.com/FollowUpOreders"} className={styles.moblieLinks}>متابعة الشحنات</Link>

                </div>
            </div>
        </div>
    )    
}

export default Header;