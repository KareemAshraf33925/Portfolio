import type { Metadata } from "next";
import { Macondo } from "next/font/google";
import "./globals.css";
import Header from "@/components/layoute/Header";
import HomePage from "@/components/ui/HomePage";
import About from "@/components/ui/About";
import Skills from "@/components/ui/Skills";
import ContactUs from "@/components/ui/ContactUs";
import Footer from "@/components/layoute/Footer";
import Link from "next/link";
import Sidesocial from "@/components/ui/Sidesocial";

const macondo = Macondo({
  weight: ["400"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "This portfolio represents my journey as a Frontend Developer, where I turn designs into clean, interactive, and performant web experiences using Next.js and modern frontend tools",
  keywords:
    "Frontend Developer, Next.js Developer, React Developer, Web Developer,JavaScript, TypeScript, Next.js Portfolio, Responsive Web Design,Modern UI, Performance Optimization, SEO Friendly Websites",
  icons: {
    icon: "/assets/sidebar.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* fontawesome cdn */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/7.0.1/css/all.min.css"
          integrity="sha512-2SwdPD6INVrV/lHTZbO2nodKhrnDdJK9/kg2XD1r9uGqPo1cUbujc+IYdlYdEErWNu69gVcYgdxlmVmzTWnetw=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </head>
      <body className={`${macondo.className} antialiased`}>
        <Header />
        <HomePage />
        <About />
        <Skills />
        <div className="bg-black">
          <ul
            className="flex justify-center items-center gap-5 md:gap-20 flex-wrap bg-transparent
          shadow-md mx-auto
          border border-white rounded-2xl
          "
            style={{ padding: "15px 0", margin: "0 50px" }}
          >
            <Link
              href={"/"}
              className="text-white font-semibold text-lg
            transition-all duration-100 hover:scale-110"
            >
              Next.js
            </Link>
            <Link
              href={"/react"}
              className="text-white font-semibold text-lg
            transition-all duration-100 hover:scale-110"
            >
              React.js
            </Link>
            <Link
              href={"/vainail"}
              className="text-white font-semibold text-lg
            transition-all duration-100 hover:scale-110"
            >
              Html&Css&Javascript
            </Link>
          </ul>
        </div>
        {children}
        <ContactUs />
        <Sidesocial />
        <Footer />
      </body>
    </html>
  );
}
