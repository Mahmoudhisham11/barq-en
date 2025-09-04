'use client'
import { useRouter, usePathname, useSearchParams } from "next/navigation"
import { useEffect, useRef, useState } from "react"
import { FaBars } from "react-icons/fa6";
import gsap from "gsap"
import ar from "../../locales/ar.json"
import en from "../../locales/en.json"
import styles from "./styles.module.css"
import Image from "next/image"
import logo from "../../public/images/logo.png"
import Link from "next/link"
import egypt from "../../public/images/egypt.png"
import uk from "../../public/images/uk.png"

export default function Header() {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const [locale, setLocale] = useState(searchParams.get("locale") || "en")
  const t = locale === "ar" ? ar : en

  const menuRef = useRef(null)
  const linksRef = useRef([])
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  // تغيير اتجاه الصفحة عند تغير اللغة
  useEffect(() => {
    document.documentElement.dir = locale === "ar" ? "rtl" : "ltr"
    document.body.classList.toggle("rtl", locale === "ar")
  }, [locale])

  // دالة تبديل اللغة
  const toggleLocale = () => {
    const newLocale = locale === "ar" ? "en" : "ar"
    const params = new URLSearchParams(window.location.search)
    params.set("locale", newLocale)
    router.push(`${pathname}?${params.toString()}`)
    setLocale(newLocale) // تحديث الحالة فورًا
  }

  // انيميشن فتح/قفل المينيو
  useEffect(() => {
    if (isOpen) {
      gsap.to(menuRef.current, { height: "auto", duration: 0.5, ease: "power2.out" })
      gsap.fromTo(
        linksRef.current,
        { y: -20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, stagger: 0.1, delay: 0.2 }
      )
    } else {
      gsap.to(menuRef.current, { height: 0, duration: 0.4, ease: "power2.in" })
    }
  }, [isOpen])

  // تغيير خلفية الهيدر عند التمرير
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header className={styles.headerContainer}>
      <div className={styles.header} style={{ backgroundColor: isScrolled ? 'black' : 'transparent' }}>
        <div className={styles.imageContainer}>
          <Image src={logo} fill style={{ objectFit: "cover" }} alt="logo" />
        </div>
        <div className={styles.linksContainer}>
          <Link href={"#home"} className={styles.headerLink}>{t.homeLink}</Link>
          <Link href={"#about"} className={styles.headerLink}>{t.aboutLink}</Link>
          <Link href={"#services"} className={styles.headerLink}>{t.servicesLink}</Link>
          <Link href={"#contact"} className={styles.headerLink}>{t.contactLink}</Link>
        </div>
        <div className={styles.langBtnContainer}>
          <button onClick={toggleLocale} className={styles.langBtn}>
            <Image
              src={locale === "ar" ? uk : egypt}
              alt="switch language"
              fill
              style={{ objectFit: 'cover' }}
            />
          </button>
        </div>
      </div>

      {/* Mobile Header */}
      <div className={styles.moblieHeader}>
        <div className={styles.head}>
          <div className={styles.mobileImage}>
            <Image src={logo} fill style={{ objectFit: "cover" }} alt="logo" />
          </div>
          <div className={styles.headerBtn}>
            <button onClick={() => setIsOpen(!isOpen)}>
              <FaBars />
            </button>
          </div>
        </div>
        <div
          className={styles.body}
          ref={menuRef}
          style={{ height: 0, overflow: "hidden" }}
        >
          {["home", "about", "services", "contact"].map((link, i) => (
            <Link
              key={link}
              href={`#${link}`}
              className={styles.moblieLinks}
              ref={(el) => (linksRef.current[i] = el)}
              onClick={() => setIsOpen(false)} // غلق المينيو بعد الضغط
            >
              {t[`${link}Link`]}
            </Link>
          ))}
          <div className={styles.moblieLangContainer}>
            <button onClick={toggleLocale} className={styles.langBtn}>
              <Image
                src={locale === "ar" ? uk : egypt}
                alt="switch language"
                fill
                style={{ objectFit: 'cover' }}
              />
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}
