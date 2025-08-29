import "./globals.css"
import { Tajawal, Josefin_Sans } from "next/font/google"

// إعداد الخطوط مع تحديد الأوزان المتاحة
const tajawal = Tajawal({
  subsets: ["arabic"],
  weight: ["200","300","400","500","700","800","900"],
  variable: "--font-tajawal"
})

const josefin = Josefin_Sans({
  subsets: ["latin"],
  weight: ["100","200","300","400","500","600","700"],
  variable: "--font-josefin"
})

export const metadata = {
  title: "Barq",
  description: "شحن وتوصيل الاطعمه · شحن وتوصيل الملابس · شحن وتوصيل الاجهزة الكهربائية · شحن وتوصيل الادوات المنزلية · شحن وتوصيل المواد القابلة للكسر",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className={`${josefin.variable} main`}>
        {children}
      </body>
    </html>
  )
}
