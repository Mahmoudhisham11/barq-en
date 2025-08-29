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
  description: "Landing Page for Barq Shipping",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${josefin.variable} main`}>
        {children}
      </body>
    </html>
  )
}
