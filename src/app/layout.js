import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ThemeProvider } from "./ThemeProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Sakthi M",
  description: "Personal portfolio ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.style}>
        <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
        >

        <div className="w-full ">
          <Navbar />
          {children}
          <Footer/>
        </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
