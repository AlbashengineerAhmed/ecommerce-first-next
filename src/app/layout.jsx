import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/Components/Navbar/Navbar";
import Footer from "@/Components/Footer/Footer";
import { ThemeProvider } from "@/context/ThemeContext";

const bodyFont = Montserrat({
  subsets: ["latin"],
  weight: ["400", "900", "700"],
});

export const metadata = {
  title: "Hexashop - Home",
  description:
    "Explore a wide range of products at unbeatable prices. Your one-stop e-commerce destination for shopping!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={bodyFont.className}>
        <ThemeProvider>
          <div className="global-container">
            <Navbar />
            {children}
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
