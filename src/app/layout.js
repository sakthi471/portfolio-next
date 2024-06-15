import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Sakthi M",
  description: "Personal portfolio ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="w-full ">
          <Navbar />
          {children}
          <Footer/>
        </div>


      </body>
    </html>
  );
}
