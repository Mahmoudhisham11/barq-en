'use client';
import styles from "./styles.module.css";
import { IoIosCall } from "react-icons/io";
import { TbTruckDelivery } from "react-icons/tb";
import { GrMoney } from "react-icons/gr";

function Services() {
    return(
        <div className={styles.about}>
            <div className={styles.title}>
                <p>خدماتنا</p>
                <h3>لما تختار العمل مع برق</h3>
                <p>لان برق ستجعل توصيل شحناتك اسهل باستخدام المميزات اللتي نملكها</p>
            </div>
            <div className={styles.content}>
                <div className={styles.contentContainer}>
                    <div className={styles.card}>
                        <div className={styles.cardTitle}><strong><IoIosCall/></strong></div>
                        <div className={styles.cardContent}>
                            <div className={styles.cardHead}>
                                <h3>خدمة العملاء</h3>
                            </div>
                            <div className={styles.cardBody}>
                                <p>لدينا فريق متخصص لخدمة العملاء لحل جميع مشاكل عملاءنا ومتابعة عملاءنا لحظة بلحظة في ادارة شحناتهم</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.card}>
                        <div className={styles.cardTitle}><strong><TbTruckDelivery/></strong></div>
                        <div className={styles.cardContent}>
                            <div className={styles.cardHead}>
                                <h3>متابعة الشحنات والحسابات</h3>
                            </div>
                            <div className={styles.cardBody}>
                                <p>
                                    من خلال حسابك على برنامج الشركة
                                    هتقدر تتابع شحناتك وتشوف وتعرف كل شحنة ليك معانا فين وحالتها ايه
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.card}>
                        <div className={styles.cardTitle}><strong><GrMoney/></strong></div>
                        <div className={styles.cardContent}>
                            <div className={styles.cardHead}>
                                <h3>التحصيل</h3>
                            </div>
                            <div className={styles.cardBody}>
                                <p>يوفر الحماية الى حزمتك مما يضيف الامان عند شحن البضائع</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Services;