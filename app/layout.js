import Topbar from "@/components/Topbar";
import "./globals.css";
import { Inter } from "next/font/google";
import SideCustomScrollbar from "@/components/SideCustomScrollbar";
import Footer from "@/components/Footer";
import TopMenu from "@/components/TopMenu";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Musee Musical",
  description: "Musée Musical was established in 1842. Explore our wide range of guitars, drums, Pianos, Music books, and Music instrument accessories online at the best price.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="main-content">
          <SideCustomScrollbar/>
          <Topbar />
          <TopMenu/>
          {children}
          <Footer/>
        </div>
      </body>
    </html>
  );
}
