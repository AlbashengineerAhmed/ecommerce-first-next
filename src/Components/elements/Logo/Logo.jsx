import Link from "next/link";
import './Logo.css'
import { Montserrat} from 'next/font/google'


const LogoFont = Montserrat({ 
  subsets: ['latin'],
  weight:["700"]
})
export default function Logo() {
  return (
    <Link href="/" className={`logo ${LogoFont.className}`}>HEXASHOP</Link>
  )
}
